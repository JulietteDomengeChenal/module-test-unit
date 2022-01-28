import {fizzBuzz} from "../src/fizzbuzz";

test('should return fizz on multiples of 3', () => {
  expect(fizzBuzz(9)).toBe('fizz');
  expect(fizzBuzz(25)).toBe('buzz');
  expect(fizzBuzz(45)).toBe('fizzbuzz');
});

// A completer