import{e as v,c as O,g as m,k as b,h as P,j as p,l as w,m as N,n as x,t as c,o as A}from"./_baseUniq-BjTK82ZP.js";import{aK as g,az as M,aL as E,aM as F,aN as _,aO as I,aP as $,aQ as y,aR as B,aS as S}from"./page-quiz-CzDHXuIn.js";var T=/\s/;function L(n){for(var r=n.length;r--&&T.test(n.charAt(r)););return r}var R=/^\s+/;function z(n){return n&&n.slice(0,L(n)+1).replace(R,"")}var o=NaN,G=/^[-+]0x[0-9a-f]+$/i,H=/^0b[01]+$/i,K=/^0o[0-7]+$/i,q=parseInt;function C(n){if(typeof n=="number")return n;if(v(n))return o;if(g(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=g(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=z(n);var t=H.test(n);return t||K.test(n)?q(n.slice(2),t?2:8):G.test(n)?o:+n}var Q=1/0,W=17976931348623157e292;function X(n){if(!n)return n===0?n:0;if(n=C(n),n===Q||n===-1/0){var r=n<0?-1:1;return r*W}return n===n?n:0}function Y(n){var r=X(n),t=r%1;return r===r?t?r-t:r:0}function fn(n){var r=n==null?0:n.length;return r?O(n):[]}var l=Object.prototype,D=l.hasOwnProperty,dn=M(function(n,r){n=Object(n);var t=-1,e=r.length,a=e>2?r[2]:void 0;for(a&&E(r[0],r[1],a)&&(e=1);++t<e;)for(var f=r[t],i=F(f),s=-1,d=i.length;++s<d;){var u=i[s],h=n[u];(h===void 0||_(h,l[u])&&!D.call(n,u))&&(n[u]=f[u])}return n});function un(n){var r=n==null?0:n.length;return r?n[r-1]:void 0}function J(n){return function(r,t,e){var a=Object(r);if(!I(r)){var f=m(t);r=b(r),t=function(s){return f(a[s],s,a)}}var i=n(r,t,e);return i>-1?a[f?r[i]:i]:void 0}}var U=Math.max;function Z(n,r,t){var e=n==null?0:n.length;if(!e)return-1;var a=t==null?0:Y(t);return a<0&&(a=U(e+a,0)),P(n,m(r),a)}var hn=J(Z);function V(n,r){var t=-1,e=I(n)?Array(n.length):[];return p(n,function(a,f,i){e[++t]=r(a,f,i)}),e}function gn(n,r){var t=$(n)?w:V;return t(n,m(r))}var j=Object.prototype,k=j.hasOwnProperty;function nn(n,r){return n!=null&&k.call(n,r)}function mn(n,r){return n!=null&&N(n,r,nn)}function rn(n,r){return n<r}function tn(n,r,t){for(var e=-1,a=n.length;++e<a;){var f=n[e],i=r(f);if(i!=null&&(s===void 0?i===i&&!v(i):t(i,s)))var s=i,d=f}return d}function on(n){return n&&n.length?tn(n,y,rn):void 0}function an(n,r,t,e){if(!g(n))return n;r=x(r,n);for(var a=-1,f=r.length,i=f-1,s=n;s!=null&&++a<f;){var d=c(r[a]),u=t;if(d==="__proto__"||d==="constructor"||d==="prototype")return n;if(a!=i){var h=s[d];u=void 0,u===void 0&&(u=g(h)?h:B(r[a+1])?[]:{})}S(s,d,u),s=s[d]}return n}function vn(n,r,t){for(var e=-1,a=r.length,f={};++e<a;){var i=r[e],s=A(n,i);t(s,i)&&an(f,x(i,n),s)}return f}export{rn as a,tn as b,V as c,vn as d,on as e,fn as f,hn as g,mn as h,dn as i,Y as j,un as l,gn as m,X as t};
