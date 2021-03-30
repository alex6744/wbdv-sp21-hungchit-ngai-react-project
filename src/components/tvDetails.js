import React ,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import tvService from '../services/tv-service'
const TvDetails=()=>{
    const [tv,setTv]=useState({})
    const [casts,setCasts]=useState([])
    const {tvId}=useParams()
    useEffect(()=>{
        tvService.findTvById(tvId)
            .then(tv=>setTv(tv))


    },[tvId])
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

        </div>
    )
}
export default TvDetails