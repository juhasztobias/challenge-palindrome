import cors from 'cors';
import dotenv from 'dotenv';
import express, { json } from 'express';
import { sanitizeWord } from './utilities/sanitize-words.js';

dotenv.config();

export const app = express();
app.use(cors({

}));
app.use(json());

/**
 * Routes for the challenge
**/

// GET /ping
app.get('/ping', (req, res) => {
  res.json({
    "message": 'pong',
  });
});

// Endpoint para determinar si una palabra es palindromo o no
// POST /palindrome
app.post('/palindrome', (req, res) => {
  // Recibo la palabra a través del body de la request
  const { word } = req.body;

  const sanitizedWord = sanitizeWord(word);

  // Con .split convertimos el string en un array para hacer uso del método .reverse()
  // Este metodo reverse, devuelve el array invertido y por último volvemos a convertir el array en un string
  const reverseWord = sanitizedWord.split("").reverse().join("").toUpperCase();
  
  return res.json({
    word,
    // Devuelve true si el string sanitizado es igual al string reversado, es decir, la palabra es polindromo
    isPalindrome: reverseWord === sanitizedWord
  })
})