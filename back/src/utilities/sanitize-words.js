// Esta función recibe un string que puede contener acentos, letras en mayusculas
// Y devuelve un nuevo string, sin acentos, en mayúsculas y sin espacio
export const sanitizeWord = (str)  => replaceBlankSpace(replaceAccents(str)).toUpperCase();

const mapAccent = {
    'á': 'a', 
    'é': 'e', 
    'í': 'i', 
    'ó': 'o', 
    'ú': 'u',
    'Á': 'A', 
    'É': 'E', 
    'Í': 'I', 
    'Ó': 'O', 
    'Ú': 'U',
};

// Este método recibe un string y reemplaza los caracteres con acentos por el mismo caracter sin acentuar
// Recorré el objeto mapAccent y verifica con el método replace si existe un caracter con acento, si existe lo reemplaza por el mismo sin acentuar
const replaceAccents = (str) => {
    for (const word in mapAccent) {
        str = str.replace(word, mapAccent[word])
    }

    return str
}

// Método para eliminar espacios en blanco
const replaceBlankSpace = (str) => str.replaceAll(" ", "");