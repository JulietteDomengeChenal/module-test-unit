import {isInteger} from "./isInteger";
// Implement the sum function here
export function sum(a, b) {
    if( isInteger(a) && isInteger(b) ){
        return a + b;
    }
}
