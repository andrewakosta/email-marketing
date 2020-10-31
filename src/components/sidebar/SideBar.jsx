import React from 'react'
import { NavLink } from 'react-router-dom'
import './sideBar.scss'
import {FaFolder} from 'react-icons/fa'
import {GoGraph} from 'react-icons/go'
import {IoMdMail} from 'react-icons/io'
const SideBar =  () => {
    return ( 
        <div className="sidebar">
            
            <div className="avatar"></div>

            <div className='links'>
                <NavLink to="/home/files" className='link' activeClassName="selected"> <i><FaFolder/></i>Files</NavLink>
                <NavLink to="/home/emails" className='link' activeClassName="selected"><i><IoMdMail/></i>Emails</NavLink>
                <NavLink to="/home/statistics" className='link' activeClassName="selected"><i><GoGraph/></i>Statistics</NavLink>
            </div>
        </div>
    )
}
 
export default SideBar;