import { strictEquals } from "./utils";

describe("Given a strictEquals function", () => {
    describe("When is invoked", () => {
        test("Then, should return '2'", () => {
            const expectedNumber = 2;
            
            const result = strictEquals();

            expect(result).toBe(expectedNumber);
        });
    });
});