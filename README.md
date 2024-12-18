# Palindrome Checker Challenge

## 📄Objetivo del Challenge

Desarrollar una aplicación full-stack que permita verificar si una palabra o frase es un palíndromo, y almacenar un historial de las entradas.

## Requisitos

### Backend

- Crear un endpoint en Node.js que reciba una palabra o frase y devuelva si es un palíndromo.
- Este endpoint debe manejar tanto palabras como frases.
- Mantener un historial de las palabras o frases enviadas, almacenándolas en una estructura de datos adecuada.

### Frontend

- Desarrollar una interfaz de usuario con Next.js que permita a los usuarios ingresar palabras o frases, enviar la solicitud al endpoint y mostrar si es un palíndromo.
- Mostrar el historial de palabras o frases enviadas al backend en la misma interfaz.

##  Instrucciones para ejecutar la aplicación.

### 🛠️ Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Node.js**: La aplicación está construida con Node.js, por lo que necesitas tenerlo instalado. Puedes descargarlo e instalarlo desde [aquí](https://nodejs.org/).
- **npm** (Node Package Manager): npm se instala automáticamente con Node.js. Lo necesitarás para gestionar las dependencias del proyecto.

### 1. Clonar el repositorio

Primero, debes clonar el repositorio en tu máquina local. Abre una terminal y ejecuta:
- git clone https://github.com/LeoSebastian23/challenge-palindrome.git

Luego ve al proyecto:
- cd challenge-palindrome

### 🚀 2. Instalar las dependencias y ejecutar backend
Para instalar las dependencias del backend, navega a la carpeta back:
  -  cd back
    
Luego ejecuta:
  - npm install
    
De ser necesario recuerda instalar cors
  - npm install cors
    
Para correr el backend, ejecuta:
  - node src/index.js

El servidor backend se ejecutará en el puerto 8000 de manera predeterminada.

### 🚀 3. Instalar las dependencias y ejecutar frontend
Para instalar las dependencias del frontend, abre una nueva terminal y navega a la carpeta front:
  -  cd front

En caso de encontrarte en la carpeta back puede ejecutar:
  -  cd ../front
    
Luego ejecuta:
  - npm install
    
Recuerda instalar axios
  - npm install axios
    
Para correr el frontend, ejecuta:
  - npm run dev

### ¡Exitos en la aplicacion!

