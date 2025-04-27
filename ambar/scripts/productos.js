document.addEventListener('DOMContentLoaded', function() {
    // Todos los productos disponibles
    const todosProductos = [
        {
            id: 1,
            nombre: "Pulseras Tejidas Con Ámbar Auténtico",
            descripcion: "Presentación en rojo, ajustable.",
            precio: "$100",
            imagen: "../images/p1.jpg"
        },
        {
            id: 2,
            nombre: "Pulseras Tejidas Con Ámbar Auténtico",
            descripcion: "Presentación en negro, ajustable.",
            precio: "$100",
            imagen: "../images/p2.jpg"
        },
        {
            id: 3,
            nombre: "Pulsera con obsidiana, ojo de Tigre y ámbar",
            descripcion: "Pulsera con diferentes piedras.",
            precio: "$279",
            imagen: "../images/p3.jpg"
        },
        {
            id: 4,
            nombre: "Dije de colibrí de ámbar y plata laminada",
            descripcion: "Colibrí de ámbar",
            precio: "$590",
            imagen: "../images/p4.jpg"
        },
        {
            id: 5,
            nombre: "Dije de corazón de ámbar rojo y Plata",
            descripcion: "Ámbar rojo de calidad.",
            precio: "$1,200",
            imagen: "../images/p5.jpg"
        },
        {
            id: 6,
            nombre: "Pulseras tejidas con esferas de ámbar",
            descripcion: "Pulseras rojas de 4.5 mm",
            precio: "$470",
            imagen: "../images/p6.jpg"
        },
        {
            id: 7,
            nombre: "Pulseras tejidas con esferas de ámbar",
            descripcion: "Pulseras azules de 4.5 mm",
            precio: "$470",
            imagen: "../images/p7.jpg"
        },
        {
            id: 8,
            nombre: "Pulseras tejidas con esferas de ámbar",
            descripcion: "Pulseras rosas de 4.5 mm.",
            precio: "$470",
            imagen: "../images/p8.jpg"
        },
        {
            id: 9,
            nombre: "Pulseras tejidas con esferas de ámbar",
            descripcion: "Pulseras color oro de 4.5 mm.",
            precio: "$470",
            imagen: "../images/p9.jpg"
        },
        {
            id: 10,
            nombre: "Dije corazón De ámbar & plata",
            descripcion: "Corazón de ámbar.",
            precio: "$179",
            imagen: "../images/p10.jpg"
        },
        {
            id: 11,
            nombre: "Pulsera con ámbar para bebé",
            descripcion: "Pulsera de 12cm para tu bebé.",
            precio: "$279",
            imagen: "../images/p11.jpg"
        },
        {
            id: 12,
            nombre: "Collar tejido con esferas de ámbar",
            descripcion: "Collar de 50cm.",
            precio: "$950",
            imagen: "../images/p12.jpg"
        },
        {
            id: 13,
            nombre: "Pulsera con ámbar y nudo de bruja",
            descripcion: "Pulsera tejida.",
            precio: "$270",
            imagen: "../images/p13.jpg"
        },
        {
            id: 14,
            nombre: "Collar con donas de ámbar rojo y plata",
            descripcion: "Collar de 52 cm",
            precio: "$7,500",
            imagen: "../images/p14.jpg"
        },
        {
            id: 15,
            nombre: "Pulsera con esferas de jade negro y ámbar",
            descripcion: "colidad premium",
            precio: "$1,590",
            imagen: "../images/p15.jpg"
        },
        {
            id: 16,
            nombre: "Pulsera con esferas de ámbar",
            descripcion: "Tejido ajustable.",
            precio: "$4,700",
            imagen: "../images/p16.jpg"
        },

{
    id: 17,
    nombre: "Dije De Ámbar Y plata Baby Yoda",
    descripcion: "Dije del personaje Baby Yoda.",
    precio: "$570",
    imagen: "../images/p17.jpg"
},

{
    id: 18,
    nombre: "Dije de búho De ámbar y plata ley",
    descripcion: "Dije de búho color amarillo.",
    precio: "$750",
    imagen: "../images/p18.jpg"
},

{
    id: 19,
    nombre: "Pulsera San Benito obsidiana y ámbar",
    descripcion: "Pulsera del santo San Benito.",
    precio: "$450",
    imagen: "../images/p19.jpg"
},

{
    id: 20,
    nombre: "Dije de ámbar cabeza de caballo",
    descripcion: "Dije en forma de caballo.",
    precio: "$1,850",
    imagen: "../images/p20.jpg"
},

{
    id: 21,
    nombre: "Aretes con péndulos De ámbar y plata",
    descripcion: "Artes en forma de gota con plata .925.",
    precio: "$1,850",
    imagen: "../images/p21.jpg"
},

{
    id: 22,
    nombre: "Pendientes de plata y ámbar con greca",
    descripcion: "Aretes con detalles de plata y ámabar.",
    precio: "$850",
    imagen: "../images/p22.jpg"
},

{
    id: 23,
    nombre: "Anillo de flor ámbar y plata.",
    descripcion: "Anillo de ámbar con forma de flor con plata 925.",
    precio: "$770",
    imagen: "../images/p23.jpg"
},

{
    id: 24,
    nombre: "Anillo mariposa de ámbar y plata.",
    descripcion: "Anillo de ámbar con forma de mariposa con plata 925.",
    precio: "$885",
    imagen: "../images/p24.jpg"
},


{
    id: 25,
    nombre: "Dije de sol de ámbar.",
    descripcion: "Dije en forma de sol con detalles de plata",
    precio: "$2,185",
    imagen: "../images/p25.jpg"
},


{
    id: 26,
    nombre: "Dije de sol y luna.",
    descripcion: "Dije en forma de sol y luna con detalles de plata",
    precio: "$1,060",
    imagen: "../images/p26.jpg"
},

{
    id: 27,
    nombre: "Dije de gatito de ámbar.",
    descripcion: "Dije en forma de gatito con detalles de ámbar.",
    precio: "$664",
    imagen: "../images/p27.jpg"
},

{
    id: 28,
    nombre: "Dije de caballo de mar.",
    descripcion: "Dije en forma de caballo de mar con ámbar.",
    precio: "$974",
    imagen: "../images/p28.jpg"
},


{
    id: 29,
    nombre: "Dije de estrella de ámbar.",
    descripcion: "Dije de estrella con ámbar y plata 925.",
    precio: "$430",
    imagen: "../images/p29.jpg"
},


{
    id: 30,
    nombre: "Pendientes abeja de ámbar.",
    descripcion: "Aretes en forma de abeja con plata.",
    precio: "$840",
    imagen: "../images/p30.jpg"
},


{
    id: 31,
    nombre: "Aretes de plata con ámbar.",
    descripcion: "Aretes en forma de bolita con plata.",
    precio: "$1,080",
    imagen: "../images/p31.jpg"
},


{
    id: 32,
    nombre: "Collar de ámbar mediano.",
    descripcion: "Collar mediano con ámbar 60 cm tejido.",
    precio: "$1,445",
    imagen: "../images/p32.jpg"
},

    ];

    const productosPorPagina = 8;
    let paginaActual = 1;
    const contenedorProductos = document.getElementById('productos-container');
    const botonCargarMas = document.getElementById('cargar-mas');

    // Función para mostrar productos
    function mostrarProductos() {
        const inicio = (paginaActual - 1) * productosPorPagina;
        const fin = inicio + productosPorPagina;
        const productosAMostrar = todosProductos.slice(inicio, fin);
    
        productosAMostrar.forEach(producto => {
            const productoHTML = `
                <div class="producto" data-id="${producto.id}">
                    <div class="producto-contenido">
                        <div class="producto-imagen">
                            <img src="${producto.imagen}" alt="${producto.nombre}">
                        </div>
                        <h3 class="producto-nombre">${producto.nombre}</h3>
                        <p class="producto-descripcion">${producto.descripcion}</p>
                        <p class="producto-precio">${producto.precio}</p>
                        
                        <div class="producto-cantidad">
                            <button class="disminuir">-</button>
                            <input type="number" value="1" min="1" class="cantidad">
                            <button class="aumentar">+</button>
                        </div>
                        
                        <button class="boton-agregar">Agregar al carrito</button>
                    </div>
                </div>
            `;
            contenedorProductos.insertAdjacentHTML('beforeend', productoHTML);
        });
    
        if (fin >= todosProductos.length) {
            botonCargarMas.classList.add('hidden');
        }
    }

    // Cargar productos iniciales
    mostrarProductos();

    // Evento para el botón "Cargar más"
    botonCargarMas.addEventListener('click', function() {
        paginaActual++;
        mostrarProductos();
    });

    // Función para agregar al carrito
    function agregarAlCarrito(productoId, cantidad = 1) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const productoExistente = carrito.find(item => item.id === productoId);
    
        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            const producto = todosProductos.find(p => p.id === productoId);
            if (producto) {
                carrito.push({
                    ...producto,
                    cantidad: cantidad
                });
            }
        }
    
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarContadorCarrito();
    }

// Función para actualizar el contador
function actualizarContadorCarrito() {
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const totalItems = carrito.reduce((total, producto) => total + producto.cantidad, 0);
document.querySelector('.contador').textContent = totalItems;
}

// Evento al hacer clic en "Agregar al carrito"
document.addEventListener('click', function(e) {
    // Controles de cantidad
    if (e.target.classList.contains('aumentar')) {
        const input = e.target.previousElementSibling;
        input.value = parseInt(input.value) + 1;
    }
    
    if (e.target.classList.contains('disminuir')) {
        const input = e.target.nextElementSibling;
        if (parseInt(input.value) > 1) {
            input.value = parseInt(input.value) - 1;
        }
    }
    
    // Agregar al carrito
    if (e.target.classList.contains('boton-agregar')) {
        const productoId = parseInt(e.target.closest('.producto').dataset.id);
        const cantidad = parseInt(e.target.previousElementSibling.querySelector('.cantidad').value);
        agregarAlCarrito(productoId, cantidad);

        // Feedback visual
        const boton = e.target;
        boton.textContent = '✓ Agregado';
        setTimeout(() => {
            boton.textContent = 'Agregar al carrito';
            boton.style.backgroundColor = '';
        }, 1000);
    }
});

// Inicializar contador al cargar la página
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);
});

document.addEventListener('DOMContentLoaded', function() {
// Cargar carrito desde localStorage
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Actualizar contador del carrito
const contador = document.querySelector('.carrito .contador');
const totalItems = carrito.reduce((sum, producto) => sum + producto.cantidad, 0);
contador.textContent = totalItems;
});