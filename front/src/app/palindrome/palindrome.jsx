'use client';

import { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import HistoryList from './components/HistoryList';

const Palindrome = () => {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  // Función para obtener el historial
  const fetchHistory = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/history');
      if (response.ok) {
        const data = await response.json();
        setHistory(data); // Actualizamos el historial en el estado
      } else {
        console.error('Error al obtener el historial');
      }
    } catch (error) {
      console.error('Error al cargar el historial:', error);
    }
  };

  // Llamar a fetchHistory cuando el componente se monta o cuando el historial cambia
  useEffect(() => {
    fetchHistory();
  }, []); // Solo lo hace al montar el componente

  // Función que se ejecuta al enviar un nuevo texto a verificar
  const handleResultSubmit = (data) => {
    setResult(data); // Establecer el resultado de la verificación
    // Llamar a fetchHistory para obtener el historial actualizado
    fetchHistory();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow-lg mt-6">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Verificador de Palíndromos
      </h1>
      <InputForm onSubmit={handleResultSubmit} />

      {result && (
        <div className="mt-4">
          <h3 className="text-2xl font-semibold">Resultado</h3>
          <p className="text-lg mt-2">
            <span className="font-bold">{result.text}</span> -{' '}
            <span className={result.isPalindrome ? 'text-green-500' : 'text-red-500'}>
              {result.isPalindrome ? 'Es un palíndromo' : 'No es un palíndromo'}
            </span>
          </p>
        </div>
      )}

      <HistoryList history={history} />
    </div>
  );
};

export default Palindrome;



