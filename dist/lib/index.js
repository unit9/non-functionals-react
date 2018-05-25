!function(e,n){for(var t in n)e[t]=n[t]}(exports,function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=20)}([function(e,n){e.exports=require("styled-components")},function(e,n){e.exports=require("prop-types")},function(e,n){e.exports=require("react")},function(e,n){e.exports=require("ua-parser-js")},function(e,n){e.exports=require("lodash.debounce")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Description=n.Title=n.Icon=n.Section=void 0;var r,o=(r=t(0))&&r.__esModule?r:{default:r};function i(){var e=l(["\n\n  font-size: 22px;\n  text-align: center;\n  margin: 0;\n\n"]);return i=function(){return e},e}function u(){var e=l(["\n  \n  font-size: 34px;\n  text-align: center;\n  margin: 0 0 10px 0;\n\n"]);return u=function(){return e},e}function a(){var e=l(["\n\n  display: block;\n  margin-bottom: 30px;\n\n"]);return a=function(){return e},e}function c(){var e=l(["\n  \n  display: ",";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n\n  background-color: ",";\n  background-image: ",";\n  background-size: cover;\n\n  color: ",";\n\n  z-index: ",";\n\n"]);return c=function(){return e},e}function l(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var f=o.default.div(c(),function(e){return e.active?"flex":"none"},function(e){return e.backgroundColor},function(e){var n=e.backgroundImage;return n&&"url(".concat(n,")")},function(e){return e.fontColor},function(e){return e.zIndex});n.Section=f;var s=o.default.img(a());n.Icon=s;var d=o.default.h1(u());n.Title=d;var p=o.default.p(i());n.Description=p},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.WindowTooSmall=void 0;var r=c(t(2)),o=c(t(1)),i=c(t(3)),u=c(t(4)),a=t(5);function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,n){return!n||"object"!==l(n)&&"function"!=typeof n?b(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=(new i.default).getResult().device.type,y=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return s(r,(t=r=s(this,(e=d(n)).call.apply(e,[this].concat(i))),g(b(b(r)),"state",{active:!1}),g(b(b(r)),"onResize",function(){var e=r.props,n=e.minWidth,t=e.minHeight;!m&&(window.innerWidth<n||window.innerHeight<t)?r.setState({active:!0}):r.setState({active:!1})}),t))}var t,o,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,r.default.Component),t=n,(o=[{key:"componentWillMount",value:function(){window.addEventListener("resize",(0,u.default)(this.onResize,50)),this.onResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){var e=this.props,n=e.icon,t=e.title,o=e.description,i=e.fontColor,u=e.backgroundColor,c=e.backgroundImage,l=e.zIndex,f=this.state.active;return r.default.createElement(a.Section,{className:"WindowTooSmall",active:f,backgroundColor:u,backgroundImage:c,fontColor:i,zIndex:l},n&&r.default.createElement(a.Icon,{className:"WindowTooSmall-Icon",src:n}),r.default.createElement(a.Title,{className:"WindowTooSmall-Title"},t),r.default.createElement(a.Description,{className:"WindowTooSmall-Description",dangerouslySetInnerHTML:{__html:o}}))}}])&&f(t.prototype,o),i&&f(t,i),n}();n.WindowTooSmall=y,g(y,"propTypes",{minWidth:o.default.number.isRequired,minHeight:o.default.number.isRequired,icon:o.default.string,title:o.default.string.isRequired,description:o.default.string.isRequired,fontColor:o.default.string,backgroundColor:o.default.string,backgroundImage:o.default.string,zIndex:o.default.number}),g(y,"defaultProps",{fontColor:"#000",backgroundColor:"#FFF",zIndex:1e4})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Description=n.Title=n.Icon=n.Section=void 0;var r,o=(r=t(0))&&r.__esModule?r:{default:r};function i(){var e=l(["\n\n  font-size: 22px;\n  text-align: center;\n  margin: 0;\n  max-width: 600px;\n\n"]);return i=function(){return e},e}function u(){var e=l(["\n  \n  font-size: 34px;\n  text-align: center;\n  margin: 0 0 10px 0;\n\n"]);return u=function(){return e},e}function a(){var e=l(["\n\n  display: block;\n  margin-bottom: 30px;\n\n"]);return a=function(){return e},e}function c(){var e=l(["\n  \n  display: ",";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n\n  background-color: ",";\n  background-image: ",";\n  background-size: cover;\n\n  color: ",";\n\n  z-index: ",";\n\n"]);return c=function(){return e},e}function l(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var f=o.default.div(c(),function(e){return e.active?"flex":"none"},function(e){return e.backgroundColor},function(e){var n=e.backgroundImage;return n&&"url(".concat(n,")")},function(e){return e.fontColor},function(e){return e.zIndex});n.Section=f;var s=o.default.img(a());n.Icon=s;var d=o.default.h1(u());n.Title=d;var p=o.default.p(i());n.Description=p},function(e,n){e.exports=require("detector-webgl")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.WebGLNotEnabled=void 0;var r=a(t(2)),o=a(t(1)),i=a(t(8)),u=t(7);function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n){return!n||"object"!==c(n)&&"function"!=typeof n?p(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var g=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return f(r,(t=r=f(this,(e=s(n)).call.apply(e,[this].concat(i))),b(p(p(r)),"state",{active:!1}),t))}var t,o,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,r.default.Component),t=n,(o=[{key:"componentWillMount",value:function(){this.setState({active:!i.default})}},{key:"render",value:function(){var e=this.props,n=e.icon,t=e.title,o=e.description,i=e.fontColor,a=e.backgroundColor,c=e.backgroundImage,l=e.zIndex,f=this.state.active;return r.default.createElement(u.Section,{className:"WebGLNotEnabled",active:f,backgroundColor:a,backgroundImage:c,fontColor:i,zIndex:l},n&&r.default.createElement(u.Icon,{className:"WebGLNotEnabled-Icon",src:n}),r.default.createElement(u.Title,{className:"WebGLNotEnabled-Title"},t),r.default.createElement(u.Description,{className:"WebGLNotEnabled-Description",dangerouslySetInnerHTML:{__html:o}}))}}])&&l(t.prototype,o),a&&l(t,a),n}();n.WebGLNotEnabled=g,b(g,"propTypes",{icon:o.default.string,title:o.default.string.isRequired,description:o.default.string.isRequired,fontColor:o.default.string,backgroundColor:o.default.string,backgroundImage:o.default.string,zIndex:o.default.number}),b(g,"defaultProps",{fontColor:"#000",backgroundColor:"#FFF",zIndex:1e4})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.UnsupportedIcons=n.Cta=n.Description=n.Title=n.Icon=n.Section=void 0;var r,o=(r=t(0))&&r.__esModule?r:{default:r};function i(){var e=s(["\n\n  margin: 0;\n  max-width: 600px;\n  background-color: ",";\n  color: ",";\n  border-radius: 5px;\n  border: none;\n  padding: 15px 40px;\n  cursor: pointer;\n\n"]);return i=function(){return e},e}function u(){var e=s(["\n\n  text-align: center;\n  margin: 0 0 30px 0;\n  max-width: 600px;\n\n"]);return u=function(){return e},e}function a(){var e=s(["\n\n  margin-bottom: 30px;\n\n  img {\n    display: inline-block;\n    margin: 0 30px;\n  }\n\n"]);return a=function(){return e},e}function c(){var e=s(["\n  \n  text-align: center;\n  margin: 0 0 30px 0;\n\n"]);return c=function(){return e},e}function l(){var e=s(["\n\n  display: block;\n  margin-bottom: 30px;\n\n  width: ",";\n\n"]);return l=function(){return e},e}function f(){var e=s(["\n  \n  display: ",";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  padding: 0 20px;\n  box-sizing: border-box;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n\n  background-color: ",";\n  background-image: ",";\n  background-size: cover;\n\n  color: ",";\n  font-size: ",";\n\n  z-index: ",";\n\n"]);return f=function(){return e},e}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var d=o.default.div(f(),function(e){return e.active?"flex":"none"},function(e){return e.backgroundColor},function(e){var n=e.backgroundImage;return n&&"url(".concat(n,")")},function(e){return e.fontColor},function(e){return"mobile"===e.type?"16px":"22px"},function(e){return e.zIndex});n.Section=d;var p=o.default.img(l(),function(e){return"mobile"===e.type?"65px":"auto"});n.Icon=p;var b=o.default.p(c());n.Title=b;var g=o.default.div(a());n.UnsupportedIcons=g;var m=o.default.p(u());n.Description=m;var y=o.default.button(i(),function(e){return e.backgroundColor},function(e){return e.fontColor});n.Cta=y},function(e,n){e.exports=require("semver-compare")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t(11)),o=i(t(3));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(n){switch(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.supported=n,this.parser=new o.default,this.device=this.parser.getDevice(),this.type=null,this.device.type){case"mobile":this.type="mobile";break;case"tablet":this.type="tablet";break;default:this.type="desktop"}}var n,t,i;return n=e,(t=[{key:"compareVersions",value:function(e,n){return"string"==typeof e||e instanceof String?(0,r.default)(e,n)<=0:e<=parseInt(n,10)}},{key:"isSupported",value:function(){var e=this,n=!1;return!this.isAppBrowser()&&(this.supported[this.type].every(function(t){return!(n=Object.keys(t).every(function(n){var r=t[n];switch(n){case"os":return r===e.parser.getOS().name.toLowerCase();case"minos":return e.compareVersions(r,e.parser.getOS().version);case"browser":return r===e.parser.getBrowser().name.toLowerCase();case"minVersion":return e.compareVersions(r,e.parser.getBrowser().version);case"versions":var o=isNaN(parseInt(e.parser.getBrowser().version,10))?e.parser.getBrowser().version.toLocaleLowerCase():parseInt(e.parser.getBrowser().version,10);return r.indexOf(o)>=0;default:return!1}}))}),n)}},{key:"isAppBrowser",value:function(){var e=navigator.userAgent||navigator.vendor||window.opera;return e.indexOf("FBAN")>-1||e.indexOf("FBAV")>-1||e.indexOf("Twitter")>-1}}])&&u(n.prototype,t),i&&u(n,i),e}();n.default=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Unsupported=void 0;var r=a(t(2)),o=a(t(1)),i=a(t(12)),u=t(10);function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n){return!n||"object"!==c(n)&&"function"!=typeof n?p(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var g=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return f(r,(t=r=f(this,(e=s(n)).call.apply(e,[this].concat(i))),b(p(p(r)),"state",{active:!1,title:null,icons:null,description:null}),t))}var t,o,a;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,r.default.Component),t=n,(o=[{key:"componentWillMount",value:function(){var e=this.props,n=e.supported,t=e.title,r=e.mobileTitle,o=e.unsupportedIcons,u=e.unsupportedIconsMobile,a=e.description,c=e.mobileDescription;this.browserDetection=new i.default(n),window.browserDetection=this.browserDetection;var l=this.browserDetection.type;"mobile"===l||"tablet"===l?this.setState({title:r,icons:u,description:c}):this.setState({title:t,icons:o,description:a}),this.browserDetection.isSupported()||this.setState({active:!0})}},{key:"render",value:function(){var e=this,n=this.props,t=n.icon,o=n.socialInstructions,i=n.cta,a=n.fontColor,c=n.ctaBackgroundColor,l=n.ctaFontColor,f=n.backgroundColor,s=n.backgroundImage,d=n.zIndex,p=this.state,b=p.active,g=p.title,m=p.icons,y=p.description;return r.default.createElement(u.Section,{className:"Unsupported",active:b,backgroundColor:f,backgroundImage:s,fontColor:a,zIndex:d,type:this.browserDetection.type},t&&r.default.createElement(u.Icon,{src:t,type:this.browserDetection.type}),r.default.createElement(u.Title,{className:"Unsupported-Title",dangerouslySetInnerHTML:{__html:g}}),r.default.createElement(u.UnsupportedIcons,{className:"Unsupported-UnsupportedIcons"},m.map(function(e){return r.default.createElement("img",{src:e,key:e})})),r.default.createElement(u.Description,{className:"Unsupported-Description",dangerouslySetInnerHTML:{__html:y}}),this.browserDetection.isAppBrowser()&&r.default.createElement(u.Description,{className:"Unsupported-SocialInstructions",dangerouslySetInnerHTML:{__html:o}}),r.default.createElement(u.Cta,{className:"Unsupported-Cta",backgroundColor:c,fontColor:l,onClick:function(){return e.setState({active:!1})}},i))}}])&&l(t.prototype,o),a&&l(t,a),n}();n.Unsupported=g,b(g,"propTypes",{supported:o.default.shape({desktop:o.default.arrayOf(o.default.shape({browser:o.default.string.isRequired,minVersion:o.default.number.isRequired})),tablet:o.default.arrayOf(o.default.shape({os:o.default.string.isRequired,browser:o.default.string.isRequired})),mobile:o.default.arrayOf(o.default.shape({os:o.default.string.isRequired,browser:o.default.string.isRequired}))}).isRequired,icon:o.default.string,unsupportedIcons:o.default.arrayOf(o.default.string).isRequired,unsupportedIconsMobile:o.default.arrayOf(o.default.string).isRequired,title:o.default.string.isRequired,mobileTitle:o.default.string.isRequired,description:o.default.string.isRequired,mobileDescription:o.default.string.isRequired,socialInstructions:o.default.string.isRequired,cta:o.default.string.isRequired,ctaBackgroundColor:o.default.string,ctaFontColor:o.default.string,fontColor:o.default.string,backgroundColor:o.default.string,backgroundImage:o.default.string,zIndex:o.default.number}),b(g,"defaultProps",{fontColor:"#000",ctaBackgroundColor:"#000",ctaFontColor:"#FFF",backgroundColor:"#FFF",zIndex:1e4})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Title=n.Icon=n.Section=void 0;var r,o=(r=t(0))&&r.__esModule?r:{default:r};function i(){var e=c(["\n\n  font-size: 22px;\n  max-width: 40%;\n  margin: 0;\n\n"]);return i=function(){return e},e}function u(){var e=c(["\n\n  display: block;\n  margin: ",";\n\n"]);return u=function(){return e},e}function a(){var e=c(["\n\n  display: ",";\n  flex-direction: ",";\n  justify-content: center;\n  align-items: center;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n\n  background-color: ",";\n  background-image: ",";\n  background-size: cover;\n\n  color: ",";\n  text-align: ",";\n\n  z-index: ",";\n\n"]);return a=function(){return e},e}function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var l=o.default.div(a(),function(e){return e.active?"flex":"none"},function(e){return"landscape"===e.orientation?"row":"column"},function(e){return e.backgroundColor},function(e){var n=e.backgroundImage;return n&&"url(".concat(n,")")},function(e){return e.fontColor},function(e){return"landscape"===e.orientation?"left":"center"},function(e){return e.zIndex});n.Section=l;var f=o.default.img(u(),function(e){return"landscape"===e.orientation?"0 30px 0 0":"0 0 30px 0"});n.Icon=f;var s=o.default.h1(i());n.Title=s},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.RotateDevice=void 0;var r=c(t(2)),o=c(t(1)),i=c(t(3)),u=c(t(4)),a=t(14);function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,n){return!n||"object"!==l(n)&&"function"!=typeof n?b(e):n}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=(new i.default).getResult().device.type,y=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return s(r,(t=r=s(this,(e=d(n)).call.apply(e,[this].concat(i))),g(b(b(r)),"state",{active:!1,orientation:null,title:null,icon:null}),g(b(b(r)),"onResize",function(){var e=r.props,n=e.mobileOrientation,t=e.tabletOrientation,o=window.innerWidth>window.innerHeight?"landscape":"portrait";"mobile"===m&&o!==n||"tablet"===m&&o!==t?r.setState({active:!0,orientation:o}):r.setState({active:!1,orientation:o})}),t))}var t,o,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,r.default.PureComponent),t=n,(o=[{key:"componentWillMount",value:function(){var e=this.props,n=e.mobileIcon,t=e.mobileTitle,r=e.tabletIcon,o=e.tabletTitle;"mobile"===m&&this.setState({title:t,icon:n}),"tablet"===m&&this.setState({title:o,icon:r}),window.addEventListener("resize",(0,u.default)(this.onResize,50)),this.onResize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){var e=this.props,n=e.fontColor,t=e.backgroundColor,o=e.backgroundImage,i=e.zIndex,u=this.state,c=u.active,l=u.title,f=u.icon,s=u.orientation;return r.default.createElement(a.Section,{className:"RotateDevice",active:c,orientation:s,backgroundColor:t,backgroundImage:o,fontColor:n,zIndex:i},f&&r.default.createElement(a.Icon,{className:"RotateDevice-Icon",src:f,orientation:s}),r.default.createElement(a.Title,{className:"RotateDevice-Title",dangerouslySetInnerHTML:{__html:l}}))}}])&&f(t.prototype,o),i&&f(t,i),n}();n.RotateDevice=y,g(y,"propTypes",{mobileOrientation:o.default.string.isRequired,mobileIcon:o.default.string,mobileTitle:o.default.string.isRequired,tabletOrientation:o.default.string.isRequired,tabletIcon:o.default.string,tabletTitle:o.default.string.isRequired,fontColor:o.default.string,backgroundColor:o.default.string,backgroundImage:o.default.string,zIndex:o.default.number}),g(y,"defaultProps",{mobileOrientation:"portrait",tabletOrientation:"landscape",backgroundColor:"#FFF",fontColor:"#000",zIndex:1e4})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Cta=n.Description=n.Subtitle=n.Title=n.Icon=n.Section=void 0;var r,o=(r=t(0))&&r.__esModule?r:{default:r};function i(){var e=s(["\n\n  margin: 0;\n  max-width: 600px;\n  background-color: ",";\n  color: ",";\n  border-radius: 5px;\n  border: none;\n  padding: 15px 40px;\n  font-size: 22px;\n  cursor: pointer;\n\n"]);return i=function(){return e},e}function u(){var e=s(["\n\n  font-size: 22px;\n  text-align: center;\n  margin: 0 0 30px 0;\n  max-width: 600px;\n  opacity: 0.5;\n\n"]);return u=function(){return e},e}function a(){var e=s(["\n\n  font-size: 32px;\n  text-align: center;\n  margin: 0 0 10px 0;\n  max-width: 600px;\n\n"]);return a=function(){return e},e}function c(){var e=s(["\n  \n  font-size: 100px;\n  text-align: center;\n  margin: 0 0 30px 0;\n\n"]);return c=function(){return e},e}function l(){var e=s(["\n\n  display: block;\n  margin-bottom: 30px;\n\n"]);return l=function(){return e},e}function f(){var e=s(["\n  \n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  padding: 0 20px;\n  box-sizing: border-box;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n\n  background-color: ",";\n  background-image: ",";\n  background-size: cover;\n\n  color: ",";\n\n  z-index: ",";\n\n"]);return f=function(){return e},e}function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var d=o.default.div(f(),function(e){return e.backgroundColor},function(e){var n=e.backgroundImage;return n&&"url(".concat(n,")")},function(e){return e.fontColor},function(e){return e.zIndex});n.Section=d;var p=o.default.img(l());n.Icon=p;var b=o.default.h1(c());n.Title=b;var g=o.default.h2(a());n.Subtitle=g;var m=o.default.p(u());n.Description=m;var y=o.default.button(i(),function(e){return e.backgroundColor},function(e){return e.fontColor});n.Cta=y},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.NotFound=void 0;var r=u(t(2)),o=u(t(1)),i=t(16);function u(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,n){return!n||"object"!==a(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var p=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),l(this,f(n).apply(this,arguments))}var t,o,u;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(n,r.default.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.icon,t=e.title,o=e.subtitle,u=e.description,a=e.cta,c=e.fontColor,l=e.ctaBackgroundColor,f=e.ctaFontColor,s=e.backgroundColor,d=e.backgroundImage,p=e.zIndex,b=e.onContinue;return r.default.createElement(i.Section,{className:"NotFound",backgroundColor:s,backgroundImage:d,fontColor:c,zIndex:p},n&&r.default.createElement(i.Icon,{src:n,className:"NotFound-Icon"}),r.default.createElement(i.Title,{className:"NotFound-Title",dangerouslySetInnerHTML:{__html:t}}),r.default.createElement(i.Subtitle,{className:"NotFound-Subtitle",dangerouslySetInnerHTML:{__html:o}}),r.default.createElement(i.Description,{className:"NotFound-Description",dangerouslySetInnerHTML:{__html:u}}),r.default.createElement(i.Cta,{className:"NotFound-Cta",backgroundColor:l,fontColor:f,onClick:function(){return b()}},a))}}])&&c(t.prototype,o),u&&c(t,u),n}();n.NotFound=p,d(p,"propTypes",{icon:o.default.string,title:o.default.string.isRequired,subtitle:o.default.string.isRequired,description:o.default.string.isRequired,cta:o.default.string.isRequired,ctaBackgroundColor:o.default.string,ctaFontColor:o.default.string,fontColor:o.default.string,backgroundColor:o.default.string,backgroundImage:o.default.string,zIndex:o.default.number,onContinue:o.default.func.isRequired}),d(p,"defaultProps",{fontColor:"#000",ctaBackgroundColor:"#000",ctaFontColor:"#FFF",backgroundColor:"#FFF",zIndex:1e4})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Info=n.Button=n.Host=void 0;var r,o=(r=t(0))&&r.__esModule?r:{default:r};function i(){var e=c(["\n\n  display: inline-block;\n  margin: 0 10px 0 0;\n\n"]);return i=function(){return e},e}function u(){var e=c(["\n\n  cursor: pointer;\n  display: inline-block;\n  color: white;\n\n"]);return u=function(){return e},e}function a(){var e=c(["\n\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  left: 0;\n  color: white;\n  font-family: sans-serif;\n  font-size: 11px;\n  padding: 5px 10px;\n  position: fixed;\n  transition: right 0.5s;\n  z-index: 50001;\n\n"]);return a=function(){return e},e}function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var l=o.default.div(a());n.Host=l;var f=o.default.button(u());n.Button=f;var s=o.default.div(i());n.Info=s},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.BuildVersion=void 0;var r=u(t(2)),o=u(t(1)),i=t(18);function u(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,n){return!n||"object"!==a(n)&&"function"!=typeof n?d(e):n}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var b=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return l(r,(t=r=l(this,(e=f(n)).call.apply(e,[this].concat(i))),p(d(d(r)),"state",{open:!0}),p(d(d(r)),"toggle",function(){return r.setState({open:!r.state.open})}),t))}var t,o,u;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(n,r.default.PureComponent),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.live,t=e.version;return n?null:r.default.createElement(i.Host,{className:"BuildVersion"},this.state.open&&r.default.createElement(i.Info,null,t),r.default.createElement(i.Button,{className:"BuildVersion-Button",onClick:this.toggle},"[ ",this.state.open?"-":"+"," ]"))}}])&&c(t.prototype,o),u&&c(t,u),n}();n.BuildVersion=b,p(b,"propTypes",{version:o.default.string.isRequired,live:o.default.bool})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"BuildVersion",{enumerable:!0,get:function(){return r.BuildVersion}}),Object.defineProperty(n,"NotFound",{enumerable:!0,get:function(){return o.NotFound}}),Object.defineProperty(n,"RotateDevice",{enumerable:!0,get:function(){return i.RotateDevice}}),Object.defineProperty(n,"Unsupported",{enumerable:!0,get:function(){return u.Unsupported}}),Object.defineProperty(n,"WebGLNotEnabled",{enumerable:!0,get:function(){return a.WebGLNotEnabled}}),Object.defineProperty(n,"WindowTooSmall",{enumerable:!0,get:function(){return c.WindowTooSmall}});var r=t(19),o=t(17),i=t(15),u=t(13),a=t(9),c=t(6)}]));