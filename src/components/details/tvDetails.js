import React ,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import tvService from '../../services/tv-service'
const TvDetails=()=>{
    const [tv,setTv]=useState({})
    const [casts,setCasts]=useState([])
    const {title}=useParams()
    useEffect(()=>{
        tvService.findTvById(title)
            .then(tv=>setTv(tv))
        tvService.findCreditById(title).then(casts=>setCasts(casts.cast))

    },[title])
    const IMAGE_URL="https://image.tmdb.org/t/p/w500/"+tv.poster_path
    return(
        <div>
            <h1>details</h1>
            <h1>{tv.name}</h1>
            <img src={IMAGE_URL}/>
            <h2>Plot</h2>
            <p>
                {tv.overview}
            </p>
            <h2>Cast</h2>
            <ul className="list-group">
                {
                    casts&&
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
export default TvDetails