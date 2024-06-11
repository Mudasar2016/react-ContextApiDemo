import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
const Login = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const submitForm = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

  return (


    <div>
        <input type='text' placeholder='username' value={username} onChange={(e)=> setUserName(e.target.value)}/> 
        <br/>
        <input type='password' placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <br/>
        <br/>
        <button onClick={submitForm}>Submit</button>
        <br/>
    </div>
  )
}

export default Login