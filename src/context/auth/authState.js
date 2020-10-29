import React, { useReducer } from 'react';
import authReducer from './authReducer'

import { ERROR_AUTH, GET_AUTHENTICATED_USER, LOGIN, REGSITER } from '../types'
import tokenAuth from '../../config/tokenAtuh';
import axios from 'axios';
import clientAxios from '../../config/axios'
import authContext from './authContext';
const AuthSatate = props => {

    const intialSatate = {
        token: localStorage.getItem('token'),
        authenticate:null,
        user:null,
        loadingUser:null, 
        message:null
    }

    const [state, dispatch] = useReducer(authReducer, intialSatate)

    /**
     * *******************************************************
     * Get User Authenticate 
     */
    const userAuthenticated = async() => {
        const token = localStorage.getItem("token")

        if(token){
            tokenAuth(token)
        }
        try{
            const response = await clientAxios.get('user/user-authenticated')

            dispatch({
                type:GET_AUTHENTICATED_USER,
                payload:response.data.user,    
            })
        }catch(error){
            alert(error.response.data.msg)
        }
        
    }
    /**
     * *******************************************************
     *Login 
     */
    const login = async data => {

        try {
            
            const response = await clientAxios.post("user/log-in", data)
            console.log(response);
            dispatch({
                type:LOGIN,
                payload:response.data
            })
        } catch (error){
            dispatch({
                type:ERROR_AUTH,
                payload:error.response.data.msg    
            })
        }
    }
    /**
     * *******************************************************
     *Register
     */
    const register = async data  => {
        try {
            const response = await axios.post("/user/sign-up", data)
            dispatch({
                type:REGSITER,
                payload:response.data
            })
        } catch{
            alert("Error")
        }
    } 
    return ( 
        <authContext.Provider
            value={{
                loadingUser:state.loadingUser,
                user:state.user,
                token:state.token,
                authenticate:state.authenticate,
                message:state.message,
                userAuthenticated, 
                login,
                register

            }}

        >
            {props.children}
        </authContext.Provider>
     );
}
 
export default AuthSatate;