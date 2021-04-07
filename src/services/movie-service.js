const MOVIE_URL="https://api.themoviedb.org/3/movie";
const SEARCH_URL="https://api.themoviedb.org/3/search";
const API_KEY="646b022f11ded757c770a0ee07929960";
export const findMovieByTitle = (title) =>
    fetch(`${SEARCH_URL}/movie?api_key=${API_KEY}&query=${title}`)
        .then(response => response.json())

export const findCreditById = (movieID) =>
    fetch(`${MOVIE_URL}/${movieID}/credits?api_key=${API_KEY}`)
        .then(response => response.json())

export const findMovieById = (movieID) =>
    fetch(`${MOVIE_URL}/${movieID}?api_key=${API_KEY}`)
        .then(response => response.json())

export const findNowPlaying = () =>
    fetch(`${MOVIE_URL}/now_playing?api_key=${API_KEY}`)
        .then(response => response.json())

export const findPopular = () =>
    fetch(`${MOVIE_URL}/popular?api_key=${API_KEY}`)
        .then(response => response.json())

export default {
    findMovieByTitle,
    findMovieById,
    findCreditById,
    findNowPlaying,
    findPopular
}