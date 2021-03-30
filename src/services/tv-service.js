const TV_URL="https://api.themoviedb.org/3/tv";
const SEARCH_URL="https://api.themoviedb.org/3/search";
const API_KEY="646b022f11ded757c770a0ee07929960";
export const findTvByTitle = (title) =>
    fetch(`${SEARCH_URL}/tv?api_key=${API_KEY}&query=${title}`)
        .then(response => response.json())

export const findCreditById = (TvID) =>
    fetch(`${TV_URL}/${TvID}/credits?api_key=${API_KEY}`)
        .then(response => response.json())

export const findTvById = (TvID) =>
    fetch(`${TV_URL}/${TvID}?api_key=${API_KEY}`)
        .then(response => response.json())

export default {
    findCreditById,
    findTvById,
    findTvByTitle
}