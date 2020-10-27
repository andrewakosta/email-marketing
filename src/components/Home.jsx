import React from 'react'
import { Route} from 'react-router-dom';
import Files from "./files"
import Emails from "./emails"
import Statistics from './statistics'
import SideBar from './sidebar/SideBar'

const Home =  props => {
    return (     
        <div className="container" style={{display:"flex"}}>
            <SideBar/>
            {/**Section to load according with the route */ }
            <div className="section-container">
                <Route path="/home/files" exact component={Files}></Route>
                <Route path="/home/emails" component={Emails}></Route>
                <Route path="/home/statistics" component={Statistics} ></Route>
            </div>
        </div>
     );
}
export default Home;