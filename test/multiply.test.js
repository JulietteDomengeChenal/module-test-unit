import {multiply} from "../src/multiply";

test('should return 15 on multiply 5 with 3', () => {
    expect(multiply(3, 5)).toBe(15);
});