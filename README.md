
 # Contador React

Esta aplicación es una prueba técnica de React. El reto es hacer una interfaz simple con un contador con las funcionalidades de incrementar, decrementar, y reiniciar el valor. Los límites de incremento y decremento aseguran que el contador nunca sea negativo ni exceda un valor máximo predefinido (20 en este caso).

La aplicación es responsive y funciona bien tanto en dispositivos móviles como de escritorio.


## Instrucciones para ejecutar el proyecto

1. Clona este repositorio:
git clone <Suzowy/contador>
 cd contador

2. instala las dependencias
npm install

3. levanta la aplicacion
npm start

## Posibles mejoras

- **Persistencia de datos**: Utilizar `localStorage` para guardar el valor del contador, de manera que se conserve incluso al recargar la página.

- **Internacionalización**: Añadir soporte para varios idiomas.

- **Mejora de accesibilidad**: Añadir etiquetas `aria` y mejorar la accesibilidad para personas con discapacidades visuales.

- **Cuenta automática y cuenta atrás**: Implementar un botón que inicie una cuenta automática y otro para la cuenta atrás. El contador se detendria automáticamente cuando llegue al límite marcado.

