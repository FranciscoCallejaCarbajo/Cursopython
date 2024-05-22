//Validamos si una edad es mayor, menor o igual que 18

let edad = parseInt(prompt("Ingresa tu edad:"));



//if

if (edad < 18) {

    console.log("no puedes pasar");
}

//if else

if (edad < 18){
    console.log("Eres menor de edad");

}else{
    console.log("Eres mayor de edad o tienes al menos 18");
}

//if + else + if + else
if (edad < 18){

    console.log("Tienes menos de 18");
}else if(edad ==18){
    console.log("Tienes 18 años");

}else{

    console.log("Tienes más de 18 años!!");
}

//Varios else if

let dia = prompt("Ingresa el dia de la semana");

if (dia == 'lunes'){

    console.log("Es lunes");
}else if(dia == 'martes'){

    console.log("Es martes");
}else if(dia == 'miercoles'){

    console.log("Es miercoles");
}else if(dia == 'jueves'){

    console.log("Es jueves");
}else if(dia == 'viernes'){

    console.log("Es viernes");
}else if(dia == 'sabado'){

    console.log("Es sabado");
}else if(dia == 'domingo'){

    console.log("Es domingo");
}