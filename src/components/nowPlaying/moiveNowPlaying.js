import React, {useEffect, useState} from "react";
import movieService from "../../services/movie-service";
import {Link} from "react-router-dom";

const MovieNowPlaying=()=>{
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        movieService.findNowPlaying().then(movies=>setMovies(movies.results))

    },[])
    const URL="https://image.tmdb.org/t/p/w500/"
    return(
        <div>
            <h1>Now Playing on Movie</h1>
            <br/>
            <div className="row">
                {
                    movies.map(movie=>
                        <div className="col-2">
                            <div className="card">
                                <img src={URL + movie.poster_path}/>
                                <div className="card-body">
                                    <Link to={`/details/movie/${movie.id}`}>
                                        <h5 className="card-title">{movie.title}</h5>
                                    </Link>
                                    Release date:
                                    <br/>
                                    {movie.release_date}
                                </div>
                            </div>
                            <br/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default MovieNowPlaying