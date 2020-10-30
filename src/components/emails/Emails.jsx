import React,{useContext} from 'react'
import emailsContext from '../../context/emails/emailsContext'
import Editor from './Editor';
import Email from './Email';
const Emails = (props) => {
    const {emails} = useContext(emailsContext)

    return ( 
        <div>
            <Editor history={props.history}/>
            {emails.map((email, index) => <Email  key={index} user={email}/>) }
            
        </div>
        
        
     );
}
 
export default Emails;