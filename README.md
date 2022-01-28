### Status
[![Build Status](https://travis-ci.com/jeanbaptistevilain/tdd-jest.svg?branch=master)](https://travis-ci.com/jeanbaptistevilain/tdd-jest)
[![Node.js CI](https://github.com/JulietteDomengeChenal/module-test-unit/actions/workflows/node.js.yml/badge.svg)](https://github.com/JulietteDomengeChenal/module-test-unit/actions/workflows/node.js.yml)

## Setup

1. Fork this repository
2. Setup the project using npm :
  - `npm install` to retrieve jest and dependencies  
  - `npm run test` to run the tests

Code goes in **src** folder, unit tests go in **test** folder and should end with _.test.js_.

Test coverage will be generated by Jest as a HTML report in the **coverage** folder.

## Instructions
1. Implement a Javascript function that returns the sum of two numbers
2. Add a unit test to cover this implementation (use the Jest framework)
3. Add a validation step to make sure that both arguments are valid numbers
4. Add a unit test to cover this validation step - make sure that the function code is 100% covered
5. Setup a continuous integration environment that will run your tests after each commit (optional)  
6. Use TDD to implement a Javascript function that multiplies two numbers
7. Implement the following tasks using a TDD approach :
  - Fizz Buzz : http://codingdojo.org/kata/FizzBuzz/
  - Numbers in words (in french !) : https://codingdojo.org/kata/NumbersInWords
  - Taverne de La Rose Dorée : [Sujet](https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/main/GildedRoseRequirements_fr.md) | [Projet JS](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/main/js-jest)
8. Setup a code analysis environment via SonarQube (https://sonarcloud.io/github). Run an analysis and see what can be improved in your code. Make some (tested) refactoring to improve it.
9. Bonus : regular expressions are often useful when writing tests. Learn and practice about them on https://regexcrossword.com.
  
## Resources
  - Jest Framework : https://jestjs.io/
  - General intro to TDD : https://openclassrooms.com/fr/courses/5641591-testez-votre-application-c/5656581-decouvrez-les-principes-du-test-driven-development-tdd
  - TDD tutorial (JS) : https://putaindecode.io/articles/se-lancer-dans-le-tdd/




