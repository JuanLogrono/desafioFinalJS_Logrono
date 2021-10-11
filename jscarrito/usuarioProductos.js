//ingreso y cambio de usuario
let nombreIngreso = "";
$("#ingresoDeUsuario").change(() => {
  nombreIngreso = $("#ingresoDeUsuario").val();
  $("#saludo").empty(` `);
  $("#saludo").append(`Hola ${nombreIngreso} `);
  $("#ingresoDeUsuario").hide();
  $("#ingresoDeUsuario").val(``);
});
$("#cambiarUsuario").click(() => {
  $("#ingresoDeUsuario").show();
  saludo.textContent = "Ingrese el nuevo usuario";
});

//archivo externo donde estan los productos
const url = "http://my-json-server.typicode.com/JuanLogrono/jsonDB/producto";
//imprimir productos en el html
let index = 0;
const stock = [];
$.get(url, function (respuesta, estado) {
  if (estado === "success") {
    for (indice of respuesta) {
      stock.push(indice);
      $(`#listadoDeProductos`)
        .append(`<div class="ordenarProductos"><img class= "imagenProducto" src="./assets/${indice.nombre}.webp" alt="Producto">
        <h3>${indice.nombre}</h3> 
        <span>Precio: $${indice.precio}</span> 
        <div class="ordenFooterTarjetas"><input type="number" min="0" max= ${indice.cantidad}  id="ingresoCantidad${index}" placeholder ="cantidad"></input>
        <button class="btnCarrito" value="${index}" type="button"><img class="sizeBotonCarrito" src="./assets/carrito.png" alt="Agregar compra" title = "agregar al carrito"></button> </div></div>`);
      index++;
    }
  }
  //boton de agregar al carrito ,(funcion armar modalCarrito linea 14)
  $(".btnCarrito").click(function () {
    valor = this.value;
    Armar(valor);
  });
});
