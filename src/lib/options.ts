export class Options {
    delimiter?: string;
    length: number;
    useToken?: boolean;
    capitalize?: boolean;

    constructor(delimiter: string = '', length: number = 2, useToken: boolean = false, capitalize: boolean = false) {
        this.delimiter = delimiter;
        this.useToken = useToken;
        this.length = length;
        this.capitalize = capitalize;
    }
}