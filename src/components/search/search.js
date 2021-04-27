import React, {useState} from "react";
import {Link, Route, useHistory, useParams} from "react-router-dom";
import SearchMovies from "./searchMovies";
import SearchTV from "./searchTV";
import "./search.css"
const Search=()=>{
    const {title,type}=useParams()
    const [searchTitle,setSearchTitle]=useState("")
    const history = useHistory()
    return(
        <div>
            <input  placeholder="search"
                    className="form-control"
                    onChange={(e)=>{
                            setSearchTitle(e.target.value)
                    }}/>
            <button className="form-control"
                    onClick={()=>{
                        console.log(type)
                        history.push(`/search/${type}/${searchTitle}`)
                    }}>
                Search
            </button>
            <br/>
            {JSON.stringify(type)}
            <div className="row">
                <div className="col-4">
                    <ul className="list-group">
                        <li className={`list-group-item  ${type==="movie"?"active":""}`}  >
                            <Link to={`/search/movie/${title}`} className="nav-link color-black" >
                                Movies
                            </Link>

                        </li>
                        <li className={`list-group-item ${type === "tv" ? "active" : ""}`}>
                            <Link to={`/search/tv/${title}`} className="nav-link color-black" >
                                TV Shows
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="col-8">
                    <Route exact={true}
                           path={["/search/movie","/search/movie/:title"]}>
                        <SearchMovies/>
                    </Route>
                    <Route exact={true}
                           path={["/search/tv","/search/tv/:title"]}>
                        <SearchTV/>
                    </Route>
                </div>
            </div>


        </div>
    )
}
export default Search