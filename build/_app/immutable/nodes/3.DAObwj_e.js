import{s as H,n as I,r as J,o as M}from"../chunks/scheduler.BvLojk_z.js";import{S as R,i as x,e as T,s as E,c as w,g as S,b as y,j as $,f as _,n as U,d as b,o as k,p as A,q as F,r as z,h as N,k as P,l as B,m as L}from"../chunks/index.DGhVwavX.js";function O(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function q(n,l,p){const d=n.slice();return d[10]=l[p],d}function D(n){let l,p=n[10].description+"",d,s,i=n[10].amount+"",a,m,o,v="Delete",g,r,C;function f(){return n[7](n[10])}return{c(){l=T("li"),d=N(p),s=N(" - $"),a=N(i),m=E(),o=T("button"),o.textContent=v,g=E()},l(h){l=w(h,"LI",{});var e=$(l);d=P(e,p),s=P(e," - $"),a=P(e,i),m=y(e),o=w(e,"BUTTON",{"data-svelte-h":!0}),S(o)!=="svelte-12caasq"&&(o.textContent=v),g=y(e),e.forEach(_)},m(h,e){b(h,l,e),B(l,d),B(l,s),B(l,a),B(l,m),B(l,o),B(l,g),r||(C=A(o,"click",f),r=!0)},p(h,e){n=h,e&1&&p!==(p=n[10].description+"")&&L(d,p),e&1&&i!==(i=n[10].amount+"")&&L(a,i)},d(h){h&&_(l),r=!1,C()}}}function G(n){let l,p="Budget Tracker",d,s,i,a,m,o,v="Add Budget",g,r,C,f,h=O(n[0]),e=[];for(let t=0;t<h.length;t+=1)e[t]=D(q(n,h,t));return{c(){l=T("h1"),l.textContent=p,d=E(),s=T("input"),i=E(),a=T("input"),m=E(),o=T("button"),o.textContent=v,g=E(),r=T("ul");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){l=w(t,"H1",{"data-svelte-h":!0}),S(l)!=="svelte-j6orl1"&&(l.textContent=p),d=y(t),s=w(t,"INPUT",{type:!0,placeholder:!0}),i=y(t),a=w(t,"INPUT",{type:!0,placeholder:!0}),m=y(t),o=w(t,"BUTTON",{"data-svelte-h":!0}),S(o)!=="svelte-dns8g"&&(o.textContent=v),g=y(t),r=w(t,"UL",{});var c=$(r);for(let u=0;u<e.length;u+=1)e[u].l(c);c.forEach(_),this.h()},h(){U(s,"type","text"),U(s,"placeholder","Description"),U(a,"type","number"),U(a,"placeholder","Amount")},m(t,c){b(t,l,c),b(t,d,c),b(t,s,c),k(s,n[1]),b(t,i,c),b(t,a,c),k(a,n[2]),b(t,m,c),b(t,o,c),b(t,g,c),b(t,r,c);for(let u=0;u<e.length;u+=1)e[u]&&e[u].m(r,null);C||(f=[A(s,"input",n[5]),A(a,"input",n[6]),A(o,"click",n[3])],C=!0)},p(t,[c]){if(c&2&&s.value!==t[1]&&k(s,t[1]),c&4&&F(a.value)!==t[2]&&k(a,t[2]),c&17){h=O(t[0]);let u;for(u=0;u<h.length;u+=1){const j=q(t,h,u);e[u]?e[u].p(j,c):(e[u]=D(j),e[u].c(),e[u].m(r,null))}for(;u<e.length;u+=1)e[u].d(1);e.length=h.length}},i:I,o:I,d(t){t&&(_(l),_(d),_(s),_(i),_(a),_(m),_(o),_(g),_(r)),z(e,t),C=!1,J(f)}}}function K(n,l,p){let d=[],s="",i="";const a="https://butterbudget.deno.dev/",m=async()=>{try{const f=await fetch("https://butterbudget.deno.dev//api/budgets");if(!f.ok)throw new Error(`Error fetching budgets: ${f.status}`);p(0,d=await f.json())}catch(f){console.error("Failed to fetch budgets:",f)}},o=async()=>{s&&i&&(await fetch(`${a}/api/budgets`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:s,amount:parseFloat(i)})}),p(1,s=""),p(2,i=""),await m())},v=async f=>{await fetch(`${a}/api/budgets/${f}`,{method:"DELETE"}),await m()};M(m);function g(){s=this.value,p(1,s)}function r(){i=F(this.value),p(2,i)}return[d,s,i,o,v,g,r,f=>v(f.id)]}class W extends R{constructor(l){super(),x(this,l,K,G,H,{})}}export{W as component};
