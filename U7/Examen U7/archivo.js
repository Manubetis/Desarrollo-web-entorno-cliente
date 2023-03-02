window.onload = inicio;
READY_STATE_COMPLETE = 4;
HTTP_STATUS_OK = 200;

const API_KEY = "a6c909ff7de23e18283f70e00b0e178f";
const TRENDING_MOVIES_URL = "trending/movie/week";
const API_BASE_URL = `https://api.themoviedb.org/3/${TRENDING_MOVIES_URL}?api_key=${API_KEY}`;

let peliculaGenerada
let arrayMovies = []
let listaFavoritos = []

function inicio() {
  document.getElementById("cargarPeliculas").addEventListener('click', cargarPeliculas)
  document.getElementById("guardarFavoritosFetch").addEventListener('click', guardarFavoritosFetch)
  document.getElementById("obtenerFavoritosXml").addEventListener('click', obtenerFavoritosXml)
  document.getElementById("limpiar").addEventListener('click', limpiar)
}

function cargarPeliculas() {
  console.log("Entrando en la función cargarPeliculas()")

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    console.log("onreadystatechange - peticion a WEB themoviedb");
    if (xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK) {
      let datos = JSON.parse(xhr.responseText);
      console.log(datos)
      generarFichas(datos.results)
    }
  };
  // Tercer paso, configurar la petición (método y url)
  xhr.open("GET", API_BASE_URL);
  // Cuarto paso, realizar la petición mediante el send
  xhr.send();
}

function guardarFavoritosFetch() {
  console.log("Entrando a la función guardarFavoritosFetch()")

  fetch("save_movies.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listaFavoritos),
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      document.getElementById(
        "resultados"
      ).innerHTML += `Introducido las peliculas favoriata correctamenta <br>`;
    })
    .catch((err) => console.log(err));
}

function obtenerFavoritosXml() {
  console.log("Entrando a la función obtenerFavoritosXml()")

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    console.log("onreadystatechange - peticion a WEB themoviedb");
    if (xhr.readyState === READY_STATE_COMPLETE &&
      xhr.status === HTTP_STATUS_OK) {
      let datos = JSON.parse(xhr.responseText);
      console.log(datos)
    }
  };
  // Tercer paso, configurar la petición (método y url)
  xhr.open("GET", "get_favs.php");
  // Cuarto paso, realizar la petición mediante el send
  xhr.send();
}

function generarFichas(arrayMovies) {
  console.log("Entrando en la función generarFichas()")

  let divContenedor = document.getElementById("fichas");
  divContenedor.innerHTML = ""

  for (let i = 0; i < arrayMovies.length; i++) {
    divContenedor.setAttribute("class", "card");
    divContenedor.setAttribute("style", "width: 18rem;");


    let imagen = document.createElement("img");
    imagen.setAttribute("src", "https://image.tmdb.org/t/p/w500/" + arrayMovies[i].backdrop_path)

    divContenedor.appendChild(imagen)

    let divCard = document.createElement("div");
    divCard.setAttribute("class", "card-body");

    divContenedor.appendChild(divCard)

    let h5 = document.createElement("h5");

    h5.innerHTML = arrayMovies[i].id;
    divCard.appendChild(h5)

    let h4 = document.createElement("h4");
    h4.setAttribute("class", "card-title");

    h4.innerHTML = arrayMovies[i].original_title;
    divCard.appendChild(h4);

    let boton = document.createElement("button")
    boton.setAttribute("type", "button")
    boton.setAttribute("id", "id")

    let imagenIcono = document.createElement("img")
    imagenIcono.setAttribute("src", "heart_border.png")

    boton.appendChild(imagenIcono)
    divCard.appendChild(boton)

    let p1 = document.createElement("p");

    p1.innerHTML = arrayMovies[i].overview;
    divCard.appendChild(p1)

    let p2 = document.createElement("p");

    p2.innerHTML = arrayMovies[i].original_language;
    divCard.appendChild(p2)

    let p3 = document.createElement("p");

    p3.innerHTML = arrayMovies[i].release_date;
    divCard.appendChild(p3)

    let p4 = document.createElement("p");

    p4.innerHTML = arrayMovies[i].vote_average;
    divCard.appendChild(p4)


    peliculaGenerada = {
      "id": arrayMovies[i].id,
      "backdrop": arrayMovies[i].backdrop_path,
      "original_title": arrayMovies[i].original_title,
      "overview": arrayMovies[i].overview,
      "original_language": arrayMovies[i].original_language,
      "release_date": arrayMovies[i].release_date,
      "vote_average": arrayMovies[i].vote_average,
      "poster_path": arrayMovies[i].poster_path,
    }
  }

  arrayMovies.push(peliculaGenerada)

}

function limpiar() {
  console.log("Entrando a la función limpiar()")

  let fichas = document.getElementById("fichas")
  fichas.innerHTML = ""
}