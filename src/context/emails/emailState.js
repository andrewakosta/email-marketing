import React, { useReducer } from 'react';
import clientAxios from '../../config/axios';
import { CHANGE_STATUS_OF_ONE_EMAIL, GET_DATA_OF_ONE_FILE } from '../types';
import emailsContext from './emailsContext'
import emailsReducer from './emailsReducer'

const EmailState = (props) => {
    const initialSate = {
        emails:[]
    }

    const [state, dispatch] = useReducer(emailsReducer, initialSate)

    const setEmails = async (userId, fileName) => {
        try{
            const response = await clientAxios.get("files/"+ userId +"/"+ fileName)
            dispatch({
                type:GET_DATA_OF_ONE_FILE,
                payload:response.data.data
            })
        }catch(error){
            alert(JSON.stringify(error.response.data))
        }
    }
    const changeStatus = (userEmail, status) => {
        dispatch({
            type:CHANGE_STATUS_OF_ONE_EMAIL, 
            payload:{
                userEmail, 
                status
            }
        })
    }
    const sendEmails = async HTML => {
        const  allowEmails = state.emails.filter(user => user.status === "allow")
        let arrayWithOnlyEmailAdress = [] ;

        await allowEmails.forEach(user => {
            arrayWithOnlyEmailAdress.push(user.email)
        });
        const subject = 'Testing React-Client'
        try{
            await clientAxios.post('emails/', {emails:arrayWithOnlyEmailAdress,HTML, subject})
        }catch(error){
            console.log(error.response)
        }
    }
    return ( 
        <emailsContext.Provider
            value={{
                emails:state.emails, 
                setEmails, 
                changeStatus,
                sendEmails
            }}
        >
            {props.children}
        </emailsContext.Provider>
     );
}
 
export default EmailState;