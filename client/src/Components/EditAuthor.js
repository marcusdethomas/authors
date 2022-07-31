import React, {useEffect, useState } from 'react';
import { Link,useNavigate, useParams } from "react-router-dom";
import axios from 'axios';


const UpdateAuthor = (props) =>{  
    const[name, setName] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res)=>{
            console.log("Get author was called.");
            setName(res.data.name);
        },[])
        .catch((err)=>{
            console.log(err);
        })
    }, []);
    
    const updateAuthor = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`,{
            name
        })
        .then((res)=>{
            console.log(res.data);
            navigate("/");
        })
        .catch(err=>{
            console.log(err.response.data.errors)
            setErrors(err.response.data.errors);
        })
    }
    

    return(
    <div className='container col-5'>
        <div className='justify-content-center'>
        <Link to={`/`}>Homepage</Link>
            <form onSubmit={updateAuthor}>
                <h1>Edit Author's Name</h1>
                        <div className="input-group mb-4">
                        <span className="input-group-text"><label>Title:</label>
                        <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} value={name}/>
                        {errors.name ? <p>{errors.name.message}</p> : null}
                        </span>
                        </div>
                        <button type='submit-input'>Submit</button>
                </form>
        </div>
    </div>
    );
}
export default UpdateAuthor;