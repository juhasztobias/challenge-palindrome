import { isPalindrome } from '../utils/isPalindrome.js';
import { history } from '../models/history.js';

export const checkPalindrome = (req, res) => {
  const { text } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Debes enviar una palabra o frase válida' });
  } // Manejo de error donde si lo recibido no es String devuelve un error 400 con mensaje.

  const result = isPalindrome(text);
  history.push({ text, isPalindrome: result }); // Se guarda result en el historial usando push.

  res.json({
    text,
    isPalindrome: result,
  });
}; // Se responde con un objeto JSON

export const getHistory = (req, res) => {
  res.json(history);
}; // Devuelve el array con el historial de palabras.