'use client';

import { useState, useEffect } from 'react';
import Input from './components/Input';
import HistoryList from './components/HistoryList';

type Result = {
  text: string;
  isPalindrome: boolean;
};

const Home = () => {
  const [result, setResult] = useState<Result | null>(null);
  const [history, setHistory] = useState([]);

  // Función para cargar el historial desde el backend
  const fetchHistory = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/history');
      if (response.ok) {
        const data = await response.json();
        setHistory(data); // Actualiza el historial con los datos obtenidos
      } else {
        console.error('Error al obtener el historial');
      }
    } catch (error) {
      console.error('Error al cargar el historial:', error);
    }
  };

  // Llamar a fetchHistory cuando el componente se monta
  useEffect(() => {
    fetchHistory();
  }, []); // Solo lo hace al montar el componente

  // Función que se ejecuta al enviar un nuevo texto a verificar
  const handleResultSubmit = (data: Result | null) => {
    setResult(data); // Establecer el resultado de la verificación
    fetchHistory();   // Actualiza el historial después de verificar
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Verificador de Palíndromos</h1>
      <Input onSubmit={handleResultSubmit} />

      {result && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-300">
          <h3 className="text-2xl font-semibold mb-4">Resultado</h3>
          <p className="text-lg">
            <span className="font-bold text-gray-700">{result.text}</span> -{' '}
            <span
              className={`${
                result.isPalindrome ? 'text-green-500' : 'text-red-500'
              } font-medium`}
            >
              {result.isPalindrome ? 'Es un palíndromo' : 'No es un palíndromo'}
            </span>
          </p>
        </div>
      )}

      <HistoryList history={history} />
    </div>
  );
};

export default Home;



