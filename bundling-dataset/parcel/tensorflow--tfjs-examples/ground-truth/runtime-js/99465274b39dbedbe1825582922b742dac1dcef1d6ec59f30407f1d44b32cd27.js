!function(e,t,a,n,s){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof r.parcelRequire30ba&&r.parcelRequire30ba,i=o.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,a){if(!i[t]){if(!e[t]){var n="function"==typeof r.parcelRequire30ba&&r.parcelRequire30ba;if(!a&&n)return n(t,!0);if(o)return o(t,!0);if(l&&"string"==typeof t)return l(t);var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}u.resolve=function(a){var n=e[t][1][a];return null!=n?n:a},u.cache={};var d=i[t]=new c.Module(t);e[t][0].call(d.exports,u,d,d.exports,this)}return i[t].exports;function u(e){var t=u.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=i,c.parent=o,c.register=function(t,a){e[t]=[function(e,t){t.exports=a},{}]},Object.defineProperty(c,"root",{get:function(){return r.parcelRequire30ba}}),r.parcelRequire30ba=c;for(var d=0;d<t.length;d++)c(t[d]);var u=c(a);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd&&define((function(){return u}))}({"7Ec60":[function(e,t,a){
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var n=e("@tensorflow/tfjs"),s=e("./data"),r=e("./ui");function o(){let e;const t=r.getModelTypeId();if("ConvNet"===t)e=function(){const e=n.sequential();return e.add(n.layers.conv2d({inputShape:[s.IMAGE_H,s.IMAGE_W,1],kernelSize:3,filters:16,activation:"relu"})),e.add(n.layers.maxPooling2d({poolSize:2,strides:2})),e.add(n.layers.conv2d({kernelSize:3,filters:32,activation:"relu"})),e.add(n.layers.maxPooling2d({poolSize:2,strides:2})),e.add(n.layers.conv2d({kernelSize:3,filters:32,activation:"relu"})),e.add(n.layers.flatten({})),e.add(n.layers.dense({units:64,activation:"relu"})),e.add(n.layers.dense({units:10,activation:"softmax"})),e}();else{if("DenseNet"!==t)throw new Error(`Invalid model type: ${t}`);e=function(){const e=n.sequential();return e.add(n.layers.flatten({inputShape:[s.IMAGE_H,s.IMAGE_W,1]})),e.add(n.layers.dense({units:42,activation:"relu"})),e.add(n.layers.dense({units:10,activation:"softmax"})),e}()}return e}let i;r.setTrainButtonCallback((async()=>{r.logStatus("Loading MNIST data..."),await async function(){i=new s.MnistData,await i.load()}(),r.logStatus("Creating model...");const e=o();e.summary(),r.logStatus("Starting model training..."),await async function(e,t){r.logStatus("Training model..."),e.compile({optimizer:"rmsprop",loss:"categoricalCrossentropy",metrics:["accuracy"]});const a=r.getTrainEpochs();let s=0;const o=i.getTrainData(),l=i.getTestData(),c=Math.ceil(.85*o.xs.shape[0]/320)*a;let d;await e.fit(o.xs,o.labels,{batchSize:320,validationSplit:.15,epochs:a,callbacks:{onBatchEnd:async(e,a)=>{s++,r.logStatus(`Training... (${(s/c*100).toFixed(1)}% complete). To stop training, refresh or close page.`),r.plotLoss(s,a.loss,"train"),r.plotAccuracy(s,a.acc,"train"),t&&e%10==0&&t("onBatchEnd",e,a),await n.nextFrame()},onEpochEnd:async(e,a)=>{d=a.val_acc,r.plotLoss(s,a.val_loss,"validation"),r.plotAccuracy(s,a.val_acc,"validation"),t&&t("onEpochEnd",e,a),await n.nextFrame()}}});const u=100*e.evaluate(l.xs,l.labels)[1].dataSync()[0],p=100*d;r.logStatus(`Final validation accuracy: ${p.toFixed(1)}%; Final test accuracy: ${u.toFixed(1)}%`)}(e,(()=>async function(e){const t=i.getTestData(100);n.tidy((()=>{const a=e.predict(t.xs),n=Array.from(t.labels.argMax(1).dataSync()),s=Array.from(a.argMax(1).dataSync());r.showTestResults(t,s,n)}))}(e)))}))},{"./data":"abOsT","./ui":"lf47y"}],abOsT:[function(e,t,a){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(a),n.export(a,"IMAGE_H",(()=>r)),n.export(a,"IMAGE_W",(()=>o)),n.export(a,"MnistData",(()=>u));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var s=e("@tensorflow/tfjs");const r=28,o=28,i=r*o,l=10,c=65e3,d=55e3;class u{async load(){const e=new Image,t=document.createElement("canvas"),a=t.getContext("2d"),n=new Promise(((n,s)=>{e.crossOrigin="",e.onload=()=>{e.width=e.naturalWidth,e.height=e.naturalHeight;const s=new ArrayBuffer(c*i*4),r=5e3;t.width=e.width,t.height=r;for(let n=0;n<13;n++){const o=new Float32Array(s,n*i*r*4,i*r);a.drawImage(e,0,n*r,e.width,r,0,0,e.width,r);const l=a.getImageData(0,0,t.width,t.height);for(let e=0;e<l.data.length/4;e++)o[e]=l.data[4*e]/255}this.datasetImages=new Float32Array(s),n()},e.src="https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png"})),s=fetch("https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8"),[r,o]=await Promise.all([n,s]);this.datasetLabels=new Uint8Array(await o.arrayBuffer()),this.trainImages=this.datasetImages.slice(0,i*d),this.testImages=this.datasetImages.slice(i*d),this.trainLabels=this.datasetLabels.slice(0,55e4),this.testLabels=this.datasetLabels.slice(55e4)}getTrainData(){return{xs:s.tensor4d(this.trainImages,[this.trainImages.length/i,r,o,1]),labels:s.tensor2d(this.trainLabels,[this.trainLabels.length/l,l])}}getTestData(e){let t=s.tensor4d(this.testImages,[this.testImages.length/i,r,o,1]),a=s.tensor2d(this.testLabels,[this.testLabels.length/l,l]);return null!=e&&(t=t.slice([0,0,0,0],[e,r,o,1]),a=a.slice([0,0],[e,l])),{xs:t,labels:a}}constructor(){}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"cpyyt"}],cpyyt:[function(e,t,a){a.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},a.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.exportAll=function(e,t){return Object.keys(e).forEach((function(a){"default"===a||"__esModule"===a||t.hasOwnProperty(a)||Object.defineProperty(t,a,{enumerable:!0,get:function(){return e[a]}})})),t},a.export=function(e,t,a){Object.defineProperty(e,t,{enumerable:!0,get:a})}},{}],lf47y:[function(e,t,a){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(a),n.export(a,"logStatus",(()=>l)),n.export(a,"trainingLog",(()=>c)),n.export(a,"showTestResults",(()=>d)),n.export(a,"plotLoss",(()=>m)),n.export(a,"plotAccuracy",(()=>h)),n.export(a,"draw",(()=>y)),n.export(a,"getModelTypeId",(()=>b)),n.export(a,"getTrainEpochs",(()=>x)),n.export(a,"setTrainButtonCallback",(()=>v));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var s=e("@tensorflow/tfjs-vis");const r=document.getElementById("status"),o=document.getElementById("message"),i=document.getElementById("images");function l(e){r.innerText=e}function c(e){o.innerText=`${e}\n`,console.log(e)}function d(e,t,a){const n=e.xs.shape[0];i.innerHTML="";for(let s=0;s<n;s++){const n=e.xs.slice([s,0],[1,e.xs.shape[1]]),r=document.createElement("div");r.className="pred-container";const o=document.createElement("canvas");o.className="prediction-canvas",y(n.flatten(),o);const l=document.createElement("div"),c=t[s],d=c===a[s];l.className="pred "+(d?"pred-correct":"pred-incorrect"),l.innerText=`pred: ${c}`,r.appendChild(l),r.appendChild(o),i.appendChild(r)}}const u=document.getElementById("loss-label"),p=document.getElementById("accuracy-label"),f=[[],[]];function m(e,t,a){f["train"===a?0:1].push({x:e,y:t});const n=document.getElementById("loss-canvas");s.render.linechart(n,{values:f,series:["train","validation"]},{xLabel:"Batch #",yLabel:"Loss",width:400,height:300}),u.innerText=`last loss: ${t.toFixed(3)}`}const g=[[],[]];function h(e,t,a){const n=document.getElementById("accuracy-canvas");g["train"===a?0:1].push({x:e,y:t}),s.render.linechart(n,{values:g,series:["train","validation"]},{xLabel:"Batch #",yLabel:"Accuracy",width:400,height:300}),p.innerText=`last accuracy: ${(100*t).toFixed(1)}%`}function y(e,t){const[a,n]=[28,28];t.width=a,t.height=n;const s=t.getContext("2d"),r=new ImageData(a,n),o=e.dataSync();for(let e=0;e<n*a;++e){const t=4*e;r.data[t+0]=255*o[e],r.data[t+1]=255*o[e],r.data[t+2]=255*o[e],r.data[t+3]=255}s.putImageData(r,0,0)}function b(){return document.getElementById("model-type").value}function x(){return Number.parseInt(document.getElementById("train-epochs").value)}function v(e){const t=document.getElementById("train"),a=document.getElementById("model-type");t.addEventListener("click",(()=>{t.setAttribute("disabled",!0),a.setAttribute("disabled",!0),e()}))}},{"@parcel/transformer-js/src/esmodule-helpers.js":"cpyyt"}]},["7Ec60"],"7Ec60");
//# sourceMappingURL=index.b1459631.js.map
