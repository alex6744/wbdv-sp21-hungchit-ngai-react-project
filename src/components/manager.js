import React from 'react'
import {Link, Route,BrowserRouter} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Search from "./search/search";

import SearchTV from "./search/searchTV";
import MovieDetails from "./details/movieDetails";
import Main from "./main/main";
import TvDetails from "./details/tvDetails";
import Login from "./user/login";
import Register from "./user/register";
import Profile from "./user/profile";
class Manager extends React.Component{
    state={

    }
    componentDidMount=()=>{

    }

    render() {
        return(
            <div>


                <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid navbar-style">
                    <div className="container-fluid">

                        <div className="col-1">
                            <Link to={"/main"}>
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
                            <Link to={"/login"}>
                                login
                            </Link>

                        </div>
                        <div className="col-1 ">
                            <Link to={"/register"}>
                                sign up
                            </Link>
                        </div>
                        <div className="col-1 ">


                            <i className="fas fa-plus fa-2x"></i>
                        </div>

                    </div>
                </nav>
                <br/>
                <Route path={["/main"]}
                       exact={true}>
                    <Main/>
                </Route>

                <Route path={["/search","/search/:type","/search/:type/:title"]}
                       exact={true}>
                    <Search/>
                </Route>
                <Route path={["/details/movie/:title"]}
                       exact={true}>
                    <MovieDetails/>
                </Route>
                <Route path={["/details/tv/:title"]}
                       exact={true}>
                    <TvDetails/>
                </Route>
                <Route path={["/login"]}
                       exact={true}>
                    <Login/>
                </Route>
                <Route path={["/register"]}
                       exact={true}>
                    <Register/>
                </Route>
                <Route path={["/profile"]}
                       exact={true}>
                    <Profile/>
                </Route>


            </div>

        )
    }

}
export default Manager