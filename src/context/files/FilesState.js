import React, { useReducer } from 'react';
import fileContext from './filesContex'
import fileReducer from './filesReducer'
import {GET_FILES} from '../types'

const FilesSate = props => {
    const initialState = {
        value:true, 
        files:[]
    }

    //Dispatch to execute the actions
    const [state, dispatch] = useReducer(fileReducer, initialState)

    //Funtions with dispatch to the CRUD
    const getFiles =() => {
        dispatch({
            type:GET_FILES, 
            payload:[
                {
                    "originalFilename": "Customers_2.xlsx",
                    "name": "7mdDIswu902V5rRUy8R-Oa5Q.xlsx"
                },
                {
                    "originalFilename": "Customers_1.xlsx",
                    "name": "TTRRgn1iQdfpGlrbbgXpMalS.xlsx"
                }
            ]
        })
    }

    return (
        <fileContext.Provider
            value={{
                value:state.value, 
                getFiles
            }}
        >
            {props.children}
        </fileContext.Provider>
    )

}
export default FilesSate