import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import authContext from '../../context/auth/authContext'
const PrivateRoutes = ({component:Component, ...props}) => {
   
    const authContext_ = useContext(authContext) 

    const {authenticate, userAuthenticated} = authContext_ 

    useEffect(()=> {

        userAuthenticated()
        //eslint-disable-next-line
    }, [])
    return(
        <Route {...props} render={props => authenticate === true ?
        (
            <Component {...props}/>
        )
        :
        (
            
            <Redirect to="/"/>
        )
    } />
    )
}
 
export default PrivateRoutes;