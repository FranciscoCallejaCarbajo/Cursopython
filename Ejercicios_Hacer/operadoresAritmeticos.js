// calcula el resultado de las expresiones

let x = 10;
let y = 5;

let resultado = x + y *2;
let resultado2 = (x + y) *2;
let resultado3 = x + (5*2);

document.getElementById("ej-1").innerText = `El resultado de 10 + 5 * 2 es: ${resultado}`;
document.getElementById("ej-1.2").innerText = `El resultado de (10 + 5) * 2 es: ${resultado2}`;
document.getElementById("ej-1.3").innerText = `El resultado de 10 + (5 * 2) es: ${resultado}`;



const pi = 3.14;
let r = 10;

let resultado4 = pi * r **2;

document.getElementById("ej-1.4").innerText = `El resultado de 3.14 * r = 10 **2 es: ${resultado4}`

let a = 10 **3;
let b = 10 **-3;

document.getElementById("ej-1.5").innerText = `El resultado de 10 elevado a 3 es: ${a}`;
document.getElementById("ej-1.6").innerText = `El resultado de 10 elevado a 3 es: ${b}`;

//Area de un triangulo

let base = 6;
let altura = 4;

let area = (1/2) * base * altura;

let resultado7 = area + 10;

document.getElementById("ej-2").innerText = `El area del triangulo es: ${resultado7}`;

//para hacer una calculadora de areas de triangulo haria lo siguiente:

// function calcularAreaTriangulo(base,altura){

//     let area1 = (1/2) * base * altura;
//     return area1;

// }

// let base1 = Number(prompt("Dime tu base"));
// let altura1 = Number(prompt("Dime tu altura"));

// let area1 = calcularAreaTriangulo(base1,altura1);


// document.getElementById("ej-2.1").innerText = `El area del triangulo es: ${area1}`;

//Ejercicio numero 3 

let cuenta = 25/ (5-5);

let resultado8 = cuenta + 10;

document.getElementById("ej-2.2").innerText = `El resultado es: ${resultado8}`;

//perimetro de un cuadrado

let lado = 8;

let perimetro = 4 * lado;


document.getElementById("ej-2.3").innerText = `El resultado es: ${perimetro}`;

//calculadora calcular perimetro 

// let ladoC = Number(prompt("introduce valor del lado de tu cuadrado"));

// function calcularPerimetro (lado){

//     return lado * 4;

// }

// let perimetroT = calcularPerimetro(lado);

// document.getElementById("ej-2.4").innerText = `El resultado es: ${perimetroT}`;


//ejercicio 5 calcula el resultado elevado a

let calculo1 = 2**3;
let  calculo2 = 2^0;
let calculo3 = 0^0;

document.getElementById("ej-2.5.1").innerText = `El resultado es: ${calculo1}`;
document.getElementById("ej-2.5.2").innerText = `El resultado es: ${calculo2}`;
document.getElementById("ej-2.5.3").innerText = `El resultado es: ${calculo3}`;

//OPERADORES DE ASIGNACION

let c = 10 + 3;

console.log(c);

document.getElementById("eje-1").innerText = `El resultado es: ${c}`;

let cc = 10;

let resultado_cc = cc+=3;

document.getElementById("eje-1.1").innerText = `El resultado es: ${resultado_cc}`;



