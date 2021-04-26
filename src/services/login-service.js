// const LOGIN_URL="http://localhost:8080";
const LOGIN_URL="https://hungchit-ngai-java-server-01.herokuapp.com";

export const userRegister=(user)=>
    fetch(`${LOGIN_URL}/api/auth/signup`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const userLogin=(user)=>
    fetch(`${LOGIN_URL}/api/auth/signin`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateUser=(user)=>

    fetch(`${LOGIN_URL}/api/controller/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {

            'content-type': 'application/json'
        },


    })
        .then(response => response.json())

export default {
    userLogin,
    userRegister,updateUser
}