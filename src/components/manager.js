import React, {useEffect} from 'react'
import {Link, Route,BrowserRouter} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Search from "./search/search";
import {connect} from "react-redux";
import SearchTV from "./search/searchTV";
import MovieDetails from "./details/movieDetails";
import Main from "./main/main";
import TvDetails from "./details/tvDetails";
import Login from "./user/login";
import Register from "./register/register";
import Profile from "./user/profile";
import LoginService, {updateUser} from "../services/login-service";

const Manager =({loginUser,currentUser,signout,updateUser})=>{

        return(
            <div>
                {JSON.stringify("sds")}
                {JSON.stringify(currentUser)}

                <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid navbar-style">
                    <div className="container-fluid">

                        <div className="col-1">
                            <Link to={"/home"}>
                                <h2>Netfly</h2>
                            </Link>
                        </div>

                        <div className="col-1 ">
                            <DropdownButton variant="white" id="dropdown-basic-button" title="Movies">

                                <Dropdown.Item href="#/action-2">Now playing</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">popular</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item >
                                    <Link to="/search/movie">
                                        Search Movies
                                    </Link>
                                </Dropdown.Item>
                            </DropdownButton>


                        </div>
                        <div className="col-1 ">
                            <DropdownButton variant="white" id="dropdown-basic-button" title="TV shows">
                                <Dropdown.Item href="#/action-1">Now playing</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">popular</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className="col-1 ">
                            <DropdownButton variant="white" id="dropdown-basic-button" title="People">
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className="col-5 ">



                        </div>
                        <div className="col-1 ">

                            {
                                !currentUser[0].id&&
                                <Link to={"/login"}>
                                login
                                </Link>
                            }
                            {
                                currentUser[0].id&&
                                <Link to={"/profile"}>
                                    {/*{currentUser[0].username}*/}
                                    sadsds
                                </Link>
                            }


                        </div>
                        <div className="col-1 ">
                            {
                                !currentUser[0].id&&
                                <Link to={"/register"}>
                                sign up
                                </Link>
                            }
                            {
                               currentUser[0].id&&
                              <div onClick={()=> signout()}>
                                <Link to={"/main"}>
                                   sign out
                                </Link>
                              </div>
                            }
                        </div>
                        <div className="col-1 ">


                            <i className="fas fa-plus fa-2x"></i>
                        </div>

                    </div>
                </nav>
                <br/>
                <Route path={["/home"]}
                       exact={true}>
                    <Main/>
                </Route>

                <Route path={["/search","/search/:type","/search/:type/:title"]}
                       exact={true}>
                    <Search/>
                </Route>
                <Route path={["/details/movie/:title"]}
                       exact={true}>
                    <MovieDetails currentUser={currentUser}/>
                </Route>
                <Route path={["/details/tv/:title"]}
                       exact={true}>
                    <TvDetails/>
                </Route>
                <Route path={["/login"]}
                       exact={true}>
                    <Login loginUser={loginUser}
                           currentUser={currentUser}/>
                </Route>
                <Route path={["/register"]}
                       exact={true}>
                    <Register/>
                </Route>
                <Route path={["/profile"]}
                       exact={true}>
                    <Profile updateUser={updateUser}
                             currentUser={currentUser}

                    />
                </Route>



            </div>

        )


}
const stpm = (state) => ({
    currentUser: state.userReducer.currentUser
})
const dtpm=(dispatch)=>({
    loginUser:(user)=>{
        LoginService.userLogin(user).then(feedback=>dispatch({type:"LOGIN",user:feedback}))
    },
    signout:()=>{
       dispatch({type:"SIGNOUT"})
    },
    updateUser:(token,user)=>{
        LoginService.updateUser(token,user).then(feedback=>dispatch({type:"UPDATE",user:user}))
    }

})
export default connect(stpm,dtpm)(Manager)