import{r as n,w as f,g as M,c as d,F as w,a as C,b as g,h as k,o as v,n as B,t as R}from"./index-KRVyVLBl.js";const z={class:"relative top-[200px] left-[300px] w-[500px] h-[55px] bg-[#EEE] flex justify-center items-center rounded-[30px]"},E=["onClick","onMouseenter"],I={__name:"SwipeButtonView",setup(L){const p=n(["Menu 1","Menu 2","Menu 3","Menu 4"]),h=n("flex-1 text-center z-[1]"),o=n(0),a=n([]),u=n(0),t=n(null),i=n(null),r=n(null);f(t,()=>{(t.value||t.value===0)&&(r.value.style.left=a.value[t.value].left-o.value+"px")}),f(u,()=>{i.value.style.left=a.value[u.value].left-o.value+"px"});function _(e){t.value=e}function b(){t.value=null}function m(e){u.value=e}function x(){const e=[...document.getElementsByClassName("menuList")];a.value=[],e!=null&&e.length&&e.map((l,c)=>{c===0&&(o.value=l.getBoundingClientRect().left),i.value.style.width=l.getBoundingClientRect().width+"px",r.value.style.width=l.getBoundingClientRect().width+"px",a.value.push({width:l.getBoundingClientRect().width,left:l.getBoundingClientRect().left})})}return M(()=>{x()}),(e,l)=>(v(),d("div",z,[(v(!0),d(w,null,C(p.value,(c,s)=>(v(),d("span",{key:s,class:B(["h-full cursor-pointer transition-all ease-linear delay-[100ms] flex items-center justify-center",["menuList",h.value,{"text-white":s===u.value}]]),onClick:y=>m(s),onMouseenter:y=>_(s),onMouseleave:b},R(c),43,E))),128)),g("div",{ref_key:"blackRound",ref:i,class:"testtarget absolute bg-[rgb(2,0,36)] h-full rounded-[30px] left-[0px] transition-all ease-linear duration-[100ms] bg-[linear-gradient(133deg,_rgba(2,0,36,1),_rgba(25,25,25,1)_29%,_rgba(98,98,98,1))]"},null,512),g("div",{ref_key:"hoverRound",ref:r,class:"absolute bg-[rgb(2,0,36)] h-full rounded-[30px] left-[0px] transition-all ease-linear duration-[100ms] opacity-[.1] bg-[linear-gradient(133deg,_rgba(2,0,36,1),_rgba(25,25,25,1)_29%,_rgba(98,98,98,1))]",style:k({visibility:t.value||t.value===0?"visible":"hidden"})},null,4)]))}};export{I as default};
