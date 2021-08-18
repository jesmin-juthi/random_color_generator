var colorContainer = document.getElementById("colorCode");
var genBtn = document.getElementById("genNewColor");
var symbols = "0123456789ABCDEF";
var color = "";

genBtn.addEventListener('click', function(){
    for(var i=0; i<6; i++){
        color += symbols[Math.floor(Math.random() * 16)];
    }
    colorContainer.innerHTML = "#" + color;
    document.body.style.background = "#"+color;
    color = "";
});