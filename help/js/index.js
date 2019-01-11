var __vm = null;
var __default_prefix = "/_data_/helps/";
function init(){
    __vm = new Vue({
        el:"#app",
        data:{
            contentHtml:null,
        },
        mounted:function(){
            __fetchContent(__getMDUrlFromPara());
        }
    });
}
function __getMDUrlFromPara(){
    var p =  getUrlParam("md");
    return __default_prefix +(p == null? "index.md":p);
}
function __MarkDownToHtml(md){
    return marked(md);
}
function __fetchContent(url){
    fetch(url)
    .then(response=>response.text())
    .then((text)=>{
        __vm.$data.contentHtml = __MarkDownToHtml(text);
        setTimeout(()=>{
            $('html, body').animate({scrollTop: $("#" + getUrlParam("node")).offset().top - 50}, 1000);
        },500)
        console.log(getUrlParam("node"));
    }).catch((e)=>{
        console.log(e);
    });
}
$(document).ready(init);