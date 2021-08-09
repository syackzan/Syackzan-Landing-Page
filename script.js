console.log("Today");

/*function change() {
    var elem = document.getElementById ("ab-button");
    if (elem.value == "-") elem.value = "+";
    else elem.value = "-";
} */

function change () {

    var graphic = document.getElementById("ab-button");

    if (graphic.value == "-") {
        document.getElementById("article").style.display = "none";
        graphic.value = "+";
    } else {
        document.getElementById("article").style.display = "";
        graphic.value = "-";
    }
}

function change () {
    var pgraphic = document.getElementById("p-button");
    
    if (pgraphic.value == "-"){
        document.getElementById("main").style.display = "none";
        pgraphic.value = "+";
    } else {
        document.getElementById("main").style.display = "";
        pgraphic.value = "-";
    }
}
