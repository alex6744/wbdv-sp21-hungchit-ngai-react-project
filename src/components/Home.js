import React from 'react'
import {Link} from "react-router-dom";

const Home=()=>{

    return(
        <div>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="/search/movie">
                        Search movie
                    </Link>
                </li>
                <li>
                    <Link to="/search/tv">
                        Search TV
                    </Link>
                </li>
                <li>
                    <Link to="/manager">
                        manager
                    </Link>
                </li>
            </ul>


        </div>
    )
}
export default Home