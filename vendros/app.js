var hbar=document.querySelector(".hidden-bar")
var menu=document.querySelector(".fmenu")
hbar.onclick=function(){
    menu.classList.toggle("active")
}


var fli=document.querySelector(".fli")
var phmenu=document.querySelector(".phonemenu")
fli.onclick=function(){
    phmenu.classList.toggle("active")
}

$(window).scroll(function(){
var scroll = $(window).scrollTop()
$("#mynavbar").css("top","5%")
if(scroll < 200){
    $('#mynavbar').css('background','transparent')
}else{
    $('#mynavbar').css('background','linear-gradient(89deg,#a5215e 3%,#ee5586 98%)')
    $("mynavbar").css("top","0")



}
});

var hbar=document.querySelector(".hidden-bar")
var menu=document.querySelector(".fmenu")



var imp=document.querySelector(".imp")
var chat=document.querySelector(".main-chat")
imp.onclick=function(){
    chat.classList.toggle("active")
}