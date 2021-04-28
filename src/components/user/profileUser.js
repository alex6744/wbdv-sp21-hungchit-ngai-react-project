import React,{useState,useEffect} from "react";
import LoginService, {updateUser} from "../../services/login-service";
import {useParams} from "react-router-dom";
const ProfileUser=({})=>{
    const {type}=useParams()
    const [email,setEmail]=useState("")
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [error,setError]=useState("")
    const [id,setId]=useState()
    const [message,setMessage]=useState("")
    const [username,setUsername]=useState("")
    useEffect(()=>{
        LoginService.profile(type,localStorage.getItem("token"))
            .then(p=>{
                setId(p.id)
                setEmail(p.email)
                setFirstname(p.firstName)
                setLastname(p.lastName)
                setUsername(p.username)
            })
    },[])
    return(
        <div>
            {
                localStorage.getItem("role")=="ROLE_ADMIN"&&<div className="container">
                    <h1>
                        Profile
                    </h1>
                    {
                        message=="1"&&
                        <div className="alert alert-success" role="alert">
                            Profile successfully saved
                        </div>
                    }
                    {
                        message=="0"&&
                        <div className="alert alert-danger" role="alert">
                            Email is already taken
                        </div>
                    }

                    <div className="mb-3 row">
                        <label htmlFor="username"
                               className="col-sm-2 col-form-label">
                            Username
                        </label>
                        <div className="col-sm-10">
                            <input type="text"
                                   readOnly
                                   className="form-control"
                                   id="username"
                                   value={username}/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="email"
                               className="col-sm-2 col-form-label">
                            Email
                        </label>
                        <div className="col-sm-10">
                            <input type="email"
                                   className="form-control"
                                   title="Please enter a valid email"
                                   value={email}
                                   id="email"
                                   onChange={(e)=>
                                       setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label
                            className="col-sm-2 col-form-label">
                            FirstName
                        </label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   value={firstname}
                                   id="firstname"
                                   onChange={(e)=>
                                       setFirstname(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label
                            className="col-sm-2 col-form-label">
                            LastName
                        </label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control"
                                   value={lastname}
                                   id="lastname"
                                   onChange={(e)=>
                                       setLastname(e.target.value)}
                            />
                        </div>
                    </div>
                    {/*<div className="mb-3 row">*/}
                    {/*    <label htmlFor="role"*/}
                    {/*           className="col-sm-2 col-form-label">*/}
                    {/*        Role*/}
                    {/*    </label>*/}
                    {/*    <div className="col-sm-10">*/}
                    {/*        <select id="role" className="form-control">*/}
                    {/*            <option>Faculty</option>*/}
                    {/*            <option>Student</option>*/}
                    {/*            <option>Admin</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="mb-3 row">*/}
                    {/*    <label htmlFor="dob"*/}
                    {/*           className="col-sm-2 col-form-label">*/}
                    {/*        DOB*/}
                    {/*    </label>*/}
                    {/*    <div className="col-sm-10">*/}
                    {/*        <input type="date"*/}
                    {/*               className="form-control"*/}
                    {/*               title="Please enter your DOB"*/}
                    {/*               value="mm/dd/yyyy"*/}
                    {/*               id="dob"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">

                        </label>
                        <div className="col-sm-10">
                            <button className="btn btn-success btn-block"
                                    onClick={()=> {
                                        if (email!==localStorage.getItem("email")){

                                            updateUser({id: id, email: email, firstName: firstname, lastName: lastname}
                                                , localStorage.getItem("token")).then(m => {
                                                if(m=="1"){

                                                    localStorage.setItem("email",email)
                                                }
                                                setMessage(m)
                                            })
                                        }else {
                                            updateUser({id: id, firstName: firstname, lastName: lastname}
                                                , localStorage.getItem("token")).then(m => setMessage(m))
                                        }
                                    } }>
                                Update
                            </button>
                        </div>
                    </div>


                </div>
            }
            {
                !localStorage.getItem("role")=="ROLE_ADMIN"&&
                <h1>Please login as admin to edit  profile </h1>
            }
        </div>
    )
}
export default ProfileUser