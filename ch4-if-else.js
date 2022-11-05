let age = 60;
if (age < 30){
    console.log('Young')
}
    else if (age > 50){
    console.log ('Mid-age')
}
    else { console.log ('Adult')}

//===Excersie 4.1 page:121========
let newVar = false
console.log (newVar)
if(newVar == true){
    console.log ('Value is True')
}

if(newVar !== false){
    console.log ('Yeah, its not false')
}

//==Ternary Operator ===

// operand1 ? operand2 : operand3;

//operand1 is the expression that is to be evaluated. If the value of the
//expression is true , operand2 gets executed. If the value of the expression
//is false , operand3 gets executed. You can read the question mark as
//"then" and the colon as "else" here.

let access = age < 18 ? "denied" : "allowed";

//Excersie 4.3 page:125
let ID = 'Valid';
let message = (ID === 'Valid' ? 'Allowed': 'Not Allowed')
console.log (message)
//Everything without a value is 'false' in boolean output.
//https://www.w3schools.com/js/js_booleans.asp

//Switch Statements.....//refer switch.js
