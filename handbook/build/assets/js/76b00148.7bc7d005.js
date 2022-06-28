"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7057],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(g,r(r({ref:n},d),{},{components:t})):a.createElement(g,r({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9360:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=t(3117),i=t(102),o=(t(7294),t(3905)),r=t(4996),l=["components"],s={id:"globalusing",title:"2.6 GlobalUsing \u4f7f\u7528",sidebar_label:"2.6 GlobalUsing \u4f7f\u7528"},p=void 0,d={unversionedId:"globalusing",id:"globalusing",title:"2.6 GlobalUsing \u4f7f\u7528",description:"",source:"@site/docs/globalusing.mdx",sourceDirName:".",slug:"/globalusing",permalink:"/furion/docs/globalusing",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/globalusing.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1656033462,formattedLastUpdatedAt:"6/24/2022",frontMatter:{id:"globalusing",title:"2.6 GlobalUsing \u4f7f\u7528",sidebar_label:"2.6 GlobalUsing \u4f7f\u7528"},sidebar:"docs",previous:{title:"2.5 .NET5 \u5347\u7ea7 .NET6",permalink:"/furion/docs/net5-to-net6"},next:{title:"2.7 JSON Schema \u4f7f\u7528",permalink:"/furion/docs/jsonschema"}},u={},c=[{value:"2.6.1 \u5173\u4e8e <code>GlobalUsing</code>",id:"261-\u5173\u4e8e-globalusing",level:2},{value:"2.6.2 \u5fc5\u8981\u914d\u7f6e",id:"262-\u5fc5\u8981\u914d\u7f6e",level:2},{value:"2.6.3 \u57fa\u672c\u4f7f\u7528",id:"263-\u57fa\u672c\u4f7f\u7528",level:2},{value:"2.6.3.1 \u9ed8\u8ba4\u5168\u5c40 <code>using</code>",id:"2631-\u9ed8\u8ba4\u5168\u5c40-using",level:3},{value:"2.6.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"264-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],m={toc:c};function g(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"261-\u5173\u4e8e-globalusing"},"2.6.1 \u5173\u4e8e ",(0,o.kt)("inlineCode",{parentName:"h2"},"GlobalUsing")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},".NET6/C#10")," \u4e4b\u540e\uff0c\u5fae\u8f6f\u65b0\u589e\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalUsings")," \u673a\u5236\uff0c\u53ef\u4ee5\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalUsings.cs")," \u6587\u4ef6\uff0c\u628a\u5e38\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," \u653e\u7f6e\u5176\u4e2d\u3002"),(0,o.kt)("p",null,"\u8fd9\u6837 ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalUsings.cs")," \u6240\u5728\u7684\u9879\u76ee ",(0,o.kt)("inlineCode",{parentName:"p"},".cs")," \u6587\u4ef6\u5c31\u65e0\u9700\u91cd\u590d ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," \u4e86\uff0c\u5927\u5927\u7684\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u4e5f\u8ba9\u4ee3\u7801\u53d8\u7684\u66f4\u52a0\u7b80\u6d01\u3002"),(0,o.kt)("h2",{id:"262-\u5fc5\u8981\u914d\u7f6e"},"2.6.2 \u5fc5\u8981\u914d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u542f\u7528 ",(0,o.kt)("inlineCode",{parentName:"strong"},"GlobalUsings")," \u673a\u5236\u9700\u8981\u4ee5\u4e0b\u4e24\u4e2a\u6b65\u9aa4\uff1a")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u4f60\u9700\u8981\u5168\u5c40 ",(0,o.kt)("inlineCode",{parentName:"li"},"using")," \u7684\u9879\u76ee\u5c42\u6839\u76ee\u5f55\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"li"},"GlobalUsings.cs")," \u6587\u4ef6\uff0c\u5982\u679c\u591a\u4e2a\u9879\u76ee\u5c42\u9700\u8981\uff0c\u5219\u6bcf\u4e2a\u5c42\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"GlobalUsings.cs")),(0,o.kt)("li",{parentName:"ol"},"\u7f16\u8f91\u9879\u76ee\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},".csproj")," \u6587\u4ef6\uff0c\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"li"},"<ImplicitUsings>enable</ImplicitUsings>"),"\uff0c\u6ce8\u610f\u662f\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"<PropertyGroup>")," \u4e2d\u6dfb\u52a0\uff0c\u901a\u5e38\u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"<TargetFramework>")," \u540c\u7236\u540c\u7ea7")),(0,o.kt)("h2",{id:"263-\u57fa\u672c\u4f7f\u7528"},"2.6.3 \u57fa\u672c\u4f7f\u7528"),(0,o.kt)("p",null,"\u914d\u7f6e\u4e4b\u540e\uff0c\u73b0\u5728\u5c31\u53ef\u4ee5\u628a\u5e38\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," \u653e\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalUsings.cs")," \u4e2d\u4e86\uff0c\u5199\u6cd5\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:'showLineNumbers title="Furion \u63a8\u8350\u7684\u5168\u5c40\u547d\u540d\u7a7a\u95f4"',showLineNumbers:!0,title:'"Furion','\u63a8\u8350\u7684\u5168\u5c40\u547d\u540d\u7a7a\u95f4"':!0},"global using Furion;\nglobal using Furion.DatabaseAccessor;\nglobal using Furion.DataEncryption;\nglobal using Furion.DataValidation;\nglobal using Furion.DependencyInjection;\nglobal using Furion.DynamicApiController;\nglobal using Furion.Extensions;\nglobal using Furion.FriendlyException;\nglobal using Mapster;\nglobal using Microsoft.AspNetCore.Authorization;\nglobal using Microsoft.AspNetCore.Http;\nglobal using Microsoft.AspNetCore.Mvc;\nglobal using Microsoft.CodeAnalysis;\nglobal using Microsoft.EntityFrameworkCore;\nglobal using System.ComponentModel.DataAnnotations;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u5fc5\u987b\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"strong"},"global")," \u5f00\u5934\uff01")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u77e5\u8bc6")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4e00\u822c\u63a8\u8350\u628a\u5b9e\u4f53\u7c7b\u7684\u547d\u540d\u7a7a\u95f4\u4e5f\u653e\u8fdb\u53bb\uff0c\u56e0\u4e3a\u4ed3\u50a8 ",(0,o.kt)("inlineCode",{parentName:"p"},"IRepository<T>")," \u4f7f\u7528\u7684\u9891\u7387\u975e\u5e38\u9ad8\u3002"),(0,o.kt)("p",{parentName:"div"},"\u53e6\u5916\u63a8\u8350\u5927\u5bb6\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio")," \u4e2d\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"CodeMaid")," \u63d2\u4ef6\uff08\u6ce8\u610f ",(0,o.kt)("inlineCode",{parentName:"p"},"2019")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"2022")," \u7248\u672c\uff09\u54e6\uff0c\u81ea\u52a8\u6e05\u7406\u89e3\u51b3\u65b9\u6848\u6240\u6709\u65e0\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"using"),"\uff0c\u7ed3\u5408 ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalUsings.cs")," \u975e\u5e38\u68d2\uff01"))),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u4e2a\u522b\u60c5\u51b5")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u53ef\u80fd\u7531\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio")," \u7248\u672c\u7684\u95ee\u9898\uff0c\u5bfc\u81f4 ",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalUsings.cs")," \u5b9a\u4e49\u51fa\u9519\uff0c\u8fd9\u65f6\u5019\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," \u540e\u9762\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"global::"),"\uff0c\u5982\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"global using global::Furion;\n")))),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1}",showLineNumbers:!0,"{1}":!0},"// \u65e0\u9700 using Furion \u7684\u547d\u540d\u7a7a\u95f4\u4e86\u54e6\uff0c\u6e05\u723d\u4e86\u4e0d\u5c11\n\nnamespace Your.Application;\n\npublic class DefaultAppService : IDynamicApiController\n{\n    private readonly IRepository<BoardCard> _boardCardRepository;\n    private readonly IRepository<BoardGroup> _boardGroupRepository;\n    private readonly IRepository<BoardCardAttachment> _boardCardAttachmentRepository;\n    private readonly IRepository<BoardCardUser> _boardCardUserRepository;\n}\n\n// ....\n")),(0,o.kt)("img",{src:(0,r.Z)("img/cd2223.png")}),(0,o.kt)("h3",{id:"2631-\u9ed8\u8ba4\u5168\u5c40-using"},"2.6.3.1 \u9ed8\u8ba4\u5168\u5c40 ",(0,o.kt)("inlineCode",{parentName:"h3"},"using")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5b9e\u9645\u4e0a\u5fae\u8f6f\u5df2\u7ecf\u81ea\u52a8\u628a\u4e00\u4e9b\u5e38\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"strong"},"using")," \u5728\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u4e2d\u81ea\u52a8\u8865\u4e0a\u4e86"),"\uff0c\u8def\u5f84\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee/obj/Debug/net6.0/\u9879\u76ee.GlobalUsings.cs")," \u6587\u4ef6\u4e2d\uff0c\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// <auto-generated/>\nglobal using global::System;\nglobal using global::System.Collections.Generic;\nglobal using global::System.IO;\nglobal using global::System.Linq;\nglobal using global::System.Net.Http;\nglobal using global::System.Threading;\nglobal using global::System.Threading.Tasks;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4e5f\u5c31\u662f\u4ee5\u4e0a\u7684 ",(0,o.kt)("inlineCode",{parentName:"strong"},"using")," \u65e0\u9700\u5199\u5728\u4f60\u521b\u5efa\u7684 ",(0,o.kt)("inlineCode",{parentName:"strong"},"GlobalUsings.cs")," \u4e2d\u4e86\uff0c\u5fae\u8f6f\u4f1a\u5728\u7f16\u8bd1\u65f6\u81ea\u52a8\u5408\u5e76\u3002")),(0,o.kt)("h2",{id:"264-\u53cd\u9988\u4e0e\u5efa\u8bae"},"2.6.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}g.isMDXComponent=!0}}]);