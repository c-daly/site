import {test} from 'node:test';
import assert from 'node:assert/strict';
import {once} from 'node:events';
import {createPreviewServer} from './serve.mjs';

test('the preview serves real service pages, assets, and a proper 404',async t=>{
  const server=createPreviewServer();server.listen(0,'127.0.0.1');await once(server,'listening');
  t.after(()=>new Promise(resolve=>server.close(resolve)));
  const base=`http://127.0.0.1:${server.address().port}`;
  for(const slug of ['ai-opportunity-review','ai-project-plan','ai-project-review']){
    const response=await fetch(`${base}/services/${slug}/`);
    assert.equal(response.status,200);assert.match(await response.text(),/<h1>AI (Opportunity Review|Project Plan|Project Review)<\/h1>/);
  }
  const redirect=await fetch(`${base}/services/ai-project-plan`,{redirect:'manual'});
  assert.equal(redirect.status,308);assert.equal(redirect.headers.get('location'),'/services/ai-project-plan/');
  const inquiry=await fetch(`${base}/leads?topic=AI%20Project%20Plan`);
  assert.equal(inquiry.status,200);assert.equal(inquiry.url,`${base}/leads/?topic=AI%20Project%20Plan`);
  assert.match(await inquiry.text(),/<form id="inquiry-form"/);
  const pdf=await fetch(`${base}/assets/ai-adoption-whitepaper.pdf`,{method:'HEAD'});
  assert.equal(pdf.status,200);assert.equal(pdf.headers.get('content-type'),'application/pdf');assert.equal(await pdf.text(),'');
  const missing=await fetch(`${base}/missing-page`);
  assert.equal(missing.status,404);assert.match(await missing.text(),/<h1>Page not found\.<\/h1>/);
  const traversal=await fetch(`${base}/..%2fpackage.json`);
  assert.equal(traversal.status,400);
  const malformed=await fetch(`${base}/%XX`);
  assert.equal(malformed.status,400);
  const post=await fetch(base,{method:'POST'});
  assert.equal(post.status,405);
});
