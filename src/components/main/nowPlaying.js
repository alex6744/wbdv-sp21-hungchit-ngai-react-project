import React, {useEffect,useState}from "react";
import  movieService from "../../services/movie-service";
import  tvService from "../../services/tv-service";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const NowPlaying=()=>{
    const [mode,setMode]=useState("movie")
    const [movies,setMovies]=useState([])
    const [shows,setShows]=useState([])
    useEffect(()=>{
        movieService.findNowPlaying()
            .then(movies=>setMovies(movies.results))
        tvService.findOnAir()
            .then(shows=>setShows(shows.results))
    },[])
    const URL="https://image.tmdb.org/t/p/w500"
    return(
        <div>
            <h1>Now Playing</h1>
            <ul className="list-group list-group-horizontal">
                <li className={`list-group-item ${mode==='movie'?'active':''}`}
                    onClick={()=>setMode("movie")}>
                    Movie
                </li>
                <li className={`list-group-item ${mode==='tv'?'active':''}`}
                    onClick={()=>setMode("tv")}>
                    TV
                </li>

            </ul>


            <br/>
            {
                mode==="tv"&&
                <div className="row">

                    {shows &&
                    shows.slice(0,4).map(s =>
                        <div className="col-2">
                            <div className="card">
                                <img src={URL + s.poster_path}/>
                                <div className="card-body">
                                    <Link to={`/details/tv/${s.id}`}>
                                        <h5 className="card-title">{s.name}</h5>
                                    </Link>

                                    <br/>
                                    {s.first_air_date}
                                </div>
                            </div>
                            <br/>
                        </div>
                    )
                    }
                    <div className="col-2">
                        <div className="card">
                            <div className="card-body">
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <Link to={`/nowplaying/tv`}>
                                    <h5 className="card-title">View More</h5>
                                </Link>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                        <br/>
                    </div>


                </div>
            }

            {
                mode==="movie"&&
                <div className="row">

                        {
                            movies &&
                        movies.slice(0,4).map(m =>
                            <div className="col-2">
                                <div className="card">
                                    <img src={URL + m.poster_path}/>
                                    <div className="card-body">
                                        <Link to={`/details/movie/${m.id}`}>
                                            <h5 className="card-title">{m.title}</h5>
                                        </Link>
                                        <br/>
                                        {m.release_date}
                                    </div>

                                </div>
                            </div>
                        )
                        }
                    <div className="col-2">
                        <div className="card">
                            <div className="card-body">
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <Link to={`/nowplaying/movie`}>
                                    <h5 className="card-title">View More</h5>
                                </Link>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            }

        </div>
    )
}
export default NowPlaying