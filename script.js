console.log("Today");
parentBox1 = document.getElementById("parentBox1");
popup1 = document.getElementById("popup1");
popup2 = document.getElementById("popup2");
popup3 = document.getElementById("popup3");
popup4 = document.getElementById("popup4");
popup5 = document.getElementById("popup5");

/*function change() {
    var elem = document.getElementById ("ab-button");
    if (elem.value == "-") elem.value = "+";
    else elem.value = "-";
} */

//Controls minimizer Button for About Me Sections
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

//Controls minimizer Butoon for Portfolio Section
function changeme () {
    var pgraphic = document.getElementById("p-button");
    
    if (pgraphic.value == "-"){
        document.getElementById("main").style.display = "none";
        pgraphic.value = "+";
    } else {
        document.getElementById("main").style.display = "";
        pgraphic.value = "-";
    }
}

parentBox1.onmouseover = function(){
    popup1.style.display = "block";
}
parentBox1.onmouseout = function(){
    popup1.style.display = "none";
}
parentBox2.onmouseover = function(){
    popup2.style.display = "block";
}
parentBox2.onmouseout = function(){
    popup2.style.display = "none";
}
parentBox3.onmouseover = function(){
    popup3.style.display = "block";
}
parentBox3.onmouseout = function(){
    popup3.style.display = "none";
}
parentBox4.onmouseover = function(){
    popup4.style.display = "block";
}
// parentBox5.onmouseout = function(){
//     popup5.style.display = "none";
// }
// parentBox6.onmouseover = function(){
//     popup6.style.display = "block";
// }
// parentBox6.onmouseout = function(){
//     popup6.style.display = "none";
// }