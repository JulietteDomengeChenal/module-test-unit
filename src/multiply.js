import {isInteger} from "./isInteger";

export function multiply(a, b) {
    if( isInteger(a) && isInteger(b) ){
        return a*b;
    }
}
