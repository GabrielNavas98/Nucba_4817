const KEY = "ee793e36b0b7a0ed13af01890f5dab32";

export const TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&language=en-US`;
export const TOPRATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US`;
export const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US`;

export const fetchMovies = async (searcParam, page = 1) => {
  const response = await fetch(searcParam + `&page=${page}`);
  const data = await response.json();
  return data;
};
