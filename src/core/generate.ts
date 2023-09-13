import { AwesomeReleaseNameGenerator } from "./AwesomeReleaseNameGenerator";

/**
 * v1.0.0
 * @param {string} delimiter - what word separator to use default '-'
 * @param {number} length - number of words to generate default '2'
 * @param {boolean} useToken - append release name with a unique string token 'false'
 * @param {boolean} capitalize - should words be capitalised default 'false'
 */
export function generate(delimiter = '-', length = 2, useToken = false, capitalize = false): string {
    const arng = new AwesomeReleaseNameGenerator(delimiter, length, useToken, capitalize);

    return arng.generate();

}