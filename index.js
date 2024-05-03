
'use strict'

const booleanValue = false;

const booleanObj = new Boolean(false); //address
console.log(booleanObj);

// console.log(typeof booleanObj.toString(), boolean.toString());
// console.log(typeof booleanObj.valueOf(), booleanObj.valueOflueOf());

if (booleanObj) {
    console.log('booleanValue = ', booleanValue);
}

if (booleanObj) {
    console.log('booleanObd value = ', booleanObj.valueOf());
}

const test  = true.toString()

const test2 = new Boolean(true).toString();
