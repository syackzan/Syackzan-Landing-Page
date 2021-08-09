console.log("Yay");

function change() {
    var elem = document.getElementById ("buttonclose");
    if (elem.value === "-") {
        elem.value = "+";
    } else {
        elem.value = "-";
    }
}

