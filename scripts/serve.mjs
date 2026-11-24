import http from 'node:http';
import path from 'node:path';
import {readFile, stat} from 'node:fs/promises';
import {watch} from 'node:fs';
import {spawn} from 'node:child_process';
import {fileURLToPath, pathToFileURL} from 'node:url';

const projectRoot=fileURLToPath(new URL('..',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png','.svg':'image/svg+xml','.pdf':'application/pdf','.ttf':'font/ttf','.woff2':'font/woff2','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8'};

export function createPreviewServer({directory=path.join(projectRoot,'dist')}={}) {
  const root=path.resolve(directory);
  return http.createServer(async (request,response)=>{
    if(!['GET','HEAD'].includes(request.method)){
      response.writeHead(405,{'Allow':'GET, HEAD'});response.end();return;
    }
    let url,pathname;
    try { url=new URL(request.url,'http://localhost');pathname=decodeURIComponent(url.pathname); }
    catch { response.writeHead(400);response.end('Invalid path');return; }
    const target=path.resolve(root,'.'+pathname);
    const relative=path.relative(root,target);
    if(relative.startsWith('..')||path.isAbsolute(relative)||pathname.includes('\0')||pathname.includes('\\')){
      response.writeHead(400);response.end('Invalid path');return;
    }
    try {
      let file=target;
      const info=await stat(file);
      if(info.isDirectory()) {
        if(!pathname.endsWith('/')){
          response.writeHead(308,{'Location':url.pathname.replace(/^\/+/, '/')+'/'+url.search});response.end();return;
        }
        file=path.join(file,'index.html');
      }
      const bytes=await readFile(file);
      response.writeHead(200,{'Content-Type':types[path.extname(file)]??'application/octet-stream','Content-Length':bytes.length,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
      response.end(request.method==='HEAD'?undefined:bytes);
    } catch(error) {
      if(!['ENOENT','ENOTDIR','EISDIR'].includes(error.code))console.error(error.message);
      const page=await readFile(path.join(root,'404.html')).catch(()=>Buffer.from('Page not found'));
      response.writeHead(404,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});
      response.end(request.method==='HEAD'?undefined:page);
    }
  });
}

if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href) {
  const port=Number(process.env.PORT??4200);
  const server=createPreviewServer();
  server.on('error',error=>{console.error(error.message);process.exitCode=1;});
  server.listen(port,'127.0.0.1',()=>console.log(`Defiant Duck is running at http://localhost:${port}/`));
  if(process.argv.includes('--watch')) {
    let timeout,building=false,pending=false;
    const rebuild=()=>{
      if(building){pending=true;return;}
      building=true;
      const child=spawn(process.execPath,['scripts/build.mjs'],{cwd:projectRoot,stdio:'inherit'});
      child.on('exit',()=>{building=false;if(pending){pending=false;rebuild();}});
    };
    watch(path.join(projectRoot,'src'),{recursive:true},()=>{clearTimeout(timeout);timeout=setTimeout(rebuild,150);});
    console.log('Watching src/ for changes. Refresh the browser after a rebuild.');
  }
}
