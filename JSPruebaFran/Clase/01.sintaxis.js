
console.log('Hola mundo desde archivo externo!' + "<br>");
console.log("Hola mundo desde archivo externo!" + "<br>");

let array = ['Pepe', 'Juan', 'jota', 'Sergio', 'Marina', 'Ivan'];
console.log("hola soy: " + array[0] + "<br>");

for (let i = 0; i < array.length; i++){

    console.log("los nombres del array son: " + [i] + " . " + array[i] + "<br>");
}

if(array.length < 7){

    console.log("Existe" + "<br>");

}
else{
    console.log("No existe")
};

if(array.length <6){

    console.log("Existe");
}
else{
    console.log("No existe")
};

document.getElementById("p1").innerHTML = "<h1>Hola buenas tardes</h1>"


