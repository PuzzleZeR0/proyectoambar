const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session'); // Importar express-session
const connection = require('./db'); // Importar la conexión a la base de datos
const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de middleware
app.use(express.static(path.join(__dirname, '..')));
app.use('/images', express.static(path.join(__dirname, '../images')));
app.use('/styles', express.static(path.join(__dirname, '../styles')));
app.use('/scripts', express.static(path.join(__dirname, '../scripts')));
app.use('/pages', express.static(path.join(__dirname, '../pages')));

// Middleware para parsear JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'tu_secreto_aqui', // Cambia esto por un secreto fuerte
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Cambia a true si usas HTTPS
}));

// Rutas para el manejo de la base de datos
app.post('/crear-usuario', (req, res) => {
    const { username, email, password } = req.body;

    const query = 'INSERT INTO usuarios (user, email, password, role_id) VALUES (?, ?, ?, ?)';
    connection.query(query, [username, email, password, 2], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error al crear el usuario' });
        }
        res.json({ success: true });
    });
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT role_id FROM usuarios WHERE user = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error al iniciar sesión' });
        }
        if (results.length > 0) {
            req.session.user = { username, role_id: results[0].role_id }; // Guardar información del usuario en la sesión
            res.json({ success: true, role_id: results[0].role_id });
        } else {
            res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
        }
    });
});

app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error al cerrar sesión' });
        }
        res.json({ success: true, message: 'Sesión cerrada' });
    });
});

// Middleware para verificar si el usuario está autenticado
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login'); // Redirigir a la página de inicio de sesión si no está autenticado
    }
}


app.post('/productosview', (req, res) => {
    const { nombre, descripcion, precio, stock } = req.body;
    const query = 'INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)';
    connection.query(query, [nombre, descripcion, precio, stock], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error al crear el producto' });
        }
        res.json({ success: true, message: 'Producto creado exitosamente' });
    });
});

app.post('/actualizar-stock', (req, res) => {
    const transaccion = req.body;
    
    transaccion.forEach(async (item) => {
        const query = 'UPDATE productos SET stock = stock - ? WHERE id_productos = ?';
        await connection.promise().query(query, [item.cantidad, item.id]);
    });

    res.json({ success: true, message: 'Stock actualizado correctamente' });
});

app.put('/productosview/:id', (req, res) => {
    const productId = req.params.id;
    const { nombre, descripcion, precio, stock } = req.body;
    const query = 'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id_productos = ?';
    connection.query(query, [nombre, descripcion, precio, stock, productId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error al actualizar el producto' });
        }
        res.json({ success: true, message: 'Producto actualizado exitosamente' });
    });
});

app.delete('/productosview/:id', (req, res) => {
    const productId = req.params.id;
    const query = 'DELETE FROM productos WHERE id_productos = ?';
    connection.query(query, [productId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error al eliminar el producto' });
        }
        res.json({ success: true, message: 'Producto eliminado exitosamente' });
    });
});


// Rutas principales
app.get('/', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/inicio.html'));
});

app.get('/inicio', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/inicio.html'));
});

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/productos.html'));
});

app.get('/productosview2', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const offset = (page - 1) * limit;

    const query = 'SELECT * FROM productos LIMIT ? OFFSET ?';
    connection.query(query, [limit, offset], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error al obtener productos' });
        }
        res.json(results);
    });
});

app.get('/productosview', (req, res) => {
    const query = 'SELECT * FROM productos';
    connection.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error al obtener productos' });
        }
        res.json(results);
    });
});

app.get('/productosview/:id', (req, res) => {
    const productId = req.params.id;
    const query = 'SELECT * FROM productos WHERE id_productos = ?';
    connection.query(query, [productId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Error al obtener el producto' });
        }
        res.json(results[0]);
    });
});

app.get('/comprar', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/comprar.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/login.html'));
});

app.get('/crear-usuario', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/crear_usuario.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/admin.html'));
});

// Manejo de errores 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../pages/inicio.html'));
});

// Manejo de errores 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error en el servidor');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`\nServidor funcionando en http://localhost:${PORT}`);
    console.log('\nRutas disponibles:');
    console.log('- /               -> Página de inicio');
    console.log('- /inicio         -> Página de inicio');
    console.log('- /productos      -> Catálogo de productos');
    console.log('- /comprar        -> Carrito de compras');
    console.log('- /login          -> Inicio de sesión');
    console.log('- /crear-usuario  -> Registro de nuevos usuarios');
    console.log('- /admin          -> Panel de administración\n');
});