const API_KEY = "91c36215f5c58c568f3d05a42a4e2025";
const request = {
  fetchTrending: `/trending/all/week?api_key=91c36215f5c58c568f3d05a42a4e2025&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=91c36215f5c58c568f3d05a42a4e2025&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=91c36215f5c58c568f3d05a42a4e2025&language=en-US`,
  fetchActionMovies: `/discrover/movie?api_key=91c36215f5c58c568f3d05a42a4e2025&with_genres=28`,
  fetchComedyMovies: `/discrover/movie?api_key=91c36215f5c58c568f3d05a42a4e2025&with_genres=35`,
  fetchHorrorMovies: `/discrover/movie?api_key=91c36215f5c58c568f3d05a42a4e2025&with_genres=27`,
  fetchRomanceMovies: `/discrover/movie?api_key=91c36215f5c58c568f3d05a42a4e2025&with_genres=10749`,
  fetchDocumentaries: `/discrover/movie?api_key=91c36215f5c58c568f3d05a42a4e2025&with_genres=99`,
};
//https://api.themoviedb.org/3/discrover/movie?api_key=91c36215f5c58c568f3d05a42a4e2025&with_genres=28
//https://api.themoviedb.org/3/trending/all/week?api_key=91c36215f5c58c568f3d05a42a4e2025&language=en-US
export default request;
