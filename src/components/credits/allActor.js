import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import movieService from '../../services/movie-service'
import tvService from '../../services/tv-service'
const AllActor=()=>{
    const  {title,type}=useParams()
    const [items,setItems]=useState([])
    const [name,setName]=useState("")
    useEffect(()=>{
        if(type=="movie"){
            movieService.findCreditById(title).then(items=>setItems(items.cast))
            movieService.findMovieById(title).then(m=>setName(m.title))
        }else {
            tvService.findCreditById(title).then(items=>setItems(items.cast))
            tvService.findTvById(title).then(tv=>setName(tv.name))
        }
    },[])
    const URL="https://image.tmdb.org/t/p/w500/"
    return(
        <div>
            <h1>All Casts and Crews for {name} </h1>
            <br/>
            <div className="row">
                {
                    items&&
                        items.map(item=>
                            <div className="col-2">
                                <div className="card">
                                    <img src={URL+item.profile_path}/>
                                    <div className="card-body">
                                        <Link to={`/details/actor/${item.id}`}>
                                            <h5 className="card-title">{item.name}</h5>
                                        </Link>


                                    </div>

                                </div>
                                <br/>
                            </div>
                        )
                }
            </div>

        </div>
    )
}
export default AllActor