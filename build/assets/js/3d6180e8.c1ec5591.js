(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{112:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=n,b=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return t?a.a.createElement(b,c(c({ref:r},p),{},{components:t})):a.a.createElement(b,c({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),o=(t(0),t(112)),i={title:"farrow-react"},c={unversionedId:"api/06-farrow-react",id:"api/06-farrow-react",isDocsHomePage:!1,title:"farrow-react",description:"React adapter for farrow-http",source:"@site/docs/api/06-farrow-react.md",slug:"/api/06-farrow-react",permalink:"/farrow-docs/build/docs/api/06-farrow-react",editUrl:"https://github.com/Lucifier129/farrow-docs/docs/api/06-farrow-react.md",version:"current",sidebar:"docs",previous:{title:"farrow-pipeline",permalink:"/farrow-docs/build/docs/api/05-farrow-pipeline"},next:{title:"farrow-cors",permalink:"/farrow-docs/build/docs/api/07-farrow-cors"}},s=[{value:"Installation",id:"installation",children:[]},{value:"useReactView (options?: ReactViewOptions) =&gt; { render(element: JSX.Element): Http.Response}",id:"usereactview-options-reactviewoptions---renderelement-jsxelement-httpresponse",children:[]},{value:"usePrefix(): string",id:"useprefix-string",children:[]},{value:"useRenderContext(): string",id:"userendercontext-string",children:[]},{value:"Link",id:"link",children:[]}],p={toc:s};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"React adapter for farrow-http"),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"# via npm\nnpm install --save farrow-react\n\n# via yarn\nyarn add farrow-react\n")),Object(o.b)("h1",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"// farrow-hooks for rendering react component\nimport { useReactView } from 'farrow-react'\n\n// react component for auto prefix\nimport { Link } from 'farrow-react/Link'\n\nimport {\n  // react-hooks version of usePrefix\n  usePrefix,\n  // access current render context\n  useRenderContext,\n} from 'farrow-react/hooks'\n\n// ReactContext for rendering\nimport { ReactRenderContext } from 'farrow-react/Context'\n")),Object(o.b)("h2",{id:"usereactview-options-reactviewoptions---renderelement-jsxelement-httpresponse"},"useReactView (options?: ReactViewOptions) => { render(element: JSX.Element): Http.Response}"),Object(o.b)("p",null,"use react for rendering"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"type ReactResponseOptions = {\n  // config doctype\n  docType?: string\n}\n\ntype ReactViewOptions = ReactResponseOptions & {\n  // use stream or string\n  useStream?: boolean\n}\n\ntype ReactView = {\n  // render react element to farrow http response\n  render: <T extends JSX.Element>(element: T) => Http.Response\n}\n")),Object(o.b)("h2",{id:"useprefix-string"},"usePrefix(): string"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"const Test = () => {\n  let prefix = usePrefix()\n  return <div>{prefix}</div>\n}\n")),Object(o.b)("h2",{id:"userendercontext-string"},"useRenderContext(): string"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"type ReactRenderContext = {\n  // basenames taken from farrow-http\n  basenames: string[]\n}\n\nconst Test = () => {\n  let renderContext = useRenderContext()\n  return <div>{renderContext.basenames.join('')}</div>\n}\n")),Object(o.b)("h2",{id:"link"},"Link"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},'// Link\'s props is equal to <a />\n<Link href="/">a link</Link>\n')))}l.isMDXComponent=!0}}]);