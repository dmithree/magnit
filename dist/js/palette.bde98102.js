(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["palette"],{"0af6":function(e,t,a){"use strict";a("33bb")},"33bb":function(e,t,a){},"4cc9":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-content"},[a("h1",{staticClass:"page-content__title"},[e._v("Палитра")]),a("p",{staticClass:"page-content__description"},[e._v(" The design system includes a palette that can be used to theme components. ")]),e._l(e.palettes,(function(e){return a("ColorPalette",{key:e.id,attrs:{colorPalette:e}})}))],2)},o=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"color-palette"},[a("h3",{staticClass:"color-palette__title"},[e._v(e._s(e.colorPalette.title))]),a("div",{staticClass:"colors-grid"},e._l(e.colorPalette.colors,(function(e){return a("ColorCard",{key:e.id,attrs:{color:e}})})),1),a("hr")])},r=[],n=a("dd10"),s={props:{colorPalette:{type:Object,required:!0,default:function(){}}},components:{ColorCard:n["a"]}},i=s,u=(a("0af6"),a("2877")),d=Object(u["a"])(i,c,r,!1,null,"2391e441",null),p=d.exports,v={data:function(){return{palettes:[{title:"Primary",colors:[{name:"light",value:"#e8f2ff"},{name:"base",value:"#0068EF"},{name:"dark",value:"#049"}]},{title:"Secondary",colors:[{name:"light",value:"#ecf7ec"},{name:"base",value:"#0a0"},{name:"dark",value:"#060"}]}]}},components:{ColorPalette:p}},f=v,_=Object(u["a"])(f,l,o,!1,null,"9e7348e4",null);t["default"]=_.exports},"73f7":function(e,t,a){"use strict";a("aebd")},aebd:function(e,t,a){},dd10:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.color.value,expression:"color.value"}],staticClass:"color-card"},[a("div",{staticClass:"color-card__box",style:{background:e.color.value}}),a("span",[e._v("Скопировать")]),a("div",{staticClass:"color-card__text"},[a("div",[e._v(e._s(e.color.name))]),a("code",[e._v(e._s(e.color.value))])])])},o=[],c={props:{color:{type:Object,require:!0,default:function(){}}}},r=c,n=(a("73f7"),a("2877")),s=Object(n["a"])(r,l,o,!1,null,"6a7ddc8a",null);t["a"]=s.exports}}]);
//# sourceMappingURL=palette.bde98102.js.map