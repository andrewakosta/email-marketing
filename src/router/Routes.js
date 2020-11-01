import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../components/Home';
import Login from '../components/auth/Login';
import FilesState from '../context/files/FilesState'
import PrivateRoutes from '../components/auth/PrvateRoutes';
import NotFound from '../components/NotFound'
import AuthSatate from '../context/auth/authState' 
import EmailState from '../context/emails/emailState'


const Routes = () => {
    return (
       <AuthSatate>
        <FilesState>
           <EmailState>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <PrivateRoutes  path="/home" component={Home}/>
                    <Route component={NotFound}/>
                </Switch>    
            </Router>  
          </EmailState>   
        </FilesState>
        </AuthSatate>  
     );
}
 
export default Routes;