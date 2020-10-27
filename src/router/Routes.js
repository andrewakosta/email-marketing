import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../components/Home';
import Login from '../components/auth/Login';
import FilesState from '../context/files/FilesState'
import PrivateRoutes from '../components/auth/PrvateRoutes';


const Routes = () => {
    return (
        <FilesState>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <PrivateRoutes  path="/home" component={Home}/>
                </Switch>    
            </Router>
        </FilesState>
     );
}
 
export default Routes;