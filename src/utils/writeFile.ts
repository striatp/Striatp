import fs from 'fs';

/**
 * Writes the provided data to a specified file path in JSON format.
 *
 * @param path - The file path where the data should be written.
 * @param data - The data to be written to the file. It will be serialized to JSON.
 * @throws Will throw an error if the file cannot be written.
*/
export default function writeFile(path: string, data: any): void {
    try {
        const JSONData = JSON.stringify(data, null, 2);
        fs.writeFileSync(path, JSONData, { encoding: 'utf8' });
        console.log(`Data successfully written to ${path}`);
    } catch (error) {
        console.error(`Failed to write data to ${path}:`, error);
        throw error;
    }
}