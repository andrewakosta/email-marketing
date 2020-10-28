import React from 'react';
import { useContext, useEffect } from 'react';
import fileContext from '../../context/files/filesContex'
const Files = () => {
    
    const filesContext = useContext(fileContext)
    const {value, getFiles} = filesContext

    useEffect(() => {
        getFiles()
     //eslint-disable-next-line   
    }, [])
    return ( 
        <h>Files... {value ? "true":"false"} </h>
     );
}
 
export default Files;