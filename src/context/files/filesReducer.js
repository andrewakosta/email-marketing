import { GET_FILES } from "../types"

export default (state, action) =>{
    switch(action.type){
        case GET_FILES:
            return {
                ...state,
                files:action.payload
            }
        default:
            return state
    }
}