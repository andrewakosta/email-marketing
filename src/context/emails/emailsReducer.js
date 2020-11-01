import { CHANGE_STATUS_OF_ONE_EMAIL, GET_DATA_OF_ONE_FILE } from "../types"
import {sortDataFile} from '../../helpers/files'
import emailsContext from "./emailsContext"
export default  (state, action)=> {
    switch(action.type){
        case GET_DATA_OF_ONE_FILE:
            return {
                ...state, 
                emails:sortDataFile(action.payload)
            }
        case CHANGE_STATUS_OF_ONE_EMAIL:
            return{
                ...state, 
                emails:state.emails.map(user => user.email === action.payload.userEmail ? {...user, status:action.payload.status}:user)
            }

        default:
            return state
    }
}