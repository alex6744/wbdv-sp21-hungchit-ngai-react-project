import React ,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import movieService from '../services/movie-service'
const MovieDetails=()=>{
    const [movie,setMovie]=useState({})
    const [casts,setCasts]=useState([])
    const {movieId}=useParams()
    useEffect(()=>{
        movieService.findMovieById(movieId)
            .then(movie=>setMovie(movie))
        movieService.findCreditById(movieId)
            .then(credits=>setCasts(credits.cast))

    },[movieId])
    const IMAGE_URL="https://image.tmdb.org/t/p/w500/"+movie.poster_path
    return(
        <div>
            <h1>details</h1>
            <h1>{movie.original_title}</h1>
            <img src={IMAGE_URL}/>
            <h3>release date: {movie.release_date}</h3>
            <h3>Original Language: {movie.original_language}</h3>
            <h2>Plot</h2>
            <p>
                {movie.overview}
            </p>
            <h2>Cast</h2>
            <ul className="list-group">
                {
                    casts.map(actor=>
                    <li className="list-group-item">
                        {actor.name}
                    </li>
                    )
                }
            </ul>
        </div>
    )
}
export default MovieDetails