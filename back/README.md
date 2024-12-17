# Backend for challenge-palindromo

## Instalar las dependencias y ejecutar backend
Para instalar las dependencias del backend, navega a la carpeta back:

cd back
Luego ejecuta:

npm install
De ser necesario recuerda instalar cors

npm install cors
Para correr el backend, ejecuta:

node src/index.js 

.El servidor backend se ejecutará en el puerto 8000 de manera predeterminada.

 ## Endpoints de la API

### 1. Palíndromos

- **URL**: `/api/palindrome`
- **Método**: `POST`
- **Descripción**: Recibe una palabra o frase y verifica si es un palíndromo.

#### Entrada (Body):
```json
{
  "text": "La ruta natural"
}
```

#### Salida :
```json
{
  "text": "La ruta natural"
  "isPalindrome": true"
}
```

### 2. Historial

- **URL**: `/api/history`
- **Método**: `GET`
- **Descripción**: Devuelve el historial de todas las palabras o frases verificadas hasta el momento.

#### Salida :
```json
[
  { "text": "Somos", "isPalindrome": true },
  { "text": "Hola mundo", "isPalindrome": false }
]
```
