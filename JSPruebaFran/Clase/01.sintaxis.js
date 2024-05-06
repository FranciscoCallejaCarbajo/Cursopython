
console.log('Hola mundo desde archivo externo!' + "<br>");
document.write("Hola mundo desde archivo externo!" + "<br>");

let array = ['Pepe', 'Juan', 'jota', 'Sergio', 'Marina', 'Ivan'];
document.write("hola soy: " + array[0] + "<br>");

for (let i = 0; i < array.length; i++){

    document.write("los nombres del array son: " + [i] + " . " + array[i] + "<br>");
}

if(array.length < 10){

    document.write("Existe");

}
else{document.write("No existe");}