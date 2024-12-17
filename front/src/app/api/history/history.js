let history = [];

export async function GET(req) {
  return new Response(JSON.stringify(history), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  const { text, isPalindrome } = await req.json();

  if (!text || typeof text !== 'string') {
    return new Response(
      JSON.stringify({ error: 'Texto inválido' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  
  // Agregar al historial
  history.push({ text, isPalindrome });

  return new Response(
    JSON.stringify({ message: 'Historial actualizado' }),
    { status: 201, headers: { 'Content-Type': 'application/json' } }
  );
}