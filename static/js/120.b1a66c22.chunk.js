"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[120],{241:function(n,t,e){e.d(t,{Hx:function(){return l},Y5:function(){return s},s:function(){return p},uV:function(){return f},wr:function(){return c}});var r=e(861),a=e(687),i=e.n(a),o=e(263),u="f34ed5891c665d5a7f0c87dfa3d7e171",c=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/trending/all/day",{params:{api_key:u}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie",{params:{query:t,api_key:u}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:u}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:u}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:u}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},911:function(n,t,e){e.r(t),e.d(t,{default:function(){return F}});var r,a,i,o,u,c,p=e(861),s=e(439),f=e(687),l=e.n(f),d=e(791),x=e(87),h=e(689),m=e(14),g=e(311),v=e.n(g),b=e(168),y=e(934),Z=y.Z.div(r||(r=(0,b.Z)(["\n  display: flex;\n  margin-top: 20px;\n  margin-bottom: 40px;\n  justify-content: center;\n"]))),w=e(184),k=function(n){var t=n.loading;return(0,w.jsx)(Z,{children:(0,w.jsx)(v(),{loading:t,color:"#3f51b5",size:20})})},j=e(241),_=e(0),S=y.Z.form(a||(a=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin: 0 auto;\n  max-width: 900px;\n  justify-content: center;\n  text-align: center;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),z=y.Z.button(i||(i=(0,b.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  :hover {\n    opacity: 1;\n  }\n"]))),C=(0,y.Z)(_.Vph)(o||(o=(0,b.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),T=y.Z.input(u||(u=(0,b.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),E=y.Z.li(c||(c=(0,b.Z)(["\n  font-family: 'Segoe UI';\n  display: flex;\n  margin-top: 10px;\n  padding: 2px;\n  font-size: 23px;\n  font-weight: 400;\n\n  :hover,\n  :focus {\n    color: rgb(128,128,128);\n  }\n\n  ::before {\n    content: '\ud83c\udfac';\n    display: flex;\n    align-items: center;\n    margin-right: 5px;\n  }\n"])));function F(){var n,t=(0,d.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1],i=(0,d.useState)(!1),o=(0,s.Z)(i,2),u=o[0],c=o[1],f=(0,x.lr)(),g=(0,s.Z)(f,2),v=g[0],b=g[1],y=null!==(n=v.get("input"))&&void 0!==n?n:"",Z=(0,d.useState)(null!==y&&void 0!==y?y:""),_=(0,s.Z)(Z,2),F=_[0],H=_[1],U=(0,h.TH)();return(0,d.useEffect)((function(){function n(){return(n=(0,p.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),n.next=4,(0,j.s)(y);case 4:t=n.sent,a(t.results),c(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}""!==y&&function(){n.apply(this,arguments)}()}),[y]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(S,{onSubmit:function(n){n.preventDefault(),""!==F.trim()?b({input:F}):(0,m.ZP)("Enter image name, please!",{icon:"\ud83e\uddd0"})},children:[(0,w.jsx)(z,{type:"submit",children:(0,w.jsx)(C,{})}),(0,w.jsx)(T,{name:"input",value:F,onChange:function(n){H(n.currentTarget.value),""===n.currentTarget.value&&(b({}),a([]))},type:"text",autocomplete:"off",autoFocus:!0,placeholder:"Search movies..."})]}),u&&(0,w.jsx)(k,{loading:u}),!u&&r&&""!==y&&(0,w.jsx)("ul",{children:r.map((function(n){return(0,w.jsx)(E,{children:(0,w.jsx)(x.rU,{to:"".concat(n.id),state:{from:U},children:(0,w.jsx)("p",{children:n.title})})},n.id)}))}),(0,w.jsx)(m.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=120.b1a66c22.chunk.js.map