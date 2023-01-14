    
let relojes = [
    {id: 5001, 
        categoria: "digitales", 
        marca: "casio", 
        modelo: "gshok", 
        precio: 60000, 
        stock: 30, 
        condicion: "nuevo"
    },
    {id: 5002, 
        categoria: "digitales", 
        marca: "citizen",
        modelo: "jg", 
        precio: 40000, 
        stock: 28, 
        condicion: "nuevo"
    },
    {id: 5003, 
        categoria: "digitales", 
        marca: "orient", 
        modelo: "jmp", 
        precio: 40000, 
        stock: 30, 
        condicion: "nuevo"
    },
    {id: 6001, 
        categoria: "mecanicos", 
        marca: "hamilton", 
        modelo: "Mechanical", 
        precio: 250000, 
        stock: 18, 
        condicion: "nuevo"
    },
    {id: 6002, 
        categoria: "mecanicos", 
        marca: "longines", 
        modelo: "apline", 
        precio: 120000, 
        stock: 2, 
        condicion: "usado"
    },
    {id: 7001, 
        categoria: "automaticos", 
        marca: "patek Philippe", 
        modelo: "nautilus", 
        precio: 38300000, 
        stock: 1, 
        condicion: "usado"
    },
    {id: 7002, 
        categoria: "automaticos", 
        marca: "audemars Piget", 
        modelo: "royal", 
        precio: 1050000, 
        stock: 4, 
        condicion: "nuevo"
    },
    {id: 7003, 
        categoria: "automaticos", 
        marca: "vacheron Constantin", 
        modelo: "overseas", 
        precio: 750000, 
        stock: 7, 
        condicion: "nuevo"
    },
    {id: 7004, 
        categoria: "automaticos", 
        marca: "a. lange & sonhe", 
        modelo: "datagraph", 
        precio: 3500000, 
        stock: 2, 
        condicion: "nuevo"
    },
    {id: 7005, 
        categoria: "automaticos", 
        marca: "omega", 
        modelo: "seamaster", 
        precio: 600000, 
        stock: 10, 
        condicion: "nuevo"}
]


alert('Bienvenido a nuestra tienda Online, haga click para vel los productos en stock')

function tienProductos(){
        let seleccionoProducto = []
        let nuevoArray = []
        let seleccionMarca = prompt(`Por favor seleccione una MARCA la lista de productos: /n${JSON.stringify(relojes)}`)
        if (!seleccionMarca) {
            alert('Ingrese un poducta de la list')
            seleccionMarca = prompt(`Por favor seleccione una MARCA la lista de productos: /n${JSON.stringify(relojes)}`) 
        } 
        
        seleccionoProducto = relojes.filter(reloj => reloj.marca === seleccionMarca)
        nuevoArray = seleccionoProducto.map(reloj =>{
                return {
                    marca: reloj.marca,
                    modelo: reloj.modelo,
                    precio: reloj.precio
                }
            }) 
     
        console.log(nuevoArray)
        alert("Selecciono: " + JSON.stringify(nuevoArray) + 'si desea comprar el producto haga click Ok')
        
        let correoElectronico = prompt("Ingrese un correo electronico valido")
            
        if (!correoElectronico.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
                alert('ingrese un correo valido')
                correoElectronico = prompt("Ingrese un correo electronico valido")           
            } 
        alert(`Gracias por haber comprado` + JSON.stringify(nuevoArray) + `Le sera enviado un mail con la orden de compra para abonar producto a: ${correoElectronico}`)
        
    }
        
    tienProductos()
    



