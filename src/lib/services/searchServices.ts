

export const searchByQuery = async (queryText: string) => {
  try {
    const parsedQuery = queryText
    .trim()
    .replaceAll(' ', '+')
    const rawResponse = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${parsedQuery}`);
    const response = await rawResponse.json();

    return response?.hits?.map((hit: any) => hit.largeImageURL);
  } catch (err) {
    console.log("Error on searchByQuery:: ", searchByQuery)
  }
}