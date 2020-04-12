//DECL FUNCION GENERICA
function ocultarYMostrar(ocultarID, mostrarID) {
    document.getElementById(ocultarID).classList.add("oculto");   document.getElementById(mostrarID).classList.remove("oculto");
  }
//--------De bienvenida a formulario registro------------// 
function seleccionarRegistro() {
    ocultarYMostrar("bienvenido", "registroUsuario");
  }
  //----De registro a formulario validación tarjeta---//
function irFormularioTarjeta() {
    ocultarYMostrar("registroUsuario", "formulario-tarjeta");
  }

function cancelFormularioTarjeta() {
    ocultarYMostrar("registroUsuario", "bienvenido");
  }
 
// import validator from './validator.js';
// document.getElementById("validar").addEventListener("click", validator.isValid, false);