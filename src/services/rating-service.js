const URL="http://localhost:8080";

export const createRating=(rating,token)=>
    fetch(`${URL}/api/user/${rating.id}/rating`,{
        method: "POST",
        body: JSON.stringify(rating),
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+token
        }

    }).then(response => response.json())

export const findRatingById=(id)=>
    fetch(`${URL}/api/auth/rating/${id}`)
        .then(response=>response.json())

export default {
    createRating,
    findRatingById
}