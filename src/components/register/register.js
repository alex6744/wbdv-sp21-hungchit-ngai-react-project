import React, {useEffect,useState} from "react";
import {Link,useParams} from "react-router-dom";
import {connect} from 'react-redux'

import LoginService from "../../services/login-service"
const Register=({history})=>{
    const [newUser,setNewUser]=useState({username:"",password:"",email:"",firstname:"",lastname:"",role:[]})
    const [verify,setVerify]=useState("")
    const [passwordError,setPasswordError]=useState(false)
    const [error,setError]=useState(false)
    const [message,setMessage]=useState({})
    const [username,setUsername]=useState(false)
    const [email,setEmail]=useState(false)
    useEffect(()=>{

    },[])
    return(
        <div>
            {!localStorage.getItem("username")&&<div className="container">
                <h1>
                    Sign up
                </h1>
                {error&&<h4>One of the field is blank, please try again</h4>}
                {username&&<h4>username is already taken,please try another one</h4>}
                {email&&<h4>email is already taken,please try another one</h4>}
                <div onChange={(e)=>setNewUser({...newUser,role:[e.target.value]})}>
                    <input type="radio" value="individual" name="type" /> individual <br/>
                    <input type="radio" value="admin" name="type" /> admin    <br/>
                    <input type="radio" value="creator" name="type" /> creator      <br/>
                </div>

                <br/>
                {passwordError&&<h4>Password is not match to verify password, please try again</h4>}

                <div className="mb-3 row">
                    <label htmlFor="username"
                           className="col-sm-2 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                                value={newUser.username}
                               className="form-control"
                               id="username"
                               placeholder="alice"
                               onChange={(e)=>{
                                   setNewUser({...newUser, username: e.target.value})
                               }}/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control"
                               id="inputPassword"
                               placeholder="21gfds@f"
                                value={newUser.password}
                                onChange={(e)=>setNewUser({...newUser,password:e.target.value})}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Verify Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password"
                               className="form-control"
                               id="password"
                               placeholder="21gfds@f"
                                value={verify}
                                onChange={(e)=>setVerify(e.target.value)}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input type="email"
                               className="form-control"
                               id="email"
                               placeholder="21gfds@fsdds.com"
                                value={newUser.email}
                                onChange={(e)=>setNewUser({...newUser,email:e.target.value})}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label  className="col-sm-2 col-form-label">
                        First Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               id="firstname"
                               placeholder="Bill"
                               value={newUser.firstname}
                               onChange={(e)=>setNewUser({...newUser,firstname:e.target.value})}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label  className="col-sm-2 col-form-label">
                        Last Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               id="lastname"
                               placeholder="Gate"
                               value={newUser.lastname}
                               onChange={(e)=>setNewUser({...newUser,lastname:e.target.value})}/>
                    </div>
                </div>
                {
                    newUser.role.includes("creator")&&
                    <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">
                        Company
                    </label>
                    <div className="col-sm-10">
                        <input type="text"
                               className="form-control"
                               id="company"
                               placeholder="Gate"
                               value={newUser.company}
                               onChange={(e) => setNewUser({...newUser, company: e.target.value})}/>
                    </div>
                </div>
                }
                {
                    newUser.role.includes("admin")&&
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">
                            Passcode
                        </label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   id="passcode"
                                   placeholder="23121@rt"
                                   value={newUser.passcode}
                                   onChange={(e) => setNewUser({...newUser, passcode: e.target.value})}/>
                        </div>
                    </div>
                }
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">

                            <button className="btn btn-primary btn-block"
                                    onClick={()=>{

                                        if(!newUser.role[0]||!newUser.username||!newUser.password||!newUser.email||!newUser.firstname||!newUser.lastname){
                                            setError(true)
                                        } else if (newUser.password!==verify) {
                                            setPasswordError(true)
                                        }else
                                         {
                                            LoginService.userRegister(newUser)
                                                .then((message) => {
                                                    if(message.message.includes("Error")){
                                                        console.log("2q211")
                                                        if(message.message.includes("Username")){
                                                            setUsername(true)
                                                        }else {
                                                            setEmail(true)
                                                        }
                                                    }else{
                                                        LoginService.userLogin({username:newUser.username,password:newUser.password}).then(message=>{
                                                                setError(false)
                                                                console.log(message)
                                                                localStorage.setItem("username",message.username)
                                                                localStorage.setItem("token",message.accessToken)
                                                                localStorage.setItem("id",message.id)
                                                                localStorage.setItem("role",message.roles[0])
                                                                history.push('/home')
                                                            }
                                                        )

                                                    }
                                                })

                                        }
                                    }}>
                                Sign up
                            </button>

                        {JSON.stringify(message.message)}
                        <div className="row">
                            <div className="col-6">
                                <Link to="/login">
                                    login
                                </Link>
                            </div>
                            <div className="col-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {localStorage.getItem("username")&&
                <div>
                    <h1>Please sign out to register</h1>
                </div>
            }
    </div>
    )
}
export default Register