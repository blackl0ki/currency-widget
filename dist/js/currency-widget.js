!function(){function o(){var e=false;this.options.container.style.background=this.options.backColor;var t=document.createElement("table");t.style.width="100%",t.style.border="1px solid "+this.options.borderColor,t.style.color=this.options.color;var o=document.createElement("thead");o.style.background=this.options.headColor;var n=document.createElement("tr");n.style.color=this.options.headTextColor,n.style.borderBottom="1px solid "+this.options.borderColor;var i=document.createElement("td");i.style.padding=this.options.padding,i.style.borderRight="1px solid "+this.options.borderColor,i.innerText="Döviz",n.appendChild(i);var r=document.createElement("td");r.style.padding=this.options.padding,r.style.borderRight="1px solid "+this.options.borderColor,r.innerText="Alış",n.appendChild(r);var d=document.createElement("td");d.style.padding=this.options.padding,d.innerText="Satış",n.appendChild(d),o.appendChild(n),t.appendChild(o);for(var s=document.createElement("tbody"),l=this.options.currencies.Tarih_Date.Currency,a=0;a<l.length;a++){var p=l[a];var c=p["@attributes"].Kod;if(this.options.selectedCurrencies.indexOf(c)>-1){if(p.BanknoteBuying["#text"]!==undefined){e=true;var h=document.createElement("tr");h.style.borderBottom="1px solid "+this.options.borderColor;var u=document.createElement("td");u.style.padding=this.options.padding;u.style.borderRight="1px solid "+this.options.borderColor;u.innerText=p.Isim["#text"];h.appendChild(u);var f=document.createElement("td");f.style.padding=this.options.padding;f.style.borderRight="1px solid "+this.options.borderColor;f.innerText=p.BanknoteBuying["#text"];h.appendChild(f);var m=document.createElement("td");m.style.padding=this.options.padding;m.innerText=p.BanknoteSelling["#text"];h.appendChild(m);s.appendChild(h)}else{var y=p.Isim["#text"]+" alış ve satış değeri bulunamadı!";console.log(y)}}}if(t.appendChild(s),e){this.options.container.appendChild(t)}}function l(e){var t={};if(e.nodeType==1){if(e.attributes.length>0){t["@attributes"]={};for(var o=0;o<e.attributes.length;o++){var n=e.attributes.item(o);t["@attributes"][n.nodeName]=n.nodeValue}}}else if(e.nodeType==3){t=e.nodeValue}if(e.hasChildNodes()){for(var i=0;i<e.childNodes.length;i++){var r=e.childNodes.item(i);var d=r.nodeName;if(typeof t[d]=="undefined"){t[d]=l(r)}else{if(typeof t[d].push=="undefined"){var s=t[d];t[d]=[];t[d].push(s)}t[d].push(l(r))}}}return t}this.CurrencyWidget=function(){arguments[0]&&"object"==typeof arguments[0]&&(this.options=function(e,t){var o;for(o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e}({url:"https://www.tcmb.gov.tr/kurlar/today.xml",containerId:null,container:null,currencies:null,selectedCurrencies:["USD","EUR"],padding:"8px",borderColor:"#eee",headColor:"#f5f5f5",headTextColor:"#333",backColor:"#fff",textColor:"#333"},arguments[0]))},CurrencyWidget.prototype.init=function(){this.options.container=document.getElementById(this.options.containerId),function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",function(){e.options.currencies=l(this.responseXML),o.call(e)}),t.open("GET",this.options.url,!1),t.send(null)}.call(this)}}();