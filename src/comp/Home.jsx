import React from 'react'
import { signInWithGoogle } from '../Firebase';
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { db } from '../Firebase.js'
import { useDispatch } from "react-redux";
import { currentEmailPersist } from '../redux/one/actions.jsx'


function Home() {

 
  const navigate = useNavigate()
  
  const dispatch = useDispatch()

  // function handleClick(){
  //   const  main = async() =>{
  //     try{
  //       const val = await signInWithGoogle()
  //       console.log("returned",val)
  //       navigate('/SignIn')

  //     }
      
  //      catch(e){
  //         console.log("error",e)
  //      }
  //   }
  //   main()
  // }

  function handleClick(){
     signInWithGoogle()
     .then(res=>{
      // console.log("returned",res.user.email)
      dispatch(currentEmailPersist(res.user.email))
      navigate('/checking')
    })
    .catch(err=>{
      console.log({err})
    })
  }


  

  return (
    <div>
        <h1>This is Home</h1>
        <button onClick={handleClick}>Googel Auth Button</button>


    </div>
  )
}

export default Home