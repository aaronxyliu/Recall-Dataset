import fs from 'node:fs/promises'
export default async function(page) {
 const errors=[];page.on('pageerror',e=>errors.push(String(e)))
 await page.waitForNetworkIdle({idleTime:700,timeout:15000}).catch(()=>{})
 await page.screenshot({path:process.env.RECALL_SCREENSHOT,fullPage:false})
 await fs.writeFile(process.env.RECALL_PAGE_EVIDENCE,JSON.stringify({url:page.url(),title:await page.title(),bodyText:await page.evaluate(()=>document.body?.innerText?.slice(0,10000)),errors,scope:'Landing route only; no authenticated workflows tested.'},null,2)+'\n')
}
