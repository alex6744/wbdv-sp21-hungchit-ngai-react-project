import React, {useEffect, useState} from "react";
import tvService from "../../services/tv-service";
import {Link} from "react-router-dom";

const TVPopular=()=>{
    const [tvs,setTvs]=useState([])
    useEffect(()=>{
        tvService.findPopular().then(tv=>setTvs(tv.results))

    },[])
    const URL="https://image.tmdb.org/t/p/w500/"
    return(
        <div>
            <h1>Popular on TV shows</h1>
            <br/>
            <div className="row">
                {
                    tvs.map((tv=>
                            <div className="col-2">
                                <div className="card">
                                    <img src={URL + tv.poster_path}/>
                                    <div className="card-body">
                                        <Link to={`/details/tv/${tv.id}`}>
                                            <h5 className="card-title">{tv.name}</h5>
                                        </Link>
                                        <br/>
                                        vote average:
                                        <br/>
                                        {tv.vote_average}
                                    </div>
                                </div>
                                <br/>
                            </div>
                    ))
                }
            </div>
        </div>
    )
}
export default TVPopular