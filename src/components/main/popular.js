import React,{useState,useEffect} from "react";
import  movieService from "../../services/movie-service";
import  tvService from "../../services/tv-service";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
const Popular=()=>{
    const [movies,setMovies]=useState([])
    const [shows,setShows]=useState([])
    const [mode,setMode]=useState("movie")
    useEffect(()=>{
        movieService.findPopular().then(movies=>setMovies(movies.results))
        tvService.findPopular().then(tv=>setShows(tv.results))
    },[])
    const URL="https://image.tmdb.org/t/p/w500/"
    return(
        <div>
            <h1>Popular</h1>
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
            {
                mode==="movie"&&
                <Table responsive>
                    <tbody>

                    <tr>
                        {movies &&
                        movies.map(m =>
                            <td>
                                <img width="100" heigh="100" src={URL + m.poster_path}/>
                                <br/>
                                <Link to={`/details/movie/${m.id}`}>
                                    {m.title}
                                </Link>
                                <br/>
                                <br/>
                                vote average:
                                <br/>
                                {m.vote_average}
                            </td>
                        )
                        }
                    </tr>
                    </tbody>
                </Table>
            }
            {/*{*/}
            {/*    JSON.stringify(movies)*/}
            {/*}*/}
            {
                mode==="tv"&&
                <Table responsive>
                    <tbody>

                    <tr>
                        {shows &&
                        shows.map(s =>
                            <td>
                                <img width="100" heigh="100" src={URL + s.poster_path}/>
                                <br/>
                                <Link to={`/details/tv/${s.id}`}>
                                    {s.name}
                                </Link>
                                <br/>
                                <br/>
                                vote average:
                                <br/>
                                {s.vote_average}
                            </td>
                        )
                        }
                    </tr>
                    </tbody>
                </Table>
            }
        </div>
    )
}
export default Popular