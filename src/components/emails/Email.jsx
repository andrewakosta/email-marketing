import React,{useState, useEffect, useContext} from 'react'
import emailsContext  from '../../context/emails/emailsContext'

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
        <div>
            <span style={{fontSize:"25px",marginRight:"8px"}}>{user.email}
            </span><span>{user.name}</span>
            <span 
                onClick={()=>changeStatus_(user.email)} 
                style={{backgroundColor: status === "allow" ? "green" : "red"}}
            >{status}
            </span>
        </div>
     );
}
 
export default Email;