import React from 'react'
import {  Route, Switch} from 'react-router-dom';
import Files from "./files"
import Emails from "./emails"
import Statistics from './statistics'
import SideBar from './sidebar/SideBar'
import PrivateRoutes from './auth/PrvateRoutes';
import NotFound from './NotFound'
import './home.scss'

const Home =  props => {
    return (     
        <div className="container" >
            <SideBar/>
            {/**Section to load according with the route */ }
            <div className="section-container">
                <Switch>
                    <PrivateRoutes path="/home/files"  exact component={Files}/>
                    <PrivateRoutes path="/home/emails" exact  component={Emails}/>
                    <PrivateRoutes path="/home/statistics" exact  component={Statistics} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </div>
     );
}
export default Home;