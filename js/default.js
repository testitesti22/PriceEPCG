var item,itemEmag,chart,cod,chartTitle,isIE11=!!window.MSInputMethodContext&&!!document.documentMode;document.addEventListener("DOMContentLoaded",function(){function e(e,t){m();var r=document.getElementById("phone-Data-chart"),c=window.screen.availWidth;r.innerHTML="";var u=document.getElementById("detItem");let s={};if(c>0){document.getElementById("optionsChart").style.display="flex",document.getElementById("help-content").style.display="none";let i=document.getElementById("round-menu-v1");getComputedStyle(i);let m=[],r=[],c=void 0,p=[];if(Chart.defaults.global.defaultFontColor="#ffffff",Chart.defaults.global.defaultColor="#ffffff",Chart.defaults.global.defaultFontFamily="myFirstFont","Product link"==item[2].trim()){u.insertAdjacentHTML("beforeend",'<a class="round-theme round-theme-white" href="'+item[3]+'" style="background: none !important; border: none !important;">Pc Garage</a>');for(let t=9;t<=item.length;t++){let i=a(item[t]),m=o(item[t]);if(!n(item[t]))break;if(parseInt(i)>parseInt(e))break;if(c==m||parseInt(i)<parseInt(e))continue;let r=l(item[t]),u=d(item[t]);c=m;let g=m+" "+r;p.push(g),s[g]={pcGarage:u,emag:0}}}if("Cod"==itemEmag[0].trim()){u.insertAdjacentHTML("beforeend",'|<a class="round-theme round-theme-white" href="'+itemEmag[3]+'" style="background: none !important; border: none !important;">Emag</a>'),c=void 0;for(let t=7;t<=itemEmag.length;t++){let i=a(itemEmag[t]),m=o(itemEmag[t]);if(!n(itemEmag[t]))break;if(parseInt(i)>parseInt(e))break;if(c==m||parseInt(i)<parseInt(e))continue;let r=l(itemEmag[t]),u=d(itemEmag[t]);c=m;let g=m+" "+r;p.push(g),s.label?s.label.emag=u:s[g]={pcGarage:0,emag:u}}}p.sort(),p.forEach(e=>{m.push(s[e].pcGarage),r.push(s[e].emag)});var g=document.getElementById("myChart").getContext("2d");(chart=new Chart(g,{type:t,data:{labels:p,datasets:[{label:"Pc Garage",data:m,borderColor:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(232, 126, 4, 0.4)",borderWidth:1},{label:"Emag",data:r,borderColor:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(44, 130, 201, 0.4)",borderWidth:1}]},options:{title:{display:!0,text:chartTitle},layout:{padding:{left:0,right:0,top:0,bottom:100}},responsive:!0,maintainAspectRatio:!1}})).canvas.parentNode.style.height="90%",chart.canvas.parentNode.style.width="93%"}else{currentDate=void 0,document.getElementById("help-content").style.display="none",document.getElementById("optionsChart").style.display="flex";for(let t=9;t<item.length;t++){let m=a(item[t]),c=o(item[t]);if(!n(item[t]))break;if(parseInt(m)>parseInt(e))break;if(currentDate==c||parseInt(m)<parseInt(e))continue;let u=i(item[t]),s=l(item[t]),g=d(item[t]);currentDate=c,r.insertAdjacentHTML("beforeend",'<div class="round-theme round-theme-white round-row round-shadow-default" style="margin-top: 5px;"><div class="round-col-12"><span>'+u+" | "+s+'</span></div><div class="round-col-12"><span>'+g+" RON</span></div></div>")}}}function t(){null!=chart&&chart.destroy(),document.getElementById("optionsChart").style.display="none",document.getElementById("detItem").innerHTML=""}function n(e){let t=e.split(" ");return null!=t[0]&&null!=t[1]&&null!=t[2]}function i(e){let t=e.split(" ")[0].split("/");return t=t[1]+"/"+t[0]+"/"+t[2]}function a(e){return e.split(" ")[0].split("/")[2]}function o(e){let t=e.split(" ")[0].split("/");return t=t[1]+"/"+t[0]}function l(e){let t=e.split(" ");return t=t[1]+" "+t[2]}function d(e){let t=e.split(" ")[3].replace(".","");return parseInt(t)}function m(){document.getElementById("round-notification").innerHTML=""}isIE11&&(document.getElementById("body").innerHTML=""),document.getElementById("searchButton").addEventListener("click",function(n){!async function(){if(cod=document.getElementById("search").value.replace("/","+--+"),"Product link"==(item=await fetch("./items/"+cod+".txt").then(e=>e.text()).then(e=>item=e.split("\n")))[2].trim())itemEmag=await fetch("./items-emag/"+(i=item[0],i.split("|")[1])+".txt").then(e=>e.text()).then(e=>itemEmag=e.split("\n"));else{itemEmag=await fetch("./items-emag/"+cod+".txt").then(e=>e.text()).then(e=>itemEmag=e.split("\n"));var n=await fetch("./items-pcgarage/"+cod+".txt").then(e=>e.text()).then(e=>item=e.split("\n"));item=await fetch("./items/"+n[0]+".txt").then(e=>e.text()).then(e=>item=e.split("\n"))}var i;if("Product link"==item[2].trim()||"Cod"==itemEmag[0].trim())chartTitle="Product link"==item[2].trim()?item[5].replace("&#039;&#039;","''"):itemEmag[5],t(),e(document.getElementById("year").value,document.getElementById("chartType").value);else{console.log("Item not found!");let e=document.getElementById("round-notification");m(),t(),e.insertAdjacentHTML("beforeend",'<div class="round-theme round-theme-white round-row round-shadow-default round-right" style="position: absolute; top: 10%; text-align: center; width: 60%; left: 20%;"><div class="round-col-8"> Codul '+cod+" nu exista</div></div>"),cod=void 0}closeMenu()}()}),document.getElementById("closeNotifButton").addEventListener("click",function(e){m()}),document.getElementById("chartType").addEventListener("change",function(n){t(),e(document.getElementById("year").value,document.getElementById("chartType").value)}),document.getElementById("limbaRomana").addEventListener("click",function(e){document.getElementById("searchButton").innerHTML="Cauta",document.getElementById("round-theme-button").innerHTML="Temă întunecată",document.getElementById("limba-ajutor").innerHTML="Ajutor",document.getElementById("limba-email").innerHTML="Email de contact";try{document.getElementById("limba-mesaj-swipe").innerHTML="Glisați la << pentru a deschide meniul."}catch{}document.getElementById("limba-tip-graf").innerHTML="Tip",document.getElementById("limba-optine-bare").innerHTML="Bare",document.getElementById("limba-optine-linie").innerHTML="Linie",document.getElementById("limba-an").innerHTML="An"}),document.getElementById("limbaEngleza").addEventListener("click",function(e){document.getElementById("searchButton").innerHTML="Search",document.getElementById("round-theme-button").innerHTML="Dark mode",document.getElementById("limba-ajutor").innerHTML="Help",document.getElementById("limba-email").innerHTML="Contact email";try{document.getElementById("limba-mesaj-swipe").innerHTML="Swipe << for menu"}catch{}document.getElementById("limba-tip-graf").innerHTML="Type",document.getElementById("limba-optine-bare").innerHTML="Bars",document.getElementById("limba-optine-linie").innerHTML="Line",document.getElementById("limba-an").innerHTML="Year"}),document.getElementById("limba-ajutor").addEventListener("click",function(e){closeMenu(),t(),document.getElementById("help-content").style.display="flex"})},!1);