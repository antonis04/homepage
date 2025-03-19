// const numbers = [10, 45, 19, 10, 56];

// const [number1, number2, ...otherNumbers] = numbers;



const numbers1 = [10, 45];
const numbers2 = [20, 49];

const allNumbers = [
    ...numbers1, 
    ...numbers2,
    89
];





const myFunction = (firstParameter, ...otherParameters) => {
    console.log(`Pierwszy argument: ${firstParameter}`);
    console.log(`Liczba pozostałych argumentów: ${otherParameters.length}`);
};

myFunction(10, 20, 30, 40, 50); 







const persons = [
    {name: 'John'},
    {name: 'Alice'},
];
 

const john = persons.find(({name}) => name === 'John');