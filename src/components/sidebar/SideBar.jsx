import React from 'react'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
    return ( 
        <div style={{backgroundColor:"blueviolet", height:"100vh", width:"250px"}}>
            <p><center>User Name</center></p>

            <div style={{display:"flex", flexDirection:"column"}}>
                <NavLink to="/home/files" activeClassName="selected">Files</NavLink>
                <NavLink to="/home/emails" activeClassName="selected">Emails</NavLink>
                <NavLink to="/home/statistics" activeClassName="selected">Statistics</NavLink>
            </div>
        </div>
    );
}
 
export default SideBar;