import React ,{useState,useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import tvService from '../../services/tv-service'
import ratingService from "../../services/rating-service";
const TvDetails=()=>{
    const [tv,setTv]=useState({})
    const [casts,setCasts]=useState([])
    const {title}=useParams()
    const [comment, setComment] = useState("")
    const [ratings, setRating] = useState([])
    const [score, setScore] = useState(0)
    useEffect(()=>{
        tvService.findTvById(title)
            .then(tv=>setTv(tv))
        tvService.findCreditById(title).then(casts=>setCasts(casts.cast))
        ratingService.findRatingByTvId(title).then(ratings => setRating(ratings))

    },[title])
    const IMAGE_URL="https://image.tmdb.org/t/p/w500/"+tv.poster_path
    const URL="https://image.tmdb.org/t/p/w500/"
    return(
        <div>
            <h1>details</h1>
            <h1>{tv.name}</h1>
            <img src={IMAGE_URL}/>
            <h3>First On Air Date:</h3>{tv.first_air_date}
            <h2>Plot</h2>
            <p>
                {tv.overview}
            </p>

            <h2>Cast</h2>
            <div className="row">
                {
                    casts&&
                    casts.slice(0,4).map(actor=>
                        <div className="col-2">
                            <div className="card">
                                <img  src={URL+actor.profile_path}/>
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
                            <Link to={`/casts/tv/${title}`}>
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
            <div onChange={(e) => setScore(e.target.value)}>
                <input type="radio" value="1" name="type"/> 1 star
                <input type="radio" value="2" name="type"/> 2 star
                <input type="radio" value="3" name="type"/> 3 star
                <input type="radio" value="4" name="type"/> 4 star
                <input type="radio" value="5" name="type"/> 5 star
            </div>
            <textarea className="form-control"
                      placeholder="leave comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}></textarea>
            <br/>

            <button className="btn btn-primary"
                    onClick={() => {
                        if(localStorage.getItem("username")) {
                            ratingService.createTvRating(localStorage.getItem("id"), title, {
                                comment: comment,
                                rate: score
                            }, localStorage.getItem("token"))
                            setComment("")
                            window.location.reload();
                        }else {
                            alert("You must login to leave comment")
                        }
                    }}>submit
            </button>
            <br/>

            <h1> User comment</h1>
            <div className="row">
                {
                    ratings&&
                    ratings.map(rate=>
                        <div className="col-2">
                            <div className="card">

                                <h3>User: {rate.username}</h3>
                                <h4>Score: {rate.rate}</h4>
                                <h5>Comment:</h5>
                                <div className="card-body">

                                    <p>{rate.comment}</p>
                                </div>
                                {   rate.username==localStorage.getItem("username")&&
                                <i onClick={()=>{
                                    ratingService.deleteTvRating(rate.id,localStorage.getItem("token"))
                                    window.location.reload()
                                }
                                } className="fas fa-times fa-2x float-right"></i>
                                }
                            </div>

                        </div>
                    )

                }

            </div>
        </div>
    )
}
export default TvDetails