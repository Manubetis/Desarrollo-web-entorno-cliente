let lista = document.getElementById("lista");
let boton = document.getElementById("boton");
let botonBorrarPrimero = document.getElementById("botonBorrarPrimero");
let botonBorrarUltimo = document.getElementById("botonBorrarUltimo");

boton.addEventListener("click", function(){
    let contenido = prompt("Introduce un nombre: ");
    let lista =document.getElementById("lista");
    let elemento = document.createElement("li");
    elemento.textContent = contenido;
    lista.appendChild(elemento);
})

botonBorrarPrimero.addEventListener("click", function(){
    let lista = document.getElementsByTagName("li");
    let nodoLista = document.getElementById("lista");
    let primeroDeLaLista = lista[0];
    nodoLista.removeChild(primeroDeLaLista);
    
})

botonBorrarUltimo.addEventListener("click", function(){
    let lista = document.getElementsByTagName("li");
    let nodoLista = document.getElementById("lista");
    let ultiimoLista = lista[lista.length-1];
    nodoLista.removeChild(ultiimoLista);
    
})