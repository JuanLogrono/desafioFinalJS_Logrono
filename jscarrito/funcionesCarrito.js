let sumaTotal = 0;
const listaComprados = document.getElementById("listaComprados");
let largoCarrito = 0;
const contenidoModal=document.getElementById("contenidoModal")
//Saludo
let nombreIngreso = ""
function Bienvenido() {
    nombreIngreso = ingresoUsuario.value
    let saludo = document.getElementById("saludo")
    let saludos = document.createElement("strong")
    saludo.textContent = ""
    saludos.innerHTML = `Hola ${nombreIngreso}`;
    ingresoUsuario.style = "display:none"
    saludo.appendChild(saludos);
    ingresoUsuario.value="";
}


//Armar array carrito
function Armar() {
    for (let i = 0; i < stock.length; i++) {
        var cantidad = document.getElementById(`ingresoCantidad${i}`).value;
        if (cantidad == 0 || cantidad == "cantidad") {
            continue;
        } else {
            var producto = stock[i].nombre;
            var cant = cantidad
            var precioVenta = cantidad * stock[i].precio;
            var nuevoArt = new carritoCompra(producto, cant, precioVenta);
            arrayCarrito.push(nuevoArt);
            document.getElementById(`ingresoCantidad${i}`).value = "";
        }
    }
    crear(arrayCarrito)
    
    let precioFinal = document.createElement("strong");
    precioFinal.innerHTML = `Precio Final: $${sumaTotal}`;
    contenidoModal.appendChild(precioFinal).id=`borrarPrecio`;
}
//crear carrito en el modal
function crear (arreglo){
    const listaComprados = document.getElementById("listaComprados")
    for (let x in arreglo) {
        let ingresoProductos = `${arreglo[x].producto} -------- ${arreglo[x].cant}--------- $${arreglo[x].valor}`;
        let listaCompra = document.createElement("li");
        listaCompra.innerHTML = ingresoProductos;
        listaComprados.appendChild(listaCompra).id = `borrarLista${x}`;
        sumaTotal += parseFloat(arreglo[x].valor);
        largoCarrito= parseInt(x);
        
    }
}
//mostrar carrito
function verCarrito() {
    modalCarrito.style.cssText = "display:block; position:fixed";
}

//limpiar modal de carrito
function limpiarModal() {
  for(let i =0 ; i <=largoCarrito;i++){
    const borrar = document.getElementById(`borrarLista${i}`);
    listaComprados.removeChild(borrar)
}
const borrarPrecio =document.getElementById(`borrarPrecio`);
contenidoModal.removeChild(borrarPrecio) 
}

//cerrar modal
function cerrarModal() {
    modalCarrito.style.cssText = "";
}
//enviar compra
function enviarCompra() {
    let compra = JSON.stringify(arrayCarrito);
    localStorage.setItem(nombreIngreso, compra);
    limpiarModal()
    cerrarModal()
    arrayCarrito = []
}

//recuperar compra
function Recuperar (){
    let carritoRecuperado = localStorage.getItem(`${nombreIngreso}`);
    let nuevoCarrito = JSON.parse(carritoRecuperado);
    crear(nuevoCarrito);
}

// eliminar del storage
function borrarStorage (){
    localStorage.removeItem(nombreIngreso);
}

function cambioUsuario(){
    ingresoUsuario.style.cssText = "";
    saludo.textContent = "Ingrese el nuevo usuario"   
}