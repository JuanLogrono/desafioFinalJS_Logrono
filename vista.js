// imprimir pedido en el modal carrito
function enModal(arreglo) {
    sumaTotal = 0;
    $(`#listaComprados`).html(``);
    for (let x in arreglo) {
        $(`#listaComprados`).append(
            `<li class="borrarPedido"><img class= "imagenModal" src="./assets/imagenes/${arreglo[x].id}.jpg" alt="Producto"><p>${arreglo[x].producto}</p><p>cantidad: ${arreglo[x].cant}</p><p>$${arreglo[x].valor}<a href="#" class="eliminarArt" name="${x}"><b>x</b></a>Quitar</p></li>`
        );
        sumaTotal += parseFloat(arreglo[x].valor);
        $(`#borrarSuma`).remove();
        $(`#contenidoModal`).append(
            `<b id="borrarSuma" class="borrarPedido">Precio Final: $${sumaTotal}</b>`);
    };
    $(".eliminarArt").click(function () {
        let restarArt = this.name;
        arrayCarrito.splice(restarArt);
        if (arrayCarrito.length === 0) {
            $("#eliminar").trigger("click");
        } else {
            crear(arrayCarrito);
        }
    })
};

//imprime productos en el html
function numerarPagina(arreglo) {
    hojas = arreglo.length / 12;
    if (hojas % 1 !== 0) {
        hojas = parseInt(hojas + 1)
    }
    for (i = 1; i <= hojas; i++) {
        $(".contPag").append(`<a href="#" class="nroPagina" rel=${i}>${i}</a>`)
    }
    $(".prev").css({ "visibility": "hidden" });
    if (hojas === 1) { $(".next").css({ "visibility": "hidden" }); }
    else { $(".next").css({ "visibility": "visible" }); }
    //cambiar entre paginas
    $(".nroPagina").click(function (event) {
        event.preventDefault();
        resp = this.rel;
        $("#listadoDeProductos").html(``);
        switch (resp) {
            case "prev":
                nro -= 1
                break;
            case "next":
                nro += 1
                break;
            default:
                nro = parseInt(resp);
                break;
        }
        crearPagina(arrayProducto);
        //flechas atras adelante en el cambio de paginas
        if (nro === 1) { $(".prev").css({ "visibility": "hidden" }) }
        else { $(".prev").removeAttr("style"); }
        if (nro === hojas) { $(".next").css({ "visibility": "hidden" }); }
        else { $(".next").removeAttr("style"); };
    })
};
//imprime productos en la pagina principal     
function crearPagina(arreglo) {
    arreglo.sort((a, b) => a.orden - b.orden);
    let maxPag = nro * 12;
    let nroPag = maxPag - 12;
    if (arreglo.length > 0) {
        for (nroPag; nroPag < maxPag; nroPag++) {
            if (nroPag === arreglo.length) { break }
            else {
                $(`#listadoDeProductos`).append(`<div class="ordenarProductos"><img class= "imagenProducto" src="./assets/imagenes/${arreglo[nroPag].id}.jpg" alt="Producto">
          <h3>${arreglo[nroPag].nombre}</h3>
          <p>${arreglo[nroPag].descripcion}</p> 
          <span>Precio: $${arreglo[nroPag].precio}</span> 
          <div class="ordenFooterTarjetas"><input type="number" min="0" max= ${arreglo[nroPag].cantidad} id="ingresoCantidad${nroPag}"  placeholder ="cantidad"></input>
          <button class="btnCarrito" value="${nroPag}" type="button"><img class="sizeBotonCarrito" src="./assets/carrito.png" alt="Agregar compra" title = "agregar al carrito"></button> </div></div>`);
            }
        };
        $(".btnCarrito").click(function () {
            valor = this.value;
            Armar(valor);
        });
    }
};