import React ,{useState,useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import movieService from '../../services/movie-service'
import ratingService from '../../services/rating-service'
import {Table} from "react-bootstrap";
const MovieDetails=({currentUser})=>{
    const {title}=useParams()
    const [movie,setMovie]=useState({})
    const [casts,setCasts]=useState([])
    const [comment,setComment]=useState("")
    const [ratings,setRating]=useState([])

    useEffect(()=>{
        movieService.findMovieById(title)
            .then(movie=>setMovie(movie))
        movieService.findCreditById(title)
            .then(credits=>setCasts(credits.cast))
        ratingService.findRatingById(title).then(ratings=>setRating(ratings))


    },[title])
    const IMAGE_URL="https://image.tmdb.org/t/p/w500/"+movie.poster_path
    const URL="https://image.tmdb.org/t/p/w500/"
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
            {/*{*/}
            {/*    JSON.stringify(casts)*/}
            {/*}*/}


               <div className="row">


                           { casts&&
                               casts.slice(0,4).map(actor=>
                                   <div className="col-2">
                                       <div className="card">
                                           <img width="100" heigh="100" src={URL+actor.profile_path}/>
                                           <div className="card-body">
                                               <Link to={`/details/actor/${actor.id}`}>
                                                    <h5 className="card-title">{actor.name}</h5>
                                               </Link>
                                           </div>
                                       </div>
                                   </div>
                               )

                           }
                           <div className="col-2">
                               <div className="card">
                                   <br/>
                                   <br/>
                                   <br/>

                                   <div className="card-body">
                                       <Link to={`/casts/movie/${title}`}>
                                           <h3 className="card-title">View More</h3>
                                       </Link>
                                   </div>
                                   <br/>
                                   <br/>
                                   <br/>


                               </div>
                           </div>

               </div>
            <br/>
            <br/>
            <h1>Rate this Movie</h1>
            <br/>
            <textarea   value={comment}
                        onChange={(e)=>setComment(e.target.value)}></textarea>

            <button onClick={()=>{
                ratingService.createRating({id:currentUser[0].id,
                                                comment:comment,movieId: title},currentUser[0].accessToken
                )
                console.log(ratings)
                setRating([...ratings,{id:currentUser[0].id,
                    comment:comment,movieId: title}])
            }}>submit</button>

            <Table responsive >
                <tbody>
                    <tr>
                        {
                        ratings&&
                            ratings.map(rating=>
                            <td>
                                user: {rating.id}
                                <br/>
                                commnet: {rating.comment}
                            </td>
                            )
                        }
                    </tr>
                </tbody>
            </Table>

            adsadsasdadsasdas
        </div>

    )
}
export default MovieDetails