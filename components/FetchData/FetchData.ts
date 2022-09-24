export const FetchData = async () => {
  const response = await fetch(
    `http://www.mocky.io/v2/5c62e7c33000004a00019b05`
  )
  const data = await response.json();
  return data;
}