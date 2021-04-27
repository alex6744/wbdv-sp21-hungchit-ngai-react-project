const LOGIN_URL="http://localhost:8080";
//const LOGIN_URL="https://hungchit-ngai-java-server-01.herokuapp.com";

export const userRegister=(user)=> {

   return  fetch(`${LOGIN_URL}/api/auth/signup`, {
        method: "POST",

        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}
export const userLogin=(user)=> {
    return fetch(`${LOGIN_URL}/api/auth/signin`, {
        method: "POST",

        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const updateUser=(user,token)=> {

    return fetch(`${LOGIN_URL}/api/controller/profile/${user.id}`, {

        method: "PUT",

        body: JSON.stringify(user),
        headers: {

            'content-type': 'application/json',
            'Authorization':'Bearer '+token
        },


    })
        .then(response => response.json())
}

export const signout=()=>
    fetch(`${LOGIN_URL}/api/controller/signout`,{
        method:"GET",

        headers: {

            'content-type': 'application/json'
        }
    }).then(response => response.json())
export const profile=(id,token)=>
    fetch(`${LOGIN_URL}/api/controller/profile/${id}`,{
        method:"GET",

        headers: {

            'content-type': 'application/json',
            'Authorization':'Bearer '+token
        }
    }).then(response => response.json())

export const currentUser=()=>{
    return  fetch(`${LOGIN_URL}/api/controller/currentUser`,{
        method:"GET",
        headers: {

            'content-type': 'application/json'


        }
    })
        .then(response=>response.json())
}
export default {
    signout,profile,currentUser,
    userLogin,
    userRegister,updateUser
}