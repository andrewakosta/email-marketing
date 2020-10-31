import React,{useState, useEffect, useContext} from 'react'
import emailsContext  from '../../context/emails/emailsContext'
import './email.scss'
const Email = ({user}) => {
    const [status, setStatus] = useState('')

    const {changeStatus} = useContext(emailsContext)
    useEffect(()=> {
        setStatus(user.status)
    },[])
    const changeStatus_= userEmail => {
        if(status === "allow"){
            setStatus("not-allow")
            changeStatus(userEmail,"not-alow")
        }else{
            setStatus("allow")
            changeStatus(userEmail,"allow")
        }
    }
    return ( 
        <div className='email-container'>
            <span 
               className='user-email'>
               {user.email}
            </span>
            <span className='user-name'>
                {user.name}
            </span>
            <span 
                onClick={()=>changeStatus_(user.email)} 
                className={status === 'allow' ? 'allow':"not-allow"}
            >{status}
            </span>
        </div>
     );
}
 
export default Email;