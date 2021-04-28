//const URL="http://localhost:8080";
const URL="https://hungchit-ngai-java-server-01.herokuapp.com";
export const createMovieRating=(id,movieId,rating,token)=>
    fetch(`${URL}/api/controller/user/${id}/movierating/${movieId}`,{
        method: "POST",
        body: JSON.stringify(rating),
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+token
        }

    }).then(response => response.json())

export const findRatingByMovieId=(id)=>
    fetch(`${URL}/api/auth/movierating/${id}`,{
        method:"GET",

        headers: {

            'content-type': 'application/json'
        }
    })
        .then(response=>response.json())

export const deleteMovieRating=(id,token)=>
    fetch(`${URL}/api/controller/deleteMovieRating/${id}`,{
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+token
        }

    }).then(response => response.json())
export const deleteTvRating=(id,token)=>
    fetch(`${URL}/api/controller/deleteTvRating/${id}`,{
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+token
        }

    }).then(response => response.json())
export const findRatingByTvId=(id)=>
    fetch(`${URL}/api/auth/tvrating/${id}`,{
        method:"GET",

        headers: {

            'content-type': 'application/json'
        }
    })
        .then(response=>response.json())

export const createTvRating=(id,tvId,rating,token)=>
    fetch(`${URL}/api/controller/user/${id}/tvrating/${tvId}`,{
        method: "POST",
        body: JSON.stringify(rating),
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+token
        }

    }).then(response => response.json())

export const findMovieRatingById=(id,token)=>{
    return fetch(`${URL}/api/controller/movieRating/${id}`,{
        method:"GET",

        headers: {

        'content-type': 'application/json','Authorization': 'Bearer '+token
    }
}).then(response=>response.json())
}

export const findTvRatingById=(id,token)=>{
    return fetch(`${URL}/api/controller/tvRating/${id}`,{
        method:"GET",

        headers: {

            'content-type': 'application/json','Authorization': 'Bearer '+token
        }
    }).then(response=>response.json())
}
export default {
    createMovieRating,createTvRating,deleteMovieRating,deleteTvRating,
    findRatingByMovieId,findRatingByTvId,findMovieRatingById,findTvRatingById
}