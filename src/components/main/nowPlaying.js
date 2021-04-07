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
                <Table responsive>
                    <tbody>
                        <tr>
                            {

                                shows.map(show =>

                                <td>
                                    <img width="100" heigh="100" src={URL + show.poster_path}/>
                                    <br/>
                                    <Link to={`/details/tv/${show.id}`}>
                                        {show.name}
                                    </Link>
                                    <br/>
                                    {show.first_air_date}
                                </td>
                                )
                            }
                        </tr>
                    </tbody>

                </Table>
            }
            {/*{*/}
            {/*    JSON.stringify(shows)*/}
            {/*}*/}
            {
                mode==="movie"&&
                <Table responsive>
                    <tbody>

                    <tr>
                        {
                            movies &&
                        movies.map(m =>
                            <td>
                                <img width="100" heigh="100" src={URL + m.poster_path}/>
                                <br/>
                                <Link to={`/details/movie/${m.id}`}>
                                    {m.title}
                                </Link>
                                <br/>

                                {m.release_date}
                            </td>
                        )
                        }
                    </tr>
                    </tbody>
                </Table>
            }
            {/*{*/}
            {/*     JSON.stringify(movies)*/}
            {/*}*/}
        </div>
    )
}
export default NowPlaying