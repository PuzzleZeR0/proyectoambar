// scripts/carrito.js
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const totalItems = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    const contador = document.querySelector('.contador');
    
    if (contador) {
        contador.textContent = totalItems;
        // Mostrar u ocultar el contador según haya items
        contador.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Actualizar al cargar la página
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);

// Escuchar cambios en el localStorage (por si se modifica desde otra pestaña)
window.addEventListener('storage', function(e) {
    if (e.key === 'carrito') {
        actualizarContadorCarrito();
    }
});