import React,{useEffect,useState} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import TvService from "../../services/tv-service"

const SearchTV=()=>{
    const {title}=useParams()

    const [results,setResults]=useState([])
    const history = useHistory()
    useEffect(()=>{


        if(title){
           TvService.findTvByTitle(title)
               .then(results=>setResults(results.results))
        }



    },[title])
    return(
        <div>
            <h1>Search TV</h1>


            <ul className="list-group">
                {
                    results.length===0&&
                    <h3>There are no TV shows that matched your query.</h3>
                }
                {
                    results &&
                    results.map(tv=>
                        <li className="list-group-item" key={tv.id}>
                            <Link to={`/details/tv/${tv.id}`}>
                                {tv.name}
                            </Link>
                        </li>
                    )

                }
            </ul>

        </div>
    )
}
export default SearchTV