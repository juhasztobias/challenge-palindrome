import express from 'express';
import cors from 'cors';
import { json } from 'express';
import palindromeRoutes from './routes/palindrome.js';
import { errorHandler } from './middlewares/errorMiddleware.js';

export const app = express();

app.use(cors());
app.use(json());

// Ruta de prueba para verificar que el servidor esté funcionando.
app.get('/ping', (req, res) => {
    res.json({
      "message": 'pong',
    });
  });

// Rutas de la aplicación
app.use('/api', palindromeRoutes);

// Middleware para manejar errores
app.use(errorHandler);