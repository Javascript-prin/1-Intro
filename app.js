document.write("<h1>Hello World</h1>");
console.log("this is a string");

console.log({
    "username":'Ryan',
    "score":70.4,
    "hours":14,
    "profesional": true
});

let username = "john";
console.log(username);
let lastName = "Carter";
completeName = username + lastName
console.log(completeName);



const PI = 3.1415;
console.log(PI);


// operadores
let numberOne = 60;
let numberTwo = 70;
let resultSum = numberOne + numberTwo;
console.log(resultSum)


let passwordDB = 'pepe123';
let input = "pepe123";
let result = input == passwordDB;

console.log(result);

if (result == true){
    console.log("Correct login");
} else {
    console.log("incorrect login");
}

let score = 70;
if (score > 30){
    console.log("You need to practice more");
}else if (score > 15){
    console.log("You are getting better");
}
else {
    console.log("You need to follow this tutorial");
}

let typeCard = "Debid Card";

switch(typeCard){
    case 'Debid Card':
        console.log('This is a debid card');
        break;
    case 'Credit Card':
        console.log('This is a credit card');
        break;
    default:
        console.log("No card")

}

let count = 5;
while(count >= 0 ){
    console.log(count);
    count--;
}



let names = ['Joe', 'ryan','Martha'];
for(let i = 0; i < names.length; i+=1) {
    console.log(names[i]);
}




function greeting(name){
    console.log("Hello " + name);
}

greeting(names[2]);
