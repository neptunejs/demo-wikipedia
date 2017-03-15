webpackJsonp([1,3],{117:function(a,b,c){"use strict";function d(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(6),f=d(e),g=c(14),h=c(120),j=d(h),k=c(119),l=d(k),m=c(121),n=d(m),o=c(122),p=d(o),q=c(43);class r extends e.Component{componentWillMount(){this.props.fetchData()}render(){return f.default.createElement("div",{style:{height:"100vh"}},f.default.createElement(n.default,null),f.default.createElement("div",{style:{width:"40%",height:"100%",float:"left",display:"flex",flexDirection:"column"}},f.default.createElement("div",{style:{width:"100%",flex:"0 1 400px"}},f.default.createElement(p.default,null)),f.default.createElement("div",{style:{width:"100%",flex:"1 1 auto",overflow:"auto"}},f.default.createElement(j.default,null))),f.default.createElement("div",{style:{width:"60%",height:"100%",float:"right"}},f.default.createElement(l.default,null)))}}var s={fetchData:q.fetchData};b.default=(0,g.connect)(null,s)(r)},118:function(a,b,c){"use strict";function d(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(24),f=c(124),g=d(f),h=c(125),j=d(h),k=c(126),l=d(k),m=c(123),n=d(m),o=c(128),p=d(o),q=c(127),r=d(q),s=(0,e.combineReducers)({data:g.default,dataLoading:j.default,page:l.default,currentMolecule:n.default,query:r.default,searchMode:p.default});b.default=s},119:function(a,b,c){"use strict";function f(l){return`https://en.wikipedia.org/w/index.php?title=${l}&printable=yes`}Object.defineProperty(b,"__esModule",{value:!0});var h=c(6),j=function(l){return l&&l.__esModule?l:{default:l}}(h),k=c(14);b.default=(0,k.connect)(function(l){return{url:l.currentMolecule?f(l.currentMolecule.code):null}})(function(l){var m=l.url;return j.default.createElement("iframe",{src:m,style:{width:"100%",height:"99%",border:"none"}})})},120:function(a,b,c){"use strict";function d(t){return t&&t.__esModule?t:{default:t}}function e(t,u){return function(w,x){var y=t[w];return j.default.createElement("div",{key:x,onClick:()=>u(y)},j.default.createElement("span",null,y.code),j.default.createElement(n.SvgRenderer,{OCL:p.default,oclid:y.actID.value,width:300,height:130}))}}Object.defineProperty(b,"__esModule",{value:!0});var h=c(6),j=d(h),k=c(14),l=c(70),m=d(l),n=c(40),o=c(32),p=d(o),q=c(43),r=c(129),s={clickMol:q.clickMol};b.default=(0,k.connect)(function(t){return{data:(0,r.getFilteredData)(t)}},s)(function(t){var u=t.data,v=t.clickMol;return j.default.createElement(m.default,{itemRenderer:e(u,v),length:u.length})})},121:function(a,b,c){"use strict";function d(m){return m&&m.__esModule?m:{default:m}}Object.defineProperty(b,"__esModule",{value:!0});var g=c(6),h=d(g),j=c(14),k=c(71),l=d(k);b.default=(0,j.connect)(function(m){return{loading:m.dataLoading}})(function(m){var p,n=m.loading,o=null!==n;return o&&(0===n?p="Fetching data...":p=`Loading molecules... ${n.done}/${n.total}`),h.default.createElement(l.default,{isOpen:o,style:{content:{textAlign:"center",fontSize:"24pt"}},contentLabel:"loading"},p)})},122:function(a,b,c){"use strict";function d(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(b,"__esModule",{value:!0});var f=c(6),g=d(f),h=c(14),j=c(32),k=d(j),l=c(40),m=c(43),n={changeQuery:m.changeQuery};b.default=(0,h.connect)(null,n)(function(o){var p=o.changeQuery;return g.default.createElement(l.StructureEditor,{OCL:k.default,onChange:p,height:400,width:"100%"})})},123:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(){var d=0<arguments.length&&arguments[0]!==void 0?arguments[0]:null,e=arguments[1];switch(e.type){case"CLICK_MOL":return e.payload;default:return d;}}},124:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(){var d=0<arguments.length&&arguments[0]!==void 0?arguments[0]:[],e=arguments[1];switch(e.type){case"FETCH_DATA_FULFILLED":return e.payload;default:return d;}}},125:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(){var d=0<arguments.length&&arguments[0]!==void 0?arguments[0]:null,e=arguments[1];switch(e.type){case"FETCH_DATA_PENDING":return 0;case"PARSE_DATA_START":return{done:0,total:e.payload};case"PARSE_DATA_STEP":return{done:e.payload.done,total:e.payload.total};case"FETCH_DATA_FULFILLED":return null;default:return d;}}},126:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(){var d=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"sss",e=arguments[1];switch(e.type){case"CHANGE_PAGE":return e.payload;default:return d;}}},127:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(){var g=0<arguments.length&&arguments[0]!==void 0?arguments[0]:null,h=arguments[1];switch(h.type){case"CHANGE_QUERY":return null===h.payload?null:f.default.Molecule.fromIDCode(h.payload.oclid,h.payload.coordinates);default:return g;}};var e=c(32),f=function(g){return g&&g.__esModule?g:{default:g}}(e)},128:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(){var d=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"substructure",e=arguments[1];switch(e.type){case"CHANGE_SEARCH_MODE":return e.payload;default:return d;}}},129:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.getFilteredData=void 0;var d=c(72),h=b.getFilteredData=(0,d.createSelector)([(j)=>j.data,(j)=>j.query,(j)=>j.searchMode],(j,k,l)=>{if(0===j.length)return[];if(null===k)return j.data;console.time("search");var m=j.search(k,{mode:l}).data;return console.timeEnd("search"),m})},304:function(a,b,c){"use strict";function d(u){return u&&u.__esModule?u:{default:u}}var e=c(6),f=d(e),g=c(20),h=d(g),j=c(14),k=c(24),l=c(41),m=d(l),n=c(42),o=d(n),p=c(117),q=d(p),r=c(118),s=d(r),t=(0,k.applyMiddleware)(o.default,(0,m.default)())(k.createStore);h.default.render(f.default.createElement(j.Provider,{store:t(s.default,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},f.default.createElement(q.default,null)),document.getElementById("app"))},32:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var f=c(69),g=function(k){if(k&&k.__esModule)return k;var l={};if(null!=k)for(var m in k)Object.prototype.hasOwnProperty.call(k,m)&&(l[m]=k[m]);return l.default=k,l}(f),h=c(68),j=function(k){return k&&k.__esModule?k:{default:k}}(h);(0,j.default)(g),b.default=g},43:function(a,b,c){"use strict";function e(n){return function(){var o=n.apply(this,arguments);return new Promise(function(p,q){function r(s,t){try{var u=o[s](t),v=u.value}catch(w){return void q(w)}return u.done?void p(v):Promise.resolve(v).then(function(w){r("next",w)},function(w){r("throw",w)})}return r("next")})}}function g(){return window.fetch("https://www.cheminfo.org/wikipedia/src/json/data.json").then((n)=>n.text()).then(JSON.parse)}function k(){return new Promise((n)=>{setTimeout(n,0)})}Object.defineProperty(b,"__esModule",{value:!0}),b.fetchData=function(){return function(n){n({type:"FETCH_DATA",payload:g().then((()=>{var o=e(function*(p){var q=p.data.molecules;n({type:"PARSE_DATA_START",payload:q.length});for(var r=new m.default.DB({length:q.length}),s=0;s<q.length;s++){0==s%1e3&&(n({type:"PARSE_DATA_STEP",payload:{done:s,total:q.length}}),yield k());var t=q[s],u=m.default.Molecule.fromIDCode(t.actID.value,!1);u.index=t.act_idx,u.idcode=t.actID.value,r.push(u,t)}return r});return function(){return o.apply(this,arguments)}})())})}},b.clickMol=function(n){return{type:"CLICK_MOL",payload:n}},b.changeQuery=function(n){return{type:"CHANGE_QUERY",payload:n}};var l=c(32),m=function(n){return n&&n.__esModule?n:{default:n}}(l)}},[304]);