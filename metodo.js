
var amigos = ['Carlos', 'Alejandro', 'Cesar', 'Manuel', 'Luis'];

// ----- Metodo Length
//document.write(amigos.length);//conocer cuantos elementos hay en el arreglo

// ----- Metodo Join junta el arreglo y lo muestra en una cadena de texto
//document.write(amigos.join('-'));//separa cada elemento de la cadena de etxto con un guion
//document.write(amigos.join('**'));//separa cada elemento de la cadena de etxto con ateriscos

/*var cadenaTexto = amigos.join(' ** ');
document.write(cadenaTexto);*/

// ----- Metodo Pop y Push Pop nos deja eliminar el ultimo elemento de un arreglo

/*amigos.pop();//va eliminando elementos ultimos cada vez que lo utlizamos
console.log(amigos);*/
/*amigos.push('Felipe');//agrega el elemento que se coloca en parentesis al final del arreglo
console.log(amigos);*/

// ----- Metodo shift y unshift

/*amigos.shift();//Elimina el primer elemento del arreglo
console.log(amigos);*/
/*amigos.unshift('Oscar');//Agrega el elemento del parentesis al inicio del arreglo
console.log(amigos);*/

// ----- Metodo concat junta 2 arreglos

/*var amigos2 = ['Felipe', 'Oscar',];

var todosMisAmigos = amigos.concat(amigos2);
console.log(todosMisAmigos);*/


// ----- Metodo Sort y Reverse ordenar alfabeticamente el arreglo

amigos.sort();//Ordena alfabeticamente el arreglo de manera ascendente, solo se utiliza con cadenas de texto NO numeros
amigos.reverse();//Ordena descendente cuando ya se le aplico sort
console.log(amigos);