import React,{useContext} from 'react'

import filesContext from '../../context/files/filesContex'
import authContext from '../../context/auth/authContext'
import emailsContext from '../../context/emails/emailsContext'
import {RiFileExcel2Fill} from 'react-icons/ri'
import {MdDelete} from 'react-icons/md'
import './file.scss'
const File = ({file,history}) => {

    const {deleteFileByName} = useContext(filesContext)
    const {user} = useContext(authContext)
    const {setEmails} = useContext(emailsContext)

    const deleteFile = (fileName)=> {
        deleteFileByName(fileName, user._id)
    }
    const setEmails_ = async (fileName)=>{
        await setEmails(user._id, fileName)
        history.push("/home/emails")
    }
    return ( 
        <div className='file-container'>
            <article >
                <div> 
                    <span 
                       onClick={() => setEmails_(file.name)}
                       ><i><RiFileExcel2Fill/></i><span className='file-name'>{file.originalFilename}</span>
                    </span> 
                    <a 
                       onClick={()=> deleteFile(file.name)}
                       ><i><MdDelete/></i>
                    </a>
                </div>
            </article>
        </div>
     );
}
 
export default File;