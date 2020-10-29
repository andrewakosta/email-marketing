import React, { useReducer } from 'react';
import fileContext from './filesContex'
import fileReducer from './filesReducer'
import {GET_FILES, REFRESH_FILES, UPLOAD_FILES} from '../types'
import clientAxios from '../../config/axios';

const FilesSate = props => {
    const initialState = {
        files:[], 
        loading:true
    }

    //Dispatch to execute the actions
    const [state, dispatch] = useReducer(fileReducer, initialState)

    //Funtions with dispatch to the CRUD
    /**
     * *******************************************************************
     * Get Files from current user
     */
    const getFiles = async userId => {
        try {
            const response = await clientAxios.get("files/" + userId)
            dispatch({
                type:GET_FILES, 
                payload:response.data.files, 
                refreshFiles:false,
            })
        
        } catch(error){
            console.log(error);
        }
    }
    /**
     * *******************************************************************
     * Get Files from current user
     */
    const uploadFiles = async (xmlsFiles, userId) => {
        try{
            let formData = new FormData()
            Object.values(xmlsFiles).map(file => {
                formData.append("xlsx",file)
            })
            await clientAxios.post("files/" + userId, formData);
            alert("Success")
            dispatch({
                type:UPLOAD_FILES,
            })

        }catch(error){
            console.log(error);
        }
            
        
    }
        /**
     * *******************************************************************
     * Delete File by its name
     */
    const deleteFileByName = async (fileName, userId) => {
        try{   
            await clientAxios.delete("files/"+ userId, {data:{fileName}})
            dispatch({
                type:REFRESH_FILES
            })
        }catch(error){
            console.log(error.response.data);
        }
    }
    return (
        <fileContext.Provider
            value={{
                loading:state.loading,
                files:state.files, 
                refreshFiles:state.refreshFiles,
                getFiles,
                uploadFiles,
                deleteFileByName,
                
            }}
        >
            {props.children}
        </fileContext.Provider>
    )

}
export default FilesSate