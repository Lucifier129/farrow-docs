(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{116:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(a,".").concat(f)]||u[f]||l[f]||i;return t?r.a.createElement(m,p(p({ref:n},c),{},{components:t})):r.a.createElement(m,p({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return s}));var o=t(3),r=t(7),i=(t(0),t(116)),a={title:"farrow-api"},p={unversionedId:"api/08-farrow-api",id:"api/08-farrow-api",isDocsHomePage:!1,title:"farrow-api",description:"farrow-api: Schema-based Api builder",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/api/08-farrow-api.md",slug:"/api/08-farrow-api",permalink:"/farrow-docs/build/zh-cn/docs/api/08-farrow-api",editUrl:"https://github.com/Lucifier129/farrow-docs/docs/api/08-farrow-api.md",version:"current",sidebar:"docs",previous:{title:"farrow-cors",permalink:"/farrow-docs/build/zh-cn/docs/api/07-farrow-cors"},next:{title:"farrow-api-server",permalink:"/farrow-docs/build/zh-cn/docs/api/09-farrow-api-server"}},d=[{value:"Setup",id:"setup",children:[]},{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[]}],c={toc:d};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"farrow-api"),": Schema-based Api builder"),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("p",null,"Install via npm or yarn"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"# via npm\nnpm install --save farrow-api\n\n# via yarn\nyarn add farrow-api\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Writing ",Object(i.b)("inlineCode",{parentName:"p"},"farrow-api")," is just like typing in a higher-order way, we define a api-type via ",Object(i.b)("inlineCode",{parentName:"p"},"farrow-schema"),". And then use ",Object(i.b)("a",{parentName:"p",href:"/farrow-docs/build/zh-cn/docs/api/09-farrow-api-server"},"farrow-api-server")," to attach api to a http server."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { Api } from 'farrow-api'\nimport { Int, List, ObjectType, Type, TypeOf } from 'farrow-schema'\n\n/**\n * define Todo\n */\nexport class Todo extends ObjectType {\n  id = {\n    description: `Todo id`,\n    [Type]: Int,\n  }\n\n  content = {\n    description: 'Todo content',\n    [Type]: String,\n  }\n\n  completed = {\n    description: 'Todo status',\n    [Type]: Boolean,\n  }\n}\n\n// infer the type of Todo\nexport type TodoType = TypeOf<Todo>\n\n// define Todos\nexport const Todos = List(Todo)\n\n// define AddTodoInput\nexport class AddTodoInput extends ObjectType {\n  content = {\n    description: 'a content of todo for creating',\n    [Type]: String,\n  }\n}\n\n// define AddTodoInput\nexport class AddTodoOutput extends ObjectType {\n  todos = {\n    description: 'Todo list',\n    [Type]: Todos,\n  }\n}\n\n// define an api via input schema and output schema\nexport const addTodo = Api(\n  {\n    description: 'add todo',\n    input: AddTodoInput,\n    output: AddTodoOutput,\n  },\n  (input) => {\n    // impl addTodo\n    return {\n      todos: [],\n    }\n  },\n)\n\n// define RemoveTodoInput\nexport class RemoveTodoInput extends ObjectType {\n  id = {\n    description: 'Todo id for removing',\n    [Type]: Int,\n  }\n}\n\n// define RemoveTodoOuput\nexport class RemoveTodoOuput extends ObjectType {\n  todos = {\n    description: 'Remain todo list',\n    [Type]: Todos,\n  }\n}\n\n// define an api without impl\nexport const removeTodo = Api({\n  description: 'remove todo',\n  input: RemoveTodoInput,\n  output: RemoveTodoOuput,\n})\n\n// an api is also a pipeline\nremoveTodo.use((input, next) => {\n  return next(input)\n})\n\n// impl remove todo via pipeline.use\nremoveTodo.use((input) => {\n  state.todos = state.todos.filter((todo) => todo.id !== input.id)\n  return {\n    todos: state.todos,\n  }\n})\n\n// combine all api to an object/entries\nexport const entries = {\n  addTodo,\n  removeTodo,\n}\n")),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"/**\n * create Api via ApiDefinition\n */\nconst Api: (definition: ApiDefinition, impl?: ApiImpl<T> | undefined) => ApiType<T>\n\n/**\n * ApiDefinition\n */\nexport type ApiDefinition = {\n  /**\n   * input schema of api\n   */\n  input: SchemaCtorInput\n  /**\n   * output schema of api\n   */\n  output: SchemaCtorInput\n  /**\n   * description of api\n   */\n  description?: string\n  /**\n   * depcreated info of api if needed\n   */\n  deprecated?: string\n}\n")))}s.isMDXComponent=!0}}]);