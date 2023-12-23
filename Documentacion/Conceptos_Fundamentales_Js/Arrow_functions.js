// Función en formato tradicional (ES5)
function suma(a, b) {
    return a + b;
  }
  
  // Uso de la función
  console.log(suma(3, 5)); // Imprimirá 8

  
  // Función flecha (ES6 en adelante)
const suma = (a, b) => a + b;

/*
Como puede apreciarse, el nombre de la función se pasa como una constante. Luego, los parámetros
se expresan solos entre paréntesis seguidos de una flecha => y la expresión a imprimir o realizar.
Dependiendo del contexto, a veces no se usa return. En React sí se suele usar.
*/

// Uso de la función
console.log(suma(3, 5)); // Imprimirá 8
