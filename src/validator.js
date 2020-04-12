//import maskify from 'maskify';

const validator = {

    maskify : function () {
  
        let texto = document.getElementById("tdc").value;
        let mascara = "############"+ texto.substring(12);
        //let mascara = maskify(texto);
        console.log("Este es el numero de tarjeta enmascarada "+ mascara);
        //document.write("Tu numero de tarjeta de credito termina en " + mascara);  
        return mascara;