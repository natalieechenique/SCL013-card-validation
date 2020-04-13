// Takes a credit card string value and returns true on valid number
function valid_credit_card(value) {
	// Accept only digits, dashes or spaces
	if (/[^0-9-\s]+/.test(value)) return false;
  
	//Luhn 
	let nCheck = 0,
	  bEven = false;
	value = value.replace(/\D/g, '');
  
	for (var n = value.length - 1; n >= 0; n--) {
	  var cDigit = value.charAt(n),
		nDigit = parseInt(cDigit, 10);
  
	  if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
  
	  nCheck += nDigit;
	  bEven = !bEven;
	}
  
	return alert(nCheck % 10 == 0);
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
	valid_credit_card(num);
  }
  










  
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
  