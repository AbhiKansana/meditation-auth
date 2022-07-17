import { actionTypes } from "./actions"

const init = {
    isLoading : false,
    isError   : false,
    id      :  null,
    info : null,
    email : null
}


export default function lastReducer (state = init,action){
    switch(action.type){
        case actionTypes.currentIdPersist :
            return {
                ...state,
               id : action.payload
                
            }
        case actionTypes.currentEmailPersist :
            return {
                ...state,
                email : action.payload
            }
        case actionTypes.infoRequest :
            return {
                ...state,
                isLoading : true,
                isError : false,
                
            }
        case actionTypes.infoFailure :
            return {
                ...state,
                isLoading : false,
                isError : true,
            }
        case actionTypes.infoSuccess :
            return {
                ...state,
                isLoading : false,
                isError : false,
                info : action.payload
            }
        default :
        return state
    }
}