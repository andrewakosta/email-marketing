import React from 'react';
import { useContext, useEffect } from 'react';
import filesContext from '../../context/files/filesContex'
import authContext from '../../context/auth/authContext'
import File  from './File'
const Files = (props) => {
    
    const {files, getFiles, uploadFiles, loading, refreshFiles} = useContext(filesContext)
    
    const {user, loadingAuth} = useContext(authContext)

    useEffect(() => {

     if(true){
      
        getFiles(user._id)

     }
     //eslint-disable-next-line   
    },[refreshFiles])

    const handleInputFile = e => {
        uploadFiles(e.target.files,user._id)

    }
    return ( 
        <>  
            <div>
                <input type="file" accept=".xlsx"  multiple onChange={handleInputFile}/>
            </div>
            {loading ? "Loading..": files.length === 0  ? "No files" : files.map((file, index)=> <File key={index} history={props.history} file={file}/>) }
            
        </>
     );
}
 
export default Files;