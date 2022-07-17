import { collection , getDoc, doc} from 'firebase/firestore'
import { db } from '../../Firebase.js'




export const actionTypes  =  {
    currentIdPersist : "CURRENT_ID_PERSIST",
    currentEmailPersist:"CURRENT_EMAIL_PERSIST",
    infoRequest : "INFO_REQUEST",
    infoFailure : "INFO_FAILURE",
    infoSuccess : "INFO_SUCCESS"
}


export function currentIdPersist(id){
    return {
        type:actionTypes.currentIdPersist,
        payload : id
    }
}

export function currentEmailPersist(email){
    return {
        type:actionTypes.currentEmailPersist,
        payload : email
    }
}





function infoRequest(){
    return {
        type:actionTypes.infoRequest
    }
}

export function infoSuccess(obj){
    return {
        type: actionTypes.infoSuccess,
        payload : obj

    }
}


function infoFailure(){
    return {
        type : actionTypes.infoFailure
    }
}


export function mainfunction(){
    return  (dispatch,getState) => {
        dispatch(infoRequest())

        const state = getState()
        // console.log("finaState",state.last.id)
        const id = state.last.id || "3C6uqbcFXB3HvFbA9swo"
        

        const getUsers = async() => {

            try{
              const userCollections = doc(db,"users", id)
              const data2 =  await getDoc(userCollections)
              const obj = (data2?._document.data.value.mapValue.fields)
              dispatch(infoSuccess(obj))
 

    
            }
            catch{
              console.log("error in last page")
              dispatch(infoFailure())
            }
    
    
        }
        getUsers()

    }
}