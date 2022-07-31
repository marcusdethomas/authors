import React, {useState } from 'react'
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';

const NewAuthor = (props) => {
    const navigate = useNavigate();
    //const {authorList, setAuthorList} = props; 
    const[name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors",{
            name
        })
        .then((res)=>{
            setName("");
            console.log("Author added: ", res);
            navigate("/");
        })
        .catch(err=>{
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        })
    }
}  
    return(
    <div className='container col-5'>
        <div className='justify-content-center'>
            <Link to={`/`}>Homepage</Link>
            <form onSubmit={onSubmitHandler}>
                <h1>Add an Author</h1>
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
    )
}
export default NewAuthor;