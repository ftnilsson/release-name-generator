import { AwesomeReleaseNameGenerator } from "./AwesomeReleaseNameGenerator";
export function generate(delimiter: string = '-', length: number = 2, useToken: boolean = false, capitalize: boolean = false): string {
    const arng = new AwesomeReleaseNameGenerator(delimiter, length, useToken, capitalize);

    return arng.generate();

}