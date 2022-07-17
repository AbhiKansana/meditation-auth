import React from 'react'
import { db } from '../Firebase.js'
import { collection , getDoc, doc} from 'firebase/firestore'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { mainfunction } from '../redux/one/actions.jsx'
import { Link } from 'react-router-dom'




function Last() {
  const dispatch = useDispatch()
  const  state = useSelector(state=>state.last)
  const info = state.info
  const isLoading = state.isLoading
  const  isError = state.isError


  

  useEffect(()=>{
  

     dispatch(mainfunction())
   

  },[])
  return (
    <div>
      <Link to='/'><h2>Home</h2></Link>
       {isLoading && <h3>Loading...</h3>}
       {isError && <h3>Error...</h3>}
        <h1>This is Last Page</h1>
        <h2>Name :  {info?.name?.stringValue}</h2>
        <h2>Age : {info?.age?.stringValue}</h2>
    </div>
  )
}

export default Last