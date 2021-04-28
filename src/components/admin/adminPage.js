import React, {useEffect, useState} from "react";
import adminService from "../../services/admin-service"
import ratingService from "../../services/rating-service";
import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";
const AdminPage=()=>{
    const [users,setUsers]=useState()
    useEffect(()=>{
        adminService.findAllUSer(localStorage.getItem("token"))
            .then(u=>setUsers(u))
    },[])
    return(
        <div>
            <h1>All User</h1>
            <div className="row">
                {
                    users&&
                    users.map(user=>
                        <div className="col-2">

                            <div className="card">
                                <Link to={`/profile/${user.id}`}>
                                    <h3>User: {user.username}</h3>
                                </Link>



                            </div>

                        </div>
                    )

                }

            </div>

        </div>
    )
}
export default AdminPage