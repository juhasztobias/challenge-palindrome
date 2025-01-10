/**
 * Middleware para manejar errores en la aplicación.
 * Captura cualquier error no gestionado en las rutas e imprime el error en la 
 * consola y responde con un mensaje al cliente.
 */
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Algo salió mal, por favor intente nuevamente' });
  }; 