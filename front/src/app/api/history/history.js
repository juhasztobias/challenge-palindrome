let history = [];

/**
 * GET Endpoint
 * Devuelve el historial de textos verificados, en formato JSON.
 */
export async function GET(req) {
  return new Response(JSON.stringify(history), {
    headers: { 'Content-Type': 'application/json' },
  });
}

/**
 * POST Endpoint
 * Recibe un texto y verifica si es un palíndromo. Si el texto es válido, lo agrega al historial.
 * Devuelve un mensaje de éxito o error, según corresponda.
 */
export async function POST(req) {
  // Parseamos los datos del cuerpo de la solicitud
  const { text, isPalindrome } = await req.json();

  // Validación del texto recibido
  if (!text || typeof text !== 'string') {
    return new Response(
      JSON.stringify({ error: 'Texto inválido' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Agregar el texto y su verificación de palíndromo al historial
  history.push({ text, isPalindrome });

  // Respuesta de éxito
  return new Response(
    JSON.stringify({ message: 'Historial actualizado' }),
    { status: 201, headers: { 'Content-Type': 'application/json' } }
  );
}
