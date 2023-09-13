const {generate} = require("../../dist/lib/es5");

describe("Generate release name with defaults", () => {
    
    const result = generate();
    test("should give a release name", () => {       
        expect(result.length).toBeGreaterThan(0);
    });

    test("should have a delimiter", () => {        
        expect(result).toContain('-');
    });

    test("should consist of 2 words", () => {        
        expect(result.split('-').length).toEqual(2);
    });
});

describe("Generate release name function with delimiter='|' and length 3 and useToken = true ", () => {
    const delimiter = '|';
    const length = 3;
    const useToken = true;
    const capitalize = true;
    
    const result = generate(delimiter, length, useToken, capitalize);
    
    test("should give a release name", () => {        
        expect(result.length).toBeGreaterThan(0);
    });

    test("should have a delimiter |", () => {        
        expect(result).toContain('|');
    });

    test("should have a token", () => {        
        expect(result.split('|').length).toEqual(4);
    });

    test("should consist of 3 words + token", () => {        
        expect(result.split('|').length).toEqual(4);
    });

    test("words should be capitalized", () => {       
        
        const split = result.split('|');
        for (let i = 0; i < split.length -1; i++){
            const word = split[i];            
            expect(isUppercase(word[0])).toBeTruthy();                
        }        
    });    
});

function isUppercase(char) {
    return char.toString() === char.toUpperCase();
}