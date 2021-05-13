describe('Comprobar cadenas de texto', () => {

  const text = "Este es un texto de prueba";

  test('debe contener el siguiente texto', () => {
    expect(text).toMatch(/texto/);
  });
  test('No contiene el siguiente texto', () => {
    expect(text).not.toMatch(/rapido/);
  });
  test('Comprobar el tamaño del texto', () => {
    expect(text).toHaveLength(26);
  });

});