var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function l(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e){return null==e?"":e}const i="undefined"!=typeof window;let c=i?()=>window.performance.now():()=>Date.now(),d=i?e=>requestAnimationFrame(e):e;const u=new Set;let p,m=!1;function f(){u.forEach(e=>{e[0](c())||(u.delete(e),e[1]())}),(m=u.size>0)&&d(f)}function g(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode.removeChild(e)}function v(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function x(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function C(){return y(" ")}function k(){return y("")}function $(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e,t){t=""+t,e.data!==t&&(e.data=t)}function O(e,t){(null!=t||e.value)&&(e.value=t)}function T(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}let D,E=0,A={};function S(e,t,n,r,l,o,a,s=0){const i=16.666/r;let c="{\n";for(let e=0;e<=1;e+=i){const r=t+(n-t)*o(e);c+=100*e+`%{${a(r,1-r)}}\n`}const d=c+`100% {${a(n,1-n)}}\n}`,u=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(d)}_${s}`;if(!A[u]){if(!p){const e=x("style");document.head.appendChild(e),p=e.sheet}A[u]=!0,p.insertRule(`@keyframes ${u} ${d}`,p.cssRules.length)}const m=e.style.animation||"";return e.style.animation=`${m?`${m}, `:""}${u} ${r}ms linear ${l}ms 1 both`,E+=1,u}function N(e,t){e.style.animation=(e.style.animation||"").split(", ").filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")).join(", "),t&&!--E&&d(()=>{if(E)return;let e=p.cssRules.length;for(;e--;)p.deleteRule(e);A={}})}function F(e){D=e}const j=[],L=[],P=[],V=[],H=Promise.resolve();let B,M=!1;function I(e){P.push(e)}function q(){const e=new Set;do{for(;j.length;){const e=j.shift();F(e),R(e.$$)}for(;L.length;)L.pop()();for(let t=0;t<P.length;t+=1){const n=P[t];e.has(n)||(n(),e.add(n))}P.length=0}while(j.length);for(;V.length;)V.pop()();M=!1}function R(e){null!==e.fragment&&(e.update(e.dirty),l(e.before_update),e.fragment&&e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(I))}function W(e,t,n){e.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(`${t?"intro":"outro"}${n}`))}const Q=new Set;let J;function U(){J={r:0,c:[],p:J}}function G(){J.r||l(J.c),J=J.p}function K(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function Y(e,t,n,r){if(e&&e.o){if(Q.has(e))return;Q.add(e),J.c.push(()=>{Q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}const z={duration:0};function X(n,r,a,s){let i=r(n,a),p=s?0:1,g=null,h=null,b=null;function v(){b&&N(n,b)}function x(e,t){const n=e.b-p;return t*=Math.abs(n),{a:p,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function y(r){const{delay:o=0,duration:a=300,easing:s=t,tick:y=e,css:C}=i||z,k={start:c()+o,b:r};r||(k.group=J,J.r+=1),g?h=k:(C&&(v(),b=S(n,p,r,a,o,s,C)),r&&y(0,1),g=x(k,a),I(()=>W(n,r,"start")),function(e){let t;m||(m=!0,d(f)),new Promise(n=>{u.add(t=[e,n])})}(e=>{if(h&&e>h.start&&(g=x(h,a),h=null,W(n,g.b,"start"),C&&(v(),b=S(n,p,g.b,g.duration,0,s,i.css))),g)if(e>=g.end)y(p=g.b,1-p),W(n,g.b,"end"),h||(g.b?v():--g.group.r||l(g.group.c)),g=null;else if(e>=g.start){const t=e-g.start;p=g.a+g.d*s(t/g.duration),y(p,1-p)}return!(!g&&!h)}))}return{run(e){o(i)?(B||(B=Promise.resolve()).then(()=>{B=null}),B).then(()=>{i=i(),y(e)}):y(e)},end(){v(),g=h=null}}}function Z(e){e&&e.c()}function ee(e,t,r){const{fragment:a,on_mount:s,on_destroy:i,after_update:c}=e.$$;a&&a.m(t,r),I(()=>{const t=s.map(n).filter(o);i?i.push(...t):l(t),e.$$.on_mount=[]}),c.forEach(I)}function te(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx={})}function ne(e,t){e.$$.dirty||(j.push(e),M||(M=!0,H.then(q)),e.$$.dirty=r()),e.$$.dirty[t]=!0}function re(t,n,o,a,s,i){const c=D;F(t);const d=n.props||{},u=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:s,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:r(),dirty:null};let p=!1;u.ctx=o?o(t,d,(e,n,r=n)=>(u.ctx&&s(u.ctx[e],u.ctx[e]=r)&&(u.bound[e]&&u.bound[e](r),p&&ne(t,e)),n)):d,u.update(),p=!0,l(u.before_update),u.fragment=!!a&&a(u.ctx),n.target&&(n.hydrate?u.fragment&&u.fragment.l(function(e){return Array.from(e.childNodes)}(n.target)):u.fragment&&u.fragment.c(),n.intro&&K(t.$$.fragment),ee(t,n.target,n.anchor),q()),F(c)}class le{$destroy(){te(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function oe(e){const t=e-1;return t*t*t+1}function ae(e,{delay:t=0,duration:n=400,easing:r=oe}){const l=getComputedStyle(e),o=+l.opacity,a=parseFloat(l.height),s=parseFloat(l.paddingTop),i=parseFloat(l.paddingBottom),c=parseFloat(l.marginTop),d=parseFloat(l.marginBottom),u=parseFloat(l.borderTopWidth),p=parseFloat(l.borderBottomWidth);return{delay:t,duration:n,easing:r,css:e=>"overflow: hidden;"+`opacity: ${Math.min(20*e,1)*o};`+`height: ${e*a}px;`+`padding-top: ${e*s}px;`+`padding-bottom: ${e*i}px;`+`margin-top: ${e*c}px;`+`margin-bottom: ${e*d}px;`+`border-top-width: ${e*u}px;`+`border-bottom-width: ${e*p}px;`}}const se=[];const ie=function(t,n=e){let r;const l=[];function o(e){if(a(t,e)&&(t=e,r)){const e=!se.length;for(let e=0;e<l.length;e+=1){const n=l[e];n[1](),se.push(n,t)}if(e){for(let e=0;e<se.length;e+=2)se[e][0](se[e+1]);se.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,s=e){const i=[a,s];return l.push(i),1===l.length&&(r=n(o)||e),a(t),()=>{const e=l.indexOf(i);-1!==e&&l.splice(e,1),0===l.length&&(r(),r=null)}}}}("");function ce(e){let t,n,r,l;return{c(){t=x("div"),n=y(e.alertText),_(t,"class","alert alert-danger svelte-1r1bdcq"),_(t,"role","alert")},m(e,r){h(e,t,r),g(t,n),l=!0},p(e,t){l&&!e.alertText||w(n,t.alertText)},i(e){l||(I(()=>{r||(r=X(t,ae,{},!0)),r.run(1)}),l=!0)},o(e){r||(r=X(t,ae,{},!1)),r.run(0),l=!1},d(e){e&&b(t),e&&r&&r.end()}}}function de(e){let t,n,r,o,a,s,i,c,d,u,p,m="Register"===e.headerText&&pe(e);return{c(){t=x("form"),n=x("div"),m&&m.c(),r=C(),(o=x("label")).textContent="Email address",a=C(),s=x("input"),i=C(),(c=x("button")).textContent="Submit",_(o,"for","exampleInputEmail1"),_(s,"type","email"),_(s,"class","form-control"),_(s,"id","exampleInputEmail1"),_(s,"aria-describedby","emailHelp"),_(s,"placeholder","Enter email"),_(n,"class","form-group"),_(c,"type","submit"),_(c,"class","btn btn-primary"),p=[$(s,"input",e.input_input_handler_2),$(t,"submit",e.login)]},m(l,d){h(l,t,d),g(t,n),m&&m.m(n,null),g(n,r),g(n,o),g(n,a),g(n,s),O(s,e.email),g(t,i),g(t,c),u=!0},p(e,t){"Register"===t.headerText?m?m.p(e,t):((m=pe(t)).c(),m.m(n,r)):m&&(m.d(1),m=null),e.email&&s.value!==t.email&&O(s,t.email)},i(e){u||(I(()=>{d||(d=X(t,ae,{},!0)),d.run(1)}),u=!0)},o(e){d||(d=X(t,ae,{},!1)),d.run(0),u=!1},d(e){e&&b(t),m&&m.d(),e&&d&&d.end(),l(p)}}}function ue(e){let t,n,r,o,a,s,i,c,d,u,p,m,f;return{c(){t=x("form"),n=x("div"),(r=x("label")).textContent="Verification code",o=C(),a=x("input"),s=C(),i=x("small"),c=y(e.feedbackInformation),d=C(),(u=x("button")).textContent="Submit",_(r,"for","verficationCode"),_(a,"type","text"),_(a,"class","form-control"),_(a,"id","verficationCode"),_(a,"aria-describedby","emailHelp"),_(a,"placeholder","Enter verification code"),_(i,"id","emailHelp"),_(i,"class","form-text text-muted"),_(n,"class","form-group"),_(u,"type","submit"),_(u,"class","btn btn-primary"),f=[$(a,"input",e.input_input_handler),$(t,"submit",e.verifyWithCode)]},m(l,p){h(l,t,p),g(t,n),g(n,r),g(n,o),g(n,a),O(a,e.verificationCode),g(n,s),g(n,i),g(i,c),g(t,d),g(t,u),m=!0},p(e,t){e.verificationCode&&a.value!==t.verificationCode&&O(a,t.verificationCode),m&&!e.feedbackInformation||w(c,t.feedbackInformation)},i(e){m||(I(()=>{p||(p=X(t,ae,{},!0)),p.run(1)}),m=!0)},o(e){p||(p=X(t,ae,{},!1)),p.run(0),m=!1},d(e){e&&b(t),e&&p&&p.end(),l(f)}}}function pe(e){let t,n,r,l,o;return{c(){t=x("div"),(n=x("label")).textContent="Your name",r=C(),l=x("input"),_(n,"for","exampleInputPassword1"),_(l,"type","text"),_(l,"class","form-control"),_(l,"id","nameInput"),_(l,"placeholder","Your name"),_(t,"class","form-group"),o=$(l,"input",e.input_input_handler_1)},m(o,a){h(o,t,a),g(t,n),g(t,r),g(t,l),O(l,e.name)},p(e,t){e.name&&l.value!==t.name&&O(l,t.name)},d(e){e&&b(t),o()}}}function me(e){let t;return{c(){(t=x("div")).innerHTML='<span class="sr-only">Loading...</span>',_(t,"class","spinner-border text-primary svelte-1r1bdcq"),_(t,"role","status")},m(e,n){h(e,t,n)},d(e){e&&b(t)}}}function fe(e){let t,n,r,l,o,a,i,c,d,u,p,m,f,v,k,$,O,T,D=e.error&&ce(e);const E=[ue,de],A=[];function S(e,t){return t.verify?0:1}c=S(0,e),d=A[c]=E[c](e);let N=e.loading&&me();return{c(){t=x("main"),D&&D.c(),n=C(),r=x("div"),l=x("header"),o=x("h1"),a=y(e.headerText),i=C(),d.c(),u=C(),p=x("div"),N&&N.c(),m=C(),f=x("div"),v=x("div"),k=y(e.progress),_(v,"class","progress-bar"),_(v,"role","progressbar"),_(v,"style",$="width:"+e.progress),_(v,"aria-valuenow","25"),_(v,"aria-valuemin","0"),_(v,"aria-valuemax","100"),_(f,"class","progress svelte-1r1bdcq"),_(p,"id","progressContainer"),_(p,"class","svelte-1r1bdcq"),_(r,"id","login"),_(r,"class","svelte-1r1bdcq"),_(t,"class",O=s("100%"===e.progress?"bg-success":"bg-primary")+" svelte-1r1bdcq")},m(e,s){h(e,t,s),D&&D.m(t,null),g(t,n),g(t,r),g(r,l),g(l,o),g(o,a),g(r,i),A[c].m(r,null),g(r,u),g(r,p),N&&N.m(p,null),g(p,m),g(p,f),g(f,v),g(v,k),T=!0},p(e,l){l.error?D?(D.p(e,l),K(D,1)):((D=ce(l)).c(),K(D,1),D.m(t,n)):D&&(U(),Y(D,1,1,()=>{D=null}),G()),T&&!e.headerText||w(a,l.headerText);let o=c;(c=S(0,l))===o?A[c].p(e,l):(U(),Y(A[o],1,1,()=>{A[o]=null}),G(),(d=A[c])||(d=A[c]=E[c](l)).c(),K(d,1),d.m(r,u)),l.loading?N||((N=me()).c(),N.m(p,m)):N&&(N.d(1),N=null),T&&!e.progress||w(k,l.progress),(!T||e.progress&&$!==($="width:"+l.progress))&&_(v,"style",$),(!T||e.progress&&O!==(O=s("100%"===l.progress?"bg-success":"bg-primary")+" svelte-1r1bdcq"))&&_(t,"class",O)},i(e){T||(K(D),K(d),T=!0)},o(e){Y(D),Y(d),T=!1},d(e){e&&b(t),D&&D.d(),A[c].d(),N&&N.d()}}}function ge(e,t,n){let r,l,o,a,s,{apiCall:i}=t,c=!1,d="Login/Register",u=!1,p="0%",m="",f=!1,g="";return e.$set=e=>{"apiCall"in e&&n("apiCall",i=e.apiCall)},{apiCall:i,email:r,name:l,headerText:d,verify:u,verificationCode:o,loading:a,progress:p,alertText:m,error:f,feedbackInformation:g,login:async function(e){if(e.preventDefault(),console.log(c),c)!async function(e){e.preventDefault();try{const e=await i("/registerUser",JSON.stringify({name:l,email:r}));e.error||(n("progress",p="66%"),n("verify",u=!0),s=e.data.token,console.log(s),n("headerText",d="Verify account"),n("feedbackInformation",g="An email with the verification code have been sent to "+r))}catch(e){console.log(e)}}(e);else try{n("loading",a=!0);const e=await i("/login",JSON.stringify({email:r}));"NoAccount"===e.message?(n("progress",p="33%"),c=!0,n("loading",a=!1),n("headerText",d="Register")):e.error?console.log("huh"):(n("loading",a=!1),console.log("Login no error"),n("headerText",d="Verify login"),s=e.data.token,n("progress",p="50%"),n("feedbackInformation",g="An email with the verification code have been sent to "+r),n("verify",u=!0)),console.log(e)}catch(e){console.log(e)}},verifyWithCode:async function(e){try{console.log("code"),e.preventDefault(),console.log(s);const t=await i("/verifyWithCode",JSON.stringify({verificationCode:o,token:s}));console.log(t),t.error?(n("error",f=!0),"WrongCode"===t.message&&n("alertText",m="Wrong verification code entered, try again")):(console.log(t),t.admin?ie.set("adminPanel"):ie.set("makeOrder"))}catch(e){console.log(e)}},input_input_handler:function(){o=this.value,n("verificationCode",o)},input_input_handler_1:function(){l=this.value,n("name",l)},input_input_handler_2:function(){r=this.value,n("email",r)}}}class he extends le{constructor(e){super(),re(this,e,ge,fe,a,{apiCall:0})}}function be(e,t,n){const r=Object.create(e);return r.file=t[n],r}function ve(e){let t,n,r,l,o,a,s,i=e.file.originalName+"",c=e.file.description+"";return{c(){t=x("li"),n=x("a"),r=y(i),o=C(),a=x("li"),s=y(c),_(n,"href",l="http://localhost:8000"+e.file.url),_(t,"class","list-group-item"),T(t,"border","none"),_(a,"class","list-group-item")},m(e,l){h(e,t,l),g(t,n),g(n,r),h(e,o,l),h(e,a,l),g(a,s)},p(e,t){e.order&&i!==(i=t.file.originalName+"")&&w(r,i),e.order&&l!==(l="http://localhost:8000"+t.file.url)&&_(n,"href",l),e.order&&c!==(c=t.file.description+"")&&w(s,c)},d(e){e&&b(t),e&&b(o),e&&b(a)}}}function xe(e){let t,n,r,o,a,s,i,c,d,u,p,m,f,k,T,D,E,A,S,N,F,j,L,P,V,H,B,M,q,R,W,Q,J,U,G,K,Y,z,Z,ee,te,ne,re,le,oe,se,ie,ce,de,ue,pe,me,fe,ge,he,xe,ye,Ce,ke,$e,_e,we,Oe,Te,De,Ee,Ae,Se,Ne,Fe,je,Le,Pe,Ve,He,Be,Me,Ie,qe,Re,We,Qe,Je,Ue,Ge,Ke,Ye,ze=e.order.number+"",Xe=new Date(e.order.date).toDateString()+"",Ze=e.order.customer.name+"",et=e.order.customer.email+"",tt=e.order.productDescription+"",nt=e.order.wishes+"",rt=e.order.files,lt=[];for(let t=0;t<rt.length;t+=1)lt[t]=ve(be(e,rt,t));return{c(){t=x("div"),n=x("div"),r=x("div"),o=x("div"),(a=x("div")).textContent="Orderdetaljer",s=C(),i=x("ul"),c=x("li"),d=y("Ordernummer: "),u=y(ze),p=C(),m=x("li"),f=y("Datum: "),k=y(Xe),T=C(),D=x("li"),E=y("Status:\r\n            "),A=x("select"),(S=x("option")).textContent="Ej påbörjad",(N=x("option")).textContent="Påbörjad",(F=x("option")).textContent="Avslutad",j=C(),(L=x("li")).innerHTML='<div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheckDisabled1" disabled=""> \n              <label class="custom-control-label" for="customCheckDisabled1">\n                Tillverkning\n              </label></div>',P=C(),(V=x("li")).innerHTML='<div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheckDisabled1" disabled=""> \n              <label class="custom-control-label" for="customCheckDisabled1">\n                Tillverkningsunderlag\n              </label></div>',H=C(),(B=x("li")).innerHTML='<div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="customCheckDisabled1" disabled=""> \n              <label class="custom-control-label" for="customCheckDisabled1">\n                Beräkning\n              </label></div>',M=C(),q=x("div"),R=x("div"),(W=x("div")).textContent="Beställare",Q=C(),J=x("ul"),U=x("li"),G=y("Namn: "),K=y(Ze),Y=C(),z=x("li"),Z=y("Email:\r\n            "),ee=x("a"),te=y(et),re=C(),le=x("div"),oe=x("div"),(se=x("div")).textContent="Ansvarig",ie=C(),ce=x("ul"),de=x("li"),ue=y("Namn:\r\n            "),pe=x("input"),me=C(),fe=x("li"),ge=y("Email:\r\n            "),he=x("input"),xe=C(),ye=x("div"),Ce=x("div"),(ke=x("div")).textContent="Produkt beskrivning",$e=C(),_e=x("div"),we=y(tt),Oe=C(),Te=x("div"),De=x("div"),(Ee=x("div")).textContent="Önskemål",Ae=C(),Se=x("div"),Ne=y(nt),Fe=C(),je=x("div"),Le=x("div"),(Pe=x("div")).textContent="Filer",Ve=C(),He=x("ul");for(let e=0;e<lt.length;e+=1)lt[e].c();Be=C(),Me=x("div"),Ie=x("div"),(qe=x("button")).textContent="Delete order",Re=C(),We=x("div"),(Qe=x("button")).textContent="Stäng",Je=C(),(Ue=x("div")).innerHTML='<button class="btn btn-lg btn-success">Spara</button>',_(a,"class","card-header"),_(c,"class","list-group-item"),_(m,"class","list-group-item"),S.__value="Ej påbörjad",S.value=S.__value,N.__value="Påbörjad",N.value=N.__value,F.__value="Avslutad",F.value=F.__value,_(A,"class","form-control"),_(A,"id","exampleFormControlSelect2"),_(D,"class","list-group-item"),_(L,"class","list-group-item"),_(V,"class","list-group-item"),_(B,"class","list-group-item"),_(i,"class","list-group list-group-flush"),_(o,"class","card h-100"),_(r,"class","col mb-4"),_(W,"class","card-header"),_(U,"class","list-group-item"),_(ee,"href",ne="mailto:"+e.order.customer.email),_(z,"class","list-group-item"),_(J,"class","list-group list-group-flush"),_(R,"class","card h-100"),_(q,"class","col mb-4 "),_(se,"class","card-header"),_(pe,"type","text"),_(pe,"class","form-control "),_(de,"class","list-group-item"),_(he,"type","email"),_(he,"class","form-control"),_(he,"aria-describedby","emailHelp"),_(fe,"class","list-group-item"),_(ce,"class","list-group list-group-flush"),_(oe,"class","card h-100"),_(le,"class","col mb-4"),_(ke,"class","card-header"),_(_e,"class","card-body"),_(Ce,"class","card h-100"),_(ye,"class","col mb-4"),_(Ee,"class","card-header"),_(Se,"class","card-body"),_(De,"class","card h-100"),_(Te,"class","col mb-4"),_(Pe,"class","card-header"),_(He,"class","list-group list-group-flush"),_(Le,"class","card h-100"),_(je,"class","col mb-4"),_(n,"class","row row-cols-1 row-cols-md-2 row-cols-lg-3"),_(qe,"class","btn btn-lg btn-danger"),_(Ie,"class","col "),_(Qe,"class","btn btn-lg btn-secondary"),_(We,"class","col"),_(Ue,"class","col "),_(Me,"class","row"),_(t,"class","container-fluid text-left"),Ye=[$(pe,"input",e.input3_input_handler),$(he,"input",e.input4_input_handler),$(qe,"click",e.deleteOrder),$(Qe,"click",e.toggleExpand)]},m(l,b){h(l,t,b),g(t,n),g(n,r),g(r,o),g(o,a),g(o,s),g(o,i),g(i,c),g(c,d),g(c,u),g(i,p),g(i,m),g(m,f),g(m,k),g(i,T),g(i,D),g(D,E),g(D,A),g(A,S),g(A,N),g(A,F),g(i,j),g(i,L),g(i,P),g(i,V),g(i,H),g(i,B),g(n,M),g(n,q),g(q,R),g(R,W),g(R,Q),g(R,J),g(J,U),g(U,G),g(U,K),g(J,Y),g(J,z),g(z,Z),g(z,ee),g(ee,te),g(n,re),g(n,le),g(le,oe),g(oe,se),g(oe,ie),g(oe,ce),g(ce,de),g(de,ue),g(de,pe),O(pe,e.order.responsible.name),g(ce,me),g(ce,fe),g(fe,ge),g(fe,he),O(he,e.order.responsible.email),g(n,xe),g(n,ye),g(ye,Ce),g(Ce,ke),g(Ce,$e),g(Ce,_e),g(_e,we),g(n,Oe),g(n,Te),g(Te,De),g(De,Ee),g(De,Ae),g(De,Se),g(Se,Ne),g(n,Fe),g(n,je),g(je,Le),g(Le,Pe),g(Le,Ve),g(Le,He);for(let e=0;e<lt.length;e+=1)lt[e].m(He,null);g(t,Be),g(t,Me),g(Me,Ie),g(Ie,qe),g(Me,Re),g(Me,We),g(We,Qe),g(Me,Je),g(Me,Ue),Ke=!0},p(e,t){if(Ke&&!e.order||ze===(ze=t.order.number+"")||w(u,ze),Ke&&!e.order||Xe===(Xe=new Date(t.order.date).toDateString()+"")||w(k,Xe),Ke&&!e.order||Ze===(Ze=t.order.customer.name+"")||w(K,Ze),Ke&&!e.order||et===(et=t.order.customer.email+"")||w(te,et),(!Ke||e.order&&ne!==(ne="mailto:"+t.order.customer.email))&&_(ee,"href",ne),e.order&&pe.value!==t.order.responsible.name&&O(pe,t.order.responsible.name),e.order&&he.value!==t.order.responsible.email&&O(he,t.order.responsible.email),Ke&&!e.order||tt===(tt=t.order.productDescription+"")||w(we,tt),Ke&&!e.order||nt===(nt=t.order.wishes+"")||w(Ne,nt),e.order){let n;for(rt=t.order.files,n=0;n<rt.length;n+=1){const r=be(t,rt,n);lt[n]?lt[n].p(e,r):(lt[n]=ve(r),lt[n].c(),lt[n].m(He,null))}for(;n<lt.length;n+=1)lt[n].d(1);lt.length=rt.length}},i(e){Ke||(I(()=>{Ge||(Ge=X(t,ae,{},!0)),Ge.run(1)}),Ke=!0)},o(e){Ge||(Ge=X(t,ae,{},!1)),Ge.run(0),Ke=!1},d(e){e&&b(t),v(lt,e),e&&Ge&&Ge.end(),l(Ye)}}}function ye(e,t,n){let{order:r}=t,{toggleExpand:l}=t,{deleteOrder:o}=t;return e.$set=e=>{"order"in e&&n("order",r=e.order),"toggleExpand"in e&&n("toggleExpand",l=e.toggleExpand),"deleteOrder"in e&&n("deleteOrder",o=e.deleteOrder)},{order:r,toggleExpand:l,deleteOrder:o,input3_input_handler:function(){r.responsible.name=this.value,n("order",r)},input4_input_handler:function(){r.responsible.email=this.value,n("order",r)}}}class Ce extends le{constructor(e){super(),re(this,e,ye,xe,a,{order:0,toggleExpand:0,deleteOrder:0})}}function ke(t){let n,r,o,a,s,i,c,d,u,p,m,f,v,k,O,T,D,E,A,S,N,F,j=t.order.number+"",L=t.order.productName+"",P=t.order.customer.name+"",V=t.order.responsible.name+"",H=t.order.status+"",B=new Date(t.order.date).toDateString()+"";return{c(){n=x("tr"),r=x("th"),o=y(j),a=C(),s=x("td"),i=y(L),c=C(),d=x("td"),u=y(P),p=C(),m=x("td"),f=y(V),v=C(),k=x("td"),O=y(H),T=C(),D=x("td"),E=y(B),A=C(),S=x("td"),(N=x("button")).textContent="Radera order",_(r,"class","align-middle"),_(r,"scope","row"),_(s,"class","align-middle"),_(d,"class","align-middle d-none d-sm-table-cell"),_(m,"class","align-middle d-none d-md-table-cell"),_(k,"class","align-middle"),_(D,"class","align-middle d-none d-md-table-cell"),_(N,"class","btn btn-danger float-right"),_(n,"class","svelte-1n1kl2d"),F=[$(r,"click",t.toggleExpand),$(s,"click",t.toggleExpand),$(d,"click",t.toggleExpand),$(m,"click",t.toggleExpand),$(k,"click",t.toggleExpand),$(D,"click",t.toggleExpand),$(N,"click",t.deleteOrder)]},m(e,t){h(e,n,t),g(n,r),g(r,o),g(n,a),g(n,s),g(s,i),g(n,c),g(n,d),g(d,u),g(n,p),g(n,m),g(m,f),g(n,v),g(n,k),g(k,O),g(n,T),g(n,D),g(D,E),g(n,A),g(n,S),g(S,N)},p(e,t){e.order&&j!==(j=t.order.number+"")&&w(o,j),e.order&&L!==(L=t.order.productName+"")&&w(i,L),e.order&&P!==(P=t.order.customer.name+"")&&w(u,P),e.order&&V!==(V=t.order.responsible.name+"")&&w(f,V),e.order&&H!==(H=t.order.status+"")&&w(O,H),e.order&&B!==(B=new Date(t.order.date).toDateString()+"")&&w(E,B)},i:e,o:e,d(e){e&&b(n),l(F)}}}function $e(e){let t,n,r;const l=new Ce({props:{deleteOrder:e.deleteOrder,order:e.order,toggleExpand:e.toggleExpand}});return{c(){t=x("tr"),n=x("td"),Z(l.$$.fragment),_(n,"id","expandedContent"),_(n,"colspan","7"),T(t,"cursor","initial"),_(t,"class","svelte-1n1kl2d")},m(e,o){h(e,t,o),g(t,n),ee(l,n,null),r=!0},p(e,t){const n={};e.order&&(n.order=t.order),l.$set(n)},i(e){r||(K(l.$$.fragment,e),r=!0)},o(e){Y(l.$$.fragment,e),r=!1},d(e){e&&b(t),te(l)}}}function _e(e){let t,n,r,l;const o=[$e,ke],a=[];function s(e,t){return t.expanded?0:1}return t=s(0,e),n=a[t]=o[t](e),{c(){n.c(),r=k()},m(e,n){a[t].m(e,n),h(e,r,n),l=!0},p(e,l){let i=t;(t=s(0,l))===i?a[t].p(e,l):(U(),Y(a[i],1,1,()=>{a[i]=null}),G(),(n=a[t])||(n=a[t]=o[t](l)).c(),K(n,1),n.m(r.parentNode,r))},i(e){l||(K(n),l=!0)},o(e){Y(n),l=!1},d(e){a[t].d(e),e&&b(r)}}}function we(e,t,n){let r,{order:l}=t,{apiCall:o}=t,{getAllOrders:a}=t,s=!1;return e.$set=e=>{"order"in e&&n("order",l=e.order),"apiCall"in e&&n("apiCall",o=e.apiCall),"getAllOrders"in e&&n("getAllOrders",a=e.getAllOrders)},{order:l,apiCall:o,getAllOrders:a,expanded:s,toggleExpand:function(){n("expanded",s=!s)},deleteOrder:async function(){console.log("delete"),console.log(r);try{const e=await o("/deleteOrder",JSON.stringify({id:l._id}));console.log(e),e.error||(console.log("success"),a())}catch(e){console.log(e)}}}}class Oe extends le{constructor(e){super(),re(this,e,we,_e,a,{order:0,apiCall:0,getAllOrders:0})}}function Te(e,t,n){const r=Object.create(e);return r.order=t[n],r}function De(e){let t;const n=new Oe({props:{apiCall:e.apiCall,getAllOrders:e.getAllOrders,order:e.order}});return{c(){Z(n.$$.fragment)},m(e,r){ee(n,e,r),t=!0},p(e,t){const r={};e.apiCall&&(r.apiCall=t.apiCall),e.showOrders&&(r.order=t.order),n.$set(r)},i(e){t||(K(n.$$.fragment,e),t=!0)},o(e){Y(n.$$.fragment,e),t=!1},d(e){te(n,e)}}}function Ee(e){let t,n,r,o,a,s,i,c,d,u,p,m,f,y,k,w,T,D,E,A,S,N,F,j,L,P,V,H,B,M,I,q,R,W,Q,J,z,X,Z,ee,te=e.showOrders,ne=[];for(let t=0;t<te.length;t+=1)ne[t]=De(Te(e,te,t));const re=e=>Y(ne[e],1,1,()=>{ne[e]=null});return{c(){t=x("nav"),(n=x("span")).textContent="Admin panel",r=C(),o=x("div"),a=x("div"),(s=x("a")).textContent="Beställningar",i=C(),(c=x("a")).textContent="Hantera användare",d=C(),(u=x("a")).textContent="Logga ut",p=C(),m=x("div"),(f=x("div")).textContent="Alla beställningar",y=C(),k=x("table"),(w=x("caption")).textContent="Klicka på en beställning för mer information",T=C(),D=x("thead"),E=x("tr"),(A=x("th")).textContent="#",S=C(),(N=x("th")).textContent="Namn",F=C(),(j=x("th")).textContent="Beställare",L=C(),(P=x("th")).textContent="Ansvarig",V=C(),(H=x("th")).textContent="Status",B=C(),(M=x("th")).textContent="Datum",I=C(),q=x("th"),R=x("form"),W=x("input"),Q=C(),(J=x("button")).textContent="Sök",z=C(),X=x("tbody");for(let e=0;e<ne.length;e+=1)ne[e].c();_(n,"class","navbar-brand mb-0 h1"),_(s,"href","#"),_(s,"class","nav-item nav-link active"),_(c,"href","#"),_(c,"class","nav-item nav-link "),_(u,"class","nav-item nav-link"),_(u,"href","#"),_(a,"class","navbar-nav"),_(o,"class","collapse navbar-collapse"),_(o,"id","navbarNavAltMarkup"),_(t,"class","navbar navbar-expand-lg sticky-top navbar-light bg-light"),_(f,"class","card-header h3"),_(A,"scope","col"),_(N,"scope","col"),_(j,"scope","col "),_(j,"class","d-none d-sm-table-cell"),_(P,"scope","col "),_(P,"class","d-none d-md-table-cell"),_(H,"scope","col"),_(M,"scope","col "),_(M,"class","d-none d-md-table-cell"),_(W,"class","form-control mr-sm-2 "),_(W,"type","search"),_(W,"placeholder","Sök"),_(W,"aria-label","Sök"),_(J,"class","btn btn-success bg my-2 my-sm-0"),_(J,"type","submit"),_(R,"class","form-inline my-2 my-lg-0 text-center justify-content-end"),_(q,"scope","col"),_(D,"class","thead-dark"),_(k,"class","table table-striped table-hover table-bordered "),_(m,"class","card m-sm-4 m-2 text-center"),ee=[$(s,"click",e.click_handler),$(c,"click",e.click_handler_1),$(u,"click",e.logOut),$(W,"input",e.input_input_handler),$(R,"submit",e.filter)]},m(l,b){h(l,t,b),g(t,n),g(t,r),g(t,o),g(o,a),g(a,s),g(a,i),g(a,c),g(a,d),g(a,u),h(l,p,b),h(l,m,b),g(m,f),g(m,y),g(m,k),g(k,w),g(k,T),g(k,D),g(D,E),g(E,A),g(E,S),g(E,N),g(E,F),g(E,j),g(E,L),g(E,P),g(E,V),g(E,H),g(E,B),g(E,M),g(E,I),g(E,q),g(q,R),g(R,W),O(W,e.searchQuery),g(R,Q),g(R,J),g(k,z),g(k,X);for(let e=0;e<ne.length;e+=1)ne[e].m(X,null);Z=!0},p(e,t){if(e.searchQuery&&O(W,t.searchQuery),e.apiCall||e.getAllOrders||e.showOrders){let n;for(te=t.showOrders,n=0;n<te.length;n+=1){const r=Te(t,te,n);ne[n]?(ne[n].p(e,r),K(ne[n],1)):(ne[n]=De(r),ne[n].c(),K(ne[n],1),ne[n].m(X,null))}for(U(),n=te.length;n<ne.length;n+=1)re(n);G()}},i(e){if(!Z){for(let e=0;e<te.length;e+=1)K(ne[e]);Z=!0}},o(e){ne=ne.filter(Boolean);for(let e=0;e<ne.length;e+=1)Y(ne[e]);Z=!1},d(e){e&&b(t),e&&b(p),e&&b(m),v(ne,e),l(ee)}}}function Ae(e,t){e&&e.preventDefault(),ie.set(t)}function Se(e,t,n){let{apiCall:r}=t;i();let l="",o=[],a=o;function s(e){return e.toLowerCase().search(l.toLocaleLowerCase())>-1}async function i(){try{const e=await r("/getAllorders");e.error&&console.log("error",e.message),console.log("call",e),o=e.data,console.log("allOrders",o),n("showOrders",a=o),console.log("show",a)}catch(e){console.log(e)}}return e.$set=e=>{"apiCall"in e&&n("apiCall",r=e.apiCall)},{apiCall:r,searchQuery:l,showOrders:a,filter:function(e){e&&e.preventDefault(),n("showOrders",a=o.filter(e=>e.number==l||s(e.productName)||s(e.responsible.name)||s(e.responsible.email)||s(e.customer.name)||s(e.customer.email)||s(e.status)))},getAllOrders:i,logOut:async function(e){try{e&&e.preventDefault(),(await r("/logOut")).error?alert("Kunde inte logga ut"):ie.set("authenticate")}catch(e){console.log(e)}},click_handler:e=>Ae(e,"adminPanel"),click_handler_1:e=>Ae(e,"manageUsers"),input_input_handler:function(){l=this.value,n("searchQuery",l)}}}class Ne extends le{constructor(e){super(),re(this,e,Se,Ee,a,{apiCall:0})}}function Fe(e){let t,n=e.files[e.index].name+"";return{c(){t=y(n)},m(e,n){h(e,t,n)},p(e,r){(e.files||e.index)&&n!==(n=r.files[r.index].name+"")&&w(t,n)},d(e){e&&b(t)}}}function je(t){let n;return{c(){n=y("Choose file")},m(e,t){h(e,n,t)},p:e,d(e){e&&b(n)}}}function Le(e){let t,n,r,o,a,s,i,c,d,u,p,m,f;function v(e,t){return void 0===t.files[t.index]?je:Fe}let y=v(0,e),k=y(e);return{c(){t=x("div"),n=x("div"),r=x("div"),o=x("input"),s=C(),i=x("label"),k.c(),c=C(),d=x("div"),u=x("input"),_(o,"type","file"),_(o,"class","custom-file-input"),_(o,"id","inputGroupFile01"),_(o,"aria-describedby","inputGroupFileAddon01"),o.multiple=a=!1,_(i,"class","custom-file-label"),_(i,"for","inputGroupFile01"),_(r,"class","col-3"),_(u,"type","text"),_(u,"class","form-control"),_(u,"placeholder","File description"),_(d,"class","col-9"),_(n,"class","form-row"),_(t,"class","form-group"),f=[$(o,"change",e.change_handler),$(u,"input",e.input1_input_handler)]},m(l,a){h(l,t,a),g(t,n),g(n,r),g(r,o),g(r,s),g(r,i),k.m(i,null),g(n,c),g(n,d),g(d,u),O(u,e.descriptions[e.index]),m=!0},p(e,t){y===(y=v(0,t))&&k?k.p(e,t):(k.d(1),(k=y(t))&&(k.c(),k.m(i,null))),(e.descriptions||e.index)&&u.value!==t.descriptions[t.index]&&O(u,t.descriptions[t.index])},i(e){m||(I(()=>{p||(p=X(t,ae,{},!0)),p.run(1)}),m=!0)},o(e){p||(p=X(t,ae,{},!1)),p.run(0),m=!1},d(e){e&&b(t),k.d(),e&&p&&p.end(),l(f)}}}function Pe(e,t,n){let{files:r}=t,{descriptions:l}=t,{index:o}=t;console.log(r);return e.$set=e=>{"files"in e&&n("files",r=e.files),"descriptions"in e&&n("descriptions",l=e.descriptions),"index"in e&&n("index",o=e.index)},{files:r,descriptions:l,index:o,change_handler:e=>n("files",r[o]=e.currentTarget.files[0],r),input1_input_handler:function(){l[o]=this.value,n("descriptions",l),n("index",o)}}}class Ve extends le{constructor(e){super(),re(this,e,Pe,Le,a,{files:0,descriptions:0,index:0})}}function He(e,t,n){const r=Object.create(e);return r.desc=t[n],r.i=n,r}function Be(e){let t,n,r,l,o;return{c(){t=x("div"),n=y(e.alertText),_(t,"class",r="alert "+(e.error?"alert-danger":"alert-success")+"\r\n        "),_(t,"role","alert")},m(e,r){h(e,t,r),g(t,n),o=!0},p(e,l){o&&!e.alertText||w(n,l.alertText),(!o||e.error&&r!==(r="alert "+(l.error?"alert-danger":"alert-success")+"\r\n        "))&&_(t,"class",r)},i(e){o||(I(()=>{l||(l=X(t,ae,{},!0)),l.run(1)}),o=!0)},o(e){l||(l=X(t,ae,{},!1)),l.run(0),o=!1},d(e){e&&b(t),e&&l&&l.end()}}}function Me(e){let t;const n=new Ve({props:{index:e.i,files:e.files,descriptions:e.fileDescriptions}});return{c(){Z(n.$$.fragment)},m(e,r){ee(n,e,r),t=!0},p(e,t){const r={};e.fileDescriptions&&(r.descriptions=t.fileDescriptions),n.$set(r)},i(e){t||(K(n.$$.fragment,e),t=!0)},o(e){Y(n.$$.fragment,e),t=!1},d(e){te(n,e)}}}function Ie(e){let t,n,r,o,a,s,i,c,d,u,p,m,f,y,k,w,O,T,D,E,A,S,N,F,j,L,P,V,H,B,M=(e.error||e.success)&&Be(e),I=e.fileDescriptions,q=[];for(let t=0;t<I.length;t+=1)q[t]=Me(He(e,I,t));const R=e=>Y(q[e],1,1,()=>{q[e]=null});return{c(){t=x("div"),n=x("main"),M&&M.c(),r=C(),o=x("form"),a=x("div"),s=x("div"),(i=x("div")).innerHTML='<label for="productName">Projektnamn</label> \n            <input type="text" class="form-control" id="productName" name="productName" aria-describedby="emailHelp" placeholder="Projektnamn">',c=C(),d=x("div"),(u=x("label")).textContent="Beställare",p=C(),m=x("input"),y=C(),(k=x("div")).innerHTML='<h3>Typ av uppdrag</h3> \n          <div class="form-check"><input class="form-check-input" type="checkbox" value="" id="tillverkning" name="producation"> \n            <label class="form-check-label" for="tillverkning">\n              Tillverkning\n            </label></div> \n          <div class="form-check"><input class="form-check-input" type="checkbox" value="" id="tillverkningsunderlag" name="productionDocumentation"> \n            <label class="form-check-label" for="tillverkningsunderlag">\n              Tillverkningsunderlag\n            </label></div> \n          <div class="form-check"><input class="form-check-input" type="checkbox" value="" id="beräkning" name="calculation"> \n            <label class="form-check-label" for="beräkning">Beräkning</label></div>',w=C(),(O=x("div")).innerHTML='<h3>Beskrivning av produkt</h3> \n          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="productDescription"></textarea>',T=C(),(D=x("div")).innerHTML='<h3>Önskemål</h3> \n          <textarea class="form-control" id="productDescripion" name="wishes" rows="3"></textarea>',E=C(),(A=x("h3")).textContent="Filer",S=C();for(let e=0;e<q.length;e+=1)q[e].c();N=C(),(F=x("button")).textContent="Add file",j=C(),L=x("hr"),P=C(),(V=x("button")).textContent="Make order",_(i,"class","col"),_(u,"for","customer"),_(m,"name","customer"),_(m,"type","text"),_(m,"id","customer"),_(m,"class","form-control"),m.value=f=e.user.name,_(m,"placeholder","Beställare"),_(d,"class","col"),_(s,"class","form-row"),_(k,"class","form-group mt-3"),_(O,"class","form-group"),_(D,"class","form-group"),_(F,"class","btn btn-primary"),_(L,"class","my-4"),_(V,"type","submit"),_(V,"class","btn btn-success btn-lg"),_(a,"class","form-group"),_(o,"class","svelte-1lxf9ux"),_(n,"class","svelte-1lxf9ux"),_(t,"class","container-fluid"),B=[$(F,"click",e.addFile),$(o,"submit",e.submitForm)]},m(e,l){h(e,t,l),g(t,n),M&&M.m(n,null),g(n,r),g(n,o),g(o,a),g(a,s),g(s,i),g(s,c),g(s,d),g(d,u),g(d,p),g(d,m),g(a,y),g(a,k),g(a,w),g(a,O),g(a,T),g(a,D),g(a,E),g(a,A),g(a,S);for(let e=0;e<q.length;e+=1)q[e].m(a,null);g(a,N),g(a,F),g(a,j),g(a,L),g(a,P),g(a,V),H=!0},p(e,t){if(t.error||t.success?M?(M.p(e,t),K(M,1)):((M=Be(t)).c(),K(M,1),M.m(n,r)):M&&(U(),Y(M,1,1,()=>{M=null}),G()),(!H||e.user&&f!==(f=t.user.name))&&(m.value=f),e.files||e.fileDescriptions){let n;for(I=t.fileDescriptions,n=0;n<I.length;n+=1){const r=He(t,I,n);q[n]?(q[n].p(e,r),K(q[n],1)):(q[n]=Me(r),q[n].c(),K(q[n],1),q[n].m(a,N))}for(U(),n=I.length;n<q.length;n+=1)R(n);G()}},i(e){if(!H){K(M);for(let e=0;e<I.length;e+=1)K(q[e]);H=!0}},o(e){Y(M),q=q.filter(Boolean);for(let e=0;e<q.length;e+=1)Y(q[e]);H=!1},d(e){e&&b(t),M&&M.d(),v(q,e),l(B)}}}function qe(e,t,n){let{apiCall:r}=t,{user:l}=t,o=[],a=[],s=!1,i=!1,c="";return e.$set=e=>{"apiCall"in e&&n("apiCall",r=e.apiCall),"user"in e&&n("user",l=e.user)},{apiCall:r,user:l,files:o,fileDescriptions:a,success:s,error:i,alertText:c,addFile:function(e){e.preventDefault(),console.log("add file"),n("fileDescriptions",a=[...a,void 0]),console.log(a),console.log(o)},submitForm:async function(e){e.preventDefault(),console.log(e.currentTarget);const t=new FormData(e.currentTarget);o.map(e=>t.append("files",e)),t.append("fileDescriptions",a);for(let[e,n]of t.entries())console.log(e,n);(await r("/makeOrder",t,"multipart/form-data")).error?(n("error",i=!0),n("alertText",c="Kunde inte skapa beställning, försök igen senare")):(n("success",s=!0),n("alertText",c="Order skapad"))}}}class Re extends le{constructor(e){super(),re(this,e,qe,Ie,a,{apiCall:0,user:0})}}function We(t){let n;return{c(){n=y("Checking route")},m(e,t){h(e,n,t)},p:e,i:e,o:e,d(e){e&&b(n)}}}function Qe(t){let n;return{c(){n=y("manageUsers")},m(e,t){h(e,n,t)},p:e,i:e,o:e,d(e){e&&b(n)}}}function Je(e){let t;const n=new Re({props:{user:e.userValue,apiCall:Ye}});return{c(){Z(n.$$.fragment)},m(e,r){ee(n,e,r),t=!0},p(e,t){const r={};e.userValue&&(r.user=t.userValue),n.$set(r)},i(e){t||(K(n.$$.fragment,e),t=!0)},o(e){Y(n.$$.fragment,e),t=!1},d(e){te(n,e)}}}function Ue(t){let n;const r=new Ne({props:{apiCall:Ye}});return{c(){Z(r.$$.fragment)},m(e,t){ee(r,e,t),n=!0},p:e,i(e){n||(K(r.$$.fragment,e),n=!0)},o(e){Y(r.$$.fragment,e),n=!1},d(e){te(r,e)}}}function Ge(t){let n;const r=new he({props:{apiCall:Ye}});return{c(){Z(r.$$.fragment)},m(e,t){ee(r,e,t),n=!0},p:e,i(e){n||(K(r.$$.fragment,e),n=!0)},o(e){Y(r.$$.fragment,e),n=!1},d(e){te(r,e)}}}function Ke(e){let t,n,r,l;const o=[Ge,Ue,Je,Qe,We],a=[];function s(e,t){return"authenticate"===t.urlValue?0:"adminPanel"===t.urlValue?1:"makeOrder"===t.urlValue?2:"manageUsers"===t.urlValue?3:4}return t=s(0,e),n=a[t]=o[t](e),{c(){n.c(),r=k()},m(e,n){a[t].m(e,n),h(e,r,n),l=!0},p(e,l){let i=t;(t=s(0,l))===i?a[t].p(e,l):(U(),Y(a[i],1,1,()=>{a[i]=null}),G(),(n=a[t])||(n=a[t]=o[t](l)).c(),K(n,1),n.m(r.parentNode,r))},i(e){l||(K(n),l=!0)},o(e){Y(n),l=!1},d(e){a[t].d(e),e&&b(r)}}}function Ye(e,t,n){const r=!("multipart/form-data"===n);return console.log(t),new Promise((n,l)=>{const o={method:"POST",mode:"cors",credentials:"include",body:t};r&&(o.headers={"Content-Type":"application/json"}),console.log(o),fetch(e,o).then(e=>(console.log(e.headers.get("set-cookie")),console.log(document.cookie),e.json())).then(e=>n(e)).catch(e=>l(e))})}function ze(e,t,n){let r,l;return ie.subscribe(e=>n("urlValue",r=e)),"/"===window.location.pathname&&async function(){try{const e=await Ye("/checkAccount");console.log(e),n("userValue",l=e);const t=function(e){try{return e.authenticated?e.admin?"adminPanel":"makeOrder":"authenticate"}catch(e){console.log(e)}}(e);console.log(t),ie.set(t)}catch(e){console.log("err"),console.log(e)}}(),e.$$.update=(e={urlValue:1})=>{e.urlValue&&console.log(r)},{urlValue:r,userValue:l}}return new class extends le{constructor(e){super(),re(this,e,ze,Ke,a,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
