document.addEventListener('DOMContentLoaded', function() {
    const productosContainer = document.getElementById('productos-container');
    const botonCargarMas = document.getElementById('cargar-mas');
    let paginaActual = 1;
    const productosPorPagina = 8;

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

    function mostrarProductos() {
        fetch(`/productosview2?page=${paginaActual}&limit=${productosPorPagina}`)
            .then(response => response.json())
            .then(productos => {
                productos.forEach(producto => {
                    const precio = parseFloat(producto.precio); // Asegúrate de convertir a número
                    const productoHTML = `
                        <div class="producto" data-id="${producto.id_productos}">
                            <div class="producto-contenido">
                                <div class="producto-imagen">
                                    <img src="${producto.imagen || '../images/placeholder.jpg'}" alt="${producto.nombre}">
                                </div>
                                <h3 class="producto-nombre">${producto.nombre}</h3>
                                <p class="producto-descripcion">${producto.descripcion}</p>
                                <p class="producto-precio">$${precio.toFixed(2)}</p>
                                <div class="producto-cantidad">
                                    <button class="disminuir">-</button>
                                    <input type="number" value="1" min="1" class="cantidad">
                                    <button class="aumentar">+</button>
                                </div>
                                <button class="boton-agregar">Agregar al carrito</button>
                            </div>
                        </div>
                    `;
                    productosContainer.insertAdjacentHTML('beforeend', productoHTML);
                });
            })
            .catch(error => {
                console.error('Error al cargar productos:', error);
            });
    }

    function agregarAlCarrito(productoId, cantidad) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        
        // Obtener detalles completos del producto
        fetch(`/productosview/${productoId}`)
            .then(response => response.json())
            .then(producto => {
                const productoExistente = carrito.find(item => item.id === productoId);
                
                if (productoExistente) {
                    productoExistente.cantidad += cantidad;
                } else {
                    carrito.push({
                        id: producto.id_productos,
                        nombre: producto.nombre,
                        precio: producto.precio,
                        cantidad: cantidad,
                        imagen: producto.imagen
                    });
                }
                
                localStorage.setItem('carrito', JSON.stringify(carrito));
                actualizarContadorCarrito();
            });
    }

    function actualizarContadorCarrito() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const totalItems = carrito.reduce((total, producto) => total + producto.cantidad, 0);
        document.querySelectorAll('.contador').forEach(contador => {
            contador.textContent = totalItems;
        });
    }

    // Event listeners
    botonCargarMas.addEventListener('click', function() {
        paginaActual++;
        mostrarProductos();
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('boton-agregar')) {
            const productoId = parseInt(e.target.closest('.producto').dataset.id);
            const cantidad = parseInt(e.target.previousElementSibling.querySelector('.cantidad').value);
            agregarAlCarrito(productoId, cantidad); // Llamar a la función para agregar al carrito
        }
    });

    // Inicialización
    mostrarProductos();
    actualizarContadorCarrito();
});