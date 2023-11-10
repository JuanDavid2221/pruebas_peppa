const par=require('./script5');

test('es par 10',() =>{
    expect(par(10)).toBe(true)
});

test('es par 11',() =>{
    expect(par(11)).toBe(false)
});

test('es par 100',() =>{
    expect(par(100)).toBe(true)
});

test('es par 1',() =>{
    expect(par(1)).toBe(false)
});

test('es par 1000000',() =>{
    expect(par(1000000)).toBe(true)
});