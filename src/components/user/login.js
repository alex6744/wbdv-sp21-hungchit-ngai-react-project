import React from "react";
import {Link} from "react-router-dom";


const Login=()=>{
    return(
        <div className="container-fluid">
            <h1>Login</h1>
            <div className="mb-3 row">
                <label htmlFor="username"
                       className="col-sm-2 col-form-label">
                    Username
                </label>
                <div className="col-sm-10">
                    <input type="text"

                           className="form-control"
                           id="username"
                           placeholder="alice"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                    Password
                </label>
                <div className="col-sm-10">
                    <input type="password"
                           className="form-control"
                           id="inputPassword"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">
                    <Link to="/profile">
                        <button className="btn btn-primary btn-block">
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