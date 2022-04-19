import { useState } from 'react'
import {Button, FormControl, Stack, TextField} from '@mui/material'
import {useNavigate} from 'react-router-dom'

function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginResult, setLoginResult] = useState("\u00A0")

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoginResult("Username and password do not match any existing users")
    }

    const navigate = useNavigate()

    return(
        <Stack id="login-panel" direction="column" alignItems="center">
            <img id="studdi-logo" alt="Studdi" src="/logo1.png" style={{width: "50%"}}></img><br />
            <form onSubmit={handleSubmit}>
                <Stack id="login-form" direction="column" alignItems="center">
                    <TextField id="username" label='Username' required
                        value={username} onChange={e => setUsername(e.target.value)} /><br />
                    <TextField id='password' label='Password' type='password' required
                        value={password} onChange={e => setPassword(e.target.value)} /><br />
                    <Button id="log-in" variant="contained" type="submit">Log In</Button>
                    <div style={{color: "red"}}>{loginResult}</div>
                </Stack>
            </form>
            <br />
            <div>Don't have an account?</div>
            <Button variant="contained" onClick={() => {navigate("/signup")}}>Sign Up</Button>
        </Stack>
    )
}

export default Login;