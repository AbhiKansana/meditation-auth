import React from 'react'
import { useState, useEffect} from 'react'
import {db} from '../Firebase.js'
import { collection , getDocs} from 'firebase/firestore'
import { useDispatch, useSelector } from "react-redux";
import { currentIdPersist } from '../redux/one/actions'
import { useNavigate } from 'react-router-dom'

function Checking() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[users,setUsers] = useState([])
    const state = useSelector(state=>state.last)
    const email = state.email
    let  flag =false
    // console.log(email)
    console.log(users)

    const collectionRef = collection(db,"users")
    const lenght = users.length
 

    useEffect(()=>{
        const getUsers = async() => {
            const data = await getDocs(collectionRef)
            setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
            
        }
        getUsers()

        for(let i=0; i<lenght; i++){

            if(users[i].email===email){
                dispatch(currentIdPersist(users[i].id))
                console.log("chamatkaar",users[i].id)
                flag = true
                navigate('/last')
                break;
            }
        }

        if(lenght>0 && flag===false){
            console.log({flag})
            console.log({lenght})
            navigate('/signIn')
        }
     


    },[lenght])

  return (
    <div>
        <h2>Checking...</h2>
    </div>
  )
}

export default Checking