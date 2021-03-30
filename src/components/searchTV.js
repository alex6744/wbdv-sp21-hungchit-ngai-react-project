import React,{useEffect,useState} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import TvService from "../services/tv-service"

const SearchTV=()=>{
    const {title}=useParams()
    const [searchTitle,setSearchTitle]=useState("")
    const [results,setResults]=useState([])
    const history = useHistory()
    useEffect(()=>{
        setSearchTitle(title)

        if(title){
           TvService.findTvByTitle(title)
               .then(results=>setResults(results.results))
        }



    },[title])
    return(
        <div>
            <h1>Search TV</h1>
            <input onChange={event => {
                setSearchTitle(event.target.value)
            }}
                    className="form-control"
                    value={searchTitle}/>
            <button onClick={()=> {
                    history.push(`/search/tv/${searchTitle}`)}}
                    className="btn btn-primary btn-block">
                Search
            </button>


            <ul className="list-group">
                {
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