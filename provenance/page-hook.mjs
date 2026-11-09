import fs from 'node:fs/promises'
export default async function(page){
 const config=JSON.parse(process.env.RECALL_EXPECTATIONS),errors=[];page.on('pageerror',e=>errors.push(String(e)))
 let selectorFound=true;if(config.expectedSelector)selectorFound=await page.waitForSelector(config.expectedSelector,{timeout:45000}).then(()=>true).catch(()=>false)
 await page.waitForNetworkIdle({idleTime:700,timeout:10000}).catch(()=>{})
 await new Promise(r=>setTimeout(r,Math.min(config.observationMs||3000,60000)))
 const bodyText=await page.evaluate(()=>document.body?.innerText?.slice(0,15000)||'');const textFound=!config.expectedText||new RegExp(config.expectedText,'i').test(bodyText)
 const failedResources=await page.evaluate(()=>performance.getEntriesByType('resource').filter(x=>x.responseStatus>=400).map(x=>({url:x.name,status:x.responseStatus})))
 await page.screenshot({path:process.env.RECALL_SCREENSHOT,fullPage:false})
 await fs.writeFile(process.env.RECALL_PAGE_EVIDENCE,JSON.stringify({url:page.url(),title:await page.title(),bodyText,selectorFound,textFound,errors,failedResources,scope:'Selected route and readiness only; authenticated workflows and external integrations unverified.'},null,2)+'\n')
}
