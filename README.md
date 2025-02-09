# Contador React

## 1. Introducción
Este es un contador simple construido con React, donde puedes incrementar, decrementar y reiniciar el contador. Además, te muestra un mensaje de error si intentas contar en números negativos y un mensaje de éxito al alcanzar el valor máximo de 20.

Este proyecto está diseñado para:

- **Practicar conceptos básicos de React**: Usa `useState` para manejar el estado y actualiza el contador con interacciones de usuario.
- **Interactividad y Feedback al Usuario**: Ofrece mensajes en azul para guiarte durante el uso y mensajes en rojo para advertirte de errores (como intentar contar por debajo de cero).
- **Responsive Design**: El diseño es completamente adaptable a diferentes tamaños de pantalla para una mejor experiencia en dispositivos móviles y de escritorio.

## 2. Requisitos
Antes de utilizar o contribuir al proyecto **Contador React**, asegúrate de cumplir con los siguientes requisitos:

- **Node.js**: Asegúrate de tener **Node.js** instalado en tu máquina.
- **npm**: Usamos **npm** para gestionar dependencias.
  
## 3. Instalación
Una vez que tengas los requisitos listos, sigue estos pasos para instalar **Contador React**:

### Clonar el repositorio
En la terminal, ejecuta el siguiente comando para clonar el repositorio:
git clone https://github.com/Suzowy/contador.git

## Navegar a la carpeta del proyecto
Accede a la carpeta del proyecto ejecutando el siguiente comando:
cd contador

## Instalar las dependencias
npm install

## Levantar el proyecto en local
npm start

¡Listo! Ahora deberías tener el proyecto Contador React instalado y funcionando en http://localhost:3000.

## 4. Guía de Uso
Contar: Usa los botones "+" y "-" para incrementar o decrementar el contador.
Reiniciar: Si deseas reiniciar el contador a cero, haz clic en el botón "Reiniciar".
Mensajes de Estado:
Si intentas contar en números negativos, aparecerá un mensaje de error en rojo.
Si alcanzas el valor máximo de 20, aparecerá un mensaje de éxito en verde.
