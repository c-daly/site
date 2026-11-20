import {cp, mkdir, readFile, rename, rm, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {site, services} from '../src/content.mjs';
import {renderHome, renderService, renderNotFound} from '../src/templates.mjs';

const root=fileURLToPath(new URL('..',import.meta.url));
const destination=path.join(root,'dist');
const staging=path.join(root,'.cache','build');
await rm(staging,{recursive:true,force:true});
await mkdir(staging,{recursive:true});
await cp(path.join(root,'src','assets'),path.join(staging,'assets'),{recursive:true});
await cp(path.join(root,'src','styles.css'),path.join(staging,'styles.css'));
const home=await readFile(path.join(root,'src','home.html'),'utf8');
await writeFile(path.join(staging,'index.html'),renderHome(home));
for(const service of services){
  const folder=path.join(staging,'services',service.slug);
  await mkdir(folder,{recursive:true});
  await writeFile(path.join(folder,'index.html'),renderService(service));
}
await writeFile(path.join(staging,'404.html'),renderNotFound());
await writeFile(path.join(staging,'CNAME'),new URL(site.origin).hostname+'\n');
await writeFile(path.join(staging,'.nojekyll'),'');
await writeFile(path.join(staging,'robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`);
const urls=['/',...services.map(s=>`/services/${s.slug}/`)];
await writeFile(path.join(staging,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(p=>`  <url><loc>${site.origin}${p}</loc></url>`).join('\n')}\n</urlset>\n`);
await rm(destination,{recursive:true,force:true});
await rename(staging,destination);
console.log(`Built ${urls.length} pages for ${site.origin} in dist/.`);
