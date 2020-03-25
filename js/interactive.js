let menu = document.getElementById("menu");
let navbar = document.getElementById("navbar");
var y_axis = 0;
// var anthemButton = document.getElementById("anthemButton");

navbar.style.display = "none";

// responsive button
menu.addEventListener('click', function(e) {
    menu.classList.toggle("resStyle");
    if(navbar.style.display == "none") {
        navbar.style.display = "block";
        setTimeout(function() {
            navbar.style.opacity = "1";
        }, 100);
    } else {
        navbar.style.opacity = "0";
        setTimeout(function() {
            navbar.style.display = "none";
        }, 300);
    }
})

function scrollEffect() {
    var currentY = window.pageYOffset;
    var menuContainer = document.getElementById("menu-container");
    var menu = document.getElementsByClassName("menu");
    if(y_axis > currentY) {
        menuContainer.style.top = "0px";
        // console.log('working');
    } else {
        menuContainer.style.top = "-60px";
    }
    if(currentY == 0) {
        menuContainer.style.background = "transparent";
        menuContainer.style.boxShadow = "0px 0px";
    } else {
        menuContainer.style.backgroundColor = "#fff";
        menuContainer.style.boxShadow = "0px 0px 5px 5px rgba(0,0,0,0.2)"
    }
    // Global variable
    y_axis = currentY;
}

function anthemTextShow() {
    var anthemText = document.getElementById("anthem-text");
    anthemText.classList.toggle('textdesign');
}
