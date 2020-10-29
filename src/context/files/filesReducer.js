import { GET_FILES, REFRESH_FILES, UPLOAD_FILES } from "../types"

export default (state, action)=>{
    switch(action.type){
        case GET_FILES:
            
            return {
                ...state,
                files:action.payload,
                loading:false
            }
        case REFRESH_FILES:    
        case UPLOAD_FILES:
            return{
                ...state,
                refreshFiles:!state.refreshFiles
            }    
        default:
            return state
    }
}