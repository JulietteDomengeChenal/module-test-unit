import {isInteger} from "./isInteger";

export function numberInWords(n) {
    if (isInteger(n)) {

        let underTen = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'zéro']
        let tenToTwenty = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf']
        let dozen = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt']
        let bigNumbers = {3: 'cent', 4: 'mille', 7: 'millions', 10:'milliards', 13: 'trillions'}

        let myFunc = num => Number(num);
        let intArray = Array.from(String(n), myFunc);
        let zeWord = '';

        while(intArray.length > 0 ){
            if(intArray.length > 3 && intArray.length%3 === 1){    //----------------------------milliers/ions/iards (4, 7, 10...)
                if (intArray.length === 4 && zeWord === '' && intArray[0] === 1){
                    zeWord += bigNumbers[4] + ' ';
                } else if(intArray[0] >= 1){
                    zeWord += underTen[intArray[0]] + ' ' + bigNumbers[intArray.length] + ' ';
                } else if(intArray[0] === 0){
                    zeWord = zeWord.slice(0, -1);
                    zeWord += ' ' + bigNumbers[intArray.length] + ' ';
                }
            }
            else if(intArray.length > 2 && intArray.length%3 === 0){    //----------------------------centaines (3, 6, 9...)
                if(intArray[0] > 1){
                    zeWord += underTen[intArray[0]] + ' ';
                }
                if (intArray[0] >= 1){
                    zeWord += bigNumbers[3] + '-';
                }
            } else if(intArray.length > 3 && intArray.length%3 === 2){  //-------------------dizaines mill (5, 8, 11..)
                if(intArray[0] === 1){
                    zeWord += tenToTwenty[intArray[1]]
                    intArray.shift();
                    if(intArray.length%3 === 1){
                        zeWord += ' ' + bigNumbers[intArray.length] + ' ';
                    }
                } else if(intArray[0] === 7 || intArray[0] === 9) {
                    zeWord += dozen[intArray[0]] + '-' + tenToTwenty[intArray[1]];
                    intArray.shift();
                    if(intArray.length%3 === 1){
                        zeWord += ' ' + bigNumbers[intArray.length] + ' ';
                    }
                } else if(intArray[0] !== 0) {
                    zeWord += dozen[intArray[0]] + '-';
                    if(intArray[1] === 1){
                        zeWord += 'et-';
                    }
                }
            } else if(intArray.length === 2){  //-------------------dizaines (2)
                if(intArray[0] === 1){
                    zeWord += tenToTwenty[intArray[1]]
                    intArray.shift();
                } else if(intArray[0] === 7 || intArray[0] === 9) {
                    zeWord += dozen[intArray[0]] + '-' + tenToTwenty[intArray[1]];
                    intArray.shift();
                } else if(intArray[0] !== 0) {
                    zeWord += dozen[intArray[0]] + '-';
                    if(intArray[1] === 1){
                        zeWord += 'et-';
                    }
                }
            }
            else if(intArray.length === 1){ //-------------------------------unité
                if( n === 0){
                    zeWord = underTen[10];
                } else {
                    zeWord += underTen[intArray[0]];
                }
            }
            intArray.shift();
        }
        return zeWord;
    }
}
