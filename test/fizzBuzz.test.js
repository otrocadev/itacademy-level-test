import { expect, describe, test } from '@jest/globals'
import { fizzBuzz } from '../src/scripts/fizzBuzz.js'

describe('FizzBuzz test for multiples of 3 and 5', () => {
  test('returns Fizz when multiple of 3', () => {
    // Gherking test
    /**
     * Scenario: Número divisible por 3
     * Given un número 9
     * When el número es procesado
     * Then se muestra "Fizz"
     */

    // Arrange: Preparar el escenario
    let valor_entrada = 9
    let respuesta_esperada = {
      status: 'ok', // Código indicando éxito
      message: 'El número es divisible por 3', // Mensaje de validación
      data: {
        input: 9, // Número evaluado
        output: 'Fizz', // Resultado esperado
      },
    }

    // Act: ejecutar el escenario
    let resultado = fizzBuzz(valor_entrada)

    // Assert: Comprobar el escenario
    expect(typeof resultado.data.input).toBe('number') // valida que input sea un número
    expect(resultado).toEqual(respuesta_esperada) // valida estructura de respuesta
    expect(resultado.data.output).toBe('Fizz') // valida que el valor output corresponda al expect
  })

  test('returns Buzz when multiple of 5', () => {
    //Gherking test
    /**
     * Scenario: Número divisible por 5
     * Given un número 10
     * When el número es procesado
     * Then se muestra "Buzz"
     */
    // Arrange: Preparar el escenario
    let valor_entrada = 10
    let respuesta_esperada = {
      status: 'ok', // Código indicando éxito
      message: 'El número es divisible por 5', // Mensaje de validación
      data: {
        input: 10, // Número evaluado
        output: 'Buzz', // Resultado esperado
      },
    }

    // Act: ejecutar el escenario
    let resultado = fizzBuzz(valor_entrada)

    // Assert: Comprobar el escenario
    expect(typeof resultado.data.input).toBe('number') // valida que input sea un número
    expect(resultado).toEqual(respuesta_esperada) // valida estructura de respuesta
    expect(resultado.data.output).toBe('Buzz') // valida que el valor output corresponda al expect
  })

  test('returns FizzBuzz when multiple of 3 and 5', () => {
    //Gherking test
    /**
     * Scenario: Número divisible por 3 y 5
     * Given un número 15
     * When el número es procesado
     * Then se muestra "FizzBuzz"
     */

    // Arrange: Preparar el escenario
    let valor_entrada = 15
    let respuesta_esperada = {
      status: 'ok', // Código indicando éxito
      message: 'El número es divisible por 3 y 5', // Mensaje de validación
      data: {
        input: 15, // Número evaluado
        output: 'FizzBuzz', // Resultado esperado
      },
    }

    // Act: ejecutar el escenario
    let resultado = fizzBuzz(valor_entrada)

    // Assert: Comprobar el escenario
    expect(typeof resultado.data.input).toBe('number') // valida que input sea un número
    expect(resultado).toEqual(respuesta_esperada) // valida estructura de respuesta
    expect(resultado.data.output).toBe('FizzBuzz')
  })

  test('returns number when is not multiple of 3 and 5', () => {
    //Gherking test
    /**
     * Scenario: Número no divisible por 3 ni 5
     * Given un número 8
     * When el número es procesado
     * Then se muestra el número ingresado
     */

    // Arrange: Preparar el escenario
    let valor_entrada = 8
    let respuesta_esperada = {
      status: 'ok', // Código indicando éxito
      message: 'El número no es divisible ni por 3 ni por 5', // Mensaje de validación
      data: {
        input: 8, // Número evaluado
        output: 8, // Resultado esperado
      },
    }

    // Act: ejecutar el escenario
    let resultado = fizzBuzz(valor_entrada)

    // Assert: Comprobar el escenario
    expect(typeof resultado.data.input).toBe('number') // valida que input sea un número
    expect(resultado).toEqual(respuesta_esperada) // valida estructura de respuesta
    expect(resultado.data.output).toBe(8)
  })

  test('returns an error code when the input is not an integer', () => {
    //Gherking test
    /**
     * Scenario: Número no entero
     * Given un número 8
     * When el número es procesado
     * Then se muestra el número ingresado
     */

    // Arrange: Preparar el escenario
    let valor_entrada = 'e'
    let respuesta_esperada = {
      status: 'Error', // Código indicando éxito
      message:
        'The value of the input cannot be interpreted as an integer number', // Mensaje de validación
      data: {
        input: NaN, // Número evaluado
        output: NaN, // Resultado esperado
      },
    }

    // Act: ejecutar el escenario
    let resultado = fizzBuzz(valor_entrada)

    // Assert: Comprobar el escenario
    expect(typeof resultado.data.input).toBe('number') // valida que input sea un número
    expect(resultado).toEqual(respuesta_esperada) // valida estructura de respuesta
    expect(resultado.data.output).toBe(NaN)
  })
})
