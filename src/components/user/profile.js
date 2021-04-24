import React,{useState} from "react";
import LoginService, {updateUser} from "../../services/login-service";
const Profile=({updateUser,currentUser})=>{

    const [email,setEmail]=useState(currentUser[0].email)

    return(
        <div className="container">
            <h1>
                Profile
            </h1>
            {JSON.stringify()}
            <div className="alert alert-success" role="alert">
                Profile successfully saved
            </div>

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
                           value={currentUser[0].username}/>
                </div>
            </div>
            {/*<div className="mb-3 row">*/}
            {/*    <label htmlFor="phone"*/}
            {/*           className="col-sm-2 col-form-label">*/}
            {/*        Phone*/}
            {/*    </label>*/}
            {/*    <div className="col-sm-10">*/}
            {/*        <input type="tel"*/}
            {/*               className="form-control"*/}
            {/*               id="phone"*/}
            {/*               placeholder="555-122-4567"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
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
            {JSON.stringify(currentUser)}
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">

                </label>
                <div className="col-sm-10">
                    <button className="btn btn-success btn-block"
                            onClick={()=>
                              updateUser(currentUser[0].accessToken,{id:currentUser[0].id,email:email})
                            }>
                        Update
                    </button>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">

                </label>
                <div className="col-sm-10">
                    <a className="btn btn-danger btn-block"
                       href="../index.html"
                       role="button">
                        Logout
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Profile