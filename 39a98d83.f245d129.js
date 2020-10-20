(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{103:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return b}));var n=t(2),r=t(7),i=(t(0),t(236)),c={id:"overriding_packages",title:"Overriding packages"},o={unversionedId:"advanced/overriding_packages",id:"version-1.0/advanced/overriding_packages",isDocsHomePage:!1,title:"Overriding packages",description:"Example application",source:"@site/versioned_docs/version-1.0/advanced/overriding_packages.md",slug:"/advanced/overriding_packages",permalink:"/docs/advanced/overriding_packages",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/advanced/overriding_packages.md",version:"1.0",lastUpdatedBy:"Rosario Scalise",lastUpdatedAt:1603166285,sidebar:"version-1.0/docs",previous:{title:"extended",permalink:"/docs/advanced/override_grammar/extended"},next:{title:"Config Search Path",permalink:"/docs/advanced/search_path"}},l=[{value:"Package specification",id:"package-specification",children:[]},{value:"Overriding the package in a file via a package directive",id:"overriding-the-package-in-a-file-via-a-package-directive",children:[]},{value:"Overriding the package via the defaults list",id:"overriding-the-package-via-the-defaults-list",children:[]},{value:"Overriding the package via the command line",id:"overriding-the-package-via-the-command-line",children:[]},{value:"History and future of the package directive",id:"history-and-future-of-the-package-directive",children:[]}],p={rightToc:l};function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/advanced/package_overrides"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"})))),Object(i.b)("p",null,"The contents of a config file can be relocated, or replicated, within the config, via package overrides."),Object(i.b)("h3",{id:"package-specification"},"Package specification"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Definition of a package"',title:'"Definition',of:!0,a:!0,'package"':!0}),"PACKAGE      : _global_ | COMPONENT[.COMPONENT]*\nCOMPONENT    : _group_ | _name_ | \\w+\n\n_global_     : the top level package (equivalent to the empty string).\n_group_      : the config group in dot notation: foo/bar/zoo.yaml -> foo.bar\n_name_       : the config file name: foo/bar/zoo.yaml -> zoo\n")),Object(i.b)("h3",{id:"overriding-the-package-in-a-file-via-a-package-directive"},"Overriding the package in a file via a package directive"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"@package directive")," specifies a common ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/terminology#package"}),"package")," for all nodes in the config file.\nIt must be placed at the top of each ",Object(i.b)("inlineCode",{parentName:"p"},"config group file"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Package directive examples"',title:'"Package',directive:!0,'examples"':!0}),"# @package foo.bar\n# @package _global_\n# @package _group_\n# @package _group_._name_\n# @package foo._group_._name_\n")),Object(i.b)("h4",{id:"examples"},"Examples"),Object(i.b)("h5",{id:"a-package-directive-with-a-literal"},"A package directive with a literal"),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="mysql.yaml" {1-2}',title:'"mysql.yaml"',"{1-2}":!0}),"# @package foo.bar\n\ndb:\n  host: localhost\n  port: 3306\n"))),Object(i.b)("div",{className:"col  col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Interpretation" {1-2}',title:'"Interpretation"',"{1-2}":!0}),"foo:\n  bar:\n    db:\n      host: localhost\n      port: 3306\n")))),Object(i.b)("h5",{id:"a-package-directive-with-_group_-and-_name_"},"A package directive with ",Object(i.b)("inlineCode",{parentName:"h5"},"_group_")," and ",Object(i.b)("inlineCode",{parentName:"h5"},"_name_")),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml" {1-2}',title:'"db/mysql.yaml"',"{1-2}":!0}),"# @package _group_._name_\n\nhost: localhost\nport: 3306\n"))),Object(i.b)("div",{className:"col  col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Interpretation" {1-2}',title:'"Interpretation"',"{1-2}":!0}),"db:\n  mysql:\n    host: localhost\n    port: 3306\n")))),Object(i.b)("h3",{id:"overriding-the-package-via-the-defaults-list"},"Overriding the package via the defaults list"),Object(i.b)("p",null,"The following example adds the ",Object(i.b)("inlineCode",{parentName:"p"},"mysql")," config in the packages ",Object(i.b)("inlineCode",{parentName:"p"},"db.src")," and ",Object(i.b)("inlineCode",{parentName:"p"},"db.dst"),"."),Object(i.b)("div",{className:"row"},Object(i.b)("div",{className:"col col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n - db@db.src: mysql\n - db@db.dst: mysql\n\n\n\n\n"))),Object(i.b)("div",{className:"col  col--6"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Interpretation"',title:'"Interpretation"'}),"db:\n  src:\n    host: localhost\n    port: 3306\n  dst:\n    host: localhost\n    port: 3306\n")))),Object(i.b)("h3",{id:"overriding-the-package-via-the-command-line"},"Overriding the package via the command line"),Object(i.b)("p",null,"Overriding the package for ",Object(i.b)("inlineCode",{parentName:"p"},"db")," specified in the defaults list from ",Object(i.b)("inlineCode",{parentName:"p"},"db.dst")," to ",Object(i.b)("inlineCode",{parentName:"p"},"backup"),": "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Change the package\n$ python my_app.py db@db.dst:backup\n# Change both the package and config group option\n$ python my_app.py db@db.dst:backup=postgresql\n")),Object(i.b)("p",null,"Overriding the package of a config group option not in the defaults list:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"python my_app.py +webserver@prod=apache\n")),Object(i.b)("p",null,"For more details, see the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/advanced/override_grammar/basic"}),"Command line overrides")," page."),Object(i.b)("h3",{id:"history-and-future-of-the-package-directive"},"History and future of the package directive"),Object(i.b)("p",null,"The primary config, named in ",Object(i.b)("inlineCode",{parentName:"p"},"@hydra.main()")," should not have a package directive."),Object(i.b)("p",null,"For config files in config groups the default depends on the version:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In ",Object(i.b)("strong",{parentName:"li"},"Hydra 0.11"),", there was an implicit default of ",Object(i.b)("inlineCode",{parentName:"li"},"_global_")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Hydra 1.0")," the default is ",Object(i.b)("inlineCode",{parentName:"li"},"_global_"),Object(i.b)("br",{parentName:"li"}),"A warning is issued for each ",Object(i.b)("strong",{parentName:"li"},"config group file")," without a ",Object(i.b)("inlineCode",{parentName:"li"},"@package")," directive."),Object(i.b)("li",{parentName:"ul"},"In ",Object(i.b)("strong",{parentName:"li"},"Hydra 1.1")," the default for ",Object(i.b)("strong",{parentName:"li"},"config group files")," will become ",Object(i.b)("inlineCode",{parentName:"li"},"_group_"))),Object(i.b)("p",null,"By adding an explicit ",Object(i.b)("inlineCode",{parentName:"p"},"@package")," to your configs files, you guarantee that they",Object(i.b)("br",{parentName:"p"}),"\n","will not break when you upgrade to Hydra 1.1."))}b.isMDXComponent=!0},236:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),b=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=b(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},g=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(t),g=n,m=d["".concat(c,".").concat(g)]||d[g]||s[g]||i;return t?r.a.createElement(m,o(o({ref:a},p),{},{components:t})):r.a.createElement(m,o({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=g;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<i;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);