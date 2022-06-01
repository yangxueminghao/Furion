"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[1215],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,v=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(v,l(l({ref:n},d),{},{components:t})):a.createElement(v,l({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6344:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=t(3117),i=t(102),r=(t(7294),t(3905)),l=(t(4996),["components"]),o={id:"file-provider",title:"31. \u865a\u62df\u6587\u4ef6\u7cfb\u7edf",sidebar_label:"31. \u865a\u62df\u6587\u4ef6\u7cfb\u7edf\uff08\u4e0a\u4f20\u4e0b\u8f7d\uff09"},s=void 0,p={unversionedId:"file-provider",id:"file-provider",title:"31. \u865a\u62df\u6587\u4ef6\u7cfb\u7edf",description:"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 Furion 2.5.0 + \u7248\u672c\u4f7f\u7528\u3002",source:"@site/docs/file-provider.mdx",sourceDirName:".",slug:"/file-provider",permalink:"/furion/docs/file-provider",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/file-provider.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1652846161,formattedLastUpdatedAt:"5/18/2022",frontMatter:{id:"file-provider",title:"31. \u865a\u62df\u6587\u4ef6\u7cfb\u7edf",sidebar_label:"31. \u865a\u62df\u6587\u4ef6\u7cfb\u7edf\uff08\u4e0a\u4f20\u4e0b\u8f7d\uff09"},sidebar:"docs",previous:{title:"30. \u8131\u654f\u5904\u7406",permalink:"/furion/docs/sensitive-detection"},next:{title:"32. \u4f1a\u8bdd\u548c\u72b6\u6001\u7ba1\u7406",permalink:"/furion/docs/sesssion-state"}},d={},m=[{value:"31.1 \u5173\u4e8e\u6587\u4ef6\u7cfb\u7edf",id:"311-\u5173\u4e8e\u6587\u4ef6\u7cfb\u7edf",level:2},{value:"31.1.1 \u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b",id:"3111-\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b",level:3},{value:"31.2 \u6ce8\u518c\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\u670d\u52a1",id:"312-\u6ce8\u518c\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\u670d\u52a1",level:2},{value:"31.3 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf <code>IFileProvider</code> \u5b9e\u4f8b",id:"313-\u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf-ifileprovider-\u5b9e\u4f8b",level:2},{value:"31.3.1 <code>Func&lt;FileProviderTypes, object, IFileProvider&gt;</code> \u65b9\u5f0f",id:"3131-funcfileprovidertypes-object-ifileprovider-\u65b9\u5f0f",level:3},{value:"31.3.2 <code>FS</code> \u9759\u6001\u7c7b\u65b9\u5f0f",id:"3132-fs-\u9759\u6001\u7c7b\u65b9\u5f0f",level:3},{value:"31.4 <code>IFileProvider</code> \u5e38\u89c1\u64cd\u4f5c",id:"314-ifileprovider-\u5e38\u89c1\u64cd\u4f5c",level:2},{value:"31.4.1 \u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9",id:"3141-\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9",level:3},{value:"31.4.2 \u83b7\u53d6\u6587\u4ef6\u76ee\u5f55\u5185\u5bb9\uff08\u9700\u9012\u5f52\u67e5\u627e\uff09",id:"3142-\u83b7\u53d6\u6587\u4ef6\u76ee\u5f55\u5185\u5bb9\u9700\u9012\u5f52\u67e5\u627e",level:3},{value:"31.4.4 \u76d1\u542c\u6587\u4ef6\u53d8\u5316",id:"3144-\u76d1\u542c\u6587\u4ef6\u53d8\u5316",level:3},{value:"31.5 \u6a21\u5757\u5316\u9759\u6001\u8d44\u6e90\u914d\u7f6e",id:"315-\u6a21\u5757\u5316\u9759\u6001\u8d44\u6e90\u914d\u7f6e",level:2},{value:"31.6 \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",id:"316-\u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d",level:2},{value:"31.6.1 \u6587\u4ef6\u4e0b\u8f7d",id:"3161-\u6587\u4ef6\u4e0b\u8f7d",level:3},{value:"31.6.2 \u6587\u4ef6\u4e0a\u4f20",id:"3162-\u6587\u4ef6\u4e0a\u4f20",level:3},{value:"31.6.3 \u5c06 <code>IFormFile</code> \u8f6c <code>byte[]</code>",id:"3163-\u5c06-iformfile-\u8f6c-byte",level:3},{value:"31.6.4 \u5c06 <code>byte[]</code> \u8f93\u51fa\u4e3a <code>Url</code> \u5730\u5740",id:"3164-\u5c06-byte-\u8f93\u51fa\u4e3a-url-\u5730\u5740",level:3},{value:"31.7 \u8bf7\u6c42\u5927\u5c0f\u63a7\u5236\uff08\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u63a7\u5236\uff09",id:"317-\u8bf7\u6c42\u5927\u5c0f\u63a7\u5236\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u63a7\u5236",level:2},{value:"31.7.1 \u5bf9\u7279\u5b9a\u7684\u63a5\u53e3\u8fdb\u884c\u63a7\u5236",id:"3171-\u5bf9\u7279\u5b9a\u7684\u63a5\u53e3\u8fdb\u884c\u63a7\u5236",level:3},{value:"31.7.2 \u5bf9\u7279\u5b9a\u63a5\u53e3\u53d6\u6d88\u9650\u5236",id:"3172-\u5bf9\u7279\u5b9a\u63a5\u53e3\u53d6\u6d88\u9650\u5236",level:3},{value:"31.7.3 \u901a\u7528\u4e2d\u95f4\u4ef6\u8fdb\u884c\u63a7\u5236",id:"3173-\u901a\u7528\u4e2d\u95f4\u4ef6\u8fdb\u884c\u63a7\u5236",level:3},{value:"31.7.4 \u5168\u5c40\u914d\u7f6e",id:"3174-\u5168\u5c40\u914d\u7f6e",level:3},{value:"31.8 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"318-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],c={toc:m};function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7248\u672c\u8bf4\u660e")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion 2.5.0 +")," \u7248\u672c\u4f7f\u7528\u3002"))),(0,r.kt)("h2",{id:"311-\u5173\u4e8e\u6587\u4ef6\u7cfb\u7edf"},"31.1 \u5173\u4e8e\u6587\u4ef6\u7cfb\u7edf"),(0,r.kt)("p",null,"\u672c\u7ae0\u6240\u8c13\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6587\u4ef6\u7cfb\u7edf")," \u6709\u70b9\u540d\u4e0d\u526f\u5b9e\uff0c\u5176\u5b9e\u6839\u672c\u7b97\u4e0d\u4e0a\u4e00\u4e2a\u7cfb\u7edf\uff0c\u5b83\u4ec5\u4ec5\u662f\u5229\u7528\u4e00\u4e2a\u62bd\u8c61\u5316\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"IFileProvider")," \u4ee5\u7edf\u4e00\u7684\u65b9\u5f0f\u63d0\u4f9b\u6240\u9700\u7684\u6587\u4ef6\u800c\u5df2\u3002\u901a\u8fc7\u8be5 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6587\u4ef6\u7cfb\u7edf")," \u53ef\u4ee5\u8bfb\u53d6\u7269\u7406\u6587\u4ef6\u548c\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\uff0c\u5305\u62ec\u76ee\u5f55\u7ed3\u679c\u8bfb\u53d6\uff0c\u6587\u4ef6\u5185\u5bb9\u8bfb\u53d6\uff0c\u6587\u4ef6\u5185\u5bb9\u76d1\u542c\u7b49\u7b49\u3002"),(0,r.kt)("h3",{id:"3111-\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b"},"31.1.1 \u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u4e86\u4e24\u79cd\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Physical"),"\uff1a\u7269\u7406\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f\u7269\u7406\u673a\u4e2d\u5b9e\u9645\u5b58\u5728\u7684\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Embedded"),"\uff1a\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\u7cfb\u7edf\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f\u8d44\u6e90\u6587\u4ef6\u5d4c\u5165\u5230\u4e86\u7a0b\u5e8f\u96c6\u4e2d\uff0c\u5e38\u7528\u4e8e\u6a21\u5757\u5316\u5f00\u53d1")),(0,r.kt)("h2",{id:"312-\u6ce8\u518c\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\u670d\u52a1"},"31.2 \u6ce8\u518c\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddVirtualFileServer();\n")),(0,r.kt)("h2",{id:"313-\u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf-ifileprovider-\u5b9e\u4f8b"},"31.3 \u83b7\u53d6\u6587\u4ef6\u7cfb\u7edf ",(0,r.kt)("inlineCode",{parentName:"h2"},"IFileProvider")," \u5b9e\u4f8b"),(0,r.kt)("h3",{id:"3131-funcfileprovidertypes-object-ifileprovider-\u65b9\u5f0f"},"31.3.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Func<FileProviderTypes, object, IFileProvider>")," \u65b9\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"Func<FileProviderTypes, object, IFileProvider>")," \u59d4\u6258\u4f9b\u6784\u9020\u51fd\u6570\u6ce8\u5165\u6216\u89e3\u6790\u670d\u52a1\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {6,8-9,11-12}",showLineNumbers:!0,"":!0,"{6,8-9,11-12}":!0},'public class PersonServices\n{\n    private readonly IFileProvider _physicalFileProvider;\n    private readonly IFileProvider _embeddedFileProvider;\n\n    public PersonServices(Func<FileProviderTypes, object, IFileProvider> fileProviderResolve)\n    {\n        // \u89e3\u6790\u7269\u7406\u6587\u4ef6\u7cfb\u7edf\n        _physicalFileProvider = fileProviderResolve(FileProviderTypes.Physical, @"c:/test");\n\n        // \u89e3\u6790\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\u7cfb\u7edf\n        _embeddedFileProvider = fileProviderResolve(FileProviderTypes.Embedded, Assembly.GetEntryAssembly());\n    }\n}\n')),(0,r.kt)("h3",{id:"3132-fs-\u9759\u6001\u7c7b\u65b9\u5f0f"},"31.3.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"FS")," \u9759\u6001\u7c7b\u65b9\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"FS")," \u9759\u6001\u7c7b\u65b9\u5f0f\u521b\u5efa\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u89e3\u6790\u7269\u7406\u6587\u4ef6\u7cfb\u7edf\nvar physicalFileProvider = FS.GetPhysicalFileProvider(@"c:/test");\n\n// \u89e3\u6790\u5d4c\u5165\u8d44\u6e90\u6587\u4ef6\u7cfb\u7edf\nvar embeddedFileProvider = FS.GetEmbeddedFileProvider(Assembly.GetEntryAssembly());\n')),(0,r.kt)("h2",{id:"314-ifileprovider-\u5e38\u89c1\u64cd\u4f5c"},"31.4 ",(0,r.kt)("inlineCode",{parentName:"h2"},"IFileProvider")," \u5e38\u89c1\u64cd\u4f5c"),(0,r.kt)("h3",{id:"3141-\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9"},"31.4.1 \u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'byte[] buffer;\nusing (Stream readStream = _fileProvider.GetFileInfo("\u4f60\u7684\u6587\u4ef6\u8def\u5f84").CreateReadStream())\n{\n    buffer = new byte[readStream.Length];\n    await readStream.ReadAsync(buffer.AsMemory(0, buffer.Length));\n}\n\n// \u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9\nvar content = Encoding.UTF8.GetString(buffer);\n')),(0,r.kt)("h3",{id:"3142-\u83b7\u53d6\u6587\u4ef6\u76ee\u5f55\u5185\u5bb9\u9700\u9012\u5f52\u67e5\u627e"},"31.4.2 \u83b7\u53d6\u6587\u4ef6\u76ee\u5f55\u5185\u5bb9\uff08\u9700\u9012\u5f52\u67e5\u627e\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var rootPath = "\u5f53\u524d\u76ee\u5f55\u8def\u5f84";\nvar fileinfos = _fileProvider.GetDirectoryContents(rootPath);\nforeach (var fileinfo in fileinfos)\n{\n    if(fileinfo.IsDirectory)\n    {\n        // \u8fd9\u91cc\u9012\u5f52\u3002\u3002\u3002\n    }\n}\n')),(0,r.kt)("h3",{id:"3144-\u76d1\u542c\u6587\u4ef6\u53d8\u5316"},"31.4.4 \u76d1\u542c\u6587\u4ef6\u53d8\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'ChangeToken.OnChange(() => _fileProvider.Watch("\u76d1\u542c\u7684\u6587\u4ef6"), () =>\n{\n    // \u8fd9\u91cc\u5199\u4f60\u7684\u903b\u8f91\n});\n')),(0,r.kt)("h2",{id:"315-\u6a21\u5757\u5316\u9759\u6001\u8d44\u6e90\u914d\u7f6e"},"31.5 \u6a21\u5757\u5316\u9759\u6001\u8d44\u6e90\u914d\u7f6e"),(0,r.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u91c7\u7528\u6a21\u5757\u5316\u5f00\u53d1\uff0c\u9759\u6001\u8d44\u6e90\u90fd\u662f\u5d4c\u5165\u8fdb\u7a0b\u5e8f\u96c6\u4e2d\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u9700\u8981\u901a\u8fc7\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"UseFileServer")," \u6307\u5b9a\u6a21\u5757\u9759\u6001\u8d44\u6e90\u8def\u5f84\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u9ed8\u8ba4\u9759\u6001\u8d44\u6e90\u8c03\u7528\uff0cwwwroot\napp.UseStaticFiles();\n\n// \u914d\u7f6e\u6a21\u5757\u5316\u9759\u6001\u8d44\u6e90\napp.UseFileServer(new FileServerOptions\n{\n    FileProvider = new EmbeddedFileProvider(\u6a21\u5757\u7a0b\u5e8f\u96c6),\n    RequestPath = "/\u6a21\u5757\u540d\u79f0",  // \u540e\u7eed\u6240\u6709\u8d44\u6e90\u90fd\u662f\u901a\u8fc7 /\u6a21\u5757\u540d\u79f0/xxx.css \u8c03\u7528\n    EnableDirectoryBrowsing = true\n});\n')),(0,r.kt)("h2",{id:"316-\u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d"},"31.6 \u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d"),(0,r.kt)("p",null,"\u5728\u5e94\u7528\u5f00\u53d1\u4e2d\uff0c\u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d\u5c5e\u4e8e\u975e\u5e38\u5e38\u7528\u7684\u529f\u80fd\uff0c\u8fd9\u91cc\u8d34\u51fa\u5e38\u89c1\u7684\u6587\u4ef6\u4e0a\u4f20\u4e0b\u8f7d\u793a\u4f8b\u3002"),(0,r.kt)("h3",{id:"3161-\u6587\u4ef6\u4e0b\u8f7d"},"31.6.1 \u6587\u4ef6\u4e0b\u8f7d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u8def\u5f84\u7684\u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,5}",showLineNumbers:!0,"{1,5}":!0},'[HttpGet, NonUnify]\npublic IActionResult FileDownload()\n{\n    string filePath = "\u8fd9\u91cc\u83b7\u53d6\u5b8c\u6574\u7684\u6587\u4ef6\u4e0b\u8f7d\u8def\u5f84";\n    return new FileStreamResult(new FileStream(filePath, FileMode.Open), "application/octet-stream") {\n        FileDownloadName = fileName // \u914d\u7f6e\u6587\u4ef6\u4e0b\u8f7d\u663e\u793a\u540d\n    };\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"byte[]")," \u65b9\u5f0f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,4}",showLineNumbers:!0,"{1,4}":!0},'[HttpGet, NonUnify]\npublic IActionResult FileDownload()\n{\n    return new FileStreamResult(byte\u6570\u7ec4, "application/octet-stream") {\n        FileDownloadName = fileName // \u914d\u7f6e\u6587\u4ef6\u4e0b\u8f7d\u663e\u793a\u540d\n    };\n}\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5173\u4e8e\u524d\u7aef\u83b7\u53d6\u6587\u4ef6\u540d")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u524d\u7aef\u83b7\u53d6\u4e0d\u5230\u6587\u4ef6\u5939\uff0c\u53ef\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'_httpContextAccessor.HttpContext.Response.Headers.Add("Content-Disposition", $"attachment; filename={\u6587\u4ef6\u540d}");\n_httpContextAccessor.HttpContext.Response.Headers.Add("Access-Control-Expose-Headers", "Content-Disposition");\n')))),(0,r.kt)("h3",{id:"3162-\u6587\u4ef6\u4e0a\u4f20"},"31.6.2 \u6587\u4ef6\u4e0a\u4f20"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u63d0\u9192")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"IFormFile")," \u7c7b\u578b\u5bf9\u5e94\u524d\u7aef\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," \u4e3a\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"multipart/form-data")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5355\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"strong"},"IFormFile")," \u7c7b\u578b\u53c2\u6570\uff08\u5b58\u50a8\u5230\u786c\u76d8\uff09"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,2,18}",showLineNumbers:!0,"":!0,"{1,2,18}":!0},'[HttpPost]\npublic async Task<IActionResult> UploadFileAsync(IFormFile file)\n{\n    // \u5982\uff1a\u4fdd\u5b58\u5230\u7f51\u7ad9\u6839\u76ee\u5f55\u4e0b\u7684 uploads \u76ee\u5f55\n    var savePath = Path.Combine(App.HostEnvironment.ContentRootPath, "uploads");\n    if (!Directory.Exists(savePath)) Directory.CreateDirectory(savePath);\n\n    //// \u8fd9\u91cc\u8fd8\u53ef\u4ee5\u83b7\u53d6\u6587\u4ef6\u7684\u4fe1\u606f\n    // var size = file.Length / 1024.0;  // \u6587\u4ef6\u5927\u5c0f KB\n    // var clientFileName = file.FileName; // \u5ba2\u6237\u7aef\u4e0a\u4f20\u7684\u6587\u4ef6\u540d\n    // var contentType = file.ContentType; // \u83b7\u53d6\u6587\u4ef6 ContentType \u6216\u89e3\u6790 MIME \u7c7b\u578b\n\n    // \u907f\u514d\u6587\u4ef6\u540d\u91cd\u590d\uff0c\u91c7\u7528 GUID \u751f\u6210\n    var fileName = Guid.NewGuid().ToString("N") + Path.GetExtension(file.FileName);\n    var filePath = Path.Combine(savePath, fileName);\n\n    // \u4fdd\u5b58\u5230\u6307\u5b9a\u8def\u5f84\n    using (var stream = System.IO.File.Create(filePath))\n    {\n        await file.CopyToAsync(stream);\n    }\n\n    // \u5728\u52a8\u6001 API \u76f4\u63a5\u8fd4\u56de\u5bf9\u8c61\u5373\u53ef\uff0c\u65e0\u9700 OK \u548c IActionResult\n    return Ok(new { filename });\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5355\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"strong"},"Base64")," \u7c7b\u578b\u53c2\u6570\uff08\u5b58\u50a8\u5230\u786c\u76d8\uff09"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,2,9,19}",showLineNumbers:!0,"":!0,"{1,2,9,19}":!0},'[HttpPost]\npublic async Task UploadFileAsync([FromBody] string fileBase64, string clientFileName)\n{\n    // \u5982\uff1a\u4fdd\u5b58\u5230\u7f51\u7ad9\u6839\u76ee\u5f55\u4e0b\u7684 uploads \u76ee\u5f55\n    var savePath = Path.Combine(App.HostEnvironment.ContentRootPath, "uploads");\n    if (!Directory.Exists(savePath)) Directory.CreateDirectory(savePath);\n\n    // \u5c06 base64 \u5b57\u7b26\u4e32\u8f6c byte[]\n    var bytes = Convert.FromBase64String(fileBase64);\n\n    // \u8fd9\u91cc\u8fd8\u53ef\u4ee5\u83b7\u53d6\u6587\u4ef6\u7684\u4fe1\u606f\n    // var size = bytes.Length / 1024.0;  // \u6587\u4ef6\u5927\u5c0f KB\n\n    // \u907f\u514d\u6587\u4ef6\u540d\u91cd\u590d\uff0c\u91c7\u7528 GUID \u751f\u6210\n    var fileName = Guid.NewGuid().ToString("N") + Path.GetExtension(clientFileName);\n    var filePath = Path.Combine(savePath, fileName);\n\n    // \u4fdd\u5b58\u5230\u6307\u5b9a\u8def\u5f84\n    using (var fs = new FileStream(filePath, FileMode.Create))\n    {\n        await fs.WriteAsync(bytes);\n    }\n\n    // \u5728\u52a8\u6001 API \u76f4\u63a5\u8fd4\u56de\u5bf9\u8c61\u5373\u53ef\uff0c\u65e0\u9700 OK \u548c IActionResult\n    return Ok(new { fileName });\n}\n')),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u7279\u522b\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Base64")," \u5b57\u7b26\u4e32\u5982\u679c\u5e26 ",(0,r.kt)("inlineCode",{parentName:"p"},"data:text/plain;base64,")," \u5f00\u5934\u5219\uff0c\u9700\u8981\u624b\u52a8\u53bb\u6389 ",(0,r.kt)("inlineCode",{parentName:"p"},",")," \u4e4b\u524d\uff08\u542b\u9017\u53f7\uff09\u7684\u5b57\u7b26\u4e32\u3002"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u591a\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"strong"},"List<IFormFile>")," \u7c7b\u578b\u53c2\u6570\uff08\u5b58\u50a8\u5230\u786c\u76d8\uff09"))),(0,r.kt)("p",null,"\u4ee3\u7801\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5355\u6587\u4ef6\u5904\u7406\u4e00\u81f4"),"\uff0c\u53ea\u9700 ",(0,r.kt)("inlineCode",{parentName:"p"},"foreach")," \u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,12}",showLineNumbers:!0,"":!0,"{1,12}":!0},'[HttpPost]\npublic async Task<IActionResult> UploadFileAsync(List<IFormFile> files)\n{\n    // \u4fdd\u5b58\u5230\u7f51\u7ad9\u6839\u76ee\u5f55\u4e0b\u7684 uploads \u76ee\u5f55\n    var savePath = Path.Combine(App.HostEnvironment.ContentRootPath, "uploads");\n    if(!Directory.Exists(savePath)) Directory.CreateDirectory(savePath);\n\n    // \u603b\u4e0a\u4f20\u5927\u5c0f\n    long size = files.Sum(f => f.Length);\n\n    // \u904d\u5386\u6240\u6709\u6587\u4ef6\u9010\u4e00\u4e0a\u4f20\n    foreach (var formFile in files)\n    {\n        if (formFile.Length > 0)\n        {\n            // \u907f\u514d\u6587\u4ef6\u540d\u91cd\u590d\uff0c\u91c7\u7528 GUID \u751f\u6210\n            var fileName = Guid.NewGuid().ToString("N") + Path.GetExtension(clientFileName);\n            var filePath = Path.Combine(savePath, fileName);\n\n            // \u4fdd\u5b58\u5230\u6307\u5b9a\u8def\u5f84\n            using (var stream = System.IO.File.Create(filePath))\n            {\n                await formFile.CopyToAsync(stream);\n            }\n        }\n    }\n\n    // \u5728\u52a8\u6001 API \u76f4\u63a5\u8fd4\u56de\u5bf9\u8c61\u5373\u53ef\uff0c\u65e0\u9700 OK \u548c IActionResult\n    return Ok(new { count = files.Count, size });\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u591a\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"strong"},"List<string>")," ",(0,r.kt)("inlineCode",{parentName:"strong"},"Base64")," \u7c7b\u578b\u53c2\u6570\uff08\u5b58\u50a8\u5230\u786c\u76d8\uff09"))),(0,r.kt)("p",null,"\u4ee3\u7801\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"\u5355\u6587\u4ef6\u5904\u7406\u4e00\u81f4"),"\uff0c\u53ea\u9700 ",(0,r.kt)("inlineCode",{parentName:"p"},"foreach")," \u5373\u53ef\uff08\u53c2\u4e0a\uff09\u3002"),(0,r.kt)("h3",{id:"3163-\u5c06-iformfile-\u8f6c-byte"},"31.6.3 \u5c06 ",(0,r.kt)("inlineCode",{parentName:"h3"},"IFormFile")," \u8f6c ",(0,r.kt)("inlineCode",{parentName:"h3"},"byte[]")),(0,r.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u5c06\u6587\u4ef6\u8f6c\u6362\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"byte[]")," \u5b58\u50a8\u5230\u6570\u636e\u5e93\uff0c\u800c\u4e0d\u662f\u5b58\u50a8\u5230\u786c\u76d8\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {4-8}",showLineNumbers:!0,"{4-8}":!0},"[HttpPost]\npublic async Task<IActionResult> UploadFileAsync(IFormFile file)\n{\n    var fileLength = formFile.Length;\n    using var stream = formFile.OpenReadStream();\n    var bytes = new byte[fileLength];\n\n    stream.Read(bytes, 0, (int)fileLength);\n\n    // \u8fd9\u91cc\u5c06 bytes \u5b58\u50a8\u5230\u4f60\u60f3\u8981\u7684\u4ecb\u8d28\u4e2d\u5373\u53ef\n}\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4fbf\u6377\u62d3\u5c55\u65b9\u6cd5")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728 Furion ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.2.0")," \u65b0\u589e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"IFormFile")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ToByteArray")," \u62d3\u5c55\uff0c\u5982:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {4}",showLineNumbers:!0,"":!0,"{4}":!0},"[HttpPost]\npublic async Task<IActionResult> UploadFileAsync(IFormFile file)\n{\n    var bytes = file.ToByteArray();\n\n    // \u8fd9\u91cc\u5c06 bytes \u5b58\u50a8\u5230\u4f60\u60f3\u8981\u7684\u4ecb\u8d28\u4e2d\u5373\u53ef\n}\n")))),(0,r.kt)("h3",{id:"3164-\u5c06-byte-\u8f93\u51fa\u4e3a-url-\u5730\u5740"},"31.6.4 \u5c06 ",(0,r.kt)("inlineCode",{parentName:"h3"},"byte[]")," \u8f93\u51fa\u4e3a ",(0,r.kt)("inlineCode",{parentName:"h3"},"Url")," \u5730\u5740"),(0,r.kt)("p",null,"\u7531\u4e8e\u4e00\u4e9b\u9879\u76ee\u76f4\u63a5\u5c06\u6587\u4ef6\u4e8c\u8fdb\u5236\u5b58\u50a8\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u8bfb\u53d6\u5230\u5185\u5b58\u7684\u65f6\u5019\u90fd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"byte[]")," \u6570\u7ec4\uff0c\u6bd4\u5982\u6211\u4eec\u5c06\u56fe\u7247\u6587\u4ef6\u5b58\u50a8\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u7136\u540e\u524d\u7aef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Url")," \u94fe\u63a5\u8fdb\u884c\u8bbf\u95ee\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"byte[]")," \u8f6c\u6362\u4e3a\u6709\u6548\u7684\u8d44\u6e90\u8def\u5f84\u683c\u5f0f\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,7}",showLineNumbers:!0,"{1,7}":!0},"[NonUnify, HttpGet, AllowAnonymous]\npublic async Task<IActionResult> attachment(string resourceId)\n{\n    // \u6839\u636e resourceId \u67e5\u8be2 byte[] \u5b57\u8282\u6570\u7ec4\u548c content-type\n\n    // \u8fd4\u56de FileContentResult \u7c7b\u578b\n    return new FileContentResult(\u5b57\u8282\u6570\u7ec4\uff0ccontent-type);\n}\n")),(0,r.kt)("p",null,"\u4e4b\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost/attachment/\u8d44\u6e90id")," \u8bbf\u95ee\u6587\u4ef6\u6216\u56fe\u7247\u4e86\u3002"),(0,r.kt)("h2",{id:"317-\u8bf7\u6c42\u5927\u5c0f\u63a7\u5236\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u63a7\u5236"},"31.7 \u8bf7\u6c42\u5927\u5c0f\u63a7\u5236\uff08\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u63a7\u5236\uff09"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Web")," \u9879\u76ee\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Kestrel")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpSys")," \u90fd\u5f3a\u5236\u5b9e\u65bd ",(0,r.kt)("inlineCode",{parentName:"p"},"30M (~28.6MiB)")," \u7684\u6700\u5927\u8bf7\u6c42\u6b63\u6587\u5927\u5c0f\u9650\u5236\uff0c\u5982\u679c\u8bf7\u6c42\u6b63\u6587\u5927\u5c0f\u8d85\u8fc7\u914d\u7f6e\u7684\u6700\u5927\u8bf7\u6c42\u6b63\u6587\u5927\u5c0f\u9650\u5236\uff0c\u5219\u5f15\u53d1 ",(0,r.kt)("inlineCode",{parentName:"p"},"Request body too large. The max request body size is xxxxx")," \u5f02\u5e38\uff0c\u72b6\u6001\u7801\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"413")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"500"),"\u3002"),(0,r.kt)("h3",{id:"3171-\u5bf9\u7279\u5b9a\u7684\u63a5\u53e3\u8fdb\u884c\u63a7\u5236"},"31.7.1 \u5bf9\u7279\u5b9a\u7684\u63a5\u53e3\u8fdb\u884c\u63a7\u5236"),(0,r.kt)("p",null,"\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"[RequestSizeLimit]")," \u7279\u6027\u8fdb\u884c\u7279\u5b9a\u9650\u5236"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {2}",showLineNumbers:!0,"{2}":!0},"[HttpPost]\n[RequestSizeLimit(100_000_000)]\npublic IActionResult MyAction([FromBody] MyViewModel data)\n{\n}\n")),(0,r.kt)("h3",{id:"3172-\u5bf9\u7279\u5b9a\u63a5\u53e3\u53d6\u6d88\u9650\u5236"},"31.7.2 \u5bf9\u7279\u5b9a\u63a5\u53e3\u53d6\u6d88\u9650\u5236"),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u9700\u8981\u5bf9\u8bf7\u6c42\u5927\u5c0f\u8fdb\u884c\u9650\u5236\uff0c\u4e5f\u5c31\u662f\u652f\u6301\u63d0\u4ea4\u65e0\u9650\u5927\u5c0f\uff0c\u5219\u8d34 ",(0,r.kt)("inlineCode",{parentName:"p"},"[DisableRequestSizeLimit]")," \u7279\u6027\u5373\u53ef\u3002"),(0,r.kt)("h3",{id:"3173-\u901a\u7528\u4e2d\u95f4\u4ef6\u8fdb\u884c\u63a7\u5236"},"31.7.3 \u901a\u7528\u4e2d\u95f4\u4ef6\u8fdb\u884c\u63a7\u5236"),(0,r.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4e2d\u95f4\u4ef6\u7684\u65b9\u5f0f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers {1,3}",showLineNumbers:!0,"{1,3}":!0},"app.Run(async context =>\n{\n    context.Features.Get<IHttpMaxRequestBodySizeFeature>().MaxRequestBodySize = 100_000_000; // \u8bbe\u7f6e null \u5c31\u662f\u4e0d\u9650\u5236\uff0c\u5177\u4f53\u503c\u5c31\u662f\u9650\u5236\u6700\u5927\u591a\u5c11 M\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"MaxRequestBodySize")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \uff0c\u5219\u7b49\u540c\u4e8e\u53d6\u6d88\u9650\u5236\uff0c\u4e5f\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"[DisableRequestSizeLimit]")," \u7684\u6548\u679c\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6709\u65f6\u5019\u914d\u7f6e\u4e86\u4e2d\u95f4\u4ef6\u6548\u679c\u53d1\u73b0\u6ca1\u8d77\u4f5c\u7528\uff0c\u5f88\u6709\u53ef\u80fd\u548c\u4e2d\u95f4\u4ef6\u987a\u5e8f\u6709\u5173\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},".IsReadOnly")," \u5c5e\u6027\u5224\u65ad\uff0c\u5982\u679c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \uff0c\u8bf4\u660e\u4f60\u7684\u914d\u7f6e\u65e0\u6548\uff0c\u53ea\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u624d\u6709\u6548\u3002"))),(0,r.kt)("h3",{id:"3174-\u5168\u5c40\u914d\u7f6e"},"31.7.4 \u5168\u5c40\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Kestrel")," \u65b9\u5f0f\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},".UseKestrel(options =>\n{\n    options.Limits.MaxRequestBodySize = null;   // \u8bbe\u7f6e null \u5c31\u662f\u4e0d\u9650\u5236\uff0c\u5177\u4f53\u503c\u5c31\u662f\u9650\u5236\u6700\u5927\u591a\u5c11 M\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HttpSys")," \u65b9\u5f0f\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},".UseHttpSys(options =>\n{\n    options.MaxRequestBodySize = 100_000_000;   // \u8bbe\u7f6e null \u5c31\u662f\u4e0d\u9650\u5236\uff0c\u5177\u4f53\u503c\u5c31\u662f\u9650\u5236\u6700\u5927\u591a\u5c11 M\n}\n")),(0,r.kt)("h2",{id:"318-\u53cd\u9988\u4e0e\u5efa\u8bae"},"31.8 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);