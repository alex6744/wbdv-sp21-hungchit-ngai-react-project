const INDIVIDUAL_URL="http://localhost:8080/api/users/individual";



export const createIndividual=(individual)=>
    fetch(`${INDIVIDUAL_URL}`, {
        method: "POST",
        body: JSON.stringify(individual),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())



export default {
    createIndividual
}
