function leerPremium(){
    descuento = 0.3;

 n = parseInt(prompt("Ingrese el numero de productos:"));

if (isNaN(n) || n <= 0) {
    console.log("Invalido. Digite un número.");
} else {
    let prodcuto = 0;

    arregloDePalabras = [];

    while (prodcuto < n) {
        const palabra = prompt(`Ingrese el prodcuto ${prodcuto + 1}:`);

        arregloDePalabras.push(palabra);

        if (palabra.toLowerCase().includes("premium")) {
            document.write(`"${palabra}" Tiene la palabra 'premium'. Aplica  ${descuento * 100}% de descuento.`);
        } else {
            document.write(`"${palabra}" No tiene la palabra 'premium'. No se aplica descuento.`);
        }

        prodcuto++;
    }
}
}


