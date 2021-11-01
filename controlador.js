//inicia la funcion para imprimir productos en el html
llamar();
//formulario de filtro iniciado en la primera opcion(algunos navegadores no leen el selected)
//cartel de bienvenida para ingreso de usuario 
$(`select`).val("todos");
$("#bienvenida").show();
$("#ingresoDeUsuario").val("");
$("#botonSaludo").click(() => {
  $("#ingresoDeUsuario").trigger("change");
})
$("#ingresoDeUsuario").change(() => {
  nombreIngreso = $("#ingresoDeUsuario").val();
  if (nombreIngreso !== "") {
    $("#bienvenida").hide();
    $("#hola").append(`Bienvenido ${nombreIngreso}`);
    $("#sinUsuario").hide();
  } else {
    $("#sinUsuario").html(``)
      .show()
      .append(`<p>Recuerda que si no ingresas tu usuario no podras realizar tu compra</p>
                              <button id="entrarSinUsuario" type=button>Ingresar de todos modos</button>`);
    $("#entrarSinUsuario").click(() => { $("#bienvenida").hide(); })
  }
});
//boton cambio de usuario
$("#cambiarUsuario").click(() => {
  $("#ingresoDeUsuario").val("");
  $("#hola").html("")
  $("#bienvenida").show();
})
//muestra oculta el modal carrito
$(`#mostrarCarrito`).click(() => {
  $(`#modalCarrito`).slideToggle("slow");
});
//ocultar modal
$(`#cerrar`).click(() => $(`#modalCarrito`).slideUp());


//enviar compra (guardar en storage)
$(`#confirmar`).click(() => {
  if (nombreIngreso !== "") {
    let compra = JSON.stringify(arrayCarrito);
    localStorage.setItem(nombreIngreso, compra);
    $(`#eliminar`).trigger(`click`);
    $(`#listaComprados`).append("<b>Gracias por su compra</b>");
    localStorage.removeItem(nombreIngreso);
  } else {
    $("#sinUsuario").html("");
    $("#bienvenida").show();
  }
});
//guardar compra 
$("#guardarCompra").click(() => {
  if (nombreIngreso !== "") {
    let compra = JSON.stringify(arrayCarrito);
    localStorage.setItem(nombreIngreso, compra);
    $(`#eliminar`).trigger(`click`);
  } else {
    $("#sinUsuario").html("");
    $("#bienvenida").show();
  }
});

//borrar contenido del modal
$(`#eliminar`).click(() => {
  $(`.borrarPedido`).remove();
  sumaTotal = 0;
  arrayCarrito = [];
});

//recuperar compra
$(`#recuperarCompra`).click(() => {
  let carritoRecuperado = localStorage.getItem(`${nombreIngreso}`);
  arrayCarrito = JSON.parse(carritoRecuperado);
  enModal(arrayCarrito);
});
//borrar storage
$(`#borrarAlmacenado`).click(() => {
  localStorage.removeItem(nombreIngreso);
});
//filtro por palabras
$("#buscador").change(() => {
  arrayProductoBis = [];
  $(`#listadoDeProductos , .contPag`).html(``);
  busqueda = $("#buscador").val();
  for (let y in arrayProducto) {
    let n = arrayProducto[y].buscador.indexOf(busqueda, 0);
    if (n !== -1) {
      arrayProductoBis.push(arrayProducto[y]);
    }
  };
  $("#buscador").val("");
  crearPagina(arrayProductoBis);
  numerarPagina(arrayProductoBis);
  $("#palabraFiltro").append(`<span>${busqueda} <b>X</b></span>`)
                    .show();
})
//filtro por opciones (etiqueta select)
$(`#opciones`).change(function () {
  filtro = $(`select option:selected`).val();
  llamar(filtro);
});

$("#palabraFiltro").click(()=>{
  busqueda="";
  $(`#opciones`).trigger("change");
  $("#palabraFiltro").hide()
})