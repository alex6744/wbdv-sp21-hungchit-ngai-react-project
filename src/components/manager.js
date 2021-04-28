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
import UploadMovie from "./creator/uploadMovie";
import ProfileUser from "./user/profileUser";
import AdminPage from "./admin/adminPage";
import Privacy from "./privacy";

const Manager =({history})=>{

    useEffect(()=>{

    },[])

        return(
            <div>

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
                                <Dropdown.Item >
                                    <Link to={"/search/person"}>
                                        Search Actors
                                    </Link>
                                </Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className="col-4 ">

                            <Link to="/privacy">
                                privacy policy
                            </Link>

                        </div>
                        <div className="col-2 ">

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

                            {
                                localStorage.getItem("role")&&localStorage.getItem("role")=="ROLE_CREATOR"&&
                                <i onClick={()=>{
                                        history.push(`/creator/upload/${localStorage.getItem("id")}`)
                                }
                                } className="fas fa-plus fa-2x"></i>
                            }
                            {
                                localStorage.getItem("role")&&localStorage.getItem("role")=="ROLE_USER"&&
                                <i className="fas fa-cart-plus fa-2x"></i>
                            }

                            {
                                localStorage.getItem("role")&&localStorage.getItem("role")=="ROLE_ADMIN"&&
                                <i className="fas fa-users fa-2x"
                                    onClick={() => {
                                        history.push(`/admin`)
                                    }
                                    }></i>
                            }
                        </div>

                    </div>
                </nav>
                <br/>
                <Route path={["/home"]}
                       exact={true}>
                    <Main/>
                </Route>
                <Route path={["/privacy"]}
                       exact={true}>
                    <Privacy/>
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
                    <MovieDetails history={history} />
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
                <Route path={["/profile/:type"]}
                       exact={true}>
                    <ProfileUser/>
                </Route>
                <Route path={["/creator/upload/:title"]}
                       exact={true}>
                    <UploadMovie/>
                </Route>
                <Route path={["/admin"]}
                       exact={true}>
                    <AdminPage/>
                </Route>



            </div>

        )


}

export default Manager