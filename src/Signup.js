import { useState } from 'react'
import {Button, FormControl, Stack, TextField} from '@mui/material'
import {useNavigate} from 'react-router-dom'

function Signup(){

    const [edu, setEdu] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("\u00A0")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password != confirmPassword) setError("Passwords must match");
        navigate("/editProfile");
    }

    return(
        <Stack id="login-panel" direction="column" alignItems="center">
            <div>Create Account</div><br />
            <form onSubmit={handleSubmit}>
                <Stack id="login-form" direction="column" alignItems="center">
                    <TextField id="edu" label='University Email' required
                        value={edu} onChange={e => setEdu(e.target.value)} /><br />
                    <TextField id='password' label='Password' type='password' required
                        value={password} onChange={e => setPassword(e.target.value)} /><br />
                    <TextField id='confirm-password' label='Confirm Password' type='password' required
                        value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /><br />
                    <Button id="log-in" variant="contained" type="submit">Sign Up</Button>
                    <div id="error-message" style={{color: "red"}}>{error}</div>
                </Stack>
            </form>
        </Stack>
    )
}

export default Signup;