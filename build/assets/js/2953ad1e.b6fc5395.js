(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{113:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},f=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=u(t),d=n,b=f["".concat(i,".").concat(d)]||f[d]||l[d]||a;return t?o.a.createElement(b,c(c({ref:r},s),{},{components:t})):o.a.createElement(b,c({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(7),a=(t(0),t(113)),i={title:"farrow-next-server"},c={unversionedId:"api/14-farrow-next-server",id:"api/14-farrow-next-server",isDocsHomePage:!1,title:"farrow-next-server",description:"farrow-next-server is a adapter of next.js for farrow-http.",source:"@site/docs/api/14-farrow-next-server.md",slug:"/api/14-farrow-next-server",permalink:"/farrow-docs/build/docs/api/14-farrow-next-server",editUrl:"https://github.com/Lucifier129/farrow-docs/docs/api/14-farrow-next-server.md",version:"current",sidebar:"docs",previous:{title:"farrow-next",permalink:"/farrow-docs/build/docs/api/13-farrow-next"},next:{title:"farrow-deno-api",permalink:"/farrow-docs/build/docs/api/15-farrow-deno-api"}},p=[{value:"setup",id:"setup",children:[]}],s={toc:p};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"farrow-next-server")," is a adapter of next.js for farrow-http."),Object(a.b)("h2",{id:"setup"},"setup"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"# via npm\nnpm install --save farrow-next-server\n\n# via yarn\nyarn add farrow-next-server\n")))}u.isMDXComponent=!0}}]);