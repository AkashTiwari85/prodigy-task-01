window.onscroll = function(){
    var navbar = document.getElementById("navbar");
    if(document.body.scrollTop > 900 || document.documentElement.scrollTop > 900){
        navbar.style.backgroundColor = "#7fffd4"
    navbar.style.color = "#f0ffff";

}else{
    navbar.style.backgroundColor = "#f0ffff"
    navbar.style.color = "#7fffd4"
}
}