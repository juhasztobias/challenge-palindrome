'use client';

import { useState, useEffect } from 'react';

const HistoryList = ({ history }) => {
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    if (history.length > 0) {
      setLoading(false); // Cambiar el estado de carga cuando el historial no está vacío
    }
  }, [history]);

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Historial</h3>

      {loading ? (
        <p className="text-gray-600">Cargando historial...</p> // Mensaje mientras se carga
      ) : history.length === 0 ? (
        <p className="text-gray-600">Aún no hay historial disponible.</p> // Mensaje cuando el historial está vacío
      ) : (
        <ul className="space-y-3">
          {history.map((item, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500"
            >
              <strong className="text-lg">{item.text}</strong> -{' '}
              <span className={item.isPalindrome ? 'text-green-500' : 'text-red-500'}>
                {item.isPalindrome ? 'Es un palíndromo' : 'No es un palíndromo'}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryList;



