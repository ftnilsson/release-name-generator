import { fail } from "assert";
import rng from "./index";

describe("Generate release name with defaults", () => {
    
    const result = rng();
   
    it("should give a release name", () => {       
        expect(result.length).toBeGreaterThan(0);
    });

    it("should have a delimiter", () => {        
        expect(result).toContain('-');
    });

    it("should consist of 2 words", () => {        
        expect(result.split('-').length).toEqual(2);
    });
});

describe("Generate release name function with delimiter='|' and length 3 and useToken = true ", () => {
    const delimiter = '|';
    const length = 3;
    const useToken = true;
    const capitalize = true;
    
    const result = rng(delimiter, length, useToken, capitalize);
    
    it("should give a release name", () => {        
        expect(result.length).toBeGreaterThan(0);
    });

    it("should have a delimiter |", () => {        
        expect(result).toContain('|');
    });

    it("should have a token", () => {        
        expect(result.split('|').length).toEqual(4);
    });

    it("should consist of 3 words + token", () => {        
        expect(result.split('|').length).toEqual(4);
    });

    it("words should be capitalized", () => {       
        
        var split = result.split('|');
        for (var i = 0; i < split.length -1; i++){
            var word = split[i];
            if(word)
                expect(isUppercase(word[0]!)).toBeTruthy();    
            else
                fail();
        }        
    });    
});

function isUppercase(char : string) : boolean{
    return char.toString() === char.toUpperCase();
}