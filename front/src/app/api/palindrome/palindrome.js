import { checkPalindrome } from '../../../controllers/palindromeController.js';

export async function POST(req) {
  const { text } = await req.json();

  if (!text || typeof text !== 'string') {
    return new Response(JSON.stringify({ error: 'Texto inválido' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const result = checkPalindrome(text);

  return new Response(
    JSON.stringify({ text, isPalindrome: result }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
  