// src/routes/palindrome.js
import { Router } from 'express';
import { checkPalindrome, getHistory } from '../controllers/palindromeController.js';

const router = Router();

// Ruta para verificar si es palíndromo
router.post('/palindrome', checkPalindrome);

// Ruta para obtener el historial
router.get('/history', getHistory);

export default router;
