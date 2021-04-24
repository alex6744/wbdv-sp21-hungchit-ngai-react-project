import React, {useEffect,useState} from "react";
import {Link,useParams} from "react-router-dom";
import {connect} from 'react-redux'

import LoginService from "../../services/login-service"
const Register=()=>{
    const [newUser,setNewUser]=useState({username:"",password:"",email:"",role:[]})
    const [verify,setVerify]=useState("")
    useEffect(()=>{

    },[])
    return(
        <div className="container">
            <h1>
                Sign up
            </h1>
            <div onChange={(e)=>setNewUser({...newUser,role:[e.target.value]})}>
                <input type="radio" value="individual" name="type" /> individual <br/>
                <input type="radio" value="business" name="type" /> business    <br/>
                <input type="radio" value="creator" name="type" /> creator      <br/>
            </div>

            <br/>
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
            {JSON.stringify(newUser)}
            <button onClick={()=>console.log(newUser)} >
                Sign up
            </button>
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
                           placeholder="21gfds@f"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label">
                    email
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
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">

                        <button className="btn btn-primary btn-block"
                                onClick={()=>{
                                    LoginService.userRegister(newUser)
                                        .then((t)=>console.log(t))
                                }}>
                            Sign up
                        </button>


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
        </div>
    )
}
export default Register