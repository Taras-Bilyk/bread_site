var hamburger = document.querySelector(".burger")
var menu = document.querySelector(".naw_menu")

hamburger.onclick = function(){
    hamburger.classList.toggle("burger_open")
    menu.classList.toggle("menu_open")
}
