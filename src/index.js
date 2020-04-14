// import validator from "./validator.js";

// console.log(validator.isValid);

//DECL FUNCION GENERICA DOM

const validator = {
  isValid: (value) => {
    // acepta solo digitos
    if (/[^0-9-\s]+/.test(value)) return false;

    //Luhn
    let validator = 0,
      bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      validator += nDigit;
      bEven = !bEven;
    }
    return validator % 10 == 0;
  },
  maskify: (value) => {
    value = value.replace(/.(?=.{4})/g, "x");
    return value;
  },
};

const ocultarYMostrar = (ocultarID, mostrarID) => {
  document.getElementById(ocultarID).classList.add("oculto");
  document.getElementById(mostrarID).classList.remove("oculto");
};

const suma = (numbero1, numero2) => {
  const total = numbero1 + numero2;
  const multiplicar = numbero1 * numero2;
  const multiplicarTotalPorPrimerNumero = total * numbero1;
  const nombre = "naty";

  const todas = total + multiplicar + multiplicarTotalPorPrimerNumero + nombre;
  return todas;
};

//--------De bienvenida a formulario registro------------//

const seleccionarRegistro = () => {
  ocultarYMostrar("bienvenido", "registroUsuario");
};

//----De registro a formulario validación tarjeta---//
function irFormularioTarjeta() {
  ocultarYMostrar("registroUsuario", "formulario-tarjeta");
}

function cancelFormularioTarjeta() {
  ocultarYMostrar("registroUsuario", "bienvenido");
}

//----De validacion tarjeta  a cancelar//

function testcancel() { 
  ocultarYMostrar("formulario-tarjeta", "registroUsuario");
}

const testvalidation = () => {
  const creditCardNumber = document.getElementById("inputNumero").value;
  const succesMessage =
    //VERIFICA SI LA TARJETA ES VÁLIDA O NO *
    validator.isValid(creditCardNumber) == true
      ? "Se ha validado correctamente la tarjeta "
      : "No es válida ";
  if (creditCardNumber === "") {
    alert("El campo no puede estar vacío");
  } else {
    alert(succesMessage + validator.maskify(creditCardNumber));
  }
};

//* IF ALTERNATIVO
// condicion ? 'a'  : 'b';
