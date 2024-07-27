//Selecting Side Nav and Menu icon

var sidenav = document.getElementById("sidenav")
var menubar = document.getElementById("menu")
var closenav = document.getElementById("closenav")

menubar.addEventListener("click", function(){
    sidenav.style.right = "0%"
})

closenav.addEventListener("click", function(){
    sidenav.style.right = "-50%"
})