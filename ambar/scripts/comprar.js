// Selección de elementos del DOM
const listaProductos = document.getElementById('lista-productos');
const precioTotalElement = document.getElementById('precio-total');
const contadorCarrito = document.querySelector('.contador');
const btnVaciar = document.getElementById('vaciar-carrito');
const modalVaciar = document.getElementById('modal-vaciar');
const btnConfirmar = document.getElementById('confirmar-vaciar');
const btnCancelar = document.getElementById('cancelar-vaciar');

// Función para actualizar la vista del carrito
function actualizarVistaCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    listaProductos.innerHTML = '';
    
    let total = 0;
    carrito.forEach(producto => {
        const precio = parseFloat(producto.precio.replace(/[^\d.-]/g, ''));
        const subtotal = precio * producto.cantidad;
        total += subtotal;
        
        listaProductos.innerHTML += `
            <div class="producto-carrito" data-id="${producto.id}">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="info-producto">
                    <p class="nombre-producto">${producto.nombre}</p>
                    <div class="precio-y-cantidad">
                        <span class="subtotal">$${formatearNumero(subtotal)}</span>
                    </div>
                    <div class="controles-cantidad">
                        <button class="disminuir" data-id="${producto.id}">-</button>
                        <input type="number" value="${producto.cantidad}" min="1" class="cantidad-input" data-id="${producto.id}">
                        <button class="aumentar" data-id="${producto.id}">+</button>
                    </div>
                </div>
                <button class="eliminar-producto" data-id="${producto.id}">×</button>
            </div>
        `;
    });
    
    precioTotalElement.textContent = `$${formatearNumero(total)}`;
    contadorCarrito.textContent = carrito.reduce((sum, p) => sum + p.cantidad, 0);
    
    if (carrito.length === 0) {
        listaProductos.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío</p>';
    }
}

// Función para manejar eventos de click
function manejarEventosClick(e) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Eliminar producto
    if (e.target.classList.contains('eliminar-producto')) {
        const id = parseInt(e.target.dataset.id);
        
        // Animación de eliminación
        e.target.closest('.producto-carrito').style.opacity = '0';
        setTimeout(() => {
            const nuevoCarrito = carrito.filter(p => p.id !== id);
            localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
            actualizarVistaCarrito();
        }, 300);
    }
    
    // Aumentar cantidad
    if (e.target.classList.contains('aumentar')) {
        const id = parseInt(e.target.dataset.id);
        const producto = carrito.find(p => p.id === id);
        if (producto) {
            producto.cantidad += 1;
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarVistaCarrito();
        }
    }
    
    // Disminuir cantidad
    if (e.target.classList.contains('disminuir')) {
        const id = parseInt(e.target.dataset.id);
        const producto = carrito.find(p => p.id === id);
        if (producto && producto.cantidad > 1) {
            producto.cantidad -= 1;
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarVistaCarrito();
        }
    }
}

// Función para manejar cambios en inputs
function manejarCambiosInput(e) {
    if (e.target.classList.contains('cantidad-input')) {
        const id = parseInt(e.target.dataset.id);
        const nuevaCantidad = parseInt(e.target.value);
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const producto = carrito.find(p => p.id === id);
        
        if (producto && nuevaCantidad >= 1) {
            producto.cantidad = nuevaCantidad;
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarVistaCarrito();
        } else if (producto) {
            // Si la cantidad es menor que 1, restablecer a 1
            e.target.value = 1;
            producto.cantidad = 1;
            localStorage.setItem('carrito', JSON.stringify(carrito));
            actualizarVistaCarrito();
        }
    }
}

// Añade estas variables al inicio con las otras selecciones de DOM
const modalPago = document.getElementById('modal-pago');
const btnAceptarPago = document.getElementById('aceptar-pago');


document.getElementById('formulario-pago').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validación de fecha (tu código existente)
    const mes = document.getElementById('mes-expiracion').value;
    const ano = document.getElementById('ano-expiracion').value;
    
    if (!mes || !ano) {
        alert('Por favor complete la fecha de caducidad');
        return false;
    }
    
    const expDate = new Date(ano, mes);
    const hoy = new Date();
    
    if (expDate < hoy) {
        alert('La tarjeta está expirada');
        return false;
    }
    
    
    // Mostrar modal de confirmación
    modalPago.style.display = 'flex';
    
    // Vaciar el carrito
    localStorage.removeItem('carrito');
    actualizarVistaCarrito();
    
});

// Configurar el botón de aceptar
btnAceptarPago.addEventListener('click', function() {
    modalPago.style.display = 'none';
    
});

// Función para inicializar el modal
function inicializarModal() {
    btnVaciar.addEventListener('click', function() {
        modalVaciar.style.display = 'flex';
    });

    btnConfirmar.addEventListener('click', function() {
        localStorage.removeItem('carrito');
        actualizarVistaCarrito();
        modalVaciar.style.display = 'none';
    });

    btnCancelar.addEventListener('click', function() {
        modalVaciar.style.display = 'none';
    });
}

// Función para validar el formulario de pago
function configurarValidacionFormulario() {
    document.getElementById('formulario-pago').addEventListener('submit', function(e) {
        const mes = document.getElementById('mes-expiracion').value;
        const ano = document.getElementById('ano-expiracion').value;
        
        if (!mes || !ano) {
            e.preventDefault();
            alert('Por favor complete la fecha de caducidad');
            return false;
        }
        
        const expDate = new Date(ano, mes);
        const hoy = new Date();
        
        if (expDate < hoy) {
            e.preventDefault();
            alert('La tarjeta está expirada');
            return false;
        }
        
        return true;
    });
}

// Función para generar opciones de fecha
function generarOpcionesFecha() {
    const mesExpiracion = document.getElementById('mes-expiracion');
    const anoExpiracion = document.getElementById('ano-expiracion');

    // Limpiar opciones existentes
    mesExpiracion.innerHTML = '';
    anoExpiracion.innerHTML = '';

    // Agregar opción por defecto
    const mesDefault = document.createElement('option');
    mesDefault.value = '';
    mesDefault.textContent = 'MM';
    mesDefault.selected = true;
    mesDefault.disabled = true;
    mesExpiracion.appendChild(mesDefault);

    const anoDefault = document.createElement('option');
    anoDefault.value = '';
    anoDefault.textContent = 'AAAA';
    anoDefault.selected = true;
    anoDefault.disabled = true;
    anoExpiracion.appendChild(anoDefault);

    // Generar meses (01-12)
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        const mes = i < 10 ? `0${i}` : `${i}`;
        option.value = mes;
        option.textContent = mes;
        mesExpiracion.appendChild(option);
    }

    // Generar años (25-99)
    for (let i = 25; i <= 99; i++) {
        const option = document.createElement('option');
        const ano = i < 10 ? `0${i}` : `${i}`;
        option.value = `20${ano}`; // Guardamos como 2025, 2026, etc.
        option.textContent = `20${ano}`; // Mostramos como 2025, 2026, etc.
        anoExpiracion.appendChild(option);
    }
}

// Inicialización cuando el DOM está listo
function inicializar() {
    // Configurar event listeners
    document.addEventListener('click', manejarEventosClick);
    document.addEventListener('change', manejarCambiosInput);
    
    // Configurar otras funcionalidades
    inicializarModal();
    configurarValidacionFormulario();
    generarOpcionesFecha();
    
    // Cargar vista inicial
    actualizarVistaCarrito();
}

// Iniciar la aplicación
document.addEventListener('DOMContentLoaded', inicializar);

function formatearNumero(numero) {
    return numero.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
