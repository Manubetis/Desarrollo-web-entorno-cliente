let formulario = document.getElementById("formulario");

// Creación de todos los elementos label del formulario con sus respectivos atributos:
let labelDisco = document.createElement("label");
labelDisco.textContent = "Nombre Disco: ";
labelDisco.setAttribute("labelNombreDisco", "text");
labelDisco.setAttribute("for", "nombreDisco");

let labelGrupo = document.createElement("label");
labelGrupo.textContent = "Grupo Musical: ";
labelGrupo.setAttribute("id", "labelGrupoMusica");
labelGrupo.setAttribute("for", "grupoMusica");

let labelAño = document.createElement("label");
labelAño.textContent = "Aaño de publicación: ";
labelAño.setAttribute("id", "labelAñoPublic");
labelAño.setAttribute("for", "añoPublic");

let labelTipo = document.createElement("label");
labelTipo.textContent = "Tipo de música: ";
labelTipo.setAttribute("for", "tipoMusica");


let labelLocalizacion = document.createElement("label");
labelLocalizacion.textContent = "Localización: ";
labelLocalizacion.setAttribute("id", "labelLocalizacion");
labelLocalizacion.setAttribute("for", "localizacion");

let labelPrestado = document.createElement("label");
labelPrestado.textContent = "Prestado: ";
labelPrestado.setAttribute("for", "prestado");

// Creación de inputs
let inputDisco = document.createElement("input");
inputDisco.setAttribute("type", "text");
inputDisco.setAttribute("id", "nombreDisco");

let inputGrupo = document.createElement("input");
inputGrupo.setAttribute("type", "text");
inputGrupo.setAttribute("id", "grupoMusica");

let inputAño = document.createElement("input");
inputAño.setAttribute("type", "text");
inputAño.setAttribute("id", "añoPublic");

let inputLocalizacion = document.createElement("input");
inputLocalizacion.setAttribute("type", "number");
inputLocalizacion.setAttribute("id", "localizacion");

let inputPrestado = document.createElement("input");
inputPrestado.setAttribute("type", "checkbox");
inputPrestado.setAttribute("id", "prestado");

// Salto de línea
let saltoLinea = document.createElement("br");

// Creación de selct con sus options para los tipos de música
let select = document.createElement("select");
select.setAttribute("name", "tipoMusica");
select.setAttribute("id", "tipoMusica");

let option = document.createElement("option");

let optionRock = document.createElement("option");
optionRock.setAttribute("value", "rock");
optionRock.textContent="Rock";

let optionPop = document.createElement("option");
optionPop.setAttribute("value", "pop");
optionPop.textContent="Pop";

let optionPunk = document.createElement("option");
optionPunk.setAttribute("value", "punk");
optionPunk.textContent="Punk";

let optionIndie = document.createElement("option");
optionIndie.setAttribute("value", "indie");
optionIndie.textContent="Indie";

// Creación boton para enviar formulario
let boton = document.createElement("button");
boton.setAttribute("type", "submit");
boton.setAttribute("id", "boton");
boton.textContent= "Enviar Formulario";

// Añado todas las etiquetas a la página con appendChild
formulario.appendChild(labelDisco);
formulario.appendChild(inputDisco);
formulario.appendChild(saltoLinea);
formulario.appendChild(saltoLinea);

formulario.appendChild(labelGrupo);
formulario.appendChild(inputGrupo);
formulario.appendChild(saltoLinea);
formulario.appendChild(saltoLinea);

formulario.appendChild(labelAño);
formulario.appendChild(inputAño);
formulario.appendChild(saltoLinea);
formulario.appendChild(saltoLinea);

formulario.appendChild(labelTipo);
formulario.appendChild(select);
select.appendChild(option);
select.appendChild(optionRock);
select.appendChild(optionPop);
select.appendChild(optionPunk);
select.appendChild(optionIndie);
formulario.appendChild(saltoLinea);
formulario.appendChild(saltoLinea);

formulario.appendChild(labelLocalizacion);
formulario.appendChild(inputLocalizacion);
formulario.appendChild(saltoLinea);
formulario.appendChild(saltoLinea);

formulario.appendChild(labelPrestado);
formulario.appendChild(inputPrestado);
formulario.appendChild(saltoLinea);
formulario.appendChild(saltoLinea);

formulario.appendChild(boton);