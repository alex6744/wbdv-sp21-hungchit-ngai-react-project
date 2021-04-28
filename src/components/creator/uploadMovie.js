import React, {useState} from "react";
import {useParams} from "react-router-dom";
import creatorService from "../../services/creator-service"
const UploadMovie=()=>{
    const [original_title,setOriginal_title]=useState("")
    const [release_date,setRelease_date]=useState("")
    const [original_language,setOriginal_language]=useState("")
    const [overview,setOverview]=useState("")
    const [message,setMessage]=useState("")
    const  {title}=useParams()
    return(
        <div>
            <h1>UploadMovie</h1>
            <div className="mb-3 row">
                <label htmlFor="title"
                       className="col-sm-2 col-form-label">
                    Title
                </label>
                <div className="col-sm-10">
                    <input type="text"
                           value={original_title}
                           className="form-control"
                           placeholder="Batman"
                           onChange={(e)=>{
                                setOriginal_title(e.target.value)
                           }}/>
                </div>
            </div>

            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">
                    Release date
                </label>
                <div className="col-sm-10">
                    <input type="text"
                           className="form-control"

                           placeholder="2020-4-7"
                           value={release_date}
                           onChange={(e)=>{setRelease_date(e.target.value)}}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">
                    Language
                </label>
                <div className="col-sm-10">
                    <input type="text"
                           className="form-control"

                           placeholder="EN"
                           value={original_language}
                           onChange={(e)=>{setOriginal_language(e.target.value)}}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label  className="col-sm-2 col-form-label">
                    Plot
                </label>
                <div className="col-sm-10">
                    <textarea type="text"
                           className="form-control"

                           value={overview}
                           onChange={(e)=>{setOverview(e.target.value)}}/>
                </div>
            </div>
           <button className="form-control btn btn-primary"
                   onClick={()=>{
                            creatorService.uploadMovie(localStorage.getItem("token"),
                                {original_title:original_title,release_date:release_date,original_language:original_language,overview:overview},localStorage.getItem("id"))
                                .then(m=>setMessage(m))
                   }}> Upload Movie</button>

            {
                message=="1"&&
                <div className="alert alert-success" role="alert">
                     Movie successfully uploaded
                </div>
            }
        </div>
    )

}
export default UploadMovie