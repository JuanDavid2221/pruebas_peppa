const isUpperCase=require('./script2');

test('The string HELLO should return true', () => {
    const result = isUpperCase('HELLO');
    expect(result).toBe(true);
})

test('hoy me levante con ganas de programar', () => {
    const result = isUpperCase('levante');
    expect(result).toBe(false);
})

test('mil', () => {
    const result = isUpperCase('mil');
    expect(result).toBe(false);
})

test('FUNCION', () => {
    const result = isUpperCase('FUNCION');
    expect(result).toBe(true);
})

test('angarita no quiero mas comite', () => {
    const result = isUpperCase('levante');
    expect(result).toBe(false);
})