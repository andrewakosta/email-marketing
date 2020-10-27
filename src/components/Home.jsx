import React from 'react'
import { Route} from 'react-router-dom';
import Files from "./files"
import Emails from "./emails"
import Statistics from './statistics'
import SideBar from './sidebar/SideBar'
import PrivateRoutes from './auth/PrvateRoutes';

const Home =  props => {
    return (     
        <div className="container" style={{display:"flex"}}>
            <SideBar/>
            {/**Section to load according with the route */ }
            <div className="section-container">
                <PrivateRoutes path="/home/files"  component={Files}/>
                <PrivateRoutes path="/home/emails"  component={Emails}/>
                <PrivateRoutes path="/home/statistics"   component={Statistics} />
            </div>
        </div>
     );
}
export default Home;