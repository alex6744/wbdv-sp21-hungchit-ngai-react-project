import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import LoginService, {userLogin} from "../../services/login-service"

const Login=({loginUser,currentUser})=>{
    const [user,setUser]=useState({username:"",password:""})
    const [error,setError]=useState(false)
    const [to,setTo]=useState("/login")
    useEffect(()=>{



    },[])
    return(
        <div className="container-fluid">
            <h1>Login   </h1>
            <h4>{currentUser[0].error==="Unauthorized"&& "username or password is not correct , please try again"}</h4>

            <div className="mb-3 row">
                <label htmlFor="username"
                       className="col-sm-2 col-form-label">
                    Username
                </label>
                <div className="col-sm-10">
                    <input type="text"
                            value={user.username}
                           className="form-control"
                           id="username"
                           placeholder="alice"
                            onChange={(e)=>{
                                setUser({...user,username:e.target.value})
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
                           value={user.password}
                            onChange={(e)=>{
                                setUser({...user,password:e.target.value})
                            }}/>
                </div>
            </div>
            {JSON.stringify(user)}
            {JSON.stringify(currentUser)}
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <Link to={to}>
                        <button className="btn btn-primary btn-block"
                                onClick={()=>{
                                    loginUser(user)
                                }}>

                                Sign in

                        </button>
                    </Link>

                    <div className="row">
                        <div className="col-6">
                            <a href="#">
                                Forgot Password?
                            </a>
                        </div>
                        <div className="col-6">
                            <Link to="/register" className="float-right">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Login