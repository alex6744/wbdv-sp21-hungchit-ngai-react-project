const PERSON_URL="https://api.themoviedb.org/3/person";
const SEARCH_URL="https://api.themoviedb.org/3/search";
const API_KEY="646b022f11ded757c770a0ee07929960";
export const findPersonByTitle = (title) =>
    fetch(`${SEARCH_URL}/person?api_key=${API_KEY}&query=${title}`)
        .then(response => response.json())



export const findPersonById = (id) =>
    fetch(`${PERSON_URL}/${id}?api_key=${API_KEY}`)
        .then(response => response.json())


export const findPopular = () =>
    fetch(`${PERSON_URL}/popular?api_key=${API_KEY}`)
        .then(response => response.json())

export const getMovieCredit=(id)=>
    fetch(`${PERSON_URL}/${id}/movie_credits?api_key=${API_KEY}`)
        .then(response=>response.json())


export const getTvCredit=(id)=>
    fetch(`${PERSON_URL}/${id}/tv_credits?api_key=${API_KEY}`)
        .then(response=>response.json())
export default {
    findPersonById,findPopular,findPersonByTitle,getMovieCredit,getTvCredit
}