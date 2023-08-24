function nuevaOrden(){
    let producto="", cantidad=0, precio=0.00;

 producto = prompt("Nombre del producto:");

 cantidad = parseInt(prompt(`Digite la cantidad de ${producto}:`));

 precio = parseFloat(prompt(`Digite el precio de cada ${producto}:`));

Total=precio*cantidad;

document.write("A elegido"+" "+cantidad+" "+"unidades de"+" "+producto.toString()+"."+"<br/>"+"El total a pagar es de $"+Total.toString()+".");

}