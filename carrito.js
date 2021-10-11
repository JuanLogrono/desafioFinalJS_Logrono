//mostrar modal con carrito
$(`#mostrarCarrito`).click(() => {
  $(`#modalCarrito`).slideToggle("slow");
});
//ocultar modal
$(`#cerrar`).click(() => $(`#modalCarrito`).slideUp());

//enviar compra (guardar en storage)
$(`#confirmar`).click(() =>{
  let compra = JSON.stringify(arrayCarrito);
  localStorage.setItem(nombreIngreso, compra);
  $(`#eliminar`).trigger(`click`);
  $(`#cerrar`).trigger(`click`);
  arrayCarrito = []
});

//borrar contenido del modal
$(`#eliminar`).click(() =>  {
  $(`.borrarPedido`).remove();
  sumaTotal=0
  arrayCarrito=[]
} );

//recuperar compra
$(`#recuperarCompra`).click(() => {
  let carritoRecuperado = localStorage.getItem(`${nombreIngreso}`);
  arrayCarrito = JSON.parse(carritoRecuperado);
  crear(arrayCarrito);
});
//borrar storage
$(`#borrarAlmacenado`).click(() =>{
  localStorage.removeItem(nombreIngreso);
});
//cambiar usuario
$("#cambiarUsuario").click(() => {
  $("#ingresoDeUsuario").show();
  saludo.textContent = "Ingrese el nuevo usuario";
});

$(".eliminarArt").click(function(){
  let inar= 5
  console.log(inar);
}) 