(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),c=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=c(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=c(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||a;return n?s.a.createElement(d,i(i({ref:t},l),{},{components:n})):s.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<a;l++)o[l]=n[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(3),s=n(7),a=(n(0),n(112)),o={title:"farrow-http"},i={unversionedId:"api/03-farrow-http",id:"api/03-farrow-http",isDocsHomePage:!1,title:"farrow-http",description:"A Type-Friendly Web Framework",source:"@site/docs/api/03-farrow-http.md",slug:"/api/03-farrow-http",permalink:"/farrow-docs/build/docs/api/03-farrow-http",editUrl:"https://github.com/Lucifier129/farrow-docs/docs/api/03-farrow-http.md",version:"current",sidebar:"docs",previous:{title:"farrow",permalink:"/farrow-docs/build/docs/api/02-farrow"},next:{title:"farrow-schema",permalink:"/farrow-docs/build/docs/api/04-farrow-schema"}},p=[{value:"Table of Content",id:"table-of-content",children:[]},{value:"API",id:"api",children:[{value:"Http(options?: HttpPipelineOptions): HttpPipeline",id:"httpoptions-httppipelineoptions-httppipeline",children:[]},{value:"Https(options?: HttpsPipelineOptions): HttpsPipeline",id:"httpsoptions-httpspipelineoptions-httpspipeline",children:[]},{value:"Response",id:"response",children:[]},{value:"Router(): RouterPipeline",id:"router-routerpipeline",children:[]},{value:"useReq(): IncomingMessage",id:"usereq-incomingmessage",children:[]},{value:"useRes(): ServerResponse",id:"useres-serverresponse",children:[]},{value:"useRequestInfo(): RequestInfo",id:"userequestinfo-requestinfo",children:[]},{value:"useBasenames(): string[]",id:"usebasenames-string",children:[]},{value:"usePrefix(): string",id:"useprefix-string",children:[]}]}],l={toc:p};function c(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A Type-Friendly Web Framework"),Object(a.b)("h2",{id:"table-of-content"},"Table of Content"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#table-of-content"},"Table of Content")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#api"},"API"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#httpoptions-httppipelineoptions-httppipeline"},"Http(options?: HttpPipelineOptions): HttpPipeline")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#httpsoptions-httpspipelineoptions-httpspipeline"},"Https(options?: HttpsPipelineOptions): HttpsPipeline")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#response"},"Response")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#router-routerpipeline"},"Router(): RouterPipeline"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#router-url-schema"},"Router-Url-Schema"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#dynamic-parameter"},"Dynamic parameter")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#static-parameter"},"Static parameter")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#current-supported-types-in-router-url-schema"},"Current supported types in ",Object(a.b)("inlineCode",{parentName:"a"},"router-url-schema"))))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#routing-methods"},"Routing methods")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#usereq-incomingmessage"},"useReq(): IncomingMessage")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#useres-serverresponse"},"useRes(): ServerResponse")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#userequestinfo-requestinfo"},"useRequestInfo(): RequestInfo")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#usebasenames-string"},"useBasenames(): string[]")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"#useprefix-string"},"usePrefix(): string"))))),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Http, // use to create http server\n  Https, // use to create https server\n  Response, // use to respond user\n  Router, // use to create router\n  useReq, // farrow-hooks for accessing the original request of node.js http module\n  useRes, // farrow-hooks for accessing the original response of node.js http module\n  useRequestInfo, // farrow-hooks for accessing the request info\n  useBasenames, // farrow-hooks for accessing the basename list\n  usePrefix, // farrow-hooks for accessing the prefix string which is euqal basenames.join('')\n} from 'farrow-http'\n")),Object(a.b)("h3",{id:"httpoptions-httppipelineoptions-httppipeline"},"Http(options?: HttpPipelineOptions): HttpPipeline"),Object(a.b)("p",null,"create a http server"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"type HttpPipelineOptions = {\n  // basename list, farrow-http will cut the basename from request.pathname\n  basenames?: string[]\n  // options for parsing req body, learn more: https://github.com/cojs/co-body#options\n  body?: BodyOptions\n  // options for parsing req cookies, learn more: https://github.com/jshttp/cookie#options\n  cookie?: CookieOptions\n  // options for parsing req query, learn more: https://github.com/ljharb/qs\n  query?: QueryOptions\n  // injecting contexts per request\n  contexts?: (params: {\n    req: IncomingMessage\n    requestInfo: RequestInfo\n    basename: string\n  }) => ContextStorage | Promise<ContextStorage>\n  // enable log or not\n  logger?: boolean | LoggerOptions\n}\n\n// learn more about RouterPipeline below.\ntype HttpPipeline = RouterPipeline & {\n  // http.handle(req, res), handle request and respond to user, you can use this function to make farrow-http work in expressjs/koajs or other web framework in node.js\n  handle: (req: IncomingMessage, res: ServerResponse) => Promise<void>\n  // the same args of http.createServer().listen(...), create a server and listen to port\n  listen: (...args: Parameters<Server['listen']>) => Server\n  // just create a server with http.handle(req, res), don't listen to any port\n  server: () => Server\n}\n\n// logger options\ntype LoggerOptions = {\n  // handle logger result string\n  transporter?: (str: string) => void\n}\n")),Object(a.b)("h3",{id:"httpsoptions-httpspipelineoptions-httpspipeline"},"Https(options?: HttpsPipelineOptions): HttpsPipeline"),Object(a.b)("p",null,"create a https server"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"export type HttpsOptions = SecureContextOptions & TlsOptions\n\nexport type HttpsPipelineOptions = HttpPipelineOptions & {\n  // Intersection between options from tls.createServer() and tls.createSecureContext() in Node.js\n  tsl?: HttpsOptions\n}\n\ntype HttpsPipeline = RouterPipeline & {\n  // https.handle(req, res), handle request and respond to user, you can use this function to make farrow-http work in expressjs/koajs or other web framework in node.js\n  handle: (req: IncomingMessage, res: ServerResponse) => Promise<void>\n  // the same args of https.createServer().listen(...), create a server and listen to port\n  listen: (...args: Parameters<Server['listen']>) => Server\n  // just create a server with https.handle(req, res), don't listen to any port\n  server: () => Server\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"tls ",Object(a.b)("a",{parentName:"li",href:"https://github.com/farrow-js/farrow/blob/6c0208e0f9e3e3015042caf4f001717750800602/packages/farrow-http/src/https.ts#L22"},"HttpsOptions"),"\nIntersection between options from ",Object(a.b)("a",{parentName:"li",href:"https://nodejs.org/dist/latest-v15.x/docs/api/tls.html#tls_tls_createserver_options_secureconnectionlistener"},"tls.createServer()")," and ",Object(a.b)("a",{parentName:"li",href:"https://nodejs.org/dist/latest-v15.x/docs/api/tls.html#tls_tls_createsecurecontext_options"},"tls.createSecureContext()")," in ",Object(a.b)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Notes: Server created by http is different from created by https.")),Object(a.b)("h3",{id:"response"},"Response"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Response")," can be used to describe the shape of the real server response, farrow-http will perform it later"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"type ResponseInfo = {\n  status?: Status\n  headers?: Headers\n  cookies?: Cookies\n  body?: Body\n  vary?: string[]\n}\n\ntype Response = {\n  // response info\n  info: ResponseInfo\n  // check response content type\n  // response.is('json') => 'json' | false\n  is: (...types: string[]) => string | false\n  // merger all responses\n  merge: (...responses: Response[]) => Response\n  // set string response body\n  string: (value: string) => Response\n  // set json response body\n  json: (value: JsonType) => Response\n  // set html response body\n  html: (value: string) => Response\n  // set text response body\n  text: (value: string) => Response\n  // redirect response\n  redirect: (url: string, options?: { usePrefix?: boolean }) => Response\n  // set stream response body\n  stream: (stream: Stream) => Response\n  // set file response body\n  file: (filename: string) => Response\n  // set vary header fields\n  vary: (...fileds: string[]) => Response\n  // set response cookie\n  cookie: (name: string, value: string | number | null, options?: Cookies.SetOption) => Response\n  // set response cookies\n  cookies: (cookies: { [key: string]: string | number | null }, options?: Cookies.SetOption) => Response\n  // set response header\n  header: (name: string, value: Value) => Response\n  // set response headers\n  headers: (headers: Headers) => Response\n  // set response status\n  status: (code: number, message?: string) => Response\n  // set buffer response body\n  buffer: (buffer: Buffer) => Response\n  // set empty content response body\n  empty: () => Response\n  // set attachment response header\n  attachment: (filename?: string) => Response\n  // set custom response body\n  custom: (handler?: CustomBodyHandler) => Response\n  // set content-type via mime-type/extname\n  type: (type: string) => Response\n}\n")),Object(a.b)("h3",{id:"router-routerpipeline"},"Router(): RouterPipeline"),Object(a.b)("p",null,"create a router"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// learn more about Pipeline from Farrow-Pipeline API: https://github.com/Lucifier129/farrow/blob/master/docs/pipeline.md\ntype RouterPipeline = Pipeline<RequestInfo, MaybeAsyncResponse> & {\n  // capture the response body if the specific type is matched, should returning response in callback function\n  capture: <T extends keyof BodyMap>(type: T, callback: (body: BodyMap[T]) => MaybeAsyncResponse) => void\n  // add sub route and return a route-pipeline which can handle the matched request info\n  route: (name: string) => Pipeline<RequestInfo, MaybeAsyncResponse>\n  // serve static assets\n  serve: (name: string, dirname: string) => void\n  // match specific request via router-request-schema and return a schema-pipeline which can handle the matched request info\n  match: <T extends RouterRequestSchema>(\n    schema: T,\n    options?: MatchOptions,\n  ) => Pipeline<TypeOfRequestSchema<T>, MaybeAsyncResponse>\n}\n\ntype RouterRequestSchema = {\n  // match pathname of req via https://github.com/pillarjs/path-to-regexp\n  pathname: Pathname\n  // match method of req.method, default is GET, supports multiple methods as array\n  method?: string | string[]\n  // match the params parsed by path-to-regexp\n  params?: RouterSchemaDescriptor\n  // match the req query\n  query?: RouterSchemaDescriptor\n  // match the req body\n  body?: Schema.FieldDescriptor | Schema.FieldDescriptors\n  // match the req headers\n  headers?: RouterSchemaDescriptor\n  // match the req cookies\n  cookies?: RouterSchemaDescriptor\n}\n\ntype MatchOptions = {\n  // if true, it will throw error when there are no middlewares handle the request, or it will calling next()\n  block?: boolean\n  // if given, it will be called when Router-Request-Schema was failed, if it returned Response in sync or async way, that would be the final response of middleware\n  onSchemaError?(error: ValidationError): Response | void | Promise<Response | void>\n}\n\nconst router = Router()\n\n// all fileds of router-request-schema list below\n// learn more about Schema Builder from Farrow-Schema API: https://github.com/Lucifier129/farrow/blob/master/docs/schema.md\nrouter\n  .match({\n    pathname: '/product/:id',\n    method: 'POST',\n    params: {\n      id: Number,\n    },\n    query: {\n      a: Number,\n      b: String,\n      c: Boolean,\n    },\n    body: {\n      a: Number,\n      b: String,\n      c: Boolean,\n    },\n    headers: {\n      a: Number,\n      b: String,\n      c: Boolean,\n    },\n    cookies: {\n      a: Number,\n      b: String,\n      c: Boolean,\n    },\n  })\n  .use(async (request) => {\n    console.log('request', request)\n  })\n")),Object(a.b)("h4",{id:"router-url-schema"},"Router-Url-Schema"),Object(a.b)("p",null,"Since farrow ",Object(a.b)("inlineCode",{parentName:"p"},"v1.2.0"),", a new feature ",Object(a.b)("inlineCode",{parentName:"p"},"router-url-schema")," is supported. it combines ",Object(a.b)("inlineCode",{parentName:"p"},"{ pathname, params, query }")," into ",Object(a.b)("inlineCode",{parentName:"p"},"{ url }"),", and use ",Object(a.b)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#template-literal-types"},"Template literal types")," to extract the type info"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"// the same schema as above but in a more compact form\nrouter\n  .match({\n    url: '/product/<id:number>?<a:number>&<b:string>&<c:boolean>',\n    method: 'POST',\n    body: {\n      a: Number,\n      b: String,\n      c: Boolean,\n    },\n    headers: {\n      a: Number,\n      b: String,\n      c: Boolean,\n    },\n    cookies: {\n      a: Number,\n      b: String,\n      c: Boolean,\n    },\n  })\n  .use(async (request) => {\n    console.log('request', request)\n  })\n")),Object(a.b)("h5",{id:"dynamic-parameter"},"Dynamic parameter"),Object(a.b)("p",null,"A dynamic parameter has the form ",Object(a.b)("inlineCode",{parentName:"p"},"<key:type>"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"if it was placed in ",Object(a.b)("inlineCode",{parentName:"li"},"pathname"),"(before ",Object(a.b)("inlineCode",{parentName:"li"},"?")," in a url), it will regard as ",Object(a.b)("inlineCode",{parentName:"li"},"params[key] = type"),". the order is matter"),Object(a.b)("li",{parentName:"ul"},"if it was placed in ",Object(a.b)("inlineCode",{parentName:"li"},"querystring"),"(after ",Object(a.b)("inlineCode",{parentName:"li"},"?")," in a url), it will regard as ",Object(a.b)("inlineCode",{parentName:"li"},"query[key] = type"),". the order is't matter")),Object(a.b)("p",null,"Dynamic parameter support ",Object(a.b)("inlineCode",{parentName:"p"},"modifier"),"(learn more from ",Object(a.b)("a",{parentName:"p",href:"https://github.com/pillarjs/path-to-regexp#modifiers"},"here"),"), has the form:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"<key?:type>")," means optional, the corresponding type is ",Object(a.b)("inlineCode",{parentName:"li"},"{ key?: type }"),", the corresponding pattern is ",Object(a.b)("inlineCode",{parentName:"li"},"/:key?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"<key*:type>")," means zero or more, the corresponding type is ",Object(a.b)("inlineCode",{parentName:"li"},"{ key?: type[] }"),", the corresponding pattern is ",Object(a.b)("inlineCode",{parentName:"li"},"/:key*")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"<key+:type>")," means one or more, the corresponding type is ",Object(a.b)("inlineCode",{parentName:"li"},"{ key: type[] }"),", the corresponding pattern is ",Object(a.b)("inlineCode",{parentName:"li"},"/:key+"))),Object(a.b)("h5",{id:"static-parameter"},"Static parameter"),Object(a.b)("p",null,"A static parameter can only be placed in ",Object(a.b)("inlineCode",{parentName:"p"},"querystring"),", it will regard as ",Object(a.b)("inlineCode",{parentName:"p"},"literal string type"),"."),Object(a.b)("p",null,"For example: ",Object(a.b)("inlineCode",{parentName:"p"},"/?<a:int>&b=2")," has the type ",Object(a.b)("inlineCode",{parentName:"p"},"{ pathname: string, query: { a: number, b: '2' } }")),Object(a.b)("h5",{id:"current-supported-types-in-router-url-schema"},"Current supported types in ",Object(a.b)("inlineCode",{parentName:"h5"},"router-url-schema")),Object(a.b)("p",null,"The supported types in ",Object(a.b)("inlineCode",{parentName:"p"},"<key:type>")," are list below:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"string")," -> ts ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"number")," -> ts ",Object(a.b)("inlineCode",{parentName:"li"},"number")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"boolean")," -> ts ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"id")," -> ts ",Object(a.b)("inlineCode",{parentName:"li"},"string"),", but ",Object(a.b)("inlineCode",{parentName:"li"},"farrow-schema")," will ensure it's not empty"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"int")," -> ts ",Object(a.b)("inlineCode",{parentName:"li"},"number"),", but ",Object(a.b)("inlineCode",{parentName:"li"},"farrow-schema")," will ensure it's integer"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"float")," -> ts ",Object(a.b)("inlineCode",{parentName:"li"},"number")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"{*+}")," -> use the string wrapped by ",Object(a.b)("inlineCode",{parentName:"li"},"{}")," as ",Object(a.b)("inlineCode",{parentName:"li"},"string literal type"),". eg. ",Object(a.b)("inlineCode",{parentName:"li"},"{abc}")," has type ",Object(a.b)("inlineCode",{parentName:"li"},'"abc"'),", only ",Object(a.b)("inlineCode",{parentName:"li"},"string literal type")," is supported"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"|")," -> ts ",Object(a.b)("inlineCode",{parentName:"li"},"union types"),". eg. ",Object(a.b)("inlineCode",{parentName:"li"},"<a:int|boolean|string>")," has ts type ",Object(a.b)("inlineCode",{parentName:"li"},"number|boolean|string"))),Object(a.b)("h4",{id:"routing-methods"},"Routing methods"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"router[get|post|put|patch|head|delte|options](url, schema?, options?)")," is supported as shortcut of ",Object(a.b)("inlineCode",{parentName:"p"},"router.match({ url, method: get|post|put|patch|head|delte|options }, options?)")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"router.get('/get0/<arg0:int>?<arg1:int>').use((request) => {\n  return Response.json({\n    type: 'get',\n    request,\n  })\n})\n")),Object(a.b)("h3",{id:"usereq-incomingmessage"},"useReq(): IncomingMessage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"http.use(() => {\n  // original request\n  let req = useReq()\n})\n")),Object(a.b)("h3",{id:"useres-serverresponse"},"useRes(): ServerResponse"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"http.use(() => {\n  // original response\n  let res = useRes()\n})\n")),Object(a.b)("h3",{id:"userequestinfo-requestinfo"},"useRequestInfo(): RequestInfo"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"http.use((request0) => {\n  // request1 in here is equal to request0, but we can calling useRequestInfo in any custom hooks\n  let request1 = useRequestInfo()\n})\n")),Object(a.b)("h3",{id:"usebasenames-string"},"useBasenames(): string[]"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const http = Http({\n  basenames: ['/base0'],\n})\nhttp.route('/base1').use(() => {\n  // basenames will be ['/base0', '/base1'] if user accessed /base0/base1\n  let basenames = useBasenames().value\n  return Response.json({ basenames })\n})\n")),Object(a.b)("h3",{id:"useprefix-string"},"usePrefix(): string"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const http = Http({\n  basenames: ['/base0'],\n})\n\nhttp.route('/base1').use(() => {\n  // prefix will be '/base0/base1' if user accessed /base0/base1\n  let prefix = usePrefix()\n  return Response.json({ prefix })\n})\n")))}c.isMDXComponent=!0}}]);