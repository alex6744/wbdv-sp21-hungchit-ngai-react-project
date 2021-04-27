import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import ActorService from "../../services/actor-service"
const ActorDetails=()=>{
    const {title}=useParams()
    const [actors,setActors]=useState([])
    const [movies,setMovie]=useState([])
    const [tv,setTv]=useState([])
    const [mode,setMode]=useState("movie")
    useEffect(()=>{
        ActorService.findPersonById(title).then(actor=>setActors(actor))
        ActorService.getMovieCredit(title).then(m=>setMovie(m.cast))
        ActorService.getTvCredit(title).then(tv=>setTv(tv.cast))
    },[title])
    const URL="https://image.tmdb.org/t/p/w500/"
    return(
        <div>
            <h1>Person details</h1>
            <h1>{actors.name}</h1>
            <img src={URL+actors.profile_path}/>
            <h3>Biography</h3>
            <p>{actors.biography}</p>

            <h3>Movie/TV credits</h3>
            <div className="container-fluid">
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
                    <div className="row">
                        {
                            movies&&
                                movies.map(m=>
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
                                        <br/>
                                    </div>
                                )
                        }
                    </div>
                }
                {
                    mode==="tv"&&
                    <div className="row">
                        {
                            tv&&
                            tv.map(m=>
                                <div className="col-2">
                                    <div className="card">
                                        <img src={URL + m.poster_path}/>
                                        <div className="card-body">
                                            <Link to={`/details/tv/${m.id}`}>
                                                <h5 className="card-title">{m.name}</h5>
                                            </Link>
                                            <br/>
                                            {m.first_air_date}
                                        </div>

                                    </div>
                                    <br/>
                                </div>
                            )
                        }
                    </div>
                }

            </div>

        </div>
    )
}
export default ActorDetails