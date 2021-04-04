import React,{useEffect,useState} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import movieService from "../../services/movie-service"

const SearchMovies=()=>{
    const {title}=useParams()

    const [results,setResults]=useState([])

    const history = useHistory()
    useEffect(()=>{


        if(title){
           movieService.findMovieByTitle(title)
               .then(results=> setResults(results.results)
               )
        }


    },[title])
    return(
        <div>
            <h1>Search Movie</h1>

            <ul className="list-group">


                {
                    results.length===0&&
                    <h3>There are no movies that matched your query.</h3>
                }


                {
                    results &&
                    results.map(movie=>
                        <li className="list-group-item" key={movie.id}>
                            <Link to={`/details/movie/${movie.id}`}>
                                {movie.original_title}
                            </Link>
                        </li>
                    )

                }
            </ul>

        </div>
    )
}
export default SearchMovies