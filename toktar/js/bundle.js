(()=>{var Ix=Object.defineProperty;var Dx=(r,t,e)=>t in r?Ix(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Zt=(r,t,e)=>Dx(r,typeof t!="symbol"?t+"":t,e);function _r(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Tm(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Da={duration:.5,overwrite:!1,delay:0},Of,Mn,Be,Ai=1e8,Re=1/Ai,Af=Math.PI*2,Nx=Af/4,Ux=0,wm=Math.sqrt,Fx=Math.cos,Ox=Math.sin,un=function(t){return typeof t=="string"},qe=function(t){return typeof t=="function"},vr=function(t){return typeof t=="number"},Dc=function(t){return typeof t=="undefined"},Qi=function(t){return typeof t=="object"},ri=function(t){return t!==!1},Bf=function(){return typeof window!="undefined"},Tc=function(t){return qe(t)||un(t)},Em=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,Bx=/random\([^)]+\)/g,kx=/,\s*/g,gm=/(?:-?\.?\d|\.)+/gi,kf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zf=/[+-]=-?[.\d]+/,zx=/[^,'"\[\]\s]+/gi,Vx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ve,$i,Cf,Vf,hi={},Cc={},Am,Cm=function(t){return(Cc=mo(t,hi))&&Dn},Nc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Na=function(t,e){return!e&&console.warn(t)},Rm=function(t,e){return t&&(hi[t]=e)&&Cc&&(Cc[t]=e)||hi},Ua=function(){return 0},Hx={suppressEvents:!0,isStart:!0,kill:!1},wc={suppressEvents:!0,kill:!1},Gx={suppressEvents:!0},Hf={},Wr=[],Rf={},Pm,ni={},Sf={},_m=30,Ec=[],Gf="",Wf=function(t){var e=t[0],n,i;if(Qi(e)||qe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ec.length;i--&&!Ec[i].targetTest(e););n=Ec[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Zf(t[i],n)))||t.splice(i,1);return t},Xr=function(t){return t._gsap||Wf(Ci(t))[0]._gsap},Xf=function(t,e,n){return(n=t[e])&&qe(n)?t[e]():Dc(n)&&t.getAttribute&&t.getAttribute(e)||n},Wn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ye=function(t){return Math.round(t*1e5)/1e5||0},ze=function(t){return Math.round(t*1e7)/1e7||0},Rs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Wx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Rc=function(){var t=Wr.length,e=Wr.slice(0),n,i;for(Rf={},Wr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qf=function(t){return!!(t._initted||t._startAt||t.add)},Lm=function(t,e,n,i){Wr.length&&!Mn&&Rc(),t.render(e,n,i||!!(Mn&&e<0&&qf(t))),Wr.length&&!Mn&&Rc()},Im=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(zx).length<2?e:un(t)?t.trim():t},Dm=function(t){return t},ui=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Xx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},mo=function(t,e){for(var n in e)t[n]=e[n];return t},xm=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Qi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Pc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Pa=function(t){var e=t.parent||Ve,n=t.keyframes?Xx(In(t.keyframes)):ui;if(ri(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},qx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Nm=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Uc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},qr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ws=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Yx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Pf=function(t,e,n,i){return t._startAt&&(Mn?t._startAt.revert(wc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Zx=function r(t){return!t||t._ts&&r(t.parent)},vm=function(t){return t._repeat?go(t._tTime,t=t.duration()+t._rDelay)*t:0},go=function(t,e){var n=Math.floor(t=ze(t/e));return t&&n===t?n-1:n},Lc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Fc=function(t){return t._end=ze(t._start+(t._tDur/Math.abs(t._ts||t._rts||Re)||0))},Oc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ze(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Fc(t),n._dirty||ws(n,t)),t},Um=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Lc(t.rawTime(),e),(!e._dur||Ba(0,e.totalDuration(),n)-e._tTime>Re)&&e.render(n,!0)),ws(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Re}},Ki=function(t,e,n,i){return e.parent&&qr(e),e._start=ze((vr(n)?n:n||t!==Ve?Ei(t,n,e):t._time)+e._delay),e._end=ze(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Nm(t,e,"_first","_last",t._sort?"_start":0),Lf(e)||(t._recent=e),i||Um(t,e),t._ts<0&&Oc(t,t._tTime),t},Fm=function(t,e){return(hi.ScrollTrigger||Nc("scrollTrigger",e))&&hi.ScrollTrigger.create(e,t)},Om=function(t,e,n,i,s){if(Kf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Pm!==ii.frame)return Wr.push(t),t._lazy=[s,i],1},Jx=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Lf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},$x=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Jx(t)&&!(!t._initted&&Lf(t))||(t._ts<0||t._dp._ts<0)&&!Lf(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Ba(0,t._tDur,e),h=go(l,a),t._yoyo&&h&1&&(o=1-o),h!==go(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Mn||i||t._zTime===Re||!e&&t._zTime){if(!t._initted&&Om(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Re:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Pf(t,e,n,!0),t._onUpdate&&!n&&ci(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ci(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&qr(t,1),!n&&!Mn&&(ci(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Kx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},_o=function(t,e,n,i){var s=t._repeat,o=ze(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:ze(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Oc(t,t._tTime=t._tDur*a),t.parent&&Fc(t),n||ws(t.parent,t),t},ym=function(t){return t instanceof Ln?ws(t):_o(t,t._dur)},Qx={_start:0,endTime:Ua,totalDuration:Ua},Ei=function r(t,e,n){var i=t.labels,s=t._recent||Qx,o=t.duration()>=Ai?s.endTime(!1):t._dur,a,l,c;return un(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(In(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},La=function(t,e,n){var i=vr(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Qe(e[0],o,e[s+1])},Yr=function(t,e){return t||t===0?e(t):e},Ba=function(t,e,n){return n<t?t:n>e?e:n},bn=function(t,e){return!un(t)||!(e=Vx.exec(t))?"":e[1]},jx=function(t,e,n){return Yr(n,function(i){return Ba(t,e,i)})},If=[].slice,Bm=function(t,e){return t&&Qi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Qi(t[0]))&&!t.nodeType&&t!==$i},tv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return un(i)&&!e||Bm(i,1)?(s=n).push.apply(s,Ci(i)):n.push(i)})||n},Ci=function(t,e,n){return Be&&!e&&Be.selector?Be.selector(t):un(t)&&!n&&(Cf||!xo())?If.call((e||Vf).querySelectorAll(t),0):In(t)?tv(t,n):Bm(t)?If.call(t,0):t?[t]:[]},Df=function(t){return t=Ci(t)[0]||Na("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ci(e,n.querySelectorAll?n:n===t?Na("Invalid scope")||Vf.createElement("div"):t)}},km=function(t){return t.sort(function(){return .5-Math.random()})},zm=function(t){if(qe(t))return t;var e=Qi(t)?t:{each:t},n=Es(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return un(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,p){var _=(p||e).length,g=o[_],m,M,E,x,b,T,A,v,w;if(!g){if(w=e.grid==="auto"?0:(e.grid||[1,Ai])[1],!w){for(A=-Ai;A<(A=p[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(g=o[_]=[],m=l?Math.min(w,_)*h-.5:i%w,M=w===Ai?0:l?_*d/w-.5:i/w|0,A=0,v=Ai,T=0;T<_;T++)E=T%w-m,x=M-(T/w|0),g[T]=b=c?Math.abs(c==="y"?x:E):wm(E*E+x*x),b>A&&(A=b),b<v&&(v=b);i==="random"&&km(g),g.max=A-v,g.min=v,g.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=bn(e.amount||e.each)||0,n=n&&_<0?dv(n):n}return _=(g[u]-g.min)/g.max||0,ze(g.b+(n?n(_):_)*g.v)+g.u}},Nf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ze(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(vr(n)?0:bn(n))}},Vm=function(t,e){var n=In(t),i,s;return!n&&Qi(t)&&(i=n=t.radius||Ai,t.values?(t=Ci(t.values),(s=!vr(t[0]))&&(i*=i)):t=Nf(t.increment)),Yr(e,n?qe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ai,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,s||h===o||vr(o)?h:h+bn(o)}:Nf(t))},Hm=function(t,e,n,i){return Yr(In(t)?!e:n===!0?!!(n=0):!i,function(){return In(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},ev=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},nv=function(t,e){return function(n){return t(parseFloat(n))+(e||bn(n))}},iv=function(t,e,n){return Wm(t,e,0,1,n)},Gm=function(t,e,n){return Yr(n,function(i){return t[~~e(i)]})},rv=function r(t,e,n){var i=e-t;return In(t)?Gm(t,r(0,t.length),e):Yr(n,function(s){return(i+(s-t)%i)%i+t})},sv=function r(t,e,n){var i=e-t,s=i*2;return In(t)?Gm(t,r(0,t.length-1),e):Yr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},vo=function(t){return t.replace(Bx,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(kx);return Hm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Wm=function(t,e,n,i,s){var o=e-t,a=i-n;return Yr(s,function(l){return n+((l-t)/o*a||0)})},ov=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=un(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(In(t)&&!In(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(p){p*=d;var _=Math.min(u,~~p);return h[_](p-_)},n=e}else i||(t=mo(In(t)?[]:{},t));if(!h){for(l in e)Jf.call(a,t,l,"get",e[l]);s=function(p){return td(p,a)||(o?t.p:t)}}}return Yr(n,s)},Sm=function(t,e,n){var i=t.labels,s=Ai,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ci=function(t,e,n){var i=t.vars,s=i[e],o=Be,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Wr.length&&Rc(),a&&(Be=a),h=l?s.apply(c,l):s.call(c),Be=o,h},Ca=function(t){return qr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Mn),t.progress()<1&&ci(t,"onInterrupt"),t},po,Xm=[],qm=function(t){if(t)if(t=!t.name&&t.default||t,Bf()||t.headless){var e=t.name,n=qe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ua,render:td,add:Jf,kill:bv,modifier:Mv,rawVars:0},o={targetTest:0,get:0,getSetter:Bc,aliases:{},register:0};if(xo(),t!==i){if(ni[e])return;ui(i,ui(Pc(t,s),o)),mo(i.prototype,mo(s,Pc(t,o))),ni[i.prop=e]=i,t.targetTest&&(Ec.push(i),Hf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Rm(e,i),t.register&&t.register(Dn,i,Xn)}else Xm.push(t)},Ce=255,Ra={aqua:[0,Ce,Ce],lime:[0,Ce,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ce],navy:[0,0,128],white:[Ce,Ce,Ce],olive:[128,128,0],yellow:[Ce,Ce,0],orange:[Ce,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ce,0,0],pink:[Ce,192,203],cyan:[0,Ce,Ce],transparent:[Ce,Ce,Ce,0]},Mf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ce+.5|0},Ym=function(t,e,n){var i=t?vr(t)?[t>>16,t>>8&Ce,t&Ce]:0:Ra.black,s,o,a,l,c,h,d,u,f,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ra[t])i=Ra[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ce,i&Ce,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ce,t&Ce]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(gm),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Mf(l+1/3,s,o),i[1]=Mf(l,s,o),i[2]=Mf(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(kf),n&&i.length<4&&(i[3]=1),i}else i=t.match(gm)||Ra.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/Ce,o=i[1]/Ce,a=i[2]/Ce,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Zm=function(t){var e=[],n=[],i=-1;return t.split(xr).forEach(function(s){var o=s.match(Cs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Mm=function(t,e,n){var i="",s=(t+i).match(xr),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=Ym(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Zm(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(xr,"1").split(Cs),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(xr),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},xr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ra)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),av=/hsl[a]?\(/,Yf=function(t){var e=t.join(" "),n;if(xr.lastIndex=0,xr.test(e))return n=av.test(e),t[1]=Mm(t[1],n),t[0]=Mm(t[0],n,Zm(t[1])),!0},Fa,ii=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,p=function _(g){var m=r()-i,M=g===!0,E,x,b,T;if((m>t||m<0)&&(n+=m-e),i+=m,b=i-n,E=b-o,(E>0||M)&&(T=++d.frame,u=b-d.time*1e3,d.time=b=b/1e3,o+=E+(E>=s?4:s-E),x=1),M||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](b,u,T,g)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return u/(1e3/(g||60))},wake:function(){Am&&(!Cf&&Bf()&&($i=Cf=window,Vf=$i.document||{},hi.gsap=Dn,($i.gsapVersions||($i.gsapVersions=[])).push(Dn.version),Cm(Cc||$i.GreenSockGlobals||!$i.gsap&&$i||{}),Xm.forEach(qm)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(g){return setTimeout(g,o-d.time*1e3+1|0)},Fa=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Fa=0,c=Ua},lagSmoothing:function(g,m){t=g||1/0,e=Math.min(m||33,t)},fps:function(g){s=1e3/(g||240),o=d.time*1e3+s},add:function(g,m,M){var E=m?function(x,b,T,A){g(x,b,T,A),d.remove(E)}:g;return d.remove(g),a[M?"unshift":"push"](E),xo(),E},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},d})(),xo=function(){return!Fa&&ii.wake()},xe={},lv=/^[\d.\-M][\d.\-,\s]/,cv=/["']/g,hv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(cv,"").trim():+c,i=l.substr(a+1).trim();return e},uv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},fv=function(t){var e=(t+"").split("("),n=xe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[hv(e[1])]:uv(t).split(",").map(Im)):xe._CE&&lv.test(t)?xe._CE("",t):n},dv=function(t){return function(e){return 1-t(1-e)}},Es=function(t,e){return t&&(qe(t)?t:xe[t]||fv(t))||e},Ps=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Wn(t,function(a){xe[a]=hi[a]=s,xe[o=a.toLowerCase()]=n;for(var l in s)xe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=xe[a+"."+l]=s[l]}),s},Jm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},bf=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Af*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Ox((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Jm(a);return s=Af/s,l.config=function(c,h){return r(t,c,h)},l},Tf=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Jm(n);return i.config=function(s){return r(t,s)},i};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ps(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});xe.Linear.easeNone=xe.none=xe.Linear.easeIn;Ps("Elastic",bf("in"),bf("out"),bf());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Ps("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ps("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ps("Circ",function(r){return-(wm(1-r*r)-1)});Ps("Sine",function(r){return r===1?1:-Fx(r*Nx)+1});Ps("Back",Tf("in"),Tf("out"),Tf());xe.SteppedEase=xe.steps=hi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Re;return function(a){return((i*Ba(0,o,a)|0)+s)*n}}};Da.ease=xe["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Gf+=r+","+r+"Params,"});var Zf=function(t,e){this.id=Ux++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Xf,this.set=e?e.getSetter:Bc},Oa=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,_o(this,+e.duration,1,1),this.data=e.data,Be&&(this._ctx=Be,Be.data.push(this)),Fa||ii.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,_o(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(xo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Oc(this,n),!s._dp||s.parent||Um(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ki(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Re||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Lm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+vm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+vm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?go(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Re?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Lc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Re?0:this._rts,this.totalTime(Ba(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Fc(this),Yx(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Re&&(this._tTime-=Re)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ze(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ki(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ri(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Lc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Gx);var i=Mn;return Mn=n,qf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ym(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ym(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ei(this,n),ri(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ri(i)),this._dur||(this._zTime=-Re),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Re:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Re,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Re)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=qe(n)?n:Dm,l=function(){var h=i.then;i.then=null,s&&s(),qe(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ca(this)},r})();ui(Oa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Re,_prom:0,_ps:!1,_rts:1});var Ln=(function(r){Tm(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ri(n.sortChildren),Ve&&Ki(n.parent||Ve,_r(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Fm(_r(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return La(0,arguments,this),this},e.from=function(i,s,o){return La(1,arguments,this),this},e.fromTo=function(i,s,o,a){return La(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Pa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qe(i,s,Ei(this,o),1),this},e.call=function(i,s,o){return Ki(this,Qe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Qe(i,o,Ei(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Pa(o).immediateRender=ri(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,d){return a.startAt=o,Pa(a).immediateRender=ri(a.immediateRender),this.staggerTo(i,s,a,l,c,h,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ze(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,p,_,g,m,M,E,x,b,T,A;if(this!==Ve&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,x=this._start,E=this._ts,m=!E,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(u=ze(h%g),h===l?(_=this._repeat,u=c):(b=ze(h/g),_=~~b,_&&_===b&&(u=c,_--),u>c&&(u=c)),b=go(this._tTime,g),!a&&this._tTime&&b!==_&&this._tTime-b*g-this._dur<=0&&(b=_),T&&_&1&&(u=c-u,A=1),_!==b&&!this._lock){var v=T&&b&1,w=v===(T&&_&1);if(_<b&&(v=!v),a=v?0:h%c?c:h,this._lock=1,this.render(a||(A?0:ze(_*g)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ci(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Kx(this,ze(a),ze(u)),M&&(h-=u-(u=M._start))),this._tTime=h,this._time=u,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!b&&(ci(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!m){M=0,p&&(h+=this._zTime=-Re);break}}f=p}else{f=this._last;for(var R=i<0?i:u;f;){if(p=f._prev,(f._act||R<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,o||Mn&&qf(f)),u!==this._time||!this._ts&&!m){M=0,p&&(h+=this._zTime=R?-Re:Re);break}}f=p}}if(M&&!s&&(this.pause(),M.render(u>=a?0:-Re)._zTime=u>=a?1:-1,this._ts))return this._start=x,Fc(this),this.render(i,s,o);this._onUpdate&&!s&&ci(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&qr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(ci(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(vr(s)||(s=Ei(this,s,i)),!(i instanceof Oa)){if(In(i))return i.forEach(function(a){return o.add(a,s)}),this;if(un(i))return this.addLabel(i,s);if(qe(i))i=Qe.delayedCall(0,i);else return this}return this!==i?Ki(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ai);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return un(i)?this.removeLabel(i):qe(i)?this.killTweensOf(i):(i.parent===this&&Uc(this,i),i===this._recent&&(this._recent=this._last),ws(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ze(ii.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Ei(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Qe.delayedCall(0,s||Ua,o);return a.data="isPause",this._hasPause=1,Ki(this,a,Ei(this,i))},e.removePause=function(i){var s=this._first;for(i=Ei(this,i);s;)s._start===i&&s.data==="isPause"&&qr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Gr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Ci(i),l=this._first,c=vr(s),h;l;)l instanceof Qe?Wx(l._targets,a)&&(c?(!Gr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Ei(o,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=Qe.to(o,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Re,onStart:function(){if(o.pause(),!f){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==g&&_o(p,g,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},s));return u?p.render(0):p},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ui({startAt:{time:Ei(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Sm(this,Ei(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Sm(this,Ei(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Re)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=ze(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ws(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ws(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ai,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ki(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=ze(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;_o(o,o===Ve&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ve._ts&&(Lm(Ve,Lc(i,Ve)),Pm=ii.frame),ii.frame>=_m){_m+=si.autoSleep||120;var s=Ve._first;if((!s||!s._ts)&&si.autoSleep&&ii._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ii.sleep()}}},t})(Oa);ui(Ln.prototype,{_lock:0,_hasPause:0,_forcing:0});var pv=function(t,e,n,i,s,o,a){var l=new Xn(this._pt,t,e,0,1,jf,null,s),c=0,h=0,d,u,f,p,_,g,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=vo(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),u=n.match(yf)||[];d=yf.exec(i);)p=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(g=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:g,c:p.charAt(1)==="="?Rs(g,p)-g:parseFloat(p)-g,m:f&&f<4?Math.round:0},c=yf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(zf.test(i)||m)&&(l.e=0),this._pt=l,l},Jf=function(t,e,n,i,s,o,a,l,c,h){qe(i)&&(i=i(s||0,t,o));var d=t[e],u=n!=="get"?n:qe(d)?c?t[e.indexOf("set")||!qe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=qe(d)?c?vv:Qm:Qf,p;if(un(i)&&(~i.indexOf("random(")&&(i=vo(i)),i.charAt(1)==="="&&(p=Rs(u,i)+(bn(u)||0),(p||p===0)&&(i=p))),!h||u!==i||Uf)return!isNaN(u*i)&&i!==""?(p=new Xn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?Sv:jm,0,f),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&Nc(e,i),pv.call(this,t,e,u,i,f,l||si.stringFilter,c))},mv=function(t,e,n,i,s){if(qe(t)&&(t=Ia(t,s,e,n,i)),!Qi(t)||t.style&&t.nodeType||In(t)||Em(t))return un(t)?Ia(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Ia(t[a],s,e,n,i);return o},$f=function(t,e,n,i,s,o){var a,l,c,h;if(ni[t]&&(a=new ni[t]).init(s,a.rawVars?e[t]:mv(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Xn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==po))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Gr,Uf,Kf=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,p=t._dur,_=t._startAt,g=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:g,E=t._overwrite==="auto"&&!Of,x=t.timeline,b=i.easeReverse||d,T,A,v,w,R,V,U,$,B,q,j,X,Y;if(x&&(!u||!s)&&(s="none"),t._ease=Es(s,Da.ease),t._rEase=b&&(Es(b)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||u&&!i.stagger){if($=g[0]?Xr(g[0]).harness:0,X=$&&i[$.prop],T=Pc(i,Hf),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&p?wc:Hx),_._lazy=0),o){if(qr(t._startAt=Qe.set(g,ui({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ri(l),startAt:null,delay:0,onUpdate:c&&function(){return ci(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn||!a&&!f)&&t._startAt.revert(wc),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),v=ui({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ri(l),immediateRender:a,stagger:0,parent:m},T),X&&(v[$.prop]=X),qr(t._startAt=Qe.set(g,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn?t._startAt.revert(wc):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Re,Re);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&ri(l)||l&&!p,A=0;A<g.length;A++){if(R=g[A],U=R._gsap||Wf(g)[A]._gsap,t._ptLookup[A]=q={},Rf[U.id]&&Wr.length&&Rc(),j=M===g?A:M.indexOf(R),$&&(B=new $).init(R,X||T,t,j,M)!==!1&&(t._pt=w=new Xn(t._pt,R,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(nt){q[nt]=w}),B.priority&&(V=1)),!$||X)for(v in T)ni[v]&&(B=$f(v,T,t,j,R,M))?B.priority&&(V=1):q[v]=w=Jf.call(t,R,v,"get",T[v],j,M,0,i.stringFilter);t._op&&t._op[A]&&t.kill(R,t._op[A]),E&&t._pt&&(Gr=t,Ve.killTweensOf(R,q,t.globalTime(e)),Y=!t.parent,Gr=0),t._pt&&l&&(Rf[U.id]=1)}V&&ed(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,u&&e<=0&&x.render(Ai,!0,!0)},gv=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Uf=1,t.vars[e]="+=0",Kf(t,a),Uf=0,l?Na(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Ye(n)+bn(d.e)),d.b&&(d.b=h.s+bn(d.b))},_v=function(t,e){var n=t[0]?Xr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=mo({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},xv=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(In(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Ia=function(t,e,n,i,s){return qe(t)?t.call(e,n,i,s):un(t)&&~t.indexOf("random(")?vo(t):t},$m=Gf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Km={};Wn($m+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Km[r]=1});var Qe=(function(r){Tm(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Pa(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=i.parent||Ve,M=(In(n)||Em(n)?vr(n[0]):"length"in i)?[n]:Ci(n),E,x,b,T,A,v,w,R;if(a._targets=M.length?Wf(M):Na("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||Tc(c)||Tc(h)){i=a.vars;var V=i.easeReverse||i.yoyoEase;if(E=a.timeline=new Ln({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:M}),E.kill(),E.parent=E._dp=_r(a),E._start=0,u||Tc(c)||Tc(h)){if(T=M.length,w=u&&zm(u),Qi(u))for(A in u)~$m.indexOf(A)&&(R||(R={}),R[A]=u[A]);for(x=0;x<T;x++)b=Pc(i,Km),b.stagger=0,V&&(b.easeReverse=V),R&&mo(b,R),v=M[x],b.duration=+Ia(c,_r(a),x,v,M),b.delay=(+Ia(h,_r(a),x,v,M)||0)-a._delay,!u&&T===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),E.to(v,b,w?w(x,v,M):0),E._ease=xe.none;E.duration()?c=h=0:a.timeline=0}else if(p){Pa(ui(E.vars.defaults,{ease:"none"})),E._ease=Es(p.ease||i.ease||"none");var U=0,$,B,q;if(In(p))p.forEach(function(j){return E.to(M,j,">")}),E.duration();else{b={};for(A in p)A==="ease"||A==="easeEach"||xv(A,p[A],b,p.easeEach);for(A in b)for($=b[A].sort(function(j,X){return j.t-X.t}),U=0,x=0;x<$.length;x++)B=$[x],q={ease:B.e,duration:(B.t-(x?$[x-1].t:0))/100*c},q[A]=B.v,E.to(M,q,U),U+=q.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return f===!0&&!Of&&(Gr=_r(a),Ve.killTweensOf(M),Gr=0),Ki(m,_r(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===ze(m._time)&&ri(d)&&Zx(_r(a))&&m.data!=="nested")&&(a._tTime=-Re,a.render(Math.max(0,-h)||0)),g&&Fm(_r(a),g),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Re&&!h?l:i<Re?0:i,u,f,p,_,g,m,M,E;if(!c)$x(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=ze(d%_),d===l?(p=this._repeat,u=c):(g=ze(d/_),p=~~g,p&&p===g?(u=c,p--):u>c&&(u=c)),m=this._yoyo&&p&1,m&&(u=c-u),g=go(this._tTime,_),u===a&&!o&&this._initted&&p===g)return this._tTime=d,this;p!==g&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(ze(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(Om(this,h?i:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var x=u<a;if(x!==this._inv){var b=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(x?-1:1)/b:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(u/c);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!g&&(ci(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;E&&E.render(i<0?i:E._dur*E._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Pf(this,i,s,o),ci(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&ci(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Pf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&qr(this,1),!s&&!(h&&!a)&&(d||a||m)&&(ci(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Fa||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Kf(this,c),h=this._ease(c/this._dur),gv(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Oc(this,0),this.parent||Nm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ca(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Gr&&Gr.vars.overwrite!==!0)._first||Ca(this),this.parent&&o!==this.timeline.totalDuration()&&_o(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ci(i):a,c=this._ptLookup,h=this._pt,d,u,f,p,_,g,m;if((!s||s==="all")&&qx(a,l))return s==="all"&&(this._pt=0),Ca(this);for(d=this._op=this._op||[],s!=="all"&&(un(s)&&(_={},Wn(s,function(M){return _[M]=1}),s=_),s=_v(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){u=c[m],s==="all"?(d[m]=s,p=u,f={}):(f=d[m]=d[m]||{},p=s);for(_ in p)g=u&&u[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Uc(this,g,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Ca(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return La(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return La(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ve.killTweensOf(i,s,o)},t})(Oa);ui(Qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(r){Qe[r]=function(){var t=new Ln,e=If.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Qf=function(t,e,n){return t[e]=n},Qm=function(t,e,n){return t[e](n)},vv=function(t,e,n,i){return t[e](i.fp,n)},yv=function(t,e,n){return t.setAttribute(e,n)},Bc=function(t,e){return qe(t[e])?Qm:Dc(t[e])&&t.setAttribute?yv:Qf},jm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Sv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},jf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},td=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Mv=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},bv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Uc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Tv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},ed=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Xn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||jm,this.d=l||this,this.set=c||Qf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Tv,this.m=n,this.mt=s,this.tween=i},r})();Wn(Gf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Hf[r]=1});hi.TweenMax=hi.TweenLite=Qe;hi.TimelineLite=hi.TimelineMax=Ln;Ve=new Ln({sortChildren:!1,defaults:Da,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=Yf;var As=[],Ac={},wv=[],bm=0,Ev=0,wf=function(t){return(Ac[t]||wv).map(function(e){return e()})},Ff=function(){var t=Date.now(),e=[];t-bm>2&&(wf("matchMediaInit"),As.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=$i.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),wf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),bm=t,wf("matchMedia"))},tg=(function(){function r(e,n){this.selector=n&&Df(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ev++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){qe(n)&&(s=i,i=n,n=qe);var o=this,a=function(){var c=Be,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Df(s)),Be=o,d=i.apply(o,arguments),qe(d)&&o._r.push(d),Be=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===qe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Be;Be=null,n(this),Be=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Qe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ln?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=As.length;o--;)As[o].id===this.id&&As.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),Av=(function(){function r(e){this.contexts=[],this.scope=e,Be&&Be.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Qi(n)||(n={matches:n});var o=new tg(0,s||this.scope),a=o.conditions={},l,c,h;Be&&!o.selector&&(o.selector=Be.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=$i.matchMedia(n[c]),l&&(As.indexOf(o)<0&&As.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ff):l.addEventListener("change",Ff)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ic={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return qm(i)})},timeline:function(t){return new Ln(t)},getTweensOf:function(t,e){return Ve.getTweensOf(t,e)},getProperty:function(t,e,n,i){un(t)&&(t=Ci(t)[0]);var s=Xr(t||{}).get,o=n?Dm:Im;return n==="native"&&(n=""),t&&(e?o((ni[e]&&ni[e].get||s)(t,e,n,i)):function(a,l,c){return o((ni[a]&&ni[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Ci(t),t.length>1){var i=t.map(function(h){return Dn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var o=ni[e],a=Xr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;po._pt=0,d.init(t,n?h+n:h,po,0,[t]),d.render(1,d),po._pt&&td(1,po)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Dn.to(t,ui((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Ve.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Es(t.ease,Da.ease)),xm(Da,t||{})},config:function(t){return xm(si,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ni[a]&&!hi[a]&&Na(e+" effect requires "+a+" plugin.")}),Sf[e]=function(a,l,c){return n(Ci(a),ui(l||{},s),c)},o&&(Ln.prototype[e]=function(a,l,c){return this.add(Sf[e](a,Qi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){xe[t]=Es(e)},parseEase:function(t,e){return arguments.length?Es(t,e):xe},getById:function(t){return Ve.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ln(t),i,s;for(n.smoothChildTiming=ri(t.smoothChildTiming),Ve.remove(n),n._dp=0,n._time=n._tTime=Ve._time,i=Ve._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Qe&&i.vars.onComplete===i._targets[0]))&&Ki(n,i,i._start-i._delay),i=s;return Ki(Ve,n,0),n},context:function(t,e){return t?new tg(t,e):Be},matchMedia:function(t){return new Av(t)},matchMediaRefresh:function(){return As.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ff()},addEventListener:function(t,e){var n=Ac[t]||(Ac[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ac[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:rv,wrapYoyo:sv,distribute:zm,random:Hm,snap:Vm,normalize:iv,getUnit:bn,clamp:jx,splitColor:Ym,toArray:Ci,selector:Df,mapRange:Wm,pipe:ev,unitize:nv,interpolate:ov,shuffle:km},install:Cm,effects:Sf,ticker:ii,updateRoot:Ln.updateRoot,plugins:ni,globalTimeline:Ve,core:{PropTween:Xn,globals:Rm,Tween:Qe,Timeline:Ln,Animation:Oa,getCache:Xr,_removeLinkedListItem:Uc,reverting:function(){return Mn},context:function(t){return t&&Be&&(Be.data.push(t),t._ctx=Be),Be},suppressOverwrites:function(t){return Of=t}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ic[r]=Qe[r]});ii.add(Ln.updateRoot);po=Ic.to({},{duration:0});var Cv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Rv=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Cv(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Ef=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(un(s)&&(l={},Wn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Rv(a,s)}}}},Dn=Ic.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ef("roundProps",Nf),Ef("modifiers"),Ef("snap",Vm))||Ic;Qe.version=Ln.version=Dn.version="3.15.0";Am=1;Bf()&&xo();var Pv=xe.Power0,Lv=xe.Power1,Iv=xe.Power2,Dv=xe.Power3,Nv=xe.Power4,Uv=xe.Linear,Fv=xe.Quad,Ov=xe.Cubic,Bv=xe.Quart,kv=xe.Quint,zv=xe.Strong,Vv=xe.Elastic,Hv=xe.Back,Gv=xe.SteppedEase,Wv=xe.Bounce,Xv=xe.Sine,qv=xe.Expo,Yv=xe.Circ;var eg,Zr,So,ad,Ns,Zv,ng,ld,Jv=function(){return typeof window!="undefined"},Sr={},Ds=180/Math.PI,Mo=Math.PI/180,yo=Math.atan2,ig=1e8,cd=/([A-Z])/g,$v=/(left|right|width|margin|padding|x)/i,Kv=/[\s,\(]\S/,ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},id=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Qv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},jv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ty=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ey=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},ug=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},fg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},ny=function(t,e,n){return t.style[e]=n},iy=function(t,e,n){return t.style.setProperty(e,n)},ry=function(t,e,n){return t._gsap[e]=n},sy=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},oy=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ay=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},He="transform",oi=He+"Origin",ly=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Sr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=ji[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=yr(i,a)}):this.tfm[t]=o.x?o[t]:yr(i,t),t===oi&&(this.tfm.zOrigin=o.zOrigin);else return ji.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(He)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(oi,e,"")),t=He}(s||e)&&this.props.push(t,e,s[t])},dg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},cy=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(cd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ld(),(!s||!s.isStart)&&!n[He]&&(dg(n),i.zOrigin&&n[oi]&&(n[oi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},pg=function(t,e){var n={target:t,props:[],revert:cy,save:ly};return t._gsap||Dn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},mg,rd=function(t,e){var n=Zr.createElementNS?Zr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Zr.createElement(t);return n&&n.style?n:Zr.createElement(t)},fi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(cd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,bo(e)||e,1)||""},rg="O,Moz,ms,Ms,Webkit".split(","),bo=function(t,e,n){var i=e||Ns,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(rg[o]+t in s););return o<0?null:(o===3?"ms":o>=0?rg[o]:"")+t},sd=function(){Jv()&&window.document&&(eg=window,Zr=eg.document,So=Zr.documentElement,Ns=rd("div")||{style:{}},Zv=rd("div"),He=bo(He),oi=He+"Origin",Ns.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mg=!!bo("perspective"),ld=Dn.core.reverting,ad=1)},sg=function(t){var e=t.ownerSVGElement,n=rd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),So.appendChild(n);try{s=i.getBBox()}catch(o){}return n.removeChild(i),So.removeChild(n),s},og=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},gg=function(t){var e,n;try{e=t.getBBox()}catch(i){e=sg(t),n=1}return e&&(e.width||e.height)||n||(e=sg(t)),e&&!e.width&&!e.x&&!e.y?{x:+og(t,["x","cx","x1"])||0,y:+og(t,["y","cy","y1"])||0,width:0,height:0}:e},_g=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&gg(t))},$r=function(t,e){if(e){var n=t.style,i;e in Sr&&e!==oi&&(e=He),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(cd,"-$1").toLowerCase())):n.removeAttribute(e)}},Jr=function(t,e,n,i,s,o){var a=new Xn(t._pt,e,n,0,1,o?fg:ug);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},ag={deg:1,rad:1,turn:1},hy={grid:1,flex:1},Kr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ns.style,l=$v.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",p,_,g,m;if(i===o||!s||ag[i]||ag[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),m=t.getCTM&&_g(t),(f||o==="%")&&(Sr[e]||~e.indexOf("adius")))return p=m?t.getBBox()[l?"width":"height"]:t[h],Ye(f?s/p*d:s/100*p);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Zr||!_.appendChild)&&(_=Zr.body),g=_._gsap,g&&f&&g.width&&l&&g.time===ii.time&&!g.uncache)return Ye(s/g.width*d);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=d+i,p=t[h],M?t.style[e]=M:$r(t,e)}else(f||o==="%")&&!hy[fi(_,"display")]&&(a.position=fi(t,"position")),_===t&&(a.position="static"),_.appendChild(Ns),p=Ns[h],_.removeChild(Ns),a.position="absolute";return l&&f&&(g=Xr(_),g.time=ii.time,g.width=_[h]),Ye(u?p*s/d:p&&s?d/p*s:0)},yr=function(t,e,n,i){var s;return ad||sd(),e in ji&&e!=="transform"&&(e=ji[e],~e.indexOf(",")&&(e=e.split(",")[0])),Sr[e]&&e!=="transform"?(s=Va(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:zc(fi(t,oi))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=kc[e]&&kc[e](t,e,n)||fi(t,e)||Xf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Kr(t,e,s,n)+n:s},uy=function(t,e,n,i){if(!n||n==="none"){var s=bo(e,t,1),o=s&&fi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=fi(t,"borderTopColor"))}var a=new Xn(this._pt,t.style,e,0,1,jf),l=0,c=0,h,d,u,f,p,_,g,m,M,E,x,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=fi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=fi(t,e)||i,_?t.style[e]=_:$r(t,e)),h=[n,i],Yf(h),n=h[0],i=h[1],u=n.match(Cs)||[],b=i.match(Cs)||[],b.length){for(;d=Cs.exec(i);)g=d[0],M=i.substring(l,d.index),p?p=(p+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(p=1),g!==(_=u[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),g.charAt(1)==="="&&(g=Rs(f,g)+x),m=parseFloat(g),E=g.substr((m+"").length),l=Cs.lastIndex-E.length,E||(E=E||si.units[e]||x,l===i.length&&(i+=E,a.e+=E)),x!==E&&(f=Kr(t,e,_,E)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:m-f,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?fg:ug;return zf.test(i)&&(a.e=0),this._pt=a,a},lg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fy=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=lg[n]||n,e[1]=lg[i]||i,e.join(" ")},dy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Sr[a]&&(l=1,a=a==="transformOrigin"?oi:He),$r(n,a);l&&($r(n,He),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Va(n,1),o.uncache=1,dg(i)))}},kc={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Xn(t._pt,e,n,0,0,dy);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},za=[1,0,0,1,0,0],xg={},vg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},cg=function(t){var e=fi(t,He);return vg(e)?za:e.substr(7).match(kf).map(Ye)},hd=function(t,e){var n=t._gsap||Xr(t),i=t.style,s=cg(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?za:s):(s===za&&!t.offsetParent&&t!==So&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,So.appendChild(t)),s=cg(t),l?i.display=l:$r(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):So.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},od=function(t,e,n,i,s,o){var a=t._gsap,l=s||hd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],_=l[2],g=l[3],m=l[4],M=l[5],E=e.split(" "),x=parseFloat(E[0])||0,b=parseFloat(E[1])||0,T,A,v,w;n?l!==za&&(A=f*g-p*_)&&(v=x*(g/A)+b*(-_/A)+(_*M-g*m)/A,w=x*(-p/A)+b*(f/A)-(f*M-p*m)/A,x=v,b=w):(T=gg(t),x=T.x+(~E[0].indexOf("%")?x/100*T.width:x),b=T.y+(~(E[1]||E[0]).indexOf("%")?b/100*T.height:b)),i||i!==!1&&a.smooth?(m=x-c,M=b-h,a.xOffset=d+(m*f+M*_)-m,a.yOffset=u+(m*p+M*g)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=b,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[oi]="0px 0px",o&&(Jr(o,a,"xOrigin",c,x),Jr(o,a,"yOrigin",h,b),Jr(o,a,"xOffset",d,a.xOffset),Jr(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+b)},Va=function(t,e){var n=t._gsap||new Zf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=fi(t,oi)||"0",h,d,u,f,p,_,g,m,M,E,x,b,T,A,v,w,R,V,U,$,B,q,j,X,Y,nt,D,ot,At,Ct,Ot,Bt;return h=d=u=_=g=m=M=E=x=0,f=p=1,n.svg=!!(t.getCTM&&_g(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[He]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[He]!=="none"?l[He]:"")),i.scale=i.rotate=i.translate="none"),A=hd(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),od(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,T=n.yOrigin||0,A!==za&&(V=A[0],U=A[1],$=A[2],B=A[3],h=q=A[4],d=j=A[5],A.length===6?(f=Math.sqrt(V*V+U*U),p=Math.sqrt(B*B+$*$),_=V||U?yo(U,V)*Ds:0,M=$||B?yo($,B)*Ds+_:0,M&&(p*=Math.abs(Math.cos(M*Mo))),n.svg&&(h-=b-(b*V+T*$),d-=T-(b*U+T*B))):(Bt=A[6],Ct=A[7],D=A[8],ot=A[9],At=A[10],Ot=A[11],h=A[12],d=A[13],u=A[14],v=yo(Bt,At),g=v*Ds,v&&(w=Math.cos(-v),R=Math.sin(-v),X=q*w+D*R,Y=j*w+ot*R,nt=Bt*w+At*R,D=q*-R+D*w,ot=j*-R+ot*w,At=Bt*-R+At*w,Ot=Ct*-R+Ot*w,q=X,j=Y,Bt=nt),v=yo(-$,At),m=v*Ds,v&&(w=Math.cos(-v),R=Math.sin(-v),X=V*w-D*R,Y=U*w-ot*R,nt=$*w-At*R,Ot=B*R+Ot*w,V=X,U=Y,$=nt),v=yo(U,V),_=v*Ds,v&&(w=Math.cos(v),R=Math.sin(v),X=V*w+U*R,Y=q*w+j*R,U=U*w-V*R,j=j*w-q*R,V=X,q=Y),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),f=Ye(Math.sqrt(V*V+U*U+$*$)),p=Ye(Math.sqrt(j*j+Bt*Bt)),v=yo(q,j),M=Math.abs(v)>2e-4?v*Ds:0,x=Ot?1/(Ot<0?-Ot:Ot):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!vg(fi(t,He)),X&&t.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Ye(f),n.scaleY=Ye(p),n.rotation=Ye(_)+a,n.rotationX=Ye(g)+a,n.rotationY=Ye(m)+a,n.skewX=M+a,n.skewY=E+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[oi]=zc(c)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?my:mg?yg:py,n.uncache=0,n},zc=function(t){return(t=t.split(" "))[0]+" "+t[1]},nd=function(t,e,n){var i=bn(e);return Ye(parseFloat(e)+parseFloat(Kr(t,"x",n+"px",i)))+i},py=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,yg(t,e)},Ls="0deg",ka="0px",Is=") ",yg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,M=n.target,E=n.zOrigin,x="",b=m==="auto"&&t&&t!==1||m===!0;if(E&&(d!==Ls||h!==Ls)){var T=parseFloat(h)*Mo,A=Math.sin(T),v=Math.cos(T),w;T=parseFloat(d)*Mo,w=Math.cos(T),o=nd(M,o,A*w*-E),a=nd(M,a,-Math.sin(T)*-E),l=nd(M,l,v*w*-E+E)}g!==ka&&(x+="perspective("+g+Is),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(b||o!==ka||a!==ka||l!==ka)&&(x+=l!==ka||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Is),c!==Ls&&(x+="rotate("+c+Is),h!==Ls&&(x+="rotateY("+h+Is),d!==Ls&&(x+="rotateX("+d+Is),(u!==Ls||f!==Ls)&&(x+="skew("+u+", "+f+Is),(p!==1||_!==1)&&(x+="scale("+p+", "+_+Is),M.style[He]=x||"translate(0, 0)"},my=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,M=n.forceCSS,E=parseFloat(o),x=parseFloat(a),b,T,A,v,w;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Mo,c*=Mo,b=Math.cos(l)*d,T=Math.sin(l)*d,A=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=Mo,w=Math.tan(c-h),w=Math.sqrt(1+w*w),A*=w,v*=w,h&&(w=Math.tan(h),w=Math.sqrt(1+w*w),b*=w,T*=w)),b=Ye(b),T=Ye(T),A=Ye(A),v=Ye(v)):(b=d,v=u,T=A=0),(E&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(E=Kr(f,"x",o,"px"),x=Kr(f,"y",a,"px")),(p||_||g||m)&&(E=Ye(E+p-(p*b+_*A)+g),x=Ye(x+_-(p*T+_*v)+m)),(i||s)&&(w=f.getBBox(),E=Ye(E+i/100*w.width),x=Ye(x+s/100*w.height)),w="matrix("+b+","+T+","+A+","+v+","+E+","+x+")",f.setAttribute("transform",w),M&&(f.style[He]=w)},gy=function(t,e,n,i,s){var o=360,a=un(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ds:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*ig)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*ig)%o-~~(c/o)*o)),t._pt=u=new Xn(t._pt,e,n,i,c,Qv),u.e=h,u.u="deg",t._props.push(n),u},hg=function(t,e){for(var n in e)t[n]=e[n];return t},_y=function(t,e,n){var i=hg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[He]=e,a=Va(n,1),$r(n,He),n.setAttribute("transform",c)):(c=getComputedStyle(n)[He],o[He]=e,a=Va(n,1),o[He]=c);for(l in Sr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=bn(c),p=bn(h),d=f!==p?Kr(n,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new Xn(t._pt,a,l,d,u-d,id),t._pt.u=p||0,t._props.push(l));hg(a,i)};Wn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});kc[t>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return yr(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,_){return f[p]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var ud={name:"css",register:sd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,p,_,g,m,M,E,x,b,T,A,v,w;ad||sd(),this.styles=this.styles||pg(t),v=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(ni[_]&&$f(_,e,n,i,t,s)))){if(f=typeof h,p=kc[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=vo(h)),p)p(this,t,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",xr.lastIndex=0,xr.test(c)||(g=bn(c),m=bn(h),m?g!==m&&(c=Kr(t,_,c,m)+m):g&&(h+=g)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),v.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],un(c)&&~c.indexOf("random(")&&(c=vo(c)),bn(c+"")||c==="auto"||(c+=si.units[_]||bn(yr(t,_))||""),(c+"").charAt(1)==="="&&(c=yr(t,_))):c=yr(t,_),u=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),d=parseFloat(h),_ in ji&&(_==="autoAlpha"&&(u===1&&yr(t,"visibility")==="hidden"&&d&&(u=0),v.push("visibility",0,a.visibility),Jr(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ji[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in Sr,E){if(this.styles.save(_),w=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=fi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=h,h=fi(t,"perspective"),R?t.style.perspective=R:$r(t,"perspective")}d=parseFloat(h)}if(x||(b=t._gsap,b.renderTransform&&!e.parseTransform||Va(t,e.parseTransform),T=e.smoothOrigin!==!1&&b.smooth,x=this._pt=new Xn(this._pt,a,He,0,1,b.renderTransform,b,0,-1),x.dep=1),_==="scale")this._pt=new Xn(this._pt,b,"scaleY",b.scaleY,(M?Rs(b.scaleY,M+d):d)-b.scaleY||0,id),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(oi,0,a[oi]),h=fy(h),b.svg?od(t,h,0,T,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==b.zOrigin&&Jr(this,b,"zOrigin",b.zOrigin,m),Jr(this,a,_,zc(c),zc(h)));continue}else if(_==="svgOrigin"){od(t,h,1,T,0,this);continue}else if(_ in xg){gy(this,b,_,u,M?Rs(u,M+h):h);continue}else if(_==="smoothOrigin"){Jr(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){_y(this,h,t);continue}}else _ in a||(_=bo(_)||_);if(E||(d||d===0)&&(u||u===0)&&!Kv.test(h)&&_ in a)g=(c+"").substr((u+"").length),d||(d=0),m=bn(h)||(_ in si.units?si.units[_]:g),g!==m&&(u=Kr(t,_,c,m)),this._pt=new Xn(this._pt,E?b:a,_,u,(M?Rs(u,M+d):d)-u,!E&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?ey:id),this._pt.u=m||0,E&&w!==h?(this._pt.b=c,this._pt.e=w,this._pt.r=ty):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=jv);else if(_ in a)uy.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){Nc(_,h);continue}E||(_ in a?v.push(_,0,a[_]):typeof t[_]=="function"?v.push(_,2,t[_]()):v.push(_,1,c||t[_])),o.push(_)}}A&&ed(this)},render:function(t,e){if(e.tween._time||!ld())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:yr,aliases:ji,getSetter:function(t,e,n){var i=ji[e];return i&&i.indexOf(",")<0&&(e=i),e in Sr&&e!==oi&&(t._gsap.x||yr(t,"x"))?n&&ng===n?e==="scale"?sy:ry:(ng=n||{})&&(e==="scale"?oy:ay):t.style&&!Dc(t.style[e])?ny:~e.indexOf("-")?iy:Bc(t,e)},core:{_removeProperty:$r,_getMatrix:hd}};Dn.utils.checkPrefix=bo;Dn.core.getStyleSaver=pg;(function(r,t,e,n){var i=Wn(r+","+t+","+e,function(s){Sr[s]=1});Wn(t,function(s){si.units[s]="deg",xg[s]=1}),ji[i[13]]=r+","+t,Wn(n,function(s){var o=s.split(":");ji[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){si.units[r]="px"});Dn.registerPlugin(ud);var Ie=Dn.registerPlugin(ud)||Dn,UE=Ie.core.Tween;function Sg(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function xy(r,t,e){return t&&Sg(r.prototype,t),e&&Sg(r,e),r}var Tn,Gc,vy,di,Qr,jr,wo,bg,Us,Eo,Tg,Mr,Oi,wg,Eg=function(){return Tn||typeof window!="undefined"&&(Tn=window.gsap)&&Tn.registerPlugin&&Tn},Ag=1,To=[],ce=[],Bi=[],Ga=Date.now,fd=function(t,e){return e},yy=function(){var t=Eo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ce),i.push.apply(i,Bi),ce=n,Bi=i,fd=function(o,a){return e[o](a)}},Tr=function(t,e){return~Bi.indexOf(t)&&Bi[Bi.indexOf(t)+1][e]},Wa=function(t){return!!~Tg.indexOf(t)},Yn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},qn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Vc="scrollLeft",Hc="scrollTop",dd=function(){return Mr&&Mr.isPressed||ce.cache++},Wc=function(t,e){var n=function i(s){if(s||s===0){Ag&&(di.history.scrollRestoration="manual");var o=Mr&&Mr.isPressed;s=i.v=Math.round(s)||(Mr&&Mr.iOS?1:0),t(s),i.cacheID=ce.cache,o&&fd("ss",s)}else(e||ce.cache!==i.cacheID||fd("ref"))&&(i.cacheID=ce.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Nn={s:Vc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wc(function(r){return arguments.length?di.scrollTo(r,sn.sc()):di.pageXOffset||Qr[Vc]||jr[Vc]||wo[Vc]||0})},sn={s:Hc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:Wc(function(r){return arguments.length?di.scrollTo(Nn.sc(),r):di.pageYOffset||Qr[Hc]||jr[Hc]||wo[Hc]||0})},Zn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Tn.utils.toArray)(t)[0]||(typeof t=="string"&&Tn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Sy=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},br=function(t,e){var n=e.s,i=e.sc;Wa(t)&&(t=Qr.scrollingElement||jr);var s=ce.indexOf(t),o=i===sn.sc?1:2;!~s&&(s=ce.push(t)-1),ce[s+o]||Yn(t,"scroll",dd);var a=ce[s+o],l=a||(ce[s+o]=Wc(Tr(t,n),!0)||(Wa(t)?i:Wc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Tn.getProperty(t,"scrollBehavior")==="smooth"),l},Xc=function(t,e,n){var i=t,s=t,o=Ga(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var g=Ga();_||g-o>l?(s=i,i=p,a=o,o=g):n?i+=p:i=s+(p-s)/(g-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},u=function(p){var _=a,g=s,m=Ga();return(p||p===0)&&p!==i&&h(p),o===a||m-a>c?0:(i+(n?g:-g))/((n?m:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},Ha=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Mg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Cg=function(){Eo=Tn.core.globals().ScrollTrigger,Eo&&Eo.core&&yy()},Rg=function(t){return Tn=t||Eg(),!Gc&&Tn&&typeof document!="undefined"&&document.body&&(di=window,Qr=document,jr=Qr.documentElement,wo=Qr.body,Tg=[di,Qr,jr,wo],vy=Tn.utils.clamp,wg=Tn.core.context||function(){},Us="onpointerenter"in wo?"pointer":"mouse",bg=Ze.isTouch=di.matchMedia&&di.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in di||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Oi=Ze.eventTypes=("ontouchstart"in jr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in jr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ag=0},500),Gc=1),Eo||Cg(),Gc};Nn.op=sn;ce.cache=0;var Ze=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Gc||Rg(Tn)||console.warn("Please gsap.registerPlugin(Observer)"),Eo||Cg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,_=n.event,g=n.onDragStart,m=n.onDragEnd,M=n.onDrag,E=n.onPress,x=n.onRelease,b=n.onRight,T=n.onLeft,A=n.onUp,v=n.onDown,w=n.onChangeX,R=n.onChangeY,V=n.onChange,U=n.onToggleX,$=n.onToggleY,B=n.onHover,q=n.onHoverEnd,j=n.onMove,X=n.ignoreCheck,Y=n.isNormalizer,nt=n.onGestureStart,D=n.onGestureEnd,ot=n.onWheel,At=n.onEnable,Ct=n.onDisable,Ot=n.onClick,Bt=n.scrollSpeed,Gt=n.capture,k=n.allowClicks,O=n.lockAxis,F=n.onLockAxis;this.target=a=Zn(a)||jr,this.vars=n,f&&(f=Tn.utils.toArray(f)),i=i||1e-9,s=s||0,p=p||1,Bt=Bt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(di.getComputedStyle(wo).lineHeight)||22);var N,H,it,ht,P,W,z,L=this,tt=0,lt=0,gt=n.passive||!h&&n.passive!==!1,ft=br(a,Nn),G=br(a,sn),S=ft(),St=G(),wt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Oi[0]==="pointerdown",I=Wa(a),y=a.ownerDocument||Qr,J=[0,0,0],et=[0,0,0],ct=0,bt=function(){return ct=Ga()},vt=function(xt,Kt){return(L.event=xt)&&f&&Sy(xt.target,f)||Kt&&wt&&xt.pointerType!=="touch"||X&&X(xt,Kt)},ut=function(){L._vx.reset(),L._vy.reset(),H.pause(),d&&d(L)},pt=function(){var xt=L.deltaX=Mg(J),Kt=L.deltaY=Mg(et),yt=Math.abs(xt)>=i,jt=Math.abs(Kt)>=i;V&&(yt||jt)&&V(L,xt,Kt,J,et),yt&&(b&&L.deltaX>0&&b(L),T&&L.deltaX<0&&T(L),w&&w(L),U&&L.deltaX<0!=tt<0&&U(L),tt=L.deltaX,J[0]=J[1]=J[2]=0),jt&&(v&&L.deltaY>0&&v(L),A&&L.deltaY<0&&A(L),R&&R(L),$&&L.deltaY<0!=lt<0&&$(L),lt=L.deltaY,et[0]=et[1]=et[2]=0),(ht||it)&&(j&&j(L),it&&(g&&it===1&&g(L),M&&M(L),it=0),ht=!1),W&&!(W=!1)&&F&&F(L),P&&(ot(L),P=!1),N=0},Rt=function(xt,Kt,yt){J[yt]+=xt,et[yt]+=Kt,L._vx.update(xt),L._vy.update(Kt),c?N||(N=requestAnimationFrame(pt)):pt()},kt=function(xt,Kt){O&&!z&&(L.axis=z=Math.abs(xt)>Math.abs(Kt)?"x":"y",W=!0),z!=="y"&&(J[2]+=xt,L._vx.update(xt,!0)),z!=="x"&&(et[2]+=Kt,L._vy.update(Kt,!0)),c?N||(N=requestAnimationFrame(pt)):pt()},Lt=function(xt){if(!vt(xt,1)){xt=Ha(xt,h);var Kt=xt.clientX,yt=xt.clientY,jt=Kt-L.x,Wt=yt-L.y,ie=L.isDragging;L.x=Kt,L.y=yt,(ie||(jt||Wt)&&(Math.abs(L.startX-Kt)>=s||Math.abs(L.startY-yt)>=s))&&(it||(it=ie?2:1),ie||(L.isDragging=!0),kt(jt,Wt))}},Pt=L.onPress=function(Mt){vt(Mt,1)||Mt&&Mt.button||(L.axis=z=null,H.pause(),L.isPressed=!0,Mt=Ha(Mt),tt=lt=0,L.startX=L.x=Mt.clientX,L.startY=L.y=Mt.clientY,L._vx.reset(),L._vy.reset(),Yn(Y?a:y,Oi[1],Lt,gt,!0),L.deltaX=L.deltaY=0,E&&E(L))},Tt=L.onRelease=function(Mt){if(!vt(Mt,1)){qn(Y?a:y,Oi[1],Lt,!0);var xt=!isNaN(L.y-L.startY),Kt=L.isDragging,yt=Kt&&(Math.abs(L.x-L.startX)>3||Math.abs(L.y-L.startY)>3),jt=Ha(Mt);!yt&&xt&&(L._vx.reset(),L._vy.reset(),h&&k&&Tn.delayedCall(.08,function(){if(Ga()-ct>300&&!Mt.defaultPrevented){if(Mt.target.click)Mt.target.click();else if(y.createEvent){var Wt=y.createEvent("MouseEvents");Wt.initMouseEvent("click",!0,!0,di,1,jt.screenX,jt.screenY,jt.clientX,jt.clientY,!1,!1,!1,!1,0,null),Mt.target.dispatchEvent(Wt)}}})),L.isDragging=L.isGesturing=L.isPressed=!1,d&&Kt&&!Y&&H.restart(!0),it&&pt(),m&&Kt&&m(L),x&&x(L,yt)}},Jt=function(xt){return xt.touches&&xt.touches.length>1&&(L.isGesturing=!0)&&nt(xt,L.isDragging)},te=function(){return(L.isGesturing=!1)||D(L)},K=function(xt){if(!vt(xt)){var Kt=ft(),yt=G();Rt((Kt-S)*Bt,(yt-St)*Bt,1),S=Kt,St=yt,d&&H.restart(!0)}},Et=function(xt){if(!vt(xt)){xt=Ha(xt,h),ot&&(P=!0);var Kt=(xt.deltaMode===1?l:xt.deltaMode===2?di.innerHeight:1)*p;Rt(xt.deltaX*Kt,xt.deltaY*Kt,0),d&&!Y&&H.restart(!0)}},mt=function(xt){if(!vt(xt)){var Kt=xt.clientX,yt=xt.clientY,jt=Kt-L.x,Wt=yt-L.y;L.x=Kt,L.y=yt,ht=!0,d&&H.restart(!0),(jt||Wt)&&kt(jt,Wt)}},It=function(xt){L.event=xt,B(L)},Nt=function(xt){L.event=xt,q(L)},_t=function(xt){return vt(xt)||Ha(xt,h)&&Ot(L)};H=L._dc=Tn.delayedCall(u||.25,ut).pause(),L.deltaX=L.deltaY=0,L._vx=Xc(0,50,!0),L._vy=Xc(0,50,!0),L.scrollX=ft,L.scrollY=G,L.isDragging=L.isGesturing=L.isPressed=!1,wg(this),L.enable=function(Mt){return L.isEnabled||(Yn(I?y:a,"scroll",dd),o.indexOf("scroll")>=0&&Yn(I?y:a,"scroll",K,gt,Gt),o.indexOf("wheel")>=0&&Yn(a,"wheel",Et,gt,Gt),(o.indexOf("touch")>=0&&bg||o.indexOf("pointer")>=0)&&(Yn(a,Oi[0],Pt,gt,Gt),Yn(y,Oi[2],Tt),Yn(y,Oi[3],Tt),k&&Yn(a,"click",bt,!0,!0),Ot&&Yn(a,"click",_t),nt&&Yn(y,"gesturestart",Jt),D&&Yn(y,"gestureend",te),B&&Yn(a,Us+"enter",It),q&&Yn(a,Us+"leave",Nt),j&&Yn(a,Us+"move",mt)),L.isEnabled=!0,L.isDragging=L.isGesturing=L.isPressed=ht=it=!1,L._vx.reset(),L._vy.reset(),S=ft(),St=G(),Mt&&Mt.type&&Pt(Mt),At&&At(L)),L},L.disable=function(){L.isEnabled&&(To.filter(function(Mt){return Mt!==L&&Wa(Mt.target)}).length||qn(I?y:a,"scroll",dd),L.isPressed&&(L._vx.reset(),L._vy.reset(),qn(Y?a:y,Oi[1],Lt,!0)),qn(I?y:a,"scroll",K,Gt),qn(a,"wheel",Et,Gt),qn(a,Oi[0],Pt,Gt),qn(y,Oi[2],Tt),qn(y,Oi[3],Tt),qn(a,"click",bt,!0),qn(a,"click",_t),qn(y,"gesturestart",Jt),qn(y,"gestureend",te),qn(a,Us+"enter",It),qn(a,Us+"leave",Nt),qn(a,Us+"move",mt),L.isEnabled=L.isPressed=L.isDragging=!1,Ct&&Ct(L))},L.kill=L.revert=function(){L.disable();var Mt=To.indexOf(L);Mt>=0&&To.splice(Mt,1),Mr===L&&(Mr=0)},To.push(L),Y&&Wa(a)&&(Mr=L),L.enable(_)},xy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ze.version="3.15.0";Ze.create=function(r){return new Ze(r)};Ze.register=Rg;Ze.getAll=function(){return To.slice()};Ze.getById=function(r){return To.filter(function(t){return t.vars.id===r})[0]};Eg()&&Tn.registerPlugin(Ze);var Ht,Po,pe,be,gi,Me,Ad,ah,rl,Ka,qa,qc,Un,hh,yd,$n,Pg,Lg,Lo,Yg,pd,Zg,Jn,Sd,Jg,$g,ts,Md,Cd,Io,Rd,Qa,bd,md,Yc=1,Fn=Date.now,gd=Fn(),Li=0,Ya=0,Ig=function(t,e,n){var i=mi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Dg=function(t,e){return e&&(!mi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},My=function r(){return Ya&&requestAnimationFrame(r)},Ng=function(){return hh=1},Ug=function(){return hh=0},tr=function(t){return t},Za=function(t){return Math.round(t*1e5)/1e5||0},Kg=function(){return typeof window!="undefined"},Qg=function(){return Ht||Kg()&&(Ht=window.gsap)&&Ht.registerPlugin&&Ht},Vs=function(t){return!!~Ad.indexOf(t)},jg=function(t){return(t==="Height"?Rd:pe["inner"+t])||gi["client"+t]||Me["client"+t]},t0=function(t){return Tr(t,"getBoundingClientRect")||(Vs(t)?function(){return oh.width=pe.innerWidth,oh.height=Rd,oh}:function(){return wr(t)})},by=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Tr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?jg(s):t["client"+s])||0}},Ty=function(t,e){return!e||~Bi.indexOf(t)?t0(t):function(){return oh}},er=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Tr(t,n))?o()-t0(t)()[s]:Vs(t)?(gi[n]||Me[n])-jg(i):t[n]-t["offset"+i])},Zc=function(t,e){for(var n=0;n<Lo.length;n+=3)(!e||~e.indexOf(Lo[n+1]))&&t(Lo[n],Lo[n+1],Lo[n+2])},mi=function(t){return typeof t=="string"},On=function(t){return typeof t=="function"},Ja=function(t){return typeof t=="number"},Fs=function(t){return typeof t=="object"},Xa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ao=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Co=Math.abs,e0="left",n0="top",Pd="right",Ld="bottom",Bs="width",ks="height",ja="Right",tl="Left",el="Top",nl="Bottom",on="padding",Ri="margin",No="Width",Id="Height",fn="px",Pi=function(t){return pe.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},wy=function(t){var e=Pi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Fg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},wr=function(t,e){var n=e&&Pi(t)[yd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ht.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},lh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},i0=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Ey=function(t){return function(e){return Ht.utils.snap(i0(t),e)}},Dd=function(t){var e=Ht.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Ay=function(t){return function(e,n){return Dd(i0(t))(e,n.direction)}},Jc=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},vn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},xn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},$c=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Og={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Kc={toggleActions:"play",anticipatePin:0},ch={top:0,left:0,center:.5,bottom:1,right:1},nh=function(t,e){if(mi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in ch?ch[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Qc=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,p=be.createElement("div"),_=Vs(n)||Tr(n,"pinType")==="fixed",g=t.indexOf("scroller")!==-1,m=_?Me:n.tagName==="IFRAME"?n.contentDocument.body:n,M=t.indexOf("start")!==-1,E=M?c:h,x="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(x+=(i===sn?Pd:Ld)+":"+(o+parseFloat(u))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=M,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=x,p.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],ih(p,0,i,M),p},ih=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+No]=1,s["border"+a+No]=0,s[n.p]=e+"px",Ht.set(t,s)},he=[],Td={},sl,Bg=function(){return Fn()-Li>34&&(sl||(sl=requestAnimationFrame(Er)))},Ro=function(){(!Jn||!Jn.isPressed||Jn.startX>Me.clientWidth)&&(ce.cache++,Jn?sl||(sl=requestAnimationFrame(Er)):Er(),Li||Gs("scrollStart"),Li=Fn())},_d=function(){$g=pe.innerWidth,Jg=pe.innerHeight},$a=function(t){ce.cache++,(t===!0||!Un&&!Zg&&!be.fullscreenElement&&!be.webkitFullscreenElement&&(!Sd||$g!==pe.innerWidth||Math.abs(pe.innerHeight-Jg)>pe.innerHeight*.25))&&ah.restart(!0)},Hs={},Cy=[],r0=function r(){return xn(re,"scrollEnd",r)||Os(!0)},Gs=function(t){return Hs[t]&&Hs[t].map(function(e){return e()})||Cy},pi=[],s0=function(t){for(var e=0;e<pi.length;e+=5)(!t||pi[e+4]&&pi[e+4].query===t)&&(pi[e].style.cssText=pi[e+1],pi[e].getBBox&&pi[e].setAttribute("transform",pi[e+2]||""),pi[e+3].uncache=1)},o0=function(){return ce.forEach(function(t){return On(t)&&++t.cacheID&&(t.rec=t())})},Nd=function(t,e){var n;for($n=0;$n<he.length;$n++)n=he[$n],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Qa=!0,e&&s0(e),e||Gs("revert")},a0=function(t,e){ce.cache++,(e||!Kn)&&ce.forEach(function(n){return On(n)&&n.cacheID++&&(n.rec=0)}),mi(t)&&(pe.history.scrollRestoration=Cd=t)},Kn,zs=0,kg,Ry=function(){if(kg!==zs){var t=kg=zs;requestAnimationFrame(function(){return t===zs&&Os(!0)})}},l0=function(){Me.appendChild(Io),Rd=!Jn&&Io.offsetHeight||pe.innerHeight,Me.removeChild(Io)},zg=function(t){return rl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Os=function(t,e){if(gi=be.documentElement,Me=be.body,Ad=[pe,be,gi,Me],Li&&!t&&!Qa){vn(re,"scrollEnd",r0);return}l0(),Kn=re.isRefreshing=!0,Qa||o0();var n=Gs("refreshInit");Yg&&re.sort(),e||Nd(),ce.forEach(function(i){On(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),he.slice(0).forEach(function(i){return i.refresh()}),Qa=!1,he.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),bd=1,zg(!0),he.forEach(function(i){var s=er(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),zg(!1),bd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ce.forEach(function(i){On(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),a0(Cd,1),ah.pause(),zs++,Kn=2,Er(2),he.forEach(function(i){return On(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Kn=re.isRefreshing=!1,Gs("refresh")},wd=0,rh=1,il,Er=function(t){if(t===2||!Kn&&!Qa){re.isUpdating=!0,il&&il.update(0);var e=he.length,n=Fn(),i=n-gd>=50,s=e&&he[0].scroll();if(rh=wd>s?-1:1,Kn||(wd=s),i&&(Li&&!hh&&n-Li>200&&(Li=0,Gs("scrollEnd")),qa=gd,gd=n),rh<0){for($n=e;$n-- >0;)he[$n]&&he[$n].update(0,i);rh=1}else for($n=0;$n<e;$n++)he[$n]&&he[$n].update(0,i);re.isUpdating=!1}sl=0},Ed=[e0,n0,Ld,Pd,Ri+nl,Ri+ja,Ri+el,Ri+tl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],sh=Ed.concat([Bs,ks,"boxSizing","max"+No,"max"+Id,"position",Ri,on,on+el,on+ja,on+nl,on+tl]),Py=function(t,e,n){Do(n);var i=t._gsap;if(i.spacerIsNative)Do(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},xd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Ed.length,o=e.style,a=t.style,l;s--;)l=Ed[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ld]=a[Pd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Bs]=lh(t,Nn)+fn,o[ks]=lh(t,sn)+fn,o[on]=a[Ri]=a[n0]=a[e0]="0",Do(i),a[Bs]=a["max"+No]=n[Bs],a[ks]=a["max"+Id]=n[ks],a[on]=n[on],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Ly=/([A-Z])/g,Do=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Ht.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Ly,"-$1").toLowerCase())}},jc=function(t){for(var e=sh.length,n=t.style,i=[],s=0;s<e;s++)i.push(sh[s],n[sh[s]]);return i.t=t,i},Iy=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},oh={left:0,top:0},Vg=function(t,e,n,i,s,o,a,l,c,h,d,u,f,p){On(t)&&(t=t(l)),mi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?nh("0"+t.substr(3),n):0));var _=f?f.time():0,g,m,M;if(f&&f.seek(0),isNaN(t)||(t=+t),Ja(t))f&&(t=Ht.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&ih(a,n,i,!0);else{On(e)&&(e=e(l));var E=(t||"0").split(" "),x,b,T,A;M=Zn(e,l)||Me,x=wr(M)||{},(!x||!x.left&&!x.top)&&Pi(M).display==="none"&&(A=M.style.display,M.style.display="block",x=wr(M),A?M.style.display=A:M.style.removeProperty("display")),b=nh(E[0],x[i.d]),T=nh(E[1]||"0",n),t=x[i.p]-c[i.p]-h+b+s-T,a&&ih(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var v=t+n,w=o._isStart;g="scroll"+i.d2,ih(o,v,i,w&&v>20||!w&&(d?Math.max(Me[g],gi[g]):o.parentNode[g])<=v+1),d&&(c=wr(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+fn))}return f&&M&&(g=wr(M),f.seek(u),m=wr(M),f._caScrollDist=g[i.p]-m[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},Dy=/(webkit|moz|length|cssText|inset)/i,Hg=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Me){t._stOrig=s.cssText,a=Pi(t);for(o in a)!+o&&!Dy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ht.core.getCache(t).uncache=1,e.appendChild(t)}},c0=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},th=function(t,e,n){var i={};i[e.p]="+="+n,Ht.set(t,i)},Gg=function(t,e){var n=br(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||n();var _=c0(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){ce.cache++,o.tween&&Er()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Ht.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},vn(t,"wheel",n.wheelHandler),re.isTouch&&vn(t,"touchmove",n.wheelHandler),s},re=(function(){function r(e,n){Po||r.register(Ht)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Md(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ya){this.update=this.refresh=this.kill=tr;return}n=Fg(mi(n)||Ja(n)||n.nodeType?{trigger:n}:n,Kc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,E=s.once,x=s.snap,b=s.pinReparent,T=s.pinSpacer,A=s.containerAnimation,v=s.fastScrollEnd,w=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Nn:sn,V=!d&&d!==0,U=Zn(n.scroller||pe),$=Ht.core.getCache(U),B=Vs(U),q=("pinType"in n?n.pinType:Tr(U,"pinType")||B&&"fixed")==="fixed",j=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=V&&n.toggleActions.split(" "),Y="markers"in n?n.markers:Kc.markers,nt=B?0:parseFloat(Pi(U)["border"+R.p2+No])||0,D=this,ot=n.onRefreshInit&&function(){return n.onRefreshInit(D)},At=by(U,B,R),Ct=Ty(U,B),Ot=0,Bt=0,Gt=0,k=br(U,R),O,F,N,H,it,ht,P,W,z,L,tt,lt,gt,ft,G,S,St,wt,I,y,J,et,ct,bt,vt,ut,pt,Rt,kt,Lt,Pt,Tt,Jt,te,K,Et,mt,It,Nt;if(D._startClamp=D._endClamp=!1,D._dir=R,g*=45,D.scroller=U,D.scroll=A?A.time.bind(A):k,H=k(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(Yg=1,n.refreshPriority===-9999&&(il=D)),$.tweenScroll=$.tweenScroll||{top:Gg(U,sn),left:Gg(U,Nn)},D.tweenTo=O=$.tweenScroll[R.p],D.scrubDuration=function(yt){Jt=Ja(yt)&&yt,Jt?Tt?Tt.duration(yt):Tt=Ht.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Jt,paused:!0,onComplete:function(){return m&&m(D)}}):(Tt&&Tt.progress(1).kill(),Tt=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(d),Lt=0,l||(l=i.vars.id)),x&&((!Fs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Me.style&&Ht.set(B?[Me,gi]:U,{scrollBehavior:"auto"}),ce.forEach(function(yt){return On(yt)&&yt.target===(B?be.scrollingElement||gi:U)&&(yt.smooth=!1)}),N=On(x.snapTo)?x.snapTo:x.snapTo==="labels"?Ey(i):x.snapTo==="labelsDirectional"?Ay(i):x.directional!==!1?function(yt,jt){return Dd(x.snapTo)(yt,Fn()-Bt<500?0:jt.direction)}:Ht.utils.snap(x.snapTo),te=x.duration||{min:.1,max:2},te=Fs(te)?Ka(te.min,te.max):Ka(te,te),K=Ht.delayedCall(x.delay||Jt/2||.1,function(){var yt=k(),jt=Fn()-Bt<500,Wt=O.tween;if((jt||Math.abs(D.getVelocity())<10)&&!Wt&&!hh&&Ot!==yt){var ie=(yt-ht)/ft,en=i&&!V?i.totalProgress():ie,de=jt?0:(en-Pt)/(Fn()-qa)*1e3||0,Ne=Ht.utils.clamp(-ie,1-ie,Co(de/2)*de/.185),gn=ie+(x.inertia===!1?0:Ne),Ue,Ee,_e=x,Vn=_e.onStart,Pe=_e.onInterrupt,Rn=_e.onComplete;if(Ue=N(gn,D),Ja(Ue)||(Ue=gn),Ee=Math.max(0,Math.round(ht+Ue*ft)),yt<=P&&yt>=ht&&Ee!==yt){if(Wt&&!Wt._initted&&Wt.data<=Co(Ee-yt))return;x.inertia===!1&&(Ne=Ue-ie),O(Ee,{duration:te(Co(Math.max(Co(gn-en),Co(Ue-en))*.185/de/.05||0)),ease:x.ease||"power3",data:Co(Ee-yt),onInterrupt:function(){return K.restart(!0)&&Pe&&Ao(D,Pe)},onComplete:function(){D.update(),Ot=k(),i&&!V&&(Tt?Tt.resetTo("totalProgress",Ue,i._tTime/i._tDur):i.progress(Ue)),Lt=Pt=i&&!V?i.totalProgress():D.progress,M&&M(D),Rn&&Ao(D,Rn)}},yt,Ne*ft,Ee-yt-Ne*ft),Vn&&Ao(D,Vn,O.tween)}}else D.isActive&&Ot!==yt&&K.restart(!0)}).pause()),l&&(Td[l]=D),u=D.trigger=Zn(u||f!==!0&&f),Nt=u&&u._gsap&&u._gsap.stRevert,Nt&&(Nt=Nt(D)),f=f===!0?u:Zn(f),mi(a)&&(a={targets:u,className:a}),f&&(p===!1||p===Ri||(p=!p&&f.parentNode&&f.parentNode.style&&Pi(f.parentNode).display==="flex"?!1:on),D.pin=f,F=Ht.core.getCache(f),F.spacer?G=F.pinState:(T&&(T=Zn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),F.spacerIsNative=!!T,T&&(F.spacerState=jc(T))),F.spacer=wt=T||be.createElement("div"),wt.classList.add("pin-spacer"),l&&wt.classList.add("pin-spacer-"+l),F.pinState=G=jc(f)),n.force3D!==!1&&Ht.set(f,{force3D:!0}),D.spacer=wt=F.spacer,kt=Pi(f),bt=kt[p+R.os2],y=Ht.getProperty(f),J=Ht.quickSetter(f,R.a,fn),xd(f,wt,kt),St=jc(f)),Y){lt=Fs(Y)?Fg(Y,Og):Og,L=Qc("scroller-start",l,U,R,lt,0),tt=Qc("scroller-end",l,U,R,lt,0,L),I=L["offset"+R.op.d2];var _t=Zn(Tr(U,"content")||U);W=this.markerStart=Qc("start",l,_t,R,lt,I,0,A),z=this.markerEnd=Qc("end",l,_t,R,lt,I,0,A),A&&(It=Ht.quickSetter([W,z],R.a,fn)),!q&&!(Bi.length&&Tr(U,"fixedMarkers")===!0)&&(wy(B?Me:U),Ht.set([L,tt],{force3D:!0}),ut=Ht.quickSetter(L,R.a,fn),Rt=Ht.quickSetter(tt,R.a,fn))}if(A){var Mt=A.vars.onUpdate,xt=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){D.update(0,0,1),Mt&&Mt.apply(A,xt||[])})}if(D.previous=function(){return he[he.indexOf(D)-1]},D.next=function(){return he[he.indexOf(D)+1]},D.revert=function(yt,jt){if(!jt)return D.kill(!0);var Wt=yt!==!1||!D.enabled,ie=Un;Wt!==D.isReverted&&(Wt&&(Et=Math.max(k(),D.scroll.rec||0),Gt=D.progress,mt=i&&i.progress()),W&&[W,z,L,tt].forEach(function(en){return en.style.display=Wt?"none":"block"}),Wt&&(Un=D,D.update(Wt)),f&&(!b||!D.isActive)&&(Wt?Py(f,wt,G):xd(f,wt,Pi(f),vt)),Wt||D.update(Wt),Un=ie,D.isReverted=Wt)},D.refresh=function(yt,jt,Wt,ie){if(!((Un||!D.enabled)&&!jt)){if(f&&yt&&Li){vn(r,"scrollEnd",r0);return}!Kn&&ot&&ot(D),Un=D,O.tween&&!Wt&&(O.tween.kill(),O.tween=0),Tt&&Tt.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Dt){return Dt.vars.immediateRender&&Dt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var en=At(),de=Ct(),Ne=A?A.duration():er(U,R),gn=ft<=.01||!ft,Ue=0,Ee=ie||0,_e=Fs(Wt)?Wt.end:n.end,Vn=n.endTrigger||u,Pe=Fs(Wt)?Wt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),Rn=D.pinnedContainer=n.pinnedContainer&&Zn(n.pinnedContainer,D),Hn=u&&Math.max(0,he.indexOf(D))||0,nn=Hn,Xe,hn,Zi,co,_n,$e,Ti,ho,C,Q,at,rt,st;for(Y&&Fs(Wt)&&(rt=Ht.getProperty(L,R.p),st=Ht.getProperty(tt,R.p));nn-- >0;)$e=he[nn],$e.end||$e.refresh(0,1)||(Un=D),Ti=$e.pin,Ti&&(Ti===u||Ti===f||Ti===Rn)&&!$e.isReverted&&(Q||(Q=[]),Q.unshift($e),$e.revert(!0,!0)),$e!==he[nn]&&(Hn--,nn--);for(On(Pe)&&(Pe=Pe(D)),Pe=Ig(Pe,"start",D),ht=Vg(Pe,u,en,R,k(),W,L,D,de,nt,q,Ne,A,D._startClamp&&"_startClamp")||(f?-.001:0),On(_e)&&(_e=_e(D)),mi(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(mi(Pe)?Pe.split(" ")[0]:"")+_e:(Ue=nh(_e.substr(2),en),_e=mi(Pe)?Pe:(A?Ht.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,ht):ht)+Ue,Vn=u)),_e=Ig(_e,"end",D),P=Math.max(ht,Vg(_e||(Vn?"100% 0":Ne),Vn,en,R,k()+Ue,z,tt,D,de,nt,q,Ne,A,D._endClamp&&"_endClamp"))||-.001,Ue=0,nn=Hn;nn--;)$e=he[nn]||{},Ti=$e.pin,Ti&&$e.start-$e._pinPush<=ht&&!A&&$e.end>0&&(Xe=$e.end-(D._startClamp?Math.max(0,$e.start):$e.start),(Ti===u&&$e.start-$e._pinPush<ht||Ti===Rn)&&isNaN(Pe)&&(Ue+=Xe*(1-$e.progress)),Ti===f&&(Ee+=Xe));if(ht+=Ue,P+=Ue,D._startClamp&&(D._startClamp+=Ue),D._endClamp&&!Kn&&(D._endClamp=P||-.001,P=Math.min(P,er(U,R))),ft=P-ht||(ht-=.01)&&.001,gn&&(Gt=Ht.utils.clamp(0,1,Ht.utils.normalize(ht,P,Et))),D._pinPush=Ee,W&&Ue&&(Xe={},Xe[R.a]="+="+Ue,Rn&&(Xe[R.p]="-="+k()),Ht.set([W,z],Xe)),f&&!(bd&&D.end>=er(U,R)))Xe=Pi(f),co=R===sn,Zi=k(),et=parseFloat(y(R.a))+Ee,!Ne&&P>1&&(at=(B?be.scrollingElement||gi:U).style,at={style:at,value:at["overflow"+R.a.toUpperCase()]},B&&Pi(Me)["overflow"+R.a.toUpperCase()]!=="scroll"&&(at.style["overflow"+R.a.toUpperCase()]="scroll")),xd(f,wt,Xe),St=jc(f),hn=wr(f,!0),ho=q&&br(U,co?Nn:sn)(),p?(vt=[p+R.os2,ft+Ee+fn],vt.t=wt,nn=p===on?lh(f,R)+ft+Ee:0,nn&&(vt.push(R.d,nn+fn),wt.style.flexBasis!=="auto"&&(wt.style.flexBasis=nn+fn)),Do(vt),Rn&&he.forEach(function(Dt){Dt.pin===Rn&&Dt.vars.pinSpacing!==!1&&(Dt._subPinOffset=!0)}),q&&k(Et)):(nn=lh(f,R),nn&&wt.style.flexBasis!=="auto"&&(wt.style.flexBasis=nn+fn)),q&&(_n={top:hn.top+(co?Zi-ht:ho)+fn,left:hn.left+(co?ho:Zi-ht)+fn,boxSizing:"border-box",position:"fixed"},_n[Bs]=_n["max"+No]=Math.ceil(hn.width)+fn,_n[ks]=_n["max"+Id]=Math.ceil(hn.height)+fn,_n[Ri]=_n[Ri+el]=_n[Ri+ja]=_n[Ri+nl]=_n[Ri+tl]="0",_n[on]=Xe[on],_n[on+el]=Xe[on+el],_n[on+ja]=Xe[on+ja],_n[on+nl]=Xe[on+nl],_n[on+tl]=Xe[on+tl],S=Iy(G,_n,b),Kn&&k(0)),i?(C=i._initted,pd(1),i.render(i.duration(),!0,!0),ct=y(R.a)-et+ft+Ee,pt=Math.abs(ft-ct)>1,q&&pt&&S.splice(S.length-2,2),i.render(0,!0,!0),C||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),pd(0)):ct=ft,at&&(at.value?at.style["overflow"+R.a.toUpperCase()]=at.value:at.style.removeProperty("overflow-"+R.a));else if(u&&k()&&!A)for(hn=u.parentNode;hn&&hn!==Me;)hn._pinOffset&&(ht-=hn._pinOffset,P-=hn._pinOffset),hn=hn.parentNode;Q&&Q.forEach(function(Dt){return Dt.revert(!1,!0)}),D.start=ht,D.end=P,H=it=Kn?Et:k(),!A&&!Kn&&(H<Et&&k(Et),D.scroll.rec=0),D.revert(!1,!0),Bt=Fn(),K&&(Ot=-1,K.restart(!0)),Un=0,i&&V&&(i._initted||mt)&&i.progress()!==mt&&i.progress(mt||0,!0).render(i.time(),!0,!0),(gn||Gt!==D.progress||A||_||i&&!i._initted)&&(i&&!V&&(i._initted||Gt||i.vars.immediateRender!==!1)&&i.totalProgress(A&&ht<-.001&&!Gt?Ht.utils.normalize(ht,P,0):Gt,!0),D.progress=gn||(H-ht)/ft===Gt?0:Gt),f&&p&&(wt._pinOffset=Math.round(D.progress*ct)),Tt&&Tt.invalidate(),isNaN(rt)||(rt-=Ht.getProperty(L,R.p),st-=Ht.getProperty(tt,R.p),th(L,R,rt),th(W,R,rt-(ie||0)),th(tt,R,st),th(z,R,st-(ie||0))),gn&&!Kn&&D.update(),h&&!Kn&&!gt&&(gt=!0,h(D),gt=!1)}},D.getVelocity=function(){return(k()-it)/(Fn()-qa)*1e3||0},D.endAnimation=function(){Xa(D.callbackAnimation),i&&(Tt?Tt.progress(1):i.paused()?V||Xa(i,D.direction<0,1):Xa(i,i.reversed()))},D.labelToScroll=function(yt){return i&&i.labels&&(ht||D.refresh()||ht)+i.labels[yt]/i.duration()*ft||0},D.getTrailing=function(yt){var jt=he.indexOf(D),Wt=D.direction>0?he.slice(0,jt).reverse():he.slice(jt+1);return(mi(yt)?Wt.filter(function(ie){return ie.vars.preventOverlaps===yt}):Wt).filter(function(ie){return D.direction>0?ie.end<=ht:ie.start>=P})},D.update=function(yt,jt,Wt){if(!(A&&!Wt&&!yt)){var ie=Kn===!0?Et:D.scroll(),en=yt?0:(ie-ht)/ft,de=en<0?0:en>1?1:en||0,Ne=D.progress,gn,Ue,Ee,_e,Vn,Pe,Rn,Hn;if(jt&&(it=H,H=A?k():ie,x&&(Pt=Lt,Lt=i&&!V?i.totalProgress():de)),g&&f&&!Un&&!Yc&&Li&&(!de&&ht<ie+(ie-it)/(Fn()-qa)*g?de=1e-4:de===1&&P>ie+(ie-it)/(Fn()-qa)*g&&(de=.9999)),de!==Ne&&D.enabled){if(gn=D.isActive=!!de&&de<1,Ue=!!Ne&&Ne<1,Pe=gn!==Ue,Vn=Pe||!!de!=!!Ne,D.direction=de>Ne?1:-1,D.progress=de,Vn&&!Un&&(Ee=de&&!Ne?0:de===1?1:Ne===1?2:3,V&&(_e=!Pe&&X[Ee+1]!=="none"&&X[Ee+1]||X[Ee],Hn=i&&(_e==="complete"||_e==="reset"||_e in i))),w&&(Pe||Hn)&&(Hn||d||!i)&&(On(w)?w(D):D.getTrailing(w).forEach(function(Zi){return Zi.endAnimation()})),V||(Tt&&!Un&&!Yc?(Tt._dp._time-Tt._start!==Tt._time&&Tt.render(Tt._dp._time-Tt._start),Tt.resetTo?Tt.resetTo("totalProgress",de,i._tTime/i._tDur):(Tt.vars.totalProgress=de,Tt.invalidate().restart())):i&&i.totalProgress(de,!!(Un&&(Bt||yt)))),f){if(yt&&p&&(wt.style[p+R.os2]=bt),!q)J(Za(et+ct*de));else if(Vn){if(Rn=!yt&&de>Ne&&P+1>ie&&ie+1>=er(U,R),b)if(!yt&&(gn||Rn)){var nn=wr(f,!0),Xe=ie-ht;Hg(f,Me,nn.top+(R===sn?Xe:0)+fn,nn.left+(R===sn?0:Xe)+fn)}else Hg(f,wt);Do(gn||Rn?S:St),pt&&de<1&&gn||J(et+(de===1&&!Rn?ct:0))}}x&&!O.tween&&!Un&&!Yc&&K.restart(!0),a&&(Pe||E&&de&&(de<1||!md))&&rl(a.targets).forEach(function(Zi){return Zi.classList[gn||E?"add":"remove"](a.className)}),o&&!V&&!yt&&o(D),Vn&&!Un?(V&&(Hn&&(_e==="complete"?i.pause().totalProgress(1):_e==="reset"?i.restart(!0).pause():_e==="restart"?i.restart(!0):i[_e]()),o&&o(D)),(Pe||!md)&&(c&&Pe&&Ao(D,c),j[Ee]&&Ao(D,j[Ee]),E&&(de===1?D.kill(!1,1):j[Ee]=0),Pe||(Ee=de===1?1:3,j[Ee]&&Ao(D,j[Ee]))),v&&!gn&&Math.abs(D.getVelocity())>(Ja(v)?v:2500)&&(Xa(D.callbackAnimation),Tt?Tt.progress(1):Xa(i,_e==="reverse"?1:!de,1))):V&&o&&!Un&&o(D)}if(Rt){var hn=A?ie/A.duration()*(A._caScrollDist||0):ie;ut(hn+(L._isFlipped?1:0)),Rt(hn)}It&&It(-ie/A.duration()*(A._caScrollDist||0))}},D.enable=function(yt,jt){D.enabled||(D.enabled=!0,vn(U,"resize",$a),B||vn(U,"scroll",Ro),ot&&vn(r,"refreshInit",ot),yt!==!1&&(D.progress=Gt=0,H=it=Ot=k()),jt!==!1&&D.refresh())},D.getTween=function(yt){return yt&&O?O.tween:Tt},D.setPositions=function(yt,jt,Wt,ie){if(A){var en=A.scrollTrigger,de=A.duration(),Ne=en.end-en.start;yt=en.start+Ne*yt/de,jt=en.start+Ne*jt/de}D.refresh(!1,!1,{start:Dg(yt,Wt&&!!D._startClamp),end:Dg(jt,Wt&&!!D._endClamp)},ie),D.update()},D.adjustPinSpacing=function(yt){if(vt&&yt){var jt=vt.indexOf(R.d)+1;vt[jt]=parseFloat(vt[jt])+yt+fn,vt[1]=parseFloat(vt[1])+yt+fn,Do(vt)}},D.disable=function(yt,jt){if(yt!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,jt||Tt&&Tt.pause(),Et=0,F&&(F.uncache=1),ot&&xn(r,"refreshInit",ot),K&&(K.pause(),O.tween&&O.tween.kill()&&(O.tween=0)),!B)){for(var Wt=he.length;Wt--;)if(he[Wt].scroller===U&&he[Wt]!==D)return;xn(U,"resize",$a),B||xn(U,"scroll",Ro)}},D.kill=function(yt,jt){D.disable(yt,jt),Tt&&!jt&&Tt.kill(),l&&delete Td[l];var Wt=he.indexOf(D);Wt>=0&&he.splice(Wt,1),Wt===$n&&rh>0&&$n--,Wt=0,he.forEach(function(ie){return ie.scroller===D.scroller&&(Wt=1)}),Wt||Kn||(D.scroll.rec=0),i&&(i.scrollTrigger=null,yt&&i.revert({kill:!1}),jt||i.kill()),W&&[W,z,L,tt].forEach(function(ie){return ie.parentNode&&ie.parentNode.removeChild(ie)}),il===D&&(il=0),f&&(F&&(F.uncache=1),Wt=0,he.forEach(function(ie){return ie.pin===f&&Wt++}),Wt||(F.spacer=0)),n.onKill&&n.onKill(D)},he.push(D),D.enable(!1,!1),Nt&&Nt(D),i&&i.add&&!ft){var Kt=D.update;D.update=function(){D.update=Kt,ce.cache++,ht||P||D.refresh()},Ht.delayedCall(.01,D.update),ft=.01,ht=P=0}else D.refresh();f&&Ry()},r.register=function(n){return Po||(Ht=n||Qg(),Kg()&&window.document&&r.enable(),Po=Ya),Po},r.defaults=function(n){if(n)for(var i in n)Kc[i]=n[i];return Kc},r.disable=function(n,i){Ya=0,he.forEach(function(o){return o[i?"kill":"disable"](n)}),xn(pe,"wheel",Ro),xn(be,"scroll",Ro),clearInterval(qc),xn(be,"touchcancel",tr),xn(Me,"touchstart",tr),Jc(xn,be,"pointerdown,touchstart,mousedown",Ng),Jc(xn,be,"pointerup,touchend,mouseup",Ug),ah.kill(),Zc(xn);for(var s=0;s<ce.length;s+=3)$c(xn,ce[s],ce[s+1]),$c(xn,ce[s],ce[s+2])},r.enable=function(){if(pe=window,be=document,gi=be.documentElement,Me=be.body,Ht){if(rl=Ht.utils.toArray,Ka=Ht.utils.clamp,Md=Ht.core.context||tr,pd=Ht.core.suppressOverwrites||tr,Cd=pe.history.scrollRestoration||"auto",wd=pe.pageYOffset||0,Ht.core.globals("ScrollTrigger",r),Me){Ya=1,Io=document.createElement("div"),Io.style.height="100vh",Io.style.position="absolute",l0(),My(),Ze.register(Ht),r.isTouch=Ze.isTouch,ts=Ze.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Sd=Ze.isTouch===1,vn(pe,"wheel",Ro),Ad=[pe,be,gi,Me],Ht.matchMedia?(r.matchMedia=function(h){var d=Ht.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Ht.addEventListener("matchMediaInit",function(){o0(),Nd()}),Ht.addEventListener("matchMediaRevert",function(){return s0()}),Ht.addEventListener("matchMedia",function(){Os(0,1),Gs("matchMedia")}),Ht.matchMedia().add("(orientation: portrait)",function(){return _d(),_d})):console.warn("Requires GSAP 3.11.0 or later"),_d(),vn(be,"scroll",Ro);var n=Me.hasAttribute("style"),i=Me.style,s=i.borderTopStyle,o=Ht.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=wr(Me),sn.m=Math.round(a.top+sn.sc())||0,Nn.m=Math.round(a.left+Nn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Me.setAttribute("style",""),Me.removeAttribute("style")),qc=setInterval(Bg,250),Ht.delayedCall(.5,function(){return Yc=0}),vn(be,"touchcancel",tr),vn(Me,"touchstart",tr),Jc(vn,be,"pointerdown,touchstart,mousedown",Ng),Jc(vn,be,"pointerup,touchend,mouseup",Ug),yd=Ht.utils.checkPrefix("transform"),sh.push(yd),Po=Fn(),ah=Ht.delayedCall(.2,Os).pause(),Lo=[be,"visibilitychange",function(){var h=pe.innerWidth,d=pe.innerHeight;be.hidden?(Pg=h,Lg=d):(Pg!==h||Lg!==d)&&$a()},be,"DOMContentLoaded",Os,pe,"load",Os,pe,"resize",$a],Zc(vn),he.forEach(function(h){return h.enable(0,1)}),l=0;l<ce.length;l+=3)$c(xn,ce[l],ce[l+1]),$c(xn,ce[l],ce[l+2])}else if(be){var c=function h(){r.enable(),be.removeEventListener("DOMContentLoaded",h)};be.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(md=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(qc)||(qc=i)&&setInterval(Bg,i),"ignoreMobileResize"in n&&(Sd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Zc(xn)||Zc(vn,n.autoRefreshEvents||"none"),Zg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Zn(n),o=ce.indexOf(s),a=Vs(s);~o&&ce.splice(o,a?6:2),i&&(a?Bi.unshift(pe,i,Me,i,gi,i):Bi.unshift(s,i))},r.clearMatchMedia=function(n){he.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(mi(n)?Zn(n):n).getBoundingClientRect(),a=o[s?Bs:ks]*i||0;return s?o.right-a>0&&o.left+a<pe.innerWidth:o.bottom-a>0&&o.top+a<pe.innerHeight},r.positionInViewport=function(n,i,s){mi(n)&&(n=Zn(n));var o=n.getBoundingClientRect(),a=o[s?Bs:ks],l=i==null?a/2:i in ch?ch[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/pe.innerWidth:(o.top+l)/pe.innerHeight},r.killAll=function(n){if(he.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Hs.killAll||[];Hs={},i.forEach(function(s){return s()})}},r})();re.version="3.15.0";re.saveStyles=function(r){return r?rl(r).forEach(function(t){if(t&&t.style){var e=pi.indexOf(t);e>=0&&pi.splice(e,5),pi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ht.core.getCache(t),Md())}}):pi};re.revert=function(r,t){return Nd(!r,t)};re.create=function(r,t){return new re(r,t)};re.refresh=function(r){return r?$a(!0):(Po||re.register())&&Os(!0)};re.update=function(r){return++ce.cache&&Er(r===!0?2:0)};re.clearScrollMemory=a0;re.maxScroll=function(r,t){return er(r,t?Nn:sn)};re.getScrollFunc=function(r,t){return br(Zn(r),t?Nn:sn)};re.getById=function(r){return Td[r]};re.getAll=function(){return he.filter(function(r){return r.vars.id!=="ScrollSmoother"})};re.isScrolling=function(){return!!Li};re.snapDirectional=Dd;re.addEventListener=function(r,t){var e=Hs[r]||(Hs[r]=[]);~e.indexOf(t)||e.push(t)};re.removeEventListener=function(r,t){var e=Hs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};re.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Ht.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&On(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return On(s)&&(s=s(),vn(re,"refresh",function(){return s=t.batchMax()})),rl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(re.create(c))}),e};var Wg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},vd=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ze.isTouch?" pinch-zoom":""):"none",t===gi&&r(Me,e)},eh={auto:1,scroll:1},Ny=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ht.core.getCache(s),a=Fn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(eh[(l=Pi(s)).overflowY]||eh[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Vs(s)&&(eh[(l=Pi(s)).overflowY]||eh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},h0=function(t,e,n,i){return Ze.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Ny,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&vn(be,Ze.eventTypes[0],qg,!1,!0)},onDisable:function(){return xn(be,Ze.eventTypes[0],qg,!0)}})},Uy=/(input|label|select|textarea)/i,Xg,qg=function(t){var e=Uy.test(t.target.tagName);(e||Xg)&&(t._gsapAllow=!0,Xg=e)},Fy=function(t){Fs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Zn(t.target)||gi,h=Ht.core.globals().ScrollSmoother,d=h&&h.get(),u=ts&&(t.content&&Zn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=br(c,sn),p=br(c,Nn),_=1,g=(Ze.isTouch&&pe.visualViewport?pe.visualViewport.scale*pe.visualViewport.width:pe.outerWidth)/pe.innerWidth,m=0,M=On(i)?function(){return i(a)}:function(){return i||2.8},E,x,b=h0(c,t.type,!0,s),T=function(){return x=!1},A=tr,v=tr,w=function(){l=er(c,sn),v=Ka(ts?1:0,l),n&&(A=Ka(0,er(c,Nn))),E=zs},R=function(){u._gsap.y=Za(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},V=function(){if(x){requestAnimationFrame(T);var Y=Za(a.deltaY/2),nt=v(f.v-Y);if(u&&nt!==f.v+f.offset){f.offset=nt-f.v;var D=Za((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",u._gsap.y=D+"px",f.cacheID=ce.cache,Er()}return!0}f.offset&&R(),x=!0},U,$,B,q,j=function(){w(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return u&&Ht.set(u,{y:"+=0"}),t.ignoreCheck=function(X){return ts&&X.type==="touchmove"&&V(X)||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){x=!1;var X=_;_=Za((pe.visualViewport&&pe.visualViewport.scale||1)/g),U.pause(),X!==_&&vd(c,_>1.01?!0:n?!1:"x"),$=p(),B=f(),w(),E=zs},t.onRelease=t.onGestureStart=function(X,Y){if(f.offset&&R(),!Y)q.restart(!0);else{ce.cache++;var nt=M(),D,ot;n&&(D=p(),ot=D+nt*.05*-X.velocityX/.227,nt*=Wg(p,D,ot,er(c,Nn)),U.vars.scrollX=A(ot)),D=f(),ot=D+nt*.05*-X.velocityY/.227,nt*=Wg(f,D,ot,er(c,sn)),U.vars.scrollY=v(ot),U.invalidate().duration(nt).play(.01),(ts&&U.vars.scrollY>=l||D>=l-1)&&Ht.to({},{onUpdate:j,duration:nt})}o&&o(X)},t.onWheel=function(){U._ts&&U.pause(),Fn()-m>1e3&&(E=0,m=Fn())},t.onChange=function(X,Y,nt,D,ot){if(zs!==E&&w(),Y&&n&&p(A(D[2]===Y?$+(X.startX-X.x):p()+Y-D[1])),nt){f.offset&&R();var At=ot[2]===nt,Ct=At?B+X.startY-X.y:f()+nt-ot[1],Ot=v(Ct);At&&Ct!==Ot&&(B+=Ot-Ct),f(Ot)}(nt||Y)&&Er()},t.onEnable=function(){vd(c,n?!1:"x"),re.addEventListener("refresh",j),vn(pe,"resize",j),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),b.enable()},t.onDisable=function(){vd(c,!0),xn(pe,"resize",j),re.removeEventListener("refresh",j),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ze(t),a.iOS=ts,ts&&!f()&&f(1),ts&&Ht.ticker.add(tr),q=a._dc,U=Ht.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:c0(f,f(),function(){return U.pause()})},onUpdate:Er,onComplete:q.vars.onComplete}),a};re.sort=function(r){if(On(r))return he.sort(r);var t=pe.pageYOffset||0;return re.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+pe.innerHeight}),he.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};re.observe=function(r){return new Ze(r)};re.normalizeScroll=function(r){if(typeof r=="undefined")return Jn;if(r===!0&&Jn)return Jn.enable();if(r===!1){Jn&&Jn.kill(),Jn=r;return}var t=r instanceof Ze?r:Fy(r);return Jn&&Jn.target===t.target&&Jn.kill(),Vs(t.target)&&(Jn=t),t};re.core={_getVelocityProp:Xc,_inputObserver:h0,_scrollers:ce,_proxies:Bi,bridge:{ss:function(){Li||Gs("scrollStart"),Li=Fn()},ref:function(){return Un}}};Qg()&&Ht.registerPlugin(re);var u0="1.3.26";function p0(r,t,e){return Math.max(r,Math.min(t,e))}function Oy(r,t,e){return(1-e)*r+e*t}function By(r,t,e,n){return Oy(r,t,1-Math.exp(-e*n))}function ky(r,t){return(r%t+t)%t}var zy=class{constructor(){Zt(this,"isRunning",!1);Zt(this,"value",0);Zt(this,"from",0);Zt(this,"to",0);Zt(this,"currentTime",0);Zt(this,"lerp");Zt(this,"duration");Zt(this,"easing");Zt(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let n=p0(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=By(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function Vy(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var Hy=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Zt(this,"width",0);Zt(this,"height",0);Zt(this,"scrollHeight",0);Zt(this,"scrollWidth",0);Zt(this,"debouncedResize");Zt(this,"wrapperResizeObserver");Zt(this,"contentResizeObserver");Zt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Zt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Zt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Vy(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},m0=class{constructor(){Zt(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},Gy=100/6,es={passive:!1};function f0(r,t){return r===1?Gy:r===2?t:1}var Wy=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Zt(this,"touchStart",{x:0,y:0});Zt(this,"lastDelta",{x:0,y:0});Zt(this,"window",{width:0,height:0});Zt(this,"emitter",new m0);Zt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Zt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Zt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Zt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=f0(n,this.window.width),s=f0(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Zt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,es),this.element.addEventListener("touchstart",this.onTouchStart,es),this.element.addEventListener("touchmove",this.onTouchMove,es),this.element.addEventListener("touchend",this.onTouchEnd,es)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,es),this.element.removeEventListener("touchstart",this.onTouchStart,es),this.element.removeEventListener("touchmove",this.onTouchMove,es),this.element.removeEventListener("touchend",this.onTouchEnd,es)}},d0=r=>Math.min(1,1.001-2**(-10*r)),g0=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:g,virtualScroll:m,overscroll:M=!0,autoRaf:E=!1,anchors:x=!1,autoToggle:b=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:v=A,stopInertiaOnNavigate:w=!1,respectReducedMotion:R=!0}={}){Zt(this,"_isScrolling",!1);Zt(this,"_isStopped",!1);Zt(this,"_isLocked",!1);Zt(this,"_preventNextNativeScrollEvent",!1);Zt(this,"_resetVelocityTimeout",null);Zt(this,"_rafId",null);Zt(this,"_isDraggingSelection",!1);Zt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Zt(this,"isTouching");Zt(this,"isIos");Zt(this,"time",0);Zt(this,"userData",{});Zt(this,"lastVelocity",0);Zt(this,"velocity",0);Zt(this,"direction",0);Zt(this,"options");Zt(this,"targetScroll");Zt(this,"animatedScroll");Zt(this,"animate",new zy);Zt(this,"emitter",new m0);Zt(this,"dimensions");Zt(this,"virtualScroll");Zt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Zt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Zt(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Zt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Zt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Zt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>{var _,g,m,M,E;return p instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(p))||((_=p.hasAttribute)==null?void 0:_.call(p,"data-lenis-prevent"))||h==="vertical"&&((g=p.hasAttribute)==null?void 0:g.call(p,"data-lenis-prevent-vertical"))||h==="horizontal"&&((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent-horizontal"))||i&&((M=p.hasAttribute)==null?void 0:M.call(p,"data-lenis-prevent-touch"))||s&&((E=p.hasAttribute)==null?void 0:E.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Zt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Zt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=u0,window.lenis||(window.lenis={}),window.lenis.version=u0,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=d0:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:_,prevent:g,virtualScroll:m,overscroll:M,autoRaf:E,anchors:x,autoToggle:b,allowNestedScroll:T,naiveDimensions:v,stopInertiaOnNavigate:w,respectReducedMotion:R},this.dimensions=new Hy(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Wy(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){var c;let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=(c=r.targetTouches[0])!=null?c:r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&(u!=null&&u.nodeType)&&(p=u),p){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?x.left:x.top}let _=p.getBoundingClientRect(),g=getComputedStyle(p),m=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),M=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(E)?0:E)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=p0(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d!=null?d:{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=d0:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){var T;let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,d,u,f,p;if(n-((T=i.time)!=null?T:0)>2e3){i.time=Date.now();let A=window.getComputedStyle(r);if(i.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),o=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),h=["auto"].includes(A.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,p=r.clientHeight,a=d>f,l=u>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",g,m,M,E,x,b;if(_==="horizontal")g=Math.round(r.scrollLeft),m=d-f,M=t,E=s,x=a,b=c;else if(_==="vertical")g=Math.round(r.scrollTop),m=u-p,M=e,E=o,x=l,b=h;else return!1;return!b&&(g>=m||g<=0)?!0:(M>0?g<m:g>0)&&E&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let r=this.options.wrapper;return this.isHorizontal?(t=r.scrollX)!=null?t:r.scrollLeft:(e=r.scrollY)!=null?e:r.scrollTop}get scroll(){return this.options.infinite?ky(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var j0=0,Mp=1,t_=2;var eo=1,e_=2,da=3,gs=0,dn=1,ti=2,Ni=0,pa=1,dr=2,bp=3,Tp=4,n_=5;var no=100,i_=101,r_=102,s_=103,o_=104,a_=200,l_=201,c_=202,h_=203,wp=204,Ep=205,u_=206,f_=207,d_=208,p_=209,m_=210,g_=211,__=212,x_=213,v_=214,Oh=0,Bh=1,kh=2,Ko=3,zh=4,Vh=5,Hh=6,Gh=7,mu=0,y_=1,S_=2,Xi=0,Ql=1,jl=2,tc=3,Or=4,ec=5,nc=6,ic=7;var Ap=300,_s=301,io=302,gu=303,_u=304,rc=306,Nr=1e3,Di=1001,Qo=1002,Sn=1003,M_=1004;var sc=1005;var En=1006,xu=1007;var xs=1008;var li=1009,Cp=1010,Rp=1011,ma=1012,vu=1013,qi=1014,Ui=1015,Cn=1016,yu=1017,Su=1018,ga=1020,Pp=35902,Lp=35899,Ip=1021,Dp=1022,Fi=1023,rr=1026,vs=1027,Mu=1028,bu=1029,ys=1030,Tu=1031;var wu=1033,oc=33776,ac=33777,lc=33778,cc=33779,Eu=35840,Au=35841,Cu=35842,Ru=35843,Pu=36196,Lu=37492,Iu=37496,Du=37488,Nu=37489,hc=37490,Uu=37491,Fu=37808,Ou=37809,Bu=37810,ku=37811,zu=37812,Vu=37813,Hu=37814,Gu=37815,Wu=37816,Xu=37817,qu=37818,Yu=37819,Zu=37820,Ju=37821,$u=36492,Ku=36494,Qu=36495,ju=36283,tf=36284,uc=36285,ef=36286;var _l=2300,Wh=2301,Uh=2302,sp=2303,op=2400,ap=2401,lp=2402;var b_=3200;var fc=0,T_=1,Br="",Je="srgb",xl="srgb-linear",vl="linear",ye="srgb";var Fh=7680;var w_=519,E_=512,A_=513,C_=514,nf=515,R_=516,P_=517,rf=518,L_=519,I_=35044;var Np="300 es",Gi=2e3,jo=2001;function Xy(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function qy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function yl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function D_(){let r=yl("canvas");return r.style.display="block",r}var _0={},ta=null;function Up(...r){let t="THREE."+r.shift();ta?ta("log",t,...r):console.log(t,...r)}function N_(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ee(...r){r=N_(r);let t="THREE."+r.shift();if(ta)ta("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function ne(...r){r=N_(r);let t="THREE."+r.shift();if(ta)ta("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Zs(...r){let t=r.join(" ");t in _0||(_0[t]=!0,ee(...r))}function U_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var F_={[Oh]:Bh,[kh]:Hh,[zh]:Gh,[Ko]:Vh,[Bh]:Oh,[Hh]:kh,[Gh]:zh,[Vh]:Ko},sr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],x0=1234567,dl=Math.PI/180,Js=180/Math.PI;function ro(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[e&63|128]+Bn[e>>8&255]+"-"+Bn[e>>16&255]+Bn[e>>24&255]+Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]).toLowerCase()}function ae(r,t,e){return Math.max(t,Math.min(e,r))}function Fp(r,t){return(r%t+t)%t}function Yy(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Zy(r,t,e){return r!==t?(e-r)/(t-r):0}function pl(r,t,e){return(1-e)*r+e*t}function Jy(r,t,e,n){return pl(r,t,1-Math.exp(-e*n))}function $y(r,t=1){return t-Math.abs(Fp(r,t*2)-t)}function Ky(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Qy(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function jy(r,t){return r+Math.floor(Math.random()*(t-r+1))}function tS(r,t){return r+Math.random()*(t-r)}function eS(r){return r*(.5-Math.random())}function nS(r){r!==void 0&&(x0=r);let t=x0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function iS(r){return r*dl}function rS(r){return r*Js}function sS(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function oS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function aS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function lS(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*h,a*c);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var so={DEG2RAD:dl,RAD2DEG:Js,generateUUID:ro,clamp:ae,euclideanModulo:Fp,mapLinear:Yy,inverseLerp:Zy,lerp:pl,damp:Jy,pingpong:$y,smoothstep:Ky,smootherstep:Qy,randInt:jy,randFloat:tS,randFloatSpread:eS,seededRandom:nS,degToRad:iS,radToDeg:rS,isPowerOfTwo:sS,ceilPowerOfTwo:oS,floorPowerOfTwo:aS,setQuaternionFromProperEuler:lS,normalize:Qn,denormalize:Jo},Hp=class Hp{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hp.prototype.isVector2=!0;var dt=Hp,or=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*_;g<0&&(u=-u,f=-f,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let M=Math.acos(g),E=Math.sin(M);m=Math.sin(m*M)/E,a=Math.sin(a*M)/E,l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+_*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+_*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gp=class Gp{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(v0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(v0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ud.copy(this).projectOnVector(t),this.sub(Ud)}reflect(t){return this.sub(Ud.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gp.prototype.isVector3=!0;var Z=Gp,Ud=new Z,v0=new or,Wp=class Wp{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],M=i[1],E=i[4],x=i[7],b=i[2],T=i[5],A=i[8];return s[0]=o*_+a*M+l*b,s[3]=o*g+a*E+l*T,s[6]=o*m+a*x+l*A,s[1]=c*_+h*M+d*b,s[4]=c*g+h*E+d*T,s[7]=c*m+h*x+d*A,s[2]=u*_+f*M+p*b,s[5]=u*g+f*E+p*T,s[8]=u*m+f*x+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fd.makeScale(t,e)),this}rotate(t){return Zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fd.makeRotation(-t)),this}translate(t,e){return Zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wp.prototype.isMatrix3=!0;var Qt=Wp,Fd=new Qt,y0=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),S0=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cS(){let r={enabled:!0,workingColorSpace:xl,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ye&&(i.r=Dr(i.r),i.g=Dr(i.g),i.b=Dr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(i.r=$o(i.r),i.g=$o(i.g),i.b=$o(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Br?vl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Zs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Zs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[xl]:{primaries:t,whitePoint:n,transfer:vl,toXYZ:y0,fromXYZ:S0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:y0,fromXYZ:S0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),r}var me=cS();function Dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $o(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Uo,Xh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Uo===void 0&&(Uo=yl("canvas")),Uo.width=t.width,Uo.height=t.height;let i=Uo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Uo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=yl("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Dr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dr(e[n]/255)*255):e[n]=Dr(e[n]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hS=0,ea=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=ro(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Od(i[o].image)):s.push(Od(i[o]))}else s=Od(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Od(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Xh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}var uS=0,Bd=new Z,jn=class r extends sr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Di,i=Di,s=En,o=xs,a=Fi,l=li,c=r.DEFAULT_ANISOTROPY,h=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=ro(),this.name="",this.source=new ea(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bd).x}get height(){return this.source.getSize(Bd).y}get depth(){return this.source.getSize(Bd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ap)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nr:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case Qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nr:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case Qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Ap;jn.DEFAULT_ANISOTROPY=1;var Xp=class Xp{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,x=(f+1)/2,b=(m+1)/2,T=(h+u)/4,A=(d+_)/4,v=(p+g)/4;return E>x&&E>b?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=T/n,s=A/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=v/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=A/s,i=v/s),this.set(n,i,s,e),this}let M=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xp.prototype.isVector4=!0;var ke=Xp,qh=class extends sr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new jn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ea(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends qh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Sl=class extends jn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yh=class extends jn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var pu=class pu{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,p,_,g)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pu().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Fo.setFromMatrixColumn(t,0).length(),s=1/Fo.setFromMatrixColumn(t,1).length(),o=1/Fo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fS,t,dS)}lookAt(t,e,n){let i=this.elements;return _i.subVectors(t,e),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),ns.crossVectors(n,_i),ns.lengthSq()===0&&(Math.abs(n.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),ns.crossVectors(n,_i)),ns.normalize(),uh.crossVectors(_i,ns),i[0]=ns.x,i[4]=uh.x,i[8]=_i.x,i[1]=ns.y,i[5]=uh.y,i[9]=_i.y,i[2]=ns.z,i[6]=uh.z,i[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],M=n[3],E=n[7],x=n[11],b=n[15],T=i[0],A=i[4],v=i[8],w=i[12],R=i[1],V=i[5],U=i[9],$=i[13],B=i[2],q=i[6],j=i[10],X=i[14],Y=i[3],nt=i[7],D=i[11],ot=i[15];return s[0]=o*T+a*R+l*B+c*Y,s[4]=o*A+a*V+l*q+c*nt,s[8]=o*v+a*U+l*j+c*D,s[12]=o*w+a*$+l*X+c*ot,s[1]=h*T+d*R+u*B+f*Y,s[5]=h*A+d*V+u*q+f*nt,s[9]=h*v+d*U+u*j+f*D,s[13]=h*w+d*$+u*X+f*ot,s[2]=p*T+_*R+g*B+m*Y,s[6]=p*A+_*V+g*q+m*nt,s[10]=p*v+_*U+g*j+m*D,s[14]=p*w+_*$+g*X+m*ot,s[3]=M*T+E*R+x*B+b*Y,s[7]=M*A+E*V+x*q+b*nt,s[11]=M*v+E*U+x*j+b*D,s[15]=M*w+E*$+x*X+b*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15],M=l*f-c*u,E=a*f-c*d,x=a*u-l*d,b=o*f-c*h,T=o*u-l*h,A=o*d-a*h;return e*(_*M-g*E+m*x)-n*(p*M-g*b+m*T)+i*(p*E-_*b+m*A)-s*(p*x-_*T+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],M=e*a-n*o,E=e*l-i*o,x=e*c-s*o,b=n*l-i*a,T=n*c-s*a,A=i*c-s*l,v=h*_-d*p,w=h*g-u*p,R=h*m-f*p,V=d*g-u*_,U=d*m-f*_,$=u*m-f*g,B=M*$-E*U+x*V+b*R-T*w+A*v;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/B;return t[0]=(a*$-l*U+c*V)*q,t[1]=(i*U-n*$-s*V)*q,t[2]=(_*A-g*T+m*b)*q,t[3]=(u*T-d*A-f*b)*q,t[4]=(l*R-o*$-c*w)*q,t[5]=(e*$-i*R+s*w)*q,t[6]=(g*x-p*A-m*E)*q,t[7]=(h*A-u*x+f*E)*q,t[8]=(o*U-a*R+c*v)*q,t[9]=(n*R-e*U-s*v)*q,t[10]=(p*T-_*x+m*M)*q,t[11]=(d*x-h*T-f*M)*q,t[12]=(a*w-o*V-l*v)*q,t[13]=(e*V-n*w+i*v)*q,t[14]=(_*E-p*b-g*M)*q,t[15]=(h*b-d*E+u*M)*q,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,p=s*d,_=o*h,g=o*d,m=a*d,M=l*c,E=l*h,x=l*d,b=n.x,T=n.y,A=n.z;return i[0]=(1-(_+m))*b,i[1]=(f+x)*b,i[2]=(p-E)*b,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(u+m))*T,i[6]=(g+M)*T,i[7]=0,i[8]=(p+E)*A,i[9]=(g-M)*A,i[10]=(1-(u+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Fo.set(i[0],i[1],i[2]).length(),a=Fo.set(i[4],i[5],i[6]).length(),l=Fo.set(i[8],i[9],i[10]).length();s<0&&(o=-o),ki.copy(this);let c=1/o,h=1/a,d=1/l;return ki.elements[0]*=c,ki.elements[1]*=c,ki.elements[2]*=c,ki.elements[4]*=h,ki.elements[5]*=h,ki.elements[6]*=h,ki.elements[8]*=d,ki.elements[9]*=d,ki.elements[10]*=d,e.setFromRotationMatrix(ki),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=Gi,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===Gi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===jo)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Gi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===Gi)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===jo)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};pu.prototype.isMatrix4=!0;var Te=pu,Fo=new Z,ki=new Te,fS=new Z(0,0,0),dS=new Z(1,1,1),ns=new Z,uh=new Z,_i=new Z,M0=new Te,b0=new or,ar=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return M0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(M0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return b0.setFromEuler(this),this.setFromQuaternion(b0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ar.DEFAULT_ORDER="XYZ";var na=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pS=0,T0=new Z,Oo=new or,Ar=new Te,fh=new Z,ol=new Z,mS=new Z,gS=new or,w0=new Z(1,0,0),E0=new Z(0,1,0),A0=new Z(0,0,1),C0={type:"added"},_S={type:"removed"},Bo={type:"childadded",child:null},kd={type:"childremoved",child:null},tn=class r extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new Z,e=new ar,n=new or,i=new Z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new Qt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oo.setFromAxisAngle(t,e),this.quaternion.multiply(Oo),this}rotateOnWorldAxis(t,e){return Oo.setFromAxisAngle(t,e),this.quaternion.premultiply(Oo),this}rotateX(t){return this.rotateOnAxis(w0,t)}rotateY(t){return this.rotateOnAxis(E0,t)}rotateZ(t){return this.rotateOnAxis(A0,t)}translateOnAxis(t,e){return T0.copy(t).applyQuaternion(this.quaternion),this.position.add(T0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(w0,t)}translateY(t){return this.translateOnAxis(E0,t)}translateZ(t){return this.translateOnAxis(A0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fh.copy(t):fh.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(ol,fh,this.up):Ar.lookAt(fh,ol,this.up),this.quaternion.setFromRotationMatrix(Ar),i&&(Ar.extractRotation(i.matrixWorld),Oo.setFromRotationMatrix(Ar),this.quaternion.premultiply(Oo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(C0),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_S),kd.child=t,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ar.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ar),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(C0),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,t,mS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,gS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new Z(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},xS={type:"move"},ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},O_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},dh={h:0,s:0,l:0};function zd(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=Fp(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=zd(o,s,t+1/3),this.g=zd(o,s,t),this.b=zd(o,s,t-1/3)}return me.colorSpaceToWorking(this,i),this}setStyle(t,e=Je){function n(s){s!==void 0&&parseFloat(s)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=O_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}copyLinearToSRGB(t){return this.r=$o(t.r),this.g=$o(t.g),this.b=$o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return me.workingToColorSpace(kn.copy(this),t),Math.round(ae(kn.r*255,0,255))*65536+Math.round(ae(kn.g*255,0,255))*256+Math.round(ae(kn.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(kn.copy(this),e);let n=kn.r,i=kn.g,s=kn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(kn.copy(this),e),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Je){me.workingToColorSpace(kn.copy(this),t);let e=kn.r,n=kn.g,i=kn.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(is),this.setHSL(is.h+t,is.s+e,is.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(is),t.getHSL(dh);let n=pl(is.h,dh.h,e),i=pl(is.s,dh.s,e),s=pl(is.l,dh.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kn=new Yt;Yt.NAMES=O_;var Ml=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},lr=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},zi=new Z,Cr=new Z,Vd=new Z,Rr=new Z,ko=new Z,zo=new Z,R0=new Z,Hd=new Z,Gd=new Z,Wd=new Z,Xd=new ke,qd=new ke,Yd=new ke,as=class r{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),zi.subVectors(t,e),i.cross(zi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){zi.subVectors(i,e),Cr.subVectors(n,e),Vd.subVectors(t,e);let o=zi.dot(zi),a=zi.dot(Cr),l=zi.dot(Vd),c=Cr.dot(Cr),h=Cr.dot(Vd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Rr)===null?!1:Rr.x>=0&&Rr.y>=0&&Rr.x+Rr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rr.x),l.addScaledVector(o,Rr.y),l.addScaledVector(a,Rr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Xd.setScalar(0),qd.setScalar(0),Yd.setScalar(0),Xd.fromBufferAttribute(t,e),qd.fromBufferAttribute(t,n),Yd.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Xd,s.x),o.addScaledVector(qd,s.y),o.addScaledVector(Yd,s.z),o}static isFrontFacing(t,e,n,i){return zi.subVectors(n,e),Cr.subVectors(t,e),zi.cross(Cr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),zi.cross(Cr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;ko.subVectors(i,n),zo.subVectors(s,n),Hd.subVectors(t,n);let l=ko.dot(Hd),c=zo.dot(Hd);if(l<=0&&c<=0)return e.copy(n);Gd.subVectors(t,i);let h=ko.dot(Gd),d=zo.dot(Gd);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ko,o);Wd.subVectors(t,s);let f=ko.dot(Wd),p=zo.dot(Wd);if(p>=0&&f<=p)return e.copy(s);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(zo,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return R0.subVectors(s,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(R0,a);let m=1/(g+_+u);return o=_*m,a=u*m,e.copy(n).addScaledVector(ko,o).addScaledVector(zo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cr=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vi):Vi.fromBufferAttribute(s,o),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ph.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ph.copy(n.boundingBox)),ph.applyMatrix4(t.matrixWorld),this.union(ph)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(al),mh.subVectors(this.max,al),Vo.subVectors(t.a,al),Ho.subVectors(t.b,al),Go.subVectors(t.c,al),rs.subVectors(Ho,Vo),ss.subVectors(Go,Ho),Ws.subVectors(Vo,Go);let e=[0,-rs.z,rs.y,0,-ss.z,ss.y,0,-Ws.z,Ws.y,rs.z,0,-rs.x,ss.z,0,-ss.x,Ws.z,0,-Ws.x,-rs.y,rs.x,0,-ss.y,ss.x,0,-Ws.y,Ws.x,0];return!Zd(e,Vo,Ho,Go,mh)||(e=[1,0,0,0,1,0,0,0,1],!Zd(e,Vo,Ho,Go,mh))?!1:(gh.crossVectors(rs,ss),e=[gh.x,gh.y,gh.z],Zd(e,Vo,Ho,Go,mh))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Vi=new Z,ph=new cr,Vo=new Z,Ho=new Z,Go=new Z,rs=new Z,ss=new Z,Ws=new Z,al=new Z,mh=new Z,gh=new Z,Xs=new Z;function Zd(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Xs.fromArray(r,s);let a=i.x*Math.abs(Xs.x)+i.y*Math.abs(Xs.y)+i.z*Math.abs(Xs.z),l=t.dot(Xs),c=e.dot(Xs),h=n.dot(Xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var an=new Z,_h=new dt,vS=0,je=class extends sr{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=I_,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_h.fromBufferAttribute(this,e),_h.applyMatrix3(t),this.setXY(e,_h.x,_h.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix3(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Jo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qn(e,this.array),n=Qn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Qn(e,this.array),n=Qn(n,this.array),i=Qn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Qn(e,this.array),n=Qn(n,this.array),i=Qn(i,this.array),s=Qn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var bl=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Tl=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}},yS=new cr,ll=new Z,Jd=new Z,Ur=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yS.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ll.subVectors(t,this.center);let e=ll.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ll,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ll.copy(t.center).add(Jd)),this.expandByPoint(ll.copy(t.center).sub(Jd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},SS=0,Ii=new Te,$d=new tn,Wo=new Z,xi=new cr,cl=new cr,yn=new Z,De=class r extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xy(t)?Tl:bl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,e,n){return Ii.makeTranslation(t,e,n),this.applyMatrix4(Ii),this}scale(t,e,n){return Ii.makeScale(t,e,n),this.applyMatrix4(Ii),this}lookAt(t){return $d.lookAt(t),$d.updateMatrix(),this.applyMatrix4($d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wo).negate(),this.translate(Wo.x,Wo.y,Wo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];cl.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(xi.min,cl.min),xi.expandByPoint(yn),yn.addVectors(xi.max,cl.max),xi.expandByPoint(yn)):(xi.expandByPoint(cl.min),xi.expandByPoint(cl.max))}xi.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)yn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(yn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)yn.fromBufferAttribute(a,c),l&&(Wo.fromBufferAttribute(t,c),yn.add(Wo)),i=Math.max(i,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new je(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new Z,l[v]=new Z;let c=new Z,h=new Z,d=new Z,u=new dt,f=new dt,p=new dt,_=new Z,g=new Z;function m(v,w,R){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,R),u.fromBufferAttribute(s,v),f.fromBufferAttribute(s,w),p.fromBufferAttribute(s,R),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let V=1/(f.x*p.y-p.x*f.y);isFinite(V)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(V),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(V),a[v].add(_),a[w].add(_),a[R].add(_),l[v].add(g),l[w].add(g),l[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,w=M.length;v<w;++v){let R=M[v],V=R.start,U=R.count;for(let $=V,B=V+U;$<B;$+=3)m(t.getX($+0),t.getX($+1),t.getX($+2))}let E=new Z,x=new Z,b=new Z,T=new Z;function A(v){b.fromBufferAttribute(i,v),T.copy(b);let w=a[v];E.copy(w),E.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(T,w);let V=x.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,V)}for(let v=0,w=M.length;v<w;++v){let R=M[v],V=R.start,U=R.count;for(let $=V,B=V+U;$<B;$+=3)A(t.getX($+0)),A(t.getX($+1)),A(t.getX($+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,h=new Z,d=new Z;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)yn.fromBufferAttribute(t,e),yn.normalize(),t.setXYZ(e,yn.x,yn.y,yn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new je(u,h,d)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Kd=new Z,MS=new Z,bS=new Qt,Hi=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Kd.subVectors(n,e).cross(MS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Kd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bS.getNormalMatrix(t),i=this.coplanarPoint(Kd).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},TS=0,hr=class extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=pa,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wp,this.blendDst=Ep,this.blendEquation=no,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fh,this.stencilZFail=Fh,this.stencilZPass=Fh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Lr=new Z,Qd=new Z,xh=new Z,vh=new Z,ra=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Lr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Lr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Lr.copy(this.origin).addScaledVector(this.direction,e),Lr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qd.copy(t).add(e).multiplyScalar(.5),xh.copy(e).sub(t).normalize(),vh.copy(this.origin).sub(Qd);let s=t.distanceTo(e)*.5,o=-this.direction.dot(xh),a=vh.dot(this.direction),l=-vh.dot(xh),c=vh.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=s*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Qd).addScaledVector(xh,u),f}intersectSphere(t,e){if(t.radius<0)return null;Lr.subVectors(t.center,this.origin);let n=Lr.dot(this.direction),i=Lr.dot(Lr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Lr)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,_=e.y-o.y,g=e.z-o.z,m=n.x-o.x,M=n.y-o.y,E=n.z-o.z,x=Math.abs(l),b=Math.abs(c),T=Math.abs(h),A,v,w,R,V,U,$,B,q,j,X,Y;if(x>=b&&x>=T?(w=l,U=d,q=p,Y=m,l>=0?(A=c,v=h,R=u,V=f,$=_,B=g,j=M,X=E):(A=h,v=c,R=f,V=u,$=g,B=_,j=E,X=M)):b>=T?(w=c,U=u,q=_,Y=M,c>=0?(A=h,v=l,R=f,V=d,$=g,B=p,j=E,X=m):(A=l,v=h,R=d,V=f,$=p,B=g,j=m,X=E)):(w=h,U=f,q=g,Y=E,h>=0?(A=l,v=c,R=d,V=u,$=p,B=_,j=m,X=M):(A=c,v=l,R=u,V=d,$=_,B=p,j=M,X=m)),w===0)return null;let nt=A/w,D=v/w,ot=1/w,At=R-nt*U,Ct=V-D*U,Ot=$-nt*q,Bt=B-D*q,Gt=j-nt*Y,k=X-D*Y,O=Gt*Bt-k*Ot,F=At*k-Ct*Gt,N=Ot*Ct-Bt*At;if(i){if(O<0||F<0||N<0)return null}else if((O<0||F<0||N<0)&&(O>0||F>0||N>0))return null;let H=O+F+N;if(H===0)return null;let it=ot*(O*U+F*q+N*Y);return(H>0?it<0:it>0)?null:this.at(it/H,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},An=class extends hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},P0=new Te,qs=new ra,yh=new Ur,L0=new Z,Sh=new Z,Mh=new Z,bh=new Z,jd=new Z,Th=new Z,I0=new Z,wh=new Z,fe=class extends tn{constructor(t=new De,e=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Th.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(jd.fromBufferAttribute(d,t),o?Th.addScaledVector(jd,h):Th.addScaledVector(jd.sub(e),h))}e.add(Th)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yh.copy(n.boundingSphere),yh.applyMatrix4(s),qs.copy(t.ray).recast(t.near),!(yh.containsPoint(qs.origin)===!1&&(qs.intersectSphere(yh,L0)===null||qs.origin.distanceToSquared(L0)>(t.far-t.near)**2))&&(P0.copy(s).invert(),qs.copy(t.ray).applyMatrix4(P0),!(n.boundingBox!==null&&qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qs)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,b=E;x<b;x+=3){let T=a.getX(x),A=a.getX(x+1),v=a.getX(x+2);i=Eh(this,m,t,n,c,h,d,T,A,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let M=a.getX(g),E=a.getX(g+1),x=a.getX(g+2);i=Eh(this,o,t,n,c,h,d,M,E,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,b=E;x<b;x+=3){let T=x,A=x+1,v=x+2;i=Eh(this,m,t,n,c,h,d,T,A,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let M=g,E=g+1,x=g+2;i=Eh(this,o,t,n,c,h,d,M,E,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function wS(r,t,e,n,i,s,o,a){let l;if(t.side===dn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===gs,a),l===null)return null;wh.copy(a),wh.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(wh);return c<e.near||c>e.far?null:{distance:c,point:wh.clone(),object:r}}function Eh(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Sh),r.getVertexPosition(l,Mh),r.getVertexPosition(c,bh);let h=wS(r,t,e,n,Sh,Mh,bh,I0);if(h){let d=new Z;as.getBarycoord(I0,Sh,Mh,bh,d),i&&(h.uv=as.getInterpolatedAttribute(i,a,l,c,d,new dt)),s&&(h.uv1=as.getInterpolatedAttribute(s,a,l,c,d,new dt)),o&&(h.normal=as.getInterpolatedAttribute(o,a,l,c,d,new Z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new Z,materialIndex:0};as.getNormal(Sh,Mh,bh,u.normal),h.face=u,h.barycoord=d}return h}var wl=class extends jn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Sn,h=Sn,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var El=class extends je{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Xo=new Te,D0=new Te,Ah=[],N0=new cr,ES=new Te,hl=new fe,ul=new Ur,Al=class extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ES)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xo),N0.copy(t.boundingBox).applyMatrix4(Xo),this.boundingBox.union(N0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ur),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xo),ul.copy(t.boundingSphere).applyMatrix4(Xo),this.boundingSphere.union(ul)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(hl.geometry=this.geometry,hl.material=this.material,hl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(n),t.ray.intersectsSphere(ul)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Xo),D0.multiplyMatrices(n,Xo),hl.matrixWorld=D0,hl.raycast(t,Ah);for(let o=0,a=Ah.length;o<a;o++){let l=Ah[o];l.instanceId=s,l.object=this,e.push(l)}Ah.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wl(new Float32Array(i*this.count),i,this.count,Mu,Ui));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ys=new Ur,AS=new dt(.5,.5),Ch=new Z,sa=class{constructor(t=new Hi,e=new Hi,n=new Hi,i=new Hi,s=new Hi,o=new Hi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gi,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],_=s[9],g=s[10],m=s[11],M=s[12],E=s[13],x=s[14],b=s[15];if(i[0].setComponents(c-o,f-h,m-p,b-M).normalize(),i[1].setComponents(c+o,f+h,m+p,b+M).normalize(),i[2].setComponents(c+a,f+d,m+_,b+E).normalize(),i[3].setComponents(c-a,f-d,m-_,b-E).normalize(),n)i[4].setComponents(l,u,g,x).normalize(),i[5].setComponents(c-l,f-u,m-g,b-x).normalize();else if(i[4].setComponents(c-l,f-u,m-g,b-x).normalize(),e===Gi)i[5].setComponents(c+l,f+u,m+g,b+x).normalize();else if(e===jo)i[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(t){Ys.center.set(0,0,0);let e=AS.distanceTo(t.center);return Ys.radius=.7071067811865476+e,Ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ch.x=i.normal.x>0?t.max.x:t.min.x,Ch.y=i.normal.y>0?t.max.y:t.min.y,Ch.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ch)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var oa=class extends hr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},U0=new Te,cp=new ra,Rh=new Ur,Ph=new Z,$s=class extends tn{constructor(t=new De,e=new oa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rh.copy(n.boundingSphere),Rh.applyMatrix4(i),Rh.radius+=s,t.ray.intersectsSphere(Rh)===!1)return;U0.copy(i).invert(),cp.copy(t.ray).applyMatrix4(U0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,_=f;p<_;p++){let g=c.getX(p);Ph.fromBufferAttribute(d,g),F0(Ph,g,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,_=f;p<_;p++)Ph.fromBufferAttribute(d,p),F0(Ph,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function F0(r,t,e,n,i,s,o){let a=cp.distanceSqToPoint(r);if(a<e){let l=new Z;cp.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Cl=class extends jn{constructor(t=[],e=_s,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ai=class extends jn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ls=class extends jn{constructor(t,e,n=qi,i,s,o,a=Sn,l=Sn,c,h=rr,d=1){if(h!==rr&&h!==vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ea(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Zh=class extends ls{constructor(t,e=qi,n=_s,i,s,o=Sn,a=Sn,l,c=rr){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Rl=class extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},cs=class r extends De{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function p(_,g,m,M,E,x,b,T,A,v,w){let R=x/A,V=b/v,U=x/2,$=b/2,B=T/2,q=A+1,j=v+1,X=0,Y=0,nt=new Z;for(let D=0;D<j;D++){let ot=D*V-$;for(let At=0;At<q;At++){let Ct=At*R-U;nt[_]=Ct*M,nt[g]=ot*E,nt[m]=B,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[g]=0,nt[m]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(At/A),d.push(1-D/v),X+=1}}for(let D=0;D<v;D++)for(let ot=0;ot<A;ot++){let At=u+ot+q*D,Ct=u+ot+q*(D+1),Ot=u+(ot+1)+q*(D+1),Bt=u+(ot+1)+q*D;l.push(At,Ct,Bt),l.push(Ct,Ot,Bt),Y+=6}a.addGroup(f,Y,w),f+=Y,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Pl=class r extends De{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new Z,h=new dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ks=class r extends De{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],f=[],p=0,_=[],g=n/2,m=0;M(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(f,2));function M(){let x=new Z,b=new Z,T=0,A=(e-t)/n;for(let v=0;v<=s;v++){let w=[],R=v/s,V=R*(e-t)+t;for(let U=0;U<=i;U++){let $=U/i,B=$*l+a,q=Math.sin(B),j=Math.cos(B);b.x=V*q,b.y=-R*n+g,b.z=V*j,d.push(b.x,b.y,b.z),x.set(q,A,j).normalize(),u.push(x.x,x.y,x.z),f.push($,1-R),w.push(p++)}_.push(w)}for(let v=0;v<i;v++)for(let w=0;w<s;w++){let R=_[w][v],V=_[w+1][v],U=_[w+1][v+1],$=_[w][v+1];(t>0||w!==0)&&(h.push(R,V,$),T+=3),(e>0||w!==s-1)&&(h.push(V,U,$),T+=3)}c.addGroup(m,T,0),m+=T}function E(x){let b=p,T=new dt,A=new Z,v=0,w=x===!0?t:e,R=x===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),p++;let V=p;for(let U=0;U<=i;U++){let B=U/i*l+a,q=Math.cos(B),j=Math.sin(B);A.x=w*j,A.y=g*R,A.z=w*q,d.push(A.x,A.y,A.z),u.push(0,R,0),T.x=q*.5+.5,T.y=j*.5*R+.5,f.push(T.x,T.y),p++}for(let U=0;U<i;U++){let $=b+U,B=V+U;x===!0?h.push(B,B+1,$):h.push(B+1,B,$),v+=3}c.addGroup(m,v,x===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new dt:new Z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Z,i=[],s=[],o=[],a=new Z,l=new Te;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new Z)}s[0]=new Z,o[0]=new Z;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ae(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(ae(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},aa=class extends vi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Jh=class extends aa{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Op(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var O0=new Z,B0=new Z,tp=new Op,ep=new Op,np=new Op,$h=class extends vi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new Z){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(B0.subVectors(i[0],i[1]).add(i[0]),c=B0);let d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(O0.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=O0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),tp.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,g),ep.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,g),np.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(tp.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ep.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),np.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(tp.calc(l),ep.calc(l),np.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Z().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function k0(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function CS(r,t){let e=1-r;return e*e*t}function RS(r,t){return 2*(1-r)*r*t}function PS(r,t){return r*r*t}function ml(r,t,e,n){return CS(r,t)+RS(r,e)+PS(r,n)}function LS(r,t){let e=1-r;return e*e*e*t}function IS(r,t){let e=1-r;return 3*e*e*r*t}function DS(r,t){return 3*(1-r)*r*r*t}function NS(r,t){return r*r*r*t}function gl(r,t,e,n,i){return LS(r,t)+IS(r,e)+DS(r,n)+NS(r,i)}var Ll=class extends vi{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(gl(t,i.x,s.x,o.x,a.x),gl(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Kh=class extends vi{constructor(t=new Z,e=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Z){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(gl(t,i.x,s.x,o.x,a.x),gl(t,i.y,s.y,o.y,a.y),gl(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Il=class extends vi{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qh=class extends vi{constructor(t=new Z,e=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dl=class extends vi{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ml(t,i.x,s.x,o.x),ml(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jh=class extends vi{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ml(t,i.x,s.x,o.x),ml(t,i.y,s.y,o.y),ml(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nl=class extends vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(k0(a,l.x,c.x,h.x,d.x),k0(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new dt().fromArray(i))}return this}},hp=Object.freeze({__proto__:null,ArcCurve:Jh,CatmullRomCurve3:$h,CubicBezierCurve:Ll,CubicBezierCurve3:Kh,EllipseCurve:aa,LineCurve:Il,LineCurve3:Qh,QuadraticBezierCurve:Dl,QuadraticBezierCurve3:jh,SplineCurve:Nl}),tu=class extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hp[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new hp[i.type]().fromJSON(i))}return this}},ur=class extends tu{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Il(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Dl(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new Ll(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Nl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new aa(t,e,n,i,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ul=class extends ur{constructor(t){super(t),this.uuid=ro(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new ur().fromJSON(i))}return this}};function US(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=B_(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=zS(r,t,s,e)),r.length>80*e){a=r[0],l=r[1];let h=a,d=l;for(let u=e;u<i;u+=e){let f=r[u],p=r[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Fl(s,o,e,a,l,c,0),o}function B_(r,t,e,n,i){let s;if(i===KS(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=z0(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=z0(o/n|0,r[o],r[o+1],s);return s&&la(s,s.next)&&(Bl(s),s=s.next),s}function Qs(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(la(e,e.next)||Ge(e.prev,e,e.next)===0)){if(Bl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fl(r,t,e,n,i,s,o){if(!r)return;!o&&s&&XS(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?OS(r,n,i,s):FS(r)){t.push(l.i,r.i,c.i),Bl(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=BS(Qs(r),t),Fl(r,t,e,n,i,s,2)):o===2&&kS(r,t,e,n,i,s):Fl(Qs(r),t,e,n,i,s,1);break}}}function FS(r){let t=r.prev,e=r,n=r.next;if(Ge(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,s,o),d=Math.min(a,l,c),u=Math.max(i,s,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&fl(i,a,s,l,o,c,p.x,p.y)&&Ge(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function OS(r,t,e,n){let i=r.prev,s=r,o=r.next;if(Ge(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,d=s.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),_=Math.max(a,l,c),g=Math.max(h,d,u),m=up(f,p,t,e,n),M=up(_,g,t,e,n),E=r.prevZ,x=r.nextZ;for(;E&&E.z>=m&&x&&x.z<=M;){if(E.x>=f&&E.x<=_&&E.y>=p&&E.y<=g&&E!==i&&E!==o&&fl(a,h,l,d,c,u,E.x,E.y)&&Ge(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&fl(a,h,l,d,c,u,x.x,x.y)&&Ge(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=_&&E.y>=p&&E.y<=g&&E!==i&&E!==o&&fl(a,h,l,d,c,u,E.x,E.y)&&Ge(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&fl(a,h,l,d,c,u,x.x,x.y)&&Ge(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function BS(r,t){let e=r;do{let n=e.prev,i=e.next.next;!la(n,i)&&z_(n,e,e.next,i)&&Ol(n,i)&&Ol(i,n)&&(t.push(n.i,e.i,i.i),Bl(e),Bl(e.next),e=r=i),e=e.next}while(e!==r);return Qs(e)}function kS(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ZS(o,a)){let l=V_(o,a);o=Qs(o,o.next),l=Qs(l,l.next),Fl(o,t,e,n,i,s,0),Fl(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function zS(r,t,e,n){let i=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=B_(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(YS(c))}i.sort(VS);for(let s=0;s<i.length;s++)e=HS(i[s],e);return e}function VS(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function HS(r,t){let e=GS(r,t);if(!e)return t;let n=V_(e,r);return Qs(n,n.next),Qs(e,e.next)}function GS(r,t){let e=t,n=r.x,i=r.y,s=-1/0,o;if(la(r,e))return e;do{if(la(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&k_(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);Ol(e,r)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&WS(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function WS(r,t){return Ge(r.prev,r,t.prev)<0&&Ge(t.next,r,r.next)<0}function XS(r,t,e,n){let i=r;do i.z===0&&(i.z=up(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,qS(i)}function qS(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function up(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function YS(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function k_(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function fl(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&k_(r,t,e,n,i,s,o,a)}function ZS(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!JS(r,t)&&(Ol(r,t)&&Ol(t,r)&&$S(r,t)&&(Ge(r.prev,r,t.prev)||Ge(r,t.prev,t))||la(r,t)&&Ge(r.prev,r,r.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function la(r,t){return r.x===t.x&&r.y===t.y}function z_(r,t,e,n){let i=Ih(Ge(r,t,e)),s=Ih(Ge(r,t,n)),o=Ih(Ge(e,n,r)),a=Ih(Ge(e,n,t));return!!(i!==s&&o!==a||i===0&&Lh(r,e,t)||s===0&&Lh(r,n,t)||o===0&&Lh(e,r,n)||a===0&&Lh(e,t,n))}function Lh(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ih(r){return r>0?1:r<0?-1:0}function JS(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&z_(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Ol(r,t){return Ge(r.prev,r,r.next)<0?Ge(r,t,r.next)>=0&&Ge(r,r.prev,t)>=0:Ge(r,t,r.prev)<0||Ge(r,r.next,t)<0}function $S(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function V_(r,t){let e=fp(r.i,r.x,r.y),n=fp(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function z0(r,t,e,n){let i=fp(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Bl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function fp(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function KS(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var dp=class{static triangulate(t,e,n=2){return US(t,e,n)}},ir=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];V0(t),H0(n,t);let o=t.length;e.forEach(V0);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,H0(n,e[l]);let a=dp.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function V0(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function H0(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var kl=class r extends De{constructor(t=new Ul([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ue(i,3)),this.setAttribute("uv",new ue(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:QS,E,x=!1,b,T,A,v;if(m){E=m.getSpacedPoints(h),x=!0,u=!1;let P=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,P),T=new Z,A=new Z,v=new Z}u||(g=0,f=0,p=0,_=0);let w=a.extractPoints(c),R=w.shape,V=w.holes;if(!ir.isClockWise(R)){R=R.reverse();for(let P=0,W=V.length;P<W;P++){let z=V[P];ir.isClockWise(z)&&(V[P]=z.reverse())}}function $(P){let z=10000000000000001e-36,L=P[0];for(let tt=1;tt<=P.length;tt++){let lt=tt%P.length,gt=P[lt],ft=gt.x-L.x,G=gt.y-L.y,S=ft*ft+G*G,St=Math.max(Math.abs(gt.x),Math.abs(gt.y),Math.abs(L.x),Math.abs(L.y)),wt=z*St*St;if(S<=wt){P.splice(lt,1),tt--;continue}L=gt}}$(R),V.forEach($);let B=V.length,q=R;for(let P=0;P<B;P++){let W=V[P];R=R.concat(W)}function j(P,W,z){return W||ne("ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(W,z)}let X=R.length;function Y(P,W,z){let L,tt,lt,gt=P.x-W.x,ft=P.y-W.y,G=z.x-P.x,S=z.y-P.y,St=gt*gt+ft*ft,wt=gt*S-ft*G;if(Math.abs(wt)>Number.EPSILON){let I=Math.sqrt(St),y=Math.sqrt(G*G+S*S),J=W.x-ft/I,et=W.y+gt/I,ct=z.x-S/y,bt=z.y+G/y,vt=((ct-J)*S-(bt-et)*G)/(gt*S-ft*G);L=J+gt*vt-P.x,tt=et+ft*vt-P.y;let ut=L*L+tt*tt;if(ut<=2)return new dt(L,tt);lt=Math.sqrt(ut/2)}else{let I=!1;gt>Number.EPSILON?G>Number.EPSILON&&(I=!0):gt<-Number.EPSILON?G<-Number.EPSILON&&(I=!0):Math.sign(ft)===Math.sign(S)&&(I=!0),I?(L=-ft,tt=gt,lt=Math.sqrt(St)):(L=gt,tt=ft,lt=Math.sqrt(St/2))}return new dt(L/lt,tt/lt)}let nt=[];for(let P=0,W=q.length,z=W-1,L=P+1;P<W;P++,z++,L++)z===W&&(z=0),L===W&&(L=0),nt[P]=Y(q[P],q[z],q[L]);let D=[],ot,At=nt.concat();for(let P=0,W=B;P<W;P++){let z=V[P];ot=[];for(let L=0,tt=z.length,lt=tt-1,gt=L+1;L<tt;L++,lt++,gt++)lt===tt&&(lt=0),gt===tt&&(gt=0),ot[L]=Y(z[L],z[lt],z[gt]);D.push(ot),At=At.concat(ot)}let Ct;if(g===0)Ct=ir.triangulateShape(q,V);else{let P=[],W=[];for(let z=0;z<g;z++){let L=z/g,tt=f*Math.cos(L*Math.PI/2),lt=p*Math.sin(L*Math.PI/2)+_;for(let gt=0,ft=q.length;gt<ft;gt++){let G=j(q[gt],nt[gt],lt);F(G.x,G.y,-tt),L===0&&P.push(G)}for(let gt=0,ft=B;gt<ft;gt++){let G=V[gt];ot=D[gt];let S=[];for(let St=0,wt=G.length;St<wt;St++){let I=j(G[St],ot[St],lt);F(I.x,I.y,-tt),L===0&&S.push(I)}L===0&&W.push(S)}}Ct=ir.triangulateShape(P,W)}let Ot=Ct.length,Bt=p+_;for(let P=0;P<X;P++){let W=u?j(R[P],At[P],Bt):R[P];x?(A.copy(b.normals[0]).multiplyScalar(W.x),T.copy(b.binormals[0]).multiplyScalar(W.y),v.copy(E[0]).add(A).add(T),F(v.x,v.y,v.z)):F(W.x,W.y,0)}for(let P=1;P<=h;P++)for(let W=0;W<X;W++){let z=u?j(R[W],At[W],Bt):R[W];x?(A.copy(b.normals[P]).multiplyScalar(z.x),T.copy(b.binormals[P]).multiplyScalar(z.y),v.copy(E[P]).add(A).add(T),F(v.x,v.y,v.z)):F(z.x,z.y,d/h*P)}for(let P=g-1;P>=0;P--){let W=P/g,z=f*Math.cos(W*Math.PI/2),L=p*Math.sin(W*Math.PI/2)+_;for(let tt=0,lt=q.length;tt<lt;tt++){let gt=j(q[tt],nt[tt],L);F(gt.x,gt.y,d+z)}for(let tt=0,lt=V.length;tt<lt;tt++){let gt=V[tt];ot=D[tt];for(let ft=0,G=gt.length;ft<G;ft++){let S=j(gt[ft],ot[ft],L);x?F(S.x,S.y+E[h-1].y,E[h-1].x+z):F(S.x,S.y,d+z)}}}Gt(),k();function Gt(){let P=i.length/3;if(u){let W=0,z=X*W;for(let L=0;L<Ot;L++){let tt=Ct[L];N(tt[2]+z,tt[1]+z,tt[0]+z)}W=h+g*2,z=X*W;for(let L=0;L<Ot;L++){let tt=Ct[L];N(tt[0]+z,tt[1]+z,tt[2]+z)}}else{for(let W=0;W<Ot;W++){let z=Ct[W];N(z[2],z[1],z[0])}for(let W=0;W<Ot;W++){let z=Ct[W];N(z[0]+X*h,z[1]+X*h,z[2]+X*h)}}n.addGroup(P,i.length/3-P,0)}function k(){let P=i.length/3,W=0;O(q,W),W+=q.length;for(let z=0,L=V.length;z<L;z++){let tt=V[z];O(tt,W),W+=tt.length}n.addGroup(P,i.length/3-P,1)}function O(P,W){let z=P.length;for(;--z>=0;){let L=z,tt=z-1;tt<0&&(tt=P.length-1);for(let lt=0,gt=h+g*2;lt<gt;lt++){let ft=X*lt,G=X*(lt+1),S=W+L+ft,St=W+tt+ft,wt=W+tt+G,I=W+L+G;H(S,St,wt,I)}}}function F(P,W,z){l.push(P),l.push(W),l.push(z)}function N(P,W,z){it(P),it(W),it(z);let L=i.length/3,tt=M.generateTopUV(n,i,L-3,L-2,L-1);ht(tt[0]),ht(tt[1]),ht(tt[2])}function H(P,W,z,L){it(P),it(W),it(L),it(W),it(z),it(L);let tt=i.length/3,lt=M.generateSideWallUV(n,i,tt-6,tt-3,tt-2,tt-1);ht(lt[0]),ht(lt[1]),ht(lt[3]),ht(lt[1]),ht(lt[2]),ht(lt[3])}function it(P){i.push(l[P*3+0]),i.push(l[P*3+1]),i.push(l[P*3+2])}function ht(P){s.push(P.x),s.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jS(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new hp[i.type]().fromJSON(i)),new r(n,t.options)}},QS={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new dt(s,o),new dt(a,l),new dt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],p=t[i*3+2],_=t[s*3],g=t[s*3+1],m=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-d),new dt(u,1-p),new dt(_,1-m)]:[new dt(a,1-l),new dt(h,1-d),new dt(f,1-p),new dt(g,1-m)]}};function jS(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var zl=class r extends De{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ae(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,d=new Z,u=new dt,f=new Z,p=new Z,_=new Z,g=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let M=0;M<=e;M++){let E=n+M*h*i,x=Math.sin(E),b=Math.cos(E);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*x,d.y=t[T].y,d.z=t[T].x*b,o.push(d.x,d.y,d.z),u.x=M/e,u.y=T/(t.length-1),a.push(u.x,u.y);let A=l[3*T+0]*x,v=l[3*T+1],w=l[3*T+0]*b;c.push(A,v,w)}}for(let M=0;M<e;M++)for(let E=0;E<t.length-1;E++){let x=E+M*t.length,b=x,T=x+t.length,A=x+t.length+1,v=x+1;s.push(b,T,v),s.push(A,v,T)}this.setIndex(s),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var hs=class r extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let M=m*u-o;for(let E=0;E<c;E++){let x=E*d-s;p.push(x,-M,0),_.push(0,0,1),g.push(E/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let E=M+c*m,x=M+c*(m+1),b=M+1+c*(m+1),T=M+1+c*m;f.push(E,x,T),f.push(x,b,T)}this.setIndex(f),this.setAttribute("position",new ue(p,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Vl=class r extends De{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/i,f=new Z,p=new dt;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){let m=s+g/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let _=0;_<i;_++){let g=_*(n+1);for(let m=0;m<n;m++){let M=m+g,E=M,x=M+n+1,b=M+n+2,T=M+1;a.push(E,x,T),a.push(x,b,T)}}this.setIndex(a),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Hl=class r extends De{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new Z,u=new Z,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let M=[],E=m/n,x=o+E*a,b=t*Math.cos(x),T=Math.sqrt(t*t-b*b),A=0;m===0&&o===0?A=.5/e:m===n&&l===Math.PI&&(A=-.5/e);for(let v=0;v<=e;v++){let w=v/e,R=i+w*s;d.x=-T*Math.cos(R),d.y=b,d.z=T*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(w+A,1-E),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let E=h[m][M+1],x=h[m][M],b=h[m+1][M],T=h[m+1][M+1];(m!==0||o>0)&&f.push(E,x,T),(m!==n-1||l<Math.PI)&&f.push(x,b,T)}this.setIndex(f),this.setAttribute("position",new ue(p,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ca=class r extends De{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new Z,f=new Z,p=new Z;for(let _=0;_<=n;_++){let g=o+_/n*a;for(let m=0;m<=i;m++){let M=m/i*s;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){let m=(i+1)*_+g-1,M=(i+1)*(_-1)+g-1,E=(i+1)*(_-1)+g,x=(i+1)*_+g;l.push(m,M,x),l.push(M,E,x)}this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function oo(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(G0(i))i.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(G0(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function zn(r){let t={};for(let e=0;e<r.length;e++){let n=oo(r[e]);for(let i in n)t[i]=n[i]}return t}function G0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function t1(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Bp(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var kr={clone:oo,merge:zn},e1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e1,this.fragmentShader=n1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=oo(t.uniforms),this.uniformsGroups=t1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(i.value);break;case"v2":this.uniforms[n].value=new dt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ke().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Te().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ha=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fr=class extends hr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},js=class extends fr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Gl=class extends hr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=mu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},eu=class extends hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nu=class extends hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qo(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function ip(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var us=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},iu=class extends us{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:op,endingEnd:op}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ap:s=t,a=2*e-n;break;case lp:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ap:o=t,l=2*n-e;break;case lp:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,M=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,E=(-1-f)*g+(1.5+f)*_+.5*p,x=f*g-f*_;for(let b=0;b!==a;++b)s[b]=m*o[h+b]+M*o[c+b]+E*o[l+b]+x*o[d+b];return s}},ru=class extends us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},su=class extends us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ou=class extends us{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),_=1-p;for(let g=0;g!==a;++g)s[g]=o[c+g]*_+o[l+g]*p;return s}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let _=o[c+p],g=o[l+p],m=f*u+p*2,M=d[m],E=d[m+1],x=t*u+p*2,b=h[x],T=h[x+1],A=r1(n,e,M,b,i);s[p]=H_(A,_,E,T,g)}return s}};function H_(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function i1(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function r1(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=H_(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=i1(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var yi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qo(e,this.TimeBufferType),this.values=qo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qo(t.times,Array),values:qo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),ip(t.settings)&&(n.settings={inTangents:qo(t.settings.inTangents,Array),outTangents:qo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new su(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ru(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new iu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ou(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _l:e=this.InterpolantFactoryMethodDiscrete;break;case Wh:e=this.InterpolantFactoryMethodLinear;break;case Uh:e=this.InterpolantFactoryMethodSmooth;break;case sp:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ee("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _l;case this.InterpolantFactoryMethodLinear:return Wh;case this.InterpolantFactoryMethodSmooth:return Uh;case this.InterpolantFactoryMethodBezier:return sp}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;ip(this.settings)&&(W0(this.settings.inTangents,t),W0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ne("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ne("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&qy(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ne("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Uh,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,ip(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function W0(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}yi.prototype.ValueTypeName="";yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=Wh;var fs=class extends yi{constructor(t,e,n){super(t,e,n)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=_l;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var au=class extends yi{constructor(t,e,n,i){super(t,e,n,i)}};au.prototype.ValueTypeName="color";var lu=class extends yi{constructor(t,e,n,i){super(t,e,n,i)}};lu.prototype.ValueTypeName="number";var cu=class extends us{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)or.slerpFlat(s,0,o,c-a,o,c,l);return s}},Wl=class extends yi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new cu(this.times,this.values,this.getValueSize(),t)}};Wl.prototype.ValueTypeName="quaternion";Wl.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends yi{constructor(t,e,n){super(t,e,n)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=_l;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var hu=class extends yi{constructor(t,e,n,i){super(t,e,n,i)}};hu.prototype.ValueTypeName="vector";var pp={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(X0(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!X0(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function X0(r){try{let t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch(t){return!1}}var uu=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},G_=new uu,to=class{constructor(t){this.manager=t!==void 0?t:G_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};to.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir={},mp=class extends Error{constructor(t,e){super(t),this.response=e}},Xl=class extends to{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=pp.get(`file:${t}`);if(s!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0);return}if(Ir[t]!==void 0){Ir[t].push({onLoad:e,onProgress:n,onError:i});return}Ir[t]=[],Ir[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ir[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,_=0,g=new ReadableStream({start(m){M();function M(){d.read().then(({done:E,value:x})=>{if(E)m.close();else{_+=x.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,A=h.length;T<A;T++){let v=h[T];v.onProgress&&v.onProgress(b)}m.enqueue(x),M()}},E=>{m.error(E)})}}});return new Response(g)}else throw new mp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{pp.add(`file:${t}`,c);let h=Ir[t];delete Ir[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ir[t];if(h===void 0)throw this.manager.itemError(t),c;delete Ir[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ps=class extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ql=class extends ps{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},rp=new Te,q0=new Z,Y0=new Z,ua=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;q0.setFromMatrixPosition(t.matrixWorld),e.position.copy(q0),Y0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Y0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){rp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(rp,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===jo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(rp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Dh=new Z,Nh=new or,nr=new Z,Yl=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Dh,Nh,nr),nr.x===1&&nr.y===1&&nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dh,Nh,nr.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Dh,Nh,nr),nr.x===1&&nr.y===1&&nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dh,Nh,nr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},os=new Z,Z0=new dt,J0=new dt,ln=class extends Yl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(os.x,os.y).multiplyScalar(-t/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-t/os.z)}getViewSize(t,e){return this.getViewBounds(t,Z0,J0),e.subVectors(J0,Z0)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gp=class extends ua{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Js*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Zl=class extends ps{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new gp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},_p=class extends ua{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},Si=class extends ps{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _p}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ms=class extends Yl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xp=class extends ua{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jl=class extends ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new xp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},$l=class extends ps{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Yo=-90,Zo=1,fu=class extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ln(Yo,Zo,t,e);i.layers=this.layers,this.add(i);let s=new ln(Yo,Zo,t,e);s.layers=this.layers,this.add(s);let o=new ln(Yo,Zo,t,e);o.layers=this.layers,this.add(o);let a=new ln(Yo,Zo,t,e);a.layers=this.layers,this.add(a);let l=new ln(Yo,Zo,t,e);l.layers=this.layers,this.add(l);let c=new ln(Yo,Zo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},du=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Fr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=s1.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function s1(){this._document.hidden===!1&&this.reset()}var kp="\\[\\]\\.:\\/",o1=new RegExp("["+kp+"]","g"),zp="[^"+kp+"]",a1="[^"+kp.replace("\\.","")+"]",l1=/((?:WC+[\/:])*)/.source.replace("WC",zp),c1=/(WCOD+)?/.source.replace("WCOD",a1),h1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zp),u1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zp),f1=new RegExp("^"+l1+c1+h1+u1+"$"),d1=["material","materials","bones","map"],vp=class{constructor(t,e,n){let i=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(o1,"")}static parseTrackName(t){let e=f1.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);d1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=vp;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var YE=new Float32Array(1);var $0=new Te,Kl=class{constructor(t,e,n=0,i=1/0){this.ray=new ra(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ne("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($0),this}intersectObject(t,e=!0,n=[]){return yp(t,this,n,e),n.sort(K0),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)yp(t[i],this,n,e);return n.sort(K0),n}};function K0(r,t){return r.distance-t.distance}function yp(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)yp(s[o],t,e,!0)}}var qp=class qp{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};qp.prototype.isMatrix2=!0;var Sp=qp,Q0=new dt,fa=class{constructor(t=new dt(1/0,1/0),e=new dt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Q0.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Q0).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var Wi=class{constructor(){this.type="ShapePath",this.color=new Yt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new ur,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,d=c.length;for(let u=0,f=d-1;u<d;f=u++){let p=c[u],_=c[f];p.y>l.y!=_.y>l.y&&l.x<(_.x-p.x)*(l.y-p.y)/(_.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new dt);if(t(h,l))return h;let d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){let _=l[p],g=l[(p+1)%f];if(_.y>d!=g.y>d){let m=_.x+(d-_.y)*(g.x-_.x)/(g.y-_.y);u.push(m)}}return u.length>1&&(u.sort((p,_)=>p-_),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(ee('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=ir.area(c);if(h===0)continue;let d=new fa;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);s.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){let c=s[l],h=0;for(let d=l-1;d>=0;d--){let u=s[d];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(let l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of s){if(l.exclude||l.role!=="outer")continue;let c=new Ul;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of s){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let h=new ur;h.curves=l.subPath.curves,c.holes.push(h)}return o}};function Vp(r,t,e,n){let i=p1(n);switch(e){case Ip:return r*t;case Mu:return r*t/i.components*i.byteLength;case bu:return r*t/i.components*i.byteLength;case ys:return r*t*2/i.components*i.byteLength;case Tu:return r*t*2/i.components*i.byteLength;case Dp:return r*t*3/i.components*i.byteLength;case Fi:return r*t*4/i.components*i.byteLength;case wu:return r*t*4/i.components*i.byteLength;case oc:case ac:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lc:case cc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Au:case Ru:return Math.max(r,16)*Math.max(t,8)/4;case Eu:case Cu:return Math.max(r,8)*Math.max(t,8)/2;case Pu:case Lu:case Du:case Nu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Iu:case hc:case Uu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ou:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Bu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ku:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case zu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Vu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Hu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Gu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Wu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Xu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case qu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Yu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Zu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ju:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case $u:case Ku:case Qu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ju:case tf:return Math.ceil(r/4)*Math.ceil(t/4)*8;case uc:case ef:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function p1(r){switch(r){case li:case Cp:return{byteLength:1,components:1};case ma:case Rp:case Cn:return{byteLength:2,components:1};case yu:case Su:return{byteLength:2,components:4};case qi:case vu:case Ui:return{byteLength:4,components:1};case Pp:case Lp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ux(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function g1(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var _1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,v1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,E1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,L1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,O1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,z1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,V1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,H1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,G1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,K1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_M=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,VM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,YM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ib=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ob=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ub=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Eb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:_1,alphahash_pars_fragment:x1,alphamap_fragment:v1,alphamap_pars_fragment:y1,alphatest_fragment:S1,alphatest_pars_fragment:M1,aomap_fragment:b1,aomap_pars_fragment:T1,batching_pars_vertex:w1,batching_vertex:E1,begin_vertex:A1,beginnormal_vertex:C1,bsdfs:R1,iridescence_fragment:P1,bumpmap_pars_fragment:L1,clipping_planes_fragment:I1,clipping_planes_pars_fragment:D1,clipping_planes_pars_vertex:N1,clipping_planes_vertex:U1,color_fragment:F1,color_pars_fragment:O1,color_pars_vertex:B1,color_vertex:k1,common:z1,cube_uv_reflection_fragment:V1,defaultnormal_vertex:H1,displacementmap_pars_vertex:G1,displacementmap_vertex:W1,emissivemap_fragment:X1,emissivemap_pars_fragment:q1,colorspace_fragment:Y1,colorspace_pars_fragment:Z1,envmap_fragment:J1,envmap_common_pars_fragment:$1,envmap_pars_fragment:K1,envmap_pars_vertex:Q1,envmap_physical_pars_fragment:cM,envmap_vertex:j1,fog_vertex:tM,fog_pars_vertex:eM,fog_fragment:nM,fog_pars_fragment:iM,gradientmap_pars_fragment:rM,lightmap_pars_fragment:sM,lights_lambert_fragment:oM,lights_lambert_pars_fragment:aM,lights_pars_begin:lM,lights_toon_fragment:hM,lights_toon_pars_fragment:uM,lights_phong_fragment:fM,lights_phong_pars_fragment:dM,lights_physical_fragment:pM,lights_physical_pars_fragment:mM,lights_fragment_begin:gM,lights_fragment_maps:_M,lights_fragment_end:xM,lightprobes_pars_fragment:vM,logdepthbuf_fragment:yM,logdepthbuf_pars_fragment:SM,logdepthbuf_pars_vertex:MM,logdepthbuf_vertex:bM,map_fragment:TM,map_pars_fragment:wM,map_particle_fragment:EM,map_particle_pars_fragment:AM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:RM,morphinstance_vertex:PM,morphcolor_vertex:LM,morphnormal_vertex:IM,morphtarget_pars_vertex:DM,morphtarget_vertex:NM,normal_fragment_begin:UM,normal_fragment_maps:FM,normal_pars_fragment:OM,normal_pars_vertex:BM,normal_vertex:kM,normalmap_pars_fragment:zM,clearcoat_normal_fragment_begin:VM,clearcoat_normal_fragment_maps:HM,clearcoat_pars_fragment:GM,iridescence_pars_fragment:WM,opaque_fragment:XM,packing:qM,premultiplied_alpha_fragment:YM,project_vertex:ZM,dithering_fragment:JM,dithering_pars_fragment:$M,roughnessmap_fragment:KM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:jM,shadowmap_pars_vertex:tb,shadowmap_vertex:eb,shadowmask_pars_fragment:nb,skinbase_vertex:ib,skinning_pars_vertex:rb,skinning_vertex:sb,skinnormal_vertex:ob,specularmap_fragment:ab,specularmap_pars_fragment:lb,tonemapping_fragment:cb,tonemapping_pars_fragment:hb,transmission_fragment:ub,transmission_pars_fragment:fb,uv_pars_fragment:db,uv_pars_vertex:pb,uv_vertex:mb,worldpos_vertex:gb,background_vert:_b,background_frag:xb,backgroundCube_vert:vb,backgroundCube_frag:yb,cube_vert:Sb,cube_frag:Mb,depth_vert:bb,depth_frag:Tb,distance_vert:wb,distance_frag:Eb,equirect_vert:Ab,equirect_frag:Cb,linedashed_vert:Rb,linedashed_frag:Pb,meshbasic_vert:Lb,meshbasic_frag:Ib,meshlambert_vert:Db,meshlambert_frag:Nb,meshmatcap_vert:Ub,meshmatcap_frag:Fb,meshnormal_vert:Ob,meshnormal_frag:Bb,meshphong_vert:kb,meshphong_frag:zb,meshphysical_vert:Vb,meshphysical_frag:Hb,meshtoon_vert:Gb,meshtoon_frag:Wb,points_vert:Xb,points_frag:qb,shadow_vert:Yb,shadow_frag:Zb,sprite_vert:Jb,sprite_frag:$b},Ut={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},mr={basic:{uniforms:zn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:zn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:zn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:zn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:zn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Yt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:zn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:zn([Ut.points,Ut.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:zn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:zn([Ut.common,Ut.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:zn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:zn([Ut.sprite,Ut.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:zn([Ut.common,Ut.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:zn([Ut.lights,Ut.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};mr.physical={uniforms:zn([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var sf={r:0,b:0,g:0},Kb=new Te,fx=new Qt;fx.set(-1,0,0,0,1,0,0,0,1);function Qb(r,t,e,n,i,s){let o=new Yt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let x=M.backgroundBlurriness>0;E=t.get(E,x)}return E}function p(M){let E=!1,x=f(M);x===null?g(o,a):x&&x.isColor&&(g(x,1),E=!0);let b=r.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(M,E){let x=f(E);x&&(x.isCubeTexture||x.mapping===rc)?(c===void 0&&(c=new fe(new cs(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:oo(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fx),c.material.toneMapped=me.getTransfer(x.colorSpace)!==ye,(h!==x||d!==x.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new fe(new hs(2,2),new We({name:"BackgroundMaterial",uniforms:oo(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=me.getTransfer(x.colorSpace)!==ye,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,E){M.getRGB(sf,Bp(r)),e.buffers.color.setClear(sf.r,sf.g,sf.b,E,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:p,addToRenderList:_,dispose:m}}function jb(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(V,U,$,B,q){let j=!1,X=d(V,B,$,U);s!==X&&(s=X,c(s.object)),j=f(V,B,$,q),j&&p(V,B,$,q),q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(V,U,$,B),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return r.createVertexArray()}function c(V){return r.bindVertexArray(V)}function h(V){return r.deleteVertexArray(V)}function d(V,U,$,B){let q=B.wireframe===!0,j=n[U.id];j===void 0&&(j={},n[U.id]=j);let X=V.isInstancedMesh===!0?V.id:0,Y=j[X];Y===void 0&&(Y={},j[X]=Y);let nt=Y[$.id];nt===void 0&&(nt={},Y[$.id]=nt);let D=nt[q];return D===void 0&&(D=u(l()),nt[q]=D),D}function u(V){let U=[],$=[],B=[];for(let q=0;q<e;q++)U[q]=0,$[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:$,attributeDivisors:B,object:V,attributes:{},index:null}}function f(V,U,$,B){let q=s.attributes,j=U.attributes,X=0,Y=$.getAttributes();for(let nt in Y)if(Y[nt].location>=0){let ot=q[nt],At=j[nt];if(At===void 0&&(nt==="instanceMatrix"&&V.instanceMatrix&&(At=V.instanceMatrix),nt==="instanceColor"&&V.instanceColor&&(At=V.instanceColor)),ot===void 0||ot.attribute!==At||At&&ot.data!==At.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function p(V,U,$,B){let q={},j=U.attributes,X=0,Y=$.getAttributes();for(let nt in Y)if(Y[nt].location>=0){let ot=j[nt];ot===void 0&&(nt==="instanceMatrix"&&V.instanceMatrix&&(ot=V.instanceMatrix),nt==="instanceColor"&&V.instanceColor&&(ot=V.instanceColor));let At={};At.attribute=ot,ot&&ot.data&&(At.data=ot.data),q[nt]=At,X++}s.attributes=q,s.attributesNum=X,s.index=B}function _(){let V=s.newAttributes;for(let U=0,$=V.length;U<$;U++)V[U]=0}function g(V){m(V,0)}function m(V,U){let $=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;$[V]=1,B[V]===0&&(r.enableVertexAttribArray(V),B[V]=1),q[V]!==U&&(r.vertexAttribDivisor(V,U),q[V]=U)}function M(){let V=s.newAttributes,U=s.enabledAttributes;for(let $=0,B=U.length;$<B;$++)U[$]!==V[$]&&(r.disableVertexAttribArray($),U[$]=0)}function E(V,U,$,B,q,j,X){X===!0?r.vertexAttribIPointer(V,U,$,q,j):r.vertexAttribPointer(V,U,$,B,q,j)}function x(V,U,$,B){_();let q=B.attributes,j=$.getAttributes(),X=U.defaultAttributeValues;for(let Y in j){let nt=j[Y];if(nt.location>=0){let D=q[Y];if(D===void 0&&(Y==="instanceMatrix"&&V.instanceMatrix&&(D=V.instanceMatrix),Y==="instanceColor"&&V.instanceColor&&(D=V.instanceColor)),D!==void 0){let ot=D.normalized,At=D.itemSize,Ct=t.get(D);if(Ct===void 0)continue;let Ot=Ct.buffer,Bt=Ct.type,Gt=Ct.bytesPerElement,k=Bt===r.INT||Bt===r.UNSIGNED_INT||D.gpuType===vu;if(D.isInterleavedBufferAttribute){let O=D.data,F=O.stride,N=D.offset;if(O.isInstancedInterleavedBuffer){for(let H=0;H<nt.locationSize;H++)m(nt.location+H,O.meshPerAttribute);V.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let H=0;H<nt.locationSize;H++)g(nt.location+H);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let H=0;H<nt.locationSize;H++)E(nt.location+H,At/nt.locationSize,Bt,ot,F*Gt,(N+At/nt.locationSize*H)*Gt,k)}else{if(D.isInstancedBufferAttribute){for(let O=0;O<nt.locationSize;O++)m(nt.location+O,D.meshPerAttribute);V.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let O=0;O<nt.locationSize;O++)g(nt.location+O);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let O=0;O<nt.locationSize;O++)E(nt.location+O,At/nt.locationSize,Bt,ot,At*Gt,At/nt.locationSize*O*Gt,k)}}else if(X!==void 0){let ot=X[Y];if(ot!==void 0)switch(ot.length){case 2:r.vertexAttrib2fv(nt.location,ot);break;case 3:r.vertexAttrib3fv(nt.location,ot);break;case 4:r.vertexAttrib4fv(nt.location,ot);break;default:r.vertexAttrib1fv(nt.location,ot)}}}}M()}function b(){w();for(let V in n){let U=n[V];for(let $ in U){let B=U[$];for(let q in B){let j=B[q];for(let X in j)h(j[X].object),delete j[X];delete B[q]}}delete n[V]}}function T(V){if(n[V.id]===void 0)return;let U=n[V.id];for(let $ in U){let B=U[$];for(let q in B){let j=B[q];for(let X in j)h(j[X].object),delete j[X];delete B[q]}}delete n[V.id]}function A(V){for(let U in n){let $=n[U];for(let B in $){let q=$[B];if(q[V.id]===void 0)continue;let j=q[V.id];for(let X in j)h(j[X].object),delete j[X];delete q[V.id]}}}function v(V){for(let U in n){let $=n[U],B=V.isInstancedMesh===!0?V.id:0,q=$[B];if(q!==void 0){for(let j in q){let X=q[j];for(let Y in X)h(X[Y].object),delete X[Y];delete q[j]}delete $[B],Object.keys($).length===0&&delete n[U]}}}function w(){R(),o=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function tT(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function eT(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Fi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==li&&A!==Ui&&!v&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ee("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:x,maxSamples:b,samples:T}}function nT(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Hi,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=r.get(d);if(!i||p===null||p.length===0||s&&!g)s?h(null):c();else{let M=s?0:n,E=M*4,x=m.clippingState||null;l.value=x,x=h(p,u,E,f);for(let b=0;b!==E;++b)x[b]=e[b];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,x=f;E!==_;++E,x+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var xa=4,iT=6,rT=20,sT=256,dc=new ms,W_=new Yt,Yp=null,Zp=0,Jp=0,$p=!1,oT=new Z,ao=new Z,Ss=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=oT}=s;Yp=this._renderer.getRenderTarget(),Zp=this._renderer.getActiveCubeFace(),Jp=this._renderer.getActiveMipmapLevel(),$p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yp,Zp,Jp),this._renderer.xr.enabled=$p,t.scissorTest=!1,_a(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===io?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yp=this._renderer.getRenderTarget(),Zp=this._renderer.getActiveCubeFace(),Jp=this._renderer.getActiveMipmapLevel(),$p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Cn,format:Fi,colorSpace:xl,depthBuffer:!1},i=X_(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=X_(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=aT(s)),this._blurMaterial=cT(s,t,e),this._ggxMaterial=lT(s,t,e)}return i}_compileMaterial(t){let e=new fe(new De,t);this._renderer.compile(e,dc)}_sceneToCubeUV(t,e,n,i,s){let l=new ln(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(W_),d.toneMapping=Xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fe(new cs,new An({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(W_),m=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[E],s.y,s.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[E]));let b=this._cubeSize;_a(i,x*b,E>2?b:0,b,b),d.setRenderTarget(i),m&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===_s||t.mapping===io;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q_());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;_a(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,dc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-xa?n-p+xa:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,_a(s,g,m,3*_,2*_),i.setRenderTarget(s),i.render(a,dc),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,_a(t,g,m,3*_,2*_),i.setRenderTarget(t),i.render(a,dc)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-xa?i-this._lodMax+xa:0),u=4*(this._cubeSize-h);_a(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,dc)}};function aT(r){let t=[],e=[],n=r,i=r-xa+1+iT;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,E=m>2?0:-1,x=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];p.set(x,f*u*m);for(let b=0;b<u;b++){let T=h[b*2]*2-1,A=h[b*2+1]*2-1;m===0?ao.set(1,A,T):m===1?ao.set(-T,1,-A):m===2?ao.set(-T,A,1):m===3?ao.set(-1,A,-T):m===4?ao.set(-T,-1,A):ao.set(T,A,-1),ao.toArray(_,(m*u+b)*f)}}let g=new De;g.setAttribute("position",new je(p,f)),g.setAttribute("outputDirection",new je(_,f)),e.push(new fe(g,null)),n>xa&&n--}return{lodMeshes:e,sizeLods:t}}function X_(r,t,e){let n=new cn(r,t,e);return n.texture.mapping=rc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function lT(r,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function cT(r,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:rT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function q_(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Y_(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function lf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var af=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Cl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new cs(5,5,5),s=new We({name:"CubemapFromEquirect",uniforms:oo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Ni});s.uniforms.tEquirect.value=e;let o=new fe(i,s),a=e.minFilter;return e.minFilter===xs&&(e.minFilter=En),new fu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function hT(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===gu||f===_u)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new af(p.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===gu||f===_u,_=f===_s||f===io;if(p||_){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Ss(r)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Ss(r)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===gu?u.mapping=_s:f===_u&&(u.mapping=io),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function uT(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Zs("WebGLRenderer: "+n+" extension not supported."),i}}}function fT(r,t,e,n){let i={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let E=0,x=M.length;E<x;E+=3){let b=M[E+0],T=M[E+1],A=M[E+2];u.push(b,T,T,A,A,b)}}else{let M=p.array;_=p.version;for(let E=0,x=M.length/3-1;E<x;E+=3){let b=E+0,T=E+1,A=E+2;u.push(b,T,T,A,A,b)}}let g=new(p.count>=65535?Tl:bl)(u,1);g.version=_;let m=s.get(d);m&&t.remove(m),s.set(d,g)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function dT(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function pT(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:ne("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function mT(r,t,e){let n=new WeakMap,i=new ke;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),_===!0&&(E=3);let x=a.attributes.position.count*E,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*b*4*d),A=new Sl(T,x,b,d);A.type=Ui,A.needsUpdate=!0;let v=E*4;for(let R=0;R<d;R++){let V=g[R],U=m[R],$=M[R],B=x*b*4*R;for(let q=0;q<V.count;q++){let j=q*v;f===!0&&(i.fromBufferAttribute(V,q),T[B+j+0]=i.x,T[B+j+1]=i.y,T[B+j+2]=i.z,T[B+j+3]=0),p===!0&&(i.fromBufferAttribute(U,q),T[B+j+4]=i.x,T[B+j+5]=i.y,T[B+j+6]=i.z,T[B+j+7]=0),_===!0&&(i.fromBufferAttribute($,q),T[B+j+8]=i.x,T[B+j+9]=i.y,T[B+j+10]=i.z,T[B+j+11]=$.itemSize===4?i.w:1)}}u={count:d,texture:A,size:new dt(x,b)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function gT(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var _T={[Ql]:"LINEAR_TONE_MAPPING",[jl]:"REINHARD_TONE_MAPPING",[tc]:"CINEON_TONE_MAPPING",[Or]:"ACES_FILMIC_TONE_MAPPING",[nc]:"AGX_TONE_MAPPING",[ic]:"NEUTRAL_TONE_MAPPING",[ec]:"CUSTOM_TONE_MAPPING"};function xT(r,t,e,n,i,s){let o=new cn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new De;c.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ue([0,2,0,0,2,0],2));let h=new ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new fe(c,h),u=new ms(-1,1,1,-1,0,1),f=null,p=null,_=!1,g,m=null,M=[],E=!1;this.setSize=function(x,b){o.setSize(x,b),a!==null&&a.setSize(x,b),l!==null&&l.setSize(x,b);for(let T=0;T<M.length;T++){let A=M[T];A.setSize&&A.setSize(x,b)}},this.setEffects=function(x){M=x,E=M.length>0&&M[0].isRenderPass===!0;let b=o.width,T=o.height;M.length>0&&a===null&&(a=new cn(b,T,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(b,T,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let v=M[A];v.setSize&&v.setSize(b,T)}},this.begin=function(x,b){if(_||x.toneMapping===Xi&&M.length===0)return!1;if(m=b,b!==null){let T=b.width,A=b.height;(o.width!==T||o.height!==A)&&this.setSize(T,A)}return E===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=Xi,!0},this.hasRenderPass=function(){return E},this.end=function(x,b){x.toneMapping=g,_=!0;let T=o,A=a;for(let v=0;v<M.length;v++){let w=M[v];w.enabled!==!1&&(w.render(x,A,T,b),w.needsSwap!==!1&&(T=A,A=A===a?l:a))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,h.defines={},me.getTransfer(f)===ye&&(h.defines.SRGB_TRANSFER="");let v=_T[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(m),x.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var dx=new jn,jp=new ls(1,1),px=new Sl,mx=new Yh,gx=new Cl,Z_=[],J_=[],$_=new Float32Array(16),K_=new Float32Array(9),Q_=new Float32Array(4);function Sa(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Z_[i];if(s===void 0&&(s=new Float32Array(i),Z_[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function pn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function mn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function cf(r,t){let e=J_[t];e===void 0&&(e=new Int32Array(t),J_[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function vT(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function yT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;r.uniform2fv(this.addr,t),mn(e,t)}}function ST(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pn(e,t))return;r.uniform3fv(this.addr,t),mn(e,t)}}function MT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;r.uniform4fv(this.addr,t),mn(e,t)}}function bT(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;Q_.set(n),r.uniformMatrix2fv(this.addr,!1,Q_),mn(e,n)}}function TT(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;K_.set(n),r.uniformMatrix3fv(this.addr,!1,K_),mn(e,n)}}function wT(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;$_.set(n),r.uniformMatrix4fv(this.addr,!1,$_),mn(e,n)}}function ET(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function AT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;r.uniform2iv(this.addr,t),mn(e,t)}}function CT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;r.uniform3iv(this.addr,t),mn(e,t)}}function RT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;r.uniform4iv(this.addr,t),mn(e,t)}}function PT(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function LT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;r.uniform2uiv(this.addr,t),mn(e,t)}}function IT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;r.uniform3uiv(this.addr,t),mn(e,t)}}function DT(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;r.uniform4uiv(this.addr,t),mn(e,t)}}function NT(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(jp.compareFunction=e.isReversedDepthBuffer()?rf:nf,s=jp):s=dx,e.setTexture2D(t||s,i)}function UT(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||mx,i)}function FT(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||gx,i)}function OT(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||px,i)}function BT(r){switch(r){case 5126:return vT;case 35664:return yT;case 35665:return ST;case 35666:return MT;case 35674:return bT;case 35675:return TT;case 35676:return wT;case 5124:case 35670:return ET;case 35667:case 35671:return AT;case 35668:case 35672:return CT;case 35669:case 35673:return RT;case 5125:return PT;case 36294:return LT;case 36295:return IT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return OT}}function kT(r,t){r.uniform1fv(this.addr,t)}function zT(r,t){let e=Sa(t,this.size,2);r.uniform2fv(this.addr,e)}function VT(r,t){let e=Sa(t,this.size,3);r.uniform3fv(this.addr,e)}function HT(r,t){let e=Sa(t,this.size,4);r.uniform4fv(this.addr,e)}function GT(r,t){let e=Sa(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function WT(r,t){let e=Sa(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function XT(r,t){let e=Sa(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function qT(r,t){r.uniform1iv(this.addr,t)}function YT(r,t){r.uniform2iv(this.addr,t)}function ZT(r,t){r.uniform3iv(this.addr,t)}function JT(r,t){r.uniform4iv(this.addr,t)}function $T(r,t){r.uniform1uiv(this.addr,t)}function KT(r,t){r.uniform2uiv(this.addr,t)}function QT(r,t){r.uniform3uiv(this.addr,t)}function jT(r,t){r.uniform4uiv(this.addr,t)}function tw(r,t,e){let n=this.cache,i=t.length,s=cf(e,i);pn(n,s)||(r.uniform1iv(this.addr,s),mn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=jp:o=dx;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function ew(r,t,e){let n=this.cache,i=t.length,s=cf(e,i);pn(n,s)||(r.uniform1iv(this.addr,s),mn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||mx,s[o])}function nw(r,t,e){let n=this.cache,i=t.length,s=cf(e,i);pn(n,s)||(r.uniform1iv(this.addr,s),mn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||gx,s[o])}function iw(r,t,e){let n=this.cache,i=t.length,s=cf(e,i);pn(n,s)||(r.uniform1iv(this.addr,s),mn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||px,s[o])}function rw(r){switch(r){case 5126:return kT;case 35664:return zT;case 35665:return VT;case 35666:return HT;case 35674:return GT;case 35675:return WT;case 35676:return XT;case 5124:case 35670:return qT;case 35667:case 35671:return YT;case 35668:case 35672:return ZT;case 35669:case 35673:return JT;case 5125:return $T;case 36294:return KT;case 36295:return QT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return iw}}var tm=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=BT(e.type)}},em=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rw(e.type)}},nm=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Kp=/(\w+)(\])?(\[|\.)?/g;function j_(r,t){r.seq.push(t),r.map[t.id]=t}function sw(r,t,e){let n=r.name,i=n.length;for(Kp.lastIndex=0;;){let s=Kp.exec(n),o=Kp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){j_(e,c===void 0?new tm(a,r,t):new em(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new nm(a),j_(e,d)),e=d}}}var va=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);sw(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function tx(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var ow=37297,aw=0;function lw(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ex=new Qt;function cw(r){me._getMatrix(ex,me.workingColorSpace,r);let t=`mat3( ${ex.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(r)){case vl:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function nx(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+lw(r.getShaderSource(t),a)}else return s}function hw(r,t){let e=cw(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var uw={[Ql]:"Linear",[jl]:"Reinhard",[tc]:"Cineon",[Or]:"ACESFilmic",[nc]:"AgX",[ic]:"Neutral",[ec]:"Custom"};function fw(r,t){let e=uw[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var of=new Z;function dw(){me.getLuminanceCoefficients(of);let r=of.x.toFixed(4),t=of.y.toFixed(4),e=of.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mc).join(`
`)}function mw(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gw(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function mc(r){return r!==""}function ix(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function im(r){return r.replace(_w,vw)}var xw=new Map;function vw(r,t){let e=le[t];if(e===void 0){let n=xw.get(t);if(n!==void 0)e=le[n],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return im(e)}var yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sx(r){return r.replace(yw,Sw)}function Sw(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ox(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Mw={[eo]:"SHADOWMAP_TYPE_PCF",[da]:"SHADOWMAP_TYPE_VSM"};function bw(r){return Mw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Tw={[_s]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[rc]:"ENVMAP_TYPE_CUBE_UV"};function ww(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Tw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ew={[io]:"ENVMAP_MODE_REFRACTION"};function Aw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Ew[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cw={[mu]:"ENVMAP_BLENDING_MULTIPLY",[y_]:"ENVMAP_BLENDING_MIX",[S_]:"ENVMAP_BLENDING_ADD"};function Rw(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Cw[r.combine]||"ENVMAP_BLENDING_NONE"}function Pw(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Lw(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=bw(e),c=ww(e),h=Aw(e),d=Rw(e),u=Pw(e),f=pw(e),p=mw(s),_=i.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(mc).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(mc).join(`
`),m.length>0&&(m+=`
`)):(g=[ox(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mc).join(`
`),m=[ox(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?le.tonemapping_pars_fragment:"",e.toneMapping!==Xi?fw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,hw("linearToOutputTexel",e.outputColorSpace),dw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mc).join(`
`)),o=im(o),o=ix(o,e),o=rx(o,e),a=im(a),a=ix(a,e),a=rx(a,e),o=sx(o),a=sx(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Np?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=M+g+o,x=M+m+a,b=tx(i,i.VERTEX_SHADER,E),T=tx(i,i.FRAGMENT_SHADER,x);i.attachShader(_,b),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(V){if(r.debug.checkShaderErrors){let U=i.getProgramInfoLog(_)||"",$=i.getShaderInfoLog(b)||"",B=i.getShaderInfoLog(T)||"",q=U.trim(),j=$.trim(),X=B.trim(),Y=!0,nt=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,T);else{let D=nx(i,b,"vertex"),ot=nx(i,T,"fragment");ne("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+D+`
`+ot)}else q!==""?ee("WebGLProgram: Program Info Log:",q):(j===""||X==="")&&(nt=!1);nt&&(V.diagnostics={runnable:Y,programLog:q,vertexShader:{log:j,prefix:g},fragmentShader:{log:X,prefix:m}})}i.deleteShader(b),i.deleteShader(T),v=new va(i,_),w=gw(i,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,ow)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=aw++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}var Iw=0,rm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new sm(t),e.set(t,n)),n}},sm=class{constructor(t){this.id=Iw++,this.code=t,this.usedTimes=0}};function Dw(r){return r===ys||r===hc||r===uc}function Nw(r,t,e,n,i,s){let o=new na,a=new rm,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,R,V,U,$){let B=V.fog,q=U.geometry,j=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?V.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=t.get(v.envMap||j,X),nt=Y&&Y.mapping===rc?Y.image.height:null,D=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&ee("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,At=ot!==void 0?ot.length:0,Ct=0;q.morphAttributes.position!==void 0&&(Ct=1),q.morphAttributes.normal!==void 0&&(Ct=2),q.morphAttributes.color!==void 0&&(Ct=3);let Ot,Bt,Gt,k;if(D){let Kt=mr[D];Ot=Kt.vertexShader,Bt=Kt.fragmentShader}else{Ot=v.vertexShader,Bt=v.fragmentShader;let Kt=a.getVertexShaderStage(v),yt=a.getFragmentShaderStage(v);a.update(v,Kt,yt),Gt=Kt.id,k=yt.id}let O=r.getRenderTarget(),F=r.state.buffers.depth.getReversed(),N=U.isInstancedMesh===!0,H=U.isBatchedMesh===!0,it=!!v.map,ht=!!v.matcap,P=!!Y,W=!!v.aoMap,z=!!v.lightMap,L=!!v.bumpMap&&v.wireframe===!1,tt=!!v.normalMap,lt=!!v.displacementMap,gt=!!v.emissiveMap,ft=!!v.metalnessMap,G=!!v.roughnessMap,S=v.anisotropy>0,St=v.clearcoat>0,wt=v.dispersion>0,I=v.retroreflectivity>0,y=v.iridescence>0,J=v.sheen>0,et=v.transmission>0,ct=S&&!!v.anisotropyMap,bt=St&&!!v.clearcoatMap,vt=St&&!!v.clearcoatNormalMap,ut=St&&!!v.clearcoatRoughnessMap,pt=y&&!!v.iridescenceMap,Rt=y&&!!v.iridescenceThicknessMap,kt=J&&!!v.sheenColorMap,Lt=J&&!!v.sheenRoughnessMap,Pt=!!v.specularMap,Tt=!!v.specularColorMap,Jt=!!v.specularIntensityMap,te=et&&!!v.transmissionMap,K=et&&!!v.thicknessMap,Et=!!v.gradientMap,mt=!!v.alphaMap,It=v.alphaTest>0,Nt=!!v.alphaHash,_t=!!v.extensions,Mt=Xi;v.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Mt=r.toneMapping);let xt={shaderID:D,shaderType:v.type,shaderName:v.name,vertexShader:Ot,fragmentShader:Bt,defines:v.defines,customVertexShaderID:Gt,customFragmentShaderID:k,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:H,batchingColor:H&&U._colorsTexture!==null,instancing:N,instancingColor:N&&U.instanceColor!==null,instancingMorph:N&&U.morphTexture!==null,outputColorSpace:O===null?r.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:it,matcap:ht,envMap:P,envMapMode:P&&Y.mapping,envMapCubeUVHeight:nt,aoMap:W,lightMap:z,bumpMap:L,normalMap:tt,displacementMap:lt,emissiveMap:gt,normalMapObjectSpace:tt&&v.normalMapType===T_,normalMapTangentSpace:tt&&v.normalMapType===fc,packedNormalMap:tt&&v.normalMapType===fc&&Dw(v.normalMap.format),metalnessMap:ft,roughnessMap:G,anisotropy:S,anisotropyMap:ct,clearcoat:St,clearcoatMap:bt,clearcoatNormalMap:vt,clearcoatRoughnessMap:ut,dispersion:wt,retroreflection:I,iridescence:y,iridescenceMap:pt,iridescenceThicknessMap:Rt,sheen:J,sheenColorMap:kt,sheenRoughnessMap:Lt,specularMap:Pt,specularColorMap:Tt,specularIntensityMap:Jt,transmission:et,transmissionMap:te,thicknessMap:K,gradientMap:Et,opaque:v.transparent===!1&&v.blending===pa&&v.alphaToCoverage===!1,alphaMap:mt,alphaTest:It,alphaHash:Nt,combine:v.combine,mapUv:it&&p(v.map.channel),aoMapUv:W&&p(v.aoMap.channel),lightMapUv:z&&p(v.lightMap.channel),bumpMapUv:L&&p(v.bumpMap.channel),normalMapUv:tt&&p(v.normalMap.channel),displacementMapUv:lt&&p(v.displacementMap.channel),emissiveMapUv:gt&&p(v.emissiveMap.channel),metalnessMapUv:ft&&p(v.metalnessMap.channel),roughnessMapUv:G&&p(v.roughnessMap.channel),anisotropyMapUv:ct&&p(v.anisotropyMap.channel),clearcoatMapUv:bt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:vt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&p(v.sheenRoughnessMap.channel),specularMapUv:Pt&&p(v.specularMap.channel),specularColorMapUv:Tt&&p(v.specularColorMap.channel),specularIntensityMapUv:Jt&&p(v.specularIntensityMap.channel),transmissionMapUv:te&&p(v.transmissionMap.channel),thicknessMapUv:K&&p(v.thicknessMap.channel),alphaMapUv:mt&&p(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(tt||S),vertexNormals:!!q.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(it||mt),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||q.attributes.normal===void 0&&tt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:F,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Ct,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Mt,decodeVideoTexture:it&&v.map.isVideoTexture===!0&&me.getTransfer(v.map.colorSpace)===ye,decodeVideoTextureEmissive:gt&&v.emissiveMap.isVideoTexture===!0&&me.getTransfer(v.emissiveMap.colorSpace)===ye,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ti,flipSided:v.side===dn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_t&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&v.extensions.multiDraw===!0||H)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function g(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)w.push(R),w.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(m(w,v),M(w,v),w.push(r.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){let w=f[v.type],R;if(w){let V=mr[w];R=kr.clone(V.uniforms)}else R=v.uniforms;return R}function x(v,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new Lw(r,w,v,i),c.push(R),h.set(w,R)),R}function b(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:E,acquireProgram:x,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:A}}function Uw(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Fw(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function ax(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function lx(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,g,m){let M=r[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=o(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=g,M.group=m),t++,M}function l(u,f,p,_,g,m,M){M.reversedDepth===!0&&(g=-g);let E=a(u,f,p,_,g,m);p.transmission>0?n.push(E):p.transparent===!0?i.push(E):e.push(E)}function c(u,f,p,_,g,m){let M=a(u,f,p,_,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||Fw),n.length>1&&n.sort(f||ax),i.length>1&&i.sort(f||ax)}function d(){for(let u=t,f=r.length;u<f;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function Ow(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new lx,r.set(n,[o])):i>=s.length?(o=new lx,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Bw(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new Yt};break;case"SpotLight":e={position:new Z,direction:new Z,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=e,e}}}function kw(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var zw=0;function Vw(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Hw(r){let t=new Bw,e=kw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let i=new Z,s=new Te,o=new Te;function a(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,M=0,E=0,x=0,b=0,T=0,A=0,v=0,w=0,R=0;c.sort(Vw);for(let U=0,$=c.length;U<$;U++){let B=c[U],q=B.color,j=B.intensity,X=B.distance,Y=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ys?Y=B.shadow.map.texture:Y=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=q.r*j,d+=q.g*j,u+=q.b*j;else if(B.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(B.sh.coefficients[nt],j);R++}else if(B.isSunLight){let nt=t.get(B);if(nt.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let D=B.shadow,ot=e.get(B);ot.shadowIntensity=D.intensity,ot.shadowBias=D.bias,ot.shadowNormalBias=D.normalBias,ot.shadowRadius=D.radius,ot.shadowMapSize.copy(D.mapSize).multiply(D.getFrameExtents()),n.sunShadow[p]=ot,n.sunShadowMap[p]=Y;let At=D.getViewportCount();for(let Ct=0;Ct<At;Ct++)n.sunShadowMatrix[_+Ct]=D.getMatrix(Ct),n.sunShadowCascade[_+Ct]=D._cascadeData[Ct];_+=At,p++}n.sun[f]=nt,f++}else if(B.isDirectionalLight){let nt=t.get(B);if(nt.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let D=B.shadow,ot=e.get(B);ot.shadowIntensity=D.intensity,ot.shadowBias=D.bias,ot.shadowNormalBias=D.normalBias,ot.shadowRadius=D.radius,ot.shadowMapSize=D.mapSize,n.directionalShadow[g]=ot,n.directionalShadowMap[g]=Y,n.directionalShadowMatrix[g]=B.shadow.matrix,b++}n.directional[g]=nt,g++}else if(B.isSpotLight){let nt=t.get(B);nt.position.setFromMatrixPosition(B.matrixWorld),nt.color.copy(q).multiplyScalar(j),nt.distance=X,nt.coneCos=Math.cos(B.angle),nt.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),nt.decay=B.decay,n.spot[M]=nt;let D=B.shadow;if(B.map&&(n.spotLightMap[v]=B.map,v++,D.updateMatrices(B),B.castShadow&&w++),n.spotLightMatrix[M]=D.matrix,B.castShadow){let ot=e.get(B);ot.shadowIntensity=D.intensity,ot.shadowBias=D.bias,ot.shadowNormalBias=D.normalBias,ot.shadowRadius=D.radius,ot.shadowMapSize=D.mapSize,n.spotShadow[M]=ot,n.spotShadowMap[M]=Y,A++}M++}else if(B.isRectAreaLight){let nt=t.get(B);nt.color.copy(q).multiplyScalar(j),nt.halfWidth.set(B.width*.5,0,0),nt.halfHeight.set(0,B.height*.5,0),n.rectArea[E]=nt,E++}else if(B.isPointLight){let nt=t.get(B);if(nt.color.copy(B.color).multiplyScalar(B.intensity),nt.distance=B.distance,nt.decay=B.decay,B.castShadow){let D=B.shadow,ot=e.get(B);ot.shadowIntensity=D.intensity,ot.shadowBias=D.bias,ot.shadowNormalBias=D.normalBias,ot.shadowRadius=D.radius,ot.shadowMapSize=D.mapSize,ot.shadowCameraNear=D.camera.near,ot.shadowCameraFar=D.camera.far,n.pointShadow[m]=ot,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=B.shadow.matrix,T++}n.point[m]=nt,m++}else if(B.isHemisphereLight){let nt=t.get(B);nt.skyColor.copy(B.color).multiplyScalar(j),nt.groundColor.copy(B.groundColor).multiplyScalar(j),n.hemi[x]=nt,x++}}E>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let V=n.hash;(V.sunLength!==f||V.directionalLength!==g||V.pointLength!==m||V.spotLength!==M||V.rectAreaLength!==E||V.hemiLength!==x||V.numSunShadows!==p||V.numDirectionalShadows!==b||V.numPointShadows!==T||V.numSpotShadows!==A||V.numSpotMaps!==v||V.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=E,n.point.length=m,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,V.sunLength=f,V.directionalLength=g,V.pointLength=m,V.spotLength=M,V.rectAreaLength=E,V.hemiLength=x,V.numSunShadows=p,V.numDirectionalShadows=b,V.numPointShadows=T,V.numSpotShadows=A,V.numSpotMaps=v,V.numLightProbes=R,n.version=zw++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let x=c[M];if(x.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),d++}else if(x.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),u++}else if(x.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function cx(r){let t=new Hw(r),e=[],n=[],i=[];function s(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Gw(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new cx(r),t.set(i,[a])):s>=o.length?(a=new cx(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qw=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Yw=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],hx=new Te,pc=new Z,Qp=new Z;function Zw(r,t,e){let n=new sa,i=new dt,s=new dt,o=new ke,a=new eu,l=new nu,c={},h=e.maxTextureSize,d={[gs]:dn,[dn]:gs,[ti]:ti},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Ww,fragmentShader:Xw}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new De;p.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new fe(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let m=this.type;this.render=function(T,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===e_&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=eo);let w=r.getRenderTarget(),R=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Ni),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let $=m!==this.type;$&&A.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(q=>q.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,q=T.length;B<q;B++){let j=T[B],X=j.shadow;if(X===void 0){ee("WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let Y=X.getFrameExtents();i.multiply(Y),s.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,X.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,X.mapSize.y=s.y));let nt=r.state.buffers.depth.getReversed();if(X.camera._reversedDepth=nt,X.map===null||$===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===da){if(j.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new cn(i.x,i.y,{format:ys,type:Cn,minFilter:En,magFilter:En,generateMipmaps:!1}),X.map.texture.name=j.name+".shadowMap",X.map.depthTexture=new ls(i.x,i.y,Ui),X.map.depthTexture.name=j.name+".shadowMapDepth",X.map.depthTexture.format=rr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Sn,X.map.depthTexture.magFilter=Sn}else j.isPointLight?(X.map=new af(i.x),X.map.depthTexture=new Zh(i.x,qi)):(X.map=new cn(i.x,i.y),X.map.depthTexture=new ls(i.x,i.y,qi)),X.map.depthTexture.name=j.name+".shadowMap",X.map.depthTexture.format=rr,this.type===eo?(X.map.depthTexture.compareFunction=nt?rf:nf,X.map.depthTexture.minFilter=En,X.map.depthTexture.magFilter=En):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Sn,X.map.depthTexture.magFilter=Sn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);let D=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();j.isPointLight!==!0&&X.updateMatrices(j,v);for(let ot=0;ot<D;ot++){let At=X.getCamera(ot);if(j.isPointLight){let Ct=X.camera,Ot=X.matrix,Bt=j.distance||Ct.far;Bt!==Ct.far&&(Ct.far=Bt,Ct.updateProjectionMatrix()),pc.setFromMatrixPosition(j.matrixWorld),Ct.position.copy(pc),Qp.copy(Ct.position),Qp.add(qw[ot]),Ct.up.copy(Yw[ot]),Ct.lookAt(Qp),Ct.updateMatrixWorld(),Ot.makeTranslation(-pc.x,-pc.y,-pc.z),hx.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),X._frustum.setFromProjectionMatrix(hx,Ct.coordinateSystem,Ct.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,ot),r.clear();else{ot===0&&(r.setRenderTarget(X.map),r.clear());let Ct=X.getViewport(ot);o.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),U.viewport(o)}n=X.getFrustum(ot),x(A,v,At,j,this.type)}X.isPointLightShadow!==!0&&this.type===da&&M(X,v),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(w,R,V)};function M(T,A){let v=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new cn(i.x,i.y,{format:ys,type:Cn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,v,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,v,f,_,null)}function E(T,A,v,w){let R=null,V=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)R=V;else if(R=v.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=R.uuid,$=A.uuid,B=c[U];B===void 0&&(B={},c[U]=B);let q=B[$];q===void 0&&(q=R.clone(),B[$]=q,A.addEventListener("dispose",b)),R=q}if(R.visible=A.visible,R.wireframe=A.wireframe,w===da?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=r.properties.get(R);U.light=v}return R}function x(T,A,v,w,R){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===da)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let $=t.update(T),B=T.material;if(Array.isArray(B)){let q=$.groups;for(let j=0,X=q.length;j<X;j++){let Y=q[j],nt=B[Y.materialIndex];if(nt&&nt.visible){let D=E(T,nt,w,R);T.onBeforeShadow(r,T,A,v,$,D,Y),r.renderBufferDirect(v,null,$,D,T,Y),T.onAfterShadow(r,T,A,v,$,D,Y)}}}else if(B.visible){let q=E(T,B,w,R);T.onBeforeShadow(r,T,A,v,$,q,null),r.renderBufferDirect(v,null,$,q,T,null),T.onAfterShadow(r,T,A,v,$,q,null)}}let U=T.children;for(let $=0,B=U.length;$<B;$++)x(U[$],A,v,w,R)}function b(T){T.target.removeEventListener("dispose",b);for(let v in c){let w=c[v],R=T.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function Jw(r,t){function e(){let K=!1,Et=new ke,mt=null,It=new ke(0,0,0,0);return{setMask:function(Nt){mt!==Nt&&!K&&(r.colorMask(Nt,Nt,Nt,Nt),mt=Nt)},setLocked:function(Nt){K=Nt},setClear:function(Nt,_t,Mt,xt,Kt){Kt===!0&&(Nt*=xt,_t*=xt,Mt*=xt),Et.set(Nt,_t,Mt,xt),It.equals(Et)===!1&&(r.clearColor(Nt,_t,Mt,xt),It.copy(Et))},reset:function(){K=!1,mt=null,It.set(-1,0,0,0)}}}function n(){let K=!1,Et=!1,mt=null,It=null,Nt=null;return{setReversed:function(_t){if(Et!==_t){let Mt=t.get("EXT_clip_control");_t?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),Et=_t;let xt=Nt;Nt=null,this.setClear(xt)}},getReversed:function(){return Et},setTest:function(_t){_t?O(r.DEPTH_TEST):F(r.DEPTH_TEST)},setMask:function(_t){mt!==_t&&!K&&(r.depthMask(_t),mt=_t)},setFunc:function(_t){if(Et&&(_t=F_[_t]),It!==_t){switch(_t){case Oh:r.depthFunc(r.NEVER);break;case Bh:r.depthFunc(r.ALWAYS);break;case kh:r.depthFunc(r.LESS);break;case Ko:r.depthFunc(r.LEQUAL);break;case zh:r.depthFunc(r.EQUAL);break;case Vh:r.depthFunc(r.GEQUAL);break;case Hh:r.depthFunc(r.GREATER);break;case Gh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}It=_t}},setLocked:function(_t){K=_t},setClear:function(_t){Nt!==_t&&(Nt=_t,Et&&(_t=1-_t),r.clearDepth(_t))},reset:function(){K=!1,mt=null,It=null,Nt=null,Et=!1}}}function i(){let K=!1,Et=null,mt=null,It=null,Nt=null,_t=null,Mt=null,xt=null,Kt=null;return{setTest:function(yt){K||(yt?O(r.STENCIL_TEST):F(r.STENCIL_TEST))},setMask:function(yt){Et!==yt&&!K&&(r.stencilMask(yt),Et=yt)},setFunc:function(yt,jt,Wt){(mt!==yt||It!==jt||Nt!==Wt)&&(r.stencilFunc(yt,jt,Wt),mt=yt,It=jt,Nt=Wt)},setOp:function(yt,jt,Wt){(_t!==yt||Mt!==jt||xt!==Wt)&&(r.stencilOp(yt,jt,Wt),_t=yt,Mt=jt,xt=Wt)},setLocked:function(yt){K=yt},setClear:function(yt){Kt!==yt&&(r.clearStencil(yt),Kt=yt)},reset:function(){K=!1,Et=null,mt=null,It=null,Nt=null,_t=null,Mt=null,xt=null,Kt=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,M=null,E=null,x=null,b=null,T=null,A=null,v=new Yt(0,0,0),w=0,R=!1,V=null,U=null,$=null,B=null,q=null,j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,Y=0,nt=r.getParameter(r.VERSION);nt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(nt)[1]),X=Y>=1):nt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),X=Y>=2);let D=null,ot={},At=r.getParameter(r.SCISSOR_BOX),Ct=r.getParameter(r.VIEWPORT),Ot=new ke().fromArray(At),Bt=new ke().fromArray(Ct);function Gt(K,Et,mt,It){let Nt=new Uint8Array(4),_t=r.createTexture();r.bindTexture(K,_t),r.texParameteri(K,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(K,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Mt=0;Mt<mt;Mt++)K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?r.texImage3D(Et,0,r.RGBA,1,1,It,0,r.RGBA,r.UNSIGNED_BYTE,Nt):r.texImage2D(Et+Mt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Nt);return _t}let k={};k[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),k[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),k[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(r.DEPTH_TEST),o.setFunc(Ko),L(!1),tt(Mp),O(r.CULL_FACE),W(Ni);function O(K){h[K]!==!0&&(r.enable(K),h[K]=!0)}function F(K){h[K]!==!1&&(r.disable(K),h[K]=!1)}function N(K,Et){return u[K]!==Et?(r.bindFramebuffer(K,Et),u[K]=Et,K===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Et),K===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Et),!0):!1}function H(K,Et){let mt=p,It=!1;if(K){mt=f.get(Et),mt===void 0&&(mt=[],f.set(Et,mt));let Nt=K.textures;if(mt.length!==Nt.length||mt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Mt=Nt.length;_t<Mt;_t++)mt[_t]=r.COLOR_ATTACHMENT0+_t;mt.length=Nt.length,It=!0}}else mt[0]!==r.BACK&&(mt[0]=r.BACK,It=!0);It&&r.drawBuffers(mt)}function it(K){return _!==K?(r.useProgram(K),_=K,!0):!1}let ht={[no]:r.FUNC_ADD,[i_]:r.FUNC_SUBTRACT,[r_]:r.FUNC_REVERSE_SUBTRACT};ht[s_]=r.MIN,ht[o_]=r.MAX;let P={[a_]:r.ZERO,[l_]:r.ONE,[c_]:r.SRC_COLOR,[wp]:r.SRC_ALPHA,[m_]:r.SRC_ALPHA_SATURATE,[d_]:r.DST_COLOR,[u_]:r.DST_ALPHA,[h_]:r.ONE_MINUS_SRC_COLOR,[Ep]:r.ONE_MINUS_SRC_ALPHA,[p_]:r.ONE_MINUS_DST_COLOR,[f_]:r.ONE_MINUS_DST_ALPHA,[g_]:r.CONSTANT_COLOR,[__]:r.ONE_MINUS_CONSTANT_COLOR,[x_]:r.CONSTANT_ALPHA,[v_]:r.ONE_MINUS_CONSTANT_ALPHA};function W(K,Et,mt,It,Nt,_t,Mt,xt,Kt,yt){if(K===Ni){g===!0&&(F(r.BLEND),g=!1);return}if(g===!1&&(O(r.BLEND),g=!0),K!==n_){if(K!==m||yt!==R){if((M!==no||b!==no)&&(r.blendEquation(r.FUNC_ADD),M=no,b=no),yt)switch(K){case pa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case dr:r.blendFunc(r.ONE,r.ONE);break;case bp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Tp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ne("WebGLState: Invalid blending: ",K);break}else switch(K){case pa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case dr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case bp:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tp:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",K);break}E=null,x=null,T=null,A=null,v.set(0,0,0),w=0,m=K,R=yt}return}Nt=Nt||Et,_t=_t||mt,Mt=Mt||It,(Et!==M||Nt!==b)&&(r.blendEquationSeparate(ht[Et],ht[Nt]),M=Et,b=Nt),(mt!==E||It!==x||_t!==T||Mt!==A)&&(r.blendFuncSeparate(P[mt],P[It],P[_t],P[Mt]),E=mt,x=It,T=_t,A=Mt),(xt.equals(v)===!1||Kt!==w)&&(r.blendColor(xt.r,xt.g,xt.b,Kt),v.copy(xt),w=Kt),m=K,R=!1}function z(K,Et){K.side===ti?F(r.CULL_FACE):O(r.CULL_FACE);let mt=K.side===dn;Et&&(mt=!mt),L(mt),K.blending===pa&&K.transparent===!1?W(Ni):W(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),s.setMask(K.colorWrite);let It=K.stencilWrite;a.setTest(It),It&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),gt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?O(r.SAMPLE_ALPHA_TO_COVERAGE):F(r.SAMPLE_ALPHA_TO_COVERAGE)}function L(K){V!==K&&(K?r.frontFace(r.CW):r.frontFace(r.CCW),V=K)}function tt(K){K!==j0?(O(r.CULL_FACE),K!==U&&(K===Mp?r.cullFace(r.BACK):K===t_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):F(r.CULL_FACE),U=K}function lt(K){K!==$&&(X&&r.lineWidth(K),$=K)}function gt(K,Et,mt){K?(O(r.POLYGON_OFFSET_FILL),(B!==Et||q!==mt)&&(B=Et,q=mt,o.getReversed()&&(Et=-Et),r.polygonOffset(Et,mt))):F(r.POLYGON_OFFSET_FILL)}function ft(K){K?O(r.SCISSOR_TEST):F(r.SCISSOR_TEST)}function G(K){K===void 0&&(K=r.TEXTURE0+j-1),D!==K&&(r.activeTexture(K),D=K)}function S(K,Et,mt){mt===void 0&&(D===null?mt=r.TEXTURE0+j-1:mt=D);let It=ot[mt];It===void 0&&(It={type:void 0,texture:void 0},ot[mt]=It),(It.type!==K||It.texture!==Et)&&(D!==mt&&(r.activeTexture(mt),D=mt),r.bindTexture(K,Et||k[K]),It.type=K,It.texture=Et)}function St(){let K=ot[D];K!==void 0&&K.type!==void 0&&(r.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function wt(){try{r.compressedTexImage2D(...arguments)}catch(K){ne("WebGLState:",K)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(K){ne("WebGLState:",K)}}function y(){try{r.texSubImage2D(...arguments)}catch(K){ne("WebGLState:",K)}}function J(){try{r.texSubImage3D(...arguments)}catch(K){ne("WebGLState:",K)}}function et(){try{r.compressedTexSubImage2D(...arguments)}catch(K){ne("WebGLState:",K)}}function ct(){try{r.compressedTexSubImage3D(...arguments)}catch(K){ne("WebGLState:",K)}}function bt(){try{r.texStorage2D(...arguments)}catch(K){ne("WebGLState:",K)}}function vt(){try{r.texStorage3D(...arguments)}catch(K){ne("WebGLState:",K)}}function ut(){try{r.texImage2D(...arguments)}catch(K){ne("WebGLState:",K)}}function pt(){try{r.texImage3D(...arguments)}catch(K){ne("WebGLState:",K)}}function Rt(K){return d[K]!==void 0?d[K]:r.getParameter(K)}function kt(K,Et){d[K]!==Et&&(r.pixelStorei(K,Et),d[K]=Et)}function Lt(K){Ot.equals(K)===!1&&(r.scissor(K.x,K.y,K.z,K.w),Ot.copy(K))}function Pt(K){Bt.equals(K)===!1&&(r.viewport(K.x,K.y,K.z,K.w),Bt.copy(K))}function Tt(K,Et){let mt=c.get(Et);mt===void 0&&(mt=new WeakMap,c.set(Et,mt));let It=mt.get(K);It===void 0&&(It=r.getUniformBlockIndex(Et,K.name),mt.set(K,It))}function Jt(K,Et){let It=c.get(Et).get(K);l.get(Et)!==It&&(r.uniformBlockBinding(Et,It,K.__bindingPointIndex),l.set(Et,It))}function te(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},D=null,ot={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,M=null,E=null,x=null,b=null,T=null,A=null,v=new Yt(0,0,0),w=0,R=!1,V=null,U=null,$=null,B=null,q=null,Ot.set(0,0,r.canvas.width,r.canvas.height),Bt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:O,disable:F,bindFramebuffer:N,drawBuffers:H,useProgram:it,setBlending:W,setMaterial:z,setFlipSided:L,setCullFace:tt,setLineWidth:lt,setPolygonOffset:gt,setScissorTest:ft,activeTexture:G,bindTexture:S,unbindTexture:St,compressedTexImage2D:wt,compressedTexImage3D:I,texImage2D:ut,texImage3D:pt,pixelStorei:kt,getParameter:Rt,updateUBOMapping:Tt,uniformBlockBinding:Jt,texStorage2D:bt,texStorage3D:vt,texSubImage2D:y,texSubImage3D:J,compressedTexSubImage2D:et,compressedTexSubImage3D:ct,scissor:Lt,viewport:Pt,reset:te}}function $w(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(I){}function _(I,y){return p?new OffscreenCanvas(I,y):yl("canvas")}function g(I,y,J){let et=1,ct=wt(I);if((ct.width>J||ct.height>J)&&(et=J/Math.max(ct.width,ct.height)),et<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let bt=Math.floor(et*ct.width),vt=Math.floor(et*ct.height);u===void 0&&(u=_(bt,vt));let ut=y?_(bt,vt):u;return ut.width=bt,ut.height=vt,ut.getContext("2d").drawImage(I,0,0,bt,vt),ee("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+bt+"x"+vt+")."),ut}else return"data"in I&&ee("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),I;return I}function m(I){return I.generateMipmaps}function M(I){r.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(I,y,J,et,ct,bt=!1){if(I!==null){if(r[I]!==void 0)return r[I];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let vt;et&&(vt=t.get("EXT_texture_norm16"),vt||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=y;if(y===r.RED&&(J===r.FLOAT&&(ut=r.R32F),J===r.HALF_FLOAT&&(ut=r.R16F),J===r.UNSIGNED_BYTE&&(ut=r.R8),J===r.UNSIGNED_SHORT&&vt&&(ut=vt.R16_EXT),J===r.SHORT&&vt&&(ut=vt.R16_SNORM_EXT)),y===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ut=r.R8UI),J===r.UNSIGNED_SHORT&&(ut=r.R16UI),J===r.UNSIGNED_INT&&(ut=r.R32UI),J===r.BYTE&&(ut=r.R8I),J===r.SHORT&&(ut=r.R16I),J===r.INT&&(ut=r.R32I)),y===r.RG&&(J===r.FLOAT&&(ut=r.RG32F),J===r.HALF_FLOAT&&(ut=r.RG16F),J===r.UNSIGNED_BYTE&&(ut=r.RG8),J===r.UNSIGNED_SHORT&&vt&&(ut=vt.RG16_EXT),J===r.SHORT&&vt&&(ut=vt.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ut=r.RG8UI),J===r.UNSIGNED_SHORT&&(ut=r.RG16UI),J===r.UNSIGNED_INT&&(ut=r.RG32UI),J===r.BYTE&&(ut=r.RG8I),J===r.SHORT&&(ut=r.RG16I),J===r.INT&&(ut=r.RG32I)),y===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),J===r.UNSIGNED_INT&&(ut=r.RGB32UI),J===r.BYTE&&(ut=r.RGB8I),J===r.SHORT&&(ut=r.RGB16I),J===r.INT&&(ut=r.RGB32I)),y===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),J===r.UNSIGNED_INT&&(ut=r.RGBA32UI),J===r.BYTE&&(ut=r.RGBA8I),J===r.SHORT&&(ut=r.RGBA16I),J===r.INT&&(ut=r.RGBA32I)),y===r.RGB&&(J===r.UNSIGNED_SHORT&&vt&&(ut=vt.RGB16_EXT),J===r.SHORT&&vt&&(ut=vt.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),y===r.RGBA){let pt=bt?vl:me.getTransfer(ct);J===r.FLOAT&&(ut=r.RGBA32F),J===r.HALF_FLOAT&&(ut=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ut=pt===ye?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&vt&&(ut=vt.RGBA16_EXT),J===r.SHORT&&vt&&(ut=vt.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function b(I,y){let J;return I?y===null||y===qi||y===ga?J=r.DEPTH24_STENCIL8:y===Ui?J=r.DEPTH32F_STENCIL8:y===ma&&(J=r.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===qi||y===ga?J=r.DEPTH_COMPONENT24:y===Ui?J=r.DEPTH_COMPONENT32F:y===ma&&(J=r.DEPTH_COMPONENT16),J}function T(I,y){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Sn&&I.minFilter!==En?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function A(I){let y=I.target;y.removeEventListener("dispose",A),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function v(I){let y=I.target;y.removeEventListener("dispose",v),V(y)}function w(I){let y=n.get(I);if(y.__webglInit===void 0)return;let J=I.source,et=f.get(J);if(et){let ct=et[y.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&R(I),Object.keys(et).length===0&&f.delete(J)}n.remove(I)}function R(I){let y=n.get(I);r.deleteTexture(y.__webglTexture);let J=I.source,et=f.get(J);delete et[y.__cacheKey],o.memory.textures--}function V(I){let y=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(y.__webglFramebuffer[et]))for(let ct=0;ct<y.__webglFramebuffer[et].length;ct++)r.deleteFramebuffer(y.__webglFramebuffer[et][ct]);else r.deleteFramebuffer(y.__webglFramebuffer[et]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[et])}else{if(Array.isArray(y.__webglFramebuffer))for(let et=0;et<y.__webglFramebuffer.length;et++)r.deleteFramebuffer(y.__webglFramebuffer[et]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let et=0;et<y.__webglColorRenderbuffer.length;et++)y.__webglColorRenderbuffer[et]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[et]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let J=I.textures;for(let et=0,ct=J.length;et<ct;et++){let bt=n.get(J[et]);bt.__webglTexture&&(r.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(J[et])}n.remove(I)}let U=0;function $(){U=0}function B(){return U}function q(I){U=I}function j(){let I=U;return I>=i.maxTextures&&ee("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,I}function X(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function Y(I,y){let J=n.get(I);if(I.isVideoTexture&&S(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&J.__version!==I.version){let et=I.image;if(et===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{F(J,I,y);return}}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+y)}function nt(I,y){let J=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){F(J,I,y);return}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+y)}function D(I,y){let J=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){F(J,I,y);return}e.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+y)}function ot(I,y){let J=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&J.__version!==I.version){N(J,I,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+y)}let At={[Nr]:r.REPEAT,[Di]:r.CLAMP_TO_EDGE,[Qo]:r.MIRRORED_REPEAT},Ct={[Sn]:r.NEAREST,[M_]:r.NEAREST_MIPMAP_NEAREST,[sc]:r.NEAREST_MIPMAP_LINEAR,[En]:r.LINEAR,[xu]:r.LINEAR_MIPMAP_NEAREST,[xs]:r.LINEAR_MIPMAP_LINEAR},Ot={[E_]:r.NEVER,[L_]:r.ALWAYS,[A_]:r.LESS,[nf]:r.LEQUAL,[C_]:r.EQUAL,[rf]:r.GEQUAL,[R_]:r.GREATER,[P_]:r.NOTEQUAL};function Bt(I,y){if(y.type===Ui&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===En||y.magFilter===xu||y.magFilter===sc||y.magFilter===xs||y.minFilter===En||y.minFilter===xu||y.minFilter===sc||y.minFilter===xs)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,At[y.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,At[y.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,At[y.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Ct[y.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Ct[y.minFilter]),y.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Ot[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Sn||y.minFilter!==sc&&y.minFilter!==xs||y.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Gt(I,y){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",A));let et=y.source,ct=f.get(et);ct===void 0&&(ct={},f.set(et,ct));let bt=X(y);if(bt!==I.__cacheKey){ct[bt]===void 0&&(ct[bt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ct[bt].usedTimes++;let vt=ct[I.__cacheKey];vt!==void 0&&(ct[I.__cacheKey].usedTimes--,vt.usedTimes===0&&R(y)),I.__cacheKey=bt,I.__webglTexture=ct[bt].texture}return J}function k(I,y,J){return Math.floor(Math.floor(I/J)/y)}function O(I,y,J,et){let bt=I.updateRanges;if(bt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,J,et,y.data);else{bt.sort((kt,Lt)=>kt.start-Lt.start);let vt=0;for(let kt=1;kt<bt.length;kt++){let Lt=bt[vt],Pt=bt[kt],Tt=Lt.start+Lt.count,Jt=k(Pt.start,y.width,4),te=k(Lt.start,y.width,4);Pt.start<=Tt+1&&Jt===te&&k(Pt.start+Pt.count-1,y.width,4)===Jt?Lt.count=Math.max(Lt.count,Pt.start+Pt.count-Lt.start):(++vt,bt[vt]=Pt)}bt.length=vt+1;let ut=e.getParameter(r.UNPACK_ROW_LENGTH),pt=e.getParameter(r.UNPACK_SKIP_PIXELS),Rt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let kt=0,Lt=bt.length;kt<Lt;kt++){let Pt=bt[kt],Tt=Math.floor(Pt.start/4),Jt=Math.ceil(Pt.count/4),te=Tt%y.width,K=Math.floor(Tt/y.width),Et=Jt,mt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,te),e.pixelStorei(r.UNPACK_SKIP_ROWS,K),e.texSubImage2D(r.TEXTURE_2D,0,te,K,Et,mt,J,et,y.data)}I.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,ut),e.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(r.UNPACK_SKIP_ROWS,Rt)}}function F(I,y,J){let et=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(et=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(et=r.TEXTURE_3D);let ct=Gt(I,y),bt=y.source;e.bindTexture(et,I.__webglTexture,r.TEXTURE0+J);let vt=n.get(bt);if(bt.version!==vt.__version||ct===!0){if(e.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap!="undefined"&&y.image instanceof ImageBitmap)===!1){let mt=me.getPrimaries(me.workingColorSpace),It=y.colorSpace===Br?null:me.getPrimaries(y.colorSpace),Nt=y.colorSpace===Br||mt===It?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let pt=g(y.image,!1,i.maxTextureSize);pt=St(y,pt);let Rt=s.convert(y.format,y.colorSpace),kt=s.convert(y.type),Lt=x(y.internalFormat,Rt,kt,y.normalized,y.colorSpace,y.isVideoTexture);Bt(et,y);let Pt,Tt=y.mipmaps,Jt=y.isVideoTexture!==!0,te=vt.__version===void 0||ct===!0,K=bt.dataReady,Et=T(y,pt);if(y.isDepthTexture)Lt=b(y.format===vs,y.type),te&&(Jt?e.texStorage2D(r.TEXTURE_2D,1,Lt,pt.width,pt.height):e.texImage2D(r.TEXTURE_2D,0,Lt,pt.width,pt.height,0,Rt,kt,null));else if(y.isDataTexture)if(Tt.length>0){Jt&&te&&e.texStorage2D(r.TEXTURE_2D,Et,Lt,Tt[0].width,Tt[0].height);for(let mt=0,It=Tt.length;mt<It;mt++)Pt=Tt[mt],Jt?K&&e.texSubImage2D(r.TEXTURE_2D,mt,0,0,Pt.width,Pt.height,Rt,kt,Pt.data):e.texImage2D(r.TEXTURE_2D,mt,Lt,Pt.width,Pt.height,0,Rt,kt,Pt.data);y.generateMipmaps=!1}else Jt?(te&&e.texStorage2D(r.TEXTURE_2D,Et,Lt,pt.width,pt.height),K&&O(y,pt,Rt,kt)):e.texImage2D(r.TEXTURE_2D,0,Lt,pt.width,pt.height,0,Rt,kt,pt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Jt&&te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,Lt,Tt[0].width,Tt[0].height,pt.depth);for(let mt=0,It=Tt.length;mt<It;mt++)if(Pt=Tt[mt],y.format!==Fi)if(Rt!==null)if(Jt){if(K)if(y.layerUpdates.size>0){let Nt=Vp(Pt.width,Pt.height,y.format,y.type);for(let _t of y.layerUpdates){let Mt=Pt.data.subarray(_t*Nt/Pt.data.BYTES_PER_ELEMENT,(_t+1)*Nt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,_t,Pt.width,Pt.height,1,Rt,Mt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Pt.width,Pt.height,pt.depth,Rt,Pt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,Lt,Pt.width,Pt.height,pt.depth,0,Pt.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?K&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Pt.width,Pt.height,pt.depth,Rt,kt,Pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,mt,Lt,Pt.width,Pt.height,pt.depth,0,Rt,kt,Pt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Jt&&te&&e.texStorage2D(r.TEXTURE_2D,Et,Lt,Tt[0].width,Tt[0].height);for(let mt=0,It=Tt.length;mt<It;mt++)Pt=Tt[mt],y.format!==Fi?Rt!==null?Jt?K&&e.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,Pt.width,Pt.height,Rt,Pt.data):e.compressedTexImage2D(r.TEXTURE_2D,mt,Lt,Pt.width,Pt.height,0,Pt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?K&&e.texSubImage2D(r.TEXTURE_2D,mt,0,0,Pt.width,Pt.height,Rt,kt,Pt.data):e.texImage2D(r.TEXTURE_2D,mt,Lt,Pt.width,Pt.height,0,Rt,kt,Pt.data)}else if(y.isDataArrayTexture)if(Jt){if(te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Et,Lt,pt.width,pt.height,pt.depth),K)if(y.layerUpdates.size>0){let mt=Vp(pt.width,pt.height,y.format,y.type);for(let It of y.layerUpdates){let Nt=pt.data.subarray(It*mt/pt.data.BYTES_PER_ELEMENT,(It+1)*mt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,It,pt.width,pt.height,1,Rt,kt,Nt)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Rt,kt,pt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,pt.width,pt.height,pt.depth,0,Rt,kt,pt.data);else if(y.isData3DTexture)Jt?(te&&e.texStorage3D(r.TEXTURE_3D,Et,Lt,pt.width,pt.height,pt.depth),K&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Rt,kt,pt.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,pt.width,pt.height,pt.depth,0,Rt,kt,pt.data);else if(y.isFramebufferTexture){if(te)if(Jt)e.texStorage2D(r.TEXTURE_2D,Et,Lt,pt.width,pt.height);else{let mt=pt.width,It=pt.height;for(let Nt=0;Nt<Et;Nt++)e.texImage2D(r.TEXTURE_2D,Nt,Lt,mt,It,0,Rt,kt,null),mt>>=1,It>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){let mt=r.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),pt.parentNode!==mt){mt.appendChild(pt),d.add(y),mt.onpaint=It=>{let Nt=It.changedElements;for(let _t of d)Nt.includes(_t.image)&&(_t.needsUpdate=!0)},mt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,pt);else{let Nt=r.RGBA,_t=r.RGBA,Mt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Nt,_t,Mt,pt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Jt&&te){let mt=wt(Tt[0]);e.texStorage2D(r.TEXTURE_2D,Et,Lt,mt.width,mt.height)}for(let mt=0,It=Tt.length;mt<It;mt++)Pt=Tt[mt],Jt?K&&e.texSubImage2D(r.TEXTURE_2D,mt,0,0,Rt,kt,Pt):e.texImage2D(r.TEXTURE_2D,mt,Lt,Rt,kt,Pt);y.generateMipmaps=!1}else if(Jt){if(te){let mt=wt(pt);e.texStorage2D(r.TEXTURE_2D,Et,Lt,mt.width,mt.height)}K&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,kt,pt)}else e.texImage2D(r.TEXTURE_2D,0,Lt,Rt,kt,pt);m(y)&&M(et),vt.__version=bt.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function N(I,y,J){if(y.image.length!==6)return;let et=Gt(I,y),ct=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+J);let bt=n.get(ct);if(ct.version!==bt.__version||et===!0){e.activeTexture(r.TEXTURE0+J);let vt=me.getPrimaries(me.workingColorSpace),ut=y.colorSpace===Br?null:me.getPrimaries(y.colorSpace),pt=y.colorSpace===Br||vt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Rt=y.isCompressedTexture||y.image[0].isCompressedTexture,kt=y.image[0]&&y.image[0].isDataTexture,Lt=[];for(let _t=0;_t<6;_t++)!Rt&&!kt?Lt[_t]=g(y.image[_t],!0,i.maxCubemapSize):Lt[_t]=kt?y.image[_t].image:y.image[_t],Lt[_t]=St(y,Lt[_t]);let Pt=Lt[0],Tt=s.convert(y.format,y.colorSpace),Jt=s.convert(y.type),te=x(y.internalFormat,Tt,Jt,y.normalized,y.colorSpace),K=y.isVideoTexture!==!0,Et=bt.__version===void 0||et===!0,mt=ct.dataReady,It=T(y,Pt);Bt(r.TEXTURE_CUBE_MAP,y);let Nt;if(Rt){K&&Et&&e.texStorage2D(r.TEXTURE_CUBE_MAP,It,te,Pt.width,Pt.height);for(let _t=0;_t<6;_t++){Nt=Lt[_t].mipmaps;for(let Mt=0;Mt<Nt.length;Mt++){let xt=Nt[Mt];y.format!==Fi?Tt!==null?K?mt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt,0,0,xt.width,xt.height,Tt,xt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt,te,xt.width,xt.height,0,xt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt,0,0,xt.width,xt.height,Tt,Jt,xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt,te,xt.width,xt.height,0,Tt,Jt,xt.data)}}}else{if(Nt=y.mipmaps,K&&Et){Nt.length>0&&It++;let _t=wt(Lt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,It,te,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(kt){K?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Lt[_t].width,Lt[_t].height,Tt,Jt,Lt[_t].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,te,Lt[_t].width,Lt[_t].height,0,Tt,Jt,Lt[_t].data);for(let Mt=0;Mt<Nt.length;Mt++){let Kt=Nt[Mt].image[_t].image;K?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt+1,0,0,Kt.width,Kt.height,Tt,Jt,Kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt+1,te,Kt.width,Kt.height,0,Tt,Jt,Kt.data)}}else{K?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Tt,Jt,Lt[_t]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,te,Tt,Jt,Lt[_t]);for(let Mt=0;Mt<Nt.length;Mt++){let xt=Nt[Mt];K?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt+1,0,0,Tt,Jt,xt.image[_t]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Mt+1,te,Tt,Jt,xt.image[_t])}}}m(y)&&M(r.TEXTURE_CUBE_MAP),bt.__version=ct.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function H(I,y,J,et,ct,bt){let vt=s.convert(J.format,J.colorSpace),ut=s.convert(J.type),pt=x(J.internalFormat,vt,ut,J.normalized,J.colorSpace),Rt=n.get(y),kt=n.get(J);if(kt.__renderTarget=y,!Rt.__hasExternalTextures){let Lt=Math.max(1,y.width>>bt),Pt=Math.max(1,y.height>>bt);ct===r.TEXTURE_3D||ct===r.TEXTURE_2D_ARRAY?e.texImage3D(ct,bt,pt,Lt,Pt,y.depth,0,vt,ut,null):e.texImage2D(ct,bt,pt,Lt,Pt,0,vt,ut,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),G(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,ct,kt.__webglTexture,0,ft(y)):(ct===r.TEXTURE_2D||ct>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,et,ct,kt.__webglTexture,bt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function it(I,y,J){if(r.bindRenderbuffer(r.RENDERBUFFER,I),y.depthBuffer){let et=y.depthTexture,ct=et&&et.isDepthTexture?et.type:null,bt=b(y.stencilBuffer,ct),vt=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;G(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft(y),bt,y.width,y.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft(y),bt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,bt,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,I)}else{let et=y.textures;for(let ct=0;ct<et.length;ct++){let bt=et[ct],vt=s.convert(bt.format,bt.colorSpace),ut=s.convert(bt.type),pt=x(bt.internalFormat,vt,ut,bt.normalized,bt.colorSpace);G(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft(y),pt,y.width,y.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft(y),pt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,pt,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ht(I,y,J){let et=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(y.depthTexture);if(ct.__renderTarget=y,(!ct.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),et){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),ct.__webglTexture===void 0){ct.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,ct.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,y.depthTexture);let Rt=s.convert(y.depthTexture.format),kt=s.convert(y.depthTexture.type),Lt;y.depthTexture.format===rr?Lt=r.DEPTH_COMPONENT24:y.depthTexture.format===vs&&(Lt=r.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Lt,y.width,y.height,0,Rt,kt,null)}}else Y(y.depthTexture,0);let bt=ct.__webglTexture,vt=ft(y),ut=et?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,pt=y.depthTexture.format===vs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===rr)G(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,ut,bt,0,vt):r.framebufferTexture2D(r.FRAMEBUFFER,pt,ut,bt,0);else if(y.depthTexture.format===vs)G(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,ut,bt,0,vt):r.framebufferTexture2D(r.FRAMEBUFFER,pt,ut,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function P(I){let y=n.get(I),J=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let et=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),et){let ct=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,et.removeEventListener("dispose",ct)};et.addEventListener("dispose",ct),y.__depthDisposeCallback=ct}y.__boundDepthTexture=et}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(J)for(let et=0;et<6;et++)ht(y.__webglFramebuffer[et],I,et);else{let et=I.texture.mipmaps;et&&et.length>0?ht(y.__webglFramebuffer[0],I,0):ht(y.__webglFramebuffer,I,0)}else if(J){y.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[et]),y.__webglDepthbuffer[et]===void 0)y.__webglDepthbuffer[et]=r.createRenderbuffer(),it(y.__webglDepthbuffer[et],I,!1);else{let ct=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=y.__webglDepthbuffer[et];r.bindRenderbuffer(r.RENDERBUFFER,bt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,bt)}}else{let et=I.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),it(y.__webglDepthbuffer,I,!1);else{let ct=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,bt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,bt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function W(I,y,J){let et=n.get(I);y!==void 0&&H(et.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&P(I)}function z(I){let y=I.texture,J=n.get(I),et=n.get(y);I.addEventListener("dispose",v);let ct=I.textures,bt=I.isWebGLCubeRenderTarget===!0,vt=ct.length>1;if(vt||(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=y.version,o.memory.textures++),bt){J.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){J.__webglFramebuffer[ut]=[];for(let pt=0;pt<y.mipmaps.length;pt++)J.__webglFramebuffer[ut][pt]=r.createFramebuffer()}else J.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){J.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)J.__webglFramebuffer[ut]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(vt)for(let ut=0,pt=ct.length;ut<pt;ut++){let Rt=n.get(ct[ut]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&G(I)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ut=0;ut<ct.length;ut++){let pt=ct[ut];J.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[ut]);let Rt=s.convert(pt.format,pt.colorSpace),kt=s.convert(pt.type),Lt=x(pt.internalFormat,Rt,kt,pt.normalized,pt.colorSpace,I.isXRRenderTarget===!0),Pt=ft(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,Lt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,J.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),it(J.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(bt){e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)H(J.__webglFramebuffer[ut][pt],I,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,pt);else H(J.__webglFramebuffer[ut],I,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(y)&&M(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ut=0,pt=ct.length;ut<pt;ut++){let Rt=ct[ut],kt=n.get(Rt),Lt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Lt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Lt,kt.__webglTexture),Bt(Lt,Rt),H(J.__webglFramebuffer,I,Rt,r.COLOR_ATTACHMENT0+ut,Lt,0),m(Rt)&&M(Lt)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ut=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ut,et.__webglTexture),Bt(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)H(J.__webglFramebuffer[pt],I,y,r.COLOR_ATTACHMENT0,ut,pt);else H(J.__webglFramebuffer,I,y,r.COLOR_ATTACHMENT0,ut,0);m(y)&&M(ut),e.unbindTexture()}I.depthBuffer&&P(I)}function L(I){let y=I.textures;for(let J=0,et=y.length;J<et;J++){let ct=y[J];if(m(ct)){let bt=E(I),vt=n.get(ct).__webglTexture;e.bindTexture(bt,vt),M(bt),e.unbindTexture()}}}let tt=[],lt=[];function gt(I){if(I.samples>0){if(G(I)===!1){let y=I.textures,J=I.width,et=I.height,ct=r.COLOR_BUFFER_BIT,bt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=n.get(I),ut=y.length>1;if(ut)for(let Rt=0;Rt<y.length;Rt++)e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let pt=I.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Rt=0;Rt<y.length;Rt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ct|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ct|=r.STENCIL_BUFFER_BIT)),ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,vt.__webglColorRenderbuffer[Rt]);let kt=n.get(y[Rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,kt,0)}r.blitFramebuffer(0,0,J,et,0,0,J,et,ct,r.NEAREST),l===!0&&(tt.length=0,lt.length=0,tt.push(r.COLOR_ATTACHMENT0+Rt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(tt.push(bt),lt.push(bt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,lt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let Rt=0;Rt<y.length;Rt++){e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,vt.__webglColorRenderbuffer[Rt]);let kt=n.get(y[Rt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,kt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let y=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function ft(I){return Math.min(i.maxSamples,I.samples)}function G(I){let y=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function S(I){let y=o.render.frame;h.get(I)!==y&&(h.set(I,y),I.update())}function St(I,y){let J=I.colorSpace,et=I.format,ct=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==xl&&J!==Br&&(me.getTransfer(J)===ye?(et!==Fi||ct!==li)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",J)),y}function wt(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=$,this.getTextureUnits=B,this.setTextureUnits=q,this.setTexture2D=Y,this.setTexture2DArray=nt,this.setTexture3D=D,this.setTextureCube=ot,this.rebindTextures=W,this.setupRenderTarget=z,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=H,this.useMultisampledRTT=G,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Kw(r,t){function e(n,i=Br){let s,o=me.getTransfer(i);if(n===li)return r.UNSIGNED_BYTE;if(n===yu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Su)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Pp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Lp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cp)return r.BYTE;if(n===Rp)return r.SHORT;if(n===ma)return r.UNSIGNED_SHORT;if(n===vu)return r.INT;if(n===qi)return r.UNSIGNED_INT;if(n===Ui)return r.FLOAT;if(n===Cn)return r.HALF_FLOAT;if(n===Ip)return r.ALPHA;if(n===Dp)return r.RGB;if(n===Fi)return r.RGBA;if(n===rr)return r.DEPTH_COMPONENT;if(n===vs)return r.DEPTH_STENCIL;if(n===Mu)return r.RED;if(n===bu)return r.RED_INTEGER;if(n===ys)return r.RG;if(n===Tu)return r.RG_INTEGER;if(n===wu)return r.RGBA_INTEGER;if(n===oc||n===ac||n===lc||n===cc)if(o===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===oc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===oc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ac)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eu||n===Au||n===Cu||n===Ru)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Eu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Au)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ru)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pu||n===Lu||n===Iu||n===Du||n===Nu||n===hc||n===Uu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pu||n===Lu)return o===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Iu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Du)return s.COMPRESSED_R11_EAC;if(n===Nu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===hc)return s.COMPRESSED_RG11_EAC;if(n===Uu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fu||n===Ou||n===Bu||n===ku||n===zu||n===Vu||n===Hu||n===Gu||n===Wu||n===Xu||n===qu||n===Yu||n===Zu||n===Ju)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ou)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ku)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ju)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$u||n===Ku||n===Qu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===$u)return o===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ku)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ju||n===tf||n===uc||n===ef)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ju)return s.COMPRESSED_RED_RGTC1_EXT;if(n===tf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ef)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ga?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Qw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,om=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Rl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:Qw,fragmentShader:jw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},am=class extends sr{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding!="undefined",g=new om,m={},M=e.getContextAttributes(),E=null,x=null,b=[],T=[],A=new dt,v=null,w=null,R=new ln;R.viewport=new ke;let V=new ln;V.viewport=new ke;let U=[R,V],$=new du,B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let O=b[k];return O===void 0&&(O=new ia,b[k]=O),O.getTargetRaySpace()},this.getControllerGrip=function(k){let O=b[k];return O===void 0&&(O=new ia,b[k]=O),O.getGripSpace()},this.getHand=function(k){let O=b[k];return O===void 0&&(O=new ia,b[k]=O),O.getHandSpace()};function j(k){let O=T.indexOf(k.inputSource);if(O===-1)return;let F=b[O];F!==void 0&&(F.update(k.inputSource,k.frame,c||o),F.dispatchEvent({type:k.type,data:k.inputSource}))}function X(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",Y);for(let k=0;k<b.length;k++){let O=T[k];O!==null&&(T[k]=null,b[k].disconnect(O))}B=null,q=null,g.reset();for(let k in m)delete m[k];if(t.setRenderTarget(E),f=null,u=null,d=null,i=null,x=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),w!==null){let k=w.camera;k.fov=w.fov,k.zoom=w.zoom,k.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",X),i.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let F=null,N=null,H=null;M.depth&&(H=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=M.stencil?vs:rr,N=M.stencil?ga:qi);let it={colorFormat:e.RGBA8,depthFormat:H,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(it),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new cn(u.textureWidth,u.textureHeight,{format:Fi,type:li,depthTexture:new ls(u.textureWidth,u.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let F={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,F),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new cn(f.framebufferWidth,f.framebufferHeight,{format:Fi,type:li,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(k){for(let O=0;O<k.removed.length;O++){let F=k.removed[O],N=T.indexOf(F);N>=0&&(T[N]=null,b[N].disconnect(F))}for(let O=0;O<k.added.length;O++){let F=k.added[O],N=T.indexOf(F);if(N===-1){for(let it=0;it<b.length;it++)if(it>=T.length){T.push(F),N=it;break}else if(T[it]===null){T[it]=F,N=it;break}if(N===-1)break}let H=b[N];H&&H.connect(F)}}let nt=new Z,D=new Z;function ot(k,O,F){nt.setFromMatrixPosition(O.matrixWorld),D.setFromMatrixPosition(F.matrixWorld);let N=nt.distanceTo(D),H=O.projectionMatrix.elements,it=F.projectionMatrix.elements,ht=H[14]/(H[10]-1),P=H[14]/(H[10]+1),W=(H[9]+1)/H[5],z=(H[9]-1)/H[5],L=(H[8]-1)/H[0],tt=(it[8]+1)/it[0],lt=ht*L,gt=ht*tt,ft=N/(-L+tt),G=ft*-L;if(O.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(G),k.translateZ(ft),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),H[10]===-1)k.projectionMatrix.copy(O.projectionMatrix),k.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{let S=ht+ft,St=P+ft,wt=lt-G,I=gt+(N-G),y=W*P/St*S,J=z*P/St*S;k.projectionMatrix.makePerspective(wt,I,y,J,S,St),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function At(k,O){O===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(O.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let O=k.near,F=k.far;g.texture!==null&&(g.depthNear>0&&(O=g.depthNear),g.depthFar>0&&(F=g.depthFar)),$.near=V.near=R.near=O,$.far=V.far=R.far=F,(B!==$.near||q!==$.far)&&(i.updateRenderState({depthNear:$.near,depthFar:$.far}),B=$.near,q=$.far),$.layers.mask=k.layers.mask|6,R.layers.mask=$.layers.mask&-5,V.layers.mask=$.layers.mask&-3;let N=k.parent,H=$.cameras;At($,N);for(let it=0;it<H.length;it++)At(H[it],N);H.length===2?ot($,R,V):$.projectionMatrix.copy(R.projectionMatrix),w===null&&k.isPerspectiveCamera&&(w={camera:k,fov:k.fov,zoom:k.zoom}),Ct(k,$,N)};function Ct(k,O,F){F===null?k.matrix.copy(O.matrixWorld):(k.matrix.copy(F.matrixWorld),k.matrix.invert(),k.matrix.multiply(O.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(O.projectionMatrix),k.projectionMatrixInverse.copy(O.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Js*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh($)},this.getCameraTexture=function(k){return m[k]};let Ot=null;function Bt(k,O){if(h=O.getViewerPose(c||o),p=O,h!==null){let F=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let N=!1;F.length!==$.cameras.length&&($.cameras.length=0,N=!0);for(let P=0;P<F.length;P++){let W=F[P],z=null;if(f!==null)z=f.getViewport(W);else{let tt=d.getViewSubImage(u,W);z=tt.viewport,P===0&&(t.setRenderTargetTextures(x,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(x))}let L=U[P];L===void 0&&(L=new ln,L.layers.enable(P),L.viewport=new ke,U[P]=L),L.matrix.fromArray(W.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(W.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(z.x,z.y,z.width,z.height),P===0&&($.matrix.copy(L.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),N===!0&&$.cameras.push(L)}let H=i.enabledFeatures;if(H&&H.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let P=d.getDepthInformation(F[0]);P&&P.isValid&&P.texture&&g.init(P,i.renderState)}if(H&&H.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let P=0;P<F.length;P++){let W=F[P].camera;if(W){let z=m[W];z||(z=new Rl,m[W]=z);let L=d.getCameraImage(W);z.sourceTexture=L}}}}for(let F=0;F<b.length;F++){let N=T[F],H=b[F];N!==null&&H!==void 0&&H.update(N,O,c||o)}Ot&&Ot(k,O),O.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:O}),p=null}let Gt=new ux;Gt.setAnimationLoop(Bt),this.setAnimationLoop=function(k){Ot=k},this.dispose=function(){}}},tE=new Te,_x=new Qt;_x.set(-1,0,0,0,1,0,0,0,1);function eE(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Bp(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,E,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),E=M.envMap,x=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(tE.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(_x),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=E*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function nE(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){let T=b.program;n.uniformBlockBinding(x,T)}function c(x,b){let T=i[x.id];T===void 0&&(g(x),T=h(x),i[x.id]=T,x.addEventListener("dispose",M));let A=b.program;n.updateUBOMapping(x,A);let v=t.render.frame;s[x.id]!==v&&(u(x),s[x.id]=v)}function h(x){let b=d();x.__bindingPointIndex=b;let T=r.createBuffer(),A=x.__size,v=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,A,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,T),T}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let b=i[x.id],T=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let v=0,w=T.length;v<w;v++){let R=T[v];if(Array.isArray(R))for(let V=0,U=R.length;V<U;V++)f(R[V],v,V,A);else f(R,v,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,b,T,A){if(_(x,b,T,A)===!0){let v=x.__offset,w=x.value;if(Array.isArray(w)){let R=0;for(let V=0;V<w.length;V++){let U=w[V],$=m(U);p(U,x.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,x.__data)}}function p(x,b,T){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,T)}function _(x,b,T,A){let v=x.value,w=b+"_"+T;if(A[w]===void 0)return typeof v=="number"||typeof v=="boolean"?A[w]=v:ArrayBuffer.isView(v)?A[w]=v.slice():A[w]=v.clone(),!0;{let R=A[w];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(x){let b=x.uniforms,T=0,A=16;for(let w=0,R=b.length;w<R;w++){let V=Array.isArray(b[w])?b[w]:[b[w]];for(let U=0,$=V.length;U<$;U++){let B=V[U],q=Array.isArray(B.value)?B.value:[B.value];for(let j=0,X=q.length;j<X;j++){let Y=q[j],nt=m(Y),D=T%A,ot=D%nt.boundary,At=D+ot;T+=ot,At!==0&&A-At<nt.storage&&(T+=A-At),B.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=nt.storage}}}let v=T%A;return v>0&&(T+=A-v),x.__size=T,x.__cache={},this}function m(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",x),b}function M(x){let b=x.target;b.removeEventListener("dispose",M);let T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function E(){for(let x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:E}}var iE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pr=null;function rE(){return pr===null&&(pr=new wl(iE,16,16,ys,Cn),pr.name="DFG_LUT",pr.minFilter=En,pr.magFilter=En,pr.wrapS=Di,pr.wrapT=Di,pr.generateMipmaps=!1,pr.needsUpdate=!0),pr}var ya=class{constructor(t={}){let{canvas:e=D_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=li}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,g=new Set([wu,Tu,bu]),m=new Set([li,qi,ma,ga,yu,Su]),M=new Uint32Array(4),E=new Int32Array(4),x=new Z,b=null,T=null,A=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,V=!1,U=null,$=null,B=null,q=null;this._outputColorSpace=Je;let j=0,X=0,Y=null,nt=-1,D=null,ot=new ke,At=new ke,Ct=null,Ot=new Yt(0),Bt=0,Gt=e.width,k=e.height,O=1,F=null,N=null,H=new ke(0,0,Gt,k),it=new ke(0,0,Gt,k),ht=!1,P=new sa,W=!1,z=!1,L=new Te,tt=new Z,lt=new ke,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function G(){return Y===null?O:1}let S=n;function St(C,Q){return e.getContext(C,Q)}let wt,I,y,J,et,ct,bt,vt,ut,pt,Rt,kt,Lt,Pt,Tt,Jt,te,K,Et,mt,It,Nt,_t;try{let C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Kt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",jt,!1),S===null){let Q="webgl2";if(S=St(Q,C),S===null)throw St(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Mt()}catch(C){throw e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",jt,!1),ne("WebGLRenderer: "+C.message),C}function Mt(){wt=new uT(S),wt.init(),It=new Kw(S,wt),I=new eT(S,wt,t,It),y=new Jw(S,wt),I.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),$=S.createFramebuffer(),B=S.createFramebuffer(),q=S.createFramebuffer(),J=new pT(S),et=new Uw,ct=new $w(S,wt,y,et,I,It,J),bt=new hT(R),vt=new g1(S),Nt=new jb(S,vt),ut=new fT(S,vt,J,Nt),pt=new gT(S,ut,vt,Nt,J),K=new mT(S,I,ct),Tt=new nT(et),Rt=new Nw(R,bt,wt,I,Nt,Tt),kt=new eE(R,et),Lt=new Ow,Pt=new Gw(wt),te=new Qb(R,bt,y,pt,p,l),Jt=new Zw(R,pt,I),_t=new nE(S,J,I,y),Et=new tT(S,wt,J),mt=new dT(S,wt,J),J.programs=Rt.programs,R.capabilities=I,R.extensions=wt,R.properties=et,R.renderLists=Lt,R.shadowMap=Jt,R.state=y,R.info=J}_!==li&&(w=new xT(_,e.width,e.height,a,i,s));let xt=new am(R,S);this.xr=xt,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let C=wt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=wt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(Gt,k,!1))},this.getSize=function(C){return C.set(Gt,k)},this.setSize=function(C,Q,at=!0){if(xt.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}Gt=C,k=Q,e.width=Math.floor(C*O),e.height=Math.floor(Q*O),at===!0&&(e.style.width=C+"px",e.style.height=Q+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,C,Q)},this.getDrawingBufferSize=function(C){return C.set(Gt*O,k*O).floor()},this.setDrawingBufferSize=function(C,Q,at){Gt=C,k=Q,O=at,e.width=Math.floor(C*at),e.height=Math.floor(Q*at),this.setViewport(0,0,C,Q)},this.setEffects=function(C){if(_===li){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Q=0;Q<C.length;Q++)if(C[Q].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ot)},this.getViewport=function(C){return C.copy(H)},this.setViewport=function(C,Q,at,rt){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,Q,at,rt),y.viewport(ot.copy(H).multiplyScalar(O).round())},this.getScissor=function(C){return C.copy(it)},this.setScissor=function(C,Q,at,rt){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,Q,at,rt),y.scissor(At.copy(it).multiplyScalar(O).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(C){y.setScissorTest(ht=C)},this.setOpaqueSort=function(C){F=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(C=!0,Q=!0,at=!0){let rt=0;if(C){let st=!1;if(Y!==null){let Dt=Y.texture.format;st=g.has(Dt)}if(st){let Dt=Y.texture.type,Vt=m.has(Dt),Ft=te.getClearColor(),Xt=te.getClearAlpha(),$t=Ft.r,oe=Ft.g,ge=Ft.b;Vt?(M[0]=$t,M[1]=oe,M[2]=ge,M[3]=Xt,S.clearBufferuiv(S.COLOR,0,M)):(E[0]=$t,E[1]=oe,E[2]=ge,E[3]=Xt,S.clearBufferiv(S.COLOR,0,E))}else rt|=S.COLOR_BUFFER_BIT}Q&&(rt|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(rt|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&S.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),U=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",jt,!1),te.dispose(),Lt.dispose(),Pt.dispose(),et.dispose(),bt.dispose(),pt.dispose(),Nt.dispose(),_t.dispose(),Rt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Ue),xt.removeEventListener("sessionend",Ee),_e.stop()};function Kt(C){C.preventDefault(),Up("WebGLRenderer: Context Lost."),V=!0}function yt(){Up("WebGLRenderer: Context Restored."),V=!1;let C=J.autoReset,Q=Jt.enabled,at=Jt.autoUpdate,rt=Jt.needsUpdate,st=Jt.type;Mt(),J.autoReset=C,Jt.enabled=Q,Jt.autoUpdate=at,Jt.needsUpdate=rt,Jt.type=st}function jt(C){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Wt(C){let Q=C.target;Q.removeEventListener("dispose",Wt),ie(Q)}function ie(C){en(C),et.remove(C)}function en(C){let Q=et.get(C).programs;Q!==void 0&&(Q.forEach(function(at){Rt.releaseProgram(at)}),C.isShaderMaterial&&Rt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Q,at,rt,st,Dt){Q===null&&(Q=gt);let Vt=st.isMesh&&st.matrixWorld.determinantAffine()<0,Ft=_n(C,Q,at,rt,st);y.setMaterial(rt,Vt);let Xt=at.index,$t=1;if(rt.wireframe===!0){if(Xt=ut.getWireframeAttribute(at),Xt===void 0)return;$t=2}let oe=at.drawRange,ge=at.attributes.position,qt=oe.start*$t,Se=(oe.start+oe.count)*$t;Dt!==null&&(qt=Math.max(qt,Dt.start*$t),Se=Math.min(Se,(Dt.start+Dt.count)*$t)),Xt!==null?(qt=Math.max(qt,0),Se=Math.min(Se,Xt.count)):ge!=null&&(qt=Math.max(qt,0),Se=Math.min(Se,ge.count));let rn=Se-qt;if(rn<0||rn===1/0)return;Nt.setup(st,rt,Ft,at,Xt);let Fe,Ae=Et;if(Xt!==null&&(Fe=vt.get(Xt),Ae=mt,Ae.setIndex(Fe)),st.isMesh)rt.wireframe===!0?(y.setLineWidth(rt.wireframeLinewidth*G()),Ae.setMode(S.LINES)):Ae.setMode(S.TRIANGLES);else if(st.isLine){let Pn=rt.linewidth;Pn===void 0&&(Pn=1),y.setLineWidth(Pn*G()),st.isLineSegments?Ae.setMode(S.LINES):st.isLineLoop?Ae.setMode(S.LINE_LOOP):Ae.setMode(S.LINE_STRIP)}else st.isPoints?Ae.setMode(S.POINTS):st.isSprite&&Ae.setMode(S.TRIANGLES);if(st.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{let Pn=st._multiDrawStarts,zt=st._multiDrawCounts,Gn=st._multiDrawCount,ve=Xt?vt.get(Xt).bytesPerElement:1,wi=et.get(rt).currentProgram.getUniforms();for(let Ji=0;Ji<Gn;Ji++)wi.setValue(S,"_gl_DrawID",Ji),Ae.render(Pn[Ji]/ve,zt[Ji])}else if(st.isInstancedMesh)Ae.renderInstances(qt,rn,st.count);else if(at.isInstancedBufferGeometry){let Pn=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,zt=Math.min(at.instanceCount,Pn);Ae.renderInstances(qt,rn,zt)}else Ae.render(qt,rn)};function de(C,Q,at,rt){U!==null&&C.isNodeMaterial&&U.setObject(rt,C),W===!0&&Tt.setState(C,at,!1),C.transparent===!0&&C.side===ti&&C.forceSinglePass===!1?(C.side=dn,C.needsUpdate=!0,Xe(C,Q,rt),C.side=gs,C.needsUpdate=!0,Xe(C,Q,rt),C.side=ti):Xe(C,Q,rt)}this.compile=function(C,Q,at=null){at===null&&(at=C),U!==null&&U.renderStart(C,Q,at),T=Pt.get(at),T.init(Q),v.push(T),at.traverseVisible(function(st){st.isLight&&st.layers.test(Q.layers)&&(T.pushLight(st),st.castShadow&&T.pushShadow(st))}),C!==at&&C.traverseVisible(function(st){st.isLight&&st.layers.test(Q.layers)&&(T.pushLight(st),st.castShadow&&T.pushShadow(st))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),z=this.localClippingEnabled,W=Tt.init(this.clippingPlanes,z),W===!0&&Tt.setGlobalState(this.clippingPlanes,Q),U!==null&&Jt.render(T.state.shadowsArray,at,Q);let rt=new Set;return C.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;let Dt=st.material;if(Dt)if(Array.isArray(Dt))for(let Vt=0;Vt<Dt.length;Vt++){let Ft=Dt[Vt];de(Ft,at,Q,st),rt.add(Ft)}else de(Dt,at,Q,st),rt.add(Dt)}),T=v.pop(),U!==null&&U.renderEnd(),rt},this.compileAsync=function(C,Q,at=null){let rt=this.compile(C,Q,at);return new Promise(st=>{function Dt(){if(rt.forEach(function(Vt){let Xt=et.get(Vt).currentProgram;(Xt===void 0||Xt.isReady())&&rt.delete(Vt)}),rt.size===0){st(C);return}setTimeout(Dt,10)}wt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Ne=null;function gn(C){Ne&&Ne(C)}function Ue(){_e.stop()}function Ee(){_e.start()}let _e=new ux;_e.setAnimationLoop(gn),typeof self!="undefined"&&_e.setContext(self),this.setAnimationLoop=function(C){Ne=C,xt.setAnimationLoop(C),C===null?_e.stop():_e.start()},xt.addEventListener("sessionstart",Ue),xt.addEventListener("sessionend",Ee),this.render=function(C,Q){if(Q!==void 0&&Q.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;U!==null&&U.renderStart(C,Q);let at=xt.enabled===!0&&xt.isPresenting===!0,rt=w!==null&&(Y===null||at)&&w.begin(R,Y);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(Q),Q=xt.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,Q,Y),T=Pt.get(C,v.length),T.init(Q),T.state.textureUnits=ct.getTextureUnits(),v.push(T),L.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),P.setFromProjectionMatrix(L,Gi,Q.reversedDepth),z=this.localClippingEnabled,W=Tt.init(this.clippingPlanes,z),b=Lt.get(C,A.length),b.init(),A.push(b),xt.enabled===!0&&xt.isPresenting===!0){let Vt=R.xr.getDepthSensingMesh();Vt!==null&&Vn(Vt,Q,-1/0,R.sortObjects)}Vn(C,Q,0,R.sortObjects),b.finish(),U!==null&&U.updateLights(T.state.lightsArray),R.sortObjects===!0&&b.sort(F,N),ft=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,ft&&te.addToRenderList(b,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),W===!0&&Tt.beginShadows();let st=T.state.shadowsArray;if(Jt.render(st,C,Q),W===!0&&Tt.endShadows(),(rt&&w.hasRenderPass())===!1){let Vt=b.opaque,Ft=b.transmissive;if(T.setupLights(),Q.isArrayCamera){let Xt=Q.cameras;if(Ft.length>0)for(let $t=0,oe=Xt.length;$t<oe;$t++){let ge=Xt[$t];Rn(Vt,Ft,C,ge)}ft&&te.render(C);for(let $t=0,oe=Xt.length;$t<oe;$t++){let ge=Xt[$t];Pe(b,C,ge,ge.viewport)}}else Ft.length>0&&Rn(Vt,Ft,C,Q),ft&&te.render(C),Pe(b,C,Q)}Y!==null&&X===0&&(ct.updateMultisampleRenderTarget(Y),ct.updateRenderTargetMipmap(Y)),rt&&w.end(R),C.isScene===!0&&C.onAfterRender(R,C,Q),Nt.resetDefaultState(),nt=-1,D=null,v.pop(),v.length>0?(T=v[v.length-1],ct.setTextureUnits(T.state.textureUnits),W===!0&&Tt.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,U!==null&&U.renderEnd()};function Vn(C,Q,at,rt){if(C.visible===!1)return;if(C.layers.test(Q.layers)){if(C.isGroup)at=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Q);else if(C.isLightProbeGrid)T.pushLightProbeGrid(C);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(P)){rt&&lt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(L);let Vt=pt.update(C),Ft=C.material;Ft.visible&&b.push(C,Vt,Ft,at,lt.z,null,Q)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(P))){let Vt=pt.update(C),Ft=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),lt.copy(C.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),lt.copy(Vt.boundingSphere.center)),lt.applyMatrix4(C.matrixWorld).applyMatrix4(L)),Array.isArray(Ft)){let Xt=Vt.groups;for(let $t=0,oe=Xt.length;$t<oe;$t++){let ge=Xt[$t],qt=Ft[ge.materialIndex];qt&&qt.visible&&b.push(C,Vt,qt,at,lt.z,ge,Q)}}else Ft.visible&&b.push(C,Vt,Ft,at,lt.z,null,Q)}}let Dt=C.children;for(let Vt=0,Ft=Dt.length;Vt<Ft;Vt++)Vn(Dt[Vt],Q,at,rt)}function Pe(C,Q,at,rt){let{opaque:st,transmissive:Dt,transparent:Vt}=C;T.setupLightsView(at),W===!0&&Tt.setGlobalState(R.clippingPlanes,at),rt&&y.viewport(ot.copy(rt)),st.length>0&&Hn(st,Q,at),Dt.length>0&&Hn(Dt,Q,at),Vt.length>0&&Hn(Vt,Q,at),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Rn(C,Q,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[rt.id]===void 0){let qt=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[rt.id]=new cn(1,1,{generateMipmaps:!0,type:qt?Cn:li,minFilter:xs,samples:Math.max(4,I.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let Dt=T.state.transmissionRenderTarget[rt.id],Vt=rt.viewport||ot;Dt.setSize(Vt.z*R.transmissionResolutionScale,Vt.w*R.transmissionResolutionScale);let Ft=R.getRenderTarget(),Xt=R.getActiveCubeFace(),$t=R.getActiveMipmapLevel();R.setRenderTarget(Dt),R.getClearColor(Ot),Bt=R.getClearAlpha(),Bt<1&&R.setClearColor(16777215,.5),R.clear(),ft&&te.render(at);let oe=R.toneMapping;R.toneMapping=Xi;let ge=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),T.setupLightsView(rt),W===!0&&Tt.setGlobalState(R.clippingPlanes,rt),Hn(C,at,rt),ct.updateMultisampleRenderTarget(Dt),ct.updateRenderTargetMipmap(Dt),wt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Se=0,rn=Q.length;Se<rn;Se++){let Fe=Q[Se],{object:Ae,geometry:Pn,material:zt,group:Gn}=Fe;if(zt.side===ti&&Ae.layers.test(rt.layers)){let ve=zt.side;zt.side=dn,zt.needsUpdate=!0,nn(Ae,at,rt,Pn,zt,Gn),zt.side=ve,zt.needsUpdate=!0,qt=!0}}qt===!0&&(ct.updateMultisampleRenderTarget(Dt),ct.updateRenderTargetMipmap(Dt))}R.setRenderTarget(Ft,Xt,$t),R.setClearColor(Ot,Bt),ge!==void 0&&(rt.viewport=ge),R.toneMapping=oe}function Hn(C,Q,at){let rt=Q.isScene===!0?Q.overrideMaterial:null;for(let st=0,Dt=C.length;st<Dt;st++){let Vt=C[st],{object:Ft,geometry:Xt,group:$t}=Vt,oe=Vt.material;oe.allowOverride===!0&&rt!==null&&(oe=rt),Ft.layers.test(at.layers)&&nn(Ft,Q,at,Xt,oe,$t)}}function nn(C,Q,at,rt,st,Dt){U!==null&&st.isNodeMaterial&&U.setObject(C,st),C.onBeforeRender(R,Q,at,rt,st,Dt),C.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),st.onBeforeRender(R,Q,at,rt,C,Dt),st.transparent===!0&&st.side===ti&&st.forceSinglePass===!1?(st.side=dn,st.needsUpdate=!0,R.renderBufferDirect(at,Q,rt,st,C,Dt),st.side=gs,st.needsUpdate=!0,R.renderBufferDirect(at,Q,rt,st,C,Dt),st.side=ti):R.renderBufferDirect(at,Q,rt,st,C,Dt),C.onAfterRender(R,Q,at,rt,st,Dt)}function Xe(C,Q,at){Q.isScene!==!0&&(Q=gt);let rt=et.get(C),st=T.state.lights,Dt=T.state.shadowsArray,Vt=st.state.version,Ft=Rt.getParameters(C,st.state,Dt,Q,at,T.state.lightProbeGridArray),Xt=Rt.getProgramCacheKey(Ft),$t=rt.programs;rt.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Q.environment:null,rt.fog=Q.fog;let oe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;rt.envMap=bt.get(C.envMap||rt.environment,oe),rt.envMapRotation=rt.environment!==null&&C.envMap===null?Q.environmentRotation:C.envMapRotation,$t===void 0&&(C.addEventListener("dispose",Wt),$t=new Map,rt.programs=$t);let ge=$t.get(Xt);if(ge!==void 0){if(rt.currentProgram===ge&&rt.lightsStateVersion===Vt)return Zi(C,Ft),ge}else Ft.uniforms=Rt.getUniforms(C),U!==null&&C.isNodeMaterial&&U.build(C,at,Ft),C.onBeforeCompile(Ft,R),ge=Rt.acquireProgram(Ft,Xt),$t.set(Xt,ge),rt.uniforms=Ft.uniforms;let qt=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qt.clippingPlanes=Tt.uniform),Zi(C,Ft),rt.needsLights=Ti(C),rt.lightsStateVersion=Vt,rt.needsLights&&(qt.ambientLightColor.value=st.state.ambient,qt.lightProbe.value=st.state.probe,qt.sunLights.value=st.state.sun,qt.sunLightShadows.value=st.state.sunShadow,qt.directionalLights.value=st.state.directional,qt.directionalLightShadows.value=st.state.directionalShadow,qt.spotLights.value=st.state.spot,qt.spotLightShadows.value=st.state.spotShadow,qt.rectAreaLights.value=st.state.rectArea,qt.ltc_1.value=st.state.rectAreaLTC1,qt.ltc_2.value=st.state.rectAreaLTC2,qt.pointLights.value=st.state.point,qt.pointLightShadows.value=st.state.pointShadow,qt.hemisphereLights.value=st.state.hemi,qt.sunShadowMatrix.value=st.state.sunShadowMatrix,qt.sunShadowCascade.value=st.state.sunShadowCascade,qt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,qt.spotLightMatrix.value=st.state.spotLightMatrix,qt.spotLightMap.value=st.state.spotLightMap,qt.pointShadowMatrix.value=st.state.pointShadowMatrix),rt.lightProbeGrid=T.state.lightProbeGridArray.length>0,rt.currentProgram=ge,rt.uniformsList=null,ge}function hn(C){if(C.uniformsList===null){let Q=C.currentProgram.getUniforms();C.uniformsList=va.seqWithValue(Q.seq,C.uniforms)}return C.uniformsList}function Zi(C,Q){let at=et.get(C);at.outputColorSpace=Q.outputColorSpace,at.batching=Q.batching,at.batchingColor=Q.batchingColor,at.instancing=Q.instancing,at.instancingColor=Q.instancingColor,at.instancingMorph=Q.instancingMorph,at.skinning=Q.skinning,at.morphTargets=Q.morphTargets,at.morphNormals=Q.morphNormals,at.morphColors=Q.morphColors,at.morphTargetsCount=Q.morphTargetsCount,at.numClippingPlanes=Q.numClippingPlanes,at.numIntersection=Q.numClipIntersection,at.vertexAlphas=Q.vertexAlphas,at.vertexTangents=Q.vertexTangents,at.toneMapping=Q.toneMapping}function co(C,Q){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;x.setFromMatrixPosition(Q.matrixWorld);for(let at=0,rt=C.length;at<rt;at++){let st=C[at];if(st.texture!==null&&st.boundingBox.containsPoint(x))return st}return null}function _n(C,Q,at,rt,st){Q.isScene!==!0&&(Q=gt),ct.resetTextureUnits();let Dt=Q.fog,Vt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?Q.environment:null,Ft=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:me.workingColorSpace,Xt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,$t=bt.get(rt.envMap||Vt,Xt),oe=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ge=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),qt=!!at.morphAttributes.position,Se=!!at.morphAttributes.normal,rn=!!at.morphAttributes.color,Fe=Xi;rt.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Fe=R.toneMapping);let Ae=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Pn=Ae!==void 0?Ae.length:0,zt=et.get(rt),Gn=T.state.lights;if(W===!0&&(z===!0||C!==D)){let Le=C===D&&rt.id===nt;Tt.setState(rt,C,Le)}let ve=!1;rt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Gn.state.version||zt.outputColorSpace!==Ft||st.isBatchedMesh&&zt.batching===!1||!st.isBatchedMesh&&zt.batching===!0||st.isBatchedMesh&&zt.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&zt.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&zt.instancing===!1||!st.isInstancedMesh&&zt.instancing===!0||st.isSkinnedMesh&&zt.skinning===!1||!st.isSkinnedMesh&&zt.skinning===!0||st.isInstancedMesh&&zt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&zt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&zt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&zt.instancingMorph===!1&&st.morphTexture!==null||zt.envMap!==$t||rt.fog===!0&&zt.fog!==Dt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Tt.numPlanes||zt.numIntersection!==Tt.numIntersection)||zt.vertexAlphas!==oe||zt.vertexTangents!==ge||zt.morphTargets!==qt||zt.morphNormals!==Se||zt.morphColors!==rn||zt.toneMapping!==Fe||zt.morphTargetsCount!==Pn||!!zt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,zt.__version=rt.version);let wi=zt.currentProgram;ve===!0&&(wi=Xe(rt,Q,st),U&&rt.isNodeMaterial&&U.onUpdateProgram(rt,wi,zt));let Ji=!1,zr=!1,uo=!1,we=wi.getUniforms(),Ke=zt.uniforms;if(y.useProgram(wi.program)&&(Ji=!0,zr=!0,uo=!0),rt.id!==nt&&(nt=rt.id,zr=!0),zt.needsLights){let Le=co(T.state.lightProbeGridArray,st);zt.lightProbeGrid!==Le&&(zt.lightProbeGrid=Le,zr=!0)}if(Ji||D!==C){y.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),we.setValue(S,"projectionMatrix",C.projectionMatrix),we.setValue(S,"viewMatrix",C.matrixWorldInverse);let Hr=we.map.cameraPosition;Hr!==void 0&&Hr.setValue(S,tt.setFromMatrixPosition(C.matrixWorld)),I.logarithmicDepthBuffer&&we.setValue(S,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&we.setValue(S,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,zr=!0,uo=!0)}if(zt.needsLights&&(Gn.state.sunShadowMap.length>0&&we.setValue(S,"sunShadowMap",Gn.state.sunShadowMap,ct),Gn.state.directionalShadowMap.length>0&&we.setValue(S,"directionalShadowMap",Gn.state.directionalShadowMap,ct),Gn.state.spotShadowMap.length>0&&we.setValue(S,"spotShadowMap",Gn.state.spotShadowMap,ct),Gn.state.pointShadowMap.length>0&&we.setValue(S,"pointShadowMap",Gn.state.pointShadowMap,ct)),st.isSkinnedMesh){we.setOptional(S,st,"bindMatrix"),we.setOptional(S,st,"bindMatrixInverse");let Le=st.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),we.setValue(S,"boneTexture",Le.boneTexture,ct))}st.isBatchedMesh&&(we.setOptional(S,st,"batchingTexture"),we.setValue(S,"batchingTexture",st._matricesTexture,ct),we.setOptional(S,st,"batchingIdTexture"),we.setValue(S,"batchingIdTexture",st._indirectTexture,ct),we.setOptional(S,st,"batchingColorTexture"),st._colorsTexture!==null&&we.setValue(S,"batchingColorTexture",st._colorsTexture,ct));let Vr=at.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0)&&K.update(st,at,wi),(zr||zt.receiveShadow!==st.receiveShadow)&&(zt.receiveShadow=st.receiveShadow,we.setValue(S,"receiveShadow",st.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&Q.environment!==null&&(Ke.envMapIntensity.value=Q.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=rE()),zr){if(we.setValue(S,"toneMappingExposure",R.toneMappingExposure),zt.needsLights&&$e(Ke,uo),Dt&&rt.fog===!0&&kt.refreshFogUniforms(Ke,Dt),kt.refreshMaterialUniforms(Ke,rt,O,k,T.state.transmissionRenderTarget[C.id]),zt.needsLights&&zt.lightProbeGrid){let Le=zt.lightProbeGrid;Ke.probesSH.value=Le.texture,Ke.probesMin.value.copy(Le.boundingBox.min),Ke.probesMax.value.copy(Le.boundingBox.max),Ke.probesResolution.value.copy(Le.resolution)}va.upload(S,hn(zt),Ke,ct)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(va.upload(S,hn(zt),Ke,ct),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&we.setValue(S,"center",st.center),we.setValue(S,"modelViewMatrix",st.modelViewMatrix),we.setValue(S,"normalMatrix",st.normalMatrix),we.setValue(S,"modelMatrix",st.matrixWorld),rt.uniformsGroups!==void 0){let Le=rt.uniformsGroups;for(let Hr=0,fo=Le.length;Hr<fo;Hr++){let mm=Le[Hr];_t.update(mm,wi),_t.bind(mm,wi)}}return wi}function $e(C,Q){C.ambientLightColor.needsUpdate=Q,C.lightProbe.needsUpdate=Q,C.sunLights.needsUpdate=Q,C.sunLightShadows.needsUpdate=Q,C.directionalLights.needsUpdate=Q,C.directionalLightShadows.needsUpdate=Q,C.pointLights.needsUpdate=Q,C.pointLightShadows.needsUpdate=Q,C.spotLights.needsUpdate=Q,C.spotLightShadows.needsUpdate=Q,C.rectAreaLights.needsUpdate=Q,C.hemisphereLights.needsUpdate=Q}function Ti(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,Q,at){let rt=et.get(C);rt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),et.get(C.texture).__webglTexture=Q,et.get(C.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Q){let at=et.get(C);at.__webglFramebuffer=Q,at.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(C,Q=0,at=0){Y=C,j=Q,X=at;let rt=null,st=!1,Dt=!1;if(C){let Ft=et.get(C);if(Ft.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(S.FRAMEBUFFER,Ft.__webglFramebuffer),ot.copy(C.viewport),At.copy(C.scissor),Ct=C.scissorTest,y.viewport(ot),y.scissor(At),y.setScissorTest(Ct),nt=-1;return}else if(Ft.__webglFramebuffer===void 0)ct.setupRenderTarget(C);else if(Ft.__hasExternalTextures)ct.rebindTextures(C,et.get(C.texture).__webglTexture,et.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let oe=C.depthTexture;if(Ft.__boundDepthTexture!==oe){if(oe!==null&&et.has(oe)&&(C.width!==oe.image.width||C.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(C)}}let Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Dt=!0);let $t=et.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[Q])?rt=$t[Q][at]:rt=$t[Q],st=!0):C.samples>0&&ct.useMultisampledRTT(C)===!1?rt=et.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?rt=$t[at]:rt=$t,ot.copy(C.viewport),At.copy(C.scissor),Ct=C.scissorTest}else ot.copy(H).multiplyScalar(O).floor(),At.copy(it).multiplyScalar(O).floor(),Ct=ht;if(at!==0&&(rt=$),y.bindFramebuffer(S.FRAMEBUFFER,rt)&&y.drawBuffers(C,rt),y.viewport(ot),y.scissor(At),y.setScissorTest(Ct),st){let Ft=et.get(C.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ft.__webglTexture,at)}else if(Dt){let Ft=Q;for(let Xt=0;Xt<C.textures.length;Xt++){let $t=et.get(C.textures[Xt]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Xt,$t.__webglTexture,at,Ft)}}else if(C!==null&&at!==0){let Ft=et.get(C.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ft.__webglTexture,at)}nt=-1};function ho(C){let Q=et.get(C);return(Q.__readFormat!==C.format||Q.__readType!==C.type)&&(Q.__readFormat=C.format,Q.__readType=C.type,Q.__formatReadable=I.textureFormatReadable(C.format),Q.__typeReadable=I.textureTypeReadable(C.type)),Q}this.readRenderTargetPixels=function(C,Q,at,rt,st,Dt,Vt,Ft=0){if(!(C&&C.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt){y.bindFramebuffer(S.FRAMEBUFFER,Xt);try{let $t=C.textures[Ft],oe=$t.format,ge=$t.type;C.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ft);let qt=ho($t);if(qt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=C.width-rt&&at>=0&&at<=C.height-st&&S.readPixels(Q,at,rt,st,It.convert(oe),It.convert(ge),Dt)}finally{let $t=Y!==null?et.get(Y).__webglFramebuffer:null;y.bindFramebuffer(S.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(C,Q,at,rt,st,Dt,Vt,Ft=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt)if(Q>=0&&Q<=C.width-rt&&at>=0&&at<=C.height-st){y.bindFramebuffer(S.FRAMEBUFFER,Xt);let $t=C.textures[Ft],oe=$t.format,ge=$t.type;C.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ft);let qt=ho($t);if(qt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Se),S.bufferData(S.PIXEL_PACK_BUFFER,Dt.byteLength,S.STREAM_READ),S.readPixels(Q,at,rt,st,It.convert(oe),It.convert(ge),0),S.bindBuffer(S.PIXEL_PACK_BUFFER,null);let rn=Y!==null?et.get(Y).__webglFramebuffer:null;y.bindFramebuffer(S.FRAMEBUFFER,rn);let Fe=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await U_(S,Fe,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Se),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Dt),S.bindBuffer(S.PIXEL_PACK_BUFFER,null),S.deleteBuffer(Se),S.deleteSync(Fe),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Q=null,at=0){let rt=Math.pow(2,-at),st=Math.floor(C.image.width*rt),Dt=Math.floor(C.image.height*rt),Vt=Q!==null?Q.x:0,Ft=Q!==null?Q.y:0;ct.setTexture2D(C,0),S.copyTexSubImage2D(S.TEXTURE_2D,at,0,0,Vt,Ft,st,Dt),y.unbindTexture()},this.copyTextureToTexture=function(C,Q,at=null,rt=null,st=0,Dt=0){let Vt,Ft,Xt,$t,oe,ge,qt,Se,rn,Fe=C.isCompressedTexture?C.mipmaps[Dt]:C.image;if(at!==null)Vt=at.max.x-at.min.x,Ft=at.max.y-at.min.y,Xt=at.isBox3?at.max.z-at.min.z:1,$t=at.min.x,oe=at.min.y,ge=at.isBox3?at.min.z:0;else{let Ke=Math.pow(2,-st);Vt=Math.floor(Fe.width*Ke),Ft=Math.floor(Fe.height*Ke),C.isDataArrayTexture?Xt=Fe.depth:C.isData3DTexture?Xt=Math.floor(Fe.depth*Ke):Xt=1,$t=0,oe=0,ge=0}rt!==null?(qt=rt.x,Se=rt.y,rn=rt.z):(qt=0,Se=0,rn=0);let Ae=It.convert(Q.format),Pn=It.convert(Q.type),zt;Q.isData3DTexture?(ct.setTexture3D(Q,0),zt=S.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(ct.setTexture2DArray(Q,0),zt=S.TEXTURE_2D_ARRAY):(ct.setTexture2D(Q,0),zt=S.TEXTURE_2D),y.activeTexture(S.TEXTURE0),y.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,Q.flipY),y.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),y.pixelStorei(S.UNPACK_ALIGNMENT,Q.unpackAlignment);let Gn=y.getParameter(S.UNPACK_ROW_LENGTH),ve=y.getParameter(S.UNPACK_IMAGE_HEIGHT),wi=y.getParameter(S.UNPACK_SKIP_PIXELS),Ji=y.getParameter(S.UNPACK_SKIP_ROWS),zr=y.getParameter(S.UNPACK_SKIP_IMAGES);y.pixelStorei(S.UNPACK_ROW_LENGTH,Fe.width),y.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Fe.height),y.pixelStorei(S.UNPACK_SKIP_PIXELS,$t),y.pixelStorei(S.UNPACK_SKIP_ROWS,oe),y.pixelStorei(S.UNPACK_SKIP_IMAGES,ge);let uo=C.isDataArrayTexture||C.isData3DTexture,we=Q.isDataArrayTexture||Q.isData3DTexture;if(C.isDepthTexture){let Ke=et.get(C),Vr=et.get(Q),Le=et.get(Ke.__renderTarget),Hr=et.get(Vr.__renderTarget);y.bindFramebuffer(S.READ_FRAMEBUFFER,Le.__webglFramebuffer),y.bindFramebuffer(S.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let fo=0;fo<Xt;fo++)uo&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,et.get(C).__webglTexture,st,ge+fo),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,et.get(Q).__webglTexture,Dt,rn+fo)),S.blitFramebuffer($t,oe,Vt,Ft,qt,Se,Vt,Ft,S.DEPTH_BUFFER_BIT,S.NEAREST);y.bindFramebuffer(S.READ_FRAMEBUFFER,null),y.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(st!==0||C.isRenderTargetTexture||et.has(C)){let Ke=et.get(C),Vr=et.get(Q);y.bindFramebuffer(S.READ_FRAMEBUFFER,B),y.bindFramebuffer(S.DRAW_FRAMEBUFFER,q);for(let Le=0;Le<Xt;Le++)uo?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ke.__webglTexture,st,ge+Le):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ke.__webglTexture,st),we?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Vr.__webglTexture,Dt,rn+Le):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Vr.__webglTexture,Dt),st!==0?S.blitFramebuffer($t,oe,Vt,Ft,qt,Se,Vt,Ft,S.COLOR_BUFFER_BIT,S.NEAREST):we?S.copyTexSubImage3D(zt,Dt,qt,Se,rn+Le,$t,oe,Vt,Ft):S.copyTexSubImage2D(zt,Dt,qt,Se,$t,oe,Vt,Ft);y.bindFramebuffer(S.READ_FRAMEBUFFER,null),y.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else we?C.isDataTexture||C.isData3DTexture?S.texSubImage3D(zt,Dt,qt,Se,rn,Vt,Ft,Xt,Ae,Pn,Fe.data):Q.isCompressedArrayTexture?S.compressedTexSubImage3D(zt,Dt,qt,Se,rn,Vt,Ft,Xt,Ae,Fe.data):S.texSubImage3D(zt,Dt,qt,Se,rn,Vt,Ft,Xt,Ae,Pn,Fe):C.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,Dt,qt,Se,Vt,Ft,Ae,Pn,Fe.data):C.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,Dt,qt,Se,Fe.width,Fe.height,Ae,Fe.data):S.texSubImage2D(S.TEXTURE_2D,Dt,qt,Se,Vt,Ft,Ae,Pn,Fe);y.pixelStorei(S.UNPACK_ROW_LENGTH,Gn),y.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ve),y.pixelStorei(S.UNPACK_SKIP_PIXELS,wi),y.pixelStorei(S.UNPACK_SKIP_ROWS,Ji),y.pixelStorei(S.UNPACK_SKIP_IMAGES,zr),Dt===0&&Q.generateMipmaps&&S.generateMipmap(zt),y.unbindTexture()},this.initRenderTarget=function(C){et.get(C).__webglFramebuffer===void 0&&ct.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ct.setTextureCube(C,0):C.isData3DTexture?ct.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ct.setTexture2DArray(C,0):ct.setTexture2D(C,0),y.unbindTexture()},this.resetState=function(){j=0,X=0,Y=null,y.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var Ma={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Mi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},sE=new ms(-1,1,1,-1,0,1),cm=class extends De{constructor(){super(),this.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ue([0,2,0,0,2,0],2))}},oE=new cm,Ms=class{constructor(t){this._mesh=new fe(oE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,sE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var hf=class extends Mi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=kr.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ms(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var gc=class extends Mi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},uf=class extends Mi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ff=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new dt);this._width=n.width,this._height=n.height,e=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hf(Ma),this.copyPass.material.blending=Ni,this.timer=new Fr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}gc!==void 0&&(o instanceof gc?n=!0:o instanceof uf&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var df=class extends Mi{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Yt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var xx={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Yt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ba=class r extends Mi{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new dt(t.x,t.y):new dt(256,256),this.clearColor=new Yt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(s,o,{type:Cn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new cn(s,o,{type:Cn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new cn(s,o,{type:Cn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}let a=xx;this.highPassUniforms=kr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new dt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=kr.clone(Ma.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:Ma.vertexShader,fragmentShader:Ma.fragmentShader,premultipliedAlpha:!0,blending:dr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Yt,this._oldClearAlpha=1,this._basic=new An,this._fsQuad=new Ms(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new dt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],s=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),s.push(c)}return new We({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new dt(.5,.5)},direction:{value:new dt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new We({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ba.BlurDirectionX=new dt(1,0);ba.BlurDirectionY=new dt(0,1);var _c={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var pf=class extends Mi{constructor(){super(),this.isOutputPass=!0,this.uniforms=kr.clone(_c.uniforms),this.material=new ha({name:_c.name,uniforms:this.uniforms,vertexShader:_c.vertexShader,fragmentShader:_c.fragmentShader}),this._fsQuad=new Ms(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},me.getTransfer(this._outputColorSpace)===ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ql?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Or?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ec&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var xc=Je,mf=class r extends to{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,i){let s=this,o=new Xl(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t){let e=this;function n(O,F){if(O.nodeType!==1)return;O.hasAttribute("filter")&&console.warn("THREE.SVGLoader: Filters are not supported.");let N=b(O),H=!1,it=null;switch(O.nodeName){case"svg":F=_(O,F);break;case"style":s(O);break;case"g":F=_(O,F);break;case"path":F=_(O,F),O.hasAttribute("d")&&(it=i(O));break;case"rect":F=_(O,F),it=l(O);break;case"polygon":F=_(O,F),it=c(O);break;case"polyline":F=_(O,F),it=h(O);break;case"circle":F=_(O,F),it=d(O);break;case"ellipse":F=_(O,F),it=u(O);break;case"line":F=_(O,F),it=f(O);break;case"defs":H=!0;break;case"use":F=_(O,F);let W=(O.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),z=O.viewportElement.getElementById(W);z?n(z,F):console.warn("SVGLoader: 'use node' references non-existent node id: "+W);break;default:}if(it){F.fill!==void 0&&F.fill!=="none"&&!F.fill.startsWith("url")&&it.color.setStyle(F.fill,xc),v(it,Bt),q.push(it);let P=Object.assign({},F);P.strokeWidth=F.strokeWidth*$(Bt),it.userData={node:O,style:P,transform:Bt.clone(),gradients:X}}let ht=O.childNodes;for(let P=0;P<ht.length;P++){let W=ht[P];H&&W.nodeName!=="style"&&W.nodeName!=="defs"||n(W,F)}N&&(Y.pop(),Y.length>0?Bt.copy(Y[Y.length-1]):Bt.identity())}function i(O){let F=new Wi,N=new dt,H=new dt,it=new dt,ht=!0,P=!1,W=O.getAttribute("d");if(W===""||W==="none")return null;let z=W.match(/[a-df-z][^a-df-z]*/ig);for(let L=0,tt=z.length;L<tt;L++){let lt=z[L],gt=lt.charAt(0),ft=lt.slice(1).trim();ht===!0&&(P=!0,ht=!1);let G;switch(gt){case"M":G=m(ft);for(let S=0,St=G.length;S<St;S+=2)N.x=G[S+0],N.y=G[S+1],H.x=N.x,H.y=N.y,S===0?F.moveTo(N.x,N.y):F.lineTo(N.x,N.y),S===0&&it.copy(N);break;case"H":G=m(ft);for(let S=0,St=G.length;S<St;S++)N.x=G[S],H.x=N.x,H.y=N.y,F.lineTo(N.x,N.y),S===0&&P===!0&&it.copy(N);break;case"V":G=m(ft);for(let S=0,St=G.length;S<St;S++)N.y=G[S],H.x=N.x,H.y=N.y,F.lineTo(N.x,N.y),S===0&&P===!0&&it.copy(N);break;case"L":G=m(ft);for(let S=0,St=G.length;S<St;S+=2)N.x=G[S+0],N.y=G[S+1],H.x=N.x,H.y=N.y,F.lineTo(N.x,N.y),S===0&&P===!0&&it.copy(N);break;case"C":G=m(ft);for(let S=0,St=G.length;S<St;S+=6)F.bezierCurveTo(G[S+0],G[S+1],G[S+2],G[S+3],G[S+4],G[S+5]),H.x=G[S+2],H.y=G[S+3],N.x=G[S+4],N.y=G[S+5],S===0&&P===!0&&it.copy(N);break;case"S":G=m(ft);for(let S=0,St=G.length;S<St;S+=4)F.bezierCurveTo(g(N.x,H.x),g(N.y,H.y),G[S+0],G[S+1],G[S+2],G[S+3]),H.x=G[S+0],H.y=G[S+1],N.x=G[S+2],N.y=G[S+3],S===0&&P===!0&&it.copy(N);break;case"Q":G=m(ft);for(let S=0,St=G.length;S<St;S+=4)F.quadraticCurveTo(G[S+0],G[S+1],G[S+2],G[S+3]),H.x=G[S+0],H.y=G[S+1],N.x=G[S+2],N.y=G[S+3],S===0&&P===!0&&it.copy(N);break;case"T":G=m(ft);for(let S=0,St=G.length;S<St;S+=2){let wt=g(N.x,H.x),I=g(N.y,H.y);F.quadraticCurveTo(wt,I,G[S+0],G[S+1]),H.x=wt,H.y=I,N.x=G[S+0],N.y=G[S+1],S===0&&P===!0&&it.copy(N)}break;case"A":G=m(ft,[3,4],7);for(let S=0,St=G.length;S<St;S+=7){if(G[S+5]==N.x&&G[S+6]==N.y)continue;let wt=N.clone();N.x=G[S+5],N.y=G[S+6],H.x=N.x,H.y=N.y,o(F,G[S],G[S+1],G[S+2],G[S+3],G[S+4],wt,N),S===0&&P===!0&&it.copy(N)}break;case"m":G=m(ft);for(let S=0,St=G.length;S<St;S+=2)N.x+=G[S+0],N.y+=G[S+1],H.x=N.x,H.y=N.y,S===0?F.moveTo(N.x,N.y):F.lineTo(N.x,N.y),S===0&&it.copy(N);break;case"h":G=m(ft);for(let S=0,St=G.length;S<St;S++)N.x+=G[S],H.x=N.x,H.y=N.y,F.lineTo(N.x,N.y),S===0&&P===!0&&it.copy(N);break;case"v":G=m(ft);for(let S=0,St=G.length;S<St;S++)N.y+=G[S],H.x=N.x,H.y=N.y,F.lineTo(N.x,N.y),S===0&&P===!0&&it.copy(N);break;case"l":G=m(ft);for(let S=0,St=G.length;S<St;S+=2)N.x+=G[S+0],N.y+=G[S+1],H.x=N.x,H.y=N.y,F.lineTo(N.x,N.y),S===0&&P===!0&&it.copy(N);break;case"c":G=m(ft);for(let S=0,St=G.length;S<St;S+=6)F.bezierCurveTo(N.x+G[S+0],N.y+G[S+1],N.x+G[S+2],N.y+G[S+3],N.x+G[S+4],N.y+G[S+5]),H.x=N.x+G[S+2],H.y=N.y+G[S+3],N.x+=G[S+4],N.y+=G[S+5],S===0&&P===!0&&it.copy(N);break;case"s":G=m(ft);for(let S=0,St=G.length;S<St;S+=4)F.bezierCurveTo(g(N.x,H.x),g(N.y,H.y),N.x+G[S+0],N.y+G[S+1],N.x+G[S+2],N.y+G[S+3]),H.x=N.x+G[S+0],H.y=N.y+G[S+1],N.x+=G[S+2],N.y+=G[S+3],S===0&&P===!0&&it.copy(N);break;case"q":G=m(ft);for(let S=0,St=G.length;S<St;S+=4)F.quadraticCurveTo(N.x+G[S+0],N.y+G[S+1],N.x+G[S+2],N.y+G[S+3]),H.x=N.x+G[S+0],H.y=N.y+G[S+1],N.x+=G[S+2],N.y+=G[S+3],S===0&&P===!0&&it.copy(N);break;case"t":G=m(ft);for(let S=0,St=G.length;S<St;S+=2){let wt=g(N.x,H.x),I=g(N.y,H.y);F.quadraticCurveTo(wt,I,N.x+G[S+0],N.y+G[S+1]),H.x=wt,H.y=I,N.x=N.x+G[S+0],N.y=N.y+G[S+1],S===0&&P===!0&&it.copy(N)}break;case"a":G=m(ft,[3,4],7);for(let S=0,St=G.length;S<St;S+=7){if(G[S+5]==0&&G[S+6]==0)continue;let wt=N.clone();N.x+=G[S+5],N.y+=G[S+6],H.x=N.x,H.y=N.y,o(F,G[S],G[S+1],G[S+2],G[S+3],G[S+4],wt,N),S===0&&P===!0&&it.copy(N)}break;case"Z":case"z":F.currentPath.autoClose=!0,F.currentPath.curves.length>0&&(N.copy(it),F.currentPath.currentPoint.copy(N),ht=!0);break;default:console.warn(lt)}P=!1}return F}function s(O){if(!(!O.sheet||!O.sheet.cssRules||!O.sheet.cssRules.length))for(let F=0;F<O.sheet.cssRules.length;F++){let N=O.sheet.cssRules[F];if(N.type!==1)continue;let H=N.selectorText.split(/,/gm).filter(Boolean).map(it=>it.trim());for(let it=0;it<H.length;it++){let ht=Object.fromEntries(Object.entries(N.style).filter(([,P])=>P!==""));j[H[it]]=Object.assign(j[H[it]]||{},ht)}}}function o(O,F,N,H,it,ht,P,W){if(F==0||N==0){O.lineTo(W.x,W.y);return}H=H*Math.PI/180,F=Math.abs(F),N=Math.abs(N);let z=(P.x-W.x)/2,L=(P.y-W.y)/2,tt=Math.cos(H)*z+Math.sin(H)*L,lt=-Math.sin(H)*z+Math.cos(H)*L,gt=F*F,ft=N*N,G=tt*tt,S=lt*lt,St=G/gt+S/ft;if(St>1){let pt=Math.sqrt(St);F=pt*F,N=pt*N,gt=F*F,ft=N*N}let wt=gt*S+ft*G,I=(gt*ft-wt)/wt,y=Math.sqrt(Math.max(0,I));it===ht&&(y=-y);let J=y*F*lt/N,et=-y*N*tt/F,ct=Math.cos(H)*J-Math.sin(H)*et+(P.x+W.x)/2,bt=Math.sin(H)*J+Math.cos(H)*et+(P.y+W.y)/2,vt=a(1,0,(tt-J)/F,(lt-et)/N),ut=a((tt-J)/F,(lt-et)/N,(-tt-J)/F,(-lt-et)/N)%(Math.PI*2);O.currentPath.absellipse(ct,bt,F,N,vt,vt+ut,ht===0,H)}function a(O,F,N,H){let it=O*N+F*H,ht=Math.sqrt(O*O+F*F)*Math.sqrt(N*N+H*H),P=Math.acos(Math.max(-1,Math.min(1,it/ht)));return O*H-F*N<0&&(P=-P),P}function l(O){let F=x(O.getAttribute("x")||0),N=x(O.getAttribute("y")||0),H=x(O.getAttribute("rx")||O.getAttribute("ry")||0),it=x(O.getAttribute("ry")||O.getAttribute("rx")||0),ht=x(O.getAttribute("width")),P=x(O.getAttribute("height")),W=1-.551915024494,z=new Wi;return z.moveTo(F+H,N),z.lineTo(F+ht-H,N),(H!==0||it!==0)&&z.bezierCurveTo(F+ht-H*W,N,F+ht,N+it*W,F+ht,N+it),z.lineTo(F+ht,N+P-it),(H!==0||it!==0)&&z.bezierCurveTo(F+ht,N+P-it*W,F+ht-H*W,N+P,F+ht-H,N+P),z.lineTo(F+H,N+P),(H!==0||it!==0)&&z.bezierCurveTo(F+H*W,N+P,F,N+P-it*W,F,N+P-it),z.lineTo(F,N+it),(H!==0||it!==0)&&z.bezierCurveTo(F,N+it*W,F+H*W,N,F+H,N),z}function c(O){function F(ht,P,W){let z=x(P),L=x(W);it===0?H.moveTo(z,L):H.lineTo(z,L),it++}let N=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,H=new Wi,it=0;return O.getAttribute("points").replace(N,F),H.currentPath.autoClose=!0,H}function h(O){function F(ht,P,W){let z=x(P),L=x(W);it===0?H.moveTo(z,L):H.lineTo(z,L),it++}let N=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,H=new Wi,it=0;return O.getAttribute("points").replace(N,F),H.currentPath.autoClose=!1,H}function d(O){let F=x(O.getAttribute("cx")||0),N=x(O.getAttribute("cy")||0),H=x(O.getAttribute("r")||0),it=new ur;it.absarc(F,N,H,0,Math.PI*2);let ht=new Wi;return ht.subPaths.push(it),ht}function u(O){let F=x(O.getAttribute("cx")||0),N=x(O.getAttribute("cy")||0),H=x(O.getAttribute("rx")||0),it=x(O.getAttribute("ry")||0),ht=new ur;ht.absellipse(F,N,H,it,0,Math.PI*2);let P=new Wi;return P.subPaths.push(ht),P}function f(O){let F=x(O.getAttribute("x1")||0),N=x(O.getAttribute("y1")||0),H=x(O.getAttribute("x2")||0),it=x(O.getAttribute("y2")||0),ht=new Wi;return ht.moveTo(F,N),ht.lineTo(H,it),ht.currentPath.autoClose=!1,ht}function p(O){let F="http://www.w3.org/1999/xlink",N=O.querySelectorAll("linearGradient, radialGradient"),H=["x1","y1","x2","y2","cx","cy","r","fx","fy","gradientUnits","gradientTransform","spreadMethod"],it={};for(let P of N){let W=P.getAttribute("id");if(!W)continue;let z={type:P.nodeName==="radialGradient"?"radialGradient":"linearGradient",attrs:{},stops:null,href:null},L=P.getAttributeNS(F,"href")||P.getAttribute("href")||"";L.startsWith("#")&&(z.href=L.substring(1));for(let lt of H)P.hasAttribute(lt)&&(z.attrs[lt]=P.getAttribute(lt));let tt=P.querySelectorAll("stop");if(tt.length>0){z.stops=[];for(let lt of tt){let gt=lt.getAttribute("stop-color");!gt&&lt.style&&(gt=lt.style["stop-color"]),gt||(gt="#000");let ft=lt.getAttribute("stop-opacity");(ft===null||ft==="")&&lt.style&&(ft=lt.style["stop-opacity"]),ft=ft===null||ft===""||ft===void 0?1:Math.max(0,Math.min(1,parseFloat(ft)));let G=Math.max(0,Math.min(1,parseFloat(lt.getAttribute("offset")||"0")));z.stops.push({offset:G,color:gt,opacity:ft})}}it[W]=z}function ht(P,W){let z=it[P];if(!z||W.has(P))return z;if(W.add(P),z.href&&it[z.href]){let L=ht(z.href,W);if(L){z.stops||(z.stops=L.stops);for(let tt in L.attrs)tt in z.attrs||(z.attrs[tt]=L.attrs[tt])}}return z}for(let P in it)ht(P,new Set);for(let P in it){let lt=function(gt){return typeof gt!="string"?0:gt.endsWith("%")?parseFloat(gt)/100:x(gt)},W=it[P],z=W.attrs,L=z.gradientUnits==="userSpaceOnUse"?"userSpaceOnUse":"objectBoundingBox",tt={type:W.type,gradientUnits:L,spreadMethod:z.spreadMethod==="reflect"||z.spreadMethod==="repeat"?z.spreadMethod:"pad",gradientTransform:null,stops:(W.stops||[]).slice().sort((gt,ft)=>gt.offset-ft.offset)};if(z.gradientTransform&&(tt.gradientTransform=new Qt,A(z.gradientTransform,tt.gradientTransform)),W.type==="linearGradient")tt.x1=z.x1!==void 0?lt(z.x1):0,tt.y1=z.y1!==void 0?lt(z.y1):0,tt.x2=z.x2!==void 0?lt(z.x2):L==="objectBoundingBox"?1:0,tt.y2=z.y2!==void 0?lt(z.y2):0;else{let gt=L==="objectBoundingBox"?.5:0,ft=L==="objectBoundingBox"?.5:0;tt.cx=z.cx!==void 0?lt(z.cx):gt,tt.cy=z.cy!==void 0?lt(z.cy):gt,tt.r=z.r!==void 0?lt(z.r):ft,tt.fx=z.fx!==void 0?lt(z.fx):tt.cx,tt.fy=z.fy!==void 0?lt(z.fy):tt.cy}X[P]=tt}}function _(O,F){F=Object.assign({},F);let N={};if(O.hasAttribute("class")){let P=O.getAttribute("class").split(/\s/).filter(Boolean).map(W=>W.trim());for(let W=0;W<P.length;W++)N=Object.assign(N,j["."+P[W]])}O.hasAttribute("id")&&(N=Object.assign(N,j["#"+O.getAttribute("id")]));function H(P,W,z){z===void 0&&(z=function(tt){return tt}),O.hasAttribute(P)&&(F[W]=z(O.getAttribute(P))),N[W]&&(F[W]=z(N[W])),O.style&&O.style[P]!==""&&(F[W]=z(O.style[P]))}function it(P){return Math.max(0,Math.min(1,x(P)))}function ht(P){return Math.max(0,x(P))}return H("fill","fill"),H("fill-opacity","fillOpacity",it),H("fill-rule","fillRule"),H("opacity","opacity",it),H("stroke","stroke"),H("stroke-opacity","strokeOpacity",it),H("stroke-width","strokeWidth",ht),H("stroke-linejoin","strokeLineJoin"),H("stroke-linecap","strokeLineCap"),H("stroke-miterlimit","strokeMiterLimit",ht),H("visibility","visibility"),F}function g(O,F){return O-(F-O)}function m(O,F,N){if(typeof O!="string")throw new TypeError("Invalid input: "+typeof O);let H={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},it=0,ht=1,P=2,W=3,z=it,L=!0,tt="",lt="",gt=[];function ft(wt,I,y){let J=new SyntaxError('Unexpected character "'+wt+'" at index '+I+".");throw J.partial=y,J}function G(){tt!==""&&(lt===""?gt.push(Number(tt)):gt.push(Number(tt)*Math.pow(10,Number(lt)))),tt="",lt=""}let S,St=O.length;for(let wt=0;wt<St;wt++){if(S=O[wt],Array.isArray(F)&&F.includes(gt.length%N)&&H.FLAGS.test(S)){z=ht,tt=S,G();continue}if(z===it){if(H.WHITESPACE.test(S))continue;if(H.DIGIT.test(S)||H.SIGN.test(S)){z=ht,tt=S;continue}if(H.POINT.test(S)){z=P,tt=S;continue}H.COMMA.test(S)&&(L&&ft(S,wt,gt),L=!0)}if(z===ht){if(H.DIGIT.test(S)){tt+=S;continue}if(H.POINT.test(S)){tt+=S,z=P;continue}if(H.EXP.test(S)){z=W;continue}H.SIGN.test(S)&&tt.length===1&&H.SIGN.test(tt[0])&&ft(S,wt,gt)}if(z===P){if(H.DIGIT.test(S)){tt+=S;continue}if(H.EXP.test(S)){z=W;continue}H.POINT.test(S)&&tt[tt.length-1]==="."&&ft(S,wt,gt)}if(z===W){if(H.DIGIT.test(S)){lt+=S;continue}if(H.SIGN.test(S)){if(lt===""){lt+=S;continue}lt.length===1&&H.SIGN.test(lt)&&ft(S,wt,gt)}}H.WHITESPACE.test(S)?(G(),z=it,L=!1):H.COMMA.test(S)?(G(),z=it,L=!0):H.SIGN.test(S)?(G(),z=ht,tt=S):H.POINT.test(S)?(G(),z=P,tt=S):ft(S,wt,gt)}return G(),gt}let M=["mm","cm","in","pt","pc","px"],E={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(O){let F="px";if(typeof O=="string"||O instanceof String)for(let H=0,it=M.length;H<it;H++){let ht=M[H];if(O.endsWith(ht)){F=ht,O=O.substring(0,O.length-ht.length);break}}let N;return F==="px"&&e.defaultUnit!=="px"?N=E.in[e.defaultUnit]/e.defaultDPI:(N=E[F][e.defaultUnit],N<0&&(N=E[F].in*e.defaultDPI)),N*parseFloat(O)}function b(O){if(!(O.hasAttribute("transform")||O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))))return null;let F=T(O);return Y.length>0&&F.premultiply(Y[Y.length-1]),Bt.copy(F),Y.push(F),F}function T(O){let F=new Qt;if(O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))){let N=x(O.getAttribute("x")||0),H=x(O.getAttribute("y")||0);F.makeTranslation(N,H)}return O.hasAttribute("transform")&&A(O.getAttribute("transform"),F),F}function A(O,F){let N=nt,H=O.split(")");for(let it=H.length-1;it>=0;it--){let ht=H[it].trim();if(ht==="")continue;let P=ht.indexOf("("),W=ht.length;if(P>0&&P<W){let z=ht.slice(0,P),L=m(ht.slice(P+1));switch(N.identity(),z){case"translate":if(L.length>=1){let tt=L[0],lt=0;L.length>=2&&(lt=L[1]),N.makeTranslation(tt,lt)}break;case"rotate":if(L.length>=1){let tt=0,lt=0,gt=0;tt=L[0]*Math.PI/180,L.length>=3&&(lt=L[1],gt=L[2]),D.makeTranslation(-lt,-gt),ot.makeRotation(tt),At.multiplyMatrices(ot,D),D.makeTranslation(lt,gt),N.multiplyMatrices(D,At)}break;case"scale":if(L.length>=1){let tt=L[0],lt=tt;L.length>=2&&(lt=L[1]),N.makeScale(tt,lt)}break;case"skewX":L.length===1&&N.set(1,Math.tan(L[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":L.length===1&&N.set(1,0,0,Math.tan(L[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":L.length===6&&N.set(L[0],L[2],L[4],L[1],L[3],L[5],0,0,1);break}F.premultiply(N)}}return F}function v(O,F){function N(P){Ot.set(P.x,P.y,1).applyMatrix3(F),P.set(Ot.x,Ot.y)}function H(P){let W=P.xRadius,z=P.yRadius,L=Math.cos(P.aRotation),tt=Math.sin(P.aRotation),lt=new Z(W*L,W*tt,0),gt=new Z(-z*tt,z*L,0),ft=lt.applyMatrix3(F),G=gt.applyMatrix3(F),S=nt.set(ft.x,G.x,0,ft.y,G.y,0,0,0,1),St=D.copy(S).invert(),y=ot.copy(St).transpose().multiply(St).elements,J=B(y[0],y[1],y[4]),et=Math.sqrt(J.rt1),ct=Math.sqrt(J.rt2);if(P.xRadius=1/et,P.yRadius=1/ct,P.aRotation=Math.atan2(J.sn,J.cs),!((P.aEndAngle-P.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let vt=D.set(et,0,0,0,ct,0,0,0,1),ut=ot.set(J.cs,J.sn,0,-J.sn,J.cs,0,0,0,1),pt=vt.multiply(ut).multiply(S),Rt=kt=>{let{x:Lt,y:Pt}=new Z(Math.cos(kt),Math.sin(kt),0).applyMatrix3(pt);return Math.atan2(Pt,Lt)};P.aStartAngle=Rt(P.aStartAngle),P.aEndAngle=Rt(P.aEndAngle),w(F)&&(P.aClockwise=!P.aClockwise)}}function it(P){let W=V(F),z=U(F);P.xRadius*=W,P.yRadius*=z;let L=W>Number.EPSILON?Math.atan2(F.elements[1],F.elements[0]):Math.atan2(-F.elements[3],F.elements[4]);P.aRotation+=L,w(F)&&(P.aStartAngle*=-1,P.aEndAngle*=-1,P.aClockwise=!P.aClockwise)}let ht=O.subPaths;for(let P=0,W=ht.length;P<W;P++){let L=ht[P].curves;for(let tt=0;tt<L.length;tt++){let lt=L[tt];lt.isLineCurve?(N(lt.v1),N(lt.v2)):lt.isCubicBezierCurve?(N(lt.v0),N(lt.v1),N(lt.v2),N(lt.v3)):lt.isQuadraticBezierCurve?(N(lt.v0),N(lt.v1),N(lt.v2)):lt.isEllipseCurve&&(Ct.set(lt.aX,lt.aY),N(Ct),lt.aX=Ct.x,lt.aY=Ct.y,R(F)?H(lt):it(lt))}}}function w(O){let F=O.elements;return F[0]*F[4]-F[1]*F[3]<0}function R(O){let F=O.elements,N=F[0]*F[3]+F[1]*F[4];if(N===0)return!1;let H=V(O),it=U(O);return Math.abs(N/(H*it))>Number.EPSILON}function V(O){let F=O.elements;return Math.sqrt(F[0]*F[0]+F[1]*F[1])}function U(O){let F=O.elements;return Math.sqrt(F[3]*F[3]+F[4]*F[4])}function $(O){let F=O.elements,N=F[0]*F[4]-F[1]*F[3];return Math.sqrt(Math.abs(N))}function B(O,F,N){let H,it,ht,P,W,z=O+N,L=O-N,tt=Math.sqrt(L*L+4*F*F);return z>0?(H=.5*(z+tt),W=1/H,it=O*W*N-F*W*F):z<0?it=.5*(z-tt):(H=.5*tt,it=-.5*tt),L>0?ht=L+tt:ht=L-tt,Math.abs(ht)>2*Math.abs(F)?(W=-2*F/ht,P=1/Math.sqrt(1+W*W),ht=W*P):Math.abs(F)===0?(ht=1,P=0):(W=-.5*ht/F,ht=1/Math.sqrt(1+W*W),P=W*ht),L>0&&(W=ht,ht=-P,P=W),{rt1:H,rt2:it,cs:ht,sn:P}}let q=[],j={},X={},Y=[],nt=new Qt,D=new Qt,ot=new Qt,At=new Qt,Ct=new dt,Ot=new Z,Bt=new Qt,Gt=new DOMParser().parseFromString(t,"image/svg+xml");return p(Gt),n(Gt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:q,gradients:X,xml:Gt.documentElement}}static createFillMaterial(t){let e=t.userData.style;if(e.fill===void 0||e.fill==="none")return null;let n=t.color,i=null,s=vx.exec(e.fill);if(s){let a=t.userData.gradients&&t.userData.gradients[s[1]];i=aE(a,t)}let o=new An({opacity:e.fillOpacity*(e.opacity||1),transparent:!0,side:ti,depthWrite:!1});return i!==null?o.map=i:o.color=n,o}static createStrokeMaterial(t){let e=t.userData.style;return e.stroke===void 0||e.stroke==="none"?null:(vx.test(e.stroke)&&console.warn("THREE.SVGLoader: Gradient strokes are not supported."),new An({color:new Yt().setStyle(e.stroke,xc),opacity:e.strokeOpacity*(e.opacity||1),transparent:!0,side:ti,depthWrite:!1}))}static createShapes(t){return console.warn("SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead."),t.toShapes()}static getStrokeStyle(t,e,n,i,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(t,e,n,i){let s=[],o=[],a=[];if(r.pointsToStrokeWithBuffers(t,e,n,i,s,o,a)===0)return null;let l=new De;return l.setAttribute("position",new ue(s,3)),l.setAttribute("normal",new ue(o,3)),l.setAttribute("uv",new ue(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,i,s,o,a,l){let c=new dt,h=new dt,d=new dt,u=new dt,f=new dt,p=new dt,_=new dt,g=new dt,m=new dt,M=new dt,E=new dt,x=new dt,b=new dt,T=new dt,A=new dt,v=new dt,w=new dt;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,t=ht(t);let R=t.length;if(R<2)return 0;let V=t[0].equals(t[R-1]),U,$=t[0],B,q=e.strokeWidth/2,j=1/(R-1),X=0,Y,nt,D,ot,At=!1,Ct=0,Ot=l*3,Bt=l*2;Gt(t[0],t[1],c).multiplyScalar(q),g.copy(t[0]).sub(c),m.copy(t[0]).add(c),M.copy(g),E.copy(m);for(let P=1;P<R;P++){U=t[P],P===R-1?V?B=t[1]:B=void 0:B=t[P+1];let W=c;if(Gt($,U,W),d.copy(W).multiplyScalar(q),x.copy(U).sub(d),b.copy(U).add(d),Y=X+j,nt=!1,B!==void 0){Gt(U,B,h),d.copy(h).multiplyScalar(q),T.copy(U).sub(d),A.copy(U).add(d),D=!0,d.subVectors(B,$),W.dot(d)<0&&(D=!1),P===1&&(At=D),d.subVectors(B,U),d.normalize();let z=Math.abs(W.dot(d));if(z>Number.EPSILON){let L=q/z;d.multiplyScalar(-L),u.subVectors(U,$),f.copy(u).setLength(L).add(d),v.copy(f).negate();let tt=f.length(),lt=u.length();u.divideScalar(lt),p.subVectors(B,U);let gt=p.length();if(p.divideScalar(gt),u.dot(v)<lt&&p.dot(v)<gt&&(nt=!0),w.copy(f).add(U),v.add(U),nt){let ft=D?m:g,G=(w.x-ft.x)*(v.y-ft.y)-(w.y-ft.y)*(v.x-ft.x);(D&&G<0||!D&&G>0)&&v.copy(ft)}switch(ot=!1,nt?D?(A.copy(v),b.copy(v)):(T.copy(v),x.copy(v)):F(),e.strokeLineJoin){case"bevel":N(D,nt,Y);break;case"round":H(D,nt),D?O(U,x,T,Y,0):O(U,A,b,Y,1);break;default:let ft=q*e.strokeMiterLimit/tt;if(ft<1)if(e.strokeLineJoin!=="miter-clip"){N(D,nt,Y);break}else H(D,nt),D?(p.subVectors(w,x).multiplyScalar(ft).add(x),_.subVectors(w,T).multiplyScalar(ft).add(T),k(x,Y,0),k(p,Y,0),k(U,Y,.5),k(U,Y,.5),k(p,Y,0),k(_,Y,0),k(U,Y,.5),k(_,Y,0),k(T,Y,0)):(p.subVectors(w,b).multiplyScalar(ft).add(b),_.subVectors(w,A).multiplyScalar(ft).add(A),k(b,Y,1),k(p,Y,1),k(U,Y,.5),k(U,Y,.5),k(p,Y,1),k(_,Y,1),k(U,Y,.5),k(_,Y,1),k(A,Y,1));else nt?(D?(k(m,X,1),k(g,X,0),k(w,Y,0),k(m,X,1),k(w,Y,0),k(v,Y,1)):(k(m,X,1),k(g,X,0),k(w,Y,1),k(g,X,0),k(v,Y,0),k(w,Y,1)),D?T.copy(w):A.copy(w)):D?(k(x,Y,0),k(w,Y,0),k(U,Y,.5),k(U,Y,.5),k(w,Y,0),k(T,Y,0)):(k(b,Y,1),k(w,Y,1),k(U,Y,.5),k(U,Y,.5),k(w,Y,1),k(A,Y,1)),ot=!0;break}}else F()}else F();!V&&P===R-1&&it(t[0],M,E,D,!0,X),X=Y,$=U,g.copy(T),m.copy(A)}if(!V)it(U,x,b,D,!1,Y);else if(nt&&s){let P=w,W=v;At!==D&&(P=v,W=w),D?(ot||At)&&(W.toArray(s,0),W.toArray(s,9),ot&&P.toArray(s,3)):(ot||!At)&&(W.toArray(s,3),W.toArray(s,9),ot&&P.toArray(s,0))}if(s){let P=[new dt,new dt,new dt],W=l*3;for(let z=W;z<Ot;z+=9)P[0].set(s[z],s[z+1]),P[1].set(s[z+3],s[z+4]),P[2].set(s[z+6],s[z+7]),ir.area(P)<0&&(s[z+3]=P[0].x,s[z+4]=P[0].y)}return Ct;function Gt(P,W,z){return z.subVectors(W,P),z.set(-z.y,z.x).normalize()}function k(P,W,z){s&&(s[Ot]=P.x,s[Ot+1]=P.y,s[Ot+2]=0,o&&(o[Ot]=0,o[Ot+1]=0,o[Ot+2]=1),Ot+=3,a&&(a[Bt]=W,a[Bt+1]=z,Bt+=2)),Ct+=3}function O(P,W,z,L,tt){c.copy(W).sub(P).normalize(),h.copy(z).sub(P).normalize();let lt=Math.PI,gt=c.dot(h);Math.abs(gt)<1&&(lt=Math.abs(Math.acos(gt))),lt/=n,d.copy(W);for(let ft=0,G=n-1;ft<G;ft++)u.copy(d).rotateAround(P,lt),k(d,L,tt),k(u,L,tt),k(P,L,.5),d.copy(u);k(d,L,tt),k(z,L,tt),k(P,L,.5)}function F(){k(m,X,1),k(g,X,0),k(x,Y,0),k(m,X,1),k(x,Y,0),k(b,Y,1)}function N(P,W,z){W?P?(k(m,X,1),k(g,X,0),k(x,Y,0),k(m,X,1),k(x,Y,0),k(v,Y,1),k(x,z,0),k(T,z,0),k(v,z,.5)):(k(m,X,1),k(g,X,0),k(b,Y,1),k(g,X,0),k(v,Y,0),k(b,Y,1),k(b,z,1),k(v,z,0),k(A,z,1)):P?(k(x,z,0),k(T,z,0),k(U,z,.5)):(k(b,z,1),k(A,z,0),k(U,z,.5))}function H(P,W){W&&(P?(k(m,X,1),k(g,X,0),k(x,Y,0),k(m,X,1),k(x,Y,0),k(v,Y,1),k(x,X,0),k(U,Y,.5),k(v,Y,1),k(U,Y,.5),k(T,X,0),k(v,Y,1)):(k(m,X,1),k(g,X,0),k(b,Y,1),k(g,X,0),k(v,Y,0),k(b,Y,1),k(b,X,1),k(v,Y,0),k(U,Y,.5),k(U,Y,.5),k(v,Y,0),k(A,X,1)))}function it(P,W,z,L,tt,lt){switch(e.strokeLineCap){case"round":tt?O(P,z,W,lt,.5):O(P,W,z,lt,.5);break;case"square":if(tt)c.subVectors(W,P),h.set(c.y,-c.x),d.addVectors(c,h).add(P),u.subVectors(h,c).add(P),L?(d.toArray(s,3),u.toArray(s,0),u.toArray(s,9)):(d.toArray(s,3),a[7]===1?u.toArray(s,9):d.toArray(s,9),u.toArray(s,0));else{c.subVectors(z,P),h.set(c.y,-c.x),d.addVectors(c,h).add(P),u.subVectors(h,c).add(P);let gt=s.length;L?(d.toArray(s,gt-3),u.toArray(s,gt-6),u.toArray(s,gt-12)):(u.toArray(s,gt-6),d.toArray(s,gt-3),u.toArray(s,gt-12))}break;default:break}}function ht(P){let W=!1;for(let L=1,tt=P.length-1;L<tt;L++)if(P[L].distanceTo(P[L+1])<i){W=!0;break}if(!W)return P;let z=[];z.push(P[0]);for(let L=1,tt=P.length-1;L<tt;L++)P[L].distanceTo(P[L+1])>=i&&z.push(P[L]);return z.push(P[P.length-1]),z}}},vx=/^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;function aE(r,t,e=256){if(!r||!Array.isArray(r.stops)||r.stops.length===0)return null;let n=t.userData.transform,i=r.gradientUnits==="objectBoundingBox",s=null;if(i&&(s=lE(t,n),s===null))return null;function o(d,u,f){f.set(d,u,1),r.gradientTransform&&f.applyMatrix3(r.gradientTransform),i&&f.set(s.minX+f.x*s.width,s.minY+f.y*s.height,1),n&&f.applyMatrix3(n)}let a=document.createElement("canvas"),l;if(r.type==="linearGradient"){a.width=e,a.height=1;let d=a.getContext("2d"),u=d.createLinearGradient(0,0,e,0);yx(u,r.stops),d.fillStyle=u,d.fillRect(0,0,e,1);let f=new Z,p=new Z;o(r.x1,r.y1,f),o(r.x2,r.y2,p);let _=p.x-f.x,g=p.y-f.y,m=_*_+g*g||1e-20,M=_/m,E=g/m,x=-(M*f.x+E*f.y);l=new Qt().set(M,E,x,0,0,.5,0,0,1)}else{let d=r.cx,u=r.cy,f=r.fx,p=r.fy,_=r.r;if(r.gradientTransform){let v=new Z;v.set(d,u,1).applyMatrix3(r.gradientTransform),d=v.x,u=v.y,v.set(f,p,1).applyMatrix3(r.gradientTransform),f=v.x,p=v.y}if(i&&(d=s.minX+d*s.width,u=s.minY+u*s.height,f=s.minX+f*s.width,p=s.minY+p*s.height,_=_*Math.sqrt((s.width*s.width+s.height*s.height)/2)),_<=0)return null;a.width=e,a.height=e;let g=a.getContext("2d"),m=d-_,M=u-_,E=2*_,x=e/E;g.setTransform(x,0,0,x,-m*x,-M*x);let b=g.createRadialGradient(f,p,0,d,u,_);yx(b,r.stops),g.fillStyle=b,g.fillRect(m,M,E,E);let T=n?n.clone().invert():new Qt;l=new Qt().set(1/E,0,-m/E,0,1/E,-M/E,0,0,1).multiply(T)}let c=new ai(a);c.colorSpace=xc,c.flipY=!1,c.matrixAutoUpdate=!1,c.matrix=l;let h=r.spreadMethod==="reflect"?Qo:r.spreadMethod==="repeat"?Nr:Di;return c.wrapS=h,c.wrapT=h,c}function lE(r,t){let e=t?t.clone().invert():null,n=new dt,i=new fa;for(let s of r.subPaths)for(let o of s.getPoints())n.copy(o),e&&n.applyMatrix3(e),i.expandByPoint(n);return i.isEmpty()?null:{minX:i.min.x,minY:i.min.y,width:i.max.x-i.min.x,height:i.max.y-i.min.y}}function yx(r,t){let e=new Yt;for(let n of t){let i=n.color;if(n.opacity<1){e.setStyle(n.color,xc);let s=/rgb\(([^)]+)\)/.exec(e.getStyle(xc));s&&(i=`rgba(${s[1]},${n.opacity})`)}r.addColorStop(Math.max(0,Math.min(1,n.offset)),i)}}var Ta={viewBox:[0,0,893.5,1e3],paths:["M0 664.6L10.3 614.4L37.3 446.8L100 362.9L89 345.8L105.6 18.9L100.9 0L306.5 220.9L397.5 220.9L401 223.6L399.4 225.4L383.5 230.6L225.8 305.7L212.6 313.7L209.7 313.7L209.7 311.5L257.8 254.4L197.4 178.4L139.8 111.7L152.5 311.1L150.4 314.3L148.4 314.3L139.3 323.5L129.6 336.8L142.2 350.3L142.5 355.7L137.7 357.9L61 457.6L53.9 555.5L98 529.6L70.1 575.2L0 664.6Z","M893.5 669.2L822.6 578.4L791.6 528L839.1 555.9L831.1 459.1L753.2 358.8L748.6 354.2L748.6 351.6L762.6 336.6L740.9 311.7L752.4 111.8L652.1 233.5L636.7 254.8L687.8 316.5L507.1 229.1L494.2 224.7L494.6 222.6L497.6 220.8L586.8 220.8L790.4 0.9L790.4 52.2L805.5 347.4L792.8 361.6L856.4 447.5L893.5 669.2Z","M402.3 869.1L399 863L399 518.8L377.2 517.5L223.7 517.5L239.8 504.6L181.4 404.8L714.1 404.8L654.4 504.2L672.7 518.2L495.6 518.2L495.6 864.7L446.3 918.4L402.3 869.1Z","M273.7 898L264.7 886.5L101.5 719.6L55.6 676.4L127.4 565.8L133.7 553.9L135.9 552.5L138 554.7L132.1 677.7L161.2 713.3L179.7 673.5L199.5 714.7L253.3 837.4L276.7 894.7L276.3 897.7L273.7 898Z","M398 998.1C395 997.5 391.7 996.4 388.2 994.9L387.6 994.6C384.1 993.1 380.9 991.4 377.9 989.5C374.9 987.5 372.2 985.1 369.7 982.3L367.3 979.5C364.8 976.7 362.5 973.7 360.4 970.5L359.6 969.3C357.6 966.1 355.6 962.9 353.9 959.5L341.7 936.8C339.9 933.4 338.3 930 336.8 926.5L323.6 896C322.1 892.5 321 888.9 320.1 885.2L316.5 869.8C315.6 866.1 315 862.3 314.7 858.6L313.5 843.4C313.2 839.6 313.4 835.9 314 832.1L314.9 826.4C315.4 822.7 315.7 819.4 315.7 816.6C315.7 813.8 316 811.3 316.6 809C317.2 806.7 317.7 803.7 318 799.9L329.1 685.7C329.5 682 329.4 679.5 329 678.4L328.2 676.7L325.3 675C323.3 673.9 320.8 672.3 317.7 670.1L270.2 636.9C267.1 634.7 264.6 632 262.6 628.8L256.8 619.2C254.8 616 253 612.7 251.4 609.3L250.5 607.5C248.8 604.1 247.3 601.4 246 599.5C244.7 597.6 243.1 595 241.4 591.7L229.5 569.5C227.7 566.2 225.6 563.1 223 560.3L216 552.6L216.3 549.4L219.7 549L256.9 570.7C260.1 572.6 263.4 574.6 266.6 576.6L305.8 600.9C309.1 602.9 311.7 605.5 313.8 608.6L353.8 668.8C355.9 671.9 356.9 675.4 356.9 679.2L356.9 888.1L360.5 891.6C362.8 894 365.2 896.7 367.5 899.6L447.4 998.8L432.8 999.8C429 1000 425.2 1000.1 421.4 999.9L408.2 999.3C404.4 999.1 401 998.7 398 998.1Z","M456.2 999.1L446.6 997.8L495.4 936.8C497.8 933.9 500.2 930.9 502.6 928.1L536.6 888.4L536.6 679.4C536.6 675.6 537.7 672.1 539.8 669L551.6 651.9C553.8 648.7 554.9 647 554.9 646.5L554.9 645.8L557 643.3C558.4 641.7 560.1 639.3 562.1 636.1L570.7 622.6C572.8 619.4 574.4 617.2 575.6 615.8C576.8 614.4 578.2 612.3 579.7 609.5C581.3 606.6 582.8 604.7 584.1 603.7C585.4 602.7 587.7 601.2 590.9 599.2L668.7 551.9C672 549.9 674.1 548.8 675.3 548.5C676.4 548.1 677.2 548.1 677.7 548.3L678.5 548.5L678.5 550.3C678.5 551.4 677.5 553.6 675.3 556.7L674 558.6C671.8 561.7 669.8 564.9 667.9 568.2L635.8 625.1C633.9 628.4 632.3 630.8 631 632.5C629.7 634.2 627.4 636.1 624.3 638.2L564.7 677.7L577.6 803.1C578 806.8 578.4 810.6 578.9 814.3L581.3 831.5C581.8 835.2 582 838.1 582 840.2C582 842.4 581.7 845.3 581 849L576.5 874.4C575.8 878.1 574.9 881.8 573.8 885.4L571.5 892.9C570.4 896.5 569.2 900.1 567.7 903.6L565.8 908.2C564.4 911.7 562.9 915.1 561.2 918.5L548.5 944.3C546.9 947.7 545 951 543 954.2L529.8 974.8C527.8 977.9 525.4 980.9 522.7 983.5L522.6 983.6C519.9 986.2 517.4 988.4 515.1 990C512.7 991.7 509.9 993.3 506.4 994.8L505.5 995.3C502 996.8 498.7 998 495.5 998.7C492.4 999.5 488.9 999.9 485.1 999.9L467.5 999.9C463.7 999.9 459.9 999.6 456.2 999.1Z","M615.8 899.7L669.7 768.7L714 672.4L732.3 712.4L760.6 678.3L754.7 549.5L838.2 674.2L838.2 677.5L833 681L615.8 899.7Z"]},hm={viewBox:[0,0,5391.9,1e3],paths:["M239.1 512.7L239.1 118.2L9.4 118.2L9.4 0L588.5 0L588.5 118.5L360.1 118.5L360.1 512.7L239.1 512.7Z","M1117.5 516.2L1072.9 516.2C1053.8 516.2 1037.6 513.3 1024.3 507.6C1011 501.8 998.6 494.4 987.1 485.2C975.6 476 967.7 466.3 963.3 456.1C958.9 445.9 955.4 433 952.8 417.3C950.2 401.6 948.9 384.2 948.9 365.1L948.9 129.1C948.9 110 953.5 92 962.6 75.2L972.1 57.6C981.2 40.8 990.1 29.5 998.7 23.8C1007.3 18.1 1019.1 12.7 1034.1 7.6C1049 2.6 1066.1 0 1085.2 0L1433.2 0C1452.3 0 1470.4 2.9 1487.4 8.7C1504.4 14.4 1517.6 20.8 1527.1 27.9C1536.6 35 1545.3 43.9 1553.4 54.7C1561.5 65.4 1567.1 76.8 1570.1 88.8C1573.2 100.8 1574.7 116.4 1574.7 135.5L1574.7 381C1574.7 400.1 1570.3 418.2 1561.6 435.2L1559.5 439.4C1550.7 456.4 1541.5 469.7 1531.7 479.4C1521.9 489 1512.4 496 1503.2 500.3C1494 504.6 1482.2 508.3 1467.7 511.5C1453.2 514.6 1436.4 516.2 1417.3 516.2L1174.9 516.2C1155.8 516.2 1136.7 516.2 1117.5 516.2ZM1428.4 393.8C1438.9 388.5 1445.2 383.8 1447.3 379.8C1449.4 375.7 1450.5 364.2 1450.5 345L1450.5 185.7C1450.5 166.6 1448.6 153.4 1444.8 146.3C1441 139.1 1434 132.9 1423.8 127.8C1413.5 122.7 1398.8 120.1 1379.7 120.1L1133.5 120.1C1114.4 120.1 1101.4 121.8 1094.7 125.4C1087.9 128.9 1082.8 133.6 1079.3 139.4C1075.8 145.3 1074.1 157.8 1074.1 177L1074.1 340.7C1074.1 359.8 1076.7 372.4 1081.8 378.4C1086.9 384.4 1092.9 389.8 1100 394.6C1107 399.4 1120.1 401.7 1139.2 401.7L1384 401.7C1403.1 401.7 1417.9 399.1 1428.4 393.8Z","M2433.8 520.8L2207.8 329.1L2114.2 263.8L2114.2 516.5L1984.2 516.5L1984.2 0L2113.8 0L2113.8 242.5L2413.2 0L2636.2 0L2561.9 39.4L2307.8 244.8L2634.3 520.8L2433.8 520.8Z","M3156.5 516L3156.5 121.2L2933.4 121.2L2933.4 0L3514.6 0L3514.6 121.2L3287.2 121.2L3287.2 516L3156.5 516Z","M3766.8 517.1L4051.7 0.5L4180.7 0.5L4477.9 516.6L4329.1 516.6L4115.2 138.5L3916 517.1L3766.8 517.1Z","M4801.3 516.3L4801.3 0.7L5249.7 0.7C5268.9 0.7 5285.8 4.3 5300.6 11.6C5315.3 18.9 5326.7 26.7 5334.6 35C5342.5 43.4 5350 54.7 5357.1 69.1C5364.2 83.5 5367.7 100.3 5367.7 119.4L5367.7 228.3C5367.7 247.4 5363.8 264.9 5356 280.8C5348.1 296.6 5340.7 307.8 5333.6 314.5C5326.6 321.1 5314.3 328.3 5296.7 335.9L5243.5 358.9L5391.9 519.2L5265.6 519.2C5246.5 519.2 5233.6 516.9 5227.1 512.3C5220.5 507.7 5210.9 498.2 5198.1 484L5099.1 373C5086.4 358.7 5070.4 351.6 5051.3 351.6L4925.8 351.6L4925.8 516.3L4801.3 516.3ZM5216.5 232.8C5224.1 230.6 5230.6 227 5236 222C5241.3 216.9 5244 206.5 5244 190.7C5244 175 5242.5 161 5239.6 148.9C5236.7 136.9 5231.8 129 5225 125.4C5218.1 121.9 5205.1 120.1 5186 120.1L4926.7 120.1L4926.7 235.9L5176.4 235.9C5195.5 235.9 5208.9 234.9 5216.5 232.8Z","M0 883.7L596.2 883.7L596.2 912.4L0 912.4L0 883.7Z","M869.2 995.5L869.2 777.7L1041.2 777.7L1041.2 821.2L915.1 821.2L915.1 862.8L922.7 872.5L1007.1 872.5L1020.5 872.6L1020.5 912.2L909.6 912.2L909.6 995.5L869.2 995.5Z","M1270.7 996.7L1270.7 779L1316.7 779L1316.7 996.7L1270.7 996.7Z","M1578.5 985.5C1570.3 977.7 1564.7 969.1 1561.8 959.6C1559 950.1 1557.5 935.8 1557.5 916.7L1557.5 856.1C1557.5 837 1559.5 822.4 1563.4 812.3C1567.2 802.3 1572.3 794.6 1578.6 789.3C1584.9 784.1 1592 780.3 1599.9 778.1C1607.8 775.9 1621.3 774.8 1640.4 774.8L1675.1 774.8C1694.2 774.8 1709.9 776.5 1722 779.9C1734.2 783.3 1744.1 789 1751.8 796.9C1759.6 804.8 1764 812.6 1765.3 820.3C1766.5 828 1766.5 834.5 1765.1 839.9C1763.8 845.3 1760.9 849.2 1756.3 851.6C1751.8 854 1745.5 854 1737.4 851.6C1729.3 849.2 1722.8 844.9 1717.9 838.9C1713 832.8 1708.1 828.5 1703 826C1698 823.5 1685.9 822.3 1666.7 822.3L1645.8 822.3C1626.6 822.3 1615.4 823 1612 824.4C1608.7 825.8 1606.1 830.3 1604.1 838.1C1602.2 845.8 1601.2 859.3 1601.2 878.4L1601.2 912.8C1601.2 931.9 1604.4 943.9 1610.7 948.8C1617 953.6 1629.7 956 1648.9 956L1676.4 956C1695.5 956 1707.3 955 1711.8 953L1718.6 949.9L1718.6 921.7L1712.1 918.2C1707.8 915.9 1699.4 915.5 1687 916.9C1674.5 918.3 1666 916.8 1661.5 912.3C1657 907.8 1654.8 902.4 1654.8 896.2C1654.8 890 1657.7 884.7 1663.6 880.5C1669.4 876.4 1681.9 874.3 1701 874.3L1766.2 874.3L1766.2 923.1C1766.2 942.2 1764.9 956 1762.2 964.4C1759.6 972.8 1753.9 980.4 1745 987.1C1736.2 993.8 1722.2 997.1 1703.1 997.1L1619.6 997.1C1600.5 997.1 1586.8 993.3 1578.5 985.5Z","M1996.6 993.7L1996.6 778.2L2042.5 778.2L2042.5 864.1L2161 864.1L2161 776.6L2204.2 776.6L2205.6 788.8L2205.6 983.6L2205.9 998.8L2161.8 998.8L2161.8 909.2L2044.4 909.2L2044.4 993.7L1996.6 993.7Z","M2493.6 996.1L2493.6 822.6L2414.3 822.6L2414.3 778.5L2431.2 779.1L2600.5 779.1L2615.3 779.2L2615.3 822.8L2541.2 822.8L2541.2 996.1L2493.6 996.1Z","M3130 990.1C3115.5 983.9 3105.6 975.8 3100.5 965.6C3095.4 955.4 3092.8 940.8 3092.8 921.7L3092.8 856.1C3092.8 837 3094 823.2 3096.3 814.7C3098.7 806.2 3103.5 798.6 3110.7 791.8C3117.8 785 3127 780.6 3138.2 778.5C3149.4 776.4 3164.5 775.3 3183.6 775.3L3225.1 775.3C3244.2 775.3 3259.1 778.1 3269.7 783.8C3280.4 789.5 3288.1 795.9 3292.8 803.2C3297.6 810.4 3300 819.1 3300 829.3C3300 839.5 3297.7 846.2 3292.9 849.5C3288.2 852.8 3280.7 853.8 3270.5 852.5C3260.3 851.2 3253.6 846.9 3250.6 839.7C3247.6 832.5 3243.4 827.9 3237.8 825.8C3232.2 823.7 3219.9 822.6 3200.8 822.6L3182.6 822.6C3163.5 822.6 3151.2 825.9 3145.7 832.4C3140.2 839 3137.4 851.8 3137.4 870.9L3137.4 901.9C3137.4 921 3138.4 933.2 3140.4 938.4C3142.3 943.6 3146.8 947.4 3153.6 949.7C3160.5 952.1 3173.4 953.3 3192.6 953.3L3212.3 953.3C3231.5 953.3 3242.2 952.5 3244.6 950.9C3247 949.3 3249 945 3250.5 938C3252 931 3255.4 926.5 3260.7 924.5C3265.9 922.5 3272.2 921.5 3279.5 921.5C3286.8 921.5 3292.6 923.6 3296.8 927.8L3303.2 934.2L3298.7 949.8C3295.8 960.2 3290.5 969.6 3282.9 978C3275.3 986.3 3267.5 992 3259.5 995C3251.4 997.9 3237.8 999.4 3218.7 999.4L3180.5 999.4C3161.3 999.4 3144.5 996.3 3130 990.1Z","M3515.8 997.1L3515.8 781.9L3564.7 781.9L3564.7 956.5L3688.8 956.5L3688.8 997.1L3515.8 997.1Z","M3936.2 997.3C3927.7 995.5 3920.6 991.8 3914.9 986.3C3909.2 980.8 3904 973.2 3899.5 963.3C3894.9 953.5 3892.7 939 3892.7 919.9L3892.7 815.5C3892.7 796.4 3895.1 784.7 3900 780.5C3904.9 776.3 3911.4 774.7 3919.5 775.8C3927.5 776.9 3933.1 778.7 3936.2 781.3C3939.3 783.8 3940.9 794.7 3940.9 813.8L3940.9 944.1L3955.9 949.8C3965.9 953.5 3980.5 955.4 3999.6 955.4L4048.5 955.4L4048.5 811.8C4048.5 792.6 4049.6 782.1 4051.8 780.2C4054 778.2 4059.7 776.8 4069 775.9C4078.2 775 4085.2 775.9 4090.1 778.7L4097.5 782.8L4097.5 922.6C4097.5 941.7 4096.3 954 4093.9 959.5C4091.5 965 4087.5 970.7 4081.8 976.7C4076.1 982.8 4069 988.2 4060.5 992.9C4052 997.6 4038.1 1000 4019 1000L3977.6 1000C3958.4 1000 3944.6 999.1 3936.2 997.3Z","M4306.5 996.9L4306.5 775.2L4433.5 775.2C4452.6 775.2 4466.9 778 4476.3 783.7C4485.6 789.5 4492.5 795.3 4496.8 801.3C4501 807.3 4503.2 818.1 4503.2 833.5C4503.2 849 4500.8 861.3 4496 870.4L4488.7 884.1L4495.7 893.5C4500.3 899.7 4503.6 906.1 4505.4 912.5C4507.3 918.9 4507.3 929.5 4505.4 944.3C4503.5 959.2 4499.9 970.7 4494.4 978.9C4488.9 987.2 4482.2 992.3 4474.2 994.1C4466.2 995.9 4452.6 996.9 4433.5 996.9L4306.5 996.9ZM4443.6 953.1C4449.5 950.9 4453.3 948.5 4454.9 946C4456.5 943.4 4457.3 938.7 4457.4 931.8C4457.4 924.9 4455.3 919.3 4451 915.1C4446.8 910.8 4435.1 908.7 4416 908.7L4388.6 908.7C4369.4 908.7 4358.6 910 4356 912.5C4353.5 915.1 4352.2 921.4 4352.2 931.5C4352.2 941.6 4354.6 948.3 4359.3 951.6C4364 954.9 4375.9 956.5 4395.1 956.5L4406 956.5C4425.1 956.5 4437.7 955.4 4443.6 953.1ZM4446 858.1C4449.4 855.4 4451 851.1 4451 845.2C4451 839.3 4448.8 834.2 4444.3 829.8C4439.9 825.3 4428.1 823.1 4408.9 823.1L4394.2 823.1C4375.1 823.1 4363.3 824.2 4358.9 826.2L4352.2 829.2L4352.2 862.2L4412.3 862.2C4431.5 862.2 4442.7 860.8 4446 858.1Z","M4766.7 883.6L5378.9 883.6L5378.9 912.3L4766.7 912.3L4766.7 883.6Z"]};function cE(r=512){let t=document.createElement("canvas");t.width=t.height=r;let e=t.getContext("2d");e.fillStyle="#bdb7ac",e.fillRect(0,0,r,r);for(let s=0;s<70;s++){let o=Math.random()*r,a=Math.random()*r,l=20+Math.random()*90,c=e.createRadialGradient(o,a,0,o,a,l),h=Math.random()>.5?255:0;c.addColorStop(0,`rgba(${h},${h},${h},${.05+Math.random()*.08})`),c.addColorStop(1,`rgba(${h},${h},${h},0)`),e.fillStyle=c,e.fillRect(o-l,a-l,l*2,l*2)}for(let s=0;s<2600;s++){let o=Math.random()*r,a=Math.random()*r,l=20+Math.random()*160,c=Math.random()>.5?255:0;e.fillStyle=`rgba(${c},${c},${c},${.03+Math.random()*.06})`,e.fillRect(a,o,l,1)}for(let s=0;s<1400;s++)e.fillStyle=`rgba(0,0,0,${.1+Math.random()*.25})`,e.fillRect(Math.random()*r,Math.random()*r,1+Math.random()*2,1+Math.random()*2);let n=new ai(t);n.colorSpace=Je,n.wrapS=n.wrapT=Nr,n.anisotropy=8;let i=new ai(t);return i.wrapS=i.wrapT=Nr,{map:n,rough:i}}function Sx({height:r=2.3,depth:t=70}={}){let[,,e,n]=Ta.viewBox,i=`<svg xmlns="http://www.w3.org/2000/svg">${Ta.paths.map(p=>`<path d="${p}"/>`).join("")}</svg>`,s=new mf().parse(i).paths.flatMap(p=>p.toShapes(!0)),o=new kl(s,{depth:t,curveSegments:6,bevelEnabled:!0,bevelThickness:14,bevelSize:7,bevelSegments:3});o.translate(-e/2,-n/2,-t/2);let a=o.attributes.uv;for(let p=0;p<a.count;p++)a.setXY(p,a.getX(p)/700,a.getY(p)/700);let{map:l,rough:c}=cE(),h=new js({color:15525594,map:l,roughnessMap:c,metalness:1,roughness:.42,clearcoat:.25,clearcoatRoughness:.35,envMapIntensity:1.1}),d=new fe(o,h),u=r/n;d.scale.set(u,-u,u);let f=new wn;return f.add(d),{group:f,mesh:d,material:h}}function hE(){let r=document.createElement("canvas");r.width=4096,r.height=128;let t=r.getContext("2d"),e=new ai(r);e.colorSpace=Je,e.anisotropy=8;let n=()=>{t.clearRect(0,0,r.width,r.height),t.fillStyle="#fff",t.font="600 76px Oswald, Impact, sans-serif","letterSpacing"in t&&(t.letterSpacing="8px"),t.textBaseline="middle";let i="TOKTAR FIGHT CLUB  \u2726  BOXING  \u2726  MMA  \u2726  DISCIPLINE  \u2726  ",s=t.measureText(i).width,o=Math.max(1,Math.round(r.width/s));t.save(),t.scale(r.width/(s*o),1);for(let a=0;a<o;a++)t.fillText(i,a*s,68);t.restore(),e.needsUpdate=!0};return n(),document.fonts&&document.fonts.ready.then(n),e}function uE(r){let t=new lr;t.background=new Yt(328966);let e=(s,o,a,l,c)=>{let h=new fe(new hs(a,l),new An({color:new Yt(s).multiplyScalar(o),side:ti}));h.position.set(...c),h.lookAt(0,0,0),t.add(h)};e(16777215,3,6,2,[-5,6,4]),e(16774374,1.6,10,3,[0,8,2]),e(16738859,2.6,8,3,[6,-3,3]),e(16747072,1.6,10,2,[0,2,-8]),e(16734752,1.2,3,8,[-7,-1,-2]),e(14209220,1.1,12,12,[0,0,9]);let n=new Ss(r),i=n.fromScene(t,.02).texture;return n.dispose(),i}function fE(){let r=document.createElement("canvas");r.width=r.height=256;let t=r.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);e.addColorStop(0,"rgba(255,120,50,0.85)"),e.addColorStop(.35,"rgba(255,90,30,0.3)"),e.addColorStop(1,"rgba(255,80,20,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);let n=new ai(r);return n.colorSpace=Je,n}function dE(r,t){let e=new De,n=new Float32Array(r*3),i=new Float32Array(r),s=new Float32Array(r),o=new Float32Array(r);for(let c=0;c<r;c++)n[c*3]=(Math.random()-.5)*14,n[c*3+1]=(Math.random()-.5)*9,n[c*3+2]=2.5-Math.random()*7,i[c]=.15+Math.random()*.45,s[c]=Math.random()*100,o[c]=.3+Math.random()*Math.random()*1.4;e.setAttribute("position",new je(n,3)),e.setAttribute("aSpeed",new je(i,1)),e.setAttribute("aOffset",new je(s,1)),e.setAttribute("aScale",new je(o,1));let a=new We({uniforms:{uTime:{value:0},uPR:{value:t},uSize:{value:70}},vertexShader:`
      uniform float uTime; uniform float uPR; uniform float uSize;
      attribute float aSpeed; attribute float aOffset; attribute float aScale;
      varying float vAlpha; varying float vHeat;
      void main() {
        vec3 p = position;
        p.y = mod(p.y + uTime * aSpeed + 4.5, 9.0) - 4.5;
        p.x += sin(uTime * 0.6 + aOffset) * 0.35 + sin(uTime * 1.7 + aOffset * 3.0) * 0.08;
        p.z += cos(uTime * 0.5 + aOffset) * 0.2;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uSize * aScale * uPR / -mv.z;
        float life = (p.y + 4.5) / 9.0;
        vAlpha = smoothstep(0.0, 0.15, life) * (1.0 - smoothstep(0.6, 1.0, life)) * (0.6 + 0.4 * sin(uTime * 6.0 + aOffset * 10.0));
        vHeat = aScale;
      }`,fragmentShader:`
      varying float vAlpha; varying float vHeat;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        vec3 c = mix(vec3(1.0, 0.33, 0.07), vec3(1.0, 0.78, 0.4), clamp(vHeat * 0.6, 0.0, 1.0));
        gl_FragColor = vec4(c * 1.8, a * vAlpha);
      }`,transparent:!0,depthWrite:!1,blending:dr}),l=new $s(e,a);return l.frustumCulled=!1,l}function Mx(r){let t;try{t=new ya({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(q){return null}let e=innerWidth<800;t.setPixelRatio(Math.min(devicePixelRatio,e?1.5:2)),t.toneMapping=Or,t.toneMappingExposure=.95;let n=new lr;t.setClearColor(0,0);let i=new ln(35,1,.1,60);i.position.set(0,0,8),n.environment=uE(t);let s=new wn;n.add(s);let{group:o}=Sx({height:2.3});s.add(o);let a=new wn;n.add(a),a.add(new $l(3158074,.6));let l=new Jl(16777215,.9);l.position.set(-4.6,5.8,6.9),a.add(l,l.target);let c=new Si(16738859,40,0,2);c.position.set(3.7,-1.6,2.8);let h=new Si(16751164,22,0,2);h.position.set(-3,-2.3,1.8);let d=new Si(16731418,60,0,2);d.position.set(0,1.8,-2.5),a.add(c,h,d);let u=hE(),f=new Ks(1.75,1.75,.2,160,1,!0),p=new wn;p.rotation.set(.32,0,-.18);let _=new wn;_.add(new fe(f,new An({map:u,transparent:!0,depthWrite:!1,color:16767168,opacity:.95})),new fe(f,new An({map:u,transparent:!0,depthWrite:!1,side:dn,color:16747088,opacity:.22}))),p.add(_),s.add(p);let g=new fe(new hs(7,7),new An({map:fE(),transparent:!0,depthWrite:!1,blending:dr,opacity:.32}));n.add(g);let m=dE(e?260:650,t.getPixelRatio());n.add(m);let M=new ff(t);M.addPass(new df(n,i));let E=new ba(new dt(256,256),.55,.5,.82);M.addPass(E),M.addPass(new pf);let x={x:0,y:0,s:1};function b(){let q=innerWidth,j=innerHeight;t.setSize(q,j,!1),M.setSize(q,j),i.aspect=q/j,i.updateProjectionMatrix();let X=Math.tan(so.degToRad(i.fov/2))*i.position.z,Y=X*i.aspect;i.aspect>1.05?x={x:Math.min(Y*.56,4),y:0,s:Math.min(1.15,X*.46)}:x={x:0,y:X*.56,s:Math.min(Y*.48,.85)}}b(),addEventListener("resize",b);let T=0,A=0,v=0,w=0,R=0,V=!0,U=-1;addEventListener("pointermove",q=>{T=q.clientX/innerWidth*2-1,A=q.clientY/innerHeight*2-1},{passive:!0});let $=new Fr;function B(q){if(requestAnimationFrame(B),$.update(q),!V||document.hidden)return;let j=$.getElapsed();v+=(T-v)*.05,w+=(A-w)*.05;let X=U<0?0:Math.min(1,(j-U)/2.2),Y=1-Math.pow(1-X,4);s.position.set(x.x,x.y+Math.sin(j*.9)*.07+R*1.4,-R*2.5-(1-Y)*6),s.scale.setScalar(x.s*(.6+.4*Y)),o.rotation.y=v*.5+Math.sin(j*.45)*.14+R*Math.PI+(1-Y)*Math.PI*1.5,o.rotation.x=w*.25+Math.sin(j*.6)*.03,_.rotation.y=j*.22,a.position.copy(s.position),g.position.set(s.position.x,s.position.y,s.position.z-1.4),g.scale.setScalar(s.scale.x*(1+Math.sin(j*1.3)*.04)),m.material.uniforms.uTime.value=j,i.position.x=v*.25,i.position.y=-w*.15,i.lookAt(0,0,0),M.render()}return requestAnimationFrame(B),{intro(){U=$.getElapsed()},setScroll(q){R=q},setActive(q){V=q}}}var gf=class extends lr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new cs;t.deleteAttribute("uv");let e=new fr({side:dn}),n=new fr,i=new Si(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new fe(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Al(t,n,6),a=new tn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new fe(t,wa(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new fe(t,wa(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new fe(t,wa(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new fe(t,wa(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new fe(t,wa(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new fe(t,wa(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function wa(r){return new Gl({color:0,emissive:16777215,emissiveIntensity:r})}var bx=1118484,vc=.62,yc=3;function pE(){let t=Math.round(1536*yc/(2*Math.PI*vc)),e=document.createElement("canvas"),n=document.createElement("canvas");e.width=n.width=1536,e.height=n.height=t;let i=e.getContext("2d"),s=n.getContext("2d"),o=new ai(e),a=new ai(n);return o.colorSpace=a.colorSpace=Je,o.anisotropy=8,(()=>{i.fillStyle="#141416",i.fillRect(0,0,1536,t);for(let g=0;g<9e3;g++)i.fillStyle=Math.random()>.5?"rgba(255,255,255,0.025)":"rgba(0,0,0,0.12)",i.fillRect(Math.random()*1536,Math.random()*t,2+Math.random()*3,2+Math.random()*3);for(let g=0;g<4;g++){let m=g/4*1536+192;i.fillStyle="rgba(0,0,0,0.55)",i.fillRect(m-3,0,6,t),i.fillStyle="rgba(255,140,80,0.35)";for(let M=10;M<t;M+=26)i.fillRect(m-10,M,3,12),i.fillRect(m+7,M+13,3,12)}let c=(g,m)=>{let M=i.createLinearGradient(0,g,0,g+m);M.addColorStop(0,"#c94a17"),M.addColorStop(.5,"#ff6a2b"),M.addColorStop(1,"#c94a17"),i.fillStyle=M,i.fillRect(0,g,1536,m),i.fillStyle="rgba(0,0,0,0.35)",i.fillRect(0,g,1536,3),i.fillRect(0,g+m-3,1536,3)};c(t*.07,t*.05),c(t*.86,t*.05),s.fillStyle="#000",s.fillRect(0,0,1536,t);let h=(g,m,M,E,x,b)=>{let[,,T,A]=m.viewBox,v=x/A;g.save(),g.translate(M-T*v/2,E),g.scale(v,v),g.fillStyle=b;for(let w of m.paths)g.fill(new Path2D(w),"evenodd");g.restore()},d=(g,m,M)=>{let E=g.createLinearGradient(0,m,0,M);return E.addColorStop(0,"#f2efe8"),E.addColorStop(.45,"#a9a39a"),E.addColorStop(.6,"#e4e0d8"),E.addColorStop(1,"#8a857d"),E},u=t*.2,f=t*.36,p=t*.61,_=t*.11;h(i,Ta,1536/2,u,f,d(i,u,u+f)),h(i,hm,1536/2,p,_,d(i,p,p+_)),h(s,Ta,1536/2,u,f,"#3a3530"),h(s,hm,1536/2,p,_,"#3a3530"),o.needsUpdate=a.needsUpdate=!0})(),{map:o,emap:a}}function mE(){let r=[];r.push(new dt(1e-4,0));for(let n=0;n<=8;n++){let i=-Math.PI/2+n/8*(Math.PI/2);r.push(new dt(vc-.18+.18*Math.cos(i),.18+.18*Math.sin(i)))}for(let n=1;n<20;n++)r.push(new dt(vc,.18+n/20*(yc-.18-.12)));for(let n=0;n<=6;n++){let i=n/6*(Math.PI/2);r.push(new dt(vc-.12+.12*Math.cos(i),yc-.12+.12*Math.sin(i)))}return r.push(new dt(1e-4,yc)),new zl(r,72)}function gE(r,t,e,n){let i=t.clone().sub(r),s=new fe(new Ks(e,e,i.length(),8),n);return s.position.copy(r).add(t).multiplyScalar(.5),s.quaternion.setFromUnitVectors(new Z(0,1,0),i.normalize()),s.castShadow=!0,s}function Tx(r,t){let e;try{e=new ya({canvas:r,antialias:!0})}catch(G){return null}e.setPixelRatio(Math.min(devicePixelRatio,2)),e.toneMapping=Or,e.toneMappingExposure=1.1,e.shadowMap.enabled=!0,e.shadowMap.type=eo;let n=new lr;n.background=new Yt(bx),n.fog=new Ml(bx,10,20);let i=new ln(32,1,.1,50),s=new Z(0,.3,8.6),o=new Z(0,-.15,0);i.position.copy(s);let a=new Ss(e);n.environment=a.fromScene(new gf,.04).texture;let l=new fe(new Pl(14,64),new fr({color:986898,roughness:.92,metalness:0,envMapIntensity:.1}));l.rotation.x=-Math.PI/2,l.position.y=-2.75,l.receiveShadow=!0,n.add(l);let c=new fe(new Vl(1.5,1.55,96),new An({color:16738859,transparent:!0,opacity:.55}));c.rotation.x=-Math.PI/2,c.position.y=-2.74,n.add(c),n.add(new ql(3816008,723725,.6));let h=new Zl(16773344,170,30,.42,.55,1.6);h.position.set(1.2,7,3),h.target.position.set(0,-.5,0),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.bias=-5e-4,n.add(h,h.target);let d=new Si(16738859,40,0,2);d.position.set(-3.2,.5,1.5);let u=new Si(16751164,18,0,2);u.position.set(3.5,-1,2);let f=new Si(16732192,50,0,2);f.position.set(0,1,-3),n.add(d,u,f);let p=new fr({color:9079442,metalness:1,roughness:.3}),_=2.35,g=new ca(.075,.022,8,16);for(let G=0;G<9;G++){let S=new fe(g,p);S.position.set(0,_+.1+G*.13,0),S.rotation.y=G%2?Math.PI/2:0,S.scale.y=1.3,n.add(S)}let m=new wn;m.position.y=_,n.add(m);let M=new fe(new Hl(.07,16,12),p);m.add(M);let E=-.66;for(let G=0;G<4;G++){let S=G/4*Math.PI*2+Math.PI/4;m.add(gE(new Z(0,0,0),new Z(Math.cos(S)*.45,E+.02,Math.sin(S)*.45),.014,p))}let x=new fe(new ca(.5,.035,10,48),p);x.rotation.x=Math.PI/2,x.position.y=E,m.add(x);let{map:b,emap:T}=pE(),A=new js({map:b,emissiveMap:T,emissive:16777215,emissiveIntensity:1,roughness:.62,metalness:.05,clearcoat:.15,clearcoatRoughness:.5,envMapIntensity:.45}),v=new wn;v.position.y=E-yc,m.add(v);let w=new fe(mE(),A);w.rotation.y=Math.PI,w.castShadow=!0,v.add(w);let R=90,V=new De,U=new Float32Array(R*3),$=new Float32Array(R*3),B=Array.from({length:R},()=>new Z),q=new Float32Array(R),j=new Float32Array(R);V.setAttribute("position",new je(U,3)),V.setAttribute("color",new je($,3));let X=new $s(V,new oa({size:.07,vertexColors:!0,transparent:!0,depthWrite:!1,blending:dr}));X.frustumCulled=!1,n.add(X);let Y=0;function nt(G,S){let St=Math.round(12+S*30);for(let wt=0;wt<St;wt++){let I=Y++%R;U[I*3]=G.x,U[I*3+1]=G.y,U[I*3+2]=G.z,B[I].set((Math.random()-.5)*3.5,Math.random()*2.8,.5+Math.random()*2.5).multiplyScalar(.6+S),j[I]=q[I]=.4+Math.random()*.5}}let D=new Fr,ot=0,At=0,Ct=0,Ot=0,Bt=0,Gt=0,k=0,O=0,F=0,N=-10;function H(){let G=r.parentElement.getBoundingClientRect(),S=Math.max(1,G.width),St=Math.max(1,G.height);e.setSize(S,St,!1),i.aspect=S/St,s.z=i.aspect<.8?10.4:8.6,i.updateProjectionMatrix()}H(),new ResizeObserver(H).observe(r.parentElement);let it=new Kl,ht=new dt,P=[];function W(G){let S=r.getBoundingClientRect();return ht.set((G.clientX-S.left)/S.width*2-1,-((G.clientY-S.top)/S.height)*2+1),it.setFromCamera(ht,i),it.intersectObject(w,!1)[0]||null}let z=!1;r.addEventListener("pointermove",G=>{if(P.push({x:G.clientX,y:G.clientY,t:performance.now()}),P.length>8&&P.shift(),G.pointerType==="mouse"){let S=!!W(G);S!==z&&(z=S,t.onHover&&t.onHover(S))}}),r.addEventListener("pointerleave",()=>{z&&(z=!1,t.onHover&&t.onHover(!1))});function L(G,S,St){let wt=m.worldToLocal(G.clone());Ot+=2.4*S,Bt-=wt.x*1.6*S,Gt+=wt.x*4*S,O+=S*3,S>.6&&(F=Math.max(F,S*.12)),nt(G,S),N=D.getElapsed(),!St&&t.onHit&&t.onHit(S)}r.addEventListener("pointerdown",G=>{let S=W(G);if(!S)return;let St,wt=performance.now(),I=P.filter(y=>wt-y.t<120);if(G.pointerType==="mouse"&&I.length>1){let y=I[0],J=I[I.length-1],et=Math.hypot(J.x-y.x,J.y-y.y)/Math.max(16,J.t-y.t);St=Math.min(1,.25+et/2.2)}else St=.55+Math.random()*.45;St=Math.min(1,St*(.92+Math.random()*.12)),L(S.point,St)});let tt=!1,lt=!1;new IntersectionObserver(([G])=>{tt=G.isIntersecting,tt&&!lt&&(lt=!0,setTimeout(()=>L(new Z(.15,.4,vc),.55,!0),700))},{threshold:.15}).observe(r);let gt=new Yt;function ft(G){requestAnimationFrame(ft),D.update(G);let S=Math.min(D.getDelta(),.05);if(!tt||document.hidden)return;let St=D.getElapsed(),wt=St-N>3?.05:0;Ot+=(-3.2*Math.sin(ot)-.4*Ot+Math.sin(St*1.3)*wt)*S,Bt+=(-3.2*Math.sin(At)-.4*Bt+Math.cos(St*.9)*wt*.6)*S,Gt+=(-2.2*Ct-.9*Gt)*S,O+=(-60*k-7*O)*S,ot+=Ot*S,At+=Bt*S,Ct+=Gt*S,k+=O*S,ot=so.clamp(ot,-.9,.9),At=so.clamp(At,-.9,.9),m.rotation.set(ot,Ct,At);let I=so.clamp(k*.04,-.08,.08);w.scale.set(1-I,1+I*.5,1-I);for(let y=0;y<R;y++){if(q[y]<=0){$[y*3]=$[y*3+1]=$[y*3+2]=0;continue}q[y]-=S,B[y].y-=6*S,U[y*3]+=B[y].x*S,U[y*3+1]+=B[y].y*S,U[y*3+2]+=B[y].z*S;let J=Math.max(0,q[y]/j[y]);gt.setRGB(1,.45+J*.4,.15).multiplyScalar(J*1.6),$[y*3]=gt.r,$[y*3+1]=gt.g,$[y*3+2]=gt.b}V.attributes.position.needsUpdate=!0,V.attributes.color.needsUpdate=!0,F*=.88,i.position.set(s.x+(Math.random()-.5)*F,s.y+(Math.random()-.5)*F,s.z),i.lookAt(o),e.render(n,i)}return requestAnimationFrame(ft),{punch:L}}Ie.registerPlugin(re);window.__tfcBooted=!0;document.documentElement.classList.remove("boot-failed");document.documentElement.classList.add("booted");var ei=window.TFC_CONFIG||{},Mc=window.TFC_I18N,se=(r,t=document)=>t.querySelector(r),Yi=(r,t=document)=>Array.from(t.querySelectorAll(r)),Ex=r=>new Promise(t=>setTimeout(t,r)),Aa=matchMedia("(prefers-reduced-motion: reduce)").matches,_E=matchMedia("(pointer: fine)").matches,vf={get(r){try{return localStorage.getItem(r)}catch(t){return null}},set(r,t){try{localStorage.setItem(r,t)}catch(e){}}},lo="kk",gr=null,Ts=null,xf=!1;function Ax(){if(xf)return;xf=!0,document.body.classList.remove("is-loading");let r=document.getElementById("loader");r&&r.remove(),gr&&gr.start(),Ts&&Ts.intro(),re.refresh()}setTimeout(Ax,7e3);var bi=r=>{let t=Mc[lo]&&Mc[lo][r];return t!==void 0?t:Mc.kk[r]!==void 0?Mc.kk[r]:""};Yi("[data-href]").forEach(r=>{let t=ei[r.dataset.href];t?r.href=t:r.hidden=!0});function xE(){let r=ei.address&&ei.address[lo];se("#cAddress").textContent=r||bi("contact_tba");let t=se("#cPhone");if(t.textContent="",ei.phone){let e=document.createElement("a");e.href="tel:"+ei.phone.replace(/[^\d+]/g,""),e.textContent=ei.phone,t.appendChild(e)}else t.textContent=bi("contact_tba")}if(ei.mapEmbed){let r=document.createElement("iframe");r.src=ei.mapEmbed,r.loading="lazy",r.title="Map",se("#map").appendChild(r),se("#map").hidden=!1}ei.whatsapp&&(se("#waFloat").href="https://wa.me/"+ei.whatsapp.replace(/\D/g,""),se("#waFloat").hidden=!1);se("#year").textContent=new Date().getFullYear();var _f=0;function Cx(){let r=se("#schTabs"),t=se("#schSlots");r.textContent="",bi("sch_days").forEach((e,n)=>{let i=document.createElement("button");i.type="button",i.setAttribute("role","tab"),i.setAttribute("aria-selected",String(n===_f)),i.className=n===_f?"is-active":"",i.textContent=e,i.addEventListener("click",()=>{_f=n,Cx()}),r.appendChild(i)}),t.textContent="",(ei.schedule||[]).filter(e=>e.days.includes(_f)).sort((e,n)=>e.time.localeCompare(n.time)).forEach((e,n)=>{let i=document.createElement("div");i.className="slot",i.style.animationDelay=n*60+"ms",i.innerHTML='<b class="slot__time"></b><div class="slot__name"><h3></h3><span></span></div><a href="#join" class="btn btn--ghost btn--sm"></a>',i.querySelector(".slot__time").textContent=e.time,i.querySelector("h3").textContent=bi(e.p),i.querySelector("span").textContent=bi("sch_min"),i.querySelector("a").textContent=bi("sch_book"),t.appendChild(i)})}if(ei.openingDate){let r=new Date(ei.openingDate).getTime(),t=se("#countdown"),e=i=>String(i).padStart(2,"0"),n=()=>{let i=r-Date.now();return isNaN(r)||i<=0?(t.hidden=!0,!1):(t.hidden=!1,se("#cdD").textContent=e(Math.floor(i/864e5)),se("#cdH").textContent=e(Math.floor(i/36e5)%24),se("#cdM").textContent=e(Math.floor(i/6e4)%60),se("#cdS").textContent=e(Math.floor(i/1e3)%60),!0)};if(n()){let i=setInterval(()=>{n()||clearInterval(i)},1e3)}}var Sc=null;function vE(){let r=se("#statement"),t=r.textContent.trim().split(/\s+/);r.textContent="",t.forEach((e,n)=>{let i=document.createElement("span");i.className="w",i.textContent=e,r.appendChild(i),n<t.length-1&&r.appendChild(document.createTextNode(" "))}),Sc&&(Sc.scrollTrigger&&Sc.scrollTrigger.kill(),Sc.kill()),Sc=Ie.fromTo(Yi(".w",r),{opacity:.14},{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:r,start:"top 82%",end:"bottom 50%",scrub:!0}})}var bs={hits:0,best:Number(vf.get("tfc_best"))||0,level:""};function yE(r){return r<40?"bag_lvl_1":r<70?"bag_lvl_2":r<90?"bag_lvl_3":"bag_lvl_4"}function Rx(){se("#hitCount").textContent=bs.hits,se("#hitBest").textContent=bs.best+"%",se("#powerLevel").textContent=bs.level?bi(bs.level):bi("bag_hint")}function Px(r){lo=Mc[r]?r:"kk",document.documentElement.lang=lo,Yi("[data-i18n]").forEach(t=>{t.innerHTML=bi(t.dataset.i18n)}),Yi(".lang button").forEach(t=>t.classList.toggle("is-active",t.dataset.lang===lo)),se("#cursorLabel").textContent=bi("cursor_punch"),xE(),Cx(),Rx(),vE(),vf.set("tfc_lang",lo),re.refresh()}Yi(".lang button").forEach(r=>r.addEventListener("click",()=>Px(r.dataset.lang)));Aa||(gr=new g0({duration:1.15,smoothWheel:!0}),gr.on("scroll",re.update),Ie.ticker.add(r=>gr.raf(r*1e3)),Ie.ticker.lagSmoothing(0),gr.stop());var dm=se("#nav");Yi('a[href^="#"]').forEach(r=>r.addEventListener("click",t=>{let e=r.getAttribute("href"),n=e==="#"||e==="#top"?0:se(e);n!==null&&(t.preventDefault(),dm.classList.remove("is-open"),gr?gr.scrollTo(n,{offset:n===0?0:-60,duration:1.4}):n===0?scrollTo({top:0,behavior:"smooth"}):n.scrollIntoView({behavior:"smooth"}))}));se("#schSlots").addEventListener("click",r=>{r.target.closest('a[href="#join"]')&&(r.preventDefault(),gr?gr.scrollTo(se("#join"),{offset:-60,duration:1.2}):se("#join").scrollIntoView({behavior:"smooth"}))});se("#menuBtn").addEventListener("click",()=>dm.classList.toggle("is-open"));var SE=se("#progress");function Lx(){dm.classList.toggle("is-scrolled",scrollY>20);let r=document.documentElement.scrollHeight-innerHeight;SE.style.transform="scaleX("+(r>0?scrollY/r:0)+")"}addEventListener("scroll",Lx,{passive:!0});Lx();var pm=se("#heroCanvas");try{Ts=Mx(pm)}catch(r){Ts=null}Ts||(pm.remove(),se("#heroFallback").hidden=!1);var ME=Ie.matchMedia();ME.add("(min-width: 901px)",()=>{let r=se("#hTrack"),t=()=>Math.max(0,r.scrollWidth-innerWidth);Ie.to(r,{x:()=>-t(),ease:"none",scrollTrigger:{trigger:"#programs",start:"top top",end:()=>"+="+t(),pin:!0,scrub:.8,invalidateOnRefresh:!0}})});re.create({trigger:".hero",start:"top top",end:"bottom top",onUpdate:r=>{Ts&&(Ts.setScroll(r.progress),Ts.setActive(r.progress<.995),pm.style.visibility=r.progress<.995?"visible":"hidden")}});re.create({trigger:".hero",start:"top top",end:"bottom top",onUpdate:r=>{se("#heroBg").style.visibility=r.progress<.995?"visible":"hidden"}});Aa||(Ie.to(".hero-bg__img",{scale:1.16,yPercent:4,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}}),Ie.fromTo(".about-photo__img",{yPercent:-10},{yPercent:0,ease:"none",scrollTrigger:{trigger:".about-photo",start:"top bottom",end:"bottom top",scrub:!0}}));Ie.to("#heroIn",{yPercent:-18,opacity:0,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}});var bc=se("#cursorRing"),fm=null;try{fm=Tx(se("#bagCanvas"),{onHover(r){bc.classList.toggle("is-punch",r),se("#cursor").classList.toggle("is-off",r)},onHit(r){let t=Math.round(r*100);bs.hits++,bs.level=yE(t),t>bs.best&&(bs.best=t,vf.set("tfc_best",String(t))),se("#bagHint").classList.add("is-gone");let e=se("#powerNum"),n={v:Number(e.textContent)||0};if(Ie.to(n,{v:t,duration:.5,ease:"power3.out",onUpdate:()=>{e.textContent=Math.round(n.v)}}),se("#powerBar").style.width=t+"%",Rx(),Ie.fromTo("#powerLevel",{scale:1.25},{scale:1,duration:.4,ease:"back.out(3)"}),t>=90){let i=se("#bagKo");i.classList.remove("is-show"),i.offsetWidth,i.classList.add("is-show")}}})}catch(r){fm=null}fm||(se("#bagCanvas").remove(),se("#bagFallback").hidden=!1,se("#bagHint").hidden=!0);if(!Aa){let r=Ie.quickTo(".marquee__row","skewX",{duration:.4,ease:"power3"}),t;re.create({onUpdate:e=>{r(Ie.utils.clamp(-10,10,e.getVelocity()/-300)),clearTimeout(t),t=setTimeout(()=>r(0),120)}})}Yi(".reveal").forEach(r=>{Ie.from(r,{y:60,opacity:0,duration:1.1,ease:"power3.out",clearProps:"transform,opacity",scrollTrigger:{trigger:r,start:"top 90%",once:!0}})});Yi("[data-count]").forEach(r=>{let t=parseFloat(r.dataset.count),e=Number(r.dataset.decimals||0),n=r.dataset.suffix||"",i=o=>o.toFixed(e).replace(".",",")+n,s={v:0};r.textContent=i(0),re.create({trigger:r,start:"top 92%",once:!0,onEnter:()=>Ie.to(s,{v:t,duration:2,ease:"power2.out",onUpdate:()=>{r.textContent=i(s.v)}})})});if(_E&&!Aa){Yi("[data-tilt]").forEach(s=>{s.addEventListener("pointermove",o=>{let a=s.getBoundingClientRect(),l=(o.clientX-a.left)/a.width,c=(o.clientY-a.top)/a.height;s.style.transform=`perspective(900px) rotateX(${(.5-c)*10}deg) rotateY(${(l-.5)*12}deg)`,s.style.setProperty("--mx",l*100+"%"),s.style.setProperty("--my",c*100+"%")}),s.addEventListener("pointerleave",()=>{s.style.transform=""})}),Yi("[data-magnetic]").forEach(s=>{let o=Ie.quickTo(s,"x",{duration:.5,ease:"power3"}),a=Ie.quickTo(s,"y",{duration:.5,ease:"power3"});s.addEventListener("pointermove",l=>{let c=s.getBoundingClientRect();o((l.clientX-c.left-c.width/2)*.3),a((l.clientY-c.top-c.height/2)*.4)}),s.addEventListener("pointerleave",()=>{o(0),a(0)})}),document.documentElement.classList.add("has-cursor");let r=se("#cursor");Ie.set([r,bc],{xPercent:-50,yPercent:-50});let t=Ie.quickTo(r,"x",{duration:.08}),e=Ie.quickTo(r,"y",{duration:.08}),n=Ie.quickTo(bc,"x",{duration:.45,ease:"power3"}),i=Ie.quickTo(bc,"y",{duration:.45,ease:"power3"});addEventListener("pointermove",s=>{t(s.clientX),e(s.clientY),n(s.clientX),i(s.clientY)},{passive:!0}),document.addEventListener("pointerover",s=>{bc.classList.toggle("is-hover",!!s.target.closest("a, button, summary, [data-tilt], input, select"))})}var um=se("#joinForm"),Ea=se("#formMsg");ei.demo||(se("#footerDemo").hidden=!0);um.addEventListener("submit",r=>{if(r.preventDefault(),ei.demo){Ea.className="form__msg",Ea.textContent=bi("form_demo");return}fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(new FormData(um)).toString()}).then(t=>{if(!t.ok)throw new Error(String(t.status));Ea.className="form__msg ok",Ea.textContent=bi("form_ok"),um.reset()}).catch(()=>{Ea.className="form__msg err",Ea.textContent=bi("form_err")})});var bE=new URLSearchParams(location.search).get("lang");Px(bE||vf.get("tfc_lang")||((navigator.language||"").slice(0,2)==="ru"?"ru":"kk"));function TE(r){let t=r.textContent;return r.textContent="",Array.from(t).map(e=>{let n=document.createElement("span");return n.className="ch",n.textContent=e===" "?"\xA0":e,r.appendChild(n),n})}var wE=se("#loaderNum"),wx={v:0};Ie.to(wx,{v:100,duration:Aa?.3:1.9,ease:"power2.inOut",onUpdate:()=>{wE.textContent=Math.round(wx.v)}});var EE=document.fonts?Promise.race([document.fonts.ready,Ex(2500)]):Promise.resolve();Promise.all([EE,Ex(Aa?300:2e3)]).then(()=>{let r=Yi(".hero__title .split").flatMap(TE),t=Ie.timeline();xf||t.to("#loader",{clipPath:"inset(0 0 100% 0)",duration:1,ease:"power4.inOut"}),t.add(Ax,xf?0:"-=0.55").from(".hero__wordmark",{clipPath:"inset(0 100% 0 0)",opacity:0,duration:1.3,ease:"power3.inOut",clearProps:"clipPath,opacity"},"-=0.5").from(r,{yPercent:115,rotate:6,duration:1,stagger:.03,ease:"power4.out"},"-=0.9").from(".hero__fade",{y:30,opacity:0,duration:.9,stagger:.1,ease:"power3.out",clearProps:"transform,opacity"},"-=0.75").from("#nav",{yPercent:-100,duration:.8,ease:"power3.out",clearProps:"transform"},"<")});})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
