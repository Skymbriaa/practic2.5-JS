
const sum1 = function (number1=2, number2=3) {
  if(typeof number1 !=='number' || typeof number2 !== 'number'){
    return NaN;
  }
  return number1 + number2;
};


const sum2 = (number1=2, number2=3) => {
  if(typeof number1 !=='number' || typeof number2 !== 'number'){
    return NaN;
  }number1 + number2
};
