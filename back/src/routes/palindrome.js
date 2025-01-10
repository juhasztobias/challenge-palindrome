/**
 * Este archivo define las rutas para verificar si lo recibido es un palíndromo 
 * y obtener el historial de entradas verificadas.
 * */
import { Router } from 'express';
import {checkPalindrome, getHistory, deleteHistory, deleteHistoryItem} from '../controllers/palindromeController.js';

const router = Router();

// Ruta para verificar si es palíndromo
router.post('/palindrome', checkPalindrome);

// Ruta para obtener el historial
router.get('/history', getHistory);

// Ruta para eliminar el historial
router.delete('/history', deleteHistory);

// Ruta para eliminar un item del historial
router.delete('/history/:text', deleteHistoryItem);

export default router;
