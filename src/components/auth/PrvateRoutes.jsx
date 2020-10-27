import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const PrivateRoutes = ({component:Component, ...props}) => {
    const autenticated = false
    
    return(
        <Route {...props} render={props => autenticated === true ?
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