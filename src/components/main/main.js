import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";

const Main=()=>{
    const history = useHistory()
    const [searchTitle,setSearchTitle]=useState("")
    return(
        <div>
            <div className="container-fluid">
                <h1> Welcome to Netfly</h1>
                <h3> Millions of movies, TV shows and people to discover. Explore now.</h3>

                <input  placeholder="Search for a Movie, TV show, or Person"
                        className="form-control"
                        onChange={event => {
                            setSearchTitle(event.target.value)
                        }}/>
                <button
                        onClick={()=> {
                                if(searchTitle){
                                    history.push(`/search/movie/${searchTitle}`)
                                }else {
                                    alert("please enter words")
                                }
                            }}
                        className="btn btn-primary btn-block">
                        Search
                </button>
            </div>
        </div>
    )


}
export default Main