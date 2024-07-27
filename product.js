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

//Product Search functionality

var productcont = document.getElementById("product-container")
var productcont2 = document.getElementById("product-container2")
var search = document.getElementById("search")
var productlist = productcont.querySelectorAll("div")
var productlist2 = productcont2.querySelectorAll("div")


search.addEventListener("keyup", function(){
    var enteredvalue = event.target.value.toUpperCase()

    for(count = 0; count < productlist.length; count = count + 1){

        var productname = productlist[count].querySelector("h1").textContent
        var productname2 = productlist2[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredvalue) < 0){

            productlist[count].style.display = "none"
        }

        else{
            productlist[count].style.display = "block"
        }

        if(productname2.toUpperCase().indexOf(enteredvalue) < 0){

            productlist2[count].style.display = "none"
        }

        else{
            productlist2[count].style.display = "block"
        }
    }
})