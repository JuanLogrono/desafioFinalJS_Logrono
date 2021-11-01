var url = "https://juanlogrono.github.io/productos.json/db.json";
let arrayProducto = [];
let nro = 1;
let filtro = "";
let arrayCarrito = [];
let nombreIngreso = "";
let arrayProductoBis = [];
let busqueda = "";
//constructor de productos
class Producto {
    constructor(id, nombre, precio, cantidad, descripcion, orden, buscador) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.orden = orden;
        this.buscador = buscador;
    }
};
//constructor de productos del carrito
class carritoCompra {
    constructor(producto, cant, valor, id) {
        this.producto = producto;
        this.cant = cant;
        this.valor = valor;
        this.id = id;
    }
};
//modelo
function llamar(filtro) {
    $(`#listadoDeProductos , .contPag`).html(``);
    $.get(url, function (respuesta, estado) {
        arrayProducto = [];
        let corte = false;
        let enArray = "";
        if (estado === "success") {
            for (x in respuesta) {
                if (x == filtro) {
                    arrayProducto = [];
                    enArray = respuesta[filtro];
                    corte = true;
                } else {
                    enArray = respuesta[x];
                }
                for (let indice in enArray) {
                    let id = enArray[indice].id;
                    let nombre = enArray[indice].nombre;
                    let precio = enArray[indice].precio;
                    let cantidad = enArray[indice].cantidad;
                    let descripcion = enArray[indice].descripcion;
                    var orden = enArray[indice].orden;
                    let buscador = enArray[indice].buscador;
                    let nuevoProducto = new Producto(id, nombre, precio, cantidad, descripcion, orden, buscador);
                    arrayProducto.push(nuevoProducto);
                }
                if (corte) {
                    break;
                }
            }
        }
        crearPagina(arrayProducto);
        numerarPagina(arrayProducto);
        //si habia algun filtro por palabras lo identifica y sigue cion la busqueda
        if (busqueda !== "") {
            $("#buscador").val(busqueda);
            $("#buscador").trigger("change");
        }
    })
}


//Armar array carrito
function Armar(valor) {
    var cantidad = $(`#ingresoCantidad${valor}`).val();
    //corroborar que se ingreso una cantidad
    if (cantidad <= 0 || isNaN(cantidad)) {
        $(`#ingresoCantidad${valor}`).val(``);
    } else {
        //preparar el objeto (producto) para sumar al array
        var identificador = arrayProducto[valor].id;
        var producto = arrayProducto[valor].nombre;
        var cant = parseInt(cantidad);
        var precioVenta = cantidad * arrayProducto[valor].precio;
        //comprobar que el array esta vacio y crear el producto, o si se repite el producto modificar las cantidades. 
        if (arrayCarrito.length === 0) {
            var nuevoArt = new carritoCompra(producto, cant, precioVenta, identificador);
        } else {
            for (let i of arrayCarrito) {
                if (i.producto === producto) {
                    let nro = arrayCarrito.indexOf(i);
                    producto = arrayCarrito[nro].producto;
                    cant = parseInt(arrayCarrito[nro].cant) + parseInt(cantidad);
                    precioVenta = parseFloat(arrayCarrito[nro].valor) + parseFloat(precioVenta);
                    arrayCarrito.splice(nro, 1);
                    nuevoArt = new carritoCompra(producto, cant, precioVenta, identificador);
                } else {
                    nuevoArt = new carritoCompra(producto, cant, precioVenta, identificador);
                }
            }
        }
        arrayCarrito.push(nuevoArt);
        $(`#ingresoCantidad${valor}`).val(``);
        enModal(arrayCarrito);
    }
}