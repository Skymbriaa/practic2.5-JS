
const sumNumbers1 = function() {
 return Array.from(arguments).reduce((summa, elem)=> summa+elem)
}

const result = sumNumbers1(1,2,3);

console.log(result);
//
//
//
const sumNumbers2 = (...rest) => rest.reduce((summa, elem)=>summa+elem);

// const sumNumbers2 = () => Array.from(arguments).reduce((summa, elem)=>summa+elem);

const result2 = sumNumbers2(1,2,3);
console.log(result2);

