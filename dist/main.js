(()=>{"use strict";var n={735:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const i=o},426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"html {\r\n  box-sizing: border-box;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: inherit;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\nul,\r\nli {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 0;\r\n}\r\nbutton {\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\np {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  height: 100vh;\r\n}",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],d=r.base?l[0]+r.base:l[0],c=i[d]||0,h="".concat(d," ").concat(c);i[d]=c+1;var u=t(h),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(e[u].references++,e[u].updater(p)):e.push({identifier:h,updater:o(p,r),references:1}),a.push(h)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var l=r(n,o),d=0;d<i.length;d++){var c=t(i[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),l=t.n(s),d=t(216),c=t.n(d),h=t(589),u=t.n(h),p=t(735),g={};g.styleTagTransform=u(),g.setAttributes=l(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=c(),e()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals;var f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=c(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class b extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.shadow.querySelector(".tag-list__close").addEventListener("click",(n=>{this.dispatchEvent(new CustomEvent("tagClosed",{detail:n.target.closest("main").getAttribute("index")}))}))}get tagContent(){return this.getAttribute("tagContent")}get tagIndex(){return this.getAttribute("index")}render(){this.shadow.innerHTML=`\n    <main class="tag-list" index="${this.tagIndex}">\n      <div class="tag-list__text">${this.tagContent}</div>\n      <button class="tag-list__close">❌</button>\n    </main>\n\n    <style>\n      html {\n        box-sizing: border-box;\n      }\n      *,\n      *:before,\n      *:after {\n        box-sizing: inherit;\n      }\n      .tag-list {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        width: 95%;\n        min-height: 40px;\n        padding: 5px 10px;\n        background-color: #F0F3F4;\n        border-radius: 10px;\n        margin: 10px auto;\n        font-size: 20px;\n      }\n      .tag-list__text {\n        max-width: 85%;\n        word-wrap: break-word;\n      }\n      .tag-list__close {\n        display: block;\n        padding: 0;\n        margin: 0 0 0 5px;\n        border: none;\n        border-radius: 100%;\n        background-color: transparent;\n        cursor: pointer;\n        font-size: 20px;\n        line-height: 0;\n      }\n    </style>\n    `}}class x extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}DOMmanipulations(){this.shadow.querySelector(".checkbox-button").addEventListener("click",this.changeReadonly.bind(this)),this.shadow.querySelector(".controll__button").addEventListener("click",this.addTag.bind(this)),this.shadow.querySelectorAll("tag-list-element").forEach((n=>{n.addEventListener("tagClosed",(n=>{const e=n.detail;this.deleteTag(e)}))}))}connectedCallback(){setTimeout((()=>customElements.define("tag-list-element",b))),null===window.localStorage.getItem("tag-list")&&window.localStorage.setItem("tag-list",""),this.tagList=window.localStorage.getItem("tag-list"),this.render(),this.DOMmanipulations()}static get observedAttributes(){return["readonly","tag-list"]}get readonly(){return this.getAttribute("readonly")}set readonly(n){this.setAttribute("readonly",n)}get tagList(){return this.getAttribute("tag-list")}set tagList(n){this.setAttribute("tag-list",n)}attributeChangedCallback(n,e,t){e!==t&&(this.render(),this.DOMmanipulations())}changeReadonly(){"false"===this.readonly?this.readonly="true":this.readonly="false"}addTag(){if("true"===this.readonly)return void alert('Set Readonly mode to "OFF"');const n=this.shadow.querySelector(".controll__input").value;if(!n)return;const e=[n,...window.localStorage.getItem("tag-list").split(",").filter((n=>n))].filter((n=>n)).join(",");window.localStorage.setItem("tag-list",e),this.shadow.querySelector(".controll__input").value="",this.tagList=e}deleteTag(n){if("true"===this.readonly)return void alert('Set Readonly mode to "OFF"');const e=window.localStorage.getItem("tag-list").split(",").filter((n=>n));e.splice(n,1);const t=e.filter((n=>n)).join(",");window.localStorage.setItem("tag-list",t),this.tagList=t}render(){const n=this.tagList?this.tagList?.split(",").map(((n,e)=>`<tag-list-element tagContent="${n}" index="${e}"></tag-list-element>`)).join(""):'<p class="tag-list__empty">there is no tags yet...</p>';this.shadow.innerHTML=`\n    <main class="container">\n      <section class="controll">\n          <input class="controll__input" type="text" placeholder="Your tag...">\n          <button class="controll__button">Add</button>\n      </section>\n      <section class="tag-list">\n        ${n}\n      </section>\n      <button class="checkbox-button">Readonly mode: ${"true"===this.readonly?"on":"off"}</button>\n    </main>\n\n    <style>\n      html {\n        box-sizing: border-box;\n      }\n      *,\n      *:before,\n      *:after {\n        box-sizing: inherit;\n      }\n      .container {\n        display: flex;\n        flex-direction: column;\n        width: 300px;\n        align-items: center;\n        background-color: #EBEDEF;\n        padding: 10px;\n        border-radius: 15px;\n      }\n      .controll {\n        display: flex;\n        justify-content: space-between;\n        width: 100%;\n        min-height: 40px;\n        border-radius: 15px;\n        background-color: #ffffff;\n        overflow: hidden;\n        margin: 10px;\n      }\n      .controll__input {\n        display: block;\n        width: 100%;\n        padding: 20px;\n        margin: 0;\n        border: none;\n        font-size: 20px;\n        line-height: 0;\n        outline: none;\n      }\n      .controll__button {\n        display: block;\n        padding: 20px;\n        margin: 0;\n        border: none;\n        background-color: #ABEBC6;\n        cursor: pointer;\n        font-size: 18px;\n        line-height: 0;\n      }\n      .tag-list {\n        padding: 5px;\n        margin: 5px;\n        height: 320px;\n        width: 100%;\n        border-radius: 15px 0 0 15px;\n        background-color: #ffffff;\n        overflow: hidden;\n        overflow-y: auto;\n      }\n      .tag-list__empty {\n        text-align: center;\n        margin: 20px;\n        font-size: 18px;\n      }\n      .checkbox-button {\n        display: block;\n        padding: 30px;\n        margin: 10px;\n        border: none;\n        border-radius: 100px;\n        background-color: #AED6F1;\n        cursor: pointer;\n        font-size: 18px;\n        line-height: 0;\n      }\n      .checkbox-button.active {\n        background-color: #CB4335;\n        color: #fff;\n      }\n    </style>\n    `}}customElements.define("tag-component",x)})()})();