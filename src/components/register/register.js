import React, {useEffect,useState} from "react";
import {Link,useParams} from "react-router-dom";
import {connect} from 'react-redux'
import individualService from "../../services/individual-service"
const Register=()=>{
    const [newUser,setNewUser]=useState({})
    const [userType,setUserType]=useState("")
    useEffect(()=>{

    },[])
    return(
        <div className="container">
            <h1>
                Sign up
            </h1>
            <div onChange={(e)=>setUserType(e.target.value)}>
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

                           className="form-control"
                           id="username"
                           placeholder="alice"
                           onChange={(e)=>{
                               setNewUser({...newUser,userName:e.target.value})
                           }}/>
                </div>
            </div>
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
                           placeholder="21gfds@f"/>
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
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <Link to="/profile">
                        <button className="btn btn-primary btn-block">
                            Sign up
                        </button>

                    </Link>
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