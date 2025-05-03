document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const btnAddProduct = document.getElementById('btn-add-product');
    const btnRefresh = document.getElementById('btn-refresh');
    const btnCancel = document.getElementById('btn-cancel');
    const btnCancelForm = document.getElementById('btn-cancel-form');
    const productFormContainer = document.getElementById('product-form-container');
    const productForm = document.getElementById('product-form');
    const productsTableBody = document.getElementById('products-table-body');
    const searchInput = document.getElementById('search-input');

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

    loadProducts();
   
    
    // Mostrar/ocultar formulario
    btnAddProduct.addEventListener('click', showProductForm);
    btnCancel.addEventListener('click', hideProductForm);
    btnCancelForm.addEventListener('click', hideProductForm);
    
    // Refrescar la tabla de productos 
    btnRefresh.addEventListener('click', loadProducts);
    
    // Buscar productos
    searchInput.addEventListener('input', function() {
        filterProducts(this.value.toLowerCase());
    });
    
    // Manejar envío del formulario
    productForm.addEventListener('submit', function(e) {
        e.preventDefault();
        saveProduct();
    });
    
    // Funciones
    function showProductForm() {
        productForm.reset();
        document.getElementById('product-id').value = '';
        document.getElementById('form-title').textContent = 'Nuevo Producto';
        productFormContainer.style.display = 'block';
    }
    
    function hideProductForm() {
        productFormContainer.style.display = 'none';
    }
    
    function loadProducts() {
        // Lógica para cargar productos desde la base de datos
        fetch('/productosview')
            .then(response => response.json())
            .then(products => {
                renderProducts(products);
            });
    }
    
    function showLoading() {
        productsTableBody.innerHTML = `
            <tr class="loading-row">
                <td colspan="6">
                    <div class="loading-spinner">
                        <i class="fas fa-spinner fa-spin"></i> Cargando productos...
                    </div>
                </td>
            </tr>
        `;
    }
    
    function hideLoading() {
        // Se reemplazará al renderizar los productos
    }
    
    function renderProducts(products) {
        productsTableBody.innerHTML = '';
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id_productos}</td>
                <td>${product.nombre}</td>
                <td>${product.descripcion}</td>
                <td class="price-cell">$${parseFloat(product.precio).toFixed(2)}</td> <!-- Asegúrate de convertir a número -->
                <td class="stock-cell">${product.stock}</td>
                <td>
                    <div class="action-buttons">
                        <button class="action-btn edit-btn" data-id="${product.id_productos}" title="Editar">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn delete-btn" data-id="${product.id_productos}" title="Eliminar">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </td>
            `;
            productsTableBody.appendChild(row);
        });
    
        // Agregar eventos a los botones de editar y eliminar
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                editProduct(productId);
            });
        });
    
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                confirmDelete(productId);
            });
        });
    }
    
    function filterProducts(searchTerm) {
        const filteredProducts = productsDB.filter(product => {
            return (
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.id.toString().includes(searchTerm)
            );
        });
        renderProducts(filteredProducts);
    }
    
    function saveProduct() {
        const productId = document.getElementById('product-id').value;
        const productData = {
            nombre: document.getElementById('product-name').value,
            descripcion: document.getElementById('product-description').value,
            precio: parseFloat(document.getElementById('product-price').value),
            stock: parseInt(document.getElementById('product-stock').value)
        };

        if (productId) {
            // Editar producto existente
            fetch(`/productosview/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                loadProducts();
                hideProductForm();
            });
        } else {
            // Crear nuevo producto
            fetch('/productosview', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                loadProducts();
                hideProductForm();
            });
        }
    }
    
    function editProduct(productId) {
        // Lógica para cargar el producto y llenar el formulario
        fetch(`/productosview/${productId}`)
            .then(response => response.json())
            .then(product => {
                document.getElementById('product-id').value = product.id_productos;
                document.getElementById('product-name').value = product.nombre;
                document.getElementById('product-description').value = product.descripcion;
                document.getElementById('product-price').value = product.precio;
                document.getElementById('product-stock').value = product.stock;
                document.getElementById('form-title').textContent = 'Editar Producto';
                productFormContainer.style.display = 'block';
            });
    }
    
    function confirmDelete(productId) {
        if (confirm('¿Estás seguro de eliminar este producto? Esta acción no se puede deshacer.')) {
            deleteProduct(productId);
        }
    }
    
    function deleteProduct(productId) {
        fetch(`/productosview/${productId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            loadProducts();
        });
    }
    
    function showAlert(message, type) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.innerHTML = `
            <span>${message}</span>
            <button class="close-alert">&times;</button>
        `;
        
        alert.style.position = 'fixed';
        alert.style.top = '20px';
        alert.style.right = '20px';
        alert.style.padding = '1rem 1.5rem';
        alert.style.background = type === 'success' ? '#d4edda' : 
                               type === 'danger' ? '#f8d7da' : '#d1ecf1';
        alert.style.color = type === 'success' ? '#155724' : 
                           type === 'danger' ? '#721c24' : '#0c5460';
        alert.style.borderRadius = '6px';
        alert.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        alert.style.display = 'flex';
        alert.style.alignItems = 'center';
        alert.style.gap = '1rem';
        alert.style.zIndex = '2000';
        alert.style.animation = 'fadeIn 0.3s ease-in-out';
        
        const closeBtn = alert.querySelector('.close-alert');
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.fontSize = '1.2rem';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.marginLeft = '1rem';
        
        closeBtn.addEventListener('click', function() {
            alert.style.animation = 'fadeOut 0.3s ease-in-out';
            setTimeout(() => {
                alert.remove();
            }, 300);
        });
        
        setTimeout(() => {
            if (alert.parentNode) {
                alert.style.animation = 'fadeOut 0.3s ease-in-out';
                setTimeout(() => {
                    alert.remove();
                }, 300);
            }
        }, 5000);
        
        document.body.appendChild(alert);
    }
    
    // Cargar productos al iniciar
    loadProducts();
});