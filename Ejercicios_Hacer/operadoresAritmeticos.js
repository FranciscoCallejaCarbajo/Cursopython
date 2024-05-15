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

function calcularAreaTriangulo(base,altura){

    let area1 = (1/2) * base * altura;
    return area1;

}

let base1 = Number(prompt("Dime tu base"));
let altura1 = Number(prompt("Dime tu altura"));

let area1 = calcularAreaTriangulo(base1,altura1);


document.getElementById("ej-2.1").innerText = `El area del triangulo es: ${area1}`;
