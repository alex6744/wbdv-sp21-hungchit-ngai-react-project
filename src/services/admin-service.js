//const URL="http://localhost:8080";
const URL="https://hungchit-ngai-java-server-01.herokuapp.com";
export  const findAllUSer=(token)=>{
    return  fetch(`${URL}/api/controller/findAllUser`, {
        method: "GET",

        headers: {
            'content-type': 'application/json',
            'Authorization':'Bearer '+token
        }
    })
        .then(response => response.json())
}

export default {
    findAllUSer
}