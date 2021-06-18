(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),f=n,d=u["".concat(c,".").concat(f)]||u[f]||b[f]||o;return t?a.a.createElement(d,i(i({ref:r},s),{},{components:t})):a.a.createElement(d,i({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},77:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(112)),c={title:"farrow-deno-api"},i={unversionedId:"api/15-farrow-deno-api",id:"api/15-farrow-deno-api",isDocsHomePage:!1,title:"farrow-deno-api",description:"A deno server middleware.",source:"@site/docs/api/15-farrow-deno-api.md",slug:"/api/15-farrow-deno-api",permalink:"/farrow-docs/build/docs/api/15-farrow-deno-api",editUrl:"https://github.com/Lucifier129/farrow-docs/docs/api/15-farrow-deno-api.md",version:"current",sidebar:"docs",previous:{title:"farrow-next-server",permalink:"/farrow-docs/build/docs/api/14-farrow-next-server"}},p=[{value:"Install",id:"install",children:[]},{value:"First Look",id:"first-look",children:[]},{value:"Options",id:"options",children:[{value:"entries",id:"entries",children:[]},{value:"namespace",id:"namespace",children:[]},{value:"codegen",id:"codegen",children:[]},{value:"transform",id:"transform",children:[]},{value:"format",id:"format",children:[]}]}],s={toc:p};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A deno server middleware."),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm install farrow-deno-api\n\nyarn add farrow-deno-api\n")),Object(o.b)("h2",{id:"first-look"},"First Look"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"// server\nimport { Http } from 'farrow-http'\nimport { DenoService } from from 'farrow-deno-api'\n\n// api definition\n...\n\nconst entries = {\n  getCount,\n  setCount,\n  triggerError,\n}\n\nconst CounterService = DenoService({\n  entries,\n})\nconst http = Http()\nconst server = http.server()\n\nhttp.route('/counter').use(CounterService)\n\nhttp.listen(3000)\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"// client\nimport { api } from 'http://localhost:3000/counter/client.ts'\n\napi.getCount({}).then(console.log)\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"entries"},"entries"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"entries: ApiEntries\n")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/Lucifier129/farrow/blob/master/packages/farrow-api/src/api.ts#L111"},"ApiEntries")),Object(o.b)("h3",{id:"namespace"},"namespace"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"namespace: string = 'client'\n")),Object(o.b)("p",null,"it affect the path of file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { api } from 'http://localhost:3000/counter/client.ts'\n")),Object(o.b)("p",null,"in client."),Object(o.b)("h3",{id:"codegen"},"codegen"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"codegen?: CodegenOptions\n")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/Lucifier129/farrow/blob/master/packages/farrow-api/src/codegen.ts#L126"},"CodegenOptions")),Object(o.b)("h3",{id:"transform"},"transform"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"transform?: (source: string) => string\n")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/Lucifier129/farrow/blob/master/packages/farrow/src/api-client/index.ts#L51"},"transform")),Object(o.b)("h3",{id:"format"},"format"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"format?: (source: string) => string\n")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/Lucifier129/farrow/blob/master/packages/farrow/src/api-client/index.ts#L55"},"format")))}l.isMDXComponent=!0}}]);