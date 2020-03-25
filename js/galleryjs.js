var filterText = document.getElementById("filter");
var button = document.getElementById("filterbtn");
var imgdiv = Array.from(document.querySelectorAll(".photos-container div"));
var resizeBtn = document.getElementById("imageresizer");
var isLarge = false;

button.addEventListener("click", function() {
    var text = filterText.value;
    text = text.toLowerCase();
    if(text != "" && text != "all" ) {
        imgdiv.forEach((div) => {
            if(!div.classList.contains(text)) {
                div.style.display = "none";
            } else {
                div.style.display = "inline-block";
            }
        });
    } else {
        imgdiv.forEach((div) => {
            div.style.display = "inline-block";
        })
    }
})

resizeBtn.addEventListener("click", ()=> {
    if(!isLarge) {
        resizeBtn.value = "Click here to make the image smaller";
        imgdiv.forEach((div) => {
            div.style.display = "block";
            div.style.height = "auto";
            div.style.width = "90%";
        })
        isLarge = true;
    } else {
        resizeBtn.value = "Click here to make the image larger";
        imgdiv.forEach((div) => {
            div.style.display = "inline-block";
            div.style.height = "auto";
            div.style.width = "40%";
        })
        isLarge = false;
    }
})