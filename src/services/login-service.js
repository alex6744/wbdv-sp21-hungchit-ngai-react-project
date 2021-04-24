const LOGIN_URL="http://localhost:8080";

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

export const updateUser=(token,user)=>

    fetch(`${LOGIN_URL}/api/${user.id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+token
        },


    })
        .then(response => response.json())

export default {
    userLogin,
    userRegister,updateUser
}