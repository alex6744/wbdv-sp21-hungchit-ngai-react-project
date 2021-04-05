import React, {useEffect,useState}from "react";
import  movieService from "../../services/movie-service";
import {Table} from "react-bootstrap";

const NowPlaying=()=>{

    const [movies,SetMovies]=useState([])
    useEffect(()=>{
        movieService.findNowPlaying()
            .then(movies=>SetMovies(movies.results))
    },[])
    const URL="https://image.tmdb.org/t/p/w500/"
    return(
        <div>
            <h1>Now Playing</h1>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item active">Movie</li>
                <li className="list-group-item">TV</li>

            </ul>
            <br/>

            <Table responsive >
                <tbody>

                    <tr>
                        { movies&&
                        movies.map(m=>
                            <td>
                                <img width="100" heigh="100" src={URL+m.poster_path}/>
                                <br/>
                                {
                                    m.title
                                }

                            </td>
                        )
                        }
                    </tr>
                </tbody>
            </Table>
            {
                // JSON.stringify(movies)
            }
        </div>
    )
}
export default NowPlaying