import{s as O,n as S}from"../chunks/scheduler.CtbWrGNo.js";import{S as N,i as q,e as o,s as L,c as d,n as j,f as C,a as g,d as u,o as i,g as A,h as t,p as z,t as $,b as k}from"../chunks/index.BNYX7XES.js";function F(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}const G=[{day:"mon",amount:17.45},{day:"tue",amount:34.91},{day:"wed",amount:52.36},{day:"thu",amount:31.07},{day:"fri",amount:23.39},{day:"sat",amount:43.28},{day:"sun",amount:25.48}];function J(r,e,f){const s=r.slice();return s[0]=e[f],s}function K(r){let e,f,s,h,m=r[0].amount+"",p,T,b,a,c,H=r[0].day+"",R,v;return{c(){e=o("li"),f=o("div"),s=o("p"),h=$("$"),p=$(m),T=L(),b=o("div"),a=L(),c=o("p"),R=$(H),v=L(),this.h()},l(y){e=d(y,"LI",{class:!0});var n=g(e);f=d(n,"DIV",{class:!0});var I=g(f);s=d(I,"P",{class:!0});var x=g(s);h=k(x,"$"),p=k(x,m),x.forEach(u),I.forEach(u),T=C(n),b=d(n,"DIV",{class:!0}),g(b).forEach(u),a=C(n),c=d(n,"P",{class:!0});var B=g(c);R=k(B,H),B.forEach(u),v=C(n),n.forEach(u),this.h()},h(){i(s,"class","bodyRegular text-neutral-white"),i(f,"class","amount -top-12 absolute bg-neutral-darkBrown rounded-sm w-[75px] h-10 flex items-center justify-center"),i(b,"class",`${r[0].day} w-[33px] md:w-[50px] rounded-md`),i(c,"class","bodyRegular text-sm text-neutral-mediumBrown"),i(e,"class","flex items-center flex-col group relative gap-[8px]")},m(y,n){A(y,e,n),t(e,f),t(f,s),t(s,h),t(s,p),t(e,T),t(e,b),t(e,a),t(e,c),t(c,R),t(e,v)},p:S,d(y){y&&u(e)}}}function Q(r){let e,f="<h1>Expenses chart component</h1>",s,h,m,p,T='<div class="flex flex-col gap-2"><h3 class="bodyRegular text-neutral-white">My balance</h3> <p class="headingS tracking-wide text-neutral-white font-medium">$921.48</p></div> <figure><img src="/assets/images/logo.svg" alt=""/></figure>',b,a,c,H="Spending - Last 7 days",R,v,y,n,I,x,B=`<p class="bodyRegular text-neutral-mediumBrown flex flex-col">Total this month
					<span class="headingM text-neutral-darkBrown tracking-[0.9px]">$478.33</span></p> <div class="flex flex-col gap-1 items-end mb-1"><p class="bodyRegular text-neutral-darkBrown font-extrabold">+2.4%</p> <p class="bodyRegular text-neutral-mediumBrown">from last month</p></div>`,P=F(G),w=[];for(let l=0;l<P.length;l+=1)w[l]=K(J(r,P,l));return{c(){e=o("header"),e.innerHTML=f,s=L(),h=o("main"),m=o("section"),p=o("article"),p.innerHTML=T,b=L(),a=o("article"),c=o("h2"),c.textContent=H,R=L(),v=o("ol");for(let l=0;l<w.length;l+=1)w[l].c();y=L(),n=o("div"),I=L(),x=o("div"),x.innerHTML=B,this.h()},l(l){e=d(l,"HEADER",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-1sfzdbv"&&(e.innerHTML=f),s=C(l),h=d(l,"MAIN",{class:!0});var M=g(h);m=d(M,"SECTION",{class:!0});var E=g(m);p=d(E,"ARTICLE",{class:!0,"data-svelte-h":!0}),j(p)!=="svelte-x55055"&&(p.innerHTML=T),b=C(E),a=d(E,"ARTICLE",{class:!0});var _=g(a);c=d(_,"H2",{class:!0,"data-svelte-h":!0}),j(c)!=="svelte-1vdbjj9"&&(c.textContent=H),R=C(_),v=d(_,"OL",{class:!0});var V=g(v);for(let D=0;D<w.length;D+=1)w[D].l(V);V.forEach(u),y=C(_),n=d(_,"DIV",{class:!0}),g(n).forEach(u),I=C(_),x=d(_,"DIV",{class:!0,"data-svelte-h":!0}),j(x)!=="svelte-v0g428"&&(x.innerHTML=B),_.forEach(u),E.forEach(u),M.forEach(u),this.h()},h(){i(e,"class","sr-only"),i(p,"class","bg-primary-softRed pr-10 pl-8 pt-[27px] pb-[25px] rounded-[20px] flex justify-between items-center"),i(c,"class","headingS text-neutral-darkBrown tracking-[0.4px]"),i(v,"class","w-full flex justify-between items-end h-[226px] mt-4"),i(n,"class","my-8 h-0 w-full border-b border-solid border-neutral-cream"),i(x,"class","flex w-full justify-between items-end"),i(a,"class","bg-neutral-veryPaleOrange pt-8 p-6 md:p-10 rounded-2xl"),i(m,"class","flex flex-col gap-6"),i(h,"class","w-full max-w-[540px]")},m(l,M){A(l,e,M),A(l,s,M),A(l,h,M),t(h,m),t(m,p),t(m,b),t(m,a),t(a,c),t(a,R),t(a,v);for(let E=0;E<w.length;E+=1)w[E]&&w[E].m(v,null);t(a,y),t(a,n),t(a,I),t(a,x)},p:S,i:S,o:S,d(l){l&&(u(e),u(s),u(h)),z(w,l)}}}class X extends N{constructor(e){super(),q(this,e,null,Q,O,{})}}export{X as component};