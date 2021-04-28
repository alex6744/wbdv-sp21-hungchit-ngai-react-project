import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import actorService from "../../services/actor-service";


const SearchActor=()=>{
    const {title}=useParams()

    const [results,setResults]=useState([])
    useEffect(()=>{


        if(title){
            actorService.findPersonByTitle(title).then(results=>setResults(results.results))
        }


    },[title])
    return(
        <div>
            <h1>Search Actor</h1>

            <ul className="list-group">


                {
                    results.length===0&&
                    <h3>There are no people that matched your query.</h3>
                }


                {
                    results &&
                    results.map(actor=>
                        <li className="list-group-item" key={actor.id}>
                            <Link to={`/details/actor/${actor.id}`}>
                                {actor.name}
                            </Link>
                        </li>
                    )

                }
            </ul>
        </div>
    )
}
export default SearchActor