let menuicon = document.getElementById("menu-icon");
let navlist = document.getElementById("navlist");
let navbar = document.getElementById("navbar");


menuicon.addEventListener("click",()=>{
    navlist.classList.toggle("active")
}
)
window.addEventListener("scroll",()=>{
    if(window.scrollY >200){
        navbar.style.backgroundColor="white";
        menuicon.style.color="black"

    }else{
        navbar.style.background="none";
        menuicon.style.color="white";
    }
})