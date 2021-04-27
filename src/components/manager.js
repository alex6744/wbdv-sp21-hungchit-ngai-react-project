import React, {useEffect, useState} from 'react'
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
import MovieNowPlaying from "./nowPlaying/moiveNowPlaying";
import MoviePopular from "./popular/moviePopular";
import TVPopular from "./popular/TVPopular";
import TVNowPlaying from "./nowPlaying/TVNowPlaying";
import ActorDetails from "./details/actorDetails";
import AllActor from "./credits/allActor";

const Manager =({history})=>{

    useEffect(()=>{

    },[])

        return(
            <div>
                <button onClick={()=>{
                    LoginService.currentUser().then(user=>console.log(user))
                }}>sds</button>
                <button onClick={()=>{
                    LoginService.profile().then(u=>console.log(u))
                }}>sds</button>
                {JSON.stringify("sds")}

                {localStorage.getItem("username")}
                {localStorage.getItem("token")}
                {localStorage.getItem("roles")}
                <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid navbar-style">
                    <div className="container-fluid">

                        <div className="col-1">
                            <Link to={"/home"}>
                                <h2>Netfly</h2>
                            </Link>
                        </div>

                        <div className="col-1 ">
                            <DropdownButton variant="white" id="dropdown-basic-button" title="Movies">

                                <Dropdown.Item >
                                    <Link to={"/nowplaying/movie"}>
                                        Now playing
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item >
                                    <Link to={"/popular/movie"}>
                                        Popular
                                    </Link>

                                </Dropdown.Item>
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
                                <Dropdown.Item >
                                    <Link to={"/nowplaying/tv"}>
                                        Now playing
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    <Link to={"/popular/tv"}>
                                        Popular
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item >
                                    <Link to="/search/tv">
                                        Search TV shows
                                    </Link>
                                </Dropdown.Item>
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
                                !localStorage.getItem("username")&&
                                <Link to={"/login"}>
                                login
                                </Link>
                            }
                            {
                                localStorage.getItem("username")&&
                                <Link to={"/profile"}>

                                    {localStorage.getItem("username")}
                                </Link>
                            }


                        </div>
                        <div className="col-1 ">
                            {
                                !localStorage.getItem("username")&&
                                <Link to={"/register"}>
                                sign up
                                </Link>
                            }
                            {
                                localStorage.getItem("username")&&
                              <div onClick={()=> localStorage.clear()}>
                                <a href={"/home"}>
                                   sign out
                                </a>
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
                <Route path={["/popular/movie"]}
                       exact={true}>
                    <MoviePopular/>
                </Route>
                <Route path={["/casts/:type/:title"]}
                       exact={true}>
                    <AllActor/>
                </Route>
                <Route path={["/popular/tv"]}
                       exact={true}>
                    <TVPopular/>
                </Route>
                <Route path={["/nowplaying/tv"]}
                       exact={true}>
                    <TVNowPlaying/>
                </Route>
                <Route path={["/nowplaying/movie"]}
                       exact={true}>
                    <MovieNowPlaying/>
                </Route>
                <Route path={["/search","/search/:type","/search/:type/:title"]}
                       exact={true}>
                    <Search/>
                </Route>
                <Route path={["/details/movie/:title"]}
                       exact={true}>
                    <MovieDetails />
                </Route>
                <Route path={["/details/tv/:title"]}
                       exact={true}>
                    <TvDetails/>
                </Route>
                <Route path={["/details/actor/:title"]}
                       exact={true}>
                    <ActorDetails/>
                </Route>
                <Route path={["/login"]}
                       exact={true}>
                    <Login  history={history}/>
                </Route>
                <Route path={["/register"]}
                       exact={true}>
                    <Register history={history}/>
                </Route>
                <Route path={["/profile"]}
                       exact={true}>
                    <Profile/>
                </Route>



            </div>

        )


}

export default Manager