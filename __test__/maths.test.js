import { sumar, multiplicar, restar, dividir } from "../maths.js";

describe('Cálculos matemáticos', () => {
  test('Pruebas de sumas', () => {
    expect(sumar(1,1)).toBe(2);
  });
  test('Multiplicar', () => {
    expect(multiplicar(2,4)).toBe(8);
  });
  test('Dividir', () => {
    expect(dividir(4,2)).toBe(2);
  });
  test('Restar', () => {
    expect(restar(2,4)).toBe(-2);
  });
}); 

