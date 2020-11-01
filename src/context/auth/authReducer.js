import { ERROR_AUTH, GET_AUTHENTICATED_USER, LOGIN, REGSITER } from "../types"

export default (state, action)=> {
    switch(action.type){
        case GET_AUTHENTICATED_USER:
            return {
                ...state, 
                authenticate:true,
                user:action.payload,
                loadingAuth:false
            }
        case REGSITER:    
        case LOGIN:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state, 
                authenticate:true,
                message:null, 
            }   
        case ERROR_AUTH:
            return{
                ...state, 
                message:action.payload
            }     
        default:
            return state
    }
}