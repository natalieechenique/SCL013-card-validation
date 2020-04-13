
const validator = {stringNum
  // ...
};

export default validator;






const validator = {
  //maskify 
  const ensureOnlyNumbers = R.replace(/[^0-9]+/g, '');
  const maskAllButLastFour = R.replace(/[0-9](?=([0-9]{4}))/g, '*');
  const hashedCardNumber = R.compose(maskAllButLastFour, ensureOnlyNumbers);

  const isValid = (value) => {
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
    return alert('campo vacío');
  }
};

export default validator;


const hola = () => {
  a = 'hola'
  return a;
}

export default hola;








//src/validator.js
//Acá escribirás las funciones necesarias para que el usuario pueda verificar la tarjeta de crédito y ocultar los dígitos de su número de tarjeta. Esta función debe ser pura e independiente del DOM.

//Para esto debes implementar el objeto validator, el cual ya se encuentra exportado en el boilerplate. Este objeto (validator) contiene dos métodos (isValid y maskify):

//validator.isValid(creditCardNumber): creditCardNumber es un string con el número de tarjeta que se va a verificar. Esta función debe retornar un boolean dependiendo si es válida de acuerdo al algoritmo de Luhn.

//validator.maskify(creditCardNumber): creditCardNumber es un string con el número de tarjeta y esta función debe retornar un string donde todos menos los últimos cuatro caracteres sean reemplazados por un numeral (#) o 🐱. Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún cuando el string sea de menor longitud.

//Ejemplo de uso

//maskify('4556364607935616') === '############5616'
//maskify(     '64607935616') ===      '#######5616'
//maskify(               '1') ===                '1'
//maskify(               '')  ===                ''
//src/index.js
//Acá escribirás todo el código que tenga que ver con la //interacción del DOM (seleccionar, actualizar y manipular //elementos del DOM y eventos). Es decir, en este archivo //deberás invocar las funciones isValid y maskify según sea //necesario para actualizar el resultado en la pantalla (UI).

//test/validator.spec.js
//En este archivo tendrás que completar las pruebas unitarias de las funciones validator.isValid(creditCardNumber) y validator.maskify(creditCardNumber) implementadas en validator.js utilizando Jest. Tus pruebas unitarias deben dar un 70% en coverage (cobertura), statements (sentencias), functions (funciones) y lines (líneas); y un mínimo del 50% de branches (ramas).


// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
//import validator from '../src/validator';



//describe('validator', () => {
  //test('debería ser un objeto', () => {
    //expect(typeof validator).toBe('object');
  //});

  //describe('validator.isValid', () => {
   // test('debería ser una función', () => {
     // expect(typeof validator.isValid).toBe('function');
    //});

    //test.skip('debería retornar true para "4083952015263"', () => {
      // escribe aquí tu test
    //});
  //});

 // describe('validator.maskify', () => {
   // test('debería ser una función', () => {
     // expect(typeof validator.maskify).toBe('function');
    //});

    //test.skip('Debería retornar "############5616" para //"4556364607935616"', () => {
      // escribe aquí tu test
   // });
  //});
//});