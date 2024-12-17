export const isPalindrome = (str) => {

    // Eliminar acentos
    const removeAcentos = (text) => {
      return text.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Elimina los acentos
    };

    const cleanedStr = removeAcentos(str)
      .toLowerCase()
      .replace(/[\W_]/g, ''); // Elimina espacios, puntuaciones y mayúsculas
    return cleanedStr === cleanedStr.split('').reverse().join(''); 
    /* Compara la cadena limpia original con la cadena invertida. Si son iguales, significa que el texto original es un palíndromo. */
  };