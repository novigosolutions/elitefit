(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{P0qE:function(t,e,n){"use strict";function o(t,e,n,o,r,a,c){try{var u=t[a](c),i=u.value}catch(t){return void n(t)}u.done?e(i):Promise.resolve(i).then(o,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var c=t.apply(e,n);function u(t){o(c,r,a,u,i,"next",t)}function i(t){o(c,r,a,u,i,"throw",t)}u(void 0)}))}}n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return l}));var a="https://physio.coreviewsystems.com:8081",c=function(t){return null==t?"":t},u=function(t,e){return e?"".concat(t,"?").concat(Object.keys(e).map((function(t){return Array.isArray(e[t])?e[t].map((function(e){return"".concat(t,"[]=").concat(c(e).toString().replace("+","%2B")).trim()})).join("&"):"".concat(t,"=").concat(c(e[t]).toString().replace("+","%2B")).trim()})).join("&")):t},i=function(){var t=r(regeneratorRuntime.mark((function t(e,n){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=localStorage.getItem("token"),r={method:"GET",headers:{Accept:"application/json"}},o&&(r.headers.Authorization="Bearer ".concat(o)),t.abrupt("return",fetch("".concat(a).concat(u(e,n)),r).then((function(t){return t.json()}),(function(t){return t})));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),s=function(){var t=r(regeneratorRuntime.mark((function t(e,n){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=localStorage.getItem("token"),r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}},n&&(r.body=JSON.stringify(n)),o&&(r.headers.Authorization="Bearer ".concat(o)),t.abrupt("return",fetch("".concat(a).concat(e),r).then((function(t){return t.json()}),(function(t){return t})));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),l=function(){var t=r(regeneratorRuntime.mark((function t(e,n){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=localStorage.getItem("token"),r={method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"}},n&&(r.body=JSON.stringify(n)),o&&(r.headers.Authorization="Bearer ".concat(o)),t.abrupt("return",fetch("".concat(a).concat(e),r).then((function(t){return t.json()}),(function(t){return t})));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},WY05:function(t,e,n){},Wysq:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),r=n.n(o),a=n("siax"),c=(n("WY05"),n("P0qE")),u=function(t){return Object(c.b)("/time_record",t)},i=function(t){return Object(c.b)("/calorie_record",t)};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=y(t);if(e){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(s,t);var e,n,o,c=p(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),g(h(e=c.call(this,t)),"valueAssignments",(function(){"minutes"===e.goalUnit?(e.setState({step:300,maxValue:600,minValue:50,defaultValue:300,goalContent:"Please choose your Time goal for this week",goalCount:{50:50,100:100,150:150,200:200,250:250,300:300,350:350,400:400,450:450,500:500,550:550,600:600},unit:"minutes"}),e.stepChange(300)):e.setState({step:2200,goalCount:{200:200,600:600,1e3:1e3,1400:1400,1800:1800,2200:2200,2600:2600,3e3:3e3,3400:3400,3800:3800,4200:"4200"},maxValue:4200,minValue:200,defaultValue:2200,goalContent:"Please choose your Calorie goal for this week",unit:"Calories"})})),g(h(e),"goBack",(function(){e.props.history.push("/app/set-weekly-goal")})),g(h(e),"submitWeeklyGoal",(function(){e.sendUserWeeklyGoal(),e.props.history.push("/app/welcome")})),g(h(e),"stepChange",(function(t){e.setState({step:t})})),g(h(e),"sendUserWeeklyGoal",(function(){var t=e.state.step;"minutes"===e.goalUnit?u({goal_time:60*t}).then((function(t){t&&console.log("Weekly goal sent successfully")})).catch((function(t){console.log(t)})):i({goal_calories:t}).then((function(t){t&&console.log("Weekly goal sent successfully")})).catch((function(t){console.log(t)}))})),e.state={step:null,goalCount:{},maxValue:null,minValue:null,defaultValue:null,goalContent:"",unit:""},e.goalUnit=localStorage.getItem("goal-unit"),e}return e=s,(n=[{key:"UNSAFE_componentWillMount",value:function(){this.valueAssignments()}},{key:"componentDidMount",value:function(){this.stepChange(this.state.defaultValue)}},{key:"render",value:function(){return r.a.createElement("div",{className:"w-100 h-100 weekly-goal"},r.a.createElement("div",{className:"assign-weekly-goal-content"},r.a.createElement("div",{className:"top-text padding-top-40 text-center margin-bottom-20"},this.state.goalContent),r.a.createElement("div",{className:"text-center font16 "},r.a.createElement(a.a,{min:this.state.minValue,max:this.state.maxValue,defaultValue:this.state.defaultValue,marks:this.state.goalCount,step:this.state.step,onChange:this.stepChange})),r.a.createElement("div",{className:"selected-count padding-top-60 "},"Selected count:"," ",r.a.createElement("span",{className:"bold"},this.state.step," ",this.state.unit))),r.a.createElement("div",{className:"bottom-container d-flex flex-row justify-content-center align-items-center"},r.a.createElement("button",{type:"button",className:"buttons ml-4 mr-4",onClick:this.goBack},"Back"),r.a.createElement("button",{type:"button",className:"buttons ml-4 mr-4",onClick:this.submitWeeklyGoal},"Submit")))}}])&&l(e.prototype,n),o&&l(e,o),s}(r.a.Component);d.propTypes={},d.defaultProps={};e.default=d}}]);