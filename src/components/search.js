import React,{useEffect,useState} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import movieService from "../services/movie-service"

const Search=()=>{
    const {title}=useParams()
    const [searchTitle,setSearchTitle]=useState("")
    const [results,setResults]=useState([])
    const history = useHistory()
    useEffect(()=>{
        setSearchTitle(title)
        if(title){
           movieService.findMovieByTitle(title)
               .then(results=>setResults(results.results))
        }

    },[title])
    return(
        <div>
            <h1>Search</h1>
            <input onChange={event => {
                setSearchTitle(event.target.value)
            }}
                    className="form-control"
                    value={searchTitle}/>
            <button onClick={()=> {
                    history.push(`/search/${searchTitle}`)}}
                    className="btn btn-primary btn-block">
                Search
            </button>

            {/*{*/}
            {/*    <button onClick={()=> {*/}
            {/*        console.log(results)*/}
            {/*        results.map(m=>console.log(m))}}*/}
            {/*            className="btn btn-primary btn-block">*/}
            {/*        Search*/}
            {/*    </button>*/}
            {/*}*/}
            <ul className="list-group">
                {
                    results.map(movie=>
                        <li className="list-group-item" key={movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                {movie.original_title}
                            </Link>
                        </li>
                    )

                }
            </ul>
        </div>
    )
}
export default Search