import{_ as p}from"./CuMZEnHH.js";import{d as l,bk as m,D as o,c as i,ai as v,E as b}from"./DtQEuP9O.js";const _=l({__name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})}},setup(a){const e=a,d=m().isEnabled(),r=o(()=>{let t=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(t=e.value.excerpt),t}),c=o(()=>{const{body:t,excerpt:u,...n}=e.value;return{...n,...e.data}}),s=o(()=>({...e.components,...c.value._components||{}}));return(t,u)=>{const n=p;return i(),v(n,{body:r.value,data:c.value,tag:a.tag,components:s.value,"data-content-id":b(d)?a.value._id:void 0},null,8,["body","data","tag","components","data-content-id"])}}});export{_};
