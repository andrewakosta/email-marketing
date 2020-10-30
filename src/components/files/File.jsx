import React,{useContext} from 'react'

import filesContext from '../../context/files/filesContex'
import authContext from '../../context/auth/authContext'
import emailsContext from '../../context/emails/emailsContext'
const File = ({file,history}) => {

    const {deleteFileByName} = useContext(filesContext)
    const {user} = useContext(authContext)
    const {setEmails, emails} = useContext(emailsContext)

    const deleteFile = (fileName)=> {
        deleteFileByName(fileName, user._id)
    }
    const setEmails_ = async (fileName)=>{
        await setEmails(user._id, fileName)
        history.push("/home/emails")
    }
    return ( 
        <div >
            <article  style={{margin:"10px", padding:"5px", backgroundColor:"purple"}}>
                <div> <span onClick={() => setEmails_(file.name)}>{file.originalFilename}</span> <a style={{float:"right"}} onClick={()=> deleteFile(file.name)}>Delete</a></div>
            </article>
        </div>
     );
}
 
export default File;