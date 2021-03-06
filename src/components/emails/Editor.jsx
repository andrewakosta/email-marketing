import React, {useRef, useContext}from 'react'
import JoditEditor from "jodit-react";
import emailsContext from '../../context/emails/emailsContext'
import {MdSend} from 'react-icons/md'
import './editor.scss'
const Editor = ({history}) => {
const {sendEmails} = useContext(emailsContext)    
const editor = useRef(null)

const config = {
    readonly: false // all options from https://xdsoft.net/jodit/doc/
}

const handleSumitEmail=() =>{
    if(editor.current.value.length > 0 ){
        sendEmails(editor.current.value)
        history.push("/home/files")
    }else{
        alert("Please create a body for the email")
    }
}
return (
    <>
        <div className='editor-container'>
            <input type="text" placeholder='...Subject...'/>
            <JoditEditor
                ref={editor}
                config={config}
                tabIndex={1} // tabIndex of textarea
            />

            <button className='btn-send' onClick={handleSumitEmail}><i><MdSend/></i>Send Emails</button>
        </div>
    </>    
    );
}
 
export default Editor;