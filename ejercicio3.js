console.log("Exercise: 3 (sugerencia reduce ");

const arrayUno = [1, 2, 3, 4];

const initialUno = 0;
const sumWithInitial = arrayUno.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialUno,
);

const initialDos = 1;
const productWithInitial = arrayUno.reduce(
    (accumulator, currentValue) => accumulator*currentValue, initialDos,
);


console.log(`La suma es ${sumWithInitial}.`);
console.log(`El producto es ${productWithInitial}.`);


