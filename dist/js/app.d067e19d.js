(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0e7104d7":"74c8a44f","chunk-12ee578a":"a23f8f62","chunk-2f3f086d":"db225d81","chunk-714151e6":"def9c6f4"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0e7104d7":1,"chunk-12ee578a":1,"chunk-2f3f086d":1,"chunk-714151e6":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0e7104d7":"7f9d4970","chunk-12ee578a":"a0c7f0ed","chunk-2f3f086d":"cc60e759","chunk-714151e6":"a7d44bd8"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Nav"),n("div",{staticClass:"container"},[n("transition",{attrs:{name:"moveInUp"}},[n("router-view")],1)],1),n("Footer")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"main-nav"},[e._m(0),n("div",{staticClass:"nav-links"},[n("router-link",{staticClass:"link-item link-item-home",attrs:{to:"/","active-class":"active",exact:""}},[e._v("Home")]),n("router-link",{staticClass:"link-item link-item-categories",attrs:{to:"/categories","active-class":"active",exact:""}},[e._v("Categories")]),n("router-link",{staticClass:"link-item link-item-random",attrs:{to:"/random","active-class":"active",exact:""}},[e._v("Random")])],1)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-heading"},[n("h1",[e._v("Meals "),n("span",{staticClass:"txt-primary"},[e._v("Application")])])])}],s={},u=s,l=n("2877"),d=Object(l["a"])(u,i,c,!1,null,null,null),f=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"main-footer"},[n("p",[e._v("Meals Application 2020 ©")]),n("div",{staticClass:"footer-links"},[n("router-link",{staticClass:"link-item link-item-home",attrs:{to:"/"}},[e._v("Home")]),n("router-link",{staticClass:"link-item link-item-home",attrs:{to:"/categories"}},[e._v("Categories")]),n("router-link",{staticClass:"link-item link-item-home",attrs:{to:"/random"}},[e._v("Random")])],1)])},h=[],p={},g=p,v=Object(l["a"])(g,m,h,!1,null,null,null),k=v.exports,b=r["a"].extend({components:{Nav:f,Footer:k}}),y=b,C=(n("5c0b"),Object(l["a"])(y,a,o,!1,null,null,null)),w=C.exports,_=n("8c4f"),M=(n("d3b7"),[{path:"/",name:"home",component:function(){return n.e("chunk-0e7104d7").then(n.bind(null,"57da"))}},{path:"/categories",name:"categories",component:function(){return n.e("chunk-12ee578a").then(n.bind(null,"1d9f"))}},{path:"/random",name:"random",component:function(){return n.e("chunk-2f3f086d").then(n.bind(null,"1a4e"))}},{path:"/details/:productId",name:"details",component:function(){return n.e("chunk-714151e6").then(n.bind(null,"2959"))}}]),P=(n("99af"),n("4160"),n("a630"),n("3ca3"),n("159b"),n("2f62"));r["a"].use(P["a"]);var I=new P["a"].Store({state:{mealCategories:[],mealsArray:[],randomMeal:[],ingredients:[],ingredients2:[],mealId:""},getters:{returnMealCategories:function(e){return e.mealCategories},returnHomePageMeals:function(e){return e.mealsArray},returnRandomPageMeal:function(e){return e.randomMeal},returnRandomPageIngredients:function(e){return e.ingredients},returnDetailPageIngredients:function(e){return e.ingredients2}},mutations:{fetchCategories:function(e,t){e.mealCategories=t},fetchHomePageMeals:function(e,t){e.mealsArray=t},fetchRandomPageMeal:function(e,t){e.randomMeal=t},addIngredients:function(e,t){e.ingredients.push(t)},addIngredientsDetailPage:function(e,t){e.ingredients2.push(t)},specifyMealId:function(e,t){e.mealId=t}},actions:{fetchCategories:function(e){var t=e.commit;fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(e){return e.json()})).then((function(e){return t("fetchCategories",e.categories)})).catch((function(e){return console.log(e)}))},fetchHomePageMeals:function(e){var t=e.dispatch,n=e.commit;fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=potato").then((function(e){return e.json()})).then((function(e){return e.meals.forEach((function(r){t("addDetailPageIngredients",r).then((function(){n("fetchHomePageMeals",e.meals)}))}))})).catch((function(e){return console.log(e)}))},fetchRandomPageMeal:function(e){var t=e.dispatch,n=e.commit;fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(e){return t("addIngredients",e.meals[0]).then((function(){n("fetchRandomPageMeal",e.meals)}))})).catch((function(e){return console.log(e)}))},addIngredients:function(e,t){var n=e.commit;for(var r in Array.from(Array(20))){if(!t["strIngredient".concat(+r+1)])break;n("addIngredients","".concat(t["strIngredient".concat(+r+1)]," - ").concat(t["strMeasure".concat(+r+1)]))}},addDetailPageIngredients:function(e,t){var n=e.commit;for(var r in Array.from(Array(20)))if(t.idMeal==this.state.mealId){if(!t["strIngredient".concat(+r+1)])break;n("addIngredientsDetailPage","".concat(t["strIngredient".concat(+r+1)]," - ").concat(t["strMeasure".concat(+r+1)]))}},specifyMealId:function(e,t){var n=e.commit;n("specifyMealId",t)}}});r["a"].config.productionTip=!1,r["a"].use(_["a"]);var j=new _["a"]({routes:M,mode:"history"});new r["a"]({render:function(e){return e(w)},router:j,store:I}).$mount("#app")}});
//# sourceMappingURL=app.d067e19d.js.map