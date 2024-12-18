/**
 * Función para verificar si una cadena de texto es un palíndromo.
 * Esta función elimina acentos, convirte a minúsculas
 * y elimina caracteres no alfanuméricos (como espacios y puntuación) antes de compararla
 * con su versión invertida para determinar si es un palíndromo.
 */

export const isPalindrome = (str) => {

  /**
   * Utiliza la normalización Unicode para separar los acentos y luego los elimina.
   */
  const removeAcentos = (text) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); 
  };

  // Convierte la cadena a minúsculas y quita caracteres no alfanuméricos
  const cleanedStr = removeAcentos(str)
    .toLowerCase()
    .replace(/[\W_]/g, ''); // Elimina espacios, puntuaciones y mayúsculas
  
  // Compara la cadena limpia original con la cadena invertida. Si son iguales, significa que el texto original es un palíndromo.
  return cleanedStr === cleanedStr.split('').reverse().join(''); 
};
