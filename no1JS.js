function min(a,  b) {
    if (a>b){
        return b;
    }
    else {
        return a;
    }
};

//Easy

const students = ["Frank", "Aguwa", 19, "Kingsley", "Colt", 22, "Amir", "Hunter", 15];
console.log(`Hello, my name is ${students[3]} ${students[4]} and I'm ${students[5]}.`);

//MEDIUM

const months = ["null", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var num = window.prompt("Enter a number from 1-12");
if (num < 1 || num > 12) {
    console.log("Invalid input");
} else {
    console.log(`${months[num]}`);
}

//HARD 

var tHeight = 9;
var tMass = 8;
var jHeight = 10;
var jMass = 45;
var comp = false;
var tBMI = tMass / (tHeight * tHeight);
var jBMI = jMass / (jHeight * jHeight);
if (tBMI > jBMI){
    comp = true;
}
console.log(`Is Tom’s BMI higher than Jerry’s? ${comp}`);