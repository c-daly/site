import {readFile, readdir, stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {site, services} from '../src/content.mjs';

const root=fileURLToPath(new URL('../dist/',import.meta.url));
async function files(dir){return (await Promise.all((await readdir(dir,{withFileTypes:true})).map(async e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]))).flat();}
const htmlFiles=(await files(root)).filter(f=>f.endsWith('.html'));
const containerUrl='https://www.googletagmanager.com/gtm.js?id=GTM-KRBWMCPT';
const expectedHeadStart=`<head><script async src="${containerUrl}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
</script>`;
assert.equal(htmlFiles.length,services.length+4,'Expected homepage, inquiry page, privacy policy, service pages, and 404 page');
let checkedLinks=0;
for(const file of htmlFiles){
  const html=await readFile(file,'utf8');
  const local='/'+path.relative(root,file).replace(/index\.html$/,'');
  assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,`${local}: one H1`);
  assert.match(html,/<html lang="en">/);
  assert.ok(html.includes(expectedHeadStart),`${local}: Tag Manager loader and initializer must open the head`);
  assert.equal(html.split(containerUrl).length-1,1,`${local}: expected one Tag Manager loader`);
  assert.match(html,/<meta name="description" content="[^"]+">/);
  assert.ok(html.includes(`rel="canonical" href="${site.origin}${local}"`),`${local}: canonical domain`);
  assert.doesNotMatch(html,/\{\{|Alex Robbins|Northwind Robotics|Civic Systems Lab|Compare the looks|Design studies|class="study-bar"/);
  assert.doesNotMatch(html,/mailto:[^"]*\?subject=/,`${local}: discussion links should open the inquiry form`);
  assert.match(html,/<footer\b[^>]*>[\s\S]*?href="\/privacy\/"[\s\S]*?<\/footer>/,`${local}: footer links to the privacy policy`);
  if(local==='/leads/'){
    assert.match(html,/<form\b[^>]*>[\s\S]*?href="\/privacy\/"[\s\S]*?<\/form>/,'Privacy policy is available at the point of collection');
    assert.match(html,/<form\b[^>]*action="https:\/\/api\.web3forms\.com\/submit"[^>]*method="post"/);
    assert.match(html,/name="access_key" value="[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}"/i,'Configure the public Web3Forms access key for the inquiry form');
  }
  const schema=html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/);
  assert.ok(schema,`${local}: structured data`);assert.equal(JSON.parse(schema[1]).url,site.origin);
  for(const image of html.matchAll(/<img\b[^>]*>/g))assert.match(image[0],/\balt="[^"]*"/);
  for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
    const raw=match[1].replaceAll('&amp;','&');
    const url=new URL(raw,new URL(local,site.origin));
    if(url.protocol==='mailto:'){assert.equal(url.pathname,site.email);continue;}
    if(url.origin!==site.origin)continue;
    let target=path.join(root,decodeURIComponent(url.pathname));
    const info=await stat(target).catch(()=>null);
    assert.ok(info,`${local}: missing ${url.pathname}`);
    if(info.isDirectory())target=path.join(target,'index.html');
    await stat(target);
    if(url.hash){const body=await readFile(target,'utf8');assert.ok(body.includes(`id="${url.hash.slice(1)}"`),`${local}: missing anchor ${url.href}`);}
    checkedLinks++;
  }
}
assert.equal((await readFile(path.join(root,'CNAME'),'utf8')).trim(),'defiantduck.com');
assert.match(await readFile(path.join(root,'robots.txt'),'utf8'),/Sitemap: https:\/\/defiantduck\.com\/sitemap\.xml/);
const sitemap=await readFile(path.join(root,'sitemap.xml'),'utf8');
assert.equal((sitemap.match(/<loc>/g)||[]).length,services.length+3);
assert.ok(sitemap.includes(`<loc>${site.origin}/leads/</loc>`));
assert.ok(sitemap.includes(`<loc>${site.origin}/privacy/</loc>`));
assert.ok((await readFile(path.join(root,'assets','ai-adoption-whitepaper.pdf'))).subarray(0,5).equals(Buffer.from('%PDF-')));
console.log(`Checked ${htmlFiles.length} pages, ${checkedLinks} internal links, metadata, domain files, and the white paper.`);
