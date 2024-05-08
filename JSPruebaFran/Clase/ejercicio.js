
//input : 100,21
//output: 121

let dineroTexto = prompt("Por favor, ingresa su dinero:");
let dinero = parseInt(dineroTexto);

console.log(dinero);

const iva = 21;

//let ibaProducto = dinero*iva/100;

 //let resultado = ibaProducto + dinero;

 
 //console.log(resultado);

 //document.getElementById("ej-1-1").innerText = resultado;


 function iba (){
    console.log(dinero);
    let ibaProducto = dinero*iva/100;
        console.log(ibaProducto);
    let resultado = dinero + ibaProducto;
        console.log(resultado);
    return resultado;
 }

 document.getElementById("ej-1-1").innerText = iba();
