//  import validator from './validator.js';
//  console.log(validator);



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
  ocultarYMostrar("registroUsuario", "tarjeta");
}

function botonCancelarRegistro() {
  ocultarYMostrar("registroUsuario", "bienvenido");
}

//-----------------------------------------------------//

//TARJETA//

function botonValidarT() {
  ocultarYMostrar("tarjeta", "holaUsuario");
}

function botonCancelValT() {
  ocultarYMostrar("validarTarjetaC", "registroUsuario");
}

//-----------------------------------------------------/
//ENVIAR FORMULARIO GENERAL, FIN//





//FORMULARIO DE TARJETA DE CRÉDITO DINÁMICA//

const tarjeta = document.querySelector('#tarjeta'),
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	  formulario = document.querySelector('#formulario-tarjeta'),
	  numeroTarjeta = document.querySelector('#tarjeta .numero'),
	  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  logoMarca = document.querySelector('#logo-marca'),
	  firma = document.querySelector('#tarjeta .firma p'),
	  mesExpiracion = document.querySelector('#tarjeta .mes'),
	  yearExpiracion = document.querySelector('#tarjeta .year');
    ccv = document.querySelector('#tarjeta .ccv');
    
// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';

		logoMarca.innerHTML = '';
	}

	if(valorInput[0] == 4){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/visa.png';
		logoMarca.appendChild(imagen);
	} else if(valorInput[0] == 5){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/mastercard.png';
		logoMarca.appendChild(imagen);
	}

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = 'Jhon Doe';
	}

	mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});
