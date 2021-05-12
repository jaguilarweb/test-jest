import { arrayFruits, arrayColors } from "../arrays";

describe('Comprobaremos que existe un elemento', () => {
  test('¿Hay una banana?', () => {
    expect(arrayFruits()).toContain('banana');
  });
  test('No contiene un platano', () => {
    expect(arrayFruits()).not.toContain('platano');
  });
  test('Comprobar el tamaño de un array', () => {
    expect(arrayFruits()).toHaveLength(6);
  });

});