(()=>{var l=(r,e)=>()=>(r&&(e=r(r=0)),e);var L=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var h,u=l(()=>{h=(r,e=100)=>{let t;return(...n)=>{clearTimeout(t),t=setTimeout(()=>r(n),e)}}});var m,f=l(()=>{m=r=>{var t;if(!r.hasChildNodes())return!1;let e=r.childNodes;return!(e.length===1&&e[0].nodeType===3&&(!e[0].nodeValue||((t=e[0].nodeValue)==null?void 0:t.trim())===""))}});var d,p=l(()=>{u();f();d=class extends HTMLElement{constructor(){super();this.base="/";this.port=3024;this.hostname="localhost"}connectedCallback(){try{this.getOptionsFromWindowObject(),this.setTemplate(),setTimeout(()=>{this.initSearch()},0)}catch(e){console.error("Error on create instance of Search"),console.error(e)}}getOptionsFromWindowObject(){window.remoteSearchOptions&&(window.remoteSearchOptions.hostname&&(this.hostname=window.remoteSearchOptions.hostname),window.remoteSearchOptions.port&&(this.port=window.remoteSearchOptions.port))}attributeChangedCallback(e,t,n){switch(e){case"base":return this.baseChangedCallback(t,n);case"port":return this.portChangedCallback(t,n);case"hostname":return this.hostChangedCallback(t,n);default:break}}baseChangedCallback(e,t){this.base=t}portChangedCallback(e,t){let n=Number(t);isNaN(n)||(this.port=n)}hostChangedCallback(e,t){this.hostname=t}initSearch(){let e=this.querySelector("input"),t=this.querySelector(".results");if(!e||!t)throw new Error("The input field or the result list wrapper was not found");let n=!1;t.addEventListener("mousedown",()=>n=!0),t.addEventListener("mouseup",()=>{n=!1,this.classList.remove("has-focus")}),e.addEventListener("focus",()=>this.classList.add("has-focus")),e.addEventListener("blur",()=>{n||(n=!1,this.classList.remove("has-focus"))}),this.bindEvents(t,e)}bindEvents(e,t){t.addEventListener("input",h(()=>{this.updateResults(e,t)},500));let n=!1;t.addEventListener("keydown",s=>{n=!0,s.key=="Enter"?this.gotoCurrentResult(e,t):s.key=="Escape"?t.blur():s.key=="ArrowUp"?this.setCurrentResult(e,-1):s.key==="ArrowDown"?this.setCurrentResult(e,1):n=!1}),t.addEventListener("keypress",s=>{n&&s.preventDefault()}),document.body.addEventListener("keydown",s=>{s.altKey||s.ctrlKey||s.metaKey||!t.matches(":focus")&&s.key==="/"&&(t.focus(),s.preventDefault())})}async updateResults(e,t){e.textContent="";let n=t.value.trim();if(n.length<2)return;this.classList.add("loading");let s=new URL(window.location.toString());s.hostname=this.hostname,s.port=this.port.toString(),s.pathname=`search/*${n}*`;let o=[];try{let a=await fetch(s.toString());o.push(...await a.json())}catch(a){console.error(a),this.classList.remove("ready"),this.classList.remove("loading"),this.classList.add("failure")}this.classList.add("ready"),this.classList.remove("loading");for(let a of o){let c=document.createElement("li");c.classList.value=a.classes;let i=document.createElement("a");i.href=this.base+a.url,i.classList.add("tsd-kind-icon"),i.innerHTML=a.name,c.append(i),e.appendChild(c)}}setCurrentResult(e,t){let n=e.querySelector(".current");if(!n)n=e.querySelector(t==1?"li:first-child":"li:last-child"),n&&n.classList.add("current");else{let s=n;if(t===1)do s=s.nextElementSibling||void 0;while(s instanceof HTMLElement&&s.offsetParent==null);else do s=s.previousElementSibling||void 0;while(s instanceof HTMLElement&&s.offsetParent==null);s&&(n.classList.remove("current"),s.classList.add("current"))}}gotoCurrentResult(e,t){let n=e.querySelector(".current");if(n||(n=e.querySelector("li:first-child")),n){let s=n.querySelector("a");s&&(window.location.href=s.href),t.blur()}}setTemplate(){let e=`
<div class="field">
    <label for="tsd-search-field" class="tsd-widget search no-caption">
        Search
    </label>
    <input type="text" id="tsd-search-field" />
</div>

<ul class="results">
    <li class="state loading">Preparing remote search server...</li>
    <li class="state failure">The remote search server is not available</li>
</ul>
    `;m(this)||(this.innerHTML=e)}}});var E,y=l(()=>{E=r=>{if(!r||typeof r!="function")return new Error("The callback is required!");let e=()=>{document.readyState!=="loading"&&(r(),document.attachEvent&&document.detachEvent("onreadystatechange",e),document.removeEventListener("DOMContentLoaded",e))};document.attachEvent&&document.attachEvent("onreadystatechange",e),document.addEventListener&&document.addEventListener("DOMContentLoaded",e),e()}});var b=L(()=>{p();y();var g=()=>{var o,a;let r=document.getElementById("tsd-search"),e=window.remoteSearchOptions||{};if(!r||!e.replaceElement)return;let t=r.getElementsByClassName("title"),n=r.dataset.base+"/",s=document.createElement("tsd-search");s.id="tsd-search",s.classList.add("table-cell"),s.setAttribute("base",n),e.hostname&&s.setAttribute("hostname",e.hostname),e.port&&s.setAttribute("port",e.port.toString()),(o=r.parentNode)==null||o.replaceChild(s,r),t.length>0&&(s.innerHTML+=(a=t.item(0))==null?void 0:a.outerHTML)};E(()=>{customElements.define("tsd-search",d),g()})});b();})();
