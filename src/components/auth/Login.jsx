import React, { useState } from 'react';

const Login = () => {
    const [register, setRegisterStatus] = useState(false)

    const [user, setUser] = useState({
        email:'', 
        password:''
    })

    const {email, password} = user;

    const onChange = e => {
        setUser({
            ...user, 
            [e.target.name] : e.target.value
        })
    }
    const handleSumit = e => {
        alert(email + "  +++  " + password)
    }
    const setRegisterStatus_ = e => {
        setRegisterStatus(!register)
    }
    return ( 
       <>
            {
                register
                 
                ?
                <form>
                    <h4>Register</h4>
                <label>
                    E-mail
                    <input 
                        type="text"
                        value={email}
                        name="email"
                        onChange={onChange}
                        />
                </label>
                <label>
                    Password
                    <input 
                        type="password"
                        value={password}
                        name="password"
                        onChange={onChange}
                        />
                </label>
                <label>
                    Confirm Password
                    <input 
                        type="password"
                        value={password}
                        name="password"
                        onChange={onChange}
                        />
                </label>
    
                <input type="submit" value="Sent" onClick={handleSumit}></input>

    
                <p onClick={setRegisterStatus_}>Login...</p>
            </form>
                :
                <form>
                <h4>Login</h4>
                <label>
                    E-mail
                    <input 
                        type="text"
                        value={email}
                        name="email"
                        onChange={onChange}
                        />
                </label>
                <label>
                    Password
                    <input 
                        type="password"
                        value={password}
                        name="password"
                        onChange={onChange}
                        />
                </label>

    
                <input type="submit" value="Sent" onClick={handleSumit}></input>
    
                <p onClick={setRegisterStatus_}>Register for new account...</p>
            </form>
            }
       </>


     );
}
 
export default Login;