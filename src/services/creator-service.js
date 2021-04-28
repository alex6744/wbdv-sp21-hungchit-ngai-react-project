//const URL="http://localhost:8080";
const URL="https://hungchit-ngai-java-server-01.herokuapp.com";
export  const uploadMovie=(token,movie,id)=>{
    return  fetch(`${URL}/api/controller/user/${id}/upload`, {
        method: "POST",

        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json',
            'Authorization':'Bearer '+token
        }
    })
        .then(response => response.json())
}

export default {
    uploadMovie
}