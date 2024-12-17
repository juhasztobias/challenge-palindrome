import { checkPalindrome } from '../../../controllers/palindromeController.js';

/**
 * POST Endpoint
 * Recibe un texto, verifica si es un palíndromo y devuelve el resultado.
 */
export async function POST(req) {
  try {
    // Parseamos los datos del cuerpo de la solicitud
    const { text } = await req.json();

    // Validación del texto recibido
    if (!text || typeof text !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Texto inválido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Verificar si el texto es un palíndromo
    const isPalindrome = checkPalindrome(text);

    // Devolver el resultado de la verificación
    return new Response(
      JSON.stringify({ text, isPalindrome }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    // Manejo de errores generales (por si hay algún fallo inesperado)
    console.error('Error en el procesamiento del POST:', error);
    return new Response(
      JSON.stringify({ error: 'Hubo un problema al procesar la solicitud' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
