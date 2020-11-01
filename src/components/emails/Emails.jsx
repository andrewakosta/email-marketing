import React,{useContext, useState} from 'react'
import emailsContext from '../../context/emails/emailsContext'
import Editor from './Editor';
import Email from './Email';
import './emails.scss'
const Emails = (props) => {
    const [editor, setEditor] = useState(false)
    const {emails} = useContext(emailsContext)
    const showEditor =()=>{
        setEditor(true)
    }
    return ( 
        <div>
            {editor 
             ? (
                <Editor history={props.history}/>
             )
            :(
                <button className='btn-create-email-body' onClick={showEditor}>Create Email</button>
            ) 
            }
            {emails.map((email, index) => <Email  key={index} user={email}/>) }
            
        </div>
        
        
     );
}
 
export default Emails;