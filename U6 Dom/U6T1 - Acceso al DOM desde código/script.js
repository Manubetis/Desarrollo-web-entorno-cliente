// Ejercicio 1:

let parrafos = document.getElementsByTagName("p");
let numParrafos = parrafos.length;

// Muestro por la página el resultado:
document.getElementById("info").innerHTML += "- El número de párrafos de la página es: "+numParrafos;

// Ejercicio 2:

let textoSegundoParrafo = parrafos[1].textContent;

// Muestro por la página el texto del segundo párrafo
document.getElementById("info").innerHTML += "<br>- El texto del segundo párrafo es: "+textoSegundoParrafo;

// Ejercicio 3:

let enlaces = document.getElementsByTagName("a");
let numEnlaces = enlaces.length;

// Muestro el número de enlaces que hay por la página
document.getElementById("info").innerHTML += "<br>- El número de enlaces de la página es: "+numEnlaces;

// Ejercicio 4:

let primerEnlace = enlaces[0];

// Muestro la dirección del primer enlace en la página
document.getElementById("info").innerHTML += "<br>- El número de enlaces de la página es: "+primerEnlace;

// Ejercicio 5:

let penultimoEnlace = enlaces[enlaces.length-2];

// Muestro la dirección del penultimo enlace en la página
document.getElementById("info").innerHTML += "<br>- La dirección del penúltimo enlace es: "+penultimoEnlace;

// Ejercicio 6:

function wiki_municipio(enalces){
    let cont = 0;
    for (const i of enalces) {
        if(i.href.includes("/wiki/Municipio")){
            cont++;
        }
    }
    return cont;
}

// Muestro el número de enlaces que apuntan a /wiki/Municipio en la página
document.getElementById("info").innerHTML += "<br>- El número de enlaces que apuntan a /wiki/Municipio es: "+wiki_municipio(enlaces);

// Ejercicio 7:

let primerParrafo = parrafos[0];
let enlacesPrimerParrafo = primerParrafo.getElementsByTagName("a");
let numEnlacesPrimerParrafo = enlacesPrimerParrafo.length;

// Muestro el número de enlaces del primer párrafo en la página
document.getElementById("info").innerHTML += "<br>- El número de enlaces del primer párrafo es: "+numEnlacesPrimerParrafo;




