/**
 * Palindrome Component
 * Este componente gestiona la verificación de palíndromos. Permite al usuario ingresar una palabra o frase,
 * muestra el resultado de la verificación y mantiene un historial de las verificaciones previas.
 */

'use client';

import { useState, useEffect } from 'react';
import Input from '@/app/components/Input';
import HistoryList from '@/app/components/HistoryList';

const Palindrome = () => {
  // Estado para almacenar el resultado de la verificación
  const [result, setResult] = useState<{ text: string; isPalindrome: boolean } | null>(null);

  // Estado para almacenar el historial de verificaciones
  const [history, setHistory] = useState<{ text: string; isPalindrome: boolean }[]>([]);

  // Función para obtener el historial desde el backend
  const fetchHistory = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/history');
      if (response.ok) {
        const data = await response.json();
        setHistory(data); // Actualizamos el historial con los datos obtenidos
      } else {
        console.error('Error al obtener el historial');
      }
    } catch (error) {
      console.error('Error al cargar el historial:', error);
    }
  };

  // Llamada para obtener el historial
  useEffect(() => {
    fetchHistory();
  }, []); // Este efecto solo se ejecuta una vez al montar el componente

  // Función que se ejecuta al enviar un nuevo texto para verificar
  const handleResultSubmit = (data: { text: string; isPalindrome: boolean }) => {
    setResult(data); // Establecemos el resultado de la verificación
    fetchHistory();   // Actualizamos el historial después de cada nueva verificación
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow-lg mt-6">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Verificador de Palíndromos
      </h1>

      {/* Formulario de entrada para verificar palíndromos */}
      <Input onSubmit={handleResultSubmit} />

      {/* Mostrar resultado de la verificación */}
      {result && (
        <div className="mt-2">
          <h3 className="text-2xl font-semibold">Resultado</h3>
          <p className="text-lg mt-2">
            <span className="font-bold">{result.text}</span> -{' '}
            <span className={result.isPalindrome ? 'text-green-500' : 'text-red-500'}>
              {result.isPalindrome ? 'Es un palíndromo' : 'No es un palíndromo'}
            </span> 
          </p>
        </div>
      )}

      {/* Historial de verificaciones */}
      <HistoryList history={history} />
    </div>
  );
};

export default Palindrome;




