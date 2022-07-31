import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../src/Views/Main'
import './App.css';
import UpdateAuthor from './Components/EditAuthor';
import NewAuthor from './Components/NewAuthor';
import EditMovie from './Components/EditMovie';

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Routes>  
          <Route element={<Main/>} path="/" default /> 
          <Route element={<NewAuthor/>} path="/authors/new" /> 
          <Route element={<UpdateAuthor/>} path="/authors/edit/:id" /> 
          

          <Route element={<EditMovie/>} path="/movies" /> 


          
        </Routes>  
      </BrowserRouter>
    </div>
  );
}
export default App;

