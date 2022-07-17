import React, { useState } from 'react'
import axios  from 'axios'
import {useNavigate} from 'react-router-dom'
import { db } from '../Firebase.js'
import {  collection , addDoc} from 'firebase/firestore'
import {currentIdPersist} from '../redux/one/actions.jsx'
import { useDispatch, useSelector } from "react-redux";

function Sign() {
  const[name,setName] = useState("")
  const[age,setAge] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const state = useSelector(state=>state.last)
  const email = state.email
  console.log({email})
  
  
  const userCollectionRef = collection(db,"users")

  function handleClick(){
    const createUser = async() =>{
      let val = await addDoc(userCollectionRef,{name,age,email})
      dispatch(currentIdPersist(val.id))
      navigate('/last')
    }
      createUser()
  }
  
  return (
    <div>
        <h1>
            Sign Up Page
        </h1>

        <input onChange={(e)=>setName(e.target.value)} type={'text'} placeholder='name'></input>
        <input onChange={(e)=>setAge(e.target.value)} type='number' placeholder='age'></input>
        <button onClick={handleClick}>Save</button>
    </div>
  )
}

export default Sign