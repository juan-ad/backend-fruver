import express from 'express';
import { routes } from './routes/routes.js';

// Crear instancia
const app = express();
app.use(express.json());
app.use(routes)

app.listen(3000, () => {
    console.log("Servidor escuchando por puerto 3000");
});