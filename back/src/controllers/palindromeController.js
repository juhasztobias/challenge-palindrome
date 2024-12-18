/**
 * Controlador que recibe el texto a través de una solicitud POST, valida el tipo de dato,
 * verifica si es un palíndromo y guarda la entrada en el historial.
 * 
 * Tambien obtiene el historial de entradas verificadas hasta el momento
 * Devuelve todas las entradas almacenadas en el historial, con su texto y el resultado de la verificación 
 * 
 */
import { isPalindrome } from '../utils/isPalindrome.js';
import { history } from '../models/history.js';


/**
 * Recibe el texto desde el cuerpo de la solicitud, valida que sea una cadena de texto,
 * y utiliza la función isPalindrome para determinar si es un palíndromo.
 * Luego, guarda el resultado en el historial y devuelve una respuesta JSON con el resultado.
 *  */ 

export const checkPalindrome = (req, res) => {
  const { text } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Debes enviar una palabra o frase válida' });
  }

  const result = isPalindrome(text);
  history.push({ text, isPalindrome: result }); // Utiliza push para guardar en el historial.

  res.json({
    text,
    isPalindrome: result,
  });
}; 

/**
 * Obtiene el historial de entradas verificadas.
 * */

export const getHistory = (req, res) => {
  // Devuelve el historial de entradas
  res.json(history);
}; 