import {isInteger} from "./isInteger";

export function fizzBuzz(n) {
  // A completer
    if( isInteger(n) && n%3 === 0 && n%5 === 0 ){
        return 'fizzbuzz';
    } else if( isInteger(n) && n%3 === 0 ){
        return 'fizz';
    } else if( isInteger(n) && n%5 === 0 ){
        return 'buzz';
    }
}
