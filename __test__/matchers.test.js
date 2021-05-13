describe('Comparadores comunes', () => {
  const user = {
    name: "jenny",
    lastname: "aguilar"
  }
  const user2 = {
    name: "Jenny",
    lastname: "aguilar"
  }

  test('igualdad de elementos', () => {
    expect(user).toEqual(user2);
  });
  test('No son exactamente iguales', () => {
    expect(user).not.toEqual(user2);
  });

});