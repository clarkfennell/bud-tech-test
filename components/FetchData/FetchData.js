/**
 * It fetches data from a mock API and returns the data as a JSON object.
 * @returns An object with a property called data.
 */
export const FetchData = async () => {
    const response = await fetch(`https://www.mocky.io/v2/5c62e7c33000004a00019b05`);
    const data = await response.json();
    return data;
};
