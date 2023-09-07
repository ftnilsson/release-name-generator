import ReleaseNameGenerator from "../dist/generator";
import Options from "../dist/options";

describe("Generate release name with defaults", () => {
    const _generator = new ReleaseNameGenerator();
    const result = _generator.generate();
    
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
    const _generator = new ReleaseNameGenerator(new Options(delimiter, length, useToken, capitalize));
    const result = _generator.generate();
    
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
            expect(isUppercase(word[0])).toBeTruthy();    
        }        
    });    
});

function isUppercase(char : string) : boolean{
    return char.toString() === char.toUpperCase();
}