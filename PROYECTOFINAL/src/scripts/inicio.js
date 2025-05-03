// scripts/carrito.js
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const totalItems = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    const contador = document.querySelector('.contador');
    
    if (contador) {
        contador.textContent = totalItems;
        // Mostrar u ocultar el contador
        contador.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

document.getElementById('btn-logout').addEventListener('click', function() {
    fetch('/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
            window.location.href = '/login'; // Redirigir a la página de inicio de sesión
        } else {
            alert('Error al cerrar sesión');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
// Actualizar al cargar la página
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);


window.addEventListener('storage', function(e) {
    if (e.key === 'carrito') {
        actualizarContadorCarrito();
    }
});