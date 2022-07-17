import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { db, signInWithGoogle } from './Firebase';
import { Route, Routes } from "react-router-dom";
import Home from './comp/Home';
import Sign from './comp/Sign';
import Last from './comp/Last';
import Checking from './comp/Checking';



function App() {

  
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/checking' element={<Checking/>} />
      <Route path='/signIn'  element={<Sign/>} />
      <Route path='/last' element={<Last />} />
     </Routes>
   
    
    </div>
  );
}

export default App;
