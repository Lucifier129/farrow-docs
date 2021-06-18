(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,b=u["".concat(o,".").concat(d)]||u[d]||f[d]||i;return n?a.a.createElement(b,p(p({ref:t},l),{},{components:n})):a.a.createElement(b,p({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(112)),o={title:"farrow-vite"},p={unversionedId:"api/11-farrow-vite",id:"api/11-farrow-vite",isDocsHomePage:!1,title:"farrow-vite",description:"farrow-vite: Vite adapter for farrow-http",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/api/11-farrow-vite.md",slug:"/api/11-farrow-vite",permalink:"/farrow-docs/build/zh-cn/docs/api/11-farrow-vite",editUrl:"https://github.com/Lucifier129/farrow-docs/docs/api/11-farrow-vite.md",version:"current",sidebar:"docs",previous:{title:"farrow-api-client",permalink:"/farrow-docs/build/zh-cn/docs/api/10-farrow-api-client"},next:{title:"farrow-module",permalink:"/farrow-docs/build/zh-cn/docs/api/12-farrow-module"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[]}],l={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"farrow-vite"),": Vite adapter for farrow-http"),Object(i.b)("p",null,"Combining ",Object(i.b)("inlineCode",{parentName:"p"},"farrow"),", ",Object(i.b)("inlineCode",{parentName:"p"},"farrow-http"),", ",Object(i.b)("inlineCode",{parentName:"p"},"farrow-api")," and ",Object(i.b)("inlineCode",{parentName:"p"},"farrow-vite"),", we can setup a modern full-stack development."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"# via npm\nnpm install --save farrow-vite\n\n# via yarn\nyarn add farrow-vite\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm install --save-dev vite farrow-vite")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import path from 'path'\nimport { Http } from 'farrow-http'\nimport { vite } from 'farrow-vite'\n\nimport { services } from './api'\n\nlet http = Http()\n\nhttp.use(services)\n\nif (process.env.NODE_ENV === 'development') {\n  // set up vite-dev-server in development\n  http.use(vite())\n} else {\n  // serving the bundler output in production\n  http.serve('/', path.join(__dirname, '../dist/client'))\n}\n\nhttp.listen(3002, () => {\n  console.log('server started at http://localhost:3002')\n})\n")),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev": "farrow dev",\n    "build": "tsc && vite build && farrow build"\n  }\n}\n')),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { vite } from 'farrow-vite'\n\n/**\n * InlineConfig is the same as vite\n * see https://vitejs.dev/guide/api-javascript.html#inlineconfig\n *\n * RouterPipeline is used for farrow-http\n */\nconst vite: (options?: InlineConfig | undefined) => RouterPipeline\n")))}s.isMDXComponent=!0}}]);