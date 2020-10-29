import React,{useContext} from 'react'

import filesContext from '../../context/files/filesContex'
import authContext from '../../context/auth/authContext'
const File = ({file}) => {

    const {deleteFileByName} = useContext(filesContext)
    const {user} = useContext(authContext)

    const deleteFile = (fileName)=> {
        deleteFileByName(fileName, user._id)
    }
    return ( 
        <div>
            <article style={{margin:"10px", padding:"5px", backgroundColor:"purple"}}>
                <span> <p>{file.originalFilename}</p><a onClick={()=> deleteFile(file.name)}>Delete</a></span>
            </article>
        </div>
     );
}
 
export default File;