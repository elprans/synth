(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{118:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(t),u=r,d=b["".concat(s,".").concat(u)]||b[u]||m[u]||i;return t?a.a.createElement(d,o(o({ref:n},l),{},{components:t})):a.a.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(118)),s={},o={unversionedId:"content/series",id:"content/series",isDocsHomePage:!1,title:"series",description:"Synth's series generator creates streams of events based on different 'processes' (a process here can be an auto-correlated process, a poisson process, a cyclical process etc.).",source:"@site/docs/content/series.md",slug:"/content/series",permalink:"/synth/content/series",editUrl:"https://github.com/openquery-io/synth/edit/master/docs/docs/content/series.md",version:"current",sidebar:"docsSidebar",previous:{title:"same_as",permalink:"/synth/content/same-as"}},c=[{value:"incrementing",id:"incrementing",children:[]},{value:"poisson",id:"poisson",children:[]},{value:"cyclical",id:"cyclical",children:[]},{value:"zip",id:"zip",children:[]}],l={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Synth's ",Object(i.b)("inlineCode",{parentName:"p"},"series")," generator creates streams of events based on different 'processes' (a process here can be an auto-correlated process, a poisson process, a cyclical process etc.)."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"series")," generators are used in several different contexts:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Creating fake events for event-driven systems"),Object(i.b)("li",{parentName:"ul"},"Modelling time-independent events like 'orders' on a website or 'requests' made to a web server"),Object(i.b)("li",{parentName:"ul"},"Modelling seasonal behaviour, like an increase in flight frequency for a given airline over the summer")),Object(i.b)("h4",{id:"date-time"},"Date Time"),Object(i.b)("p",null,"All ",Object(i.b)("inlineCode",{parentName:"p"},"series")," are modelled on so called 'Naive Date Times' - that is 'Date Times' that do not have a timezone. This can be interpreted as Timestamps in UTC. There is future work to improve functionality to add other chrono types."),Object(i.b)("p",null,"The format of a series can be set by using the optional ",Object(i.b)("inlineCode",{parentName:"p"},"format")," field; if ",Object(i.b)("inlineCode",{parentName:"p"},"format")," is omitted, the default format is ",Object(i.b)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%M:%S"),"."),Object(i.b)("h4",{id:"duration"},"Duration"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"series")," generators will often make use of durations as generation parameters. A duration as a quantity like '1 hour' or '5.7 milliseconds'."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"series")," generators use ",Object(i.b)("a",{parentName:"p",href:"https://docs.rs/humantime/2.1.0/humantime/fn.parse_duration.html"},Object(i.b)("inlineCode",{parentName:"a"},"humantime"))," to make it easy to specify human readable quantities like ",Object(i.b)("inlineCode",{parentName:"p"},"3hr 5m 2s"),"."),Object(i.b)("h2",{id:"incrementing"},"incrementing"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"incrementing")," series simply increments at a fixed duration. This could be for example a stock ticker."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"incrementing")," series has 2 parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"start"),": The time at which the first event occurs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"increment"),": The increment between two consecutive events")),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("p",null,"Below is an example stock ticker for AAPL sampled at regular intervals every minute. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "constant": 10\n    },\n    "content": {\n        "type": "object",\n        "ticker": {\n            "type": "string",\n            "pattern": "AAPL"\n        },\n        "timestamp": {\n            "type": "series",\n            "format" : "%Y-%m-%d %H:%M:%S",\n            "incrementing": {\n                "start" : "2021-02-01 09:00:00",\n                "increment" : "1m"\n            }\n        },\n        "price": {\n            "type": "number",\n            "subtype" : "f64",\n            "range" : {\n                "high": 105, \n                "low": 100,\n                "step": 0.01\n            }\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"poisson"},"poisson"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"poisson")," series models independent events which occur at random, but which tend to occur at an average rate when viewed as a group."),Object(i.b)("p",null,"One example of a poisson process could be earthquakes occurring during the course of a year, or customers arriving at a store, or cars crossing a bridge etc."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"poisson")," series has 2 parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"start"),": The time at which the first event occurs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rate"),": The average duration between two consecutive events")),Object(i.b)("h4",{id:"example-1"},"Example"),Object(i.b)("p",null,"The below is an example HTTP server, which was brought up on a given date and has an average of 1 request every 1 minute."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "constant": 10\n    },\n    "content": {\n        "type": "object",\n        "ip": {\n            "type": "string",\n            "faker": {\n                "generator": "ipv4"\n            }\n        },\n        "timestamp": {\n            "type": "series",\n            "format": "%d/%b/%Y:%H:%M:%S",\n            "poisson": {\n                "start": "10/Oct/2000:13:55:36",\n                "rate": "1m"\n            }\n        },\n        "request": {\n            "type": "string",\n            "categorical": {\n                "GET /index.html HTTP/1.0": 10,\n                "GET /home.html HTTP/1.0": 5,\n                "GET /login.html HTTP/1.0": 3\n            }\n        },\n        "response_code": {\n            "type": "number",\n            "subtype": "u64",\n            "categorical": {\n                "200": 95,\n                "500": 5\n            }\n        },\n        "response_size": {\n            "type": "number",\n            "range": {\n                "low": 500,\n                "high": 3000,\n                "step": 1\n            }\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"cyclical"},"cyclical"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"cyclical")," series models events which have a 'cyclical' or 'periodic' frequency. "),Object(i.b)("p",null,"For example, the frequency of orders placed in an online store peaks during the day and is at it's lowest during the night."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"cyclical")," series has 4 parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"start"),": The time at which the first event occurs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"max_rate"),": The maximum average duration between two events."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"min_rate"),": The minimum average duration between two events"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"period"),": The period of the cyclical series.")),Object(i.b)("h4",{id:"example-2"},"Example"),Object(i.b)("p",null,"The below is a minimal example of orders being placed in an online store."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "constant": 10\n    },\n    "content": {\n        "type": "object",\n        "order_id": {\n            "type": "number",\n            "id": {}\n        },\n        "item": {\n            "type": "string",\n            "categorical": {\n                "t-shirt": 4,\n                "jeans": 1,\n                "jacket": 1,\n                "belt": 2\n            }\n        },\n        "timestamp": {\n            "type": "series",\n            "cyclical": {\n                "start": "2021-02-01 00:00:00",\n                "period": "1d",\n                "min_rate": "10m",\n                "max_rate": "30s"\n            }\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"zip"},"zip"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"zip")," series combines 2 or more series together by ",Object(i.b)("inlineCode",{parentName:"p"},"zipping")," the output together. That is, the two series are super imposed."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"zip")," series has 1 parameter:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"series"),": The child series to be zipped together")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "constant": 10\n    },\n    "content": {\n        "type": "object",\n        "order_id": {\n            "type": "number",\n            "id": {}\n        },\n        "item": {\n            "type": "string",\n            "categorical": {\n                "t-shirt": 4,\n                "jeans": 1,\n                "jacket": 1,\n                "belt": 2\n            }\n        },\n        "timestamp": {\n            "type": "series",\n            "zip": {\n                "series": [\n                    {\n                        "cyclical": {\n                            "start": "2021-02-01 00:00:00",\n                            "period": "1w",\n                            "min_rate": "1m",\n                            "max_rate": "1s"\n                        }\n                    },\n                    {\n                        "cyclical": {\n                            "start": "2021-02-01 00:00:00",\n                            "period": "1d",\n                            "min_rate": "10m",\n                            "max_rate": "30s"\n                        }\n                    }\n                ]\n            }\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);