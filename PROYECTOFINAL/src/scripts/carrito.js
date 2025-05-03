// FileName: /scripts/carrito.js
document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const listaProductos = document.getElementById('lista-productos');
    const precioTotal = document.getElementById('precio-total');
    const btnPagar = document.getElementById('btn-pagar');

    // Renderizar carrito
    function renderCarrito() {
        listaProductos.innerHTML = '';
        let total = 0;

        carrito.forEach((producto, index) => {
            const subtotal = producto.precio * producto.cantidad;
            total += subtotal;

            const productoHTML = `
                <div class="producto-carrito" data-id="${producto.id}">
                    <img src="${producto.imagen || '../images/placeholder.jpg'}" alt="${producto.nombre}">
                    <div class="info-producto">
                        <div class="nombre-producto">${producto.nombre}</div>
                        <div class="precio-producto">$${producto.precio.toFixed(2)}</div>
                        <div class="controles-cantidad">
                            <button class="disminuir" data-index="${index}">-</button>
                            <input type="number" value="${producto.cantidad}" min="1" class="cantidad">
                            <button class="aumentar" data-index="${index}">+</button>
                        </div>
                    </div>
                    <button class="eliminar-producto" data-index="${index}">×</button>
                </div>
            `;
            listaProductos.insertAdjacentHTML('beforeend', productoHTML);
        });

        precioTotal.textContent = `$${total.toFixed(2)}`;
    }

    // Actualizar stock en la base de datos
    async function actualizarStock() {
        try {
            const response = await fetch('/actualizar-stock', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(carrito)
            });
            
            if (!response.ok) throw new Error('Error al actualizar stock');
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            alert('Error al procesar la compra');
        }
    }

    // Manejar evento de pago
    btnPagar.addEventListener('click', async (e) => {
        e.preventDefault();
        
        if (confirm('¿Confirmar compra?')) {
            const resultado = await actualizarStock();
            
            if (resultado.success) {
                localStorage.removeItem('carrito');
                alert('Compra realizada exitosamente!');
                window.location.href = '/productos';
            }
        }
    });

    // Eventos delegados para controles
    listaProductos.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminar-producto')) {
            const index = e.target.dataset.index;
            carrito.splice(index, 1);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            renderCarrito();
        }
    });

    renderCarrito();
});