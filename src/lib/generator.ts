import {Options} from "./options";
import nouns from './words/nouns';
import lastWords from "./words/last";

export class ReleaseNameGenerator {

    private defaultOptions: Options = new Options('-', 2, false, false);

    options: Options;

    constructor(options?: Options) {
        this.options = options ?? this.defaultOptions;
    }

    private getRandomInt = (max: number): number => {
        return Math.floor(Math.random() * max);
    }

    generate = (): string => {
        let generated: string[] = []
        const addString = (word: string) => {
            let w = word.toLowerCase().replace(' ', '_');
            if (this.options.capitalize)
                w = word.charAt(0).toUpperCase() + word.slice(1);
                
            generated.push(`${w} `);
        }

        for (let i = 0; i < this.options.length - 1; i++) {
            addString(nouns[this.getRandomInt(nouns.length)]);
        }
        addString(lastWords[this.getRandomInt(lastWords.length)]);

        const generateToken = (): string => {
            return Math.random().toString(36).substring(2);
        };

        if (this.options.useToken)
            generated.push(generateToken());

        return generated.join(this.options.delimiter);
    }
}