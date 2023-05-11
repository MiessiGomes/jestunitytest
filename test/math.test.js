import { sum, subtraction, division, multiplication } from '../math'

describe('testing math operations', () => {
    it('test sums between two numbers', () => {
        //const esperado = 25
        const retorno = sum(15, 10)

        expect(retorno).toBe(25)
    })

    it('test subtraction between two numbers', () => {
        //const esperado = 5
        const retorno = subtraction(15, 10)

        expect(retorno).toBe(5)
    })


    it('test division between two numbers', () => {
        //const esperado = 2
        const retorno = division(20, 10)

        expect(retorno).toBe(2)
    })

    it('test multiplication between two numbers', () => {
        //const esperado = 150
        const retorno = multiplication(15, 10)

        expect(retorno).toBe(150)
    })
})