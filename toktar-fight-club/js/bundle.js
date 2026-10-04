(()=>{var $x=Object.defineProperty;var Kx=(s,t,e)=>t in s?$x(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Wt=(s,t,e)=>Kx(s,typeof t!="symbol"?t+"":t,e);function _s(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Fm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ca={duration:.5,overwrite:!1,delay:0},qf,Mn,Fe,wi=1e8,Pe=1/wi,Ff=Math.PI*2,Qx=Ff/4,jx=0,Bm=Math.sqrt,tv=Math.cos,ev=Math.sin,hn=function(t){return typeof t=="string"},Ye=function(t){return typeof t=="function"},vs=function(t){return typeof t=="number"},Ic=function(t){return typeof t=="undefined"},Qi=function(t){return typeof t=="object"},ei=function(t){return t!==!1},Zf=function(){return typeof window!="undefined"},Mc=function(t){return Ye(t)||hn(t)},zm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,nv=/random\([^)]+\)/g,iv=/,\s*/g,Rm=/(?:-?\.?\d|\.)+/gi,Jf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Er=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$f=/[+-]=-?[.\d]+/,sv=/[^,'"\[\]\s]+/gi,rv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ve,$i,Bf,Kf,li={},Ec={},km,Vm=function(t){return(Ec=uo(t,li))&&Ln},Lc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ra=function(t,e){return!e&&console.warn(t)},Hm=function(t,e){return t&&(li[t]=e)&&Ec&&(Ec[t]=e)||li},Pa=function(){return 0},ov={suppressEvents:!0,isStart:!0,kill:!1},bc={suppressEvents:!0,kill:!1},av={suppressEvents:!0},Qf={},Gs=[],zf={},Gm,jn={},If={},Pm=30,Tc=[],jf="",td=function(t){var e=t[0],n,i;if(Qi(e)||Ye(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Tc.length;i--&&!Tc[i].targetTest(e););n=Tc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new sd(t[i],n)))||t.splice(i,1);return t},Ws=function(t){return t._gsap||td(Ei(t))[0]._gsap},ed=function(t,e,n){return(n=t[e])&&Ye(n)?t[e]():Ic(n)&&t.getAttribute&&t.getAttribute(e)||n},Gn=function(t,e){return(t=t.split(",")).forEach(e)||t},qe=function(t){return Math.round(t*1e5)/1e5||0},ke=function(t){return Math.round(t*1e7)/1e7||0},Ar=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},lv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ac=function(){var t=Gs.length,e=Gs.slice(0),n,i;for(zf={},Gs.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},nd=function(t){return!!(t._initted||t._startAt||t.add)},Wm=function(t,e,n,i){Gs.length&&!Mn&&Ac(),t.render(e,n,i||!!(Mn&&e<0&&nd(t))),Gs.length&&!Mn&&Ac()},Xm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(sv).length<2?e:hn(t)?t.trim():t},Ym=function(t){return t},ci=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},cv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},uo=function(t,e){for(var n in e)t[n]=e[n];return t},Im=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Qi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Cc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},wa=function(t){var e=t.parent||Ve,n=t.keyframes?cv(In(t.keyframes)):ci;if(ei(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},hv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},qm=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Dc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Xs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},br=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},uv=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},kf=function(t,e,n,i){return t._startAt&&(Mn?t._startAt.revert(bc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},fv=function s(t){return!t||t._ts&&s(t.parent)},Lm=function(t){return t._repeat?fo(t._tTime,t=t.duration()+t._rDelay)*t:0},fo=function(t,e){var n=Math.floor(t=ke(t/e));return t&&n===t?n-1:n},Rc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Nc=function(t){return t._end=ke(t._start+(t._tDur/Math.abs(t._ts||t._rts||Pe)||0))},Uc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ke(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Nc(t),n._dirty||br(n,t)),t},Zm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Rc(t.rawTime(),e),(!e._dur||Da(0,e.totalDuration(),n)-e._tTime>Pe)&&e.render(n,!0)),br(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Pe}},Ki=function(t,e,n,i){return e.parent&&Xs(e),e._start=ke((vs(n)?n:n||t!==Ve?Ti(t,n,e):t._time)+e._delay),e._end=ke(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),qm(t,e,"_first","_last",t._sort?"_start":0),Vf(e)||(t._recent=e),i||Zm(t,e),t._ts<0&&Uc(t,t._tTime),t},Jm=function(t,e){return(li.ScrollTrigger||Lc("scrollTrigger",e))&&li.ScrollTrigger.create(e,t)},$m=function(t,e,n,i,r){if(ad(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Gm!==ti.frame)return Gs.push(t),t._lazy=[r,i],1},dv=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Vf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},pv=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&dv(t)&&!(!t._initted&&Vf(t))||(t._ts<0||t._dp._ts<0)&&!Vf(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Da(0,t._tDur,e),h=fo(l,a),t._yoyo&&h&1&&(o=1-o),h!==fo(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Mn||i||t._zTime===Pe||!e&&t._zTime){if(!t._initted&&$m(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Pe:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&kf(t,e,n,!0),t._onUpdate&&!n&&ai(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ai(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Xs(t,1),!n&&!Mn&&(ai(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},mv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},po=function(t,e,n,i){var r=t._repeat,o=ke(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:ke(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Uc(t,t._tTime=t._tDur*a),t.parent&&Nc(t),n||br(t.parent,t),t},Dm=function(t){return t instanceof Pn?br(t):po(t,t._dur)},gv={_start:0,endTime:Pa,totalDuration:Pa},Ti=function s(t,e,n){var i=t.labels,r=t._recent||gv,o=t.duration()>=wi?r.endTime(!1):t._dur,a,l,c;return hn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(In(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ea=function(t,e,n){var i=vs(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ei(l.vars.inherit)&&l.parent;o.immediateRender=ei(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Qe(e[0],o,e[r+1])},Ys=function(t,e){return t||t===0?e(t):e},Da=function(t,e,n){return n<t?t:n>e?e:n},bn=function(t,e){return!hn(t)||!(e=rv.exec(t))?"":e[1]},_v=function(t,e,n){return Ys(n,function(i){return Da(t,e,i)})},Hf=[].slice,Km=function(t,e){return t&&Qi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Qi(t[0]))&&!t.nodeType&&t!==$i},xv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return hn(i)&&!e||Km(i,1)?(r=n).push.apply(r,Ei(i)):n.push(i)})||n},Ei=function(t,e,n){return Fe&&!e&&Fe.selector?Fe.selector(t):hn(t)&&!n&&(Bf||!mo())?Hf.call((e||Kf).querySelectorAll(t),0):In(t)?xv(t,n):Km(t)?Hf.call(t,0):t?[t]:[]},Gf=function(t){return t=Ei(t)[0]||Ra("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ei(e,n.querySelectorAll?n:n===t?Ra("Invalid scope")||Kf.createElement("div"):t)}},Qm=function(t){return t.sort(function(){return .5-Math.random()})},jm=function(t){if(Ye(t))return t;var e=Qi(t)?t:{each:t},n=Tr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return hn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,p){var _=(p||e).length,g=o[_],m,S,w,x,M,b,A,v,T;if(!g){if(T=e.grid==="auto"?0:(e.grid||[1,wi])[1],!T){for(A=-wi;A<(A=p[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(g=o[_]=[],m=l?Math.min(T,_)*h-.5:i%T,S=T===wi?0:l?_*d/T-.5:i/T|0,A=0,v=wi,b=0;b<_;b++)w=b%T-m,x=S-(b/T|0),g[b]=M=c?Math.abs(c==="y"?x:w):Bm(w*w+x*x),M>A&&(A=M),M<v&&(v=M);i==="random"&&Qm(g),g.max=A-v,g.min=v,g.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),g.b=_<0?r-_:r,g.u=bn(e.amount||e.each)||0,n=n&&_<0?Iv(n):n}return _=(g[u]-g.min)/g.max||0,ke(g.b+(n?n(_):_)*g.v)+g.u}},Wf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ke(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(vs(n)?0:bn(n))}},tg=function(t,e){var n=In(t),i,r;return!n&&Qi(t)&&(i=n=t.radius||wi,t.values?(t=Ei(t.values),(r=!vs(t[0]))&&(i*=i)):t=Wf(t.increment)),Ys(e,n?Ye(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=wi,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,r||h===o||vs(o)?h:h+bn(o)}:Wf(t))},eg=function(t,e,n,i){return Ys(In(t)?!e:n===!0?!!(n=0):!i,function(){return In(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},vv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},yv=function(t,e){return function(n){return t(parseFloat(n))+(e||bn(n))}},Sv=function(t,e,n){return ig(t,e,0,1,n)},ng=function(t,e,n){return Ys(n,function(i){return t[~~e(i)]})},Mv=function s(t,e,n){var i=e-t;return In(t)?ng(t,s(0,t.length),e):Ys(n,function(r){return(i+(r-t)%i)%i+t})},bv=function s(t,e,n){var i=e-t,r=i*2;return In(t)?ng(t,s(0,t.length-1),e):Ys(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},go=function(t){return t.replace(nv,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(iv);return eg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ig=function(t,e,n,i,r){var o=e-t,a=i-n;return Ys(r,function(l){return n+((l-t)/o*a||0)})},Tv=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=hn(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(In(t)&&!In(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(p){p*=d;var _=Math.min(u,~~p);return h[_](p-_)},n=e}else i||(t=uo(In(t)?[]:{},t));if(!h){for(l in e)rd.call(a,t,l,"get",e[l]);r=function(p){return hd(p,a)||(o?t.p:t)}}}return Ys(n,r)},Nm=function(t,e,n){var i=t.labels,r=wi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ai=function(t,e,n){var i=t.vars,r=i[e],o=Fe,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Gs.length&&Ac(),a&&(Fe=a),h=l?r.apply(c,l):r.call(c),Fe=o,h},ba=function(t){return Xs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Mn),t.progress()<1&&ai(t,"onInterrupt"),t},ho,sg=[],rg=function(t){if(t)if(t=!t.name&&t.default||t,Zf()||t.headless){var e=t.name,n=Ye(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Pa,render:hd,add:rd,kill:Vv,modifier:kv,rawVars:0},o={targetTest:0,get:0,getSetter:Oc,aliases:{},register:0};if(mo(),t!==i){if(jn[e])return;ci(i,ci(Cc(t,r),o)),uo(i.prototype,uo(r,Cc(t,o))),jn[i.prop=e]=i,t.targetTest&&(Tc.push(i),Qf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Hm(e,i),t.register&&t.register(Ln,i,Wn)}else sg.push(t)},Re=255,Ta={aqua:[0,Re,Re],lime:[0,Re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Re],navy:[0,0,128],white:[Re,Re,Re],olive:[128,128,0],yellow:[Re,Re,0],orange:[Re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Re,0,0],pink:[Re,192,203],cyan:[0,Re,Re],transparent:[Re,Re,Re,0]},Lf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Re+.5|0},og=function(t,e,n){var i=t?vs(t)?[t>>16,t>>8&Re,t&Re]:0:Ta.black,r,o,a,l,c,h,d,u,f,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ta[t])i=Ta[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Re,i&Re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Re,t&Re]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(Rm),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Lf(l+1/3,r,o),i[1]=Lf(l,r,o),i[2]=Lf(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Jf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Rm)||Ta.transparent;i=i.map(Number)}return e&&!p&&(r=i[0]/Re,o=i[1]/Re,a=i[2]/Re,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ag=function(t){var e=[],n=[],i=-1;return t.split(xs).forEach(function(r){var o=r.match(Er)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Um=function(t,e,n){var i="",r=(t+i).match(xs),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=og(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=ag(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(xs,"1").split(Er),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(xs),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},xs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ta)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),wv=/hsl[a]?\(/,id=function(t){var e=t.join(" "),n;if(xs.lastIndex=0,xs.test(e))return n=wv.test(e),t[1]=Um(t[1],n),t[0]=Um(t[0],n,ag(t[1])),!0},Ia,ti=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,u,f,p=function _(g){var m=s()-i,S=g===!0,w,x,M,b;if((m>t||m<0)&&(n+=m-e),i+=m,M=i-n,w=M-o,(w>0||S)&&(b=++d.frame,u=M-d.time*1e3,d.time=M=M/1e3,o+=w+(w>=r?4:r-w),x=1),S||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](M,u,b,g)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return u/(1e3/(g||60))},wake:function(){km&&(!Bf&&Zf()&&($i=Bf=window,Kf=$i.document||{},li.gsap=Ln,($i.gsapVersions||($i.gsapVersions=[])).push(Ln.version),Vm(Ec||$i.GreenSockGlobals||!$i.gsap&&$i||{}),sg.forEach(rg)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=h||function(g){return setTimeout(g,o-d.time*1e3+1|0)},Ia=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ia=0,c=Pa},lagSmoothing:function(g,m){t=g||1/0,e=Math.min(m||33,t)},fps:function(g){r=1e3/(g||240),o=d.time*1e3+r},add:function(g,m,S){var w=m?function(x,M,b,A){g(x,M,b,A),d.remove(w)}:g;return d.remove(g),a[S?"unshift":"push"](w),mo(),w},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},d})(),mo=function(){return!Ia&&ti.wake()},xe={},Ev=/^[\d.\-M][\d.\-,\s]/,Av=/["']/g,Cv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Av,"").trim():+c,i=l.substr(a+1).trim();return e},Rv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Pv=function(t){var e=(t+"").split("("),n=xe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Cv(e[1])]:Rv(t).split(",").map(Xm)):xe._CE&&Ev.test(t)?xe._CE("",t):n},Iv=function(t){return function(e){return 1-t(1-e)}},Tr=function(t,e){return t&&(Ye(t)?t:xe[t]||Pv(t))||e},Cr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Gn(t,function(a){xe[a]=li[a]=r,xe[o=a.toLowerCase()]=n;for(var l in r)xe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=xe[a+"."+l]=r[l]}),r},lg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Df=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Ff*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*ev((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:lg(a);return r=Ff/r,l.config=function(c,h){return s(t,c,h)},l},Nf=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:lg(n);return i.config=function(r){return s(t,r)},i};Gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Cr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});xe.Linear.easeNone=xe.none=xe.Linear.easeIn;Cr("Elastic",Df("in"),Df("out"),Df());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Cr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Cr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Cr("Circ",function(s){return-(Bm(1-s*s)-1)});Cr("Sine",function(s){return s===1?1:-tv(s*Qx)+1});Cr("Back",Nf("in"),Nf("out"),Nf());xe.SteppedEase=xe.steps=li.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Pe;return function(a){return((i*Da(0,o,a)|0)+r)*n}}};Ca.ease=xe["quad.out"];Gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return jf+=s+","+s+"Params,"});var sd=function(t,e){this.id=jx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ed,this.set=e?e.getSetter:Oc},La=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,po(this,+e.duration,1,1),this.data=e.data,Fe&&(this._ctx=Fe,Fe.data.push(this)),Ia||ti.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,po(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(mo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Uc(this,n),!r._dp||r.parent||Zm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ki(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Pe||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?fo(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Pe?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Rc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pe?0:this._rts,this.totalTime(Da(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Nc(this),uv(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(mo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pe&&(this._tTime-=Pe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ke(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ki(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ei(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Rc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=av);var i=Mn;return Mn=n,nd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Dm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Dm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ti(this,n),ei(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ei(i)),this._dur||(this._zTime=-Pe),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pe,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Pe)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Ye(n)?n:Ym,l=function(){var h=i.then;i.then=null,r&&r(),Ye(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ba(this)},s})();ci(La.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pe,_prom:0,_ps:!1,_rts:1});var Pn=(function(s){Fm(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ei(n.sortChildren),Ve&&Ki(n.parent||Ve,_s(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Jm(_s(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Ea(0,arguments,this),this},e.from=function(i,r,o){return Ea(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Ea(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,wa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Qe(i,r,Ti(this,o),1),this},e.call=function(i,r,o){return Ki(this,Qe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Qe(i,o,Ti(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,wa(o).immediateRender=ei(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,wa(a).immediateRender=ei(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ke(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,p,_,g,m,S,w,x,M,b,A;if(this!==Ve&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,x=this._start,w=this._ts,m=!w,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,o);if(u=ke(h%g),h===l?(_=this._repeat,u=c):(M=ke(h/g),_=~~M,_&&_===M&&(u=c,_--),u>c&&(u=c)),M=fo(this._tTime,g),!a&&this._tTime&&M!==_&&this._tTime-M*g-this._dur<=0&&(M=_),b&&_&1&&(u=c-u,A=1),_!==M&&!this._lock){var v=b&&M&1,T=v===(b&&_&1);if(_<M&&(v=!v),a=v?0:h%c?c:h,this._lock=1,this.render(a||(A?0:ke(_*g)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ai(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=mv(this,ke(a),ke(u)),S&&(h-=u-(u=S._start))),this._tTime=h,this._time=u,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!M&&(ai(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!m){S=0,p&&(h+=this._zTime=-Pe);break}}f=p}else{f=this._last;for(var C=i<0?i:u;f;){if(p=f._prev,(f._act||C<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,r,o||Mn&&nd(f)),u!==this._time||!this._ts&&!m){S=0,p&&(h+=this._zTime=C?-Pe:Pe);break}}f=p}}if(S&&!r&&(this.pause(),S.render(u>=a?0:-Pe)._zTime=u>=a?1:-1,this._ts))return this._start=x,Nc(this),this.render(i,r,o);this._onUpdate&&!r&&ai(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Xs(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(ai(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(vs(r)||(r=Ti(this,r,i)),!(i instanceof La)){if(In(i))return i.forEach(function(a){return o.add(a,r)}),this;if(hn(i))return this.addLabel(i,r);if(Ye(i))i=Qe.delayedCall(0,i);else return this}return this!==i?Ki(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-wi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qe?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return hn(i)?this.removeLabel(i):Ye(i)?this.killTweensOf(i):(i.parent===this&&Dc(this,i),i===this._recent&&(this._recent=this._last),br(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ke(ti.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Ti(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Qe.delayedCall(0,r||Pa,o);return a.data="isPause",this._hasPause=1,Ki(this,a,Ti(this,i))},e.removePause=function(i){var r=this._first;for(i=Ti(this,i);r;)r._start===i&&r.data==="isPause"&&Xs(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Hs!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Ei(i),l=this._first,c=vs(r),h;l;)l instanceof Qe?lv(l._targets,a)&&(c?(!Hs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Ti(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=Qe.to(o,ci({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Pe,onStart:function(){if(o.pause(),!f){var g=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==g&&po(p,g,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},r));return u?p.render(0):p},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,ci({startAt:{time:Ti(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Nm(this,Ti(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Nm(this,Ti(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Pe)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=ke(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return br(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),br(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=wi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ki(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=ke(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;po(o,o===Ve&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ve._ts&&(Wm(Ve,Rc(i,Ve)),Gm=ti.frame),ti.frame>=Pm){Pm+=ni.autoSleep||120;var r=Ve._first;if((!r||!r._ts)&&ni.autoSleep&&ti._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ti.sleep()}}},t})(La);ci(Pn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Lv=function(t,e,n,i,r,o,a){var l=new Wn(this._pt,t,e,0,1,cd,null,r),c=0,h=0,d,u,f,p,_,g,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=go(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),u=n.match(Pf)||[];d=Pf.exec(i);)p=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(g=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:g,c:p.charAt(1)==="="?Ar(g,p)-g:parseFloat(p)-g,m:f&&f<4?Math.round:0},c=Pf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,($f.test(i)||m)&&(l.e=0),this._pt=l,l},rd=function(t,e,n,i,r,o,a,l,c,h){Ye(i)&&(i=i(r||0,t,o));var d=t[e],u=n!=="get"?n:Ye(d)?c?t[e.indexOf("set")||!Ye(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Ye(d)?c?Fv:ug:ld,p;if(hn(i)&&(~i.indexOf("random(")&&(i=go(i)),i.charAt(1)==="="&&(p=Ar(u,i)+(bn(u)||0),(p||p===0)&&(i=p))),!h||u!==i||Xf)return!isNaN(u*i)&&i!==""?(p=new Wn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?zv:fg,0,f),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&Lc(e,i),Lv.call(this,t,e,u,i,f,l||ni.stringFilter,c))},Dv=function(t,e,n,i,r){if(Ye(t)&&(t=Aa(t,r,e,n,i)),!Qi(t)||t.style&&t.nodeType||In(t)||zm(t))return hn(t)?Aa(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Aa(t[a],r,e,n,i);return o},od=function(t,e,n,i,r,o){var a,l,c,h;if(jn[t]&&(a=new jn[t]).init(r,a.rawVars?e[t]:Dv(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Wn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==ho))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Hs,Xf,ad=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,p=t._dur,_=t._startAt,g=t._targets,m=t.parent,S=m&&m.data==="nested"?m.vars.targets:g,w=t._overwrite==="auto"&&!qf,x=t.timeline,M=i.easeReverse||d,b,A,v,T,C,N,L,V,D,F,G,k,K;if(x&&(!u||!r)&&(r="none"),t._ease=Tr(r,Ca.ease),t._rEase=M&&(Tr(M)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||u&&!i.stagger){if(V=g[0]?Ws(g[0]).harness:0,k=V&&i[V.prop],b=Cc(i,Qf),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&p?bc:ov),_._lazy=0),o){if(Xs(t._startAt=Qe.set(g,ci({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ei(l),startAt:null,delay:0,onUpdate:c&&function(){return ai(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn||!a&&!f)&&t._startAt.revert(bc),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),v=ci({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ei(l),immediateRender:a,stagger:0,parent:m},b),k&&(v[V.prop]=k),Xs(t._startAt=Qe.set(g,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn?t._startAt.revert(bc):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Pe,Pe);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&ei(l)||l&&!p,A=0;A<g.length;A++){if(C=g[A],L=C._gsap||td(g)[A]._gsap,t._ptLookup[A]=F={},zf[L.id]&&Gs.length&&Ac(),G=S===g?A:S.indexOf(C),V&&(D=new V).init(C,k||b,t,G,S)!==!1&&(t._pt=T=new Wn(t._pt,C,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(W){F[W]=T}),D.priority&&(N=1)),!V||k)for(v in b)jn[v]&&(D=od(v,b,t,G,C,S))?D.priority&&(N=1):F[v]=T=rd.call(t,C,v,"get",b[v],G,S,0,i.stringFilter);t._op&&t._op[A]&&t.kill(C,t._op[A]),w&&t._pt&&(Hs=t,Ve.killTweensOf(C,F,t.globalTime(e)),K=!t.parent,Hs=0),t._pt&&l&&(zf[L.id]=1)}N&&ud(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,u&&e<=0&&x.render(wi,!0,!0)},Nv=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Xf=1,t.vars[e]="+=0",ad(t,a),Xf=0,l?Ra(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=qe(n)+bn(d.e)),d.b&&(d.b=h.s+bn(d.b))},Uv=function(t,e){var n=t[0]?Ws(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=uo({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Ov=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(In(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Aa=function(t,e,n,i,r){return Ye(t)?t.call(e,n,i,r):hn(t)&&~t.indexOf("random(")?go(t):t},cg=jf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",hg={};Gn(cg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return hg[s]=1});var Qe=(function(s){Fm(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:wa(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=i.parent||Ve,S=(In(n)||zm(n)?vs(n[0]):"length"in i)?[n]:Ei(n),w,x,M,b,A,v,T,C;if(a._targets=S.length?td(S):Ra("GSAP target "+n+" not found. https://gsap.com",!ni.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||Mc(c)||Mc(h)){i=a.vars;var N=i.easeReverse||i.yoyoEase;if(w=a.timeline=new Pn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:S}),w.kill(),w.parent=w._dp=_s(a),w._start=0,u||Mc(c)||Mc(h)){if(b=S.length,T=u&&jm(u),Qi(u))for(A in u)~cg.indexOf(A)&&(C||(C={}),C[A]=u[A]);for(x=0;x<b;x++)M=Cc(i,hg),M.stagger=0,N&&(M.easeReverse=N),C&&uo(M,C),v=S[x],M.duration=+Aa(c,_s(a),x,v,S),M.delay=(+Aa(h,_s(a),x,v,S)||0)-a._delay,!u&&b===1&&M.delay&&(a._delay=h=M.delay,a._start+=h,M.delay=0),w.to(v,M,T?T(x,v,S):0),w._ease=xe.none;w.duration()?c=h=0:a.timeline=0}else if(p){wa(ci(w.vars.defaults,{ease:"none"})),w._ease=Tr(p.ease||i.ease||"none");var L=0,V,D,F;if(In(p))p.forEach(function(G){return w.to(S,G,">")}),w.duration();else{M={};for(A in p)A==="ease"||A==="easeEach"||Ov(A,p[A],M,p.easeEach);for(A in M)for(V=M[A].sort(function(G,k){return G.t-k.t}),L=0,x=0;x<V.length;x++)D=V[x],F={ease:D.e,duration:(D.t-(x?V[x-1].t:0))/100*c},F[A]=D.v,w.to(S,F,L),L+=F.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||a.duration(c=w.duration())}else a.timeline=0;return f===!0&&!qf&&(Hs=_s(a),Ve.killTweensOf(S),Hs=0),Ki(m,_s(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===ke(m._time)&&ei(d)&&fv(_s(a))&&m.data!=="nested")&&(a._tTime=-Pe,a.render(Math.max(0,-h)||0)),g&&Jm(_s(a),g),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Pe&&!h?l:i<Pe?0:i,u,f,p,_,g,m,S,w;if(!c)pv(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(u=ke(d%_),d===l?(p=this._repeat,u=c):(g=ke(d/_),p=~~g,p&&p===g?(u=c,p--):u>c&&(u=c)),m=this._yoyo&&p&1,m&&(u=c-u),g=fo(this._tTime,_),u===a&&!o&&this._initted&&p===g)return this._tTime=d,this;p!==g&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(ke(_*p),!0).invalidate()._lock=0)}if(!this._initted){if($m(this,h?i:u,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var x=u<a;if(x!==this._inv){var M=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(x?-1:1)/M:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(u/c);if(this._from&&(this.ratio=S=1-S),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!g&&(ai(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;w&&w.render(i<0?i:w._dur*w._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&kf(this,i,r,o),ai(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!r&&this.parent&&ai(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&kf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Xs(this,1),!r&&!(h&&!a)&&(d||a||m)&&(ai(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Ia||ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ad(this,c),h=this._ease(c/this._dur),Nv(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Uc(this,0),this.parent||qm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ba(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Hs&&Hs.vars.overwrite!==!0)._first||ba(this),this.parent&&o!==this.timeline.totalDuration()&&po(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ei(i):a,c=this._ptLookup,h=this._pt,d,u,f,p,_,g,m;if((!r||r==="all")&&hv(a,l))return r==="all"&&(this._pt=0),ba(this);for(d=this._op=this._op||[],r!=="all"&&(hn(r)&&(_={},Gn(r,function(S){return _[S]=1}),r=_),r=Uv(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){u=c[m],r==="all"?(d[m]=r,p=u,f={}):(f=d[m]=d[m]||{},p=r);for(_ in p)g=u&&u[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&Dc(this,g,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&ba(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Ea(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Ea(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Ve.killTweensOf(i,r,o)},t})(La);ci(Qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gn("staggerTo,staggerFrom,staggerFromTo",function(s){Qe[s]=function(){var t=new Pn,e=Hf.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var ld=function(t,e,n){return t[e]=n},ug=function(t,e,n){return t[e](n)},Fv=function(t,e,n,i){return t[e](i.fp,n)},Bv=function(t,e,n){return t.setAttribute(e,n)},Oc=function(t,e){return Ye(t[e])?ug:Ic(t[e])&&t.setAttribute?Bv:ld},fg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},zv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},cd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},hd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},kv=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},Vv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Dc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Hv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},ud=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Wn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||fg,this.d=l||this,this.set=c||ld,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Hv,this.m=n,this.mt=r,this.tween=i},s})();Gn(jf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Qf[s]=1});li.TweenMax=li.TweenLite=Qe;li.TimelineLite=li.TimelineMax=Pn;Ve=new Pn({sortChildren:!1,defaults:Ca,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ni.stringFilter=id;var wr=[],wc={},Gv=[],Om=0,Wv=0,Uf=function(t){return(wc[t]||Gv).map(function(e){return e()})},Yf=function(){var t=Date.now(),e=[];t-Om>2&&(Uf("matchMediaInit"),wr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=$i.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Uf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Om=t,Uf("matchMedia"))},dg=(function(){function s(e,n){this.selector=n&&Gf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Wv++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ye(n)&&(r=i,i=n,n=Ye);var o=this,a=function(){var c=Fe,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Gf(r)),Fe=o,d=i.apply(o,arguments),Ye(d)&&o._r.push(d),Fe=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Ye?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Fe;Fe=null,n(this),Fe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Qe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Pn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qe)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=wr.length;o--;)wr[o].id===this.id&&wr.splice(o,1)},t.revert=function(n){this.kill(n||{})},s})(),Xv=(function(){function s(e){this.contexts=[],this.scope=e,Fe&&Fe.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Qi(n)||(n={matches:n});var o=new dg(0,r||this.scope),a=o.conditions={},l,c,h;Fe&&!o.selector&&(o.selector=Fe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=$i.matchMedia(n[c]),l&&(wr.indexOf(o)<0&&wr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Yf):l.addEventListener("change",Yf)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Pc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return rg(i)})},timeline:function(t){return new Pn(t)},getTweensOf:function(t,e){return Ve.getTweensOf(t,e)},getProperty:function(t,e,n,i){hn(t)&&(t=Ei(t)[0]);var r=Ws(t||{}).get,o=n?Ym:Xm;return n==="native"&&(n=""),t&&(e?o((jn[e]&&jn[e].get||r)(t,e,n,i)):function(a,l,c){return o((jn[a]&&jn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Ei(t),t.length>1){var i=t.map(function(h){return Ln.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=jn[e],a=Ws(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;ho._pt=0,d.init(t,n?h+n:h,ho,0,[t]),d.render(1,d),ho._pt&&hd(1,ho)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Ln.to(t,ci((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Ve.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Tr(t.ease,Ca.ease)),Im(Ca,t||{})},config:function(t){return Im(ni,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!jn[a]&&!li[a]&&Ra(e+" effect requires "+a+" plugin.")}),If[e]=function(a,l,c){return n(Ei(a),ci(l||{},r),c)},o&&(Pn.prototype[e]=function(a,l,c){return this.add(If[e](a,Qi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){xe[t]=Tr(e)},parseEase:function(t,e){return arguments.length?Tr(t,e):xe},getById:function(t){return Ve.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Pn(t),i,r;for(n.smoothChildTiming=ei(t.smoothChildTiming),Ve.remove(n),n._dp=0,n._time=n._tTime=Ve._time,i=Ve._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Qe&&i.vars.onComplete===i._targets[0]))&&Ki(n,i,i._start-i._delay),i=r;return Ki(Ve,n,0),n},context:function(t,e){return t?new dg(t,e):Fe},matchMedia:function(t){return new Xv(t)},matchMediaRefresh:function(){return wr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Yf()},addEventListener:function(t,e){var n=wc[t]||(wc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=wc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Mv,wrapYoyo:bv,distribute:jm,random:eg,snap:tg,normalize:Sv,getUnit:bn,clamp:_v,splitColor:og,toArray:Ei,selector:Gf,mapRange:ig,pipe:vv,unitize:yv,interpolate:Tv,shuffle:Qm},install:Vm,effects:If,ticker:ti,updateRoot:Pn.updateRoot,plugins:jn,globalTimeline:Ve,core:{PropTween:Wn,globals:Hm,Tween:Qe,Timeline:Pn,Animation:La,getCache:Ws,_removeLinkedListItem:Dc,reverting:function(){return Mn},context:function(t){return t&&Fe&&(Fe.data.push(t),t._ctx=Fe),Fe},suppressOverwrites:function(t){return qf=t}}};Gn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Pc[s]=Qe[s]});ti.add(Pn.updateRoot);ho=Pc.to({},{duration:0});var Yv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},qv=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Yv(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Of=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(hn(r)&&(l={},Gn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}qv(a,r)}}}},Ln=Pc.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Of("roundProps",Wf),Of("modifiers"),Of("snap",tg))||Pc;Qe.version=Pn.version=Ln.version="3.15.0";km=1;Zf()&&mo();var Zv=xe.Power0,Jv=xe.Power1,$v=xe.Power2,Kv=xe.Power3,Qv=xe.Power4,jv=xe.Linear,ty=xe.Quad,ey=xe.Cubic,ny=xe.Quart,iy=xe.Quint,sy=xe.Strong,ry=xe.Elastic,oy=xe.Back,ay=xe.SteppedEase,ly=xe.Bounce,cy=xe.Sine,hy=xe.Expo,uy=xe.Circ;var pg,qs,xo,_d,Lr,fy,mg,xd,dy=function(){return typeof window!="undefined"},Ss={},Ir=180/Math.PI,vo=Math.PI/180,_o=Math.atan2,gg=1e8,vd=/([A-Z])/g,py=/(left|right|width|margin|padding|x)/i,my=/[\s,\(]\S/,ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},gy=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_y=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},xy=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},vy=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Tg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},wg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},yy=function(t,e,n){return t.style[e]=n},Sy=function(t,e,n){return t.style.setProperty(e,n)},My=function(t,e,n){return t._gsap[e]=n},by=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ty=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},wy=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},He="transform",ii=He+"Origin",Ey=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Ss&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ji[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ys(i,a)}):this.tfm[t]=o.x?o[t]:ys(i,t),t===ii&&(this.tfm.zOrigin=o.zOrigin);else return ji.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(He)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ii,e,"")),t=He}(r||e)&&this.props.push(t,e,r[t])},Eg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Ay=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(vd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=xd(),(!r||!r.isStart)&&!n[He]&&(Eg(n),i.zOrigin&&n[ii]&&(n[ii]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ag=function(t,e){var n={target:t,props:[],revert:Ay,save:Ey};return t._gsap||Ln.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Cg,pd=function(t,e){var n=qs.createElementNS?qs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):qs.createElement(t);return n&&n.style?n:qs.createElement(t)},hi=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(vd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,yo(e)||e,1)||""},_g="O,Moz,ms,Ms,Webkit".split(","),yo=function(t,e,n){var i=e||Lr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(_g[o]+t in r););return o<0?null:(o===3?"ms":o>=0?_g[o]:"")+t},md=function(){dy()&&window.document&&(pg=window,qs=pg.document,xo=qs.documentElement,Lr=pd("div")||{style:{}},fy=pd("div"),He=yo(He),ii=He+"Origin",Lr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cg=!!yo("perspective"),xd=Ln.core.reverting,_d=1)},xg=function(t){var e=t.ownerSVGElement,n=pd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),xo.appendChild(n);try{r=i.getBBox()}catch(o){}return n.removeChild(i),xo.removeChild(n),r},vg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Rg=function(t){var e,n;try{e=t.getBBox()}catch(i){e=xg(t),n=1}return e&&(e.width||e.height)||n||(e=xg(t)),e&&!e.width&&!e.x&&!e.y?{x:+vg(t,["x","cx","x1"])||0,y:+vg(t,["y","cy","y1"])||0,width:0,height:0}:e},Pg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Rg(t))},Js=function(t,e){if(e){var n=t.style,i;e in Ss&&e!==ii&&(e=He),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(vd,"-$1").toLowerCase())):n.removeAttribute(e)}},Zs=function(t,e,n,i,r,o){var a=new Wn(t._pt,e,n,0,1,o?wg:Tg);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},yg={deg:1,rad:1,turn:1},Cy={grid:1,flex:1},$s=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Lr.style,l=py.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",p,_,g,m;if(i===o||!r||yg[i]||yg[o])return r;if(o!=="px"&&!u&&(r=s(t,e,n,"px")),m=t.getCTM&&Pg(t),(f||o==="%")&&(Ss[e]||~e.indexOf("adius")))return p=m?t.getBBox()[l?"width":"height"]:t[h],qe(f?r/p*d:r/100*p);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===qs||!_.appendChild)&&(_=qs.body),g=_._gsap,g&&f&&g.width&&l&&g.time===ti.time&&!g.uncache)return qe(r/g.width*d);if(f&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=d+i,p=t[h],S?t.style[e]=S:Js(t,e)}else(f||o==="%")&&!Cy[hi(_,"display")]&&(a.position=hi(t,"position")),_===t&&(a.position="static"),_.appendChild(Lr),p=Lr[h],_.removeChild(Lr),a.position="absolute";return l&&f&&(g=Ws(_),g.time=ti.time,g.width=_[h]),qe(u?p*r/d:p&&r?d/p*r:0)},ys=function(t,e,n,i){var r;return _d||md(),e in ji&&e!=="transform"&&(e=ji[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ss[e]&&e!=="transform"?(r=Oa(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Bc(hi(t,ii))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Fc[e]&&Fc[e](t,e,n)||hi(t,e)||ed(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?$s(t,e,r,n)+n:r},Ry=function(t,e,n,i){if(!n||n==="none"){var r=yo(e,t,1),o=r&&hi(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=hi(t,"borderTopColor"))}var a=new Wn(this._pt,t.style,e,0,1,cd),l=0,c=0,h,d,u,f,p,_,g,m,S,w,x,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=hi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=hi(t,e)||i,_?t.style[e]=_:Js(t,e)),h=[n,i],id(h),n=h[0],i=h[1],u=n.match(Er)||[],M=i.match(Er)||[],M.length){for(;d=Er.exec(i);)g=d[0],S=i.substring(l,d.index),p?p=(p+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(p=1),g!==(_=u[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),g.charAt(1)==="="&&(g=Ar(f,g)+x),m=parseFloat(g),w=g.substr((m+"").length),l=Er.lastIndex-w.length,w||(w=w||ni.units[e]||x,l===i.length&&(i+=w,a.e+=w)),x!==w&&(f=$s(t,e,_,w)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:f,c:m-f,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?wg:Tg;return $f.test(i)&&(a.e=0),this._pt=a,a},Sg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Py=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Sg[n]||n,e[1]=Sg[i]||i,e.join(" ")},Iy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Ss[a]&&(l=1,a=a==="transformOrigin"?ii:He),Js(n,a);l&&(Js(n,He),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Oa(n,1),o.uncache=1,Eg(i)))}},Fc={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Wn(t._pt,e,n,0,0,Iy);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Ua=[1,0,0,1,0,0],Ig={},Lg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Mg=function(t){var e=hi(t,He);return Lg(e)?Ua:e.substr(7).match(Jf).map(qe)},yd=function(t,e){var n=t._gsap||Ws(t),i=t.style,r=Mg(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ua:r):(r===Ua&&!t.offsetParent&&t!==xo&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,xo.appendChild(t)),r=Mg(t),l?i.display=l:Js(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):xo.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},gd=function(t,e,n,i,r,o){var a=t._gsap,l=r||yd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],_=l[2],g=l[3],m=l[4],S=l[5],w=e.split(" "),x=parseFloat(w[0])||0,M=parseFloat(w[1])||0,b,A,v,T;n?l!==Ua&&(A=f*g-p*_)&&(v=x*(g/A)+M*(-_/A)+(_*S-g*m)/A,T=x*(-p/A)+M*(f/A)-(f*S-p*m)/A,x=v,M=T):(b=Rg(t),x=b.x+(~w[0].indexOf("%")?x/100*b.width:x),M=b.y+(~(w[1]||w[0]).indexOf("%")?M/100*b.height:M)),i||i!==!1&&a.smooth?(m=x-c,S=M-h,a.xOffset=d+(m*f+S*_)-m,a.yOffset=u+(m*p+S*g)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=M,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[ii]="0px 0px",o&&(Zs(o,a,"xOrigin",c,x),Zs(o,a,"yOrigin",h,M),Zs(o,a,"xOffset",d,a.xOffset),Zs(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+M)},Oa=function(t,e){var n=t._gsap||new sd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=hi(t,ii)||"0",h,d,u,f,p,_,g,m,S,w,x,M,b,A,v,T,C,N,L,V,D,F,G,k,K,W,P,$,wt,Et,Xt,Gt;return h=d=u=_=g=m=S=w=x=0,f=p=1,n.svg=!!(t.getCTM&&Pg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[He]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[He]!=="none"?l[He]:"")),i.scale=i.rotate=i.translate="none"),A=yd(t,n.svg),n.svg&&(n.uncache?(K=t.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),gd(t,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,b=n.yOrigin||0,A!==Ua&&(N=A[0],L=A[1],V=A[2],D=A[3],h=F=A[4],d=G=A[5],A.length===6?(f=Math.sqrt(N*N+L*L),p=Math.sqrt(D*D+V*V),_=N||L?_o(L,N)*Ir:0,S=V||D?_o(V,D)*Ir+_:0,S&&(p*=Math.abs(Math.cos(S*vo))),n.svg&&(h-=M-(M*N+b*V),d-=b-(M*L+b*D))):(Gt=A[6],Et=A[7],P=A[8],$=A[9],wt=A[10],Xt=A[11],h=A[12],d=A[13],u=A[14],v=_o(Gt,wt),g=v*Ir,v&&(T=Math.cos(-v),C=Math.sin(-v),k=F*T+P*C,K=G*T+$*C,W=Gt*T+wt*C,P=F*-C+P*T,$=G*-C+$*T,wt=Gt*-C+wt*T,Xt=Et*-C+Xt*T,F=k,G=K,Gt=W),v=_o(-V,wt),m=v*Ir,v&&(T=Math.cos(-v),C=Math.sin(-v),k=N*T-P*C,K=L*T-$*C,W=V*T-wt*C,Xt=D*C+Xt*T,N=k,L=K,V=W),v=_o(L,N),_=v*Ir,v&&(T=Math.cos(v),C=Math.sin(v),k=N*T+L*C,K=F*T+G*C,L=L*T-N*C,G=G*T-F*C,N=k,F=K),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),f=qe(Math.sqrt(N*N+L*L+V*V)),p=qe(Math.sqrt(G*G+Gt*Gt)),v=_o(F,G),S=Math.abs(v)>2e-4?v*Ir:0,x=Xt?1/(Xt<0?-Xt:Xt):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Lg(hi(t,He)),k&&t.setAttribute("transform",k))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=qe(f),n.scaleY=qe(p),n.rotation=qe(_)+a,n.rotationX=qe(g)+a,n.rotationY=qe(m)+a,n.skewX=S+a,n.skewY=w+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ii]=Bc(c)),n.xOffset=n.yOffset=0,n.force3D=ni.force3D,n.renderTransform=n.svg?Dy:Cg?Dg:Ly,n.uncache=0,n},Bc=function(t){return(t=t.split(" "))[0]+" "+t[1]},fd=function(t,e,n){var i=bn(e);return qe(parseFloat(e)+parseFloat($s(t,"x",n+"px",i)))+i},Ly=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Dg(t,e)},Rr="0deg",Na="0px",Pr=") ",Dg=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,S=n.target,w=n.zOrigin,x="",M=m==="auto"&&t&&t!==1||m===!0;if(w&&(d!==Rr||h!==Rr)){var b=parseFloat(h)*vo,A=Math.sin(b),v=Math.cos(b),T;b=parseFloat(d)*vo,T=Math.cos(b),o=fd(S,o,A*T*-w),a=fd(S,a,-Math.sin(b)*-w),l=fd(S,l,v*T*-w+w)}g!==Na&&(x+="perspective("+g+Pr),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(M||o!==Na||a!==Na||l!==Na)&&(x+=l!==Na||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Pr),c!==Rr&&(x+="rotate("+c+Pr),h!==Rr&&(x+="rotateY("+h+Pr),d!==Rr&&(x+="rotateX("+d+Pr),(u!==Rr||f!==Rr)&&(x+="skew("+u+", "+f+Pr),(p!==1||_!==1)&&(x+="scale("+p+", "+_+Pr),S.style[He]=x||"translate(0, 0)"},Dy=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,S=n.forceCSS,w=parseFloat(o),x=parseFloat(a),M,b,A,v,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=vo,c*=vo,M=Math.cos(l)*d,b=Math.sin(l)*d,A=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=vo,T=Math.tan(c-h),T=Math.sqrt(1+T*T),A*=T,v*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),M*=T,b*=T)),M=qe(M),b=qe(b),A=qe(A),v=qe(v)):(M=d,v=u,b=A=0),(w&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(w=$s(f,"x",o,"px"),x=$s(f,"y",a,"px")),(p||_||g||m)&&(w=qe(w+p-(p*M+_*A)+g),x=qe(x+_-(p*b+_*v)+m)),(i||r)&&(T=f.getBBox(),w=qe(w+i/100*T.width),x=qe(x+r/100*T.height)),T="matrix("+M+","+b+","+A+","+v+","+w+","+x+")",f.setAttribute("transform",T),S&&(f.style[He]=T)},Ny=function(t,e,n,i,r){var o=360,a=hn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Ir:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*gg)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*gg)%o-~~(c/o)*o)),t._pt=u=new Wn(t._pt,e,n,i,c,gy),u.e=h,u.u="deg",t._props.push(n),u},bg=function(t,e){for(var n in e)t[n]=e[n];return t},Uy=function(t,e,n){var i=bg({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[He]=e,a=Oa(n,1),Js(n,He),n.setAttribute("transform",c)):(c=getComputedStyle(n)[He],o[He]=e,a=Oa(n,1),o[He]=c);for(l in Ss)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=bn(c),p=bn(h),d=f!==p?$s(n,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new Wn(t._pt,a,l,d,u-d,dd),t._pt.u=p||0,t._props.push(l));bg(a,i)};Gn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Fc[t>1?"border"+s:s]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return ys(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,_){return f[p]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var Sd={name:"css",register:md,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,p,_,g,m,S,w,x,M,b,A,v,T;_d||md(),this.styles=this.styles||Ag(t),v=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(jn[_]&&od(_,e,n,i,t,r)))){if(f=typeof h,p=Fc[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=go(h)),p)p(this,t,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",xs.lastIndex=0,xs.test(c)||(g=bn(c),m=bn(h),m?g!==m&&(c=$s(t,_,c,m)+m):g&&(h+=g)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),v.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],hn(c)&&~c.indexOf("random(")&&(c=go(c)),bn(c+"")||c==="auto"||(c+=ni.units[_]||bn(ys(t,_))||""),(c+"").charAt(1)==="="&&(c=ys(t,_))):c=ys(t,_),u=parseFloat(c),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),d=parseFloat(h),_ in ji&&(_==="autoAlpha"&&(u===1&&ys(t,"visibility")==="hidden"&&d&&(u=0),v.push("visibility",0,a.visibility),Zs(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ji[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in Ss,w){if(this.styles.save(_),T=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=hi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=hi(t,"perspective"),C?t.style.perspective=C:Js(t,"perspective")}d=parseFloat(h)}if(x||(M=t._gsap,M.renderTransform&&!e.parseTransform||Oa(t,e.parseTransform),b=e.smoothOrigin!==!1&&M.smooth,x=this._pt=new Wn(this._pt,a,He,0,1,M.renderTransform,M,0,-1),x.dep=1),_==="scale")this._pt=new Wn(this._pt,M,"scaleY",M.scaleY,(S?Ar(M.scaleY,S+d):d)-M.scaleY||0,dd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(ii,0,a[ii]),h=Py(h),M.svg?gd(t,h,0,b,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==M.zOrigin&&Zs(this,M,"zOrigin",M.zOrigin,m),Zs(this,a,_,Bc(c),Bc(h)));continue}else if(_==="svgOrigin"){gd(t,h,1,b,0,this);continue}else if(_ in Ig){Ny(this,M,_,u,S?Ar(u,S+h):h);continue}else if(_==="smoothOrigin"){Zs(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){Uy(this,h,t);continue}}else _ in a||(_=yo(_)||_);if(w||(d||d===0)&&(u||u===0)&&!my.test(h)&&_ in a)g=(c+"").substr((u+"").length),d||(d=0),m=bn(h)||(_ in ni.units?ni.units[_]:g),g!==m&&(u=$s(t,_,c,m)),this._pt=new Wn(this._pt,w?M:a,_,u,(S?Ar(u,S+d):d)-u,!w&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?vy:dd),this._pt.u=m||0,w&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=xy):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=_y);else if(_ in a)Ry.call(this,t,_,c,S?S+h:h);else if(_ in t)this.add(t,_,c||t[_],S?S+h:h,i,r);else if(_!=="parseTransform"){Lc(_,h);continue}w||(_ in a?v.push(_,0,a[_]):typeof t[_]=="function"?v.push(_,2,t[_]()):v.push(_,1,c||t[_])),o.push(_)}}A&&ud(this)},render:function(t,e){if(e.tween._time||!xd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ys,aliases:ji,getSetter:function(t,e,n){var i=ji[e];return i&&i.indexOf(",")<0&&(e=i),e in Ss&&e!==ii&&(t._gsap.x||ys(t,"x"))?n&&mg===n?e==="scale"?by:My:(mg=n||{})&&(e==="scale"?Ty:wy):t.style&&!Ic(t.style[e])?yy:~e.indexOf("-")?Sy:Oc(t,e)},core:{_removeProperty:Js,_getMatrix:yd}};Ln.utils.checkPrefix=yo;Ln.core.getStyleSaver=Ag;(function(s,t,e,n){var i=Gn(s+","+t+","+e,function(r){Ss[r]=1});Gn(t,function(r){ni.units[r]="deg",Ig[r]=1}),ji[i[13]]=s+","+t,Gn(n,function(r){var o=r.split(":");ji[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ni.units[s]="px"});Ln.registerPlugin(Sd);var Be=Ln.registerPlugin(Sd)||Ln,jE=Be.core.Tween;function Ng(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Oy(s,t,e){return t&&Ng(s.prototype,t),e&&Ng(s,e),s}var Tn,Vc,Fy,ui,Ks,Qs,Mo,Og,Dr,bo,Fg,Ms,Fi,Bg,zg=function(){return Tn||typeof window!="undefined"&&(Tn=window.gsap)&&Tn.registerPlugin&&Tn},kg=1,So=[],ue=[],Bi=[],Ba=Date.now,Md=function(t,e){return e},By=function(){var t=bo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ue),i.push.apply(i,Bi),ue=n,Bi=i,Md=function(o,a){return e[o](a)}},Ts=function(t,e){return~Bi.indexOf(t)&&Bi[Bi.indexOf(t)+1][e]},za=function(t){return!!~Fg.indexOf(t)},Yn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},Xn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},zc="scrollLeft",kc="scrollTop",bd=function(){return Ms&&Ms.isPressed||ue.cache++},Hc=function(t,e){var n=function i(r){if(r||r===0){kg&&(ui.history.scrollRestoration="manual");var o=Ms&&Ms.isPressed;r=i.v=Math.round(r)||(Ms&&Ms.iOS?1:0),t(r),i.cacheID=ue.cache,o&&Md("ss",r)}else(e||ue.cache!==i.cacheID||Md("ref"))&&(i.cacheID=ue.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Dn={s:zc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Hc(function(s){return arguments.length?ui.scrollTo(s,sn.sc()):ui.pageXOffset||Ks[zc]||Qs[zc]||Mo[zc]||0})},sn={s:kc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Dn,sc:Hc(function(s){return arguments.length?ui.scrollTo(Dn.sc(),s):ui.pageYOffset||Ks[kc]||Qs[kc]||Mo[kc]||0})},qn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Tn.utils.toArray)(t)[0]||(typeof t=="string"&&Tn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},zy=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},bs=function(t,e){var n=e.s,i=e.sc;za(t)&&(t=Ks.scrollingElement||Qs);var r=ue.indexOf(t),o=i===sn.sc?1:2;!~r&&(r=ue.push(t)-1),ue[r+o]||Yn(t,"scroll",bd);var a=ue[r+o],l=a||(ue[r+o]=Hc(Ts(t,n),!0)||(za(t)?i:Hc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Tn.getProperty(t,"scrollBehavior")==="smooth"),l},Gc=function(t,e,n){var i=t,r=t,o=Ba(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var g=Ba();_||g-o>l?(r=i,i=p,a=o,o=g):n?i+=p:i=r+(p-r)/(g-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},u=function(p){var _=a,g=r,m=Ba();return(p||p===0)&&p!==i&&h(p),o===a||m-a>c?0:(i+(n?g:-g))/((n?m:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},Fa=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Ug=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Vg=function(){bo=Tn.core.globals().ScrollTrigger,bo&&bo.core&&By()},Hg=function(t){return Tn=t||zg(),!Vc&&Tn&&typeof document!="undefined"&&document.body&&(ui=window,Ks=document,Qs=Ks.documentElement,Mo=Ks.body,Fg=[ui,Ks,Qs,Mo],Fy=Tn.utils.clamp,Bg=Tn.core.context||function(){},Dr="onpointerenter"in Mo?"pointer":"mouse",Og=Ze.isTouch=ui.matchMedia&&ui.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ui||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Fi=Ze.eventTypes=("ontouchstart"in Qs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Qs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return kg=0},500),Vc=1),bo||Vg(),Vc};Dn.op=sn;ue.cache=0;var Ze=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Vc||Hg(Tn)||console.warn("Please gsap.registerPlugin(Observer)"),bo||Vg();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,_=n.event,g=n.onDragStart,m=n.onDragEnd,S=n.onDrag,w=n.onPress,x=n.onRelease,M=n.onRight,b=n.onLeft,A=n.onUp,v=n.onDown,T=n.onChangeX,C=n.onChangeY,N=n.onChange,L=n.onToggleX,V=n.onToggleY,D=n.onHover,F=n.onHoverEnd,G=n.onMove,k=n.ignoreCheck,K=n.isNormalizer,W=n.onGestureStart,P=n.onGestureEnd,$=n.onWheel,wt=n.onEnable,Et=n.onDisable,Xt=n.onClick,Gt=n.scrollSpeed,$t=n.capture,J=n.allowClicks,tt=n.lockAxis,dt=n.onLockAxis;this.target=a=qn(a)||Qs,this.vars=n,f&&(f=Tn.utils.toArray(f)),i=i||1e-9,r=r||0,p=p||1,Gt=Gt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ui.getComputedStyle(Mo).lineHeight)||22);var Ht,xt,It,Nt,Q,st,ot,U=this,ft=0,Ft=0,Pt=n.passive||!h&&n.passive!==!1,Ct=bs(a,Dn),gt=bs(a,sn),I=Ct(),Kt=gt(),Lt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Fi[0]==="pointerdown",R=za(a),y=a.ownerDocument||Ks,H=[0,0,0],X=[0,0,0],j=0,mt=function(){return j=Ba()},ht=function(at,Jt){return(U.event=at)&&f&&zy(at.target,f)||Jt&&Lt&&at.pointerType!=="touch"||k&&k(at,Jt)},et=function(){U._vx.reset(),U._vy.reset(),xt.pause(),d&&d(U)},it=function(){var at=U.deltaX=Ug(H),Jt=U.deltaY=Ug(X),ct=Math.abs(at)>=i,Qt=Math.abs(Jt)>=i;N&&(ct||Qt)&&N(U,at,Jt,H,X),ct&&(M&&U.deltaX>0&&M(U),b&&U.deltaX<0&&b(U),T&&T(U),L&&U.deltaX<0!=ft<0&&L(U),ft=U.deltaX,H[0]=H[1]=H[2]=0),Qt&&(v&&U.deltaY>0&&v(U),A&&U.deltaY<0&&A(U),C&&C(U),V&&U.deltaY<0!=Ft<0&&V(U),Ft=U.deltaY,X[0]=X[1]=X[2]=0),(Nt||It)&&(G&&G(U),It&&(g&&It===1&&g(U),S&&S(U),It=0),Nt=!1),st&&!(st=!1)&&dt&&dt(U),Q&&($(U),Q=!1),Ht=0},yt=function(at,Jt,ct){H[ct]+=at,X[ct]+=Jt,U._vx.update(at),U._vy.update(Jt),c?Ht||(Ht=requestAnimationFrame(it)):it()},Bt=function(at,Jt){tt&&!ot&&(U.axis=ot=Math.abs(at)>Math.abs(Jt)?"x":"y",st=!0),ot!=="y"&&(H[2]+=at,U._vx.update(at,!0)),ot!=="x"&&(X[2]+=Jt,U._vy.update(Jt,!0)),c?Ht||(Ht=requestAnimationFrame(it)):it()},St=function(at){if(!ht(at,1)){at=Fa(at,h);var Jt=at.clientX,ct=at.clientY,Qt=Jt-U.x,zt=ct-U.y,ne=U.isDragging;U.x=Jt,U.y=ct,(ne||(Qt||zt)&&(Math.abs(U.startX-Jt)>=r||Math.abs(U.startY-ct)>=r))&&(It||(It=ne?2:1),ne||(U.isDragging=!0),Bt(Qt,zt))}},vt=U.onPress=function(ut){ht(ut,1)||ut&&ut.button||(U.axis=ot=null,xt.pause(),U.isPressed=!0,ut=Fa(ut),ft=Ft=0,U.startX=U.x=ut.clientX,U.startY=U.y=ut.clientY,U._vx.reset(),U._vy.reset(),Yn(K?a:y,Fi[1],St,Pt,!0),U.deltaX=U.deltaY=0,w&&w(U))},pt=U.onRelease=function(ut){if(!ht(ut,1)){Xn(K?a:y,Fi[1],St,!0);var at=!isNaN(U.y-U.startY),Jt=U.isDragging,ct=Jt&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),Qt=Fa(ut);!ct&&at&&(U._vx.reset(),U._vy.reset(),h&&J&&Tn.delayedCall(.08,function(){if(Ba()-j>300&&!ut.defaultPrevented){if(ut.target.click)ut.target.click();else if(y.createEvent){var zt=y.createEvent("MouseEvents");zt.initMouseEvent("click",!0,!0,ui,1,Qt.screenX,Qt.screenY,Qt.clientX,Qt.clientY,!1,!1,!1,!1,0,null),ut.target.dispatchEvent(zt)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,d&&Jt&&!K&&xt.restart(!0),It&&it(),m&&Jt&&m(U),x&&x(U,ct)}},Yt=function(at){return at.touches&&at.touches.length>1&&(U.isGesturing=!0)&&W(at,U.isDragging)},jt=function(){return(U.isGesturing=!1)||P(U)},B=function(at){if(!ht(at)){var Jt=Ct(),ct=gt();yt((Jt-I)*Gt,(ct-Kt)*Gt,1),I=Jt,Kt=ct,d&&xt.restart(!0)}},_t=function(at){if(!ht(at)){at=Fa(at,h),$&&(Q=!0);var Jt=(at.deltaMode===1?l:at.deltaMode===2?ui.innerHeight:1)*p;yt(at.deltaX*Jt,at.deltaY*Jt,0),d&&!K&&xt.restart(!0)}},nt=function(at){if(!ht(at)){var Jt=at.clientX,ct=at.clientY,Qt=Jt-U.x,zt=ct-U.y;U.x=Jt,U.y=ct,Nt=!0,d&&xt.restart(!0),(Qt||zt)&&Bt(Qt,zt)}},Mt=function(at){U.event=at,D(U)},Tt=function(at){U.event=at,F(U)},rt=function(at){return ht(at)||Fa(at,h)&&Xt(U)};xt=U._dc=Tn.delayedCall(u||.25,et).pause(),U.deltaX=U.deltaY=0,U._vx=Gc(0,50,!0),U._vy=Gc(0,50,!0),U.scrollX=Ct,U.scrollY=gt,U.isDragging=U.isGesturing=U.isPressed=!1,Bg(this),U.enable=function(ut){return U.isEnabled||(Yn(R?y:a,"scroll",bd),o.indexOf("scroll")>=0&&Yn(R?y:a,"scroll",B,Pt,$t),o.indexOf("wheel")>=0&&Yn(a,"wheel",_t,Pt,$t),(o.indexOf("touch")>=0&&Og||o.indexOf("pointer")>=0)&&(Yn(a,Fi[0],vt,Pt,$t),Yn(y,Fi[2],pt),Yn(y,Fi[3],pt),J&&Yn(a,"click",mt,!0,!0),Xt&&Yn(a,"click",rt),W&&Yn(y,"gesturestart",Yt),P&&Yn(y,"gestureend",jt),D&&Yn(a,Dr+"enter",Mt),F&&Yn(a,Dr+"leave",Tt),G&&Yn(a,Dr+"move",nt)),U.isEnabled=!0,U.isDragging=U.isGesturing=U.isPressed=Nt=It=!1,U._vx.reset(),U._vy.reset(),I=Ct(),Kt=gt(),ut&&ut.type&&vt(ut),wt&&wt(U)),U},U.disable=function(){U.isEnabled&&(So.filter(function(ut){return ut!==U&&za(ut.target)}).length||Xn(R?y:a,"scroll",bd),U.isPressed&&(U._vx.reset(),U._vy.reset(),Xn(K?a:y,Fi[1],St,!0)),Xn(R?y:a,"scroll",B,$t),Xn(a,"wheel",_t,$t),Xn(a,Fi[0],vt,$t),Xn(y,Fi[2],pt),Xn(y,Fi[3],pt),Xn(a,"click",mt,!0),Xn(a,"click",rt),Xn(y,"gesturestart",Yt),Xn(y,"gestureend",jt),Xn(a,Dr+"enter",Mt),Xn(a,Dr+"leave",Tt),Xn(a,Dr+"move",nt),U.isEnabled=U.isPressed=U.isDragging=!1,Et&&Et(U))},U.kill=U.revert=function(){U.disable();var ut=So.indexOf(U);ut>=0&&So.splice(ut,1),Ms===U&&(Ms=0)},So.push(U),K&&za(a)&&(Ms=U),U.enable(_)},Oy(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Ze.version="3.15.0";Ze.create=function(s){return new Ze(s)};Ze.register=Hg;Ze.getAll=function(){return So.slice()};Ze.getById=function(s){return So.filter(function(t){return t.vars.id===s})[0]};zg()&&Tn.registerPlugin(Ze);var Ot,Ao,pe,Te,pi,Me,Fd,rh,ja,Ya,Va,Wc,Nn,lh,Pd,Jn,Gg,Wg,Co,o0,Td,a0,Zn,Id,l0,c0,js,Ld,Bd,Ro,zd,qa,Dd,wd,Xc=1,Un=Date.now,Ed=Un(),Ri=0,Ha=0,Xg=function(t,e,n){var i=di(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Yg=function(t,e){return e&&(!di(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},ky=function s(){return Ha&&requestAnimationFrame(s)},qg=function(){return lh=1},Zg=function(){return lh=0},ts=function(t){return t},Ga=function(t){return Math.round(t*1e5)/1e5||0},h0=function(){return typeof window!="undefined"},u0=function(){return Ot||h0()&&(Ot=window.gsap)&&Ot.registerPlugin&&Ot},zr=function(t){return!!~Fd.indexOf(t)},f0=function(t){return(t==="Height"?zd:pe["inner"+t])||pi["client"+t]||Me["client"+t]},d0=function(t){return Ts(t,"getBoundingClientRect")||(zr(t)?function(){return sh.width=pe.innerWidth,sh.height=zd,sh}:function(){return ws(t)})},Vy=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=Ts(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?f0(r):t["client"+r])||0}},Hy=function(t,e){return!e||~Bi.indexOf(t)?d0(t):function(){return sh}},es=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Ts(t,n))?o()-d0(t)()[r]:zr(t)?(pi[n]||Me[n])-f0(i):t[n]-t["offset"+i])},Yc=function(t,e){for(var n=0;n<Co.length;n+=3)(!e||~e.indexOf(Co[n+1]))&&t(Co[n],Co[n+1],Co[n+2])},di=function(t){return typeof t=="string"},On=function(t){return typeof t=="function"},Wa=function(t){return typeof t=="number"},Nr=function(t){return typeof t=="object"},ka=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},To=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},wo=Math.abs,p0="left",m0="top",kd="right",Vd="bottom",Or="width",Fr="height",Za="Right",Ja="Left",$a="Top",Ka="Bottom",rn="padding",Ai="margin",Io="Width",Hd="Height",un="px",Ci=function(t){return pe.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Gy=function(t){var e=Ci(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Jg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ws=function(t,e){var n=e&&Ci(t)[Pd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ot.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},oh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},g0=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},Wy=function(t){return function(e){return Ot.utils.snap(g0(t),e)}},Gd=function(t){var e=Ot.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},Xy=function(t){return function(e,n){return Gd(g0(t))(e,n.direction)}},qc=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},xn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},_n=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Zc=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},$g={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Jc={toggleActions:"play",anticipatePin:0},ah={top:0,left:0,center:.5,bottom:1,right:1},th=function(t,e){if(di(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in ah?ah[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},$c=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,u=r.indent,f=r.fontWeight,p=Te.createElement("div"),_=zr(n)||Ts(n,"pinType")==="fixed",g=t.indexOf("scroller")!==-1,m=_?Me:n.tagName==="IFRAME"?n.contentDocument.body:n,S=t.indexOf("start")!==-1,w=S?c:h,x="border-color:"+w+";font-size:"+d+";color:"+w+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(x+=(i===sn?kd:Vd)+":"+(o+parseFloat(u))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=S,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=x,p.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],eh(p,0,i,S),p},eh=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Io]=1,r["border"+a+Io]=0,r[n.p]=e+"px",Ot.set(t,r)},fe=[],Nd={},tl,Kg=function(){return Un()-Ri>34&&(tl||(tl=requestAnimationFrame(Es)))},Eo=function(){(!Zn||!Zn.isPressed||Zn.startX>Me.clientWidth)&&(ue.cache++,Zn?tl||(tl=requestAnimationFrame(Es)):Es(),Ri||Vr("scrollStart"),Ri=Un())},Ad=function(){c0=pe.innerWidth,l0=pe.innerHeight},Xa=function(t){ue.cache++,(t===!0||!Nn&&!a0&&!Te.fullscreenElement&&!Te.webkitFullscreenElement&&(!Id||c0!==pe.innerWidth||Math.abs(pe.innerHeight-l0)>pe.innerHeight*.25))&&rh.restart(!0)},kr={},Yy=[],_0=function s(){return _n(se,"scrollEnd",s)||Ur(!0)},Vr=function(t){return kr[t]&&kr[t].map(function(e){return e()})||Yy},fi=[],x0=function(t){for(var e=0;e<fi.length;e+=5)(!t||fi[e+4]&&fi[e+4].query===t)&&(fi[e].style.cssText=fi[e+1],fi[e].getBBox&&fi[e].setAttribute("transform",fi[e+2]||""),fi[e+3].uncache=1)},v0=function(){return ue.forEach(function(t){return On(t)&&++t.cacheID&&(t.rec=t())})},Wd=function(t,e){var n;for(Jn=0;Jn<fe.length;Jn++)n=fe[Jn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));qa=!0,e&&x0(e),e||Vr("revert")},y0=function(t,e){ue.cache++,(e||!$n)&&ue.forEach(function(n){return On(n)&&n.cacheID++&&(n.rec=0)}),di(t)&&(pe.history.scrollRestoration=Bd=t)},$n,Br=0,Qg,qy=function(){if(Qg!==Br){var t=Qg=Br;requestAnimationFrame(function(){return t===Br&&Ur(!0)})}},S0=function(){Me.appendChild(Ro),zd=!Zn&&Ro.offsetHeight||pe.innerHeight,Me.removeChild(Ro)},jg=function(t){return ja(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ur=function(t,e){if(pi=Te.documentElement,Me=Te.body,Fd=[pe,Te,pi,Me],Ri&&!t&&!qa){xn(se,"scrollEnd",_0);return}S0(),$n=se.isRefreshing=!0,qa||v0();var n=Vr("refreshInit");o0&&se.sort(),e||Wd(),ue.forEach(function(i){On(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),fe.slice(0).forEach(function(i){return i.refresh()}),qa=!1,fe.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Dd=1,jg(!0),fe.forEach(function(i){var r=es(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),jg(!1),Dd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ue.forEach(function(i){On(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),y0(Bd,1),rh.pause(),Br++,$n=2,Es(2),fe.forEach(function(i){return On(i.vars.onRefresh)&&i.vars.onRefresh(i)}),$n=se.isRefreshing=!1,Vr("refresh")},Ud=0,nh=1,Qa,Es=function(t){if(t===2||!$n&&!qa){se.isUpdating=!0,Qa&&Qa.update(0);var e=fe.length,n=Un(),i=n-Ed>=50,r=e&&fe[0].scroll();if(nh=Ud>r?-1:1,$n||(Ud=r),i&&(Ri&&!lh&&n-Ri>200&&(Ri=0,Vr("scrollEnd")),Va=Ed,Ed=n),nh<0){for(Jn=e;Jn-- >0;)fe[Jn]&&fe[Jn].update(0,i);nh=1}else for(Jn=0;Jn<e;Jn++)fe[Jn]&&fe[Jn].update(0,i);se.isUpdating=!1}tl=0},Od=[p0,m0,Vd,kd,Ai+Ka,Ai+Za,Ai+$a,Ai+Ja,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ih=Od.concat([Or,Fr,"boxSizing","max"+Io,"max"+Hd,"position",Ai,rn,rn+$a,rn+Za,rn+Ka,rn+Ja]),Zy=function(t,e,n){Po(n);var i=t._gsap;if(i.spacerIsNative)Po(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Cd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=Od.length,o=e.style,a=t.style,l;r--;)l=Od[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Vd]=a[kd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Or]=oh(t,Dn)+un,o[Fr]=oh(t,sn)+un,o[rn]=a[Ai]=a[m0]=a[p0]="0",Po(i),a[Or]=a["max"+Io]=n[Or],a[Fr]=a["max"+Hd]=n[Fr],a[rn]=n[rn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Jy=/([A-Z])/g,Po=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Ot.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(Jy,"-$1").toLowerCase())}},Kc=function(t){for(var e=ih.length,n=t.style,i=[],r=0;r<e;r++)i.push(ih[r],n[ih[r]]);return i.t=t,i},$y=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},sh={left:0,top:0},t0=function(t,e,n,i,r,o,a,l,c,h,d,u,f,p){On(t)&&(t=t(l)),di(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?th("0"+t.substr(3),n):0));var _=f?f.time():0,g,m,S;if(f&&f.seek(0),isNaN(t)||(t=+t),Wa(t))f&&(t=Ot.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&eh(a,n,i,!0);else{On(e)&&(e=e(l));var w=(t||"0").split(" "),x,M,b,A;S=qn(e,l)||Me,x=ws(S)||{},(!x||!x.left&&!x.top)&&Ci(S).display==="none"&&(A=S.style.display,S.style.display="block",x=ws(S),A?S.style.display=A:S.style.removeProperty("display")),M=th(w[0],x[i.d]),b=th(w[1]||"0",n),t=x[i.p]-c[i.p]-h+M+r-b,a&&eh(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var v=t+n,T=o._isStart;g="scroll"+i.d2,eh(o,v,i,T&&v>20||!T&&(d?Math.max(Me[g],pi[g]):o.parentNode[g])<=v+1),d&&(c=ws(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+un))}return f&&S&&(g=ws(S),f.seek(u),m=ws(S),f._caScrollDist=g[i.p]-m[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},Ky=/(webkit|moz|length|cssText|inset)/i,e0=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===Me){t._stOrig=r.cssText,a=Ci(t);for(o in a)!+o&&!Ky.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Ot.core.getCache(t).uncache=1,e.appendChild(t)}},M0=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Qc=function(t,e,n){var i={};i[e.p]="+="+n,Ot.set(t,i)},n0=function(t,e){var n=bs(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||n();var _=M0(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){ue.cache++,o.tween&&Es()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Ot.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},xn(t,"wheel",n.wheelHandler),se.isTouch&&xn(t,"touchmove",n.wheelHandler),r},se=(function(){function s(e,n){Ao||s.register(Ot)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ld(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ha){this.update=this.refresh=this.kill=ts;return}n=Jg(di(n)||Wa(n)||n.nodeType?{trigger:n}:n,Jc);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,u=r.trigger,f=r.pin,p=r.pinSpacing,_=r.invalidateOnRefresh,g=r.anticipatePin,m=r.onScrubComplete,S=r.onSnapComplete,w=r.once,x=r.snap,M=r.pinReparent,b=r.pinSpacer,A=r.containerAnimation,v=r.fastScrollEnd,T=r.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Dn:sn,N=!d&&d!==0,L=qn(n.scroller||pe),V=Ot.core.getCache(L),D=zr(L),F=("pinType"in n?n.pinType:Ts(L,"pinType")||D&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=N&&n.toggleActions.split(" "),K="markers"in n?n.markers:Jc.markers,W=D?0:parseFloat(Ci(L)["border"+C.p2+Io])||0,P=this,$=n.onRefreshInit&&function(){return n.onRefreshInit(P)},wt=Vy(L,D,C),Et=Hy(L,D),Xt=0,Gt=0,$t=0,J=bs(L,C),tt,dt,Ht,xt,It,Nt,Q,st,ot,U,ft,Ft,Pt,Ct,gt,I,Kt,Lt,R,y,H,X,j,mt,ht,et,it,yt,Bt,St,vt,pt,Yt,jt,B,_t,nt,Mt,Tt;if(P._startClamp=P._endClamp=!1,P._dir=C,g*=45,P.scroller=L,P.scroll=A?A.time.bind(A):J,xt=J(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(o0=1,n.refreshPriority===-9999&&(Qa=P)),V.tweenScroll=V.tweenScroll||{top:n0(L,sn),left:n0(L,Dn)},P.tweenTo=tt=V.tweenScroll[C.p],P.scrubDuration=function(ct){Yt=Wa(ct)&&ct,Yt?pt?pt.duration(ct):pt=Ot.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Yt,paused:!0,onComplete:function(){return m&&m(P)}}):(pt&&pt.progress(1).kill(),pt=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),St=0,l||(l=i.vars.id)),x&&((!Nr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Me.style&&Ot.set(D?[Me,pi]:L,{scrollBehavior:"auto"}),ue.forEach(function(ct){return On(ct)&&ct.target===(D?Te.scrollingElement||pi:L)&&(ct.smooth=!1)}),Ht=On(x.snapTo)?x.snapTo:x.snapTo==="labels"?Wy(i):x.snapTo==="labelsDirectional"?Xy(i):x.directional!==!1?function(ct,Qt){return Gd(x.snapTo)(ct,Un()-Gt<500?0:Qt.direction)}:Ot.utils.snap(x.snapTo),jt=x.duration||{min:.1,max:2},jt=Nr(jt)?Ya(jt.min,jt.max):Ya(jt,jt),B=Ot.delayedCall(x.delay||Yt/2||.1,function(){var ct=J(),Qt=Un()-Gt<500,zt=tt.tween;if((Qt||Math.abs(P.getVelocity())<10)&&!zt&&!lh&&Xt!==ct){var ne=(ct-Nt)/Ct,tn=i&&!N?i.totalProgress():ne,de=Qt?0:(tn-vt)/(Un()-Va)*1e3||0,De=Ot.utils.clamp(-ne,1-ne,wo(de/2)*de/.185),mn=ne+(x.inertia===!1?0:De),Ne,Ae,_e=x,kn=_e.onStart,Ie=_e.onInterrupt,Cn=_e.onComplete;if(Ne=Ht(mn,P),Wa(Ne)||(Ne=mn),Ae=Math.max(0,Math.round(Nt+Ne*Ct)),ct<=Q&&ct>=Nt&&Ae!==ct){if(zt&&!zt._initted&&zt.data<=wo(Ae-ct))return;x.inertia===!1&&(De=Ne-ne),tt(Ae,{duration:jt(wo(Math.max(wo(mn-tn),wo(Ne-tn))*.185/de/.05||0)),ease:x.ease||"power3",data:wo(Ae-ct),onInterrupt:function(){return B.restart(!0)&&Ie&&To(P,Ie)},onComplete:function(){P.update(),Xt=J(),i&&!N&&(pt?pt.resetTo("totalProgress",Ne,i._tTime/i._tDur):i.progress(Ne)),St=vt=i&&!N?i.totalProgress():P.progress,S&&S(P),Cn&&To(P,Cn)}},ct,De*Ct,Ae-ct-De*Ct),kn&&To(P,kn,tt.tween)}}else P.isActive&&Xt!==ct&&B.restart(!0)}).pause()),l&&(Nd[l]=P),u=P.trigger=qn(u||f!==!0&&f),Tt=u&&u._gsap&&u._gsap.stRevert,Tt&&(Tt=Tt(P)),f=f===!0?u:qn(f),di(a)&&(a={targets:u,className:a}),f&&(p===!1||p===Ai||(p=!p&&f.parentNode&&f.parentNode.style&&Ci(f.parentNode).display==="flex"?!1:rn),P.pin=f,dt=Ot.core.getCache(f),dt.spacer?gt=dt.pinState:(b&&(b=qn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),dt.spacerIsNative=!!b,b&&(dt.spacerState=Kc(b))),dt.spacer=Lt=b||Te.createElement("div"),Lt.classList.add("pin-spacer"),l&&Lt.classList.add("pin-spacer-"+l),dt.pinState=gt=Kc(f)),n.force3D!==!1&&Ot.set(f,{force3D:!0}),P.spacer=Lt=dt.spacer,Bt=Ci(f),mt=Bt[p+C.os2],y=Ot.getProperty(f),H=Ot.quickSetter(f,C.a,un),Cd(f,Lt,Bt),Kt=Kc(f)),K){Ft=Nr(K)?Jg(K,$g):$g,U=$c("scroller-start",l,L,C,Ft,0),ft=$c("scroller-end",l,L,C,Ft,0,U),R=U["offset"+C.op.d2];var rt=qn(Ts(L,"content")||L);st=this.markerStart=$c("start",l,rt,C,Ft,R,0,A),ot=this.markerEnd=$c("end",l,rt,C,Ft,R,0,A),A&&(Mt=Ot.quickSetter([st,ot],C.a,un)),!F&&!(Bi.length&&Ts(L,"fixedMarkers")===!0)&&(Gy(D?Me:L),Ot.set([U,ft],{force3D:!0}),et=Ot.quickSetter(U,C.a,un),yt=Ot.quickSetter(ft,C.a,un))}if(A){var ut=A.vars.onUpdate,at=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){P.update(0,0,1),ut&&ut.apply(A,at||[])})}if(P.previous=function(){return fe[fe.indexOf(P)-1]},P.next=function(){return fe[fe.indexOf(P)+1]},P.revert=function(ct,Qt){if(!Qt)return P.kill(!0);var zt=ct!==!1||!P.enabled,ne=Nn;zt!==P.isReverted&&(zt&&(_t=Math.max(J(),P.scroll.rec||0),$t=P.progress,nt=i&&i.progress()),st&&[st,ot,U,ft].forEach(function(tn){return tn.style.display=zt?"none":"block"}),zt&&(Nn=P,P.update(zt)),f&&(!M||!P.isActive)&&(zt?Zy(f,Lt,gt):Cd(f,Lt,Ci(f),ht)),zt||P.update(zt),Nn=ne,P.isReverted=zt)},P.refresh=function(ct,Qt,zt,ne){if(!((Nn||!P.enabled)&&!Qt)){if(f&&ct&&Ri){xn(s,"scrollEnd",_0);return}!$n&&$&&$(P),Nn=P,tt.tween&&!zt&&(tt.tween.kill(),tt.tween=0),pt&&pt.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(bt){return bt.vars.immediateRender&&bt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var tn=wt(),de=Et(),De=A?A.duration():es(L,C),mn=Ct<=.01||!Ct,Ne=0,Ae=ne||0,_e=Nr(zt)?zt.end:n.end,kn=n.endTrigger||u,Ie=Nr(zt)?zt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),Cn=P.pinnedContainer=n.pinnedContainer&&qn(n.pinnedContainer,P),Vn=u&&Math.max(0,fe.indexOf(P))||0,en=Vn,Xe,cn,Zi,oo,gn,$e,Mi,ao,E,z,Z,Y,q;for(K&&Nr(zt)&&(Y=Ot.getProperty(U,C.p),q=Ot.getProperty(ft,C.p));en-- >0;)$e=fe[en],$e.end||$e.refresh(0,1)||(Nn=P),Mi=$e.pin,Mi&&(Mi===u||Mi===f||Mi===Cn)&&!$e.isReverted&&(z||(z=[]),z.unshift($e),$e.revert(!0,!0)),$e!==fe[en]&&(Vn--,en--);for(On(Ie)&&(Ie=Ie(P)),Ie=Xg(Ie,"start",P),Nt=t0(Ie,u,tn,C,J(),st,U,P,de,W,F,De,A,P._startClamp&&"_startClamp")||(f?-.001:0),On(_e)&&(_e=_e(P)),di(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(di(Ie)?Ie.split(" ")[0]:"")+_e:(Ne=th(_e.substr(2),tn),_e=di(Ie)?Ie:(A?Ot.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Nt):Nt)+Ne,kn=u)),_e=Xg(_e,"end",P),Q=Math.max(Nt,t0(_e||(kn?"100% 0":De),kn,tn,C,J()+Ne,ot,ft,P,de,W,F,De,A,P._endClamp&&"_endClamp"))||-.001,Ne=0,en=Vn;en--;)$e=fe[en]||{},Mi=$e.pin,Mi&&$e.start-$e._pinPush<=Nt&&!A&&$e.end>0&&(Xe=$e.end-(P._startClamp?Math.max(0,$e.start):$e.start),(Mi===u&&$e.start-$e._pinPush<Nt||Mi===Cn)&&isNaN(Ie)&&(Ne+=Xe*(1-$e.progress)),Mi===f&&(Ae+=Xe));if(Nt+=Ne,Q+=Ne,P._startClamp&&(P._startClamp+=Ne),P._endClamp&&!$n&&(P._endClamp=Q||-.001,Q=Math.min(Q,es(L,C))),Ct=Q-Nt||(Nt-=.01)&&.001,mn&&($t=Ot.utils.clamp(0,1,Ot.utils.normalize(Nt,Q,_t))),P._pinPush=Ae,st&&Ne&&(Xe={},Xe[C.a]="+="+Ne,Cn&&(Xe[C.p]="-="+J()),Ot.set([st,ot],Xe)),f&&!(Dd&&P.end>=es(L,C)))Xe=Ci(f),oo=C===sn,Zi=J(),X=parseFloat(y(C.a))+Ae,!De&&Q>1&&(Z=(D?Te.scrollingElement||pi:L).style,Z={style:Z,value:Z["overflow"+C.a.toUpperCase()]},D&&Ci(Me)["overflow"+C.a.toUpperCase()]!=="scroll"&&(Z.style["overflow"+C.a.toUpperCase()]="scroll")),Cd(f,Lt,Xe),Kt=Kc(f),cn=ws(f,!0),ao=F&&bs(L,oo?Dn:sn)(),p?(ht=[p+C.os2,Ct+Ae+un],ht.t=Lt,en=p===rn?oh(f,C)+Ct+Ae:0,en&&(ht.push(C.d,en+un),Lt.style.flexBasis!=="auto"&&(Lt.style.flexBasis=en+un)),Po(ht),Cn&&fe.forEach(function(bt){bt.pin===Cn&&bt.vars.pinSpacing!==!1&&(bt._subPinOffset=!0)}),F&&J(_t)):(en=oh(f,C),en&&Lt.style.flexBasis!=="auto"&&(Lt.style.flexBasis=en+un)),F&&(gn={top:cn.top+(oo?Zi-Nt:ao)+un,left:cn.left+(oo?ao:Zi-Nt)+un,boxSizing:"border-box",position:"fixed"},gn[Or]=gn["max"+Io]=Math.ceil(cn.width)+un,gn[Fr]=gn["max"+Hd]=Math.ceil(cn.height)+un,gn[Ai]=gn[Ai+$a]=gn[Ai+Za]=gn[Ai+Ka]=gn[Ai+Ja]="0",gn[rn]=Xe[rn],gn[rn+$a]=Xe[rn+$a],gn[rn+Za]=Xe[rn+Za],gn[rn+Ka]=Xe[rn+Ka],gn[rn+Ja]=Xe[rn+Ja],I=$y(gt,gn,M),$n&&J(0)),i?(E=i._initted,Td(1),i.render(i.duration(),!0,!0),j=y(C.a)-X+Ct+Ae,it=Math.abs(Ct-j)>1,F&&it&&I.splice(I.length-2,2),i.render(0,!0,!0),E||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Td(0)):j=Ct,Z&&(Z.value?Z.style["overflow"+C.a.toUpperCase()]=Z.value:Z.style.removeProperty("overflow-"+C.a));else if(u&&J()&&!A)for(cn=u.parentNode;cn&&cn!==Me;)cn._pinOffset&&(Nt-=cn._pinOffset,Q-=cn._pinOffset),cn=cn.parentNode;z&&z.forEach(function(bt){return bt.revert(!1,!0)}),P.start=Nt,P.end=Q,xt=It=$n?_t:J(),!A&&!$n&&(xt<_t&&J(_t),P.scroll.rec=0),P.revert(!1,!0),Gt=Un(),B&&(Xt=-1,B.restart(!0)),Nn=0,i&&N&&(i._initted||nt)&&i.progress()!==nt&&i.progress(nt||0,!0).render(i.time(),!0,!0),(mn||$t!==P.progress||A||_||i&&!i._initted)&&(i&&!N&&(i._initted||$t||i.vars.immediateRender!==!1)&&i.totalProgress(A&&Nt<-.001&&!$t?Ot.utils.normalize(Nt,Q,0):$t,!0),P.progress=mn||(xt-Nt)/Ct===$t?0:$t),f&&p&&(Lt._pinOffset=Math.round(P.progress*j)),pt&&pt.invalidate(),isNaN(Y)||(Y-=Ot.getProperty(U,C.p),q-=Ot.getProperty(ft,C.p),Qc(U,C,Y),Qc(st,C,Y-(ne||0)),Qc(ft,C,q),Qc(ot,C,q-(ne||0))),mn&&!$n&&P.update(),h&&!$n&&!Pt&&(Pt=!0,h(P),Pt=!1)}},P.getVelocity=function(){return(J()-It)/(Un()-Va)*1e3||0},P.endAnimation=function(){ka(P.callbackAnimation),i&&(pt?pt.progress(1):i.paused()?N||ka(i,P.direction<0,1):ka(i,i.reversed()))},P.labelToScroll=function(ct){return i&&i.labels&&(Nt||P.refresh()||Nt)+i.labels[ct]/i.duration()*Ct||0},P.getTrailing=function(ct){var Qt=fe.indexOf(P),zt=P.direction>0?fe.slice(0,Qt).reverse():fe.slice(Qt+1);return(di(ct)?zt.filter(function(ne){return ne.vars.preventOverlaps===ct}):zt).filter(function(ne){return P.direction>0?ne.end<=Nt:ne.start>=Q})},P.update=function(ct,Qt,zt){if(!(A&&!zt&&!ct)){var ne=$n===!0?_t:P.scroll(),tn=ct?0:(ne-Nt)/Ct,de=tn<0?0:tn>1?1:tn||0,De=P.progress,mn,Ne,Ae,_e,kn,Ie,Cn,Vn;if(Qt&&(It=xt,xt=A?J():ne,x&&(vt=St,St=i&&!N?i.totalProgress():de)),g&&f&&!Nn&&!Xc&&Ri&&(!de&&Nt<ne+(ne-It)/(Un()-Va)*g?de=1e-4:de===1&&Q>ne+(ne-It)/(Un()-Va)*g&&(de=.9999)),de!==De&&P.enabled){if(mn=P.isActive=!!de&&de<1,Ne=!!De&&De<1,Ie=mn!==Ne,kn=Ie||!!de!=!!De,P.direction=de>De?1:-1,P.progress=de,kn&&!Nn&&(Ae=de&&!De?0:de===1?1:De===1?2:3,N&&(_e=!Ie&&k[Ae+1]!=="none"&&k[Ae+1]||k[Ae],Vn=i&&(_e==="complete"||_e==="reset"||_e in i))),T&&(Ie||Vn)&&(Vn||d||!i)&&(On(T)?T(P):P.getTrailing(T).forEach(function(Zi){return Zi.endAnimation()})),N||(pt&&!Nn&&!Xc?(pt._dp._time-pt._start!==pt._time&&pt.render(pt._dp._time-pt._start),pt.resetTo?pt.resetTo("totalProgress",de,i._tTime/i._tDur):(pt.vars.totalProgress=de,pt.invalidate().restart())):i&&i.totalProgress(de,!!(Nn&&(Gt||ct)))),f){if(ct&&p&&(Lt.style[p+C.os2]=mt),!F)H(Ga(X+j*de));else if(kn){if(Cn=!ct&&de>De&&Q+1>ne&&ne+1>=es(L,C),M)if(!ct&&(mn||Cn)){var en=ws(f,!0),Xe=ne-Nt;e0(f,Me,en.top+(C===sn?Xe:0)+un,en.left+(C===sn?0:Xe)+un)}else e0(f,Lt);Po(mn||Cn?I:Kt),it&&de<1&&mn||H(X+(de===1&&!Cn?j:0))}}x&&!tt.tween&&!Nn&&!Xc&&B.restart(!0),a&&(Ie||w&&de&&(de<1||!wd))&&ja(a.targets).forEach(function(Zi){return Zi.classList[mn||w?"add":"remove"](a.className)}),o&&!N&&!ct&&o(P),kn&&!Nn?(N&&(Vn&&(_e==="complete"?i.pause().totalProgress(1):_e==="reset"?i.restart(!0).pause():_e==="restart"?i.restart(!0):i[_e]()),o&&o(P)),(Ie||!wd)&&(c&&Ie&&To(P,c),G[Ae]&&To(P,G[Ae]),w&&(de===1?P.kill(!1,1):G[Ae]=0),Ie||(Ae=de===1?1:3,G[Ae]&&To(P,G[Ae]))),v&&!mn&&Math.abs(P.getVelocity())>(Wa(v)?v:2500)&&(ka(P.callbackAnimation),pt?pt.progress(1):ka(i,_e==="reverse"?1:!de,1))):N&&o&&!Nn&&o(P)}if(yt){var cn=A?ne/A.duration()*(A._caScrollDist||0):ne;et(cn+(U._isFlipped?1:0)),yt(cn)}Mt&&Mt(-ne/A.duration()*(A._caScrollDist||0))}},P.enable=function(ct,Qt){P.enabled||(P.enabled=!0,xn(L,"resize",Xa),D||xn(L,"scroll",Eo),$&&xn(s,"refreshInit",$),ct!==!1&&(P.progress=$t=0,xt=It=Xt=J()),Qt!==!1&&P.refresh())},P.getTween=function(ct){return ct&&tt?tt.tween:pt},P.setPositions=function(ct,Qt,zt,ne){if(A){var tn=A.scrollTrigger,de=A.duration(),De=tn.end-tn.start;ct=tn.start+De*ct/de,Qt=tn.start+De*Qt/de}P.refresh(!1,!1,{start:Yg(ct,zt&&!!P._startClamp),end:Yg(Qt,zt&&!!P._endClamp)},ne),P.update()},P.adjustPinSpacing=function(ct){if(ht&&ct){var Qt=ht.indexOf(C.d)+1;ht[Qt]=parseFloat(ht[Qt])+ct+un,ht[1]=parseFloat(ht[1])+ct+un,Po(ht)}},P.disable=function(ct,Qt){if(ct!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Qt||pt&&pt.pause(),_t=0,dt&&(dt.uncache=1),$&&_n(s,"refreshInit",$),B&&(B.pause(),tt.tween&&tt.tween.kill()&&(tt.tween=0)),!D)){for(var zt=fe.length;zt--;)if(fe[zt].scroller===L&&fe[zt]!==P)return;_n(L,"resize",Xa),D||_n(L,"scroll",Eo)}},P.kill=function(ct,Qt){P.disable(ct,Qt),pt&&!Qt&&pt.kill(),l&&delete Nd[l];var zt=fe.indexOf(P);zt>=0&&fe.splice(zt,1),zt===Jn&&nh>0&&Jn--,zt=0,fe.forEach(function(ne){return ne.scroller===P.scroller&&(zt=1)}),zt||$n||(P.scroll.rec=0),i&&(i.scrollTrigger=null,ct&&i.revert({kill:!1}),Qt||i.kill()),st&&[st,ot,U,ft].forEach(function(ne){return ne.parentNode&&ne.parentNode.removeChild(ne)}),Qa===P&&(Qa=0),f&&(dt&&(dt.uncache=1),zt=0,fe.forEach(function(ne){return ne.pin===f&&zt++}),zt||(dt.spacer=0)),n.onKill&&n.onKill(P)},fe.push(P),P.enable(!1,!1),Tt&&Tt(P),i&&i.add&&!Ct){var Jt=P.update;P.update=function(){P.update=Jt,ue.cache++,Nt||Q||P.refresh()},Ot.delayedCall(.01,P.update),Ct=.01,Nt=Q=0}else P.refresh();f&&qy()},s.register=function(n){return Ao||(Ot=n||u0(),h0()&&window.document&&s.enable(),Ao=Ha),Ao},s.defaults=function(n){if(n)for(var i in n)Jc[i]=n[i];return Jc},s.disable=function(n,i){Ha=0,fe.forEach(function(o){return o[i?"kill":"disable"](n)}),_n(pe,"wheel",Eo),_n(Te,"scroll",Eo),clearInterval(Wc),_n(Te,"touchcancel",ts),_n(Me,"touchstart",ts),qc(_n,Te,"pointerdown,touchstart,mousedown",qg),qc(_n,Te,"pointerup,touchend,mouseup",Zg),rh.kill(),Yc(_n);for(var r=0;r<ue.length;r+=3)Zc(_n,ue[r],ue[r+1]),Zc(_n,ue[r],ue[r+2])},s.enable=function(){if(pe=window,Te=document,pi=Te.documentElement,Me=Te.body,Ot){if(ja=Ot.utils.toArray,Ya=Ot.utils.clamp,Ld=Ot.core.context||ts,Td=Ot.core.suppressOverwrites||ts,Bd=pe.history.scrollRestoration||"auto",Ud=pe.pageYOffset||0,Ot.core.globals("ScrollTrigger",s),Me){Ha=1,Ro=document.createElement("div"),Ro.style.height="100vh",Ro.style.position="absolute",S0(),ky(),Ze.register(Ot),s.isTouch=Ze.isTouch,js=Ze.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Id=Ze.isTouch===1,xn(pe,"wheel",Eo),Fd=[pe,Te,pi,Me],Ot.matchMedia?(s.matchMedia=function(h){var d=Ot.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Ot.addEventListener("matchMediaInit",function(){v0(),Wd()}),Ot.addEventListener("matchMediaRevert",function(){return x0()}),Ot.addEventListener("matchMedia",function(){Ur(0,1),Vr("matchMedia")}),Ot.matchMedia().add("(orientation: portrait)",function(){return Ad(),Ad})):console.warn("Requires GSAP 3.11.0 or later"),Ad(),xn(Te,"scroll",Eo);var n=Me.hasAttribute("style"),i=Me.style,r=i.borderTopStyle,o=Ot.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ws(Me),sn.m=Math.round(a.top+sn.sc())||0,Dn.m=Math.round(a.left+Dn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Me.setAttribute("style",""),Me.removeAttribute("style")),Wc=setInterval(Kg,250),Ot.delayedCall(.5,function(){return Xc=0}),xn(Te,"touchcancel",ts),xn(Me,"touchstart",ts),qc(xn,Te,"pointerdown,touchstart,mousedown",qg),qc(xn,Te,"pointerup,touchend,mouseup",Zg),Pd=Ot.utils.checkPrefix("transform"),ih.push(Pd),Ao=Un(),rh=Ot.delayedCall(.2,Ur).pause(),Co=[Te,"visibilitychange",function(){var h=pe.innerWidth,d=pe.innerHeight;Te.hidden?(Gg=h,Wg=d):(Gg!==h||Wg!==d)&&Xa()},Te,"DOMContentLoaded",Ur,pe,"load",Ur,pe,"resize",Xa],Yc(xn),fe.forEach(function(h){return h.enable(0,1)}),l=0;l<ue.length;l+=3)Zc(_n,ue[l],ue[l+1]),Zc(_n,ue[l],ue[l+2])}else if(Te){var c=function h(){s.enable(),Te.removeEventListener("DOMContentLoaded",h)};Te.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(wd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Wc)||(Wc=i)&&setInterval(Kg,i),"ignoreMobileResize"in n&&(Id=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Yc(_n)||Yc(xn,n.autoRefreshEvents||"none"),a0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=qn(n),o=ue.indexOf(r),a=zr(r);~o&&ue.splice(o,a?6:2),i&&(a?Bi.unshift(pe,i,Me,i,pi,i):Bi.unshift(r,i))},s.clearMatchMedia=function(n){fe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(di(n)?qn(n):n).getBoundingClientRect(),a=o[r?Or:Fr]*i||0;return r?o.right-a>0&&o.left+a<pe.innerWidth:o.bottom-a>0&&o.top+a<pe.innerHeight},s.positionInViewport=function(n,i,r){di(n)&&(n=qn(n));var o=n.getBoundingClientRect(),a=o[r?Or:Fr],l=i==null?a/2:i in ah?ah[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/pe.innerWidth:(o.top+l)/pe.innerHeight},s.killAll=function(n){if(fe.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=kr.killAll||[];kr={},i.forEach(function(r){return r()})}},s})();se.version="3.15.0";se.saveStyles=function(s){return s?ja(s).forEach(function(t){if(t&&t.style){var e=fi.indexOf(t);e>=0&&fi.splice(e,5),fi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ot.core.getCache(t),Ld())}}):fi};se.revert=function(s,t){return Wd(!s,t)};se.create=function(s,t){return new se(s,t)};se.refresh=function(s){return s?Xa(!0):(Ao||se.register())&&Ur(!0)};se.update=function(s){return++ue.cache&&Es(s===!0?2:0)};se.clearScrollMemory=y0;se.maxScroll=function(s,t){return es(s,t?Dn:sn)};se.getScrollFunc=function(s,t){return bs(qn(s),t?Dn:sn)};se.getById=function(s){return Nd[s]};se.getAll=function(){return fe.filter(function(s){return s.vars.id!=="ScrollSmoother"})};se.isScrolling=function(){return!!Ri};se.snapDirectional=Gd;se.addEventListener=function(s,t){var e=kr[s]||(kr[s]=[]);~e.indexOf(t)||e.push(t)};se.removeEventListener=function(s,t){var e=kr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};se.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Ot.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),r<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&On(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return On(r)&&(r=r(),xn(se,"refresh",function(){return r=t.batchMax()})),ja(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(se.create(c))}),e};var i0=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Rd=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ze.isTouch?" pinch-zoom":""):"none",t===pi&&s(Me,e)},jc={auto:1,scroll:1},Qy=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Ot.core.getCache(r),a=Un(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Me&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(jc[(l=Ci(r)).overflowY]||jc[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!zr(r)&&(jc[(l=Ci(r)).overflowY]||jc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},b0=function(t,e,n,i){return Ze.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Qy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&xn(Te,Ze.eventTypes[0],r0,!1,!0)},onDisable:function(){return _n(Te,Ze.eventTypes[0],r0,!0)}})},jy=/(input|label|select|textarea)/i,s0,r0=function(t){var e=jy.test(t.target.tagName);(e||s0)&&(t._gsapAllow=!0,s0=e)},tS=function(t){Nr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=qn(t.target)||pi,h=Ot.core.globals().ScrollSmoother,d=h&&h.get(),u=js&&(t.content&&qn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=bs(c,sn),p=bs(c,Dn),_=1,g=(Ze.isTouch&&pe.visualViewport?pe.visualViewport.scale*pe.visualViewport.width:pe.outerWidth)/pe.innerWidth,m=0,S=On(i)?function(){return i(a)}:function(){return i||2.8},w,x,M=b0(c,t.type,!0,r),b=function(){return x=!1},A=ts,v=ts,T=function(){l=es(c,sn),v=Ya(js?1:0,l),n&&(A=Ya(0,es(c,Dn))),w=Br},C=function(){u._gsap.y=Ga(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(x){requestAnimationFrame(b);var K=Ga(a.deltaY/2),W=v(f.v-K);if(u&&W!==f.v+f.offset){f.offset=W-f.v;var P=Ga((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",u._gsap.y=P+"px",f.cacheID=ue.cache,Es()}return!0}f.offset&&C(),x=!0},L,V,D,F,G=function(){T(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return u&&Ot.set(u,{y:"+=0"}),t.ignoreCheck=function(k){return js&&k.type==="touchmove"&&N(k)||_>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},t.onPress=function(){x=!1;var k=_;_=Ga((pe.visualViewport&&pe.visualViewport.scale||1)/g),L.pause(),k!==_&&Rd(c,_>1.01?!0:n?!1:"x"),V=p(),D=f(),T(),w=Br},t.onRelease=t.onGestureStart=function(k,K){if(f.offset&&C(),!K)F.restart(!0);else{ue.cache++;var W=S(),P,$;n&&(P=p(),$=P+W*.05*-k.velocityX/.227,W*=i0(p,P,$,es(c,Dn)),L.vars.scrollX=A($)),P=f(),$=P+W*.05*-k.velocityY/.227,W*=i0(f,P,$,es(c,sn)),L.vars.scrollY=v($),L.invalidate().duration(W).play(.01),(js&&L.vars.scrollY>=l||P>=l-1)&&Ot.to({},{onUpdate:G,duration:W})}o&&o(k)},t.onWheel=function(){L._ts&&L.pause(),Un()-m>1e3&&(w=0,m=Un())},t.onChange=function(k,K,W,P,$){if(Br!==w&&T(),K&&n&&p(A(P[2]===K?V+(k.startX-k.x):p()+K-P[1])),W){f.offset&&C();var wt=$[2]===W,Et=wt?D+k.startY-k.y:f()+W-$[1],Xt=v(Et);wt&&Et!==Xt&&(D+=Xt-Et),f(Xt)}(W||K)&&Es()},t.onEnable=function(){Rd(c,n?!1:"x"),se.addEventListener("refresh",G),xn(pe,"resize",G),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),M.enable()},t.onDisable=function(){Rd(c,!0),_n(pe,"resize",G),se.removeEventListener("refresh",G),M.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ze(t),a.iOS=js,js&&!f()&&f(1),js&&Ot.ticker.add(ts),F=a._dc,L=Ot.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:M0(f,f(),function(){return L.pause()})},onUpdate:Es,onComplete:F.vars.onComplete}),a};se.sort=function(s){if(On(s))return fe.sort(s);var t=pe.pageYOffset||0;return se.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+pe.innerHeight}),fe.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};se.observe=function(s){return new Ze(s)};se.normalizeScroll=function(s){if(typeof s=="undefined")return Zn;if(s===!0&&Zn)return Zn.enable();if(s===!1){Zn&&Zn.kill(),Zn=s;return}var t=s instanceof Ze?s:tS(s);return Zn&&Zn.target===t.target&&Zn.kill(),zr(t.target)&&(Zn=t),t};se.core={_getVelocityProp:Gc,_inputObserver:b0,_scrollers:ue,_proxies:Bi,bridge:{ss:function(){Ri||Vr("scrollStart"),Ri=Un()},ref:function(){return Nn}}};u0()&&Ot.registerPlugin(se);var T0="1.3.26";function A0(s,t,e){return Math.max(s,Math.min(t,e))}function eS(s,t,e){return(1-e)*s+e*t}function nS(s,t,e,n){return eS(s,t,1-Math.exp(-e*n))}function iS(s,t){return(s%t+t)%t}var sS=class{constructor(){Wt(this,"isRunning",!1);Wt(this,"value",0);Wt(this,"from",0);Wt(this,"to",0);Wt(this,"currentTime",0);Wt(this,"lerp");Wt(this,"duration");Wt(this,"easing");Wt(this,"onUpdate")}advance(s){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let n=A0(0,this.currentTime/this.duration,1);t=n>=1;let i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=nS(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=o}};function rS(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var oS=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Wt(this,"width",0);Wt(this,"height",0);Wt(this,"scrollHeight",0);Wt(this,"scrollWidth",0);Wt(this,"debouncedResize");Wt(this,"wrapperResizeObserver");Wt(this,"contentResizeObserver");Wt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Wt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Wt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=rS(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,t;(s=this.wrapperResizeObserver)==null||s.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},C0=class{constructor(){Wt(this,"events",{})}emit(s,...t){var n;let e=this.events[s]||[];for(let i=0,r=e.length;i<r;i++)(n=e[i])==null||n.call(e,...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}}off(s,t){var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},aS=100/6,tr={passive:!1};function w0(s,t){return s===1?aS:s===2?t:1}var lS=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Wt(this,"touchStart",{x:0,y:0});Wt(this,"lastDelta",{x:0,y:0});Wt(this,"window",{width:0,height:0});Wt(this,"emitter",new C0);Wt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Wt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Wt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Wt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=w0(n,this.window.width),r=w0(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Wt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,tr),this.element.addEventListener("touchstart",this.onTouchStart,tr),this.element.addEventListener("touchmove",this.onTouchMove,tr),this.element.addEventListener("touchend",this.onTouchEnd,tr)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,tr),this.element.removeEventListener("touchstart",this.onTouchStart,tr),this.element.removeEventListener("touchmove",this.onTouchMove,tr),this.element.removeEventListener("touchend",this.onTouchEnd,tr)}},E0=s=>Math.min(1,1.001-2**(-10*s)),R0=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:g,virtualScroll:m,overscroll:S=!0,autoRaf:w=!1,anchors:x=!1,autoToggle:M=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:v=A,stopInertiaOnNavigate:T=!1,respectReducedMotion:C=!0}={}){Wt(this,"_isScrolling",!1);Wt(this,"_isStopped",!1);Wt(this,"_isLocked",!1);Wt(this,"_preventNextNativeScrollEvent",!1);Wt(this,"_resetVelocityTimeout",null);Wt(this,"_rafId",null);Wt(this,"_isDraggingSelection",!1);Wt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Wt(this,"isTouching");Wt(this,"isIos");Wt(this,"time",0);Wt(this,"userData",{});Wt(this,"lastVelocity",0);Wt(this,"velocity",0);Wt(this,"direction",0);Wt(this,"options");Wt(this,"targetScroll");Wt(this,"animatedScroll");Wt(this,"animate",new sS);Wt(this,"emitter",new C0);Wt(this,"dimensions");Wt(this,"virtualScroll");Wt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Wt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Wt(this,"onTransitionEnd",s=>{var t;(t=s.propertyName)!=null&&t.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Wt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Wt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Wt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>{var _,g,m,S,w;return p instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(p))||((_=p.hasAttribute)==null?void 0:_.call(p,"data-lenis-prevent"))||h==="vertical"&&((g=p.hasAttribute)==null?void 0:g.call(p,"data-lenis-prevent-vertical"))||h==="horizontal"&&((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent-horizontal"))||i&&((S=p.hasAttribute)==null?void 0:S.call(p,"data-lenis-prevent-touch"))||r&&((w=p.hasAttribute)==null?void 0:w.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Wt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Wt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=T0,window.lenis||(window.lenis={}),window.lenis.version=T0,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=E0:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:_,prevent:g,virtualScroll:m,overscroll:S,autoRaf:w,anchors:x,autoToggle:M,allowNestedScroll:b,naiveDimensions:v,stopInertiaOnNavigate:T,respectReducedMotion:C},this.dimensions=new oS(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new lS(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){var c;let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=(c=s.targetTouches[0])!=null?c:s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=s,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&(u!=null&&u.nodeType)&&(p=u),p){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?x.left:x.top}let _=p.getBoundingClientRect(),g=getComputedStyle(p),m=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),S=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(w)?0:w)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=A0(0,u,this.limit);if(u===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d!=null?d:{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=E0:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){var b;let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,u,f,p;if(n-((b=i.time)!=null?b:0)>2e3){i.time=Date.now();let A=window.getComputedStyle(s);if(i.computedStyle=A,r=["auto","overlay","scroll"].includes(A.overflowX),o=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),h=["auto"].includes(A.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,u=s.scrollHeight,f=s.clientWidth,p=s.clientHeight,a=d>f,l=u>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",g,m,S,w,x,M;if(_==="horizontal")g=Math.round(s.scrollLeft),m=d-f,S=t,w=r,x=a,M=c;else if(_==="vertical")g=Math.round(s.scrollTop),m=u-p,S=e,w=o,x=l,M=h;else return!1;return!M&&(g>=m||g<=0)?!0:(S>0?g<m:g>0)&&w&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){var t,e;let s=this.options.wrapper;return this.isHorizontal?(t=s.scrollX)!=null?t:s.scrollLeft:(e=s.scrollY)!=null?e:s.scrollTop}get scroll(){return this.options.infinite?iS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};var p_=0,Lp=1,m_=2;var Qr=1,g_=2,ua=3,pr=0,fn=1,Ii=2,Li=0,fa=1,fs=2,Dp=3,Np=4,__=5;var jr=100,x_=101,v_=102,y_=103,S_=104,M_=200,b_=201,T_=202,w_=203,Up=204,Op=205,E_=206,A_=207,C_=208,R_=209,P_=210,I_=211,L_=212,D_=213,N_=214,kh=0,Vh=1,Hh=2,Jo=3,Gh=4,Wh=5,Xh=6,Yh=7,Tu=0,U_=1,O_=2,Xi=0,Zl=1,Jl=2,$l=3,Os=4,Kl=5,Ql=6,jl=7;var Fp=300,mr=301,to=302,wu=303,Eu=304,tc=306,qh=1e3,is=1001,Zh=1002,Sn=1003,F_=1004;var ec=1005;var En=1006,Au=1007;var gr=1008;var oi=1009,Bp=1010,zp=1011,da=1012,Cu=1013,Yi=1014,Di=1015,An=1016,Ru=1017,Pu=1018,pa=1020,kp=35902,Vp=35899,Hp=1021,Gp=1022,Ni=1023,rs=1026,_r=1027,Iu=1028,Lu=1029,xr=1030,Du=1031;var Nu=1033,nc=33776,ic=33777,sc=33778,rc=33779,Uu=35840,Ou=35841,Fu=35842,Bu=35843,zu=36196,ku=37492,Vu=37496,Hu=37488,Gu=37489,oc=37490,Wu=37491,Xu=37808,Yu=37809,qu=37810,Zu=37811,Ju=37812,$u=37813,Ku=37814,Qu=37815,ju=37816,tf=37817,ef=37818,nf=37819,sf=37820,rf=37821,of=36492,af=36494,lf=36495,cf=36283,hf=36284,ac=36285,uf=36286;var fl=2300,Jh=2301,Bh=2302,_p=2303,xp=2400,vp=2401,yp=2402;var B_=3200;var lc=0,z_=1,Fs="",yn="srgb",dl="srgb-linear",pl="linear",ye="srgb";var zh=7680;var k_=519,V_=512,H_=513,G_=514,ff=515,W_=516,X_=517,df=518,Y_=519,q_=35044;var Wp="300 es",Gi=2e3,$o=2001;function cS(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function hS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ml(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Z_(){let s=ml("canvas");return s.style.display="block",s}var P0={},Ko=null;function Xp(...s){let t="THREE."+s.shift();Ko?Ko("log",t,...s):console.log(t,...s)}function J_(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function te(...s){s=J_(s);let t="THREE."+s.shift();if(Ko)Ko("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ee(...s){s=J_(s);let t="THREE."+s.shift();if(Ko)Ko("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Yr(...s){let t=s.join(" ");t in P0||(P0[t]=!0,te(...s))}function $_(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var K_={[kh]:Vh,[Hh]:Xh,[Gh]:Yh,[Jo]:Wh,[Vh]:kh,[Xh]:Hh,[Yh]:Gh,[Wh]:Jo},os=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],I0=1234567,qo=Math.PI/180,qr=180/Math.PI;function eo(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[e&63|128]+Fn[e>>8&255]+"-"+Fn[e>>16&255]+Fn[e>>24&255]+Fn[n&255]+Fn[n>>8&255]+Fn[n>>16&255]+Fn[n>>24&255]).toLowerCase()}function le(s,t,e){return Math.max(t,Math.min(e,s))}function Yp(s,t){return(s%t+t)%t}function uS(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function fS(s,t,e){return s!==t?(e-s)/(t-s):0}function cl(s,t,e){return(1-e)*s+e*t}function dS(s,t,e,n){return cl(s,t,1-Math.exp(-e*n))}function pS(s,t=1){return t-Math.abs(Yp(s,t*2)-t)}function mS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function gS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function _S(s,t){return s+Math.floor(Math.random()*(t-s+1))}function xS(s,t){return s+Math.random()*(t-s)}function vS(s){return s*(.5-Math.random())}function yS(s){s!==void 0&&(I0=s);let t=I0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function SS(s){return s*qo}function MS(s){return s*qr}function bS(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function TS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ES(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Yo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var no={DEG2RAD:qo,RAD2DEG:qr,generateUUID:eo,clamp:le,euclideanModulo:Yp,mapLinear:uS,inverseLerp:fS,lerp:cl,damp:dS,pingpong:pS,smoothstep:mS,smootherstep:gS,randInt:_S,randFloat:xS,randFloatSpread:vS,seededRandom:yS,degToRad:SS,radToDeg:MS,isPowerOfTwo:bS,ceilPowerOfTwo:TS,floorPowerOfTwo:wS,setQuaternionFromProperEuler:ES,normalize:Kn,denormalize:Yo},Qp=class Qp{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qp.prototype.isVector2=!0;var lt=Qp,as=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*_;g<0&&(u=-u,f=-f,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let S=Math.acos(g),w=Math.sin(S);m=Math.sin(m*S)/w,a=Math.sin(a*S)/w,l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+_*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+_*a;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jp=class jp{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(L0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(L0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xd.copy(this).projectOnVector(t),this.sub(Xd)}reflect(t){return this.sub(Xd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jp.prototype.isVector3=!0;var O=jp,Xd=new O,L0=new as,tm=class tm{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],S=i[1],w=i[4],x=i[7],M=i[2],b=i[5],A=i[8];return r[0]=o*_+a*S+l*M,r[3]=o*g+a*w+l*b,r[6]=o*m+a*x+l*A,r[1]=c*_+h*S+d*M,r[4]=c*g+h*w+d*b,r[7]=c*m+h*x+d*A,r[2]=u*_+f*S+p*M,r[5]=u*g+f*w+p*b,r[8]=u*m+f*x+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yd.makeScale(t,e)),this}rotate(t){return Yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yd.makeRotation(-t)),this}translate(t,e){return Yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};tm.prototype.isMatrix3=!0;var ie=tm,Yd=new ie,D0=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N0=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AS(){let s={enabled:!0,workingColorSpace:dl,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(i.r=Ds(i.r),i.g=Ds(i.g),i.b=Ds(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(i.r=Zo(i.r),i.g=Zo(i.g),i.b=Zo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fs?pl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[dl]:{primaries:t,whitePoint:n,transfer:pl,toXYZ:D0,fromXYZ:N0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:D0,fromXYZ:N0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),s}var me=AS();function Ds(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Lo,$h=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Lo===void 0&&(Lo=ml("canvas")),Lo.width=t.width,Lo.height=t.height;let i=Lo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Lo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ml("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ds(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ds(e[n]/255)*255):e[n]=Ds(e[n]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},CS=0,Qo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=eo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(qd(i[o].image)):r.push(qd(i[o]))}else r=qd(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function qd(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?$h.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}var RS=0,Zd=new O,Qn=class s extends os{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=is,i=is,r=En,o=gr,a=Ni,l=oi,c=s.DEFAULT_ANISOTROPY,h=Fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=eo(),this.name="",this.source=new Qo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zd).x}get height(){return this.source.getSize(Zd).y}get depth(){return this.source.getSize(Zd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qh:t.x=t.x-Math.floor(t.x);break;case is:t.x=t.x<0?0:1;break;case Zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qh:t.y=t.y-Math.floor(t.y);break;case is:t.y=t.y<0?0:1;break;case Zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Fp;Qn.DEFAULT_ANISOTROPY=1;var em=class em{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,x=(f+1)/2,M=(m+1)/2,b=(h+u)/4,A=(d+_)/4,v=(p+g)/4;return w>x&&w>M?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=b/n,r=A/n):x>M?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=v/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=A/r,i=v/r),this.set(n,i,r,e),this}let S=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};em.prototype.isVector4=!0;var ze=em,Kh=class extends os{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new Qn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Qo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends Kh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},gl=class extends Qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qh=class extends Qn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var bu=class bu{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,g)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bu().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Do.setFromMatrixColumn(t,0).length(),r=1/Do.setFromMatrixColumn(t,1).length(),o=1/Do.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(PS,t,IS)}lookAt(t,e,n){let i=this.elements;return mi.subVectors(t,e),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),er.crossVectors(n,mi),er.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),er.crossVectors(n,mi)),er.normalize(),ch.crossVectors(mi,er),i[0]=er.x,i[4]=ch.x,i[8]=mi.x,i[1]=er.y,i[5]=ch.y,i[9]=mi.y,i[2]=er.z,i[6]=ch.z,i[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],S=n[3],w=n[7],x=n[11],M=n[15],b=i[0],A=i[4],v=i[8],T=i[12],C=i[1],N=i[5],L=i[9],V=i[13],D=i[2],F=i[6],G=i[10],k=i[14],K=i[3],W=i[7],P=i[11],$=i[15];return r[0]=o*b+a*C+l*D+c*K,r[4]=o*A+a*N+l*F+c*W,r[8]=o*v+a*L+l*G+c*P,r[12]=o*T+a*V+l*k+c*$,r[1]=h*b+d*C+u*D+f*K,r[5]=h*A+d*N+u*F+f*W,r[9]=h*v+d*L+u*G+f*P,r[13]=h*T+d*V+u*k+f*$,r[2]=p*b+_*C+g*D+m*K,r[6]=p*A+_*N+g*F+m*W,r[10]=p*v+_*L+g*G+m*P,r[14]=p*T+_*V+g*k+m*$,r[3]=S*b+w*C+x*D+M*K,r[7]=S*A+w*N+x*F+M*W,r[11]=S*v+w*L+x*G+M*P,r[15]=S*T+w*V+x*k+M*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15],S=l*f-c*u,w=a*f-c*d,x=a*u-l*d,M=o*f-c*h,b=o*u-l*h,A=o*d-a*h;return e*(_*S-g*w+m*x)-n*(p*S-g*M+m*b)+i*(p*w-_*M+m*A)-r*(p*x-_*b+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],S=e*a-n*o,w=e*l-i*o,x=e*c-r*o,M=n*l-i*a,b=n*c-r*a,A=i*c-r*l,v=h*_-d*p,T=h*g-u*p,C=h*m-f*p,N=d*g-u*_,L=d*m-f*_,V=u*m-f*g,D=S*V-w*L+x*N+M*C-b*T+A*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/D;return t[0]=(a*V-l*L+c*N)*F,t[1]=(i*L-n*V-r*N)*F,t[2]=(_*A-g*b+m*M)*F,t[3]=(u*b-d*A-f*M)*F,t[4]=(l*C-o*V-c*T)*F,t[5]=(e*V-i*C+r*T)*F,t[6]=(g*x-p*A-m*w)*F,t[7]=(h*A-u*x+f*w)*F,t[8]=(o*L-a*C+c*v)*F,t[9]=(n*C-e*L-r*v)*F,t[10]=(p*b-_*x+m*S)*F,t[11]=(d*x-h*b-f*S)*F,t[12]=(a*T-o*N-l*v)*F,t[13]=(e*N-n*T+i*v)*F,t[14]=(_*w-p*M-g*S)*F,t[15]=(h*M-d*w+u*S)*F,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,_=o*h,g=o*d,m=a*d,S=l*c,w=l*h,x=l*d,M=n.x,b=n.y,A=n.z;return i[0]=(1-(_+m))*M,i[1]=(f+x)*M,i[2]=(p-w)*M,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(u+m))*b,i[6]=(g+S)*b,i[7]=0,i[8]=(p+w)*A,i[9]=(g-S)*A,i[10]=(1-(u+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Do.set(i[0],i[1],i[2]).length(),a=Do.set(i[4],i[5],i[6]).length(),l=Do.set(i[8],i[9],i[10]).length();r<0&&(o=-o),zi.copy(this);let c=1/o,h=1/a,d=1/l;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=h,zi.elements[5]*=h,zi.elements[6]*=h,zi.elements[8]*=d,zi.elements[9]*=d,zi.elements[10]*=d,e.setFromRotationMatrix(zi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Gi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Gi)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===$o)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Gi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Gi)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===$o)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};bu.prototype.isMatrix4=!0;var be=bu,Do=new O,zi=new be,PS=new O(0,0,0),IS=new O(1,1,1),er=new O,ch=new O,mi=new O,U0=new be,O0=new as,ls=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return U0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(U0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return O0.setFromEuler(this),this.setFromQuaternion(O0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ls.DEFAULT_ORDER="XYZ";var jo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},LS=0,F0=new O,No=new as,As=new be,hh=new O,el=new O,DS=new O,NS=new as,B0=new O(1,0,0),z0=new O(0,1,0),k0=new O(0,0,1),V0={type:"added"},US={type:"removed"},Uo={type:"childadded",child:null},Jd={type:"childremoved",child:null},Je=class s extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new O,e=new ls,n=new as,i=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new ie}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return No.setFromAxisAngle(t,e),this.quaternion.multiply(No),this}rotateOnWorldAxis(t,e){return No.setFromAxisAngle(t,e),this.quaternion.premultiply(No),this}rotateX(t){return this.rotateOnAxis(B0,t)}rotateY(t){return this.rotateOnAxis(z0,t)}rotateZ(t){return this.rotateOnAxis(k0,t)}translateOnAxis(t,e){return F0.copy(t).applyQuaternion(this.quaternion),this.position.add(F0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(B0,t)}translateY(t){return this.translateOnAxis(z0,t)}translateZ(t){return this.translateOnAxis(k0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(As.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hh.copy(t):hh.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?As.lookAt(el,hh,this.up):As.lookAt(hh,el,this.up),this.quaternion.setFromRotationMatrix(As),i&&(As.extractRotation(i.matrixWorld),No.setFromRotationMatrix(As),this.quaternion.premultiply(No.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(V0),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(US),Jd.child=t,this.dispatchEvent(Jd),Jd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),As.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),As.multiply(t.parent.matrixWorld)),t.applyMatrix4(As),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(V0),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,t,DS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,NS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new O(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},OS={type:"move"},ta=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(OS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},uh={h:0,s:0,l:0};function $d(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=Yp(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$d(o,r,t+1/3),this.g=$d(o,r,t),this.b=$d(o,r,t-1/3)}return me.colorSpaceToWorking(this,i),this}setStyle(t,e=yn){function n(r){r!==void 0&&parseFloat(r)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yn){let n=Q_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}copyLinearToSRGB(t){return this.r=Zo(t.r),this.g=Zo(t.g),this.b=Zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return me.workingToColorSpace(Bn.copy(this),t),Math.round(le(Bn.r*255,0,255))*65536+Math.round(le(Bn.g*255,0,255))*256+Math.round(le(Bn.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(Bn.copy(this),e);let n=Bn.r,i=Bn.g,r=Bn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(Bn.copy(this),e),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=yn){me.workingToColorSpace(Bn.copy(this),t);let e=Bn.r,n=Bn.g,i=Bn.b;return t!==yn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(nr),this.setHSL(nr.h+t,nr.s+e,nr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nr),t.getHSL(uh);let n=cl(nr.h,uh.h,e),i=cl(nr.s,uh.s,e),r=cl(nr.l,uh.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new Zt;Zt.NAMES=Q_;var _l=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cs=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ls,this.environmentIntensity=1,this.environmentRotation=new ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ki=new O,Cs=new O,Kd=new O,Rs=new O,Oo=new O,Fo=new O,H0=new O,Qd=new O,jd=new O,tp=new O,ep=new ze,np=new ze,ip=new ze,Ls=class s{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ki.subVectors(t,e),i.cross(ki);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ki.subVectors(i,e),Cs.subVectors(n,e),Kd.subVectors(t,e);let o=ki.dot(ki),a=ki.dot(Cs),l=ki.dot(Kd),c=Cs.dot(Cs),h=Cs.dot(Kd),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Rs)===null?!1:Rs.x>=0&&Rs.y>=0&&Rs.x+Rs.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rs.x),l.addScaledVector(o,Rs.y),l.addScaledVector(a,Rs.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ep.setScalar(0),np.setScalar(0),ip.setScalar(0),ep.fromBufferAttribute(t,e),np.fromBufferAttribute(t,n),ip.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ep,r.x),o.addScaledVector(np,r.y),o.addScaledVector(ip,r.z),o}static isFrontFacing(t,e,n,i){return ki.subVectors(n,e),Cs.subVectors(t,e),ki.cross(Cs).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ki.subVectors(this.c,this.b),Cs.subVectors(this.a,this.b),ki.cross(Cs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Oo.subVectors(i,n),Fo.subVectors(r,n),Qd.subVectors(t,n);let l=Oo.dot(Qd),c=Fo.dot(Qd);if(l<=0&&c<=0)return e.copy(n);jd.subVectors(t,i);let h=Oo.dot(jd),d=Fo.dot(jd);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Oo,o);tp.subVectors(t,r);let f=Oo.dot(tp),p=Fo.dot(tp);if(p>=0&&f<=p)return e.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Fo,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return H0.subVectors(r,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(H0,a);let m=1/(g+_+u);return o=_*m,a=u*m,e.copy(n).addScaledVector(Oo,o).addScaledVector(Fo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hs=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Vi):Vi.fromBufferAttribute(r,o),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fh.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fh.copy(n.boundingBox)),fh.applyMatrix4(t.matrixWorld),this.union(fh)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nl),dh.subVectors(this.max,nl),Bo.subVectors(t.a,nl),zo.subVectors(t.b,nl),ko.subVectors(t.c,nl),ir.subVectors(zo,Bo),sr.subVectors(ko,zo),Hr.subVectors(Bo,ko);let e=[0,-ir.z,ir.y,0,-sr.z,sr.y,0,-Hr.z,Hr.y,ir.z,0,-ir.x,sr.z,0,-sr.x,Hr.z,0,-Hr.x,-ir.y,ir.x,0,-sr.y,sr.x,0,-Hr.y,Hr.x,0];return!sp(e,Bo,zo,ko,dh)||(e=[1,0,0,0,1,0,0,0,1],!sp(e,Bo,zo,ko,dh))?!1:(ph.crossVectors(ir,sr),e=[ph.x,ph.y,ph.z],sp(e,Bo,zo,ko,dh))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ps),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ps=[new O,new O,new O,new O,new O,new O,new O,new O],Vi=new O,fh=new hs,Bo=new O,zo=new O,ko=new O,ir=new O,sr=new O,Hr=new O,nl=new O,dh=new O,ph=new O,Gr=new O;function sp(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Gr.fromArray(s,r);let a=i.x*Math.abs(Gr.x)+i.y*Math.abs(Gr.y)+i.z*Math.abs(Gr.z),l=t.dot(Gr),c=e.dot(Gr),h=n.dot(Gr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var on=new O,mh=new lt,FS=0,je=class extends os{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FS++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=q_,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mh.fromBufferAttribute(this,e),mh.applyMatrix3(t),this.setXY(e,mh.x,mh.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kn(e,this.array),n=Kn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Kn(e,this.array),n=Kn(n,this.array),i=Kn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Kn(e,this.array),n=Kn(n,this.array),i=Kn(i,this.array),r=Kn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var xl=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vl=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}},BS=new hs,il=new O,rp=new O,us=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):BS.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;il.subVectors(t,this.center);let e=il.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(il,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(il.copy(t.center).add(rp)),this.expandByPoint(il.copy(t.center).sub(rp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zS=0,Pi=new be,op=new Je,Vo=new O,gi=new hs,sl=new hs,vn=new O,Ee=class s extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cS(t)?vl:xl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,e,n){return Pi.makeTranslation(t,e,n),this.applyMatrix4(Pi),this}scale(t,e,n){return Pi.makeScale(t,e,n),this.applyMatrix4(Pi),this}lookAt(t){return op.lookAt(t),op.updateMatrix(),this.applyMatrix4(op.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vo).negate(),this.translate(Vo.x,Vo.y,Vo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];sl.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(gi.min,sl.min),gi.expandByPoint(vn),vn.addVectors(gi.max,sl.max),gi.expandByPoint(vn)):(gi.expandByPoint(sl.min),gi.expandByPoint(sl.max))}gi.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)vn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(vn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)vn.fromBufferAttribute(a,c),l&&(Vo.fromBufferAttribute(t,c),vn.add(Vo)),i=Math.max(i,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new je(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new O,l[v]=new O;let c=new O,h=new O,d=new O,u=new lt,f=new lt,p=new lt,_=new O,g=new O;function m(v,T,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let N=1/(f.x*p.y-p.x*f.y);isFinite(N)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(N),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(N),a[v].add(_),a[T].add(_),a[C].add(_),l[v].add(g),l[T].add(g),l[C].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,T=S.length;v<T;++v){let C=S[v],N=C.start,L=C.count;for(let V=N,D=N+L;V<D;V+=3)m(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let w=new O,x=new O,M=new O,b=new O;function A(v){M.fromBufferAttribute(i,v),b.copy(M);let T=a[v];w.copy(T),w.sub(M.multiplyScalar(M.dot(T))).normalize(),x.crossVectors(b,T);let N=x.dot(l[v])<0?-1:1;o.setXYZW(v,w.x,w.y,w.z,N)}for(let v=0,T=S.length;v<T;++v){let C=S[v],N=C.start,L=C.count;for(let V=N,D=N+L;V<D;V+=3)A(t.getX(V+0)),A(t.getX(V+1)),A(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new je(u,h,d)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ap=new O,kS=new O,VS=new ie,Hi=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ap.subVectors(n,e).cross(kS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(ap),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||VS.getNormalMatrix(t),i=this.coplanarPoint(ap).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},HS=0,Wi=class extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=fa,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Up,this.blendDst=Op,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zh,this.stencilZFail=zh,this.stencilZPass=zh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Is=new O,lp=new O,gh=new O,_h=new O,Zr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Is)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Is.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Is.copy(this.origin).addScaledVector(this.direction,e),Is.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){lp.copy(t).add(e).multiplyScalar(.5),gh.copy(e).sub(t).normalize(),_h.copy(this.origin).sub(lp);let r=t.distanceTo(e)*.5,o=-this.direction.dot(gh),a=_h.dot(this.direction),l=-_h.dot(gh),c=_h.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(lp).addScaledVector(gh,u),f}intersectSphere(t,e){if(t.radius<0)return null;Is.subVectors(t.center,this.origin);let n=Is.dot(this.direction),i=Is.dot(Is)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Is)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,_=e.y-o.y,g=e.z-o.z,m=n.x-o.x,S=n.y-o.y,w=n.z-o.z,x=Math.abs(l),M=Math.abs(c),b=Math.abs(h),A,v,T,C,N,L,V,D,F,G,k,K;if(x>=M&&x>=b?(T=l,L=d,F=p,K=m,l>=0?(A=c,v=h,C=u,N=f,V=_,D=g,G=S,k=w):(A=h,v=c,C=f,N=u,V=g,D=_,G=w,k=S)):M>=b?(T=c,L=u,F=_,K=S,c>=0?(A=h,v=l,C=f,N=d,V=g,D=p,G=w,k=m):(A=l,v=h,C=d,N=f,V=p,D=g,G=m,k=w)):(T=h,L=f,F=g,K=w,h>=0?(A=l,v=c,C=d,N=u,V=p,D=_,G=m,k=S):(A=c,v=l,C=u,N=d,V=_,D=p,G=S,k=m)),T===0)return null;let W=A/T,P=v/T,$=1/T,wt=C-W*L,Et=N-P*L,Xt=V-W*F,Gt=D-P*F,$t=G-W*K,J=k-P*K,tt=$t*Gt-J*Xt,dt=wt*J-Et*$t,Ht=Xt*Et-Gt*wt;if(i){if(tt<0||dt<0||Ht<0)return null}else if((tt<0||dt<0||Ht<0)&&(tt>0||dt>0||Ht>0))return null;let xt=tt+dt+Ht;if(xt===0)return null;let It=$*(tt*L+dt*F+Ht*K);return(xt>0?It<0:It>0)?null:this.at(It/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},si=class extends Wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.combine=Tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},G0=new be,Wr=new Zr,xh=new us,W0=new O,vh=new O,yh=new O,Sh=new O,cp=new O,Mh=new O,X0=new O,bh=new O,oe=class extends Je{constructor(t=new Ee,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Mh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(cp.fromBufferAttribute(d,t),o?Mh.addScaledVector(cp,h):Mh.addScaledVector(cp.sub(e),h))}e.add(Mh)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xh.copy(n.boundingSphere),xh.applyMatrix4(r),Wr.copy(t.ray).recast(t.near),!(xh.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(xh,W0)===null||Wr.origin.distanceToSquared(W0)>(t.far-t.near)**2))&&(G0.copy(r).invert(),Wr.copy(t.ray).applyMatrix4(G0),!(n.boundingBox!==null&&Wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=S,M=w;x<M;x+=3){let b=a.getX(x),A=a.getX(x+1),v=a.getX(x+2);i=Th(this,m,t,n,c,h,d,b,A,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let S=a.getX(g),w=a.getX(g+1),x=a.getX(g+2);i=Th(this,o,t,n,c,h,d,S,w,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=S,M=w;x<M;x+=3){let b=x,A=x+1,v=x+2;i=Th(this,m,t,n,c,h,d,b,A,v),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let S=g,w=g+1,x=g+2;i=Th(this,o,t,n,c,h,d,S,w,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function GS(s,t,e,n,i,r,o,a){let l;if(t.side===fn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===pr,a),l===null)return null;bh.copy(a),bh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(bh);return c<e.near||c>e.far?null:{distance:c,point:bh.clone(),object:s}}function Th(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,vh),s.getVertexPosition(l,yh),s.getVertexPosition(c,Sh);let h=GS(s,t,e,n,vh,yh,Sh,X0);if(h){let d=new O;Ls.getBarycoord(X0,vh,yh,Sh,d),i&&(h.uv=Ls.getInterpolatedAttribute(i,a,l,c,d,new lt)),r&&(h.uv1=Ls.getInterpolatedAttribute(r,a,l,c,d,new lt)),o&&(h.normal=Ls.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};Ls.getNormal(vh,yh,Sh,u.normal),h.face=u,h.barycoord=d}return h}var yl=class extends Qn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Sn,h=Sn,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sl=class extends je{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ho=new be,Y0=new be,wh=[],q0=new hs,WS=new be,rl=new oe,ol=new us,Ml=class extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,WS)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ho),q0.copy(t.boundingBox).applyMatrix4(Ho),this.boundingBox.union(q0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ho),ol.copy(t.boundingSphere).applyMatrix4(Ho),this.boundingSphere.union(ol)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(rl.geometry=this.geometry,rl.material=this.material,rl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ol.copy(this.boundingSphere),ol.applyMatrix4(n),t.ray.intersectsSphere(ol)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ho),Y0.multiplyMatrices(n,Ho),rl.matrixWorld=Y0,rl.raycast(t,wh);for(let o=0,a=wh.length;o<a;o++){let l=wh[o];l.instanceId=r,l.object=this,e.push(l)}wh.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new yl(new Float32Array(i*this.count),i,this.count,Iu,Di));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xr=new us,XS=new lt(.5,.5),Eh=new O,ea=class{constructor(t=new Hi,e=new Hi,n=new Hi,i=new Hi,r=new Hi,o=new Hi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gi,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],S=r[12],w=r[13],x=r[14],M=r[15];if(i[0].setComponents(c-o,f-h,m-p,M-S).normalize(),i[1].setComponents(c+o,f+h,m+p,M+S).normalize(),i[2].setComponents(c+a,f+d,m+_,M+w).normalize(),i[3].setComponents(c-a,f-d,m-_,M-w).normalize(),n)i[4].setComponents(l,u,g,x).normalize(),i[5].setComponents(c-l,f-u,m-g,M-x).normalize();else if(i[4].setComponents(c-l,f-u,m-g,M-x).normalize(),e===Gi)i[5].setComponents(c+l,f+u,m+g,M+x).normalize();else if(e===$o)i[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(t){Xr.center.set(0,0,0);let e=XS.distanceTo(t.center);return Xr.radius=.7071067811865476+e,Xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Eh.x=i.normal.x>0?t.max.x:t.min.x,Eh.y=i.normal.y>0?t.max.y:t.min.y,Eh.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Eh)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var na=class extends Wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},jh=new O,tu=new O,Z0=new be,al=new Zr,Ah=new us,hp=new O,J0=new O,eu=class extends Je{constructor(t=new Ee,e=new na){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)jh.fromBufferAttribute(e,i-1),tu.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=jh.distanceTo(tu);t.setAttribute("lineDistance",new ce(n,1))}else te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ah.copy(n.boundingSphere),Ah.applyMatrix4(i),Ah.radius+=r,t.ray.intersectsSphere(Ah)===!1)return;Z0.copy(i).invert(),al.copy(t.ray).applyMatrix4(Z0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=h.getX(_),S=h.getX(_+1),w=Ch(this,t,al,l,m,S,_);w&&e.push(w)}if(this.isLineLoop){let _=h.getX(p-1),g=h.getX(f),m=Ch(this,t,al,l,_,g,p-1);m&&e.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=Ch(this,t,al,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){let _=Ch(this,t,al,l,p-1,f,p-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ch(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(jh.fromBufferAttribute(a,i),tu.fromBufferAttribute(a,r),e.distanceSqToSegment(jh,tu,hp,J0)>n)return;hp.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(hp);if(!(c<t.near||c>t.far))return{distance:c,point:J0.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var $0=new O,K0=new O,bl=class extends eu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)$0.fromBufferAttribute(e,i),K0.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$0.distanceTo(K0);t.setAttribute("lineDistance",new ce(n,1))}else te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ia=class extends Wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Q0=new be,Sp=new Zr,Rh=new us,Ph=new O,Jr=class extends Je{constructor(t=new Ee,e=new ia){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rh.copy(n.boundingSphere),Rh.applyMatrix4(i),Rh.radius+=r,t.ray.intersectsSphere(Rh)===!1)return;Q0.copy(i).invert(),Sp.copy(t.ray).applyMatrix4(Q0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,_=f;p<_;p++){let g=c.getX(p);Ph.fromBufferAttribute(d,g),j0(Ph,g,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,_=f;p<_;p++)Ph.fromBufferAttribute(d,p),j0(Ph,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function j0(s,t,e,n,i,r,o){let a=Sp.distanceSqToPoint(s);if(a<e){let l=new O;Sp.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Tl=class extends Qn{constructor(t=[],e=mr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ns=class extends Qn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var or=class extends Qn{constructor(t,e,n=Yi,i,r,o,a=Sn,l=Sn,c,h=rs,d=1){if(h!==rs&&h!==_r)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},nu=class extends or{constructor(t,e=Yi,n=mr,i,r,o=Sn,a=Sn,l,c=rs){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},wl=class extends Qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ar=class s extends Ee{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function p(_,g,m,S,w,x,M,b,A,v,T){let C=x/A,N=M/v,L=x/2,V=M/2,D=b/2,F=A+1,G=v+1,k=0,K=0,W=new O;for(let P=0;P<G;P++){let $=P*N-V;for(let wt=0;wt<F;wt++){let Et=wt*C-L;W[_]=Et*S,W[g]=$*w,W[m]=D,c.push(W.x,W.y,W.z),W[_]=0,W[g]=0,W[m]=b>0?1:-1,h.push(W.x,W.y,W.z),d.push(wt/A),d.push(1-P/v),k+=1}}for(let P=0;P<v;P++)for(let $=0;$<A;$++){let wt=u+$+F*P,Et=u+$+F*(P+1),Xt=u+($+1)+F*(P+1),Gt=u+($+1)+F*P;l.push(wt,Et,Gt),l.push(Et,Xt,Gt),K+=6}a.addGroup(f,K,T),f+=K,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var El=class s extends Ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new O,h=new lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},$r=class s extends Ee{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,_=[],g=n/2,m=0;S(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function S(){let x=new O,M=new O,b=0,A=(e-t)/n;for(let v=0;v<=r;v++){let T=[],C=v/r,N=C*(e-t)+t;for(let L=0;L<=i;L++){let V=L/i,D=V*l+a,F=Math.sin(D),G=Math.cos(D);M.x=N*F,M.y=-C*n+g,M.z=N*G,d.push(M.x,M.y,M.z),x.set(F,A,G).normalize(),u.push(x.x,x.y,x.z),f.push(V,1-C),T.push(p++)}_.push(T)}for(let v=0;v<i;v++)for(let T=0;T<r;T++){let C=_[T][v],N=_[T+1][v],L=_[T+1][v+1],V=_[T][v+1];(t>0||T!==0)&&(h.push(C,N,V),b+=3),(e>0||T!==r-1)&&(h.push(N,L,V),b+=3)}c.addGroup(m,b,0),m+=b}function w(x){let M=p,b=new lt,A=new O,v=0,T=x===!0?t:e,C=x===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),p++;let N=p;for(let L=0;L<=i;L++){let D=L/i*l+a,F=Math.cos(D),G=Math.sin(D);A.x=T*G,A.y=g*C,A.z=T*F,d.push(A.x,A.y,A.z),u.push(0,C,0),b.x=F*.5+.5,b.y=G*.5*C+.5,f.push(b.x,b.y),p++}for(let L=0;L<i;L++){let V=M+L,D=N+L;x===!0?h.push(D,D+1,V):h.push(D+1,D,V),v+=3}c.addGroup(m,v,x===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ih=new O,Lh=new O,up=new O,Dh=new Ls,Al=class extends Ee{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(qo*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:g,c:m}=Dh;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Dh.getNormal(up),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){let w=(S+1)%3,x=d[S],M=d[w],b=Dh[h[S]],A=Dh[h[w]],v=`${x}_${M}`,T=`${M}_${x}`;T in u&&u[T]?(up.dot(u[T].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(A.x,A.y,A.z)),u[T]=null):v in u||(u[v]={index0:c[S],index1:c[w],normal:up.clone()})}}for(let p in u)if(u[p]){let{index0:_,index1:g}=u[p];Ih.fromBufferAttribute(a,_),Lh.fromBufferAttribute(a,g),f.push(Ih.x,Ih.y,Ih.z),f.push(Lh.x,Lh.y,Lh.z)}this.setAttribute("position",new ce(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},_i=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){te("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new lt:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,i=[],r=[],o=[],a=new O,l=new be;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(le(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},sa=class extends _i{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},iu=class extends sa{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function qp(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var t_=new O,e_=new O,fp=new qp,dp=new qp,pp=new qp,su=class extends _i{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(e_.subVectors(i[0],i[1]).add(i[0]),c=e_);let d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(t_.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=t_),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),fp.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,g),dp.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,g),pp.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(fp.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),dp.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),pp.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(fp.calc(l),dp.calc(l),pp.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function n_(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function YS(s,t){let e=1-s;return e*e*t}function qS(s,t){return 2*(1-s)*s*t}function ZS(s,t){return s*s*t}function hl(s,t,e,n){return YS(s,t)+qS(s,e)+ZS(s,n)}function JS(s,t){let e=1-s;return e*e*e*t}function $S(s,t){let e=1-s;return 3*e*e*s*t}function KS(s,t){return 3*(1-s)*s*s*t}function QS(s,t){return s*s*s*t}function ul(s,t,e,n,i){return JS(s,t)+$S(s,e)+KS(s,n)+QS(s,i)}var Cl=class extends _i{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ul(t,i.x,r.x,o.x,a.x),ul(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ru=class extends _i{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ul(t,i.x,r.x,o.x,a.x),ul(t,i.y,r.y,o.y,a.y),ul(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rl=class extends _i{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ou=class extends _i{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pl=class extends _i{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(hl(t,i.x,r.x,o.x),hl(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},au=class extends _i{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(hl(t,i.x,r.x,o.x),hl(t,i.y,r.y,o.y),hl(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Il=class extends _i{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(n_(a,l.x,c.x,h.x,d.x),n_(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new lt().fromArray(i))}return this}},Mp=Object.freeze({__proto__:null,ArcCurve:iu,CatmullRomCurve3:su,CubicBezierCurve:Cl,CubicBezierCurve3:ru,EllipseCurve:sa,LineCurve:Rl,LineCurve3:ou,QuadraticBezierCurve:Pl,QuadraticBezierCurve3:au,SplineCurve:Il}),lu=class extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mp[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Mp[i.type]().fromJSON(i))}return this}},Ll=class extends lu{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Rl(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Pl(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Cl(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Il(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new sa(t,e,n,i,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ra=class extends Ll{constructor(t){super(t),this.uuid=eo(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ll().fromJSON(i))}return this}};function jS(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=j_(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=sM(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let u=e;u<i;u+=e){let f=s[u],p=s[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Dl(r,o,e,a,l,c,0),o}function j_(s,t,e,n,i){let r;if(i===mM(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=i_(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=i_(o/n|0,s[o],s[o+1],r);return r&&oa(r,r.next)&&(Ul(r),r=r.next),r}function Kr(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(oa(e,e.next)||Ge(e.prev,e,e.next)===0)){if(Ul(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Dl(s,t,e,n,i,r,o){if(!s)return;!o&&r&&cM(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?eM(s,n,i,r):tM(s)){t.push(l.i,s.i,c.i),Ul(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=nM(Kr(s),t),Dl(s,t,e,n,i,r,2)):o===2&&iM(s,t,e,n,i,r):Dl(Kr(s),t,e,n,i,r,1);break}}}function tM(s){let t=s.prev,e=s,n=s.next;if(Ge(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),u=Math.max(i,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&ll(i,a,r,l,o,c,p.x,p.y)&&Ge(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function eM(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ge(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),_=Math.max(a,l,c),g=Math.max(h,d,u),m=bp(f,p,t,e,n),S=bp(_,g,t,e,n),w=s.prevZ,x=s.nextZ;for(;w&&w.z>=m&&x&&x.z<=S;){if(w.x>=f&&w.x<=_&&w.y>=p&&w.y<=g&&w!==i&&w!==o&&ll(a,h,l,d,c,u,w.x,w.y)&&Ge(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&ll(a,h,l,d,c,u,x.x,x.y)&&Ge(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=_&&w.y>=p&&w.y<=g&&w!==i&&w!==o&&ll(a,h,l,d,c,u,w.x,w.y)&&Ge(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&ll(a,h,l,d,c,u,x.x,x.y)&&Ge(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function nM(s,t){let e=s;do{let n=e.prev,i=e.next.next;!oa(n,i)&&ex(n,e,e.next,i)&&Nl(n,i)&&Nl(i,n)&&(t.push(n.i,e.i,i.i),Ul(e),Ul(e.next),e=s=i),e=e.next}while(e!==s);return Kr(e)}function iM(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fM(o,a)){let l=nx(o,a);o=Kr(o,o.next),l=Kr(l,l.next),Dl(o,t,e,n,i,r,0),Dl(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function sM(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=j_(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(uM(c))}i.sort(rM);for(let r=0;r<i.length;r++)e=oM(i[r],e);return e}function rM(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function oM(s,t){let e=aM(s,t);if(!e)return t;let n=nx(e,s);return Kr(n,n.next),Kr(e,e.next)}function aM(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(oa(s,e))return e;do{if(oa(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&tx(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);Nl(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&lM(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function lM(s,t){return Ge(s.prev,s,t.prev)<0&&Ge(t.next,s,s.next)<0}function cM(s,t,e,n){let i=s;do i.z===0&&(i.z=bp(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,hM(i)}function hM(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function bp(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function uM(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function tx(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function ll(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&tx(s,t,e,n,i,r,o,a)}function fM(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!dM(s,t)&&(Nl(s,t)&&Nl(t,s)&&pM(s,t)&&(Ge(s.prev,s,t.prev)||Ge(s,t.prev,t))||oa(s,t)&&Ge(s.prev,s,s.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function oa(s,t){return s.x===t.x&&s.y===t.y}function ex(s,t,e,n){let i=Uh(Ge(s,t,e)),r=Uh(Ge(s,t,n)),o=Uh(Ge(e,n,s)),a=Uh(Ge(e,n,t));return!!(i!==r&&o!==a||i===0&&Nh(s,e,t)||r===0&&Nh(s,n,t)||o===0&&Nh(e,s,n)||a===0&&Nh(e,t,n))}function Nh(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Uh(s){return s>0?1:s<0?-1:0}function dM(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ex(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Nl(s,t){return Ge(s.prev,s,s.next)<0?Ge(s,t,s.next)>=0&&Ge(s,s.prev,t)>=0:Ge(s,t,s.prev)<0||Ge(s,s.next,t)<0}function pM(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function nx(s,t){let e=Tp(s.i,s.x,s.y),n=Tp(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function i_(s,t,e,n){let i=Tp(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ul(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Tp(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mM(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var wp=class{static triangulate(t,e,n=2){return jS(t,e,n)}},ss=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];s_(t),r_(n,t);let o=t.length;e.forEach(s_);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,r_(n,e[l]);let a=wp.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function s_(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function r_(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var aa=class s extends Ee{constructor(t=new ra([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ce(i,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:gM,w,x=!1,M,b,A,v;if(m){w=m.getSpacedPoints(h),x=!0,u=!1;let Q=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(h,Q),b=new O,A=new O,v=new O}u||(g=0,f=0,p=0,_=0);let T=a.extractPoints(c),C=T.shape,N=T.holes;if(!ss.isClockWise(C)){C=C.reverse();for(let Q=0,st=N.length;Q<st;Q++){let ot=N[Q];ss.isClockWise(ot)&&(N[Q]=ot.reverse())}}function V(Q){let ot=10000000000000001e-36,U=Q[0];for(let ft=1;ft<=Q.length;ft++){let Ft=ft%Q.length,Pt=Q[Ft],Ct=Pt.x-U.x,gt=Pt.y-U.y,I=Ct*Ct+gt*gt,Kt=Math.max(Math.abs(Pt.x),Math.abs(Pt.y),Math.abs(U.x),Math.abs(U.y)),Lt=ot*Kt*Kt;if(I<=Lt){Q.splice(Ft,1),ft--;continue}U=Pt}}V(C),N.forEach(V);let D=N.length,F=C;for(let Q=0;Q<D;Q++){let st=N[Q];C=C.concat(st)}function G(Q,st,ot){return st||ee("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(st,ot)}let k=C.length;function K(Q,st,ot){let U,ft,Ft,Pt=Q.x-st.x,Ct=Q.y-st.y,gt=ot.x-Q.x,I=ot.y-Q.y,Kt=Pt*Pt+Ct*Ct,Lt=Pt*I-Ct*gt;if(Math.abs(Lt)>Number.EPSILON){let R=Math.sqrt(Kt),y=Math.sqrt(gt*gt+I*I),H=st.x-Ct/R,X=st.y+Pt/R,j=ot.x-I/y,mt=ot.y+gt/y,ht=((j-H)*I-(mt-X)*gt)/(Pt*I-Ct*gt);U=H+Pt*ht-Q.x,ft=X+Ct*ht-Q.y;let et=U*U+ft*ft;if(et<=2)return new lt(U,ft);Ft=Math.sqrt(et/2)}else{let R=!1;Pt>Number.EPSILON?gt>Number.EPSILON&&(R=!0):Pt<-Number.EPSILON?gt<-Number.EPSILON&&(R=!0):Math.sign(Ct)===Math.sign(I)&&(R=!0),R?(U=-Ct,ft=Pt,Ft=Math.sqrt(Kt)):(U=Pt,ft=Ct,Ft=Math.sqrt(Kt/2))}return new lt(U/Ft,ft/Ft)}let W=[];for(let Q=0,st=F.length,ot=st-1,U=Q+1;Q<st;Q++,ot++,U++)ot===st&&(ot=0),U===st&&(U=0),W[Q]=K(F[Q],F[ot],F[U]);let P=[],$,wt=W.concat();for(let Q=0,st=D;Q<st;Q++){let ot=N[Q];$=[];for(let U=0,ft=ot.length,Ft=ft-1,Pt=U+1;U<ft;U++,Ft++,Pt++)Ft===ft&&(Ft=0),Pt===ft&&(Pt=0),$[U]=K(ot[U],ot[Ft],ot[Pt]);P.push($),wt=wt.concat($)}let Et;if(g===0)Et=ss.triangulateShape(F,N);else{let Q=[],st=[];for(let ot=0;ot<g;ot++){let U=ot/g,ft=f*Math.cos(U*Math.PI/2),Ft=p*Math.sin(U*Math.PI/2)+_;for(let Pt=0,Ct=F.length;Pt<Ct;Pt++){let gt=G(F[Pt],W[Pt],Ft);dt(gt.x,gt.y,-ft),U===0&&Q.push(gt)}for(let Pt=0,Ct=D;Pt<Ct;Pt++){let gt=N[Pt];$=P[Pt];let I=[];for(let Kt=0,Lt=gt.length;Kt<Lt;Kt++){let R=G(gt[Kt],$[Kt],Ft);dt(R.x,R.y,-ft),U===0&&I.push(R)}U===0&&st.push(I)}}Et=ss.triangulateShape(Q,st)}let Xt=Et.length,Gt=p+_;for(let Q=0;Q<k;Q++){let st=u?G(C[Q],wt[Q],Gt):C[Q];x?(A.copy(M.normals[0]).multiplyScalar(st.x),b.copy(M.binormals[0]).multiplyScalar(st.y),v.copy(w[0]).add(A).add(b),dt(v.x,v.y,v.z)):dt(st.x,st.y,0)}for(let Q=1;Q<=h;Q++)for(let st=0;st<k;st++){let ot=u?G(C[st],wt[st],Gt):C[st];x?(A.copy(M.normals[Q]).multiplyScalar(ot.x),b.copy(M.binormals[Q]).multiplyScalar(ot.y),v.copy(w[Q]).add(A).add(b),dt(v.x,v.y,v.z)):dt(ot.x,ot.y,d/h*Q)}for(let Q=g-1;Q>=0;Q--){let st=Q/g,ot=f*Math.cos(st*Math.PI/2),U=p*Math.sin(st*Math.PI/2)+_;for(let ft=0,Ft=F.length;ft<Ft;ft++){let Pt=G(F[ft],W[ft],U);dt(Pt.x,Pt.y,d+ot)}for(let ft=0,Ft=N.length;ft<Ft;ft++){let Pt=N[ft];$=P[ft];for(let Ct=0,gt=Pt.length;Ct<gt;Ct++){let I=G(Pt[Ct],$[Ct],U);x?dt(I.x,I.y+w[h-1].y,w[h-1].x+ot):dt(I.x,I.y,d+ot)}}}$t(),J();function $t(){let Q=i.length/3;if(u){let st=0,ot=k*st;for(let U=0;U<Xt;U++){let ft=Et[U];Ht(ft[2]+ot,ft[1]+ot,ft[0]+ot)}st=h+g*2,ot=k*st;for(let U=0;U<Xt;U++){let ft=Et[U];Ht(ft[0]+ot,ft[1]+ot,ft[2]+ot)}}else{for(let st=0;st<Xt;st++){let ot=Et[st];Ht(ot[2],ot[1],ot[0])}for(let st=0;st<Xt;st++){let ot=Et[st];Ht(ot[0]+k*h,ot[1]+k*h,ot[2]+k*h)}}n.addGroup(Q,i.length/3-Q,0)}function J(){let Q=i.length/3,st=0;tt(F,st),st+=F.length;for(let ot=0,U=N.length;ot<U;ot++){let ft=N[ot];tt(ft,st),st+=ft.length}n.addGroup(Q,i.length/3-Q,1)}function tt(Q,st){let ot=Q.length;for(;--ot>=0;){let U=ot,ft=ot-1;ft<0&&(ft=Q.length-1);for(let Ft=0,Pt=h+g*2;Ft<Pt;Ft++){let Ct=k*Ft,gt=k*(Ft+1),I=st+U+Ct,Kt=st+ft+Ct,Lt=st+ft+gt,R=st+U+gt;xt(I,Kt,Lt,R)}}}function dt(Q,st,ot){l.push(Q),l.push(st),l.push(ot)}function Ht(Q,st,ot){It(Q),It(st),It(ot);let U=i.length/3,ft=S.generateTopUV(n,i,U-3,U-2,U-1);Nt(ft[0]),Nt(ft[1]),Nt(ft[2])}function xt(Q,st,ot,U){It(Q),It(st),It(U),It(st),It(ot),It(U);let ft=i.length/3,Ft=S.generateSideWallUV(n,i,ft-6,ft-3,ft-2,ft-1);Nt(Ft[0]),Nt(Ft[1]),Nt(Ft[3]),Nt(Ft[1]),Nt(Ft[2]),Nt(Ft[3])}function It(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function Nt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _M(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Mp[i.type]().fromJSON(i)),new s(n,t.options)}},gM={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new lt(r,o),new lt(a,l),new lt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],p=t[i*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new lt(o,1-l),new lt(c,1-d),new lt(u,1-p),new lt(_,1-m)]:[new lt(a,1-l),new lt(h,1-d),new lt(f,1-p),new lt(g,1-m)]}};function _M(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ol=class s extends Ee{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=le(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new O,u=new lt,f=new O,p=new O,_=new O,g=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let S=0;S<=e;S++){let w=n+S*h*i,x=Math.sin(w),M=Math.cos(w);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*x,d.y=t[b].y,d.z=t[b].x*M,o.push(d.x,d.y,d.z),u.x=S/e,u.y=b/(t.length-1),a.push(u.x,u.y);let A=l[3*b+0]*x,v=l[3*b+1],T=l[3*b+0]*M;c.push(A,v,T)}}for(let S=0;S<e;S++)for(let w=0;w<t.length-1;w++){let x=w+S*t.length,M=x,b=x+t.length,A=x+t.length+1,v=x+1;r.push(M,b,v),r.push(A,v,b)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var lr=class s extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let S=m*u-o;for(let w=0;w<c;w++){let x=w*d-r;p.push(x,-S,0),_.push(0,0,1),g.push(w/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){let w=S+c*m,x=S+c*(m+1),M=S+1+c*(m+1),b=S+1+c*m;f.push(w,x,b),f.push(x,M,b)}this.setIndex(f),this.setAttribute("position",new ce(p,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Fl=class s extends Ee{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/i,f=new O,p=new lt;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let _=0;_<i;_++){let g=_*(n+1);for(let m=0;m<n;m++){let S=m+g,w=S,x=S+n+1,M=S+n+2,b=S+1;a.push(w,x,b),a.push(x,M,b)}}this.setIndex(a),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Bl=class s extends Ee{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new O,u=new O,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let S=[],w=m/n,x=o+w*a,M=t*Math.cos(x),b=Math.sqrt(t*t-M*M),A=0;m===0&&o===0?A=.5/e:m===n&&l===Math.PI&&(A=-.5/e);for(let v=0;v<=e;v++){let T=v/e,C=i+T*r;d.x=-b*Math.cos(C),d.y=M,d.z=b*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(T+A,1-w),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){let w=h[m][S+1],x=h[m][S],M=h[m+1][S],b=h[m+1][S+1];(m!==0||o>0)&&f.push(w,x,b),(m!==n-1||l<Math.PI)&&f.push(x,M,b)}this.setIndex(f),this.setAttribute("position",new ce(p,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var la=class s extends Ee{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new O,f=new O,p=new O;for(let _=0;_<=n;_++){let g=o+_/n*a;for(let m=0;m<=i;m++){let S=m/i*r;f.x=(t+e*Math.cos(g))*Math.cos(S),f.y=(t+e*Math.cos(g))*Math.sin(S),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){let m=(i+1)*_+g-1,S=(i+1)*(_-1)+g-1,w=(i+1)*(_-1)+g,x=(i+1)*_+g;l.push(m,S,x),l.push(S,w,x)}this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function io(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(o_(i))i.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(o_(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function zn(s){let t={};for(let e=0;e<s.length;e++){let n=io(s[e]);for(let i in n)t[i]=n[i]}return t}function o_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function xM(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zp(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var Bs={clone:io,merge:zn},vM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends Wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vM,this.fragmentShader=yM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=io(t.uniforms),this.uniformsGroups=xM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(i.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new O().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ze().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ie().fromArray(i.value);break;case"m4":this.uniforms[n].value=new be().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ca=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ri=class extends Wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zl=class extends ri{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var kl=class extends Wi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.combine=Tu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},cu=class extends Wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hu=class extends Wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Go(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function mp(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var cr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},uu=class extends cr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xp,endingEnd:xp}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case vp:r=t,a=2*e-n;break;case yp:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vp:o=t,l=2*n-e;break;case yp:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,S=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,w=(-1-f)*g+(1.5+f)*_+.5*p,x=f*g-f*_;for(let M=0;M!==a;++M)r[M]=m*o[h+M]+S*o[c+M]+w*o[l+M]+x*o[d+M];return r}},fu=class extends cr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},du=class extends cr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},pu=class extends cr{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),_=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*_+o[l+g]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let _=o[c+p],g=o[l+p],m=f*u+p*2,S=d[m],w=d[m+1],x=t*u+p*2,M=h[x],b=h[x+1],A=MM(n,e,S,M,i);r[p]=ix(A,_,w,b,g)}return r}};function ix(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function SM(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function MM(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=ix(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=SM(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var xi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Go(e,this.TimeBufferType),this.values=Go(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Go(t.times,Array),values:Go(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),mp(t.settings)&&(n.settings={inTangents:Go(t.settings.inTangents,Array),outTangents:Go(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new du(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case fl:e=this.InterpolantFactoryMethodDiscrete;break;case Jh:e=this.InterpolantFactoryMethodLinear;break;case Bh:e=this.InterpolantFactoryMethodSmooth;break;case _p:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return te("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fl;case this.InterpolantFactoryMethodLinear:return Jh;case this.InterpolantFactoryMethodSmooth:return Bh;case this.InterpolantFactoryMethodBezier:return _p}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;mp(this.settings)&&(a_(this.settings.inTangents,t),a_(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&hS(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Bh,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,mp(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function a_(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=Jh;var hr=class extends xi{constructor(t,e,n){super(t,e,n)}};hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=fl;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var mu=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}};mu.prototype.ValueTypeName="color";var gu=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}};gu.prototype.ValueTypeName="number";var _u=class extends cr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)as.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vl=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new _u(this.times,this.values,this.getValueSize(),t)}};Vl.prototype.ValueTypeName="quaternion";Vl.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends xi{constructor(t,e,n){super(t,e,n)}};ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=fl;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var xu=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}};xu.prototype.ValueTypeName="vector";var vu=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},sx=new vu,yu=class{constructor(t){this.manager=t!==void 0?t:sx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};yu.DEFAULT_MATERIAL_NAME="__DEFAULT";var fr=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Hl=class extends fr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},gp=new be,l_=new O,c_=new O,ha=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;l_.setFromMatrixPosition(t.matrixWorld),e.position.copy(l_),c_.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(c_),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){gp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(gp,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===$o||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(gp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Oh=new O,Fh=new as,ns=new O,Gl=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oh,Fh,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oh,Fh,ns.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Oh,Fh,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oh,Fh,ns.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rr=new O,h_=new lt,u_=new lt,an=class extends Gl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rr.x,rr.y).multiplyScalar(-t/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-t/rr.z)}getViewSize(t,e){return this.getViewBounds(t,h_,u_),e.subVectors(u_,h_)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ep=class extends ha{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=qr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Wl=class extends fr{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ep}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Ap=class extends ha{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},vi=class extends fr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ap}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},dr=class extends Gl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Cp=class extends ha{constructor(){super(new dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xl=class extends fr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new Cp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Yl=class extends fr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wo=-90,Xo=1,Su=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new an(Wo,Xo,t,e);i.layers=this.layers,this.add(i);let r=new an(Wo,Xo,t,e);r.layers=this.layers,this.add(r);let o=new an(Wo,Xo,t,e);o.layers=this.layers,this.add(o);let a=new an(Wo,Xo,t,e);a.layers=this.layers,this.add(a);let l=new an(Wo,Xo,t,e);l.layers=this.layers,this.add(l);let c=new an(Wo,Xo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$o)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Mu=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Us=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=bM.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function bM(){this._document.hidden===!1&&this.reset()}var Jp="\\[\\]\\.:\\/",TM=new RegExp("["+Jp+"]","g"),$p="[^"+Jp+"]",wM="[^"+Jp.replace("\\.","")+"]",EM=/((?:WC+[\/:])*)/.source.replace("WC",$p),AM=/(WCOD+)?/.source.replace("WCOD",wM),CM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$p),RM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$p),PM=new RegExp("^"+EM+AM+CM+RM+"$"),IM=["material","materials","bones","map"],Rp=class{constructor(t,e,n){let i=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(TM,"")}static parseTrackName(t){let e=PM.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);IM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=Rp;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uA=new Float32Array(1);var f_=new be,ql=class{constructor(t,e,n=0,i=1/0){this.ray=new Zr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return f_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(f_),this}intersectObject(t,e=!0,n=[]){return Pp(t,this,n,e),n.sort(d_),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Pp(t[i],this,n,e);return n.sort(d_),n}};function d_(s,t){return s.distance-t.distance}function Pp(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Pp(r[o],t,e,!0)}}var nm=class nm{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};nm.prototype.isMatrix2=!0;var Ip=nm;function Kp(s,t,e,n){let i=LM(n);switch(e){case Hp:return s*t;case Iu:return s*t/i.components*i.byteLength;case Lu:return s*t/i.components*i.byteLength;case xr:return s*t*2/i.components*i.byteLength;case Du:return s*t*2/i.components*i.byteLength;case Gp:return s*t*3/i.components*i.byteLength;case Ni:return s*t*4/i.components*i.byteLength;case Nu:return s*t*4/i.components*i.byteLength;case nc:case ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case sc:case rc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ou:case Bu:return Math.max(s,16)*Math.max(t,8)/4;case Uu:case Fu:return Math.max(s,8)*Math.max(t,8)/2;case zu:case ku:case Hu:case Gu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vu:case oc:case Wu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yu:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case qu:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Zu:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ju:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $u:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ku:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Qu:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ju:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case tf:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ef:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case nf:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case sf:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case rf:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case of:case af:case lf:return Math.ceil(s/4)*Math.ceil(t/4)*16;case cf:case hf:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ac:case uf:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function LM(s){switch(s){case oi:case Bp:return{byteLength:1,components:1};case da:case zp:case An:return{byteLength:2,components:1};case Ru:case Pu:return{byteLength:2,components:4};case Yi:case Cu:case Di:return{byteLength:4,components:1};case kp:case Vp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ex(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function NM(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var UM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OM=`#ifdef USE_ALPHAHASH
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
#endif`,FM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VM=`#ifdef USE_AOMAP
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
#endif`,HM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GM=`#ifdef USE_BATCHING
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
#endif`,WM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZM=`#ifdef USE_IRIDESCENCE
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
#endif`,JM=`#ifdef USE_BUMPMAP
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
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sb=`#define PI 3.141592653589793
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
} // validated`,rb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ob=`vec3 transformedNormal = objectNormal;
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
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",fb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,db=`#ifdef USE_ENVMAP
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
#endif`,pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_b=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mb=`#ifdef USE_GRADIENTMAP
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
}`,bb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lb=`PhysicalMaterial material;
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
#endif`,Db=`uniform sampler2D dfgLUT;
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
}`,Nb=`
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
#endif`,Ub=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ob=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xb=`#if defined( USE_POINTS_UV )
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
#endif`,Yb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$b=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`#ifdef USE_MORPHTARGETS
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
#endif`,Qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sT=`#ifdef USE_NORMALMAP
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
#endif`,rT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yT=`float getShadowMask() {
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
}`,ST=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MT=`#ifdef USE_SKINNING
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
#endif`,bT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TT=`#ifdef USE_SKINNING
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
#endif`,wT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ET=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RT=`#ifdef USE_TRANSMISSION
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
#endif`,PT=`#ifdef USE_TRANSMISSION
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
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,UT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OT=`uniform sampler2D t2D;
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
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VT=`#include <common>
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
}`,HT=`#if DEPTH_PACKING == 3200
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
}`,GT=`#define DISTANCE
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
}`,WT=`#define DISTANCE
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
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`uniform float scale;
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
}`,ZT=`uniform vec3 diffuse;
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
}`,JT=`#include <common>
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
}`,$T=`uniform vec3 diffuse;
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
}`,KT=`#define LAMBERT
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
}`,QT=`#define LAMBERT
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
}`,jT=`#define MATCAP
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
}`,tw=`#define MATCAP
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
}`,ew=`#define NORMAL
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
}`,nw=`#define NORMAL
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
}`,iw=`#define PHONG
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
}`,sw=`#define PHONG
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
}`,rw=`#define STANDARD
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
}`,ow=`#define STANDARD
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
}`,aw=`#define TOON
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
}`,lw=`#define TOON
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
}`,cw=`uniform float size;
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
}`,hw=`uniform vec3 diffuse;
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
}`,uw=`#include <common>
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
}`,fw=`uniform vec3 color;
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
}`,dw=`uniform float rotation;
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
}`,pw=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:UM,alphahash_pars_fragment:OM,alphamap_fragment:FM,alphamap_pars_fragment:BM,alphatest_fragment:zM,alphatest_pars_fragment:kM,aomap_fragment:VM,aomap_pars_fragment:HM,batching_pars_vertex:GM,batching_vertex:WM,begin_vertex:XM,beginnormal_vertex:YM,bsdfs:qM,iridescence_fragment:ZM,bumpmap_pars_fragment:JM,clipping_planes_fragment:$M,clipping_planes_pars_fragment:KM,clipping_planes_pars_vertex:QM,clipping_planes_vertex:jM,color_fragment:tb,color_pars_fragment:eb,color_pars_vertex:nb,color_vertex:ib,common:sb,cube_uv_reflection_fragment:rb,defaultnormal_vertex:ob,displacementmap_pars_vertex:ab,displacementmap_vertex:lb,emissivemap_fragment:cb,emissivemap_pars_fragment:hb,colorspace_fragment:ub,colorspace_pars_fragment:fb,envmap_fragment:db,envmap_common_pars_fragment:pb,envmap_pars_fragment:mb,envmap_pars_vertex:gb,envmap_physical_pars_fragment:Ab,envmap_vertex:_b,fog_vertex:xb,fog_pars_vertex:vb,fog_fragment:yb,fog_pars_fragment:Sb,gradientmap_pars_fragment:Mb,lightmap_pars_fragment:bb,lights_lambert_fragment:Tb,lights_lambert_pars_fragment:wb,lights_pars_begin:Eb,lights_toon_fragment:Cb,lights_toon_pars_fragment:Rb,lights_phong_fragment:Pb,lights_phong_pars_fragment:Ib,lights_physical_fragment:Lb,lights_physical_pars_fragment:Db,lights_fragment_begin:Nb,lights_fragment_maps:Ub,lights_fragment_end:Ob,lightprobes_pars_fragment:Fb,logdepthbuf_fragment:Bb,logdepthbuf_pars_fragment:zb,logdepthbuf_pars_vertex:kb,logdepthbuf_vertex:Vb,map_fragment:Hb,map_pars_fragment:Gb,map_particle_fragment:Wb,map_particle_pars_fragment:Xb,metalnessmap_fragment:Yb,metalnessmap_pars_fragment:qb,morphinstance_vertex:Zb,morphcolor_vertex:Jb,morphnormal_vertex:$b,morphtarget_pars_vertex:Kb,morphtarget_vertex:Qb,normal_fragment_begin:jb,normal_fragment_maps:tT,normal_pars_fragment:eT,normal_pars_vertex:nT,normal_vertex:iT,normalmap_pars_fragment:sT,clearcoat_normal_fragment_begin:rT,clearcoat_normal_fragment_maps:oT,clearcoat_pars_fragment:aT,iridescence_pars_fragment:lT,opaque_fragment:cT,packing:hT,premultiplied_alpha_fragment:uT,project_vertex:fT,dithering_fragment:dT,dithering_pars_fragment:pT,roughnessmap_fragment:mT,roughnessmap_pars_fragment:gT,shadowmap_pars_fragment:_T,shadowmap_pars_vertex:xT,shadowmap_vertex:vT,shadowmask_pars_fragment:yT,skinbase_vertex:ST,skinning_pars_vertex:MT,skinning_vertex:bT,skinnormal_vertex:TT,specularmap_fragment:wT,specularmap_pars_fragment:ET,tonemapping_fragment:AT,tonemapping_pars_fragment:CT,transmission_fragment:RT,transmission_pars_fragment:PT,uv_pars_fragment:IT,uv_pars_vertex:LT,uv_vertex:DT,worldpos_vertex:NT,background_vert:UT,background_frag:OT,backgroundCube_vert:FT,backgroundCube_frag:BT,cube_vert:zT,cube_frag:kT,depth_vert:VT,depth_frag:HT,distance_vert:GT,distance_frag:WT,equirect_vert:XT,equirect_frag:YT,linedashed_vert:qT,linedashed_frag:ZT,meshbasic_vert:JT,meshbasic_frag:$T,meshlambert_vert:KT,meshlambert_frag:QT,meshmatcap_vert:jT,meshmatcap_frag:tw,meshnormal_vert:ew,meshnormal_frag:nw,meshphong_vert:iw,meshphong_frag:sw,meshphysical_vert:rw,meshphysical_frag:ow,meshtoon_vert:aw,meshtoon_frag:lw,points_vert:cw,points_frag:hw,shadow_vert:uw,shadow_frag:fw,sprite_vert:dw,sprite_frag:pw},At={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},ps={basic:{uniforms:zn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:zn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:zn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:zn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:zn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Zt(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:zn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:zn([At.points,At.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:zn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:zn([At.common,At.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:zn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:zn([At.sprite,At.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:zn([At.common,At.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:zn([At.lights,At.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};ps.physical={uniforms:zn([ps.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var pf={r:0,b:0,g:0},mw=new be,Ax=new ie;Ax.set(-1,0,0,0,1,0,0,0,1);function gw(s,t,e,n,i,r){let o=new Zt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let x=S.backgroundBlurriness>0;w=t.get(w,x)}return w}function p(S){let w=!1,x=f(S);x===null?g(o,a):x&&x.isColor&&(g(x,1),w=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(S,w){let x=f(w);x&&(x.isCubeTexture||x.mapping===tc)?(c===void 0&&(c=new oe(new ar(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:io(ps.backgroundCube.uniforms),vertexShader:ps.backgroundCube.vertexShader,fragmentShader:ps.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mw.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ax),c.material.toneMapped=me.getTransfer(x.colorSpace)!==ye,(h!==x||d!==x.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new oe(new lr(2,2),new We({name:"BackgroundMaterial",uniforms:io(ps.background.uniforms),vertexShader:ps.background.vertexShader,fragmentShader:ps.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=me.getTransfer(x.colorSpace)!==ye,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,w){S.getRGB(pf,Zp(s)),e.buffers.color.setClear(pf.r,pf.g,pf.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,w=1){o.set(S),a=w,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:p,addToRenderList:_,dispose:m}}function _w(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(N,L,V,D,F){let G=!1,k=d(N,D,V,L);r!==k&&(r=k,c(r.object)),G=f(N,D,V,F),G&&p(N,D,V,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,x(N,L,V,D),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,L,V,D){let F=D.wireframe===!0,G=n[L.id];G===void 0&&(G={},n[L.id]=G);let k=N.isInstancedMesh===!0?N.id:0,K=G[k];K===void 0&&(K={},G[k]=K);let W=K[V.id];W===void 0&&(W={},K[V.id]=W);let P=W[F];return P===void 0&&(P=u(l()),W[F]=P),P}function u(N){let L=[],V=[],D=[];for(let F=0;F<e;F++)L[F]=0,V[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:D,object:N,attributes:{},index:null}}function f(N,L,V,D){let F=r.attributes,G=L.attributes,k=0,K=V.getAttributes();for(let W in K)if(K[W].location>=0){let $=F[W],wt=G[W];if(wt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(wt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(wt=N.instanceColor)),$===void 0||$.attribute!==wt||wt&&$.data!==wt.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function p(N,L,V,D){let F={},G=L.attributes,k=0,K=V.getAttributes();for(let W in K)if(K[W].location>=0){let $=G[W];$===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&($=N.instanceColor));let wt={};wt.attribute=$,$&&$.data&&(wt.data=$.data),F[W]=wt,k++}r.attributes=F,r.attributesNum=k,r.index=D}function _(){let N=r.newAttributes;for(let L=0,V=N.length;L<V;L++)N[L]=0}function g(N){m(N,0)}function m(N,L){let V=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;V[N]=1,D[N]===0&&(s.enableVertexAttribArray(N),D[N]=1),F[N]!==L&&(s.vertexAttribDivisor(N,L),F[N]=L)}function S(){let N=r.newAttributes,L=r.enabledAttributes;for(let V=0,D=L.length;V<D;V++)L[V]!==N[V]&&(s.disableVertexAttribArray(V),L[V]=0)}function w(N,L,V,D,F,G,k){k===!0?s.vertexAttribIPointer(N,L,V,F,G):s.vertexAttribPointer(N,L,V,D,F,G)}function x(N,L,V,D){_();let F=D.attributes,G=V.getAttributes(),k=L.defaultAttributeValues;for(let K in G){let W=G[K];if(W.location>=0){let P=F[K];if(P===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(P=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(P=N.instanceColor)),P!==void 0){let $=P.normalized,wt=P.itemSize,Et=t.get(P);if(Et===void 0)continue;let Xt=Et.buffer,Gt=Et.type,$t=Et.bytesPerElement,J=Gt===s.INT||Gt===s.UNSIGNED_INT||P.gpuType===Cu;if(P.isInterleavedBufferAttribute){let tt=P.data,dt=tt.stride,Ht=P.offset;if(tt.isInstancedInterleavedBuffer){for(let xt=0;xt<W.locationSize;xt++)m(W.location+xt,tt.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let xt=0;xt<W.locationSize;xt++)g(W.location+xt);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let xt=0;xt<W.locationSize;xt++)w(W.location+xt,wt/W.locationSize,Gt,$,dt*$t,(Ht+wt/W.locationSize*xt)*$t,J)}else{if(P.isInstancedBufferAttribute){for(let tt=0;tt<W.locationSize;tt++)m(W.location+tt,P.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let tt=0;tt<W.locationSize;tt++)g(W.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let tt=0;tt<W.locationSize;tt++)w(W.location+tt,wt/W.locationSize,Gt,$,wt*$t,wt/W.locationSize*tt*$t,J)}}else if(k!==void 0){let $=k[K];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(W.location,$);break;case 3:s.vertexAttrib3fv(W.location,$);break;case 4:s.vertexAttrib4fv(W.location,$);break;default:s.vertexAttrib1fv(W.location,$)}}}}S()}function M(){T();for(let N in n){let L=n[N];for(let V in L){let D=L[V];for(let F in D){let G=D[F];for(let k in G)h(G[k].object),delete G[k];delete D[F]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;let L=n[N.id];for(let V in L){let D=L[V];for(let F in D){let G=D[F];for(let k in G)h(G[k].object),delete G[k];delete D[F]}}delete n[N.id]}function A(N){for(let L in n){let V=n[L];for(let D in V){let F=V[D];if(F[N.id]===void 0)continue;let G=F[N.id];for(let k in G)h(G[k].object),delete G[k];delete F[N.id]}}}function v(N){for(let L in n){let V=n[L],D=N.isInstancedMesh===!0?N.id:0,F=V[D];if(F!==void 0){for(let G in F){let k=F[G];for(let K in k)h(k[K].object),delete k[K];delete F[G]}delete V[D],Object.keys(V).length===0&&delete n[L]}}}function T(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function xw(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function vw(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Ni&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let v=A===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==oi&&A!==Di&&!v&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(te("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:x,maxSamples:M,samples:b}}function yw(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Hi,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let S=r?0:n,w=S*4,x=m.clippingState||null;l.value=x,x=h(p,u,w,f);for(let M=0;M!==w;++M)x[M]=e[M];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,x=f;w!==_;++w,x+=4)o.copy(d[w]).applyMatrix4(S,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var ga=4,Sw=6,Mw=20,bw=256,cc=new dr,rx=new Zt,im=null,sm=0,rm=0,om=!1,Tw=new O,so=new O,vr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=Tw}=r;im=this._renderer.getRenderTarget(),sm=this._renderer.getActiveCubeFace(),rm=this._renderer.getActiveMipmapLevel(),om=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ax(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(im,sm,rm),this._renderer.xr.enabled=om,t.scissorTest=!1,ma(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mr||t.mapping===to?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),im=this._renderer.getRenderTarget(),sm=this._renderer.getActiveCubeFace(),rm=this._renderer.getActiveMipmapLevel(),om=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:An,format:Ni,colorSpace:dl,depthBuffer:!1},i=ox(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ox(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ww(r)),this._blurMaterial=Aw(r,t,e),this._ggxMaterial=Ew(r,t,e)}return i}_compileMaterial(t){let e=new oe(new Ee,t);this._renderer.compile(e,cc)}_sceneToCubeUV(t,e,n,i,r){let l=new an(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(rx),d.toneMapping=Xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oe(new ar,new si({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,m=!0):(g.color.copy(rx),m=!0);for(let w=0;w<6;w++){let x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let M=this._cubeSize;ma(i,x*M,w>2?M:0,M,M),d.setRenderTarget(i),m&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===mr||t.mapping===to;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ax());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ma(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,cc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-ga?n-p+ga:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,ma(r,g,m,3*_,2*_),i.setRenderTarget(r),i.render(a,cc),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,ma(t,g,m,3*_,2*_),i.setRenderTarget(t),i.render(a,cc)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-ga?i-this._lodMax+ga:0),u=4*(this._cubeSize-h);ma(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,cc)}};function ww(s){let t=[],e=[],n=s,i=s-ga+1+Sw;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){let S=m%3*2/3-1,w=m>2?0:-1,x=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];p.set(x,f*u*m);for(let M=0;M<u;M++){let b=h[M*2]*2-1,A=h[M*2+1]*2-1;m===0?so.set(1,A,b):m===1?so.set(-b,1,-A):m===2?so.set(-b,A,1):m===3?so.set(-1,A,-b):m===4?so.set(-b,-1,A):so.set(b,A,-1),so.toArray(_,(m*u+M)*f)}}let g=new Ee;g.setAttribute("position",new je(p,f)),g.setAttribute("outputDirection",new je(_,f)),e.push(new oe(g,null)),n>ga&&n--}return{lodMeshes:e,sizeLods:t}}function ox(s,t,e){let n=new ln(s,t,e);return n.texture.mapping=tc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ew(s,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Aw(s,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:Mw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ax(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function lx(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function _f(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gf=class extends ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Tl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ar(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Li});r.uniforms.tEquirect.value=e;let o=new oe(i,r),a=e.minFilter;return e.minFilter===gr&&(e.minFilter=En),new Su(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function Cw(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===wu||f===Eu)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new gf(p.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===wu||f===Eu,_=f===mr||f===to;if(p||_){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new vr(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let S=u.image;return p&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new vr(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===wu?u.mapping=mr:f===Eu&&(u.mapping=to),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Rw(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Yr("WebGLRenderer: "+n+" extension not supported."),i}}}function Pw(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let S=f.array;_=f.version;for(let w=0,x=S.length;w<x;w+=3){let M=S[w+0],b=S[w+1],A=S[w+2];u.push(M,b,b,A,A,M)}}else{let S=p.array;_=p.version;for(let w=0,x=S.length/3-1;w<x;w+=3){let M=w+0,b=w+1,A=w+2;u.push(M,b,b,A,A,M)}}let g=new(p.count>=65535?vl:xl)(u,1);g.version=_;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Iw(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Lw(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Dw(s,t,e){let n=new WeakMap,i=new ze;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),_===!0&&(w=3);let x=a.attributes.position.count*w,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*M*4*d),A=new gl(b,x,M,d);A.type=Di,A.needsUpdate=!0;let v=w*4;for(let C=0;C<d;C++){let N=g[C],L=m[C],V=S[C],D=x*M*4*C;for(let F=0;F<N.count;F++){let G=F*v;f===!0&&(i.fromBufferAttribute(N,F),b[D+G+0]=i.x,b[D+G+1]=i.y,b[D+G+2]=i.z,b[D+G+3]=0),p===!0&&(i.fromBufferAttribute(L,F),b[D+G+4]=i.x,b[D+G+5]=i.y,b[D+G+6]=i.z,b[D+G+7]=0),_===!0&&(i.fromBufferAttribute(V,F),b[D+G+8]=i.x,b[D+G+9]=i.y,b[D+G+10]=i.z,b[D+G+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:A,size:new lt(x,M)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Nw(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Uw={[Zl]:"LINEAR_TONE_MAPPING",[Jl]:"REINHARD_TONE_MAPPING",[$l]:"CINEON_TONE_MAPPING",[Os]:"ACES_FILMIC_TONE_MAPPING",[Ql]:"AGX_TONE_MAPPING",[jl]:"NEUTRAL_TONE_MAPPING",[Kl]:"CUSTOM_TONE_MAPPING"};function Ow(s,t,e,n,i,r){let o=new ln(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ee;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));let h=new ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new oe(c,h),u=new dr(-1,1,1,-1,0,1),f=null,p=null,_=!1,g,m=null,S=[],w=!1;this.setSize=function(x,M){o.setSize(x,M),a!==null&&a.setSize(x,M),l!==null&&l.setSize(x,M);for(let b=0;b<S.length;b++){let A=S[b];A.setSize&&A.setSize(x,M)}},this.setEffects=function(x){S=x,w=S.length>0&&S[0].isRenderPass===!0;let M=o.width,b=o.height;S.length>0&&a===null&&(a=new ln(M,b,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new ln(M,b,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){let v=S[A];v.setSize&&v.setSize(M,b)}},this.begin=function(x,M){if(_||x.toneMapping===Xi&&S.length===0)return!1;if(m=M,M!==null){let b=M.width,A=M.height;(o.width!==b||o.height!==A)&&this.setSize(b,A)}return w===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=Xi,!0},this.hasRenderPass=function(){return w},this.end=function(x,M){x.toneMapping=g,_=!0;let b=o,A=a;for(let v=0;v<S.length;v++){let T=S[v];T.enabled!==!1&&(T.render(x,A,b,M),T.needsSwap!==!1&&(b=A,A=A===a?l:a))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,h.defines={},me.getTransfer(f)===ye&&(h.defines.SRGB_TRANSFER="");let v=Uw[p];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(m),x.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Cx=new Qn,cm=new or(1,1),Rx=new gl,Px=new Qh,Ix=new Tl,cx=[],hx=[],ux=new Float32Array(16),fx=new Float32Array(9),dx=new Float32Array(4);function va(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=cx[i];if(r===void 0&&(r=new Float32Array(i),cx[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function dn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function pn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function xf(s,t){let e=hx[t];e===void 0&&(e=new Int32Array(t),hx[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Fw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Bw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;s.uniform2fv(this.addr,t),pn(e,t)}}function zw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;s.uniform3fv(this.addr,t),pn(e,t)}}function kw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;s.uniform4fv(this.addr,t),pn(e,t)}}function Vw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,n))return;dx.set(n),s.uniformMatrix2fv(this.addr,!1,dx),pn(e,n)}}function Hw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,n))return;fx.set(n),s.uniformMatrix3fv(this.addr,!1,fx),pn(e,n)}}function Gw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),pn(e,t)}else{if(dn(e,n))return;ux.set(n),s.uniformMatrix4fv(this.addr,!1,ux),pn(e,n)}}function Ww(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Xw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;s.uniform2iv(this.addr,t),pn(e,t)}}function Yw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;s.uniform3iv(this.addr,t),pn(e,t)}}function qw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;s.uniform4iv(this.addr,t),pn(e,t)}}function Zw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Jw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;s.uniform2uiv(this.addr,t),pn(e,t)}}function $w(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;s.uniform3uiv(this.addr,t),pn(e,t)}}function Kw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;s.uniform4uiv(this.addr,t),pn(e,t)}}function Qw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(cm.compareFunction=e.isReversedDepthBuffer()?df:ff,r=cm):r=Cx,e.setTexture2D(t||r,i)}function jw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Px,i)}function t1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ix,i)}function e1(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Rx,i)}function n1(s){switch(s){case 5126:return Fw;case 35664:return Bw;case 35665:return zw;case 35666:return kw;case 35674:return Vw;case 35675:return Hw;case 35676:return Gw;case 5124:case 35670:return Ww;case 35667:case 35671:return Xw;case 35668:case 35672:return Yw;case 35669:case 35673:return qw;case 5125:return Zw;case 36294:return Jw;case 36295:return $w;case 36296:return Kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return jw;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return e1}}function i1(s,t){s.uniform1fv(this.addr,t)}function s1(s,t){let e=va(t,this.size,2);s.uniform2fv(this.addr,e)}function r1(s,t){let e=va(t,this.size,3);s.uniform3fv(this.addr,e)}function o1(s,t){let e=va(t,this.size,4);s.uniform4fv(this.addr,e)}function a1(s,t){let e=va(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function l1(s,t){let e=va(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function c1(s,t){let e=va(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function h1(s,t){s.uniform1iv(this.addr,t)}function u1(s,t){s.uniform2iv(this.addr,t)}function f1(s,t){s.uniform3iv(this.addr,t)}function d1(s,t){s.uniform4iv(this.addr,t)}function p1(s,t){s.uniform1uiv(this.addr,t)}function m1(s,t){s.uniform2uiv(this.addr,t)}function g1(s,t){s.uniform3uiv(this.addr,t)}function _1(s,t){s.uniform4uiv(this.addr,t)}function x1(s,t,e){let n=this.cache,i=t.length,r=xf(e,i);dn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=cm:o=Cx;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function v1(s,t,e){let n=this.cache,i=t.length,r=xf(e,i);dn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Px,r[o])}function y1(s,t,e){let n=this.cache,i=t.length,r=xf(e,i);dn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ix,r[o])}function S1(s,t,e){let n=this.cache,i=t.length,r=xf(e,i);dn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Rx,r[o])}function M1(s){switch(s){case 5126:return i1;case 35664:return s1;case 35665:return r1;case 35666:return o1;case 35674:return a1;case 35675:return l1;case 35676:return c1;case 5124:case 35670:return h1;case 35667:case 35671:return u1;case 35668:case 35672:return f1;case 35669:case 35673:return d1;case 5125:return p1;case 36294:return m1;case 36295:return g1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return S1}}var hm=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=n1(e.type)}},um=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=M1(e.type)}},fm=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},am=/(\w+)(\])?(\[|\.)?/g;function px(s,t){s.seq.push(t),s.map[t.id]=t}function b1(s,t,e){let n=s.name,i=n.length;for(am.lastIndex=0;;){let r=am.exec(n),o=am.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){px(e,c===void 0?new hm(a,s,t):new um(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new fm(a),px(e,d)),e=d}}}var _a=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);b1(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function mx(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var T1=37297,w1=0;function E1(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var gx=new ie;function A1(s){me._getMatrix(gx,me.workingColorSpace,s);let t=`mat3( ${gx.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(s)){case pl:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function _x(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+E1(s.getShaderSource(t),a)}else return r}function C1(s,t){let e=A1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var R1={[Zl]:"Linear",[Jl]:"Reinhard",[$l]:"Cineon",[Os]:"ACESFilmic",[Ql]:"AgX",[jl]:"Neutral",[Kl]:"Custom"};function P1(s,t){let e=R1[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mf=new O;function I1(){me.getLuminanceCoefficients(mf);let s=mf.x.toFixed(4),t=mf.y.toFixed(4),e=mf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uc).join(`
`)}function D1(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function N1(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function uc(s){return s!==""}function xx(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vx(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var U1=/^[ \t]*#include +<([\w\d./]+)>/gm;function dm(s){return s.replace(U1,F1)}var O1=new Map;function F1(s,t){let e=he[t];if(e===void 0){let n=O1.get(t);if(n!==void 0)e=he[n],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return dm(e)}var B1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yx(s){return s.replace(B1,z1)}function z1(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Sx(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var k1={[Qr]:"SHADOWMAP_TYPE_PCF",[ua]:"SHADOWMAP_TYPE_VSM"};function V1(s){return k1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H1={[mr]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[tc]:"ENVMAP_TYPE_CUBE_UV"};function G1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":H1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var W1={[to]:"ENVMAP_MODE_REFRACTION"};function X1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":W1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Y1={[Tu]:"ENVMAP_BLENDING_MULTIPLY",[U_]:"ENVMAP_BLENDING_MIX",[O_]:"ENVMAP_BLENDING_ADD"};function q1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Y1[s.combine]||"ENVMAP_BLENDING_NONE"}function Z1(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function J1(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=V1(e),c=G1(e),h=X1(e),d=q1(e),u=Z1(e),f=L1(e),p=D1(r),_=i.createProgram(),g,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(uc).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(uc).join(`
`),m.length>0&&(m+=`
`)):(g=[Sx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uc).join(`
`),m=[Sx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?he.tonemapping_pars_fragment:"",e.toneMapping!==Xi?P1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,C1("linearToOutputTexel",e.outputColorSpace),I1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(uc).join(`
`)),o=dm(o),o=xx(o,e),o=vx(o,e),a=dm(a),a=xx(a,e),a=vx(a,e),o=yx(o),a=yx(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=S+g+o,x=S+m+a,M=mx(i,i.VERTEX_SHADER,w),b=mx(i,i.FRAGMENT_SHADER,x);i.attachShader(_,M),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(N){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",V=i.getShaderInfoLog(M)||"",D=i.getShaderInfoLog(b)||"",F=L.trim(),G=V.trim(),k=D.trim(),K=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,M,b);else{let P=_x(i,M,"vertex"),$=_x(i,b,"fragment");ee("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+P+`
`+$)}else F!==""?te("WebGLProgram: Program Info Log:",F):(G===""||k==="")&&(W=!1);W&&(N.diagnostics={runnable:K,programLog:F,vertexShader:{log:G,prefix:g},fragmentShader:{log:k,prefix:m}})}i.deleteShader(M),i.deleteShader(b),v=new _a(i,_),T=N1(i,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,T1)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}var $1=0,pm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new mm(t),e.set(t,n)),n}},mm=class{constructor(t){this.id=$1++,this.code=t,this.usedTimes=0}};function K1(s){return s===xr||s===oc||s===ac}function Q1(s,t,e,n,i,r){let o=new jo,a=new pm,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,C,N,L,V){let D=N.fog,F=L.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=t.get(v.envMap||G,k),W=K&&K.mapping===tc?K.image.height:null,P=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&te("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let $=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,wt=$!==void 0?$.length:0,Et=0;F.morphAttributes.position!==void 0&&(Et=1),F.morphAttributes.normal!==void 0&&(Et=2),F.morphAttributes.color!==void 0&&(Et=3);let Xt,Gt,$t,J;if(P){let Jt=ps[P];Xt=Jt.vertexShader,Gt=Jt.fragmentShader}else{Xt=v.vertexShader,Gt=v.fragmentShader;let Jt=a.getVertexShaderStage(v),ct=a.getFragmentShaderStage(v);a.update(v,Jt,ct),$t=Jt.id,J=ct.id}let tt=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),Ht=L.isInstancedMesh===!0,xt=L.isBatchedMesh===!0,It=!!v.map,Nt=!!v.matcap,Q=!!K,st=!!v.aoMap,ot=!!v.lightMap,U=!!v.bumpMap&&v.wireframe===!1,ft=!!v.normalMap,Ft=!!v.displacementMap,Pt=!!v.emissiveMap,Ct=!!v.metalnessMap,gt=!!v.roughnessMap,I=v.anisotropy>0,Kt=v.clearcoat>0,Lt=v.dispersion>0,R=v.retroreflectivity>0,y=v.iridescence>0,H=v.sheen>0,X=v.transmission>0,j=I&&!!v.anisotropyMap,mt=Kt&&!!v.clearcoatMap,ht=Kt&&!!v.clearcoatNormalMap,et=Kt&&!!v.clearcoatRoughnessMap,it=y&&!!v.iridescenceMap,yt=y&&!!v.iridescenceThicknessMap,Bt=H&&!!v.sheenColorMap,St=H&&!!v.sheenRoughnessMap,vt=!!v.specularMap,pt=!!v.specularColorMap,Yt=!!v.specularIntensityMap,jt=X&&!!v.transmissionMap,B=X&&!!v.thicknessMap,_t=!!v.gradientMap,nt=!!v.alphaMap,Mt=v.alphaTest>0,Tt=!!v.alphaHash,rt=!!v.extensions,ut=Xi;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ut=s.toneMapping);let at={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:Xt,fragmentShader:Gt,defines:v.defines,customVertexShaderID:$t,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:xt,batchingColor:xt&&L._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&L.instanceColor!==null,instancingMorph:Ht&&L.morphTexture!==null,outputColorSpace:tt===null?s.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:It,matcap:Nt,envMap:Q,envMapMode:Q&&K.mapping,envMapCubeUVHeight:W,aoMap:st,lightMap:ot,bumpMap:U,normalMap:ft,displacementMap:Ft,emissiveMap:Pt,normalMapObjectSpace:ft&&v.normalMapType===z_,normalMapTangentSpace:ft&&v.normalMapType===lc,packedNormalMap:ft&&v.normalMapType===lc&&K1(v.normalMap.format),metalnessMap:Ct,roughnessMap:gt,anisotropy:I,anisotropyMap:j,clearcoat:Kt,clearcoatMap:mt,clearcoatNormalMap:ht,clearcoatRoughnessMap:et,dispersion:Lt,retroreflection:R,iridescence:y,iridescenceMap:it,iridescenceThicknessMap:yt,sheen:H,sheenColorMap:Bt,sheenRoughnessMap:St,specularMap:vt,specularColorMap:pt,specularIntensityMap:Yt,transmission:X,transmissionMap:jt,thicknessMap:B,gradientMap:_t,opaque:v.transparent===!1&&v.blending===fa&&v.alphaToCoverage===!1,alphaMap:nt,alphaTest:Mt,alphaHash:Tt,combine:v.combine,mapUv:It&&p(v.map.channel),aoMapUv:st&&p(v.aoMap.channel),lightMapUv:ot&&p(v.lightMap.channel),bumpMapUv:U&&p(v.bumpMap.channel),normalMapUv:ft&&p(v.normalMap.channel),displacementMapUv:Ft&&p(v.displacementMap.channel),emissiveMapUv:Pt&&p(v.emissiveMap.channel),metalnessMapUv:Ct&&p(v.metalnessMap.channel),roughnessMapUv:gt&&p(v.roughnessMap.channel),anisotropyMapUv:j&&p(v.anisotropyMap.channel),clearcoatMapUv:mt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:St&&p(v.sheenRoughnessMap.channel),specularMapUv:vt&&p(v.specularMap.channel),specularColorMapUv:pt&&p(v.specularColorMap.channel),specularIntensityMapUv:Yt&&p(v.specularIntensityMap.channel),transmissionMapUv:jt&&p(v.transmissionMap.channel),thicknessMapUv:B&&p(v.thicknessMap.channel),alphaMapUv:nt&&p(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ft||I),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(It||nt),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&ft===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Et,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:It&&v.map.isVideoTexture===!0&&me.getTransfer(v.map.colorSpace)===ye,decodeVideoTextureEmissive:Pt&&v.emissiveMap.isVideoTexture===!0&&me.getTransfer(v.emissiveMap.colorSpace)===ye,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ii,flipSided:v.side===fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:rt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&v.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function g(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)T.push(C),T.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(T,v),S(T,v),T.push(s.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function w(v){let T=f[v.type],C;if(T){let N=ps[T];C=Bs.clone(N.uniforms)}else C=v.uniforms;return C}function x(v,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new J1(s,T,v,i),c.push(C),h.set(T,C)),C}function M(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:w,acquireProgram:x,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:A}}function j1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function tE(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Mx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function bx(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,g,m){let S=s[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=p,S.materialVariant=o(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=g,S.group=m),t++,S}function l(u,f,p,_,g,m,S){S.reversedDepth===!0&&(g=-g);let w=a(u,f,p,_,g,m);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):e.push(w)}function c(u,f,p,_,g,m){let S=a(u,f,p,_,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||tE),n.length>1&&n.sort(f||Mx),i.length>1&&i.sort(f||Mx)}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function eE(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new bx,s.set(n,[o])):i>=r.length?(o=new bx,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function nE(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Zt};break;case"SpotLight":e={position:new O,direction:new O,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new O,halfWidth:new O,halfHeight:new O};break}return s[t.id]=e,e}}}function iE(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var sE=0;function rE(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function oE(s){let t=new nE,e=iE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let i=new O,r=new be,o=new be;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,S=0,w=0,x=0,M=0,b=0,A=0,v=0,T=0,C=0;c.sort(rE);for(let L=0,V=c.length;L<V;L++){let D=c[L],F=D.color,G=D.intensity,k=D.distance,K=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===xr?K=D.shadow.map.texture:K=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=F.r*G,d+=F.g*G,u+=F.b*G;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],G);C++}else if(D.isSunLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let P=D.shadow,$=e.get(D);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[p]=$,n.sunShadowMap[p]=K;let wt=P.getViewportCount();for(let Et=0;Et<wt;Et++)n.sunShadowMatrix[_+Et]=P.getMatrix(Et),n.sunShadowCascade[_+Et]=P._cascadeData[Et];_+=wt,p++}n.sun[f]=W,f++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let P=D.shadow,$=e.get(D);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize=P.mapSize,n.directionalShadow[g]=$,n.directionalShadowMap[g]=K,n.directionalShadowMatrix[g]=D.shadow.matrix,M++}n.directional[g]=W,g++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(F).multiplyScalar(G),W.distance=k,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[S]=W;let P=D.shadow;if(D.map&&(n.spotLightMap[v]=D.map,v++,P.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[S]=P.matrix,D.castShadow){let $=e.get(D);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize=P.mapSize,n.spotShadow[S]=$,n.spotShadowMap[S]=K,A++}S++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(F).multiplyScalar(G),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=W,w++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let P=D.shadow,$=e.get(D);$.shadowIntensity=P.intensity,$.shadowBias=P.bias,$.shadowNormalBias=P.normalBias,$.shadowRadius=P.radius,$.shadowMapSize=P.mapSize,$.shadowCameraNear=P.camera.near,$.shadowCameraFar=P.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=D.shadow.matrix,b++}n.point[m]=W,m++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(G),W.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[x]=W,x++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==m||N.spotLength!==S||N.rectAreaLength!==w||N.hemiLength!==x||N.numSunShadows!==p||N.numDirectionalShadows!==M||N.numPointShadows!==b||N.numSpotShadows!==A||N.numSpotMaps!==v||N.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=S,n.rectArea.length=w,n.point.length=m,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,N.sunLength=f,N.directionalLength=g,N.pointLength=m,N.spotLength=S,N.rectAreaLength=w,N.hemiLength=x,N.numSunShadows=p,N.numDirectionalShadows=M,N.numPointShadows=b,N.numSpotShadows=A,N.numSpotMaps=v,N.numLightProbes=C,n.version=sE++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let x=c[S];if(x.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),d++}else if(x.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),u++}else if(x.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Tx(s){let t=new oE(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function aE(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Tx(s),t.set(i,[a])):r>=o.length?(a=new Tx(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var lE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cE=`uniform sampler2D shadow_pass;
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
}`,hE=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],uE=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],wx=new be,hc=new O,lm=new O;function fE(s,t,e){let n=new ea,i=new lt,r=new lt,o=new ze,a=new cu,l=new hu,c={},h=e.maxTextureSize,d={[pr]:fn,[fn]:pr,[Ii]:Ii},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:lE,fragmentShader:cE}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ee;p.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new oe(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qr;let m=this.type;this.render=function(b,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===g_&&(te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qr);let T=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Li),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let V=m!==this.type;V&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(F=>F.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,F=b.length;D<F;D++){let G=b[D],k=G.shadow;if(k===void 0){te("WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let K=k.getFrameExtents();i.multiply(K),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,k.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=W,k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ua){if(G.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ln(i.x,i.y,{format:xr,type:An,minFilter:En,magFilter:En,generateMipmaps:!1}),k.map.texture.name=G.name+".shadowMap",k.map.depthTexture=new or(i.x,i.y,Di),k.map.depthTexture.name=G.name+".shadowMapDepth",k.map.depthTexture.format=rs,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Sn,k.map.depthTexture.magFilter=Sn}else G.isPointLight?(k.map=new gf(i.x),k.map.depthTexture=new nu(i.x,Yi)):(k.map=new ln(i.x,i.y),k.map.depthTexture=new or(i.x,i.y,Yi)),k.map.depthTexture.name=G.name+".shadowMap",k.map.depthTexture.format=rs,this.type===Qr?(k.map.depthTexture.compareFunction=W?df:ff,k.map.depthTexture.minFilter=En,k.map.depthTexture.magFilter=En):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Sn,k.map.depthTexture.magFilter=Sn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let P=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();G.isPointLight!==!0&&k.updateMatrices(G,v);for(let $=0;$<P;$++){let wt=k.getCamera($);if(G.isPointLight){let Et=k.camera,Xt=k.matrix,Gt=G.distance||Et.far;Gt!==Et.far&&(Et.far=Gt,Et.updateProjectionMatrix()),hc.setFromMatrixPosition(G.matrixWorld),Et.position.copy(hc),lm.copy(Et.position),lm.add(hE[$]),Et.up.copy(uE[$]),Et.lookAt(lm),Et.updateMatrixWorld(),Xt.makeTranslation(-hc.x,-hc.y,-hc.z),wx.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),k._frustum.setFromProjectionMatrix(wx,Et.coordinateSystem,Et.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,$),s.clear();else{$===0&&(s.setRenderTarget(k.map),s.clear());let Et=k.getViewport($);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),L.viewport(o)}n=k.getFrustum($),x(A,v,wt,G,this.type)}k.isPointLightShadow!==!0&&this.type===ua&&S(k,v),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(T,C,N)};function S(b,A){let v=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new ln(i.x,i.y,{format:xr,type:An}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,v,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,v,f,_,null)}function w(b,A,v,T){let C=null,N=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)C=N;else if(C=v.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=C.uuid,V=A.uuid,D=c[L];D===void 0&&(D={},c[L]=D);let F=D[V];F===void 0&&(F=C.clone(),D[V]=F,A.addEventListener("dispose",M)),C=F}if(C.visible=A.visible,C.wireframe=A.wireframe,T===ua?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=s.properties.get(C);L.light=v}return C}function x(b,A,v,T,C){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===ua)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let V=t.update(b),D=b.material;if(Array.isArray(D)){let F=V.groups;for(let G=0,k=F.length;G<k;G++){let K=F[G],W=D[K.materialIndex];if(W&&W.visible){let P=w(b,W,T,C);b.onBeforeShadow(s,b,A,v,V,P,K),s.renderBufferDirect(v,null,V,P,b,K),b.onAfterShadow(s,b,A,v,V,P,K)}}}else if(D.visible){let F=w(b,D,T,C);b.onBeforeShadow(s,b,A,v,V,F,null),s.renderBufferDirect(v,null,V,F,b,null),b.onAfterShadow(s,b,A,v,V,F,null)}}let L=b.children;for(let V=0,D=L.length;V<D;V++)x(L[V],A,v,T,C)}function M(b){b.target.removeEventListener("dispose",M);for(let v in c){let T=c[v],C=b.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function dE(s,t){function e(){let B=!1,_t=new ze,nt=null,Mt=new ze(0,0,0,0);return{setMask:function(Tt){nt!==Tt&&!B&&(s.colorMask(Tt,Tt,Tt,Tt),nt=Tt)},setLocked:function(Tt){B=Tt},setClear:function(Tt,rt,ut,at,Jt){Jt===!0&&(Tt*=at,rt*=at,ut*=at),_t.set(Tt,rt,ut,at),Mt.equals(_t)===!1&&(s.clearColor(Tt,rt,ut,at),Mt.copy(_t))},reset:function(){B=!1,nt=null,Mt.set(-1,0,0,0)}}}function n(){let B=!1,_t=!1,nt=null,Mt=null,Tt=null;return{setReversed:function(rt){if(_t!==rt){let ut=t.get("EXT_clip_control");rt?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),_t=rt;let at=Tt;Tt=null,this.setClear(at)}},getReversed:function(){return _t},setTest:function(rt){rt?tt(s.DEPTH_TEST):dt(s.DEPTH_TEST)},setMask:function(rt){nt!==rt&&!B&&(s.depthMask(rt),nt=rt)},setFunc:function(rt){if(_t&&(rt=K_[rt]),Mt!==rt){switch(rt){case kh:s.depthFunc(s.NEVER);break;case Vh:s.depthFunc(s.ALWAYS);break;case Hh:s.depthFunc(s.LESS);break;case Jo:s.depthFunc(s.LEQUAL);break;case Gh:s.depthFunc(s.EQUAL);break;case Wh:s.depthFunc(s.GEQUAL);break;case Xh:s.depthFunc(s.GREATER);break;case Yh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Mt=rt}},setLocked:function(rt){B=rt},setClear:function(rt){Tt!==rt&&(Tt=rt,_t&&(rt=1-rt),s.clearDepth(rt))},reset:function(){B=!1,nt=null,Mt=null,Tt=null,_t=!1}}}function i(){let B=!1,_t=null,nt=null,Mt=null,Tt=null,rt=null,ut=null,at=null,Jt=null;return{setTest:function(ct){B||(ct?tt(s.STENCIL_TEST):dt(s.STENCIL_TEST))},setMask:function(ct){_t!==ct&&!B&&(s.stencilMask(ct),_t=ct)},setFunc:function(ct,Qt,zt){(nt!==ct||Mt!==Qt||Tt!==zt)&&(s.stencilFunc(ct,Qt,zt),nt=ct,Mt=Qt,Tt=zt)},setOp:function(ct,Qt,zt){(rt!==ct||ut!==Qt||at!==zt)&&(s.stencilOp(ct,Qt,zt),rt=ct,ut=Qt,at=zt)},setLocked:function(ct){B=ct},setClear:function(ct){Jt!==ct&&(s.clearStencil(ct),Jt=ct)},reset:function(){B=!1,_t=null,nt=null,Mt=null,Tt=null,rt=null,ut=null,at=null,Jt=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,S=null,w=null,x=null,M=null,b=null,A=null,v=new Zt(0,0,0),T=0,C=!1,N=null,L=null,V=null,D=null,F=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,K=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=K>=2);let P=null,$={},wt=s.getParameter(s.SCISSOR_BOX),Et=s.getParameter(s.VIEWPORT),Xt=new ze().fromArray(wt),Gt=new ze().fromArray(Et);function $t(B,_t,nt,Mt){let Tt=new Uint8Array(4),rt=s.createTexture();s.bindTexture(B,rt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ut=0;ut<nt;ut++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(_t,0,s.RGBA,1,1,Mt,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(_t+ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return rt}let J={};J[s.TEXTURE_2D]=$t(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=$t(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=$t(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=$t(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(s.DEPTH_TEST),o.setFunc(Jo),U(!1),ft(Lp),tt(s.CULL_FACE),st(Li);function tt(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function dt(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function Ht(B,_t){return u[B]!==_t?(s.bindFramebuffer(B,_t),u[B]=_t,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=_t),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=_t),!0):!1}function xt(B,_t){let nt=p,Mt=!1;if(B){nt=f.get(_t),nt===void 0&&(nt=[],f.set(_t,nt));let Tt=B.textures;if(nt.length!==Tt.length||nt[0]!==s.COLOR_ATTACHMENT0){for(let rt=0,ut=Tt.length;rt<ut;rt++)nt[rt]=s.COLOR_ATTACHMENT0+rt;nt.length=Tt.length,Mt=!0}}else nt[0]!==s.BACK&&(nt[0]=s.BACK,Mt=!0);Mt&&s.drawBuffers(nt)}function It(B){return _!==B?(s.useProgram(B),_=B,!0):!1}let Nt={[jr]:s.FUNC_ADD,[x_]:s.FUNC_SUBTRACT,[v_]:s.FUNC_REVERSE_SUBTRACT};Nt[y_]=s.MIN,Nt[S_]=s.MAX;let Q={[M_]:s.ZERO,[b_]:s.ONE,[T_]:s.SRC_COLOR,[Up]:s.SRC_ALPHA,[P_]:s.SRC_ALPHA_SATURATE,[C_]:s.DST_COLOR,[E_]:s.DST_ALPHA,[w_]:s.ONE_MINUS_SRC_COLOR,[Op]:s.ONE_MINUS_SRC_ALPHA,[R_]:s.ONE_MINUS_DST_COLOR,[A_]:s.ONE_MINUS_DST_ALPHA,[I_]:s.CONSTANT_COLOR,[L_]:s.ONE_MINUS_CONSTANT_COLOR,[D_]:s.CONSTANT_ALPHA,[N_]:s.ONE_MINUS_CONSTANT_ALPHA};function st(B,_t,nt,Mt,Tt,rt,ut,at,Jt,ct){if(B===Li){g===!0&&(dt(s.BLEND),g=!1);return}if(g===!1&&(tt(s.BLEND),g=!0),B!==__){if(B!==m||ct!==C){if((S!==jr||M!==jr)&&(s.blendEquation(s.FUNC_ADD),S=jr,M=jr),ct)switch(B){case fa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fs:s.blendFunc(s.ONE,s.ONE);break;case Dp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Np:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ee("WebGLState: Invalid blending: ",B);break}else switch(B){case fa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dp:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Np:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",B);break}w=null,x=null,b=null,A=null,v.set(0,0,0),T=0,m=B,C=ct}return}Tt=Tt||_t,rt=rt||nt,ut=ut||Mt,(_t!==S||Tt!==M)&&(s.blendEquationSeparate(Nt[_t],Nt[Tt]),S=_t,M=Tt),(nt!==w||Mt!==x||rt!==b||ut!==A)&&(s.blendFuncSeparate(Q[nt],Q[Mt],Q[rt],Q[ut]),w=nt,x=Mt,b=rt,A=ut),(at.equals(v)===!1||Jt!==T)&&(s.blendColor(at.r,at.g,at.b,Jt),v.copy(at),T=Jt),m=B,C=!1}function ot(B,_t){B.side===Ii?dt(s.CULL_FACE):tt(s.CULL_FACE);let nt=B.side===fn;_t&&(nt=!nt),U(nt),B.blending===fa&&B.transparent===!1?st(Li):st(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let Mt=B.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Pt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?tt(s.SAMPLE_ALPHA_TO_COVERAGE):dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function U(B){N!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),N=B)}function ft(B){B!==p_?(tt(s.CULL_FACE),B!==L&&(B===Lp?s.cullFace(s.BACK):B===m_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):dt(s.CULL_FACE),L=B}function Ft(B){B!==V&&(k&&s.lineWidth(B),V=B)}function Pt(B,_t,nt){B?(tt(s.POLYGON_OFFSET_FILL),(D!==_t||F!==nt)&&(D=_t,F=nt,o.getReversed()&&(_t=-_t),s.polygonOffset(_t,nt))):dt(s.POLYGON_OFFSET_FILL)}function Ct(B){B?tt(s.SCISSOR_TEST):dt(s.SCISSOR_TEST)}function gt(B){B===void 0&&(B=s.TEXTURE0+G-1),P!==B&&(s.activeTexture(B),P=B)}function I(B,_t,nt){nt===void 0&&(P===null?nt=s.TEXTURE0+G-1:nt=P);let Mt=$[nt];Mt===void 0&&(Mt={type:void 0,texture:void 0},$[nt]=Mt),(Mt.type!==B||Mt.texture!==_t)&&(P!==nt&&(s.activeTexture(nt),P=nt),s.bindTexture(B,_t||J[B]),Mt.type=B,Mt.texture=_t)}function Kt(){let B=$[P];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Lt(){try{s.compressedTexImage2D(...arguments)}catch(B){ee("WebGLState:",B)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(B){ee("WebGLState:",B)}}function y(){try{s.texSubImage2D(...arguments)}catch(B){ee("WebGLState:",B)}}function H(){try{s.texSubImage3D(...arguments)}catch(B){ee("WebGLState:",B)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(B){ee("WebGLState:",B)}}function j(){try{s.compressedTexSubImage3D(...arguments)}catch(B){ee("WebGLState:",B)}}function mt(){try{s.texStorage2D(...arguments)}catch(B){ee("WebGLState:",B)}}function ht(){try{s.texStorage3D(...arguments)}catch(B){ee("WebGLState:",B)}}function et(){try{s.texImage2D(...arguments)}catch(B){ee("WebGLState:",B)}}function it(){try{s.texImage3D(...arguments)}catch(B){ee("WebGLState:",B)}}function yt(B){return d[B]!==void 0?d[B]:s.getParameter(B)}function Bt(B,_t){d[B]!==_t&&(s.pixelStorei(B,_t),d[B]=_t)}function St(B){Xt.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Xt.copy(B))}function vt(B){Gt.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Gt.copy(B))}function pt(B,_t){let nt=c.get(_t);nt===void 0&&(nt=new WeakMap,c.set(_t,nt));let Mt=nt.get(B);Mt===void 0&&(Mt=s.getUniformBlockIndex(_t,B.name),nt.set(B,Mt))}function Yt(B,_t){let Mt=c.get(_t).get(B);l.get(_t)!==Mt&&(s.uniformBlockBinding(_t,Mt,B.__bindingPointIndex),l.set(_t,Mt))}function jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},P=null,$={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,S=null,w=null,x=null,M=null,b=null,A=null,v=new Zt(0,0,0),T=0,C=!1,N=null,L=null,V=null,D=null,F=null,Xt.set(0,0,s.canvas.width,s.canvas.height),Gt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:dt,bindFramebuffer:Ht,drawBuffers:xt,useProgram:It,setBlending:st,setMaterial:ot,setFlipSided:U,setCullFace:ft,setLineWidth:Ft,setPolygonOffset:Pt,setScissorTest:Ct,activeTexture:gt,bindTexture:I,unbindTexture:Kt,compressedTexImage2D:Lt,compressedTexImage3D:R,texImage2D:et,texImage3D:it,pixelStorei:Bt,getParameter:yt,updateUBOMapping:pt,uniformBlockBinding:Yt,texStorage2D:mt,texStorage3D:ht,texSubImage2D:y,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:j,scissor:St,viewport:vt,reset:jt}}function pE(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(R){}function _(R,y){return p?new OffscreenCanvas(R,y):ml("canvas")}function g(R,y,H){let X=1,j=Lt(R);if((j.width>H||j.height>H)&&(X=H/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let mt=Math.floor(X*j.width),ht=Math.floor(X*j.height);u===void 0&&(u=_(mt,ht));let et=y?_(mt,ht):u;return et.width=mt,et.height=ht,et.getContext("2d").drawImage(R,0,0,mt,ht),te("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+mt+"x"+ht+")."),et}else return"data"in R&&te("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function S(R){s.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(R,y,H,X,j,mt=!1){if(R!==null){if(s[R]!==void 0)return s[R];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ht;X&&(ht=t.get("EXT_texture_norm16"),ht||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=y;if(y===s.RED&&(H===s.FLOAT&&(et=s.R32F),H===s.HALF_FLOAT&&(et=s.R16F),H===s.UNSIGNED_BYTE&&(et=s.R8),H===s.UNSIGNED_SHORT&&ht&&(et=ht.R16_EXT),H===s.SHORT&&ht&&(et=ht.R16_SNORM_EXT)),y===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(et=s.R8UI),H===s.UNSIGNED_SHORT&&(et=s.R16UI),H===s.UNSIGNED_INT&&(et=s.R32UI),H===s.BYTE&&(et=s.R8I),H===s.SHORT&&(et=s.R16I),H===s.INT&&(et=s.R32I)),y===s.RG&&(H===s.FLOAT&&(et=s.RG32F),H===s.HALF_FLOAT&&(et=s.RG16F),H===s.UNSIGNED_BYTE&&(et=s.RG8),H===s.UNSIGNED_SHORT&&ht&&(et=ht.RG16_EXT),H===s.SHORT&&ht&&(et=ht.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(et=s.RG8UI),H===s.UNSIGNED_SHORT&&(et=s.RG16UI),H===s.UNSIGNED_INT&&(et=s.RG32UI),H===s.BYTE&&(et=s.RG8I),H===s.SHORT&&(et=s.RG16I),H===s.INT&&(et=s.RG32I)),y===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(et=s.RGB8UI),H===s.UNSIGNED_SHORT&&(et=s.RGB16UI),H===s.UNSIGNED_INT&&(et=s.RGB32UI),H===s.BYTE&&(et=s.RGB8I),H===s.SHORT&&(et=s.RGB16I),H===s.INT&&(et=s.RGB32I)),y===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),H===s.UNSIGNED_INT&&(et=s.RGBA32UI),H===s.BYTE&&(et=s.RGBA8I),H===s.SHORT&&(et=s.RGBA16I),H===s.INT&&(et=s.RGBA32I)),y===s.RGB&&(H===s.UNSIGNED_SHORT&&ht&&(et=ht.RGB16_EXT),H===s.SHORT&&ht&&(et=ht.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(et=s.R11F_G11F_B10F)),y===s.RGBA){let it=mt?pl:me.getTransfer(j);H===s.FLOAT&&(et=s.RGBA32F),H===s.HALF_FLOAT&&(et=s.RGBA16F),H===s.UNSIGNED_BYTE&&(et=it===ye?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&ht&&(et=ht.RGBA16_EXT),H===s.SHORT&&ht&&(et=ht.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(R,y){let H;return R?y===null||y===Yi||y===pa?H=s.DEPTH24_STENCIL8:y===Di?H=s.DEPTH32F_STENCIL8:y===da&&(H=s.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Yi||y===pa?H=s.DEPTH_COMPONENT24:y===Di?H=s.DEPTH_COMPONENT32F:y===da&&(H=s.DEPTH_COMPONENT16),H}function b(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Sn&&R.minFilter!==En?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){let y=R.target;y.removeEventListener("dispose",A),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function v(R){let y=R.target;y.removeEventListener("dispose",v),N(y)}function T(R){let y=n.get(R);if(y.__webglInit===void 0)return;let H=R.source,X=f.get(H);if(X){let j=X[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&C(R),Object.keys(X).length===0&&f.delete(H)}n.remove(R)}function C(R){let y=n.get(R);s.deleteTexture(y.__webglTexture);let H=R.source,X=f.get(H);delete X[y.__cacheKey],o.memory.textures--}function N(R){let y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let j=0;j<y.__webglFramebuffer[X].length;j++)s.deleteFramebuffer(y.__webglFramebuffer[X][j]);else s.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)s.deleteFramebuffer(y.__webglFramebuffer[X]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let H=R.textures;for(let X=0,j=H.length;X<j;X++){let mt=n.get(H[X]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(H[X])}n.remove(R)}let L=0;function V(){L=0}function D(){return L}function F(R){L=R}function G(){let R=L;return R>=i.maxTextures&&te("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function k(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function K(R,y){let H=n.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let X=R.image;if(X===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(H,R,y);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+y)}function W(R,y){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){dt(H,R,y);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+y)}function P(R,y){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){dt(H,R,y);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+y)}function $(R,y){let H=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){Ht(H,R,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+y)}let wt={[qh]:s.REPEAT,[is]:s.CLAMP_TO_EDGE,[Zh]:s.MIRRORED_REPEAT},Et={[Sn]:s.NEAREST,[F_]:s.NEAREST_MIPMAP_NEAREST,[ec]:s.NEAREST_MIPMAP_LINEAR,[En]:s.LINEAR,[Au]:s.LINEAR_MIPMAP_NEAREST,[gr]:s.LINEAR_MIPMAP_LINEAR},Xt={[V_]:s.NEVER,[Y_]:s.ALWAYS,[H_]:s.LESS,[ff]:s.LEQUAL,[G_]:s.EQUAL,[df]:s.GEQUAL,[W_]:s.GREATER,[X_]:s.NOTEQUAL};function Gt(R,y){if(y.type===Di&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===En||y.magFilter===Au||y.magFilter===ec||y.magFilter===gr||y.minFilter===En||y.minFilter===Au||y.minFilter===ec||y.minFilter===gr)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,wt[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,wt[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,wt[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Et[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Et[y.minFilter]),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Xt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Sn||y.minFilter!==ec&&y.minFilter!==gr||y.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $t(R,y){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));let X=y.source,j=f.get(X);j===void 0&&(j={},f.set(X,j));let mt=k(y);if(mt!==R.__cacheKey){j[mt]===void 0&&(j[mt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),j[mt].usedTimes++;let ht=j[R.__cacheKey];ht!==void 0&&(j[R.__cacheKey].usedTimes--,ht.usedTimes===0&&C(y)),R.__cacheKey=mt,R.__webglTexture=j[mt].texture}return H}function J(R,y,H){return Math.floor(Math.floor(R/H)/y)}function tt(R,y,H,X){let mt=R.updateRanges;if(mt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,H,X,y.data);else{mt.sort((Bt,St)=>Bt.start-St.start);let ht=0;for(let Bt=1;Bt<mt.length;Bt++){let St=mt[ht],vt=mt[Bt],pt=St.start+St.count,Yt=J(vt.start,y.width,4),jt=J(St.start,y.width,4);vt.start<=pt+1&&Yt===jt&&J(vt.start+vt.count-1,y.width,4)===Yt?St.count=Math.max(St.count,vt.start+vt.count-St.start):(++ht,mt[ht]=vt)}mt.length=ht+1;let et=e.getParameter(s.UNPACK_ROW_LENGTH),it=e.getParameter(s.UNPACK_SKIP_PIXELS),yt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Bt=0,St=mt.length;Bt<St;Bt++){let vt=mt[Bt],pt=Math.floor(vt.start/4),Yt=Math.ceil(vt.count/4),jt=pt%y.width,B=Math.floor(pt/y.width),_t=Yt,nt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(s.UNPACK_SKIP_ROWS,B),e.texSubImage2D(s.TEXTURE_2D,0,jt,B,_t,nt,H,X,y.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,et),e.pixelStorei(s.UNPACK_SKIP_PIXELS,it),e.pixelStorei(s.UNPACK_SKIP_ROWS,yt)}}function dt(R,y,H){let X=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=s.TEXTURE_3D);let j=$t(R,y),mt=y.source;e.bindTexture(X,R.__webglTexture,s.TEXTURE0+H);let ht=n.get(mt);if(mt.version!==ht.__version||j===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap!="undefined"&&y.image instanceof ImageBitmap)===!1){let nt=me.getPrimaries(me.workingColorSpace),Mt=y.colorSpace===Fs?null:me.getPrimaries(y.colorSpace),Tt=y.colorSpace===Fs||nt===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let it=g(y.image,!1,i.maxTextureSize);it=Kt(y,it);let yt=r.convert(y.format,y.colorSpace),Bt=r.convert(y.type),St=x(y.internalFormat,yt,Bt,y.normalized,y.colorSpace,y.isVideoTexture);Gt(X,y);let vt,pt=y.mipmaps,Yt=y.isVideoTexture!==!0,jt=ht.__version===void 0||j===!0,B=mt.dataReady,_t=b(y,it);if(y.isDepthTexture)St=M(y.format===_r,y.type),jt&&(Yt?e.texStorage2D(s.TEXTURE_2D,1,St,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,St,it.width,it.height,0,yt,Bt,null));else if(y.isDataTexture)if(pt.length>0){Yt&&jt&&e.texStorage2D(s.TEXTURE_2D,_t,St,pt[0].width,pt[0].height);for(let nt=0,Mt=pt.length;nt<Mt;nt++)vt=pt[nt],Yt?B&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,vt.width,vt.height,yt,Bt,vt.data):e.texImage2D(s.TEXTURE_2D,nt,St,vt.width,vt.height,0,yt,Bt,vt.data);y.generateMipmaps=!1}else Yt?(jt&&e.texStorage2D(s.TEXTURE_2D,_t,St,it.width,it.height),B&&tt(y,it,yt,Bt)):e.texImage2D(s.TEXTURE_2D,0,St,it.width,it.height,0,yt,Bt,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Yt&&jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,St,pt[0].width,pt[0].height,it.depth);for(let nt=0,Mt=pt.length;nt<Mt;nt++)if(vt=pt[nt],y.format!==Ni)if(yt!==null)if(Yt){if(B)if(y.layerUpdates.size>0){let Tt=Kp(vt.width,vt.height,y.format,y.type);for(let rt of y.layerUpdates){let ut=vt.data.subarray(rt*Tt/vt.data.BYTES_PER_ELEMENT,(rt+1)*Tt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,rt,vt.width,vt.height,1,yt,ut)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,vt.width,vt.height,it.depth,yt,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,St,vt.width,vt.height,it.depth,0,vt.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,vt.width,vt.height,it.depth,yt,Bt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,St,vt.width,vt.height,it.depth,0,yt,Bt,vt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Yt&&jt&&e.texStorage2D(s.TEXTURE_2D,_t,St,pt[0].width,pt[0].height);for(let nt=0,Mt=pt.length;nt<Mt;nt++)vt=pt[nt],y.format!==Ni?yt!==null?Yt?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,vt.width,vt.height,yt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,St,vt.width,vt.height,0,vt.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?B&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,vt.width,vt.height,yt,Bt,vt.data):e.texImage2D(s.TEXTURE_2D,nt,St,vt.width,vt.height,0,yt,Bt,vt.data)}else if(y.isDataArrayTexture)if(Yt){if(jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,_t,St,it.width,it.height,it.depth),B)if(y.layerUpdates.size>0){let nt=Kp(it.width,it.height,y.format,y.type);for(let Mt of y.layerUpdates){let Tt=it.data.subarray(Mt*nt/it.data.BYTES_PER_ELEMENT,(Mt+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Mt,it.width,it.height,1,yt,Bt,Tt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,Bt,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,it.width,it.height,it.depth,0,yt,Bt,it.data);else if(y.isData3DTexture)Yt?(jt&&e.texStorage3D(s.TEXTURE_3D,_t,St,it.width,it.height,it.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,Bt,it.data)):e.texImage3D(s.TEXTURE_3D,0,St,it.width,it.height,it.depth,0,yt,Bt,it.data);else if(y.isFramebufferTexture){if(jt)if(Yt)e.texStorage2D(s.TEXTURE_2D,_t,St,it.width,it.height);else{let nt=it.width,Mt=it.height;for(let Tt=0;Tt<_t;Tt++)e.texImage2D(s.TEXTURE_2D,Tt,St,nt,Mt,0,yt,Bt,null),nt>>=1,Mt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let nt=s.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),d.add(y),nt.onpaint=Mt=>{let Tt=Mt.changedElements;for(let rt of d)Tt.includes(rt.image)&&(rt.needsUpdate=!0)},nt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,it);else{let Tt=s.RGBA,rt=s.RGBA,ut=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Tt,rt,ut,it)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(pt.length>0){if(Yt&&jt){let nt=Lt(pt[0]);e.texStorage2D(s.TEXTURE_2D,_t,St,nt.width,nt.height)}for(let nt=0,Mt=pt.length;nt<Mt;nt++)vt=pt[nt],Yt?B&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,yt,Bt,vt):e.texImage2D(s.TEXTURE_2D,nt,St,yt,Bt,vt);y.generateMipmaps=!1}else if(Yt){if(jt){let nt=Lt(it);e.texStorage2D(s.TEXTURE_2D,_t,St,nt.width,nt.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,Bt,it)}else e.texImage2D(s.TEXTURE_2D,0,St,yt,Bt,it);m(y)&&S(X),ht.__version=mt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Ht(R,y,H){if(y.image.length!==6)return;let X=$t(R,y),j=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);let mt=n.get(j);if(j.version!==mt.__version||X===!0){e.activeTexture(s.TEXTURE0+H);let ht=me.getPrimaries(me.workingColorSpace),et=y.colorSpace===Fs?null:me.getPrimaries(y.colorSpace),it=y.colorSpace===Fs||ht===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let yt=y.isCompressedTexture||y.image[0].isCompressedTexture,Bt=y.image[0]&&y.image[0].isDataTexture,St=[];for(let rt=0;rt<6;rt++)!yt&&!Bt?St[rt]=g(y.image[rt],!0,i.maxCubemapSize):St[rt]=Bt?y.image[rt].image:y.image[rt],St[rt]=Kt(y,St[rt]);let vt=St[0],pt=r.convert(y.format,y.colorSpace),Yt=r.convert(y.type),jt=x(y.internalFormat,pt,Yt,y.normalized,y.colorSpace),B=y.isVideoTexture!==!0,_t=mt.__version===void 0||X===!0,nt=j.dataReady,Mt=b(y,vt);Gt(s.TEXTURE_CUBE_MAP,y);let Tt;if(yt){B&&_t&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,jt,vt.width,vt.height);for(let rt=0;rt<6;rt++){Tt=St[rt].mipmaps;for(let ut=0;ut<Tt.length;ut++){let at=Tt[ut];y.format!==Ni?pt!==null?B?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut,0,0,at.width,at.height,pt,at.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut,jt,at.width,at.height,0,at.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut,0,0,at.width,at.height,pt,Yt,at.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut,jt,at.width,at.height,0,pt,Yt,at.data)}}}else{if(Tt=y.mipmaps,B&&_t){Tt.length>0&&Mt++;let rt=Lt(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Mt,jt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Bt){B?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,St[rt].width,St[rt].height,pt,Yt,St[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,jt,St[rt].width,St[rt].height,0,pt,Yt,St[rt].data);for(let ut=0;ut<Tt.length;ut++){let Jt=Tt[ut].image[rt].image;B?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut+1,0,0,Jt.width,Jt.height,pt,Yt,Jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut+1,jt,Jt.width,Jt.height,0,pt,Yt,Jt.data)}}else{B?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,pt,Yt,St[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,jt,pt,Yt,St[rt]);for(let ut=0;ut<Tt.length;ut++){let at=Tt[ut];B?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut+1,0,0,pt,Yt,at.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut+1,jt,pt,Yt,at.image[rt])}}}m(y)&&S(s.TEXTURE_CUBE_MAP),mt.__version=j.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function xt(R,y,H,X,j,mt){let ht=r.convert(H.format,H.colorSpace),et=r.convert(H.type),it=x(H.internalFormat,ht,et,H.normalized,H.colorSpace),yt=n.get(y),Bt=n.get(H);if(Bt.__renderTarget=y,!yt.__hasExternalTextures){let St=Math.max(1,y.width>>mt),vt=Math.max(1,y.height>>mt);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,mt,it,St,vt,y.depth,0,ht,et,null):e.texImage2D(j,mt,it,St,vt,0,ht,et,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),gt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,j,Bt.__webglTexture,0,Ct(y)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,j,Bt.__webglTexture,mt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(R,y,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer){let X=y.depthTexture,j=X&&X.isDepthTexture?X.type:null,mt=M(y.stencilBuffer,j),ht=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;gt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(y),mt,y.width,y.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(y),mt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,mt,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,R)}else{let X=y.textures;for(let j=0;j<X.length;j++){let mt=X[j],ht=r.convert(mt.format,mt.colorSpace),et=r.convert(mt.type),it=x(mt.internalFormat,ht,et,mt.normalized,mt.colorSpace);gt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(y),it,y.width,y.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(y),it,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,it,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(R,y,H){let X=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(y.depthTexture);if(j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Gt(s.TEXTURE_CUBE_MAP,y.depthTexture);let yt=r.convert(y.depthTexture.format),Bt=r.convert(y.depthTexture.type),St;y.depthTexture.format===rs?St=s.DEPTH_COMPONENT24:y.depthTexture.format===_r&&(St=s.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,St,y.width,y.height,0,yt,Bt,null)}}else K(y.depthTexture,0);let mt=j.__webglTexture,ht=Ct(y),et=X?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,it=y.depthTexture.format===_r?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===rs)gt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,et,mt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,it,et,mt,0);else if(y.depthTexture.format===_r)gt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,et,mt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,it,et,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(R){let y=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let X=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=X}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)Nt(y.__webglFramebuffer[X],R,X);else{let X=R.texture.mipmaps;X&&X.length>0?Nt(y.__webglFramebuffer[0],R,0):Nt(y.__webglFramebuffer,R,0)}else if(H){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=s.createRenderbuffer(),It(y.__webglDepthbuffer[X],R,!1);else{let j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=y.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,mt)}}else{let X=R.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),It(y.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,mt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(R,y,H){let X=n.get(R);y!==void 0&&xt(X.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Q(R)}function ot(R){let y=R.texture,H=n.get(R),X=n.get(y);R.addEventListener("dispose",v);let j=R.textures,mt=R.isWebGLCubeRenderTarget===!0,ht=j.length>1;if(ht||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=y.version,o.memory.textures++),mt){H.__webglFramebuffer=[];for(let et=0;et<6;et++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[et]=[];for(let it=0;it<y.mipmaps.length;it++)H.__webglFramebuffer[et][it]=s.createFramebuffer()}else H.__webglFramebuffer[et]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let et=0;et<y.mipmaps.length;et++)H.__webglFramebuffer[et]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(ht)for(let et=0,it=j.length;et<it;et++){let yt=n.get(j[et]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&gt(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let et=0;et<j.length;et++){let it=j[et];H.__webglColorRenderbuffer[et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[et]);let yt=r.convert(it.format,it.colorSpace),Bt=r.convert(it.type),St=x(it.internalFormat,yt,Bt,it.normalized,it.colorSpace,R.isXRRenderTarget===!0),vt=Ct(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,St,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,H.__webglColorRenderbuffer[et])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),It(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Gt(s.TEXTURE_CUBE_MAP,y);for(let et=0;et<6;et++)if(y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)xt(H.__webglFramebuffer[et][it],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,it);else xt(H.__webglFramebuffer[et],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(y)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let et=0,it=j.length;et<it;et++){let yt=j[et],Bt=n.get(yt),St=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(St=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(St,Bt.__webglTexture),Gt(St,yt),xt(H.__webglFramebuffer,R,yt,s.COLOR_ATTACHMENT0+et,St,0),m(yt)&&S(St)}e.unbindTexture()}else{let et=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(et=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(et,X.__webglTexture),Gt(et,y),y.mipmaps&&y.mipmaps.length>0)for(let it=0;it<y.mipmaps.length;it++)xt(H.__webglFramebuffer[it],R,y,s.COLOR_ATTACHMENT0,et,it);else xt(H.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,et,0);m(y)&&S(et),e.unbindTexture()}R.depthBuffer&&Q(R)}function U(R){let y=R.textures;for(let H=0,X=y.length;H<X;H++){let j=y[H];if(m(j)){let mt=w(R),ht=n.get(j).__webglTexture;e.bindTexture(mt,ht),S(mt),e.unbindTexture()}}}let ft=[],Ft=[];function Pt(R){if(R.samples>0){if(gt(R)===!1){let y=R.textures,H=R.width,X=R.height,j=s.COLOR_BUFFER_BIT,mt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=n.get(R),et=y.length>1;if(et)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let it=R.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),et){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[yt]);let Bt=n.get(y[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Bt,0)}s.blitFramebuffer(0,0,H,X,0,0,H,X,j,s.NEAREST),l===!0&&(ft.length=0,Ft.length=0,ft.push(s.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ft.push(mt),Ft.push(mt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ft)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),et)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,ht.__webglColorRenderbuffer[yt]);let Bt=n.get(y[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,Bt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Ct(R){return Math.min(i.maxSamples,R.samples)}function gt(R){let y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function I(R){let y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Kt(R,y){let H=R.colorSpace,X=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==dl&&H!==Fs&&(me.getTransfer(H)===ye?(X!==Ni||j!==oi)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",H)),y}function Lt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.getTextureUnits=D,this.setTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=P,this.setTextureCube=$,this.rebindTextures=st,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function mE(s,t){function e(n,i=Fs){let r,o=me.getTransfer(i);if(n===oi)return s.UNSIGNED_BYTE;if(n===Ru)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Pu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===kp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Vp)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bp)return s.BYTE;if(n===zp)return s.SHORT;if(n===da)return s.UNSIGNED_SHORT;if(n===Cu)return s.INT;if(n===Yi)return s.UNSIGNED_INT;if(n===Di)return s.FLOAT;if(n===An)return s.HALF_FLOAT;if(n===Hp)return s.ALPHA;if(n===Gp)return s.RGB;if(n===Ni)return s.RGBA;if(n===rs)return s.DEPTH_COMPONENT;if(n===_r)return s.DEPTH_STENCIL;if(n===Iu)return s.RED;if(n===Lu)return s.RED_INTEGER;if(n===xr)return s.RG;if(n===Du)return s.RG_INTEGER;if(n===Nu)return s.RGBA_INTEGER;if(n===nc||n===ic||n===sc||n===rc)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ic)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uu||n===Ou||n===Fu||n===Bu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ou)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zu||n===ku||n===Vu||n===Hu||n===Gu||n===oc||n===Wu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zu||n===ku)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vu)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hu)return r.COMPRESSED_R11_EAC;if(n===Gu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oc)return r.COMPRESSED_RG11_EAC;if(n===Wu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xu||n===Yu||n===qu||n===Zu||n===Ju||n===$u||n===Ku||n===Qu||n===ju||n===tf||n===ef||n===nf||n===sf||n===rf)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xu)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yu)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qu)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zu)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ju)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$u)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ku)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qu)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ju)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tf)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ef)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nf)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sf)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rf)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===of||n===af||n===lf)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===of)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===af)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cf||n===hf||n===ac||n===uf)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===cf)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pa?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var gE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_E=`
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

}`,gm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new wl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:gE,fragmentShader:_E,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new lr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_m=class extends os{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding!="undefined",g=new gm,m={},S=e.getContextAttributes(),w=null,x=null,M=[],b=[],A=new lt,v=null,T=null,C=new an;C.viewport=new ze;let N=new an;N.viewport=new ze;let L=[C,N],V=new Mu,D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=M[J];return tt===void 0&&(tt=new ta,M[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=M[J];return tt===void 0&&(tt=new ta,M[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=M[J];return tt===void 0&&(tt=new ta,M[J]=tt),tt.getHandSpace()};function G(J){let tt=b.indexOf(J.inputSource);if(tt===-1)return;let dt=M[tt];dt!==void 0&&(dt.update(J.inputSource,J.frame,c||o),dt.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",K);for(let J=0;J<M.length;J++){let tt=b[J];tt!==null&&(b[J]=null,M[J].disconnect(tt))}D=null,F=null,g.reset();for(let J in m)delete m[J];if(t.setRenderTarget(w),f=null,u=null,d=null,i=null,x=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",k),i.addEventListener("inputsourceschange",K),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Ht=null,xt=null;S.depth&&(xt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=S.stencil?_r:rs,Ht=S.stencil?pa:Yi);let It={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(It),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new ln(u.textureWidth,u.textureHeight,{format:Ni,type:oi,depthTexture:new or(u.textureWidth,u.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let dt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ln(f.framebufferWidth,f.framebufferHeight,{format:Ni,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(J){for(let tt=0;tt<J.removed.length;tt++){let dt=J.removed[tt],Ht=b.indexOf(dt);Ht>=0&&(b[Ht]=null,M[Ht].disconnect(dt))}for(let tt=0;tt<J.added.length;tt++){let dt=J.added[tt],Ht=b.indexOf(dt);if(Ht===-1){for(let It=0;It<M.length;It++)if(It>=b.length){b.push(dt),Ht=It;break}else if(b[It]===null){b[It]=dt,Ht=It;break}if(Ht===-1)break}let xt=M[Ht];xt&&xt.connect(dt)}}let W=new O,P=new O;function $(J,tt,dt){W.setFromMatrixPosition(tt.matrixWorld),P.setFromMatrixPosition(dt.matrixWorld);let Ht=W.distanceTo(P),xt=tt.projectionMatrix.elements,It=dt.projectionMatrix.elements,Nt=xt[14]/(xt[10]-1),Q=xt[14]/(xt[10]+1),st=(xt[9]+1)/xt[5],ot=(xt[9]-1)/xt[5],U=(xt[8]-1)/xt[0],ft=(It[8]+1)/It[0],Ft=Nt*U,Pt=Nt*ft,Ct=Ht/(-U+ft),gt=Ct*-U;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(gt),J.translateZ(Ct),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),xt[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let I=Nt+Ct,Kt=Q+Ct,Lt=Ft-gt,R=Pt+(Ht-gt),y=st*Q/Kt*I,H=ot*Q/Kt*I;J.projectionMatrix.makePerspective(Lt,R,y,H,I,Kt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function wt(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let tt=J.near,dt=J.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(dt=g.depthFar)),V.near=N.near=C.near=tt,V.far=N.far=C.far=dt,(D!==V.near||F!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),D=V.near,F=V.far),V.layers.mask=J.layers.mask|6,C.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let Ht=J.parent,xt=V.cameras;wt(V,Ht);for(let It=0;It<xt.length;It++)wt(xt[It],Ht);xt.length===2?$(V,C,N):V.projectionMatrix.copy(C.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),Et(J,V,Ht)};function Et(J,tt,dt){dt===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(dt.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=qr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(J){return m[J]};let Xt=null;function Gt(J,tt){if(h=tt.getViewerPose(c||o),p=tt,h!==null){let dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ht=!1;dt.length!==V.cameras.length&&(V.cameras.length=0,Ht=!0);for(let Q=0;Q<dt.length;Q++){let st=dt[Q],ot=null;if(f!==null)ot=f.getViewport(st);else{let ft=d.getViewSubImage(u,st);ot=ft.viewport,Q===0&&(t.setRenderTargetTextures(x,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(x))}let U=L[Q];U===void 0&&(U=new an,U.layers.enable(Q),U.viewport=new ze,L[Q]=U),U.matrix.fromArray(st.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(st.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(ot.x,ot.y,ot.width,ot.height),Q===0&&(V.matrix.copy(U.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ht===!0&&V.cameras.push(U)}let xt=i.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Q=d.getDepthInformation(dt[0]);Q&&Q.isValid&&Q.texture&&g.init(Q,i.renderState)}if(xt&&xt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Q=0;Q<dt.length;Q++){let st=dt[Q].camera;if(st){let ot=m[st];ot||(ot=new wl,m[st]=ot);let U=d.getCameraImage(st);ot.sourceTexture=U}}}}for(let dt=0;dt<M.length;dt++){let Ht=b[dt],xt=M[dt];Ht!==null&&xt!==void 0&&xt.update(Ht,tt,c||o)}Xt&&Xt(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}let $t=new Ex;$t.setAnimationLoop(Gt),this.setAnimationLoop=function(J){Xt=J},this.dispose=function(){}}},xE=new be,Lx=new ie;Lx.set(-1,0,0,0,1,0,0,0,1);function vE(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Zp(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,S,w,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,S,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===fn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===fn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=t.get(m),w=S.envMap,x=S.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(xE.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Lx),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let S=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yE(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let b=M.program;n.uniformBlockBinding(x,b)}function c(x,M){let b=i[x.id];b===void 0&&(g(x),b=h(x),i[x.id]=b,x.addEventListener("dispose",S));let A=M.program;n.updateUBOMapping(x,A);let v=t.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){let M=d();x.__bindingPointIndex=M;let b=s.createBuffer(),A=x.__size,v=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,A,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,b),b}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let M=i[x.id],b=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let v=0,T=b.length;v<T;v++){let C=b[v];if(Array.isArray(C))for(let N=0,L=C.length;N<L;N++)f(C[N],v,N,A);else f(C,v,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,M,b,A){if(_(x,M,b,A)===!0){let v=x.__offset,T=x.value;if(Array.isArray(T)){let C=0;for(let N=0;N<T.length;N++){let L=T[N],V=m(L);p(L,x.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,x.__data)}}function p(x,M,b){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,b)}function _(x,M,b,A){let v=x.value,T=M+"_"+b;if(A[T]===void 0)return typeof v=="number"||typeof v=="boolean"?A[T]=v:ArrayBuffer.isView(v)?A[T]=v.slice():A[T]=v.clone(),!0;{let C=A[T];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return A[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function g(x){let M=x.uniforms,b=0,A=16;for(let T=0,C=M.length;T<C;T++){let N=Array.isArray(M[T])?M[T]:[M[T]];for(let L=0,V=N.length;L<V;L++){let D=N[L],F=Array.isArray(D.value)?D.value:[D.value];for(let G=0,k=F.length;G<k;G++){let K=F[G],W=m(K),P=b%A,$=P%W.boundary,wt=P+$;b+=$,wt!==0&&A-wt<W.storage&&(b+=A-wt),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=W.storage}}}let v=b%A;return v>0&&(b+=A-v),x.__size=b,x.__cache={},this}function m(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):te("WebGLRenderer: Unsupported uniform value type.",x),M}function S(x){let M=x.target;M.removeEventListener("dispose",S);let b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function w(){for(let x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:w}}var SE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ds=null;function ME(){return ds===null&&(ds=new yl(SE,16,16,xr,An),ds.name="DFG_LUT",ds.minFilter=En,ds.magFilter=En,ds.wrapS=is,ds.wrapT=is,ds.generateMipmaps=!1,ds.needsUpdate=!0),ds}var xa=class{constructor(t={}){let{canvas:e=Z_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=oi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,g=new Set([Nu,Du,Lu]),m=new Set([oi,Yi,da,pa,Ru,Pu]),S=new Uint32Array(4),w=new Int32Array(4),x=new O,M=null,b=null,A=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,L=null,V=null,D=null,F=null;this._outputColorSpace=yn;let G=0,k=0,K=null,W=-1,P=null,$=new ze,wt=new ze,Et=null,Xt=new Zt(0),Gt=0,$t=e.width,J=e.height,tt=1,dt=null,Ht=null,xt=new ze(0,0,$t,J),It=new ze(0,0,$t,J),Nt=!1,Q=new ea,st=!1,ot=!1,U=new be,ft=new O,Ft=new ze,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function gt(){return K===null?tt:1}let I=n;function Kt(E,z){return e.getContext(E,z)}let Lt,R,y,H,X,j,mt,ht,et,it,yt,Bt,St,vt,pt,Yt,jt,B,_t,nt,Mt,Tt,rt;try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Jt,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",Qt,!1),I===null){let z="webgl2";if(I=Kt(z,E),I===null)throw Kt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ut()}catch(E){throw e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",Qt,!1),ee("WebGLRenderer: "+E.message),E}function ut(){Lt=new Rw(I),Lt.init(),Mt=new mE(I,Lt),R=new vw(I,Lt,t,Mt),y=new dE(I,Lt),R.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),V=I.createFramebuffer(),D=I.createFramebuffer(),F=I.createFramebuffer(),H=new Lw(I),X=new j1,j=new pE(I,Lt,y,X,R,Mt,H),mt=new Cw(C),ht=new NM(I),Tt=new _w(I,ht),et=new Pw(I,ht,H,Tt),it=new Nw(I,et,ht,Tt,H),B=new Dw(I,R,j),pt=new yw(X),yt=new Q1(C,mt,Lt,R,Tt,pt),Bt=new vE(C,X),St=new eE,vt=new aE(Lt),jt=new gw(C,mt,y,it,p,l),Yt=new fE(C,it,R),rt=new yE(I,H,R,y),_t=new xw(I,Lt,H),nt=new Iw(I,Lt,H),H.programs=yt.programs,C.capabilities=R,C.extensions=Lt,C.properties=X,C.renderLists=St,C.shadowMap=Yt,C.state=y,C.info=H}_!==oi&&(T=new Ow(_,e.width,e.height,a,i,r));let at=new _m(C,I);this.xr=at,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=Lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(E){E!==void 0&&(tt=E,this.setSize($t,J,!1))},this.getSize=function(E){return E.set($t,J)},this.setSize=function(E,z,Z=!0){if(at.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=E,J=z,e.width=Math.floor(E*tt),e.height=Math.floor(z*tt),Z===!0&&(e.style.width=E+"px",e.style.height=z+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set($t*tt,J*tt).floor()},this.setDrawingBufferSize=function(E,z,Z){$t=E,J=z,tt=Z,e.width=Math.floor(E*Z),e.height=Math.floor(z*Z),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(_===oi){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy($)},this.getViewport=function(E){return E.copy(xt)},this.setViewport=function(E,z,Z,Y){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,z,Z,Y),y.viewport($.copy(xt).multiplyScalar(tt).round())},this.getScissor=function(E){return E.copy(It)},this.setScissor=function(E,z,Z,Y){E.isVector4?It.set(E.x,E.y,E.z,E.w):It.set(E,z,Z,Y),y.scissor(wt.copy(It).multiplyScalar(tt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(E){y.setScissorTest(Nt=E)},this.setOpaqueSort=function(E){dt=E},this.setTransparentSort=function(E){Ht=E},this.getClearColor=function(E){return E.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,Z=!0){let Y=0;if(E){let q=!1;if(K!==null){let bt=K.texture.format;q=g.has(bt)}if(q){let bt=K.texture.type,Ut=m.has(bt),Rt=jt.getClearColor(),kt=jt.getClearAlpha(),qt=Rt.r,ae=Rt.g,ge=Rt.b;Ut?(S[0]=qt,S[1]=ae,S[2]=ge,S[3]=kt,I.clearBufferuiv(I.COLOR,0,S)):(w[0]=qt,w[1]=ae,w[2]=ge,w[3]=kt,I.clearBufferiv(I.COLOR,0,w))}else Y|=I.COLOR_BUFFER_BIT}z&&(Y|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",Qt,!1),jt.dispose(),St.dispose(),vt.dispose(),X.dispose(),mt.dispose(),it.dispose(),Tt.dispose(),rt.dispose(),yt.dispose(),at.dispose(),at.removeEventListener("sessionstart",Ne),at.removeEventListener("sessionend",Ae),_e.stop()};function Jt(E){E.preventDefault(),Xp("WebGLRenderer: Context Lost."),N=!0}function ct(){Xp("WebGLRenderer: Context Restored."),N=!1;let E=H.autoReset,z=Yt.enabled,Z=Yt.autoUpdate,Y=Yt.needsUpdate,q=Yt.type;ut(),H.autoReset=E,Yt.enabled=z,Yt.autoUpdate=Z,Yt.needsUpdate=Y,Yt.type=q}function Qt(E){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function zt(E){let z=E.target;z.removeEventListener("dispose",zt),ne(z)}function ne(E){tn(E),X.remove(E)}function tn(E){let z=X.get(E).programs;z!==void 0&&(z.forEach(function(Z){yt.releaseProgram(Z)}),E.isShaderMaterial&&yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Z,Y,q,bt){z===null&&(z=Pt);let Ut=q.isMesh&&q.matrixWorld.determinantAffine()<0,Rt=gn(E,z,Z,Y,q);y.setMaterial(Y,Ut);let kt=Z.index,qt=1;if(Y.wireframe===!0){if(kt=et.getWireframeAttribute(Z),kt===void 0)return;qt=2}let ae=Z.drawRange,ge=Z.attributes.position,Vt=ae.start*qt,Se=(ae.start+ae.count)*qt;bt!==null&&(Vt=Math.max(Vt,bt.start*qt),Se=Math.min(Se,(bt.start+bt.count)*qt)),kt!==null?(Vt=Math.max(Vt,0),Se=Math.min(Se,kt.count)):ge!=null&&(Vt=Math.max(Vt,0),Se=Math.min(Se,ge.count));let nn=Se-Vt;if(nn<0||nn===1/0)return;Tt.setup(q,Y,Rt,Z,kt);let Ue,Ce=_t;if(kt!==null&&(Ue=ht.get(kt),Ce=nt,Ce.setIndex(Ue)),q.isMesh)Y.wireframe===!0?(y.setLineWidth(Y.wireframeLinewidth*gt()),Ce.setMode(I.LINES)):Ce.setMode(I.TRIANGLES);else if(q.isLine){let Rn=Y.linewidth;Rn===void 0&&(Rn=1),y.setLineWidth(Rn*gt()),q.isLineSegments?Ce.setMode(I.LINES):q.isLineLoop?Ce.setMode(I.LINE_LOOP):Ce.setMode(I.LINE_STRIP)}else q.isPoints?Ce.setMode(I.POINTS):q.isSprite&&Ce.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Rn=q._multiDrawStarts,Dt=q._multiDrawCounts,Hn=q._multiDrawCount,ve=kt?ht.get(kt).bytesPerElement:1,bi=X.get(Y).currentProgram.getUniforms();for(let Ji=0;Ji<Hn;Ji++)bi.setValue(I,"_gl_DrawID",Ji),Ce.render(Rn[Ji]/ve,Dt[Ji])}else if(q.isInstancedMesh)Ce.renderInstances(Vt,nn,q.count);else if(Z.isInstancedBufferGeometry){let Rn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Dt=Math.min(Z.instanceCount,Rn);Ce.renderInstances(Vt,nn,Dt)}else Ce.render(Vt,nn)};function de(E,z,Z,Y){L!==null&&E.isNodeMaterial&&L.setObject(Y,E),st===!0&&pt.setState(E,Z,!1),E.transparent===!0&&E.side===Ii&&E.forceSinglePass===!1?(E.side=fn,E.needsUpdate=!0,Xe(E,z,Y),E.side=pr,E.needsUpdate=!0,Xe(E,z,Y),E.side=Ii):Xe(E,z,Y)}this.compile=function(E,z,Z=null){Z===null&&(Z=E),L!==null&&L.renderStart(E,z,Z),b=vt.get(Z),b.init(z),v.push(b),Z.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),E!==Z&&E.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(b.pushLight(q),q.castShadow&&b.pushShadow(q))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),ot=this.localClippingEnabled,st=pt.init(this.clippingPlanes,ot),st===!0&&pt.setGlobalState(this.clippingPlanes,z),L!==null&&Yt.render(b.state.shadowsArray,Z,z);let Y=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let bt=q.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){let Rt=bt[Ut];de(Rt,Z,z,q),Y.add(Rt)}else de(bt,Z,z,q),Y.add(bt)}),b=v.pop(),L!==null&&L.renderEnd(),Y},this.compileAsync=function(E,z,Z=null){let Y=this.compile(E,z,Z);return new Promise(q=>{function bt(){if(Y.forEach(function(Ut){let kt=X.get(Ut).currentProgram;(kt===void 0||kt.isReady())&&Y.delete(Ut)}),Y.size===0){q(E);return}setTimeout(bt,10)}Lt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let De=null;function mn(E){De&&De(E)}function Ne(){_e.stop()}function Ae(){_e.start()}let _e=new Ex;_e.setAnimationLoop(mn),typeof self!="undefined"&&_e.setContext(self),this.setAnimationLoop=function(E){De=E,at.setAnimationLoop(E),E===null?_e.stop():_e.start()},at.addEventListener("sessionstart",Ne),at.addEventListener("sessionend",Ae),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(E,z);let Z=at.enabled===!0&&at.isPresenting===!0,Y=T!==null&&(K===null||Z)&&T.begin(C,K);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(z),z=at.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,z,K),b=vt.get(E,v.length),b.init(z),b.state.textureUnits=j.getTextureUnits(),v.push(b),U.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(U,Gi,z.reversedDepth),ot=this.localClippingEnabled,st=pt.init(this.clippingPlanes,ot),M=St.get(E,A.length),M.init(),A.push(M),at.enabled===!0&&at.isPresenting===!0){let Ut=C.xr.getDepthSensingMesh();Ut!==null&&kn(Ut,z,-1/0,C.sortObjects)}kn(E,z,0,C.sortObjects),M.finish(),L!==null&&L.updateLights(b.state.lightsArray),C.sortObjects===!0&&M.sort(dt,Ht),Ct=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Ct&&jt.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&pt.beginShadows();let q=b.state.shadowsArray;if(Yt.render(q,E,z),st===!0&&pt.endShadows(),(Y&&T.hasRenderPass())===!1){let Ut=M.opaque,Rt=M.transmissive;if(b.setupLights(),z.isArrayCamera){let kt=z.cameras;if(Rt.length>0)for(let qt=0,ae=kt.length;qt<ae;qt++){let ge=kt[qt];Cn(Ut,Rt,E,ge)}Ct&&jt.render(E);for(let qt=0,ae=kt.length;qt<ae;qt++){let ge=kt[qt];Ie(M,E,ge,ge.viewport)}}else Rt.length>0&&Cn(Ut,Rt,E,z),Ct&&jt.render(E),Ie(M,E,z)}K!==null&&k===0&&(j.updateMultisampleRenderTarget(K),j.updateRenderTargetMipmap(K)),Y&&T.end(C),E.isScene===!0&&E.onAfterRender(C,E,z),Tt.resetDefaultState(),W=-1,P=null,v.pop(),v.length>0?(b=v[v.length-1],j.setTextureUnits(b.state.textureUnits),st===!0&&pt.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,L!==null&&L.renderEnd()};function kn(E,z,Z,Y){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Q)){Y&&Ft.setFromMatrixPosition(E.matrixWorld).applyMatrix4(U);let Ut=it.update(E),Rt=E.material;Rt.visible&&M.push(E,Ut,Rt,Z,Ft.z,null,z)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Q))){let Ut=it.update(E),Rt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ft.copy(E.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Ft.copy(Ut.boundingSphere.center)),Ft.applyMatrix4(E.matrixWorld).applyMatrix4(U)),Array.isArray(Rt)){let kt=Ut.groups;for(let qt=0,ae=kt.length;qt<ae;qt++){let ge=kt[qt],Vt=Rt[ge.materialIndex];Vt&&Vt.visible&&M.push(E,Ut,Vt,Z,Ft.z,ge,z)}}else Rt.visible&&M.push(E,Ut,Rt,Z,Ft.z,null,z)}}let bt=E.children;for(let Ut=0,Rt=bt.length;Ut<Rt;Ut++)kn(bt[Ut],z,Z,Y)}function Ie(E,z,Z,Y){let{opaque:q,transmissive:bt,transparent:Ut}=E;b.setupLightsView(Z),st===!0&&pt.setGlobalState(C.clippingPlanes,Z),Y&&y.viewport($.copy(Y)),q.length>0&&Vn(q,z,Z),bt.length>0&&Vn(bt,z,Z),Ut.length>0&&Vn(Ut,z,Z),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Cn(E,z,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){let Vt=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new ln(1,1,{generateMipmaps:!0,type:Vt?An:oi,minFilter:gr,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let bt=b.state.transmissionRenderTarget[Y.id],Ut=Y.viewport||$;bt.setSize(Ut.z*C.transmissionResolutionScale,Ut.w*C.transmissionResolutionScale);let Rt=C.getRenderTarget(),kt=C.getActiveCubeFace(),qt=C.getActiveMipmapLevel();C.setRenderTarget(bt),C.getClearColor(Xt),Gt=C.getClearAlpha(),Gt<1&&C.setClearColor(16777215,.5),C.clear(),Ct&&jt.render(Z);let ae=C.toneMapping;C.toneMapping=Xi;let ge=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),st===!0&&pt.setGlobalState(C.clippingPlanes,Y),Vn(E,Z,Y),j.updateMultisampleRenderTarget(bt),j.updateRenderTargetMipmap(bt),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Se=0,nn=z.length;Se<nn;Se++){let Ue=z[Se],{object:Ce,geometry:Rn,material:Dt,group:Hn}=Ue;if(Dt.side===Ii&&Ce.layers.test(Y.layers)){let ve=Dt.side;Dt.side=fn,Dt.needsUpdate=!0,en(Ce,Z,Y,Rn,Dt,Hn),Dt.side=ve,Dt.needsUpdate=!0,Vt=!0}}Vt===!0&&(j.updateMultisampleRenderTarget(bt),j.updateRenderTargetMipmap(bt))}C.setRenderTarget(Rt,kt,qt),C.setClearColor(Xt,Gt),ge!==void 0&&(Y.viewport=ge),C.toneMapping=ae}function Vn(E,z,Z){let Y=z.isScene===!0?z.overrideMaterial:null;for(let q=0,bt=E.length;q<bt;q++){let Ut=E[q],{object:Rt,geometry:kt,group:qt}=Ut,ae=Ut.material;ae.allowOverride===!0&&Y!==null&&(ae=Y),Rt.layers.test(Z.layers)&&en(Rt,z,Z,kt,ae,qt)}}function en(E,z,Z,Y,q,bt){L!==null&&q.isNodeMaterial&&L.setObject(E,q),E.onBeforeRender(C,z,Z,Y,q,bt),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(C,z,Z,Y,E,bt),q.transparent===!0&&q.side===Ii&&q.forceSinglePass===!1?(q.side=fn,q.needsUpdate=!0,C.renderBufferDirect(Z,z,Y,q,E,bt),q.side=pr,q.needsUpdate=!0,C.renderBufferDirect(Z,z,Y,q,E,bt),q.side=Ii):C.renderBufferDirect(Z,z,Y,q,E,bt),E.onAfterRender(C,z,Z,Y,q,bt)}function Xe(E,z,Z){z.isScene!==!0&&(z=Pt);let Y=X.get(E),q=b.state.lights,bt=b.state.shadowsArray,Ut=q.state.version,Rt=yt.getParameters(E,q.state,bt,z,Z,b.state.lightProbeGridArray),kt=yt.getProgramCacheKey(Rt),qt=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let ae=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=mt.get(E.envMap||Y.environment,ae),Y.envMapRotation=Y.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,qt===void 0&&(E.addEventListener("dispose",zt),qt=new Map,Y.programs=qt);let ge=qt.get(kt);if(ge!==void 0){if(Y.currentProgram===ge&&Y.lightsStateVersion===Ut)return Zi(E,Rt),ge}else Rt.uniforms=yt.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,Z,Rt),E.onBeforeCompile(Rt,C),ge=yt.acquireProgram(Rt,kt),qt.set(kt,ge),Y.uniforms=Rt.uniforms;let Vt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Vt.clippingPlanes=pt.uniform),Zi(E,Rt),Y.needsLights=Mi(E),Y.lightsStateVersion=Ut,Y.needsLights&&(Vt.ambientLightColor.value=q.state.ambient,Vt.lightProbe.value=q.state.probe,Vt.sunLights.value=q.state.sun,Vt.sunLightShadows.value=q.state.sunShadow,Vt.directionalLights.value=q.state.directional,Vt.directionalLightShadows.value=q.state.directionalShadow,Vt.spotLights.value=q.state.spot,Vt.spotLightShadows.value=q.state.spotShadow,Vt.rectAreaLights.value=q.state.rectArea,Vt.ltc_1.value=q.state.rectAreaLTC1,Vt.ltc_2.value=q.state.rectAreaLTC2,Vt.pointLights.value=q.state.point,Vt.pointLightShadows.value=q.state.pointShadow,Vt.hemisphereLights.value=q.state.hemi,Vt.sunShadowMatrix.value=q.state.sunShadowMatrix,Vt.sunShadowCascade.value=q.state.sunShadowCascade,Vt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Vt.spotLightMatrix.value=q.state.spotLightMatrix,Vt.spotLightMap.value=q.state.spotLightMap,Vt.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.lightProbeGrid=b.state.lightProbeGridArray.length>0,Y.currentProgram=ge,Y.uniformsList=null,ge}function cn(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=_a.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Zi(E,z){let Z=X.get(E);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function oo(E,z){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(z.matrixWorld);for(let Z=0,Y=E.length;Z<Y;Z++){let q=E[Z];if(q.texture!==null&&q.boundingBox.containsPoint(x))return q}return null}function gn(E,z,Z,Y,q){z.isScene!==!0&&(z=Pt),j.resetTextureUnits();let bt=z.fog,Ut=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,Rt=K===null?C.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:me.workingColorSpace,kt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,qt=mt.get(Y.envMap||Ut,kt),ae=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ge=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Vt=!!Z.morphAttributes.position,Se=!!Z.morphAttributes.normal,nn=!!Z.morphAttributes.color,Ue=Xi;Y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ue=C.toneMapping);let Ce=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Rn=Ce!==void 0?Ce.length:0,Dt=X.get(Y),Hn=b.state.lights;if(st===!0&&(ot===!0||E!==P)){let Le=E===P&&Y.id===W;pt.setState(Y,E,Le)}let ve=!1;Y.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Hn.state.version||Dt.outputColorSpace!==Rt||q.isBatchedMesh&&Dt.batching===!1||!q.isBatchedMesh&&Dt.batching===!0||q.isBatchedMesh&&Dt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Dt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Dt.instancing===!1||!q.isInstancedMesh&&Dt.instancing===!0||q.isSkinnedMesh&&Dt.skinning===!1||!q.isSkinnedMesh&&Dt.skinning===!0||q.isInstancedMesh&&Dt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Dt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Dt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Dt.instancingMorph===!1&&q.morphTexture!==null||Dt.envMap!==qt||Y.fog===!0&&Dt.fog!==bt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==pt.numPlanes||Dt.numIntersection!==pt.numIntersection)||Dt.vertexAlphas!==ae||Dt.vertexTangents!==ge||Dt.morphTargets!==Vt||Dt.morphNormals!==Se||Dt.morphColors!==nn||Dt.toneMapping!==Ue||Dt.morphTargetsCount!==Rn||!!Dt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,Dt.__version=Y.version);let bi=Dt.currentProgram;ve===!0&&(bi=Xe(Y,z,q),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,bi,Dt));let Ji=!1,zs=!1,lo=!1,we=bi.getUniforms(),Ke=Dt.uniforms;if(y.useProgram(bi.program)&&(Ji=!0,zs=!0,lo=!0),Y.id!==W&&(W=Y.id,zs=!0),Dt.needsLights){let Le=oo(b.state.lightProbeGridArray,q);Dt.lightProbeGrid!==Le&&(Dt.lightProbeGrid=Le,zs=!0)}if(Ji||P!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),we.setValue(I,"projectionMatrix",E.projectionMatrix),we.setValue(I,"viewMatrix",E.matrixWorldInverse);let Vs=we.map.cameraPosition;Vs!==void 0&&Vs.setValue(I,ft.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&we.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&we.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),P!==E&&(P=E,zs=!0,lo=!0)}if(Dt.needsLights&&(Hn.state.sunShadowMap.length>0&&we.setValue(I,"sunShadowMap",Hn.state.sunShadowMap,j),Hn.state.directionalShadowMap.length>0&&we.setValue(I,"directionalShadowMap",Hn.state.directionalShadowMap,j),Hn.state.spotShadowMap.length>0&&we.setValue(I,"spotShadowMap",Hn.state.spotShadowMap,j),Hn.state.pointShadowMap.length>0&&we.setValue(I,"pointShadowMap",Hn.state.pointShadowMap,j)),q.isSkinnedMesh){we.setOptional(I,q,"bindMatrix"),we.setOptional(I,q,"bindMatrixInverse");let Le=q.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),we.setValue(I,"boneTexture",Le.boneTexture,j))}q.isBatchedMesh&&(we.setOptional(I,q,"batchingTexture"),we.setValue(I,"batchingTexture",q._matricesTexture,j),we.setOptional(I,q,"batchingIdTexture"),we.setValue(I,"batchingIdTexture",q._indirectTexture,j),we.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&we.setValue(I,"batchingColorTexture",q._colorsTexture,j));let ks=Z.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0)&&B.update(q,Z,bi),(zs||Dt.receiveShadow!==q.receiveShadow)&&(Dt.receiveShadow=q.receiveShadow,we.setValue(I,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(Ke.envMapIntensity.value=z.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=ME()),zs){if(we.setValue(I,"toneMappingExposure",C.toneMappingExposure),Dt.needsLights&&$e(Ke,lo),bt&&Y.fog===!0&&Bt.refreshFogUniforms(Ke,bt),Bt.refreshMaterialUniforms(Ke,Y,tt,J,b.state.transmissionRenderTarget[E.id]),Dt.needsLights&&Dt.lightProbeGrid){let Le=Dt.lightProbeGrid;Ke.probesSH.value=Le.texture,Ke.probesMin.value.copy(Le.boundingBox.min),Ke.probesMax.value.copy(Le.boundingBox.max),Ke.probesResolution.value.copy(Le.resolution)}_a.upload(I,cn(Dt),Ke,j)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(_a.upload(I,cn(Dt),Ke,j),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&we.setValue(I,"center",q.center),we.setValue(I,"modelViewMatrix",q.modelViewMatrix),we.setValue(I,"normalMatrix",q.normalMatrix),we.setValue(I,"modelMatrix",q.matrixWorld),Y.uniformsGroups!==void 0){let Le=Y.uniformsGroups;for(let Vs=0,co=Le.length;Vs<co;Vs++){let Cm=Le[Vs];rt.update(Cm,bi),rt.bind(Cm,bi)}}return bi}function $e(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.sunLights.needsUpdate=z,E.sunLightShadows.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Mi(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(E,z,Z){let Y=X.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=z,X.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let Z=X.get(E);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,Z=0){K=E,G=z,k=Z;let Y=null,q=!1,bt=!1;if(E){let Rt=X.get(E);if(Rt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(I.FRAMEBUFFER,Rt.__webglFramebuffer),$.copy(E.viewport),wt.copy(E.scissor),Et=E.scissorTest,y.viewport($),y.scissor(wt),y.setScissorTest(Et),W=-1;return}else if(Rt.__webglFramebuffer===void 0)j.setupRenderTarget(E);else if(Rt.__hasExternalTextures)j.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ae=E.depthTexture;if(Rt.__boundDepthTexture!==ae){if(ae!==null&&X.has(ae)&&(E.width!==ae.image.width||E.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(E)}}let kt=E.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(bt=!0);let qt=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qt[z])?Y=qt[z][Z]:Y=qt[z],q=!0):E.samples>0&&j.useMultisampledRTT(E)===!1?Y=X.get(E).__webglMultisampledFramebuffer:Array.isArray(qt)?Y=qt[Z]:Y=qt,$.copy(E.viewport),wt.copy(E.scissor),Et=E.scissorTest}else $.copy(xt).multiplyScalar(tt).floor(),wt.copy(It).multiplyScalar(tt).floor(),Et=Nt;if(Z!==0&&(Y=V),y.bindFramebuffer(I.FRAMEBUFFER,Y)&&y.drawBuffers(E,Y),y.viewport($),y.scissor(wt),y.setScissorTest(Et),q){let Rt=X.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Rt.__webglTexture,Z)}else if(bt){let Rt=z;for(let kt=0;kt<E.textures.length;kt++){let qt=X.get(E.textures[kt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+kt,qt.__webglTexture,Z,Rt)}}else if(E!==null&&Z!==0){let Rt=X.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rt.__webglTexture,Z)}W=-1};function ao(E){let z=X.get(E);return(z.__readFormat!==E.format||z.__readType!==E.type)&&(z.__readFormat=E.format,z.__readType=E.type,z.__formatReadable=R.textureFormatReadable(E.format),z.__typeReadable=R.textureTypeReadable(E.type)),z}this.readRenderTargetPixels=function(E,z,Z,Y,q,bt,Ut,Rt=0){if(!(E&&E.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ut!==void 0&&(kt=kt[Ut]),kt){y.bindFramebuffer(I.FRAMEBUFFER,kt);try{let qt=E.textures[Rt],ae=qt.format,ge=qt.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Rt);let Vt=ao(qt);if(Vt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Vt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Y&&Z>=0&&Z<=E.height-q&&I.readPixels(z,Z,Y,q,Mt.convert(ae),Mt.convert(ge),bt)}finally{let qt=K!==null?X.get(K).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(E,z,Z,Y,q,bt,Ut,Rt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ut!==void 0&&(kt=kt[Ut]),kt)if(z>=0&&z<=E.width-Y&&Z>=0&&Z<=E.height-q){y.bindFramebuffer(I.FRAMEBUFFER,kt);let qt=E.textures[Rt],ae=qt.format,ge=qt.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Rt);let Vt=ao(qt);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Se),I.bufferData(I.PIXEL_PACK_BUFFER,bt.byteLength,I.STREAM_READ),I.readPixels(z,Z,Y,q,Mt.convert(ae),Mt.convert(ge),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let nn=K!==null?X.get(K).__webglFramebuffer:null;y.bindFramebuffer(I.FRAMEBUFFER,nn);let Ue=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $_(I,Ue,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Se),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,bt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(Se),I.deleteSync(Ue),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,Z=0){let Y=Math.pow(2,-Z),q=Math.floor(E.image.width*Y),bt=Math.floor(E.image.height*Y),Ut=z!==null?z.x:0,Rt=z!==null?z.y:0;j.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,Ut,Rt,q,bt),y.unbindTexture()},this.copyTextureToTexture=function(E,z,Z=null,Y=null,q=0,bt=0){let Ut,Rt,kt,qt,ae,ge,Vt,Se,nn,Ue=E.isCompressedTexture?E.mipmaps[bt]:E.image;if(Z!==null)Ut=Z.max.x-Z.min.x,Rt=Z.max.y-Z.min.y,kt=Z.isBox3?Z.max.z-Z.min.z:1,qt=Z.min.x,ae=Z.min.y,ge=Z.isBox3?Z.min.z:0;else{let Ke=Math.pow(2,-q);Ut=Math.floor(Ue.width*Ke),Rt=Math.floor(Ue.height*Ke),E.isDataArrayTexture?kt=Ue.depth:E.isData3DTexture?kt=Math.floor(Ue.depth*Ke):kt=1,qt=0,ae=0,ge=0}Y!==null?(Vt=Y.x,Se=Y.y,nn=Y.z):(Vt=0,Se=0,nn=0);let Ce=Mt.convert(z.format),Rn=Mt.convert(z.type),Dt;z.isData3DTexture?(j.setTexture3D(z,0),Dt=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(j.setTexture2DArray(z,0),Dt=I.TEXTURE_2D_ARRAY):(j.setTexture2D(z,0),Dt=I.TEXTURE_2D),y.activeTexture(I.TEXTURE0),y.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);let Hn=y.getParameter(I.UNPACK_ROW_LENGTH),ve=y.getParameter(I.UNPACK_IMAGE_HEIGHT),bi=y.getParameter(I.UNPACK_SKIP_PIXELS),Ji=y.getParameter(I.UNPACK_SKIP_ROWS),zs=y.getParameter(I.UNPACK_SKIP_IMAGES);y.pixelStorei(I.UNPACK_ROW_LENGTH,Ue.width),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ue.height),y.pixelStorei(I.UNPACK_SKIP_PIXELS,qt),y.pixelStorei(I.UNPACK_SKIP_ROWS,ae),y.pixelStorei(I.UNPACK_SKIP_IMAGES,ge);let lo=E.isDataArrayTexture||E.isData3DTexture,we=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let Ke=X.get(E),ks=X.get(z),Le=X.get(Ke.__renderTarget),Vs=X.get(ks.__renderTarget);y.bindFramebuffer(I.READ_FRAMEBUFFER,Le.__webglFramebuffer),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let co=0;co<kt;co++)lo&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,X.get(E).__webglTexture,q,ge+co),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,X.get(z).__webglTexture,bt,nn+co)),I.blitFramebuffer(qt,ae,Ut,Rt,Vt,Se,Ut,Rt,I.DEPTH_BUFFER_BIT,I.NEAREST);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||X.has(E)){let Ke=X.get(E),ks=X.get(z);y.bindFramebuffer(I.READ_FRAMEBUFFER,D),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,F);for(let Le=0;Le<kt;Le++)lo?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ke.__webglTexture,q,ge+Le):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ke.__webglTexture,q),we?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ks.__webglTexture,bt,nn+Le):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ks.__webglTexture,bt),q!==0?I.blitFramebuffer(qt,ae,Ut,Rt,Vt,Se,Ut,Rt,I.COLOR_BUFFER_BIT,I.NEAREST):we?I.copyTexSubImage3D(Dt,bt,Vt,Se,nn+Le,qt,ae,Ut,Rt):I.copyTexSubImage2D(Dt,bt,Vt,Se,qt,ae,Ut,Rt);y.bindFramebuffer(I.READ_FRAMEBUFFER,null),y.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else we?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Dt,bt,Vt,Se,nn,Ut,Rt,kt,Ce,Rn,Ue.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(Dt,bt,Vt,Se,nn,Ut,Rt,kt,Ce,Ue.data):I.texSubImage3D(Dt,bt,Vt,Se,nn,Ut,Rt,kt,Ce,Rn,Ue):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,bt,Vt,Se,Ut,Rt,Ce,Rn,Ue.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,bt,Vt,Se,Ue.width,Ue.height,Ce,Ue.data):I.texSubImage2D(I.TEXTURE_2D,bt,Vt,Se,Ut,Rt,Ce,Rn,Ue);y.pixelStorei(I.UNPACK_ROW_LENGTH,Hn),y.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve),y.pixelStorei(I.UNPACK_SKIP_PIXELS,bi),y.pixelStorei(I.UNPACK_SKIP_ROWS,Ji),y.pixelStorei(I.UNPACK_SKIP_IMAGES,zs),bt===0&&z.generateMipmaps&&I.generateMipmap(Dt),y.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&j.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?j.setTextureCube(E,0):E.isData3DTexture?j.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?j.setTexture2DArray(E,0):j.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){G=0,k=0,K=null,y.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var ya={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var yi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},bE=new dr(-1,1,1,-1,0,1),vm=class extends Ee{constructor(){super(),this.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ce([0,2,0,0,2,0],2))}},TE=new vm,yr=class{constructor(t){this._mesh=new oe(TE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,bE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var vf=class extends yi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Bs.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new yr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var fc=class extends yi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},yf=class extends yi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Sf=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new lt);this._width=n.width,this._height=n.height,e=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vf(ya),this.copyPass.material.blending=Li,this.timer=new Us}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}fc!==void 0&&(o instanceof fc?n=!0:o instanceof yf&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Mf=class extends yi{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Zt}render(t,e,n){let i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}};var Dx={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Zt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Sa=class s extends yi{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new Zt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ln(r,o,{type:An,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new ln(r,o,{type:An,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new ln(r,o,{type:An,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Dx;this.highPassUniforms=Bs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new lt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Bs.clone(ya.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:ya.vertexShader,fragmentShader:ya.fragmentShader,premultipliedAlpha:!0,blending:fs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Zt,this._oldClearAlpha=1,this._basic=new si,this._fsQuad=new yr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new lt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let i=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new We({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Sa.BlurDirectionX=new lt(1,0);Sa.BlurDirectionY=new lt(0,1);var dc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var bf=class extends yi{constructor(){super(),this.isOutputPass=!0,this.uniforms=Bs.clone(dc.uniforms),this.material=new ca({name:dc.name,uniforms:this.uniforms,vertexShader:dc.vertexShader,fragmentShader:dc.fragmentShader}),this._fsQuad=new yr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},me.getTransfer(this._outputColorSpace)===ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$l?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Os?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Kl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Nx=[[0,.5],[.26,.58],[.64,1.18],[.74,.42],[.84,.08],[1,-.2],[.66,-.36],[.62,-.62],[.26,-.86],[0,-1.14]],ms=[...Nx,...Nx.slice(1,-1).reverse().map(([s,t])=>[-s,t])],Mm=[[-.42,.36],[.42,.36],[.42,.2],[.11,.2],[.11,-.62],[0,-.74],[-.11,-.62],[-.11,.2],[-.42,.2]],wf=[[.18,.08],[.48,.14],[.26,-.03]],bm=wf.map(([s,t])=>[-s,t]),Ui=.08,pc=-.14,ym={O0:[0,.5,Ui],O1:[.26,.58,Ui],O2:[.64,1.18,Ui],O3:[.74,.42,Ui],O4:[.84,.08,Ui],O5:[1,-.2,Ui],O6:[.66,-.36,Ui],O7:[.62,-.62,Ui],O8:[.26,-.86,Ui],O9:[0,-1.14,Ui],I0:[0,.22,.42],I1:[.34,.2,.38],I2:[.55,.78,.18],I3:[.62,-.08,.3],I4:[.3,0,.3],I5:[0,-.4,.55],I6:[.24,-.52,.42],I7:[0,-.86,.5]},wE=[["O0","O1","I0"],["O1","I1","I0"],["O1","O2","I2"],["O1","I2","I1"],["O2","O3","I2"],["O3","I1","I2"],["O3","I3","I1"],["O3","O4","I3"],["O4","O5","I3"],["O5","O6","I3"],["I1","I3","I4"],["I0","I1","I4"],["I0","I4","I5"],["I4","I3","I6"],["I4","I6","I5"],["I3","O6","I6"],["O6","O7","I6"],["O7","O8","I6"],["I6","O8","I7"],["I5","I6","I7"],["O8","O9","I7"]],Sm=new O,Ux=new O,Ox=new O;function Tf(s,t,e,n,i){Sm.fromArray(t),Ux.fromArray(e),Ox.fromArray(n),Ux.clone().sub(Sm).cross(Ox.clone().sub(Sm)).dot(i)<0?s.push(...t,...n,...e):s.push(...t,...e,...n)}function EE(){let s=[],t=new O(0,0,1);for(let r of[1,-1])for(let[o,a,l]of wE){let c=h=>[ym[h][0]*r,ym[h][1],ym[h][2]];Tf(s,c(o),c(a),c(l),t)}let e=ms.map(([r,o])=>new lt(r,o));for(let[r,o,a]of ss.triangulateShape(e,[])){let l=ms[r],c=ms[o],h=ms[a];Tf(s,[l[0],l[1],pc],[c[0],c[1],pc],[h[0],h[1],pc],new O(0,0,-1))}let n=ss.isClockWise(e)?-1:1;for(let r=0;r<ms.length;r++){let o=ms[r],a=ms[(r+1)%ms.length],l=a[0]-o[0],c=a[1]-o[1],h=new O(c*n,-l*n,0),d=[o[0],o[1],Ui],u=[a[0],a[1],Ui],f=[o[0],o[1],pc],p=[a[0],a[1],pc];Tf(s,d,u,p,h),Tf(s,d,p,f,h)}let i=new Ee;return i.setAttribute("position",new ce(s,3)),i.computeVertexNormals(),i}function Fx(s){let t=new ra;return s.forEach(([e,n],i)=>i?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t}function Bx(){let s=new wn,t=new ri({color:3816002,metalness:.9,roughness:.32,envMapIntensity:1}),e=new ri({color:15000810,metalness:1,roughness:.18,envMapIntensity:1}),n=new ri({color:16734746,emissive:16734746,emissiveIntensity:4}),i=EE();s.add(new oe(i,t));let r=new bl(new Al(i,12),new na({color:16742972,transparent:!0,opacity:.28}));s.add(r);let o=new aa(Fx(Mm),{depth:.08,bevelEnabled:!0,bevelThickness:.025,bevelSize:.02,bevelSegments:2}),a=new oe(o,e);a.position.z=.47,s.add(a);for(let l of[wf,bm]){let c=new aa(Fx(l),{depth:.03,bevelEnabled:!1}),h=new oe(c,n);h.position.z=.37,s.add(h)}return{group:s,eyeMat:n}}function mc(s,t,e,n){let i=new Path2D;return s.forEach(([r,o],a)=>a?i.lineTo(t+r*n,e-o*n):i.moveTo(t+r*n,e-o*n)),i.closePath(),i}var AE=723725;function CE(){let s=document.createElement("canvas");s.width=4096,s.height=128;let t=s.getContext("2d"),e=new Ns(s);e.colorSpace=yn,e.anisotropy=8;let n=()=>{t.clearRect(0,0,s.width,s.height),t.fillStyle="#fff",t.font="600 76px Oswald, Impact, sans-serif","letterSpacing"in t&&(t.letterSpacing="8px"),t.textBaseline="middle";let i="TOKTAR FIGHT CLUB  \u2726  BOXING  \u2726  MMA  \u2726  DISCIPLINE  \u2726  ",r=t.measureText(i).width,o=Math.max(1,Math.round(s.width/r));t.save(),t.scale(s.width/(r*o),1);for(let a=0;a<o;a++)t.fillText(i,a*r,68);t.restore(),e.needsUpdate=!0};return n(),document.fonts&&document.fonts.ready.then(n),e}function RE(s){let t=new cs;t.background=new Zt(328966);let e=(r,o,a,l,c)=>{let h=new oe(new lr(a,l),new si({color:new Zt(r).multiplyScalar(o),side:Ii}));h.position.set(...c),h.lookAt(0,0,0),t.add(h)};e(16777215,1.8,6,2,[-5,6,4]),e(16738859,2.6,8,3,[6,-3,3]),e(16747072,1.6,10,2,[0,2,-8]),e(16734752,1.2,3,8,[-7,-1,-2]),e(9082536,.35,12,12,[0,0,9]);let n=new vr(s),i=n.fromScene(t,.02).texture;return n.dispose(),i}function PE(){let s=document.createElement("canvas");s.width=s.height=256;let t=s.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);e.addColorStop(0,"rgba(255,120,50,0.85)"),e.addColorStop(.35,"rgba(255,90,30,0.3)"),e.addColorStop(1,"rgba(255,80,20,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);let n=new Ns(s);return n.colorSpace=yn,n}function IE(s,t){let e=new Ee,n=new Float32Array(s*3),i=new Float32Array(s),r=new Float32Array(s),o=new Float32Array(s);for(let c=0;c<s;c++)n[c*3]=(Math.random()-.5)*14,n[c*3+1]=(Math.random()-.5)*9,n[c*3+2]=2.5-Math.random()*7,i[c]=.15+Math.random()*.45,r[c]=Math.random()*100,o[c]=.3+Math.random()*Math.random()*1.4;e.setAttribute("position",new je(n,3)),e.setAttribute("aSpeed",new je(i,1)),e.setAttribute("aOffset",new je(r,1)),e.setAttribute("aScale",new je(o,1));let a=new We({uniforms:{uTime:{value:0},uPR:{value:t},uSize:{value:70}},vertexShader:`
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
      }`,transparent:!0,depthWrite:!1,blending:fs}),l=new Jr(e,a);return l.frustumCulled=!1,l}function zx(s){let t;try{t=new xa({canvas:s,antialias:!0,powerPreference:"high-performance"})}catch(G){return null}let e=innerWidth<800;t.setPixelRatio(Math.min(devicePixelRatio,e?1.5:2)),t.toneMapping=Os,t.toneMappingExposure=.95;let n=new cs;n.background=new Zt(AE);let i=new an(35,1,.1,60);i.position.set(0,0,8),n.environment=RE(t);let r=new wn;n.add(r);let{group:o,eyeMat:a}=Bx();r.add(o);let l=new wn;n.add(l),l.add(new Yl(3158074,.6));let c=new Xl(16777215,.9);c.position.set(-4.6,5.8,6.9),l.add(c,c.target);let h=new vi(16738859,40,0,2);h.position.set(3.7,-1.6,2.8);let d=new vi(16751164,22,0,2);d.position.set(-3,-2.3,1.8);let u=new vi(16731418,60,0,2);u.position.set(0,1.8,-2.5),l.add(h,d,u);let f=CE(),p=new $r(1.75,1.75,.2,160,1,!0),_=new wn;_.rotation.set(.32,0,-.18);let g=new wn;g.add(new oe(p,new si({map:f,transparent:!0,depthWrite:!1,color:16767168,opacity:.95})),new oe(p,new si({map:f,transparent:!0,depthWrite:!1,side:fn,color:16747088,opacity:.22}))),_.add(g),r.add(_);let m=new oe(new lr(7,7),new si({map:PE(),transparent:!0,depthWrite:!1,blending:fs,opacity:.32}));n.add(m);let S=IE(e?260:650,t.getPixelRatio());n.add(S);let w=new Sf(t);w.addPass(new Mf(n,i));let x=new Sa(new lt(256,256),.55,.5,.82);w.addPass(x),w.addPass(new bf);let M={x:0,y:0,s:1};function b(){let G=innerWidth,k=innerHeight;t.setSize(G,k,!1),w.setSize(G,k),i.aspect=G/k,i.updateProjectionMatrix();let K=Math.tan(no.degToRad(i.fov/2))*i.position.z,W=K*i.aspect;i.aspect>1.05?M={x:Math.min(W*.56,4),y:0,s:Math.min(1.15,K*.46)}:M={x:0,y:K*.5,s:Math.min(W*.54,.9)}}b(),addEventListener("resize",b);let A=0,v=0,T=0,C=0,N=0,L=!0,V=-1;addEventListener("pointermove",G=>{A=G.clientX/innerWidth*2-1,v=G.clientY/innerHeight*2-1},{passive:!0});let D=new Us;function F(G){if(requestAnimationFrame(F),D.update(G),!L||document.hidden)return;let k=D.getElapsed();T+=(A-T)*.05,C+=(v-C)*.05;let K=V<0?0:Math.min(1,(k-V)/2.2),W=1-Math.pow(1-K,4);r.position.set(M.x,M.y+Math.sin(k*.9)*.07+N*1.4,-N*2.5-(1-W)*6),r.scale.setScalar(M.s*(.6+.4*W)),o.rotation.y=T*.5+Math.sin(k*.45)*.14+N*Math.PI+(1-W)*Math.PI*1.5,o.rotation.x=C*.25+Math.sin(k*.6)*.03,g.rotation.y=k*.22,a.emissiveIntensity=3.5+Math.sin(k*3)*.8,l.position.copy(r.position),m.position.set(r.position.x,r.position.y,r.position.z-1.4),m.scale.setScalar(r.scale.x*(1+Math.sin(k*1.3)*.04)),S.material.uniforms.uTime.value=k,i.position.x=T*.25,i.position.y=-C*.15,i.lookAt(0,0,0),w.render()}return requestAnimationFrame(F),{intro(){V=D.getElapsed()},setScroll(G){N=G},setActive(G){L=G}}}var Ef=class extends cs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ar;t.deleteAttribute("uv");let e=new ri({side:fn}),n=new ri,i=new vi(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new oe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ml(t,n,6),a=new Je;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new oe(t,Ma(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new oe(t,Ma(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new oe(t,Ma(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new oe(t,Ma(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new oe(t,Ma(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new oe(t,Ma(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ma(s){return new kl({color:0,emissive:16777215,emissiveIntensity:s})}var kx=1118484,gc=.62,_c=3;function LE(){let t=Math.round(1536*_c/(2*Math.PI*gc)),e=document.createElement("canvas"),n=document.createElement("canvas");e.width=n.width=1536,e.height=n.height=t;let i=e.getContext("2d"),r=n.getContext("2d"),o=new Ns(e),a=new Ns(n);o.colorSpace=a.colorSpace=yn,o.anisotropy=8;let l=()=>{i.fillStyle="#141416",i.fillRect(0,0,1536,t);for(let f=0;f<9e3;f++)i.fillStyle=Math.random()>.5?"rgba(255,255,255,0.025)":"rgba(0,0,0,0.12)",i.fillRect(Math.random()*1536,Math.random()*t,2+Math.random()*3,2+Math.random()*3);for(let f=0;f<4;f++){let p=f/4*1536+192;i.fillStyle="rgba(0,0,0,0.55)",i.fillRect(p-3,0,6,t),i.fillStyle="rgba(255,140,80,0.35)";for(let _=10;_<t;_+=26)i.fillRect(p-10,_,3,12),i.fillRect(p+7,_+13,3,12)}let c=(f,p)=>{let _=i.createLinearGradient(0,f,0,f+p);_.addColorStop(0,"#c94a17"),_.addColorStop(.5,"#ff6a2b"),_.addColorStop(1,"#c94a17"),i.fillStyle=_,i.fillRect(0,f,1536,p),i.fillStyle="rgba(0,0,0,0.35)",i.fillRect(0,f,1536,3),i.fillRect(0,f+p-3,1536,3)};c(t*.07,t*.05),c(t*.86,t*.05),r.fillStyle="#000",r.fillRect(0,0,1536,t);let h=1536/2,d=t*.36,u=t*.13;for(let f of[i,r])f.save(),f.lineJoin="round",f.strokeStyle="#ff6a2b",f.lineWidth=7,f.stroke(mc(ms,h,d,u)),f.fillStyle="#e8e8ec",f.fill(mc(Mm,h,d,u)),f.fillStyle="#ff6a2b",f.fill(mc(wf,h,d,u)),f.fill(mc(bm,h,d,u)),f.fillStyle="#ff6a2b",f.textAlign="center",f.textBaseline="middle",f.font=`700 ${Math.round(t*.12)}px Oswald, Impact, sans-serif`,"letterSpacing"in f&&(f.letterSpacing="10px"),f.fillText("TOKTAR",h,t*.6),f.fillStyle="#cfcfd6",f.font=`600 ${Math.round(t*.04)}px Oswald, Impact, sans-serif`,"letterSpacing"in f&&(f.letterSpacing="18px"),f.fillText("FIGHT CLUB",h,t*.69),f.restore();r.globalCompositeOperation="multiply",r.fillStyle="#ff8040",r.fillRect(0,0,1536,t),r.globalCompositeOperation="source-over",o.needsUpdate=a.needsUpdate=!0};return l(),document.fonts&&document.fonts.ready.then(l),{map:o,emap:a}}function DE(){let s=[];s.push(new lt(1e-4,0));for(let n=0;n<=8;n++){let i=-Math.PI/2+n/8*(Math.PI/2);s.push(new lt(gc-.18+.18*Math.cos(i),.18+.18*Math.sin(i)))}for(let n=1;n<20;n++)s.push(new lt(gc,.18+n/20*(_c-.18-.12)));for(let n=0;n<=6;n++){let i=n/6*(Math.PI/2);s.push(new lt(gc-.12+.12*Math.cos(i),_c-.12+.12*Math.sin(i)))}return s.push(new lt(1e-4,_c)),new Ol(s,72)}function NE(s,t,e,n){let i=t.clone().sub(s),r=new oe(new $r(e,e,i.length(),8),n);return r.position.copy(s).add(t).multiplyScalar(.5),r.quaternion.setFromUnitVectors(new O(0,1,0),i.normalize()),r.castShadow=!0,r}function Vx(s,t){let e;try{e=new xa({canvas:s,antialias:!0})}catch(gt){return null}e.setPixelRatio(Math.min(devicePixelRatio,2)),e.toneMapping=Os,e.toneMappingExposure=1.1,e.shadowMap.enabled=!0,e.shadowMap.type=Qr;let n=new cs;n.background=new Zt(kx),n.fog=new _l(kx,10,20);let i=new an(32,1,.1,50),r=new O(0,.3,8.6),o=new O(0,-.15,0);i.position.copy(r);let a=new vr(e);n.environment=a.fromScene(new Ef,.04).texture;let l=new oe(new El(14,64),new ri({color:986898,roughness:.92,metalness:0,envMapIntensity:.1}));l.rotation.x=-Math.PI/2,l.position.y=-2.75,l.receiveShadow=!0,n.add(l);let c=new oe(new Fl(1.5,1.55,96),new si({color:16738859,transparent:!0,opacity:.55}));c.rotation.x=-Math.PI/2,c.position.y=-2.74,n.add(c),n.add(new Hl(3816008,723725,.6));let h=new Wl(16773344,170,30,.42,.55,1.6);h.position.set(1.2,7,3),h.target.position.set(0,-.5,0),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.bias=-5e-4,n.add(h,h.target);let d=new vi(16738859,40,0,2);d.position.set(-3.2,.5,1.5);let u=new vi(16751164,18,0,2);u.position.set(3.5,-1,2);let f=new vi(16732192,50,0,2);f.position.set(0,1,-3),n.add(d,u,f);let p=new ri({color:9079442,metalness:1,roughness:.3}),_=2.35,g=new la(.075,.022,8,16);for(let gt=0;gt<9;gt++){let I=new oe(g,p);I.position.set(0,_+.1+gt*.13,0),I.rotation.y=gt%2?Math.PI/2:0,I.scale.y=1.3,n.add(I)}let m=new wn;m.position.y=_,n.add(m);let S=new oe(new Bl(.07,16,12),p);m.add(S);let w=-.66;for(let gt=0;gt<4;gt++){let I=gt/4*Math.PI*2+Math.PI/4;m.add(NE(new O(0,0,0),new O(Math.cos(I)*.45,w+.02,Math.sin(I)*.45),.014,p))}let x=new oe(new la(.5,.035,10,48),p);x.rotation.x=Math.PI/2,x.position.y=w,m.add(x);let{map:M,emap:b}=LE(),A=new zl({map:M,emissiveMap:b,emissive:16777215,emissiveIntensity:.55,roughness:.62,metalness:.05,clearcoat:.15,clearcoatRoughness:.5,envMapIntensity:.45}),v=new wn;v.position.y=w-_c,m.add(v);let T=new oe(DE(),A);T.rotation.y=Math.PI,T.castShadow=!0,v.add(T);let C=90,N=new Ee,L=new Float32Array(C*3),V=new Float32Array(C*3),D=Array.from({length:C},()=>new O),F=new Float32Array(C),G=new Float32Array(C);N.setAttribute("position",new je(L,3)),N.setAttribute("color",new je(V,3));let k=new Jr(N,new ia({size:.07,vertexColors:!0,transparent:!0,depthWrite:!1,blending:fs}));k.frustumCulled=!1,n.add(k);let K=0;function W(gt,I){let Kt=Math.round(12+I*30);for(let Lt=0;Lt<Kt;Lt++){let R=K++%C;L[R*3]=gt.x,L[R*3+1]=gt.y,L[R*3+2]=gt.z,D[R].set((Math.random()-.5)*3.5,Math.random()*2.8,.5+Math.random()*2.5).multiplyScalar(.6+I),G[R]=F[R]=.4+Math.random()*.5}}let P=new Us,$=0,wt=0,Et=0,Xt=0,Gt=0,$t=0,J=0,tt=0,dt=0,Ht=-10;function xt(){let gt=s.parentElement.getBoundingClientRect(),I=Math.max(1,gt.width),Kt=Math.max(1,gt.height);e.setSize(I,Kt,!1),i.aspect=I/Kt,r.z=i.aspect<.8?10.4:8.6,i.updateProjectionMatrix()}xt(),new ResizeObserver(xt).observe(s.parentElement);let It=new ql,Nt=new lt,Q=[];function st(gt){let I=s.getBoundingClientRect();return Nt.set((gt.clientX-I.left)/I.width*2-1,-((gt.clientY-I.top)/I.height)*2+1),It.setFromCamera(Nt,i),It.intersectObject(T,!1)[0]||null}let ot=!1;s.addEventListener("pointermove",gt=>{if(Q.push({x:gt.clientX,y:gt.clientY,t:performance.now()}),Q.length>8&&Q.shift(),gt.pointerType==="mouse"){let I=!!st(gt);I!==ot&&(ot=I,t.onHover&&t.onHover(I))}}),s.addEventListener("pointerleave",()=>{ot&&(ot=!1,t.onHover&&t.onHover(!1))});function U(gt,I,Kt){let Lt=m.worldToLocal(gt.clone());Xt+=2.4*I,Gt-=Lt.x*1.6*I,$t+=Lt.x*4*I,tt+=I*3,I>.6&&(dt=Math.max(dt,I*.12)),W(gt,I),Ht=P.getElapsed(),!Kt&&t.onHit&&t.onHit(I)}s.addEventListener("pointerdown",gt=>{let I=st(gt);if(!I)return;let Kt,Lt=performance.now(),R=Q.filter(y=>Lt-y.t<120);if(gt.pointerType==="mouse"&&R.length>1){let y=R[0],H=R[R.length-1],X=Math.hypot(H.x-y.x,H.y-y.y)/Math.max(16,H.t-y.t);Kt=Math.min(1,.25+X/2.2)}else Kt=.55+Math.random()*.45;Kt=Math.min(1,Kt*(.92+Math.random()*.12)),U(I.point,Kt)});let ft=!1,Ft=!1;new IntersectionObserver(([gt])=>{ft=gt.isIntersecting,ft&&!Ft&&(Ft=!0,setTimeout(()=>U(new O(.15,.4,gc),.55,!0),700))},{threshold:.15}).observe(s);let Pt=new Zt;function Ct(gt){requestAnimationFrame(Ct),P.update(gt);let I=Math.min(P.getDelta(),.05);if(!ft||document.hidden)return;let Kt=P.getElapsed(),Lt=Kt-Ht>3?.05:0;Xt+=(-3.2*Math.sin($)-.4*Xt+Math.sin(Kt*1.3)*Lt)*I,Gt+=(-3.2*Math.sin(wt)-.4*Gt+Math.cos(Kt*.9)*Lt*.6)*I,$t+=(-2.2*Et-.9*$t)*I,tt+=(-60*J-7*tt)*I,$+=Xt*I,wt+=Gt*I,Et+=$t*I,J+=tt*I,$=no.clamp($,-.9,.9),wt=no.clamp(wt,-.9,.9),m.rotation.set($,Et,wt);let R=no.clamp(J*.04,-.08,.08);T.scale.set(1-R,1+R*.5,1-R);for(let y=0;y<C;y++){if(F[y]<=0){V[y*3]=V[y*3+1]=V[y*3+2]=0;continue}F[y]-=I,D[y].y-=6*I,L[y*3]+=D[y].x*I,L[y*3+1]+=D[y].y*I,L[y*3+2]+=D[y].z*I;let H=Math.max(0,F[y]/G[y]);Pt.setRGB(1,.45+H*.4,.15).multiplyScalar(H*1.6),V[y*3]=Pt.r,V[y*3+1]=Pt.g,V[y*3+2]=Pt.b}N.attributes.position.needsUpdate=!0,N.attributes.color.needsUpdate=!0,dt*=.88,i.position.set(r.x+(Math.random()-.5)*dt,r.y+(Math.random()-.5)*dt,r.z),i.lookAt(o),e.render(n,i)}return requestAnimationFrame(Ct),{punch:U}}Be.registerPlugin(se);window.__tfcBooted=!0;document.documentElement.classList.remove("boot-failed");document.documentElement.classList.add("booted");var Si=window.TFC_CONFIG||{},vc=window.TFC_I18N,re=(s,t=document)=>t.querySelector(s),qi=(s,t=document)=>Array.from(t.querySelectorAll(s)),Wx=s=>new Promise(t=>setTimeout(t,s)),Sc=matchMedia("(prefers-reduced-motion: reduce)").matches,UE=matchMedia("(pointer: fine)").matches,Rf={get(s){try{return localStorage.getItem(s)}catch(t){return null}},set(s,t){try{localStorage.setItem(s,t)}catch(e){}}},ro="kk",gs=null,Mr=null,Hx=!1;function Xx(){if(Hx)return;Hx=!0,document.body.classList.remove("is-loading");let s=document.getElementById("loader");s&&s.remove(),gs&&gs.start(),Mr&&Mr.intro(),se.refresh()}setTimeout(Xx,7e3);var Oi=s=>{let t=vc[ro]&&vc[ro][s];return t!==void 0?t:vc.kk[s]!==void 0?vc.kk[s]:""};qi("[data-href]").forEach(s=>{let t=Si[s.dataset.href];t?s.href=t:s.hidden=!0});function OE(){let s=Si.address&&Si.address[ro];re("#cAddress").textContent=s||Oi("contact_tba");let t=re("#cPhone");if(t.textContent="",Si.phone){let e=document.createElement("a");e.href="tel:"+Si.phone.replace(/[^\d+]/g,""),e.textContent=Si.phone,t.appendChild(e)}else t.textContent=Oi("contact_tba")}if(Si.mapEmbed){let s=document.createElement("iframe");s.src=Si.mapEmbed,s.loading="lazy",s.title="Map",re("#map").appendChild(s),re("#map").hidden=!1}Si.whatsapp&&(re("#waFloat").href="https://wa.me/"+Si.whatsapp.replace(/\D/g,""),re("#waFloat").hidden=!1);re("#year").textContent=new Date().getFullYear();var Af=0;function Yx(){let s=re("#schTabs"),t=re("#schSlots");s.textContent="",Oi("sch_days").forEach((e,n)=>{let i=document.createElement("button");i.type="button",i.setAttribute("role","tab"),i.setAttribute("aria-selected",String(n===Af)),i.className=n===Af?"is-active":"",i.textContent=e,i.addEventListener("click",()=>{Af=n,Yx()}),s.appendChild(i)}),t.textContent="",(Si.schedule||[]).filter(e=>e.days.includes(Af)).sort((e,n)=>e.time.localeCompare(n.time)).forEach((e,n)=>{let i=document.createElement("div");i.className="slot",i.style.animationDelay=n*60+"ms",i.innerHTML='<b class="slot__time"></b><div class="slot__name"><h3></h3><span></span></div><a href="#join" class="btn btn--ghost btn--sm"></a>',i.querySelector(".slot__time").textContent=e.time,i.querySelector("h3").textContent=Oi(e.p),i.querySelector("span").textContent=Oi("sch_min"),i.querySelector("a").textContent=Oi("sch_book"),t.appendChild(i)})}if(Si.openingDate){let s=new Date(Si.openingDate).getTime(),t=re("#countdown"),e=i=>String(i).padStart(2,"0"),n=()=>{let i=s-Date.now();return isNaN(s)||i<=0?(t.hidden=!0,!1):(t.hidden=!1,re("#cdD").textContent=e(Math.floor(i/864e5)),re("#cdH").textContent=e(Math.floor(i/36e5)%24),re("#cdM").textContent=e(Math.floor(i/6e4)%60),re("#cdS").textContent=e(Math.floor(i/1e3)%60),!0)};if(n()){let i=setInterval(()=>{n()||clearInterval(i)},1e3)}}var xc=null;function FE(){let s=re("#statement"),t=s.textContent.trim().split(/\s+/);s.textContent="",t.forEach((e,n)=>{let i=document.createElement("span");i.className="w",i.textContent=e,s.appendChild(i),n<t.length-1&&s.appendChild(document.createTextNode(" "))}),xc&&(xc.scrollTrigger&&xc.scrollTrigger.kill(),xc.kill()),xc=Be.fromTo(qi(".w",s),{opacity:.14},{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:s,start:"top 82%",end:"bottom 50%",scrub:!0}})}var Sr={hits:0,best:Number(Rf.get("tfc_best"))||0,level:""};function BE(s){return s<40?"bag_lvl_1":s<70?"bag_lvl_2":s<90?"bag_lvl_3":"bag_lvl_4"}function qx(){re("#hitCount").textContent=Sr.hits,re("#hitBest").textContent=Sr.best+"%",re("#powerLevel").textContent=Sr.level?Oi(Sr.level):Oi("bag_hint")}function Zx(s){ro=vc[s]?s:"kk",document.documentElement.lang=ro,qi("[data-i18n]").forEach(t=>{t.innerHTML=Oi(t.dataset.i18n)}),qi(".lang button").forEach(t=>t.classList.toggle("is-active",t.dataset.lang===ro)),re("#cursorLabel").textContent=Oi("cursor_punch"),OE(),Yx(),qx(),FE(),Rf.set("tfc_lang",ro),se.refresh()}qi(".lang button").forEach(s=>s.addEventListener("click",()=>Zx(s.dataset.lang)));Sc||(gs=new R0({duration:1.15,smoothWheel:!0}),gs.on("scroll",se.update),Be.ticker.add(s=>gs.raf(s*1e3)),Be.ticker.lagSmoothing(0),gs.stop());var Em=re("#nav");qi('a[href^="#"]').forEach(s=>s.addEventListener("click",t=>{let e=s.getAttribute("href"),n=e==="#"||e==="#top"?0:re(e);n!==null&&(t.preventDefault(),Em.classList.remove("is-open"),gs?gs.scrollTo(n,{offset:n===0?0:-60,duration:1.4}):n===0?scrollTo({top:0,behavior:"smooth"}):n.scrollIntoView({behavior:"smooth"}))}));re("#schSlots").addEventListener("click",s=>{s.target.closest('a[href="#join"]')&&(s.preventDefault(),gs?gs.scrollTo(re("#join"),{offset:-60,duration:1.2}):re("#join").scrollIntoView({behavior:"smooth"}))});re("#menuBtn").addEventListener("click",()=>Em.classList.toggle("is-open"));var zE=re("#progress");function Jx(){Em.classList.toggle("is-scrolled",scrollY>20);let s=document.documentElement.scrollHeight-innerHeight;zE.style.transform="scaleX("+(s>0?scrollY/s:0)+")"}addEventListener("scroll",Jx,{passive:!0});Jx();var Am=re("#heroCanvas");try{Mr=zx(Am)}catch(s){Mr=null}Mr||(Am.remove(),re("#heroFallback").hidden=!1);var kE=Be.matchMedia();kE.add("(min-width: 901px)",()=>{let s=re("#hTrack"),t=()=>Math.max(0,s.scrollWidth-innerWidth);Be.to(s,{x:()=>-t(),ease:"none",scrollTrigger:{trigger:"#programs",start:"top top",end:()=>"+="+t(),pin:!0,scrub:.8,invalidateOnRefresh:!0}})});se.create({trigger:".hero",start:"top top",end:"bottom top",onUpdate:s=>{Mr&&(Mr.setScroll(s.progress),Mr.setActive(s.progress<.995),Am.style.visibility=s.progress<.995?"visible":"hidden")}});Be.to("#heroIn",{yPercent:-18,opacity:0,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}});var yc=re("#cursorRing"),wm=null;try{wm=Vx(re("#bagCanvas"),{onHover(s){yc.classList.toggle("is-punch",s),re("#cursor").classList.toggle("is-off",s)},onHit(s){let t=Math.round(s*100);Sr.hits++,Sr.level=BE(t),t>Sr.best&&(Sr.best=t,Rf.set("tfc_best",String(t))),re("#bagHint").classList.add("is-gone");let e=re("#powerNum"),n={v:Number(e.textContent)||0};if(Be.to(n,{v:t,duration:.5,ease:"power3.out",onUpdate:()=>{e.textContent=Math.round(n.v)}}),re("#powerBar").style.width=t+"%",qx(),Be.fromTo("#powerLevel",{scale:1.25},{scale:1,duration:.4,ease:"back.out(3)"}),t>=90){let i=re("#bagKo");i.classList.remove("is-show"),i.offsetWidth,i.classList.add("is-show")}}})}catch(s){wm=null}wm||(re("#bagCanvas").remove(),re("#bagFallback").hidden=!1,re("#bagHint").hidden=!0);if(!Sc){let s=Be.quickTo(".marquee__row","skewX",{duration:.4,ease:"power3"}),t;se.create({onUpdate:e=>{s(Be.utils.clamp(-10,10,e.getVelocity()/-300)),clearTimeout(t),t=setTimeout(()=>s(0),120)}})}qi(".reveal").forEach(s=>{Be.from(s,{y:60,opacity:0,duration:1.1,ease:"power3.out",clearProps:"transform,opacity",scrollTrigger:{trigger:s,start:"top 90%",once:!0}})});qi("[data-count]").forEach(s=>{let t=parseFloat(s.dataset.count),e=Number(s.dataset.decimals||0),n=s.dataset.suffix||"",i=o=>o.toFixed(e).replace(".",",")+n,r={v:0};s.textContent=i(0),se.create({trigger:s,start:"top 92%",once:!0,onEnter:()=>Be.to(r,{v:t,duration:2,ease:"power2.out",onUpdate:()=>{s.textContent=i(r.v)}})})});if(UE&&!Sc){qi("[data-tilt]").forEach(r=>{r.addEventListener("pointermove",o=>{let a=r.getBoundingClientRect(),l=(o.clientX-a.left)/a.width,c=(o.clientY-a.top)/a.height;r.style.transform=`perspective(900px) rotateX(${(.5-c)*10}deg) rotateY(${(l-.5)*12}deg)`,r.style.setProperty("--mx",l*100+"%"),r.style.setProperty("--my",c*100+"%")}),r.addEventListener("pointerleave",()=>{r.style.transform=""})}),qi("[data-magnetic]").forEach(r=>{let o=Be.quickTo(r,"x",{duration:.5,ease:"power3"}),a=Be.quickTo(r,"y",{duration:.5,ease:"power3"});r.addEventListener("pointermove",l=>{let c=r.getBoundingClientRect();o((l.clientX-c.left-c.width/2)*.3),a((l.clientY-c.top-c.height/2)*.4)}),r.addEventListener("pointerleave",()=>{o(0),a(0)})}),document.documentElement.classList.add("has-cursor");let s=re("#cursor");Be.set([s,yc],{xPercent:-50,yPercent:-50});let t=Be.quickTo(s,"x",{duration:.08}),e=Be.quickTo(s,"y",{duration:.08}),n=Be.quickTo(yc,"x",{duration:.45,ease:"power3"}),i=Be.quickTo(yc,"y",{duration:.45,ease:"power3"});addEventListener("pointermove",r=>{t(r.clientX),e(r.clientY),n(r.clientX),i(r.clientY)},{passive:!0}),document.addEventListener("pointerover",r=>{yc.classList.toggle("is-hover",!!r.target.closest("a, button, summary, [data-tilt], input, select"))})}var Tm=re("#joinForm"),Cf=re("#formMsg");Tm.addEventListener("submit",s=>{s.preventDefault(),fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(new FormData(Tm)).toString()}).then(t=>{if(!t.ok)throw new Error(String(t.status));Cf.className="form__msg ok",Cf.textContent=Oi("form_ok"),Tm.reset()}).catch(()=>{Cf.className="form__msg err",Cf.textContent=Oi("form_err")})});var VE=new URLSearchParams(location.search).get("lang");Zx(VE||Rf.get("tfc_lang")||((navigator.language||"").slice(0,2)==="ru"?"ru":"kk"));function HE(s){let t=s.textContent;return s.textContent="",Array.from(t).map(e=>{let n=document.createElement("span");return n.className="ch",n.textContent=e===" "?"\xA0":e,s.appendChild(n),n})}var GE=re("#loaderNum"),Gx={v:0};Be.to(Gx,{v:100,duration:Sc?.3:1.9,ease:"power2.inOut",onUpdate:()=>{GE.textContent=Math.round(Gx.v)}});var WE=document.fonts?Promise.race([document.fonts.ready,Wx(2500)]):Promise.resolve();Promise.all([WE,Wx(Sc?300:2e3)]).then(()=>{let s=qi(".hero__title .split").flatMap(HE);Be.timeline().to("#loader",{clipPath:"inset(0 0 100% 0)",duration:1,ease:"power4.inOut"}).add(Xx,"-=0.55").from(s,{yPercent:115,rotate:6,duration:1,stagger:.035,ease:"power4.out"},"-=0.45").from(".hero__fade",{y:30,opacity:0,duration:.9,stagger:.1,ease:"power3.out",clearProps:"transform,opacity"},"-=0.75").from("#nav",{yPercent:-100,duration:.8,ease:"power3.out",clearProps:"transform"},"<")});})();
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
