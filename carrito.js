let ingresoUsuario = document.getElementById("ingresoDeUsuario")
ingresoUsuario.onchange = () => Bienvenido();

//productos ofrecidos
const stock = [producto1, producto2, producto3, producto4, producto5, producto6];

//crear tarjetas de productos en el html con sus cantidades

for (const indice in stock) {

    const listadoDeProductos = document.getElementById("listadoDeProductos");

    let productos = `<img class= "imagenProducto" src="./assets/${stock[indice].nombre}.webp" alt="Producto">
                    <h3>${stock[indice].nombre}</h3> 
                    <span>Precio: $${stock[indice].precio}</span> 
                    <div class="ordenFooterTarjetas"><input type="number" min="0" max= ${stock[indice].cantidad} id="ingresoCantidad${indice}" placeholder ="cantidad"></input>
                    <button id="botonCarrito${indice}" onclick="Armar();" type="button"><img class="sizeBotonCarrito" src="./assets/carrito.png" alt="Agregar compra" title = "agregar al carrito"></button> </div>`
    let listaProductos = document.createElement(`div`);
    listaProductos.innerHTML = productos;
    listadoDeProductos.appendChild(listaProductos);
    listaProductos.className += "ordenarProductos";
}

//armar carrito
let arrayCarrito = []
//mostrar modal con carrito
const modalCarrito = document.getElementById("modalCarrito")
mostrarCarrito.addEventListener("click", verCarrito);
//ocultar modal
const cerrar = document.getElementById("cerrar");
cerrar.onclick = () => cerrarModal();
//enviar compra (guardar en storage).
const enviar = document.getElementById("confirmar")
enviar.onclick = () => enviarCompra()
//borrar contenido del modal
const eliminar = document.getElementById("eliminar");
eliminar.onclick = () => limpiarModal();
//recuperar compra
const recuperarCompra = document.getElementById("recuperarCompra");
recuperarCompra.onclick = () => Recuperar();
//borrar storage
const borrarAlmacenado = document.getElementById("borrarAlmacenado");
borrarAlmacenado.onclick = () => borrarStorage()
//cambiar usuario
const cambiarUsuario = document.getElementById("cambiarUsuario");
cambiarUsuario.onclick = () => cambioUsuario()

