// sticky navigation menu

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;


window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.sytle.display = "block";

    }
    else{
        nav.classList.remove("sticky");
        scrollBtn.sytle.display = "none";
        
    }
}

// side navigation menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");


menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.sytle.opacity = "0";
    menuBtn.sytle.pointerEvents = "none";
    body.style.overflowX = "hidden";
    scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.sytle.opacity = "1";
    menuBtn.sytle.pointerEvents = "auto";
    body.style.overflowX = "auto";
    scrollBtn.style.pointerEvents = "auto";
}

// side navigation bar close while we click on navigation links

let navLinks = document.querySelectorAll(".menu li a");
for(var i =0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click",function(){
        navBar.classList.remove("active");
        menuBtn.sytle.opacity = "1";
        menuBtn.sytle.pointerEvents = "auto";
        body.style.overflowX = "auto";
        scrollBtn.style.pointerEvents = "auto";
})
}
let a =document.getElementsByClassName("ab")


setInterval(myTimer, 1 );

function myTimer() {
  const d = new Date();
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element.style)
    if(window.scrollY!=0){
        element.style.fontSize="0"
        nav.style.backgroundColor ="#fff"
    }else{
        nav.style.backgroundColor ="transparent"
        element.style.fontSize="18px"
    }
}
}