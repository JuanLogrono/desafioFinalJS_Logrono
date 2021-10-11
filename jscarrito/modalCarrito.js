let valor = "";
let sumaTotal = 0;
class carritoCompra {
    constructor(producto, cant, valor) {
        this.producto = producto;
        this.cant = cant;
        this.valor = valor;
    }
}
//imprimir carrito en el modal
function crear(arreglo) {
    sumaTotal = 0;
    $(`#listaComprados`).html(``);
    for (let x in arreglo) {
        $(`#listaComprados`).append(
      `<li class="borrarPedido"> ${arreglo[x].producto} -------- ${arreglo[x].cant}--------- $${arreglo[x].valor}<a href="#" class="eliminarArt" name="${x}">x</a> Eliminar producto</li>`
      );
      sumaTotal += parseFloat(arreglo[x].valor);
      $(`#borrarSuma`).remove();
      $(`#contenidoModal`).append(
        `<b id="borrarSuma" class="borrarPedido">Precio Final: $${sumaTotal}</b>`)
    }
}
//array carrito
let arrayCarrito = [];

//Armar array carrito
function Armar(valor) {
  var cantidad = $(`#ingresoCantidad${valor}`).val();
  //corroborar que se ingreso una cantidad
  if (cantidad <= 0 || isNaN(cantidad)) {
    $(`#ingresoCantidad${valor}`).val(``);
  } else {
//preparar el objeto (producto) para sumar al array
var producto = stock[valor].nombre;
    var cant = parseInt(cantidad);
    var precioVenta = cantidad * stock[valor].precio;
    //comprobar que el array esta vacio y crear el producto, o si se repite el producto modificar las cantidades. 
    if (arrayCarrito.length === 0) {
      var nuevoArt = new carritoCompra(producto, cant, precioVenta);
    } else {
        for (let i of arrayCarrito) {
        if (i.producto === producto) {
          let nro = arrayCarrito.indexOf(i);
          producto = arrayCarrito[nro].producto;
          cant = parseInt(arrayCarrito[nro].cant) + parseInt(cantidad);
          precioVenta =parseFloat(arrayCarrito[nro].valor) + parseFloat(precioVenta);
          arrayCarrito.splice(nro, 1);
          nuevoArt = new carritoCompra(producto, cant, precioVenta);
        } else {
         nuevoArt = new carritoCompra(producto, cant, precioVenta);
        }
      }
    }
    arrayCarrito.push(nuevoArt);
    $(`#ingresoCantidad${valor}`).val(``);
  }
  //imprime el array en el html (funcion linea 53)
  crear(arrayCarrito);
 
  
}
/* $(".eliminarArt").click(function(){
let inar= this.name;
arrayCarrito.splice(inar,1);
crear(arrayCarrito);

})  */

