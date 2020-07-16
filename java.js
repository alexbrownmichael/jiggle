AOS.init();

window.onscroll = function() { navanimate ()};
function navanimate (){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("nav1").classList.add("myFunctionw");
    }
    else{
        document.getElementById("nav1").classList.remove("myFunction");
    }
}