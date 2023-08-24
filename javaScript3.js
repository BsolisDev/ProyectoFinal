function tarjeta(){
   parDeNumeros = [];

   function verificarNumero() {
      tieneNumero51 = parDeNumeros.includes(51);
      tieneNumero77 = parDeNumeros.includes(77);
    
      return { tieneNumero51, tieneNumero77 };
    }
    
    function mostrar(indicar) {
      console.log("Tiene el número 51:", indicar.tieneNumero51);
      console.log("Tiene el número 77:", indicar.tieneNumero77);
    }
    
    for (let i = 0; i < 8 ; i++) {
      numero = parseInt(prompt(`Ingrese el ${i + 1} par de numeros de la tarjeta:`));
      parDeNumeros.push(numero);
    }
    
     resultado = verificarNumero();
     mostrar(resultado);

}