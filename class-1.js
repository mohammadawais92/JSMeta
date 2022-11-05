//To make webpages interactive JS is used.
// These are project based classes taught by Hira Khan and Adil Altaf from Panaverse, PIAIC.
// Date is 8-Oct-2022, 8:00 PM
//How do we run JS ? Common is browser based.
//Alt+Shift+A is VScode shortcut for multiline comments.
//Create index.html file.

// alert("Asslam-o-alikum");
// console.log("Hi Console from JS");
// prompt('Please input your name');
// console.log(prompt('What is your name?'))

// const uName = prompt('What is your name?');
// console.log(uName);

var teacherName = "Alexender";
console.log(typeof teacherName);
let changedName = true;
console.log(typeof changedName);
let newType; //implicit undefined
console.log(typeof newType);
let Student = null;
console.log(typeof Student)
let Student1 = "" ;
console.log(typeof Student1)
//escape characters
let str = "Hi, what is your name? Is it \"Max\" ?" ;
console.log(str)
// Converter Project Chap-1
//1 Mile = 1.60934 KMs
let KilotoMile = 1.60934;
let Kilometers = prompt('Enter distance in KMs');
// console.log(Kilometers,'KMs')
let outputMiles = Kilometers*KilotoMile;
// console.log(outputMiles, "Miles")
console.log('The Distance of', `${Kilometers}`, 'KM' , 'are equal to' , `${outputMiles}`, 'Miles');

//BMI Calculator///

let inchHeight = prompt('Enter height in inches')
let weightPound = prompt('Enter weight in Pounds')
console.log(inchHeight, 'cm')
console.log(weightPound, 'Pounds')
let cmHeight = inchHeight*2.54
let weightKilo = weightPound/2.2046
let BMI = weightKilo/(cmHeight**2)
console.log(BMI, 'BMI')