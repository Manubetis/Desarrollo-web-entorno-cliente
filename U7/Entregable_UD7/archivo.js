window.onload = inicio;

function inicio() {
    document.getElementById("obtenerUsuario").addEventListener("click", obtenerUsuario);
    document.getElementById("GuardarConFetch").addEventListener("click", guardarUsuarioFetch);
    document.getElementById("GuardarConXmlHttpR").addEventListener("click", guardarUsuarioXmlHtppR);
}

const READY_STATE_COMPLETE = 4;
let usuarioGenerado
let arrayUsuario = []

let respuestas = document.getElementById("respuestas")

function obtenerUsuario() {

    console.log("Entrando en la función obtenerUsuario()")

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        console.log("onreadystatechange - peticion a WEB ramdonUsers");
        if (xhr.readyState === 4 && xhr.status === 200) {
            let datos = JSON.parse(xhr.responseText);
            console.log(datos)
            procesarUsuario(datos.results[0])
        }
    };
    // Tercer paso, configurar la petición (método y url)
    xhr.open("GET", "https://randomuser.me/api/?nat=es");
    // Cuarto paso, realizar la petición mediante el send
    xhr.send();
}

function procesarUsuario(datos) {

    console.log("Entrando en la función procesarUsuario()")

    let div = document.getElementById("cardUsuario")
    div.innerHTML = ""
    let imgUser = document.createElement("img")
    imgUser.src = datos.picture.medium;

    div.appendChild(imgUser);

    let nombre = document.createElement("h3")
    nombre.innerHTML = datos.name.first + " " + datos.name.last;

    let direccion = document.createElement("p")
    direccion.innerHTML = datos.location.street.name + ", " + datos.location.street.number;

    let telefono = document.createElement("p")
    telefono.innerHTML = datos.phone;

    let email = document.createElement("p")
    email.innerHTML = datos.email;

    let botonAñadir = document.createElement("button")
    botonAñadir.setAttribute("type", "button")
    botonAñadir.setAttribute("id", "añadirUsuarioTabla")
    botonAñadir.innerHTML = "Añadir Usuario"

    botonAñadir.addEventListener("click", añadirUsuarioTabla);


    div.appendChild(nombre);
    div.appendChild(direccion);
    div.appendChild(telefono);
    div.appendChild(email);
    div.appendChild(botonAñadir);

    usuarioGenerado = {
        "name": datos.name.first + " " + datos.name.last,
        "phone": datos.phone,
        "street": datos.location.street.name + ", " + datos.location.street.number,
        "email": datos.email,
        "image": datos.picture.large
    }
}

function guardarUsuarioFetch() {
    console.log("Entrando en la función guardarUsuarioFetch()");

	fetch("save_users.php", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(arrayUsuario),
	})
		.then((response) => {
			if (response.ok) return response.json();
		});

        respuestas.innerHTML = "Usuario almacenado en la BD con Fetch"
}

function guardarUsuarioXmlHtppR(){
    console.log("Entrando en la función guardarUsuarioXmlHtppR()")

    xhr = new XMLHttpRequest();
	xhr.open("POST", "save_users.php");
	xhr.setRequestHeader("Content-type", "application/json");
	let usuarios_json = JSON.stringify(arrayUsuario);
	xhr.onreadystatechange = () => {
		if (xhr.readyState === READY_STATE_COMPLETE && xhr.status === 200) {
			let users_json = JSON.parse(xhr.responseText);
            console.log(users_json)
            respuestas.innerHTML = "Usuario almacenado en la BD con XmlHttpRequest"
		}
	};
	xhr.send(usuarios_json);

}

function añadirUsuarioTabla() {

    console.log("Entrando a la función añadirUsuarioTabla()")

    arrayUsuario.push(usuarioGenerado)

    let tablaUsuario = document.getElementById("tablaUsuarios")
    tablaUsuario.innerHTML=""

    let thead = document.createElement("thead")
    tablaUsuario.appendChild(thead)

    let tr = document.createElement("tr")
    thead.appendChild(tr)

    let th1 = document.createElement("th")
    th1.setAttribute("scope", "col")
    th1.innerHTML = "Nombre y apellido"

    let th2 = document.createElement("th")
    th2.setAttribute("scope", "col")
    th2.innerHTML = "Dirección"

    let th3 = document.createElement("th")
    th3.setAttribute("scope", "col")
    th3.innerHTML = "Teléfono"

    let th4 = document.createElement("th")
    th4.setAttribute("scope", "col")
    th4.innerHTML = "E-mail"

    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)

    for (let i = 0; i< arrayUsuario.length; i++) {

        let tbody = document.createElement("tbody")
        tablaUsuario.appendChild(tbody)
    
        let tr2 = document.createElement("tr")
        tbody.appendChild(tr2)
    
        let td1 = document.createElement("td")
        td1.innerHTML = arrayUsuario[i].name
    
        let td2 = document.createElement("td")
        td2.innerHTML = arrayUsuario[i].street
    
        let td3 = document.createElement("td")
        td3.innerHTML = arrayUsuario[i].phone
    
        let td4 = document.createElement("td")
        td4.innerHTML = arrayUsuario[i].email
    
        tr2.appendChild(td1)
        tr2.appendChild(td2)
        tr2.appendChild(td3)
        tr2.appendChild(td4)
   
    }

    respuestas.innerHTML = "Usuario añadido a la tabla"

}