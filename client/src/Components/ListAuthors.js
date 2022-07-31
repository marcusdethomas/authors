import React, {useEffect} from 'react'
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';


const AuthorList = (props) => {
    const {authorList, setAuthorList} = (props);

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => {
                console.log("Delete Function called.")
                setAuthorList(authorList.filter(product=> product._id !== authorId));
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then((res)=>{
            //console.log(res.data, "From Axios");
            setAuthorList(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    return (
        <div>
            <Container maxWidth="lg">
            <h1>Favorite authors</h1>
            <Link to={`/authors/new`}>Add an author</Link>
            <header>
                <p>We have quotes from: </p>
            </header>

            <TableContainer component={Paper} sx={{ width: '100%' }}>
                <Table>
                            <TableHead>
                                <TableRow sx={{padding: "0px 0px",
                                    backgroundColor: "lightgrey"}} >
                                    <TableCell>Author</TableCell>
                                    <TableCell align="right" colSpan={2}>Actions Available</TableCell>
                                </TableRow>
                            </TableHead>
                        
                        {   
                            authorList.map((author, index)=>{
                            return <TableBody key={index}>
                        <TableRow>
                            <TableCell style={{width:'25%'}}> {author.name}</TableCell>
                            <TableCell style={{minWidth:500}} align="right" >
                                <Link to={`/authors/edit/${author._id}`}>
                                <Button variant="contained" sx={{m:2}}>Edit</Button>
                                </Link>
                                <Button variant="contained" onClick={(e)=>{deleteAuthor(author._id)}}>Delete</Button>
                            </TableCell>
                        </TableRow>
                        </TableBody>})}
                </Table>    
            </TableContainer>
            </Container>
        </div>
    )
};
export default AuthorList;
