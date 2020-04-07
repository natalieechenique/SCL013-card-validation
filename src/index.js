
//funcion generica. Se declara esta funcion como principal y después más abajo uno llena con el id que corresponde. Se pone -ocultarYMostrar- en este caso, y lo que va entre parentesis respeta el mismo orden de ocultarlo o mostrarlo, independiente dessl nombre que le pongamos, con ese id llamamos al elemento a ocultar o mostrar desde HTML. -getElementById llama al id, desde una lista de classes - classList- y da la opcion de agregar mas elementos ocultos con -.add- y remover con -remove--->

function ocultarYMostrar(ocultarID, mostrarID) {
  document.getElementById(ocultarID).classList.add("oculto");
  document.getElementById(mostrarID).classList.remove("oculto");
}


function seleccionarIngresar() {
  ocultarYMostrar("bienvenido", "entrarUsuario");
}


function seleccionarRegistrarse() {
  ocultarYMostrar("bienvenido", "registroUsuario");
}



//-----------------------------------------------------//

//INGRESO//

function botonEnviarIngreso() {
  ocultarYMostrar("entrarUsuario", "holaUsuario");
}

function botonCancelarIngreso() {
  ocultarYMostrar("entrarUsuario","bienvenido" );
}


function botonSalirUsuario() {
  ocultarYMostrar("holaUsuario","bienvenido" );
}



//-----------------------------------------------------//

//REGISTRO//

function botonIngresoTarj() {
  ocultarYMostrar("registroUsuario", "validarTarjetaC");
}


function botonCancelarRegistro() {
  ocultarYMostrar("registroUsuario", "bienvenido");
}



//-----------------------------------------------------//

//TARJETA//

function botonValidarT() {
  ocultarYMostrar("validarTarjetaC", "holaUsuario");
}


function botonCancelValT() {
  ocultarYMostrar("validarTarjetaC", "registroUsuario");
}



//-----------------------------------------------------/

//ENVIAR FORMULARIO GENERAL, FIN//
