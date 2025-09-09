/**
Funcional: Si el número ingresado es divisible por 3, se muestra Fizz.

Funcional: Si el número ingresado es divisible por 5, se muestra Buzz.

Funcional: Si el número ingresado es divisible por 3 y 5, se muestra FizzBuzz.

Funcional: Si el número ingresado no es divisible ni por 3 ni por 5, se muestra el número mismo.

Funcional: Si el usuario ingresa un valor no numérico, se debe mostrar un mensaje de error.

Funcional: Se muestra en pantalla un historial con los valores ingresados y sus resultados.

Técnico: Guardar cada número ingresado en un objeto junto con su resultado.

Técnico: Manejar errores usando <span>try...catch</span>.

Técnico: implementar una estructura de retorno con el siguiente formato:
 * 
 * 
 * 
 * 
 * 
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            number: 0, // Número evaluado
            result: "" // Resultado esperado
            }
    }
 * */

const checkFizz = (number) => number % 3 === 0

const checkBuzz = (number) => number % 5 === 0

export const fizzBuzz = (number) => {
  let isFizzBuzz = [false, false]
  let finalMessage = ''
  // Validations

  // Check the number in both 3 and 5 bases
  isFizzBuzz[0] = checkFizz(number)
  isFizzBuzz[1] = checkBuzz(number)

  // Complete result message
  if (isFizzBuzz[0] === true) finalMessage = finalMessage + 'Fizz'
  if (isFizzBuzz[1] === true) finalMessage = finalMessage + 'Buzz'

  return finalMessage
}

console.log(fizzBuzz(6))
