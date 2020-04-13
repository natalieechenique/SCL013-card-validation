

 
  
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