const multiplicar=require('./script3');

test('adds 5*5 es igual a 25',() =>{
    expect(multiplicar(5,5)).toBe(25)
});

test('adds 2*2 es igual a 4',() =>{
    expect(multiplicar(2,2)).toBe(4)
});

test('adds -5*-5 es igual a -25',() =>{
    expect(multiplicar(-5,-5)).toBe(25)
});

test('adds 8*2 es igual a 16',() =>{
    expect(multiplicar(8,2)).toBe(16)
});

test('adds 5*5 es igual a 25',() =>{
    expect(multiplicar(5,5)).toBe(25)
});