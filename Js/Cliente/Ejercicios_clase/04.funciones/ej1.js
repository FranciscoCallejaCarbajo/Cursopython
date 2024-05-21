

const funcionSuma = function(num1,num2){

    return num1 + num2;
}
xl= funcionSuma(3.5,3.5);
document.getElementById("ej1_1").innerText = ` Esta es la suma: ${xl}`;

// console.log(xl);


// let a = Number(prompt("Introduce el primer numero"));
// let b = Number(prompt("Introduce el segundo numero"));
let a = 10;
let b = 5;

const funcionResta = function(num1,num2){

    return  num1 - num2;

}

console.log(funcionResta(a,b));
console.log(funcionSuma(a,b));
document.getElementById("ej1_2").innerText = ` Esta es la suma: ${funcionSuma(a,b)}`;
document.getElementById("ej1_3").innerText = ` Esta es la Resta: ${funcionResta(a,b)}`;