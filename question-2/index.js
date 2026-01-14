import {checkPrime} from './math.js';

const numbers =[1,2,3,4,5,10,12,14,17,18,19,20]
numbers.forEach((num)=>{
    console.log(`${num} is  prime:`,checkPrime(num));

});