(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ef654aa"],{"056a":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"editor",staticClass:"ql-editor d2p-quill",class:{"is-disabled":"disabled"},staticStyle:{width:"100%","min-height":"300px"}})},l=[],a=(i("99af"),i("b0c0"),i("6c81")),o=i.n(a),r=(i("a753"),i("8096"),i("14e1"),i("0e05")),s=i("60bb"),u=i.n(s),c=i("0e00"),d=o.a.import("attributors/style/size");d.whitelist=["10px","14px","16px","18px","22px","26px","30px","34px","38px","45px"],o.a.register(d,!0);var p=["SimSun","SimHei","Microsoft-YaHei","KaiTi","FangSong","Arial","Times-New-Roman","sans-serif"],h=o.a.import("formats/font");h.whitelist=p,o.a.register(h,!0);var f={name:"d2p-quill",mixins:[c["a"].inputBase],props:{value:{type:String,required:!1,default:""},config:{type:Object},uploader:{type:Object,default:function(){return{}}}},data:function(){return{Quill:void 0,currentValue:"",options:{theme:"snow",bounds:document.body,debug:"warn",modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:d.whitelist}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:["Microsoft-YaHei","SimSun","SimHei","KaiTi","Arial","Times-New-Roman"]}],[{align:[]}],["clean"],["link","image","video"]]},placeholder:"书写你的内容",readOnly:!1}}},watch:{disabled:{handler:function(e){this.Quill&&this.Quill.enable(!e)},immediate:!0},value:{handler:function(e){e!==this.currentValue&&(this.currentValue=e,this.Quill&&(this.$emit("change",e),this.Quill.pasteHTML(this.value)))},immediate:!0}},mounted:function(){this.init()},methods:{init:function(){var e=this,t=this.$refs.editor;u.a.merge(this.options,this.config),this.Quill=new o.a(t,this.options);var i=this.Quill.getModule("toolbar");i.addHandler("image",(function(){e.handlerImage()})),this.Quill.enable(!1),this.Quill.pasteHTML(this.currentValue),this.disabled||this.$nextTick((function(){e.Quill.enable(!0)})),this.Quill.on("text-change",(function(t,i,n){var l=e.$refs.editor.children[0].innerHTML;e.currentValue=l,e.$emit("input",l),e.$emit("change",l)})),this.Quill.on("text-change",(function(t,i,n){e.$emit("text-change",t,i,n)})),this.Quill.on("selection-change",(function(t,i,n){e.$emit("selection-change",t,i,n)})),this.Quill.on("editor-change",(function(t){for(var i=arguments.length,n=new Array(i>1?i-1:0),l=1;l<i;l++)n[l-1]=arguments[l];e.$emit.apply(e,["editor-change",t].concat(n))})),this.$nextTick((function(){e.$emit("ready",{vm:e,quill:e.Quill})}))},handlerImage:function(){var e=this,t=this.Quill,i=document.createElement("input");i.setAttribute("type","file"),i.setAttribute("name","upload_file"),i.setAttribute("accept","image/png, image/gif, image/jpeg"),i.classList.add("ql-image"),i.addEventListener("change",(function(){var n=i.files[0],l={status:"uploading",progress:0},a=function(e){l.progress=e.percent},o=function(e){l.status="error",l.message="文件上传出错:"+e.message,console.log(e)},r={file:n,fileName:n.name,onProgress:a,onError:o};e.doUpload(r).then((function(e){var i=l.url=e.url;l.status="done";var n=t.getSelection(!0);t.insertEmbed(n.index,"image",i)}))})),i.click()},doUpload:function(e){return e.config=this.uploader,this.getUploader().then((function(t){return t.upload(e)}))},getUploader:function(){var e=this.type;return null!=this.uploader&&null!=this.uploader.type&&(e=this.uploader.type),r["a"].getUploader(e)},beforeUpload:function(e){return this.getUploader().beforeUpload(e)}}},m=f,g=(i("562b"),i("2877")),b=function(e){e.options.__source="node_modules/d2p-extends/src/full-editor/lib/d2-quill/index.vue"},v=b,x=Object(g["a"])(m,n,l,!1,null,null,null);"function"===typeof v&&v(x);t["default"]=x.exports},"562b":function(e,t,i){"use strict";var n=i("9738"),l=i.n(n);l.a},9738:function(e,t,i){}}]);