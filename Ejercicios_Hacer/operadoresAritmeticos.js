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


const pi2 = 3.14;
let r2 = Number(prompt("introduce radio:"))

let resultado4_1 = pi * r2 **2;

document.getElementById("ej-1.4.1").innerText = `El resultado de 3.14 * r = 10 **2 eeeeeeees: ${resultado4_1}`



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

//Ejercicio 1
let c = 10 + 3;

console.log(c);

document.getElementById("eje-1").innerText = `El resultado es: ${c}`;

let cc = 10;

let resultado_cc = cc+=3;

document.getElementById("eje-1.1").innerText = `El resultado es: ${resultado_cc}`;

//Ejercicio 2


let variableTotal = 50;

let resultado1_1 = variableTotal - 10;

variableTotal = resultado1_1;

console.log(variableTotal);

document.getElementById("eje-1.2").innerText = `El resultado es: ${variableTotal}`;
let porcentaje = variableTotal * 0.21;

let resultado1_2= variableTotal + porcentaje;

variableTotal = resultado1_2;

console.log(variableTotal);
document.getElementById("eje-1.3").innerText = `El resultado es: ${variableTotal}`;
let porcentaje_10 = 20 * 0.10;

let añadir = 20 + porcentaje_10;

let resultado1_3 = variableTotal + añadir;

variableTotal = resultado1_3;

console.log(variableTotal);
document.getElementById("eje-1.4").innerText = `El resultado es: ${variableTotal}`;

//Ejercicio 3

let contador = 5;

let resultado1_4 = contador * 2
 resultado1_4 = resultado1_4 * 2;
 resultado1_4 = resultado1_4 * 2;
 resultado1_4 = resultado1_4 * 2;
 resultado1_4 = resultado1_4 * 2;


document.getElementById("eje-1.5").innerText = `El resultado es: ${resultado1_4}`;

//Ejercicio 4

let variable_y = 15;

let resultado1_1_1 = variable_y / 3;
document.getElementById("eje-1.5.1").innerText = `El resultado es: ${resultado1_1_1}`;
let resultado1_1_2 = variable_y / 5;
document.getElementById("eje-1.5.2").innerText = `El resultado es: ${resultado1_1_2}`;
let resultado1_1_3 = variable_y / 7;
document.getElementById("eje-1.5.3").innerText = `El resultado es: ${resultado1_1_3}`;
let resultado1_1_4 = variable_y / 10;
document.getElementById("eje-1.5.4").innerText = `El resultado es: ${resultado1_1_4}`;

let resultado_resto = resultado1_1_1 % 1;
document.getElementById("eje-1.5.1.1").innerText = `El resto es: ${resultado_resto}`;
let resultado_resto1 = resultado1_1_4 % 1;
document.getElementById("eje-1.5.1.2").innerText = `El resto es: ${resultado_resto1}`;

//Ejercicio 5

let saldo = 100;

let resultado1_2_1 = saldo * 0.90;
document.getElementById("eje-1.6.1").innerText = `El resultado es: ${resultado1_2_1}`;
let resultado1_2_2 = saldo - 15;
document.getElementById("eje-1.6.2").innerText = `El resultado es: ${resultado1_2_2}`;
let resultado1_2_3 = saldo * 1.125;
document.getElementById("eje-1.6.3").innerText = `El resultado es: ${resultado1_2_3}`;
let resultado1_2_4 = saldo / 2;
document.getElementById("eje-1.6.4").innerText = `El resultado es: ${resultado1_2_4}`;

//OPERADORES DE COMPARACION

//Ejercicio 1
console.log("OPERADORES DE COMPARACIÓN")
console.log(7 > 3); //7 es mayor que 3 eso es true 
console.log(3 < 7); //3 es menor que 7 eso es true
console.log(1 == '1'); // 1 es == que 1 no tiene encuenta el tipo de dato asique es true
console.log(1 === '1'); // 1 es === que '1' aqui sale false ya que con el triple = estamos haciendo una comparacion estricta 
console.log(3 != '3'); //aqui devuelve false por que 3 es = a 3 y aqui estas haciendo una conversion de tipo implicito
console.log(3 !== 3.0);// aqui devuelve false tambien pero estamos haciendo una comparacion estricta  y javascrip tiene encuenta tanto el valor como el tipo de dato y aunque los dos tengan el mismo valor unoo es un numero entero y otro tiene decimales.

//Ejercicio 2

let edad = Number(prompt("Introduce tu edad"))

let comparacion1 = edad > 18 ;

document.getElementById("eje-1.7.1").innerText = `¿Es mayor de edad?: ${comparacion1}`;

let comparacion2 = edad < 18 ;

document.getElementById("eje-1.7.2").innerText = `¿Es menor de edad?: ${comparacion2}`;

let comparacion3 = edad >= 25 && edad <= 35 ;

document.getElementById("eje-1.7.3").innerText = `¿Está entre 25 y 35 años?: ${comparacion3}`;

let comparacion4 = edad > 65 ;

document.getElementById("eje-1.7.4").innerText = `¿No es mayor de 65 años?: ${comparacion4}`;

let comparacion5 = edad >= 13 && edad <= 24 ;

document.getElementById("eje-1.7.5").innerText = `Tiene entre 13 y 24 años cumplidos: ${comparacion5}`;


let num1_v = 5;

let resultado444 = num1_v >= 0;
console.log("El numero es: " + resultado444);

let resultado111 = num1_v >= -9 && num1_v <= 9;

console.log("El numero es: " + resultado111);

let calculo_par = num1_v % 2;
let resultado_par = calculo_par ===0;
console.log("El numero es par: " + resultado_par);

let calculo_impar = num1_v % 2;
let resultado_impar = calculo_impar !==0;
console.log("El numero es par: " + resultado_impar);

let calculo_divisible3 = num1_v % 3;
let resultado_divisible3 = calculo_divisible3 ===0;
console.log("El numero es divisible 3: " + resultado_divisible3);

//Ejercicio 4 String

//recorrer string : .length .charAt .includes
let string = "Hola, ¿qué tal?";

let lectura_de_string = string.length;

let comparacion = lectura_de_string > 10;

console.log("¿Tiene mas de 10 caracteres?: " + comparacion);

//Leer si comienza por h

let lectura_h = string.charAt(0) ==='H';

console.log("¿Empieza por h?: " + lectura_h );

let lectura_espacio = string.includes(' ');

console.log("¿Tiene algún espacio?: " + lectura_espacio);












