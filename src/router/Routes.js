import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../components/Home';
import Login from '../components/Login';
import FilesState from '../context/files/FilesState'


const Routes = () => {
    return (
        <FilesState>
            <Router>
                
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                </Switch>
            </Router>
        </FilesState>
     );
}
 
export default Routes;