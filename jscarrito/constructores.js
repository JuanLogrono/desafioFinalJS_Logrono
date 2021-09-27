
//productos ofrecidos
class ConstProductos {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}


const producto1 = new ConstProductos("prod1", 100, 15);
const producto2 = new ConstProductos("prod2", 500, 5);
const producto3 = new ConstProductos("prod3", 50, 20);
const producto4 = new ConstProductos("prod4", 150, 10);
const producto5 = new ConstProductos("prod5", 200, 12);
const producto6 = new ConstProductos("prod6", 300, 50)


// objetos del array para el carrito
class carritoCompra {
    constructor(producto, cant, valor) {
        this.producto = producto;
        this.cant = cant;
        this.valor = valor;
    }
}