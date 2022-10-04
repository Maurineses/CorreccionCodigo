/* Se agregaron las carpetas JS y CSS para guardar los archivos, respectivamente
Se cambió el nombre a index.html, se acomodaron las variables globales y locales
y se corrigieron errores de sintaxis en el código*/

var formulario = document.querySelector("form");
var n = formulario.elements[0];
var edades = formulario.elements[1];
var na = formulario.elements[2];
var lista = document.getElementById("lista-de-invitados");


formulario.onsubmit = function(e) {
  e.preventDefault();
  
  var nombre = n.value;
  var edad = edades.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
    n.classList.remove("correcto")
  }
  if (edad < 18 || edad > 120) {
    edades.classList.add("error")
    edades.classList.remove("correcto")
  }

if (nombre.length > 0 && (edad > 18 && edad < 120)) {
  
  n.classList.remove("erro")
  n.classList.add("correcto")
  edades.classList.remove("error")
  edades.classList.add("correcto")
  n.value = "";
  edades.value = "";
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)
crearElemento("Nombre", nombre,)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}

function crearElemento(descripcion, valor) {


var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}


