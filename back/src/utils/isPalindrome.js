export const isPalindrome = (str) => {
    const cleanedStr = str
      .toLowerCase()
      .replace(/[\W_]/g, ''); // Elimina espacios, puntuaciones y mayúsculas
    return cleanedStr === cleanedStr.split('').reverse().join(''); 
    /*
    Compara la cadena limpia original con la cadena invertida. Si son iguales, significa que el texto original es un palíndromo.
    */
  };