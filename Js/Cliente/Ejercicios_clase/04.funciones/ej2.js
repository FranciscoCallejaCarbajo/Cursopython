
const esPar = function(num1){
return num1 % 2 ==0;

}

console.log(`El numero es par ${esPar(6)}`);
console.log(`El numero es par ${esPar(5)}`);

const esMultiplo = function(num1, num2){

    return num1 % num2 ==0;

}

console.log(`El numero es multipo: ${esMultiplo(40,4)}`);
console.log(`El numero es multipo: ${esMultiplo(23,4)}`);




const repeticion = function(a,numrep){

    let cadena = ' ';

    for(let i = 0;i<numrep;i++){

        cadena +=a;
    }

return cadena;
    

}

let a = prompt("introduce la letra a")
let numRep = Number(prompt("Introduce el numero de repeticiones"));

console.log(`Esta es mi cadena: ${repeticion(a,numRep)}`);
