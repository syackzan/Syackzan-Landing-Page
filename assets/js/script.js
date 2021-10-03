let btn1 = document.getElementById('btn1');
let jumbo1 = document.getElementById('jumbo1')
let value1 = true;

let btn2 = document.getElementById('btn2');
let jumbo2 = document.getElementById('jumbo2')
let value2 = true;


const displayJumbo1 = () => {

    if (value1){
        btn1.value = "+";
        jumbo1.style.display = "none";
        value1 = false;
    } else {
        btn1.value = "-";
        jumbo1.style.display = "block";
        value1 = true;
    }
}

const displayJumbo2 = () => {

    if (value2){
        btn2.value = "+";
        jumbo2.style.display = "none";
        value2 = false;
    } else {
        btn2.value = "-";
        jumbo2.style.display = "block";
        value2 = true;
    }
}




btn1.addEventListener('click', displayJumbo1)
btn2.addEventListener('click', displayJumbo2)

