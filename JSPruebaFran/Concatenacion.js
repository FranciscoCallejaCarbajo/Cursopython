//Strings
saludo = "¡Hola Pedro!";
pregunta = " ¿Como estas?";

frase = saludo +  pregunta;

document.write(frase + "<br>");

//Esta manera la podemos usar para concatenar ya que si se detecta un string automaticamente todo se volvera una cadena de texto
//de esta manera nos sale 58 y no 13 
numero1 = 5;
numero2=8;
frase = " " + numero1 + numero2;
document.write(frase + "<br>");
//Sin Texto
numero1 = 5;
numero2=8;
frase = numero1 + numero2;
document.write(frase + "<br>");

//Con Cat
//Este metodo funciona siempre y cuando tengamos un string 
//Solo funciona con las cadenas 

numero1 = "5";
numero2=8;
frase = numero1.concat(numero2) ;
document.write(frase + "<br>");


//Concatenacion con backtiks y la variable entre ${}

nombre = " Fran";

frase = `Soy  ${nombre} y estoy caminando`;

document.write(frase + "<br>");

//Escape de comillas simple

nombre = " Fran";

frase = 'Soy "Fran" y estoy caminando';

document.write(frase + "<br>");