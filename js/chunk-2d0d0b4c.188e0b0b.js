(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0b4c"],{"68b6":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"editor"})},l=[],u=(n("99af"),n("6c81")),o=n.n(u),r=(n("a753"),n("8096"),n("14e1"),{name:"d2-quill",props:{value:{type:String,required:!1,default:""}},data:function(){return{Quill:void 0,currentValue:"",options:{theme:"snow",bounds:document.body,debug:"warn",modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image"]]},placeholder:"书写你的内容",readOnly:!1}}},watch:{value:{handler:function(e){e!==this.currentValue&&(this.currentValue=e,this.Quill&&this.Quill.pasteHTML(this.value))},immediate:!0}},mounted:function(){this.init()},methods:{init:function(){var e=this,t=this.$refs.editor;this.Quill=new o.a(t,this.options),this.Quill.pasteHTML(this.currentValue),this.Quill.on("text-change",(function(t,n,i){var l=e.$refs.editor.children[0].innerHTML,u=e.Quill.getText(),o=e.Quill;e.currentValue=l,e.$emit("input",l),e.$emit("change",{html:l,text:u,quill:o})})),this.Quill.on("text-change",(function(t,n,i){e.$emit("text-change",t,n,i)})),this.Quill.on("selection-change",(function(t,n,i){e.$emit("selection-change",t,n,i)})),this.Quill.on("editor-change",(function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),l=1;l<n;l++)i[l-1]=arguments[l];e.$emit.apply(e,["editor-change",t].concat(i))}))}}}),a=r,c=n("2877"),s=function(e){e.options.__source="src/components/d2-quill/index.vue"},d=s,h=Object(c["a"])(a,i,l,!1,null,null,null);"function"===typeof d&&d(h);t["default"]=h.exports}}]);