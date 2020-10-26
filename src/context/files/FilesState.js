import React, { useReducer } from 'react';
import fileContext from './filesContex'
import fileReducer from './filesReducer'

const FilesSate = props => {
    const initialState = {
        value:false
    }

    //Dispatch to execute the actions
    const [state, dispatch] = useReducer(fileReducer, initialState)

    //Funtions with dispatch to the CRUD


    return (
        <fileContext.Provider
            value={{
                value:state.value
            }}
        >
            {props.children}
        </fileContext.Provider>
    )

}
export default FilesSate