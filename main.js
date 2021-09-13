const carrito = []
let compra = 0
let cantidad = 0
let mostrar = String

class ConstProductos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}
class carritoCompra {
    constructor(producto, cant, valor) {
        this.producto = producto;
        this.cant = cant;
        this.valor = valor;
    }

}
function agregarCompra() {
    const producto = stock[compra].nombre;
    const cant = cantidad;
    const valor = cantidad * stock[compra].precio;
    const nuevoArt = new carritoCompra(producto, cant, valor);
    carrito.push(nuevoArt)
}
function modificaciones() {
    for (let index in carrito) {
        mostrar += `${parseInt([index]) + 1}) ${carrito[index].producto} Precio: $${carrito[index].valor}\n\n`

    }
}

const producto1 = new ConstProductos("Prod1", 100);
const producto2 = new ConstProductos("prod2", 500);
const producto3 = new ConstProductos("prod3", 50);
const producto4 = new ConstProductos("prod4", 150);

const stock = [producto1, producto2, producto3, producto4];

function agregarProductos() {
    let pregunta = prompt("Agregar productos al Carrito \n\n si o no").toLowerCase();
    if (pregunta == "si" || pregunta == "s") {
        while (true) {
            let seleccion = "Seleccione el Producto: \n"
            for (const indice in stock) {
                seleccion += `${parseInt([indice]) + 1}) ${stock[indice].nombre} Precio: $${stock[indice].precio}\n\n`
            }
            seleccion += `0) Dejar de agregar productos`;

            compra = parseInt(prompt(seleccion) - 1);
            esNumero = isNaN(compra)
            if (compra < 0 || compra > stock.length || esNumero) {
                alert("Error al ingresar datos")
                break;
            }
            cantidad = parseInt(prompt("Cantidad"));
            if (cantidad == " ") {
                cantidad = 0
            }
            agregarCompra()


        }
        pregunta = "no"
    }
}

agregarProductos()
let salir = true
do {
    let valorTotal = 0
    mostrar = "Esta es la mercaderia elegida para la compra\n";
    for (let index in carrito) {
        mostrar += `${parseInt([index]) + 1}) ${carrito[index].producto} Precio: $${carrito[index].valor}\n\n`
        valorTotal += parseFloat(carrito[index].valor);
    }
    mostrar += `----------------------------- \n TOTAL---------------$${valorTotal}`;
    mostrar += "\nA) Agregar producto \nB) Eliminar un producto \nC)Modificar cantidad del Producto \nD)Finalizar Compra"

    const modificar = prompt(mostrar).toUpperCase();
    switch (modificar) {
        case "A":
            agregarProductos()
            break;
        case "B":
            mostrar = "Seleccionar que mercaderia desea sacar\n"
            modificaciones()
            const eliminar = parseInt(prompt(mostrar) - 1);
            carrito.splice(eliminar, 1);

            break;
        case "C":
            mostrar = "Seleccionar Producto a Modificar\n"
            modificaciones()
            const cambiar = parseInt(prompt(mostrar) - 1)
            const nuevaCant = parseInt(prompt(`Ingresar la cantidad deseada del producto ${carrito[cambiar].producto}`));
            let indicePrecio = parseFloat(stock.find(indicePrecio => indicePrecio.nombre == `${carrito[cambiar].producto}`).precio)

            carrito[cambiar].cant = nuevaCant;
            carrito[cambiar].valor = nuevaCant * indicePrecio;
            break;
        case "D":
            salir = false
            break;
        default:
            salir = false
            break;
    }
} while (salir)