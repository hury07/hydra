(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{189:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return g}));var r=t(2),a=t(7),o=(t(0),t(236)),i={id:"logging",title:"Logging",sidebar_label:"Logging"},l={unversionedId:"tutorials/basic/running_your_app/logging",id:"version-1.0/tutorials/basic/running_your_app/logging",isDocsHomePage:!1,title:"Logging",description:"Example",source:"@site/versioned_docs/version-1.0/tutorials/basic/running_your_app/4_logging.md",slug:"/tutorials/basic/running_your_app/logging",permalink:"/docs/tutorials/basic/running_your_app/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/basic/running_your_app/4_logging.md",version:"1.0",lastUpdatedBy:"Rosario Scalise",lastUpdatedAt:1603166285,sidebar_label:"Logging",sidebar:"version-1.0/docs",previous:{title:"Output/Working directory",permalink:"/docs/tutorials/basic/running_your_app/working_directory"},next:{title:"Debugging",permalink:"/docs/tutorials/basic/running_your_app/debugging"}},c=[],p={rightToc:c};function g(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/examples/tutorials/basic/running_your_hydra_app/4_logging/my_app.py"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example-informational",alt:"Example"})))),Object(o.b)("p",null,"People often do not use Python logging due to the setup cost.\nHydra solves that by configuring the Python logging for you."),Object(o.b)("p",null,"By default Hydra logs at the INFO level to both the console and a log file in the automatic working directory."),Object(o.b)("p",null,"Example of logging with Hydra:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'import logging\nfrom omegaconf import DictConfig\nimport hydra\n\n# A logger for this file\nlog = logging.getLogger(__name__)\n\n@hydra.main()\ndef my_app(_cfg: DictConfig) -> None:\n    log.info("Info level message")\n    log.debug("Debug level message")\n\nif __name__ == "__main__":\n    my_app()\n\n$ python my_app.py\n[2019-06-27 00:52:46,653][__main__][INFO] - Info level message\n\n')),Object(o.b)("p",null,"You can enable DEBUG level logging from the command line  by overriding ",Object(o.b)("inlineCode",{parentName:"p"},"hydra.verbose"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"hydra.verbose")," can be a Boolean, a String or a List:"),Object(o.b)("p",null,"Examples:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hydra.verbose=true")," : Sets the log level of ",Object(o.b)("strong",{parentName:"li"},"all")," loggers to ",Object(o.b)("inlineCode",{parentName:"li"},"DEBUG")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hydra.verbose=NAME")," : Sets the log level of the logger ",Object(o.b)("inlineCode",{parentName:"li"},"NAME")," to ",Object(o.b)("inlineCode",{parentName:"li"},"DEBUG")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hydra.verbose=[NAME1,NAME2]"),": Sets the log level of the loggers ",Object(o.b)("inlineCode",{parentName:"li"},"NAME1")," and ",Object(o.b)("inlineCode",{parentName:"li"},"NAME2")," to ",Object(o.b)("inlineCode",{parentName:"li"},"DEBUG"))),Object(o.b)("p",null,"Example output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py hydra.verbose=[__main__,hydra]\n[2019-09-29 13:06:00,880] - Installed Hydra Plugins\n[2019-09-29 13:06:00,880] - ***********************\n...\n[2019-09-29 13:06:00,896][__main__][INFO] - Info level message\n[2019-09-29 13:06:00,896][__main__][DEBUG] - Debug level message\n")),Object(o.b)("p",null,"You can disable the logging output using by setting ",Object(o.b)("inlineCode",{parentName:"p"},"hydra/job_logging")," to `disabled'   "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"$ python my_app.py hydra/job_logging=disabled\n<NO OUTPUT>\n")),Object(o.b)("p",null,"Logging can be ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configure_hydra/logging"}),"customized"),"."))}g.isMDXComponent=!0},236:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),g=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=g(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=g(t),s=r,d=b["".concat(i,".").concat(s)]||b[s]||u[s]||o;return t?a.a.createElement(d,l(l({ref:n},p),{},{components:t})):a.a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);