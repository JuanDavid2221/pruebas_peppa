const saludar = require('./script4');

test('saludo', () => {
    expect(saludar("kevin")).toBe("hola, kevin");
  });
  test('saludo', () => {
    expect(saludar("maria")).toBe("hola, maria");
  });
  test('saludo', () => {
    expect(saludar("juan")).toBe("hola, juan");
  });
  test('saludo', () => {
    expect(saludar("david")).toBe("hola, david");
  });
  test('saludo', () => {
    expect(saludar("luis")).toBe("hola, luis");
  });