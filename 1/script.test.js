const valide=require('./script');
test('Contar vocales mayúsculas en una cadena', () => {
  expect(valide('Hola, Mundo')).toBe(4); 
  expect(valide('JavaScript')).toBe(3); 
  expect(valide('')).toBe(0); 
});

test('Contar vocales mayúsculas en una cadena', () => {
    expect(valide('Hola')).toBe(2); 
    expect(valide('Miguel')).toBe(3); 
    expect(valide('')).toBe(0); 
  })

  test('Contar vocales mayúsculas en una cadena', () => {
    expect(valide('Mundo')).toBe(2); 
    expect(valide('Peppa')).toBe(2); 
    expect(valide('')).toBe(0); 
  })

  test('Contar vocales mayúsculas en una cadena', () => {
    expect(valide('prueba')).toBe(3); 
    expect(valide('dos tres')).toBe(2); 
    expect(valide('')).toBe(0); 
  })

  test('Contar vocales mayúsculas en una cadena', () => {
    expect(valide('corazon')).toBe(3); 
    expect(valide('aeiou')).toBe(5); 
    expect(valide('')).toBe(0); 
  })

  