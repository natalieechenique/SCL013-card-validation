
 
  
function validator(value) {
	// acepta solo digitos
	if (/[^0-9-\s]+/.test(value)) return false;
  
	//Luhn 
	let validator = 0,
	  bEven = false;
	value = value.replace(/\D/g, '');
  
	for (var n = value.length - 1; n >= 0; n--) {
	  var cDigit = value.charAt(n),
		nDigit = parseInt(cDigit, 10);
  
	  if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
  
	  validator += nDigit;
	  bEven = !bEven;
	}
	if (value !== '') {
	  return alert(validator % 10 == 0);
	}
	return alert('el campo tarjeta no puede estar vacío')
  }
  
  
  //DECL FUNCION GENERICA DOM
  function ocultarYMostrar(ocultarID, mostrarID) {
	document.getElementById(ocultarID).classList.add('oculto');
	document.getElementById(mostrarID).classList.remove('oculto');
  }
  
  //--------De bienvenida a formulario registro------------//
  function seleccionarRegistro() {
	ocultarYMostrar('bienvenido', 'registroUsuario');
  }
  
  //----De registro a formulario validación tarjeta---//
  function irFormularioTarjeta() {
	ocultarYMostrar('registroUsuario', 'formulario-tarjeta');
  }
  
  function cancelFormularioTarjeta() {
	ocultarYMostrar('registroUsuario', 'bienvenido');
  }
  
  //----De validacion tarjeta a OK, reintentar o cancelar, luego del PROMPT o alert correspondiente----//
  function okTarjForm() {
	ocultarYMostrar('formulario-tarjeta', 'bienvenido');
  }
  
  function reintTarjForm() {
	ocultarYMostrar('formulario-tarjeta', 'registroUsuario'); //acà deberìan limpiarse los campos//
  }
  
  function cancelTarjForm() {
	ocultarYMostrar('formulario-tarjeta', 'registroUsuario');
  }
  
  function testvalidation() {
	const num = document.getElementById('inputNumero').value;
	validator(num);
  }
  
  function testcancel() {
	 ocultarYMostrar('formulario-tarjeta', 'registroUsuario');
  }
  
  
  
  
  
  //5500 0000 0000 0004  is a valid number card for validation //
  
  
  
  
  
  
  
	//TARJETA INTERACTIVA-----//
  
	// const tarjeta = document.querySelector('#tarjeta');
	// btnAbrirFormulario = document.querySelector('#btn-abrir-formulario');
	// formulario = document.querySelector('#formulario-tarjeta');
	// numeroTarjeta = document.querySelector('#tarjeta .numero');
	// nombreTarjeta = document.querySelector('#tarjeta .nombre');
	// logoMarca = document.querySelector('#logo-marca');
	// firma = document.querySelector('#tarjeta .firma p');
	// mesExpiracion = document.querySelector('#tarjeta .mes');
	// yearExpiracion = document.querySelector('#tarjeta .year');
	// ccv = document.querySelector('#tarjeta .ccv');
  
	//formulario tarjeta con funcion//
  
	// // * Input nombre de tarjeta
	// formulario.inputNombre.addEventListener('keyup', (e) => {
	//   let valorInput = e.target.value;
  
	//   formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	//   nombreTarjeta.textContent = valorInput;
	//   firma.textContent = valorInput;
  
	//   if (valorInput == '') {
	//     nombreTarjeta.textContent = 'Juan Pérez';
	//   }
  
	//   mostrarFrente();
	// });
  
	// // * Select mes
	// formulario.selectMes.addEventListener('change', (e) => {
	//   mesExpiracion.textContent = e.target.value;
	//   mostrarFrente();
	// });
  
	// // * Select Año
	// formulario.selectYear.addEventListener('change', (e) => {
	//   yearExpiracion.textContent = e.target.value.slice(2);
	//   mostrarFrente();
	// });
  
	// // * CCV
	// formulario.inputCCV.addEventListener('keyup', () => {
	//   if (!tarjeta.classList.contains('active')) {
	//     tarjeta.classList.toggle('active');
	//   }
  
	//   formulario.inputCCV.value = formulario.inputCCV.value
	//     // Eliminar los espacios
	//     .replace(/\s/g, '')
	//     // Eliminar las letras
	//     .replace(/\D/g, '');
  
	//   ccv.textContent = formulario.inputCCV.value;
	// });
  
  
  
  
  
  
  
  
  
	//TARJETA INTERACTIVA-----//
  
	// const tarjeta = document.querySelector('#tarjeta');
	// btnAbrirFormulario = document.querySelector('#btn-abrir-formulario');
	// formulario = document.querySelector('#formulario-tarjeta');
	// numeroTarjeta = document.querySelector('#tarjeta .numero');
	// nombreTarjeta = document.querySelector('#tarjeta .nombre');
	// logoMarca = document.querySelector('#logo-marca');
	// firma = document.querySelector('#tarjeta .firma p');
	// mesExpiracion = document.querySelector('#tarjeta .mes');
	// yearExpiracion = document.querySelector('#tarjeta .year');
	// ccv = document.querySelector('#tarjeta .ccv');
  
	//formulario tarjeta con funcion//
  
	// // * Input nombre de tarjeta
	// formulario.inputNombre.addEventListener('keyup', (e) => {
	//   let valorInput = e.target.value;
  
	//   formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	//   nombreTarjeta.textContent = valorInput;
	//   firma.textContent = valorInput;
  
	//   if (valorInput == '') {
	//     nombreTarjeta.textContent = 'Juan Pérez';
	//   }
  
	//   mostrarFrente();
	// });
  
	// // * Select mes
	// formulario.selectMes.addEventListener('change', (e) => {
	//   mesExpiracion.textContent = e.target.value;
	//   mostrarFrente();
	// });
  
	// // * Select Año
	// formulario.selectYear.addEventListener('change', (e) => {
	//   yearExpiracion.textContent = e.target.value.slice(2);
	//   mostrarFrente();
	// });
  
	// // * CCV
	// formulario.inputCCV.addEventListener('keyup', () => {
	//   if (!tarjeta.classList.contains('active')) {
	//     tarjeta.classList.toggle('active');
	//   }
  
	//   formulario.inputCCV.value = formulario.inputCCV.value
	//     // Eliminar los espacios
	//     .replace(/\s/g, '')
	//     // Eliminar las letras
	//     .replace(/\D/g, '');
  
	//   ccv.textContent = formulario.inputCCV.value;
	// });
  