import React from 'react';
import { useContext, useEffect } from 'react';
import filesContext from '../../context/files/filesContex'
import authContext from '../../context/auth/authContext'
import File  from './File'
import {AiOutlineCloudUpload} from 'react-icons/ai'

import { Ellipsis } from "react-spinners-css";
import './files.scss'
const Files = (props) => {
    
    const {files, getFiles, uploadFiles, loading, refreshFiles} = useContext(filesContext)
    
    const {user, loadingAuth} = useContext(authContext)

    useEffect(() => {

     if(loadingAuth === false){
        getFiles(user._id)
     }
     //eslint-disable-next-line   
    },[refreshFiles, loadingAuth])

    const handleInputFile = e => {
        uploadFiles(e.target.files,user._id)

    }
    return ( 
        <div className='files-container'>
            <div className='header-seccion'>
                <input type='text' placeholder='  Find something'></input>
               <label htmlFor='file'><i><AiOutlineCloudUpload/></i>Upload</label>
               <input type="file" id="file" accept=".xlsx"  multiple onChange={handleInputFile} hidden/>
            </div>
            <hr/>
            {loading ? <div className='spinner'><Ellipsis color='green'/></div>: files.length === 0  ? "No files" : files.map((file, index)=> <File key={index} history={props.history} file={file}/>) }
        </div>
     );
}
 
export default Files;