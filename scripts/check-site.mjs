import {readFile, readdir, stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {site, services} from '../src/content.mjs';

const root=fileURLToPath(new URL('../dist/',import.meta.url));
async function files(dir){return (await Promise.all((await readdir(dir,{withFileTypes:true})).map(async e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]))).flat();}
const htmlFiles=(await files(root)).filter(f=>f.endsWith('.html'));
assert.equal(htmlFiles.length,services.length+2,'Expected homepage, three services, and 404 page');
let checkedLinks=0;
for(const file of htmlFiles){
  const html=await readFile(file,'utf8');
  const local='/'+path.relative(root,file).replace(/index\.html$/,'');
  assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,`${local}: one H1`);
  assert.match(html,/<html lang="en">/);
  assert.match(html,/<meta name="description" content="[^"]+">/);
  assert.ok(html.includes(`rel="canonical" href="${site.origin}${local}"`),`${local}: canonical domain`);
  assert.doesNotMatch(html,/\{\{|Alex Robbins|Northwind Robotics|Civic Systems Lab|Compare the looks|Design studies|class="study-bar"/);
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
assert.equal((sitemap.match(/<loc>/g)||[]).length,4);
assert.ok((await readFile(path.join(root,'assets','ai-adoption-whitepaper.pdf'))).subarray(0,5).equals(Buffer.from('%PDF-')));
console.log(`Checked ${htmlFiles.length} pages, ${checkedLinks} internal links, metadata, domain files, and the white paper.`);
