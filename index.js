const express = require('express');
const { sequelize } = require('./database/connect.js');

const app = express();
app.use(express.json()); //Middleware para parsear JSON

// Función para conectar a la base de datos
const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos exitosa.');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1); // Salir del proceso si no se puede conectar
    }
};

// Llamar a la función para conectar a la base de datos
connectToDatabase();

// Ruta GET 
app.get('/', (req, res) => {
    res.json({ message: 'Éxito ...' });
});

// Ruta para ejemplo de API
app.get('/api', (req, res) => {
    res.json({ message: 'Bienvenido a la API ORM' });
});

// Definir puerto y hacer que el servidor escuche en él
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo sobre el puerto ${PORT}`);
});
