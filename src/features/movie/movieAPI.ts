// A mock function to mimic making an async request for data
export async function searchMovies(query?: string) {
    const ENDPOINT = 'https://api.themoviedb.org/3'
    const API_KEY = '9a8a4b4743aa34cb7f02ba8a3bfc93e0'
    let API_URL=`${ENDPOINT}/movie/popular?api_key=${API_KEY}`;
    if (query !== '' && query !== undefined){
        API_URL =`${ENDPOINT}/search/movie?api_key=${API_KEY}&query=${query}`
    }
    const response = await fetch(API_URL);
    const responseData = await response.json()
    return responseData;
}

 
  