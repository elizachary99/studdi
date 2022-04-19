import { useState } from 'react'
import {Button, FormControl, Stack, TextField} from '@mui/material'
import {useNavigate} from 'react-router-dom'

function EditProfile(){
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [error, setError] = useState("\u00A0")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <Stack id="profile-panel" direction="column" alignItems="center">
            <div>Create/Edit Profile</div><br />
            <form onSubmit={handleSubmit}>
                <Stack id="profile-form" direction="column" alignItems="center">
                    <TextField id="first" label='First name' required
                        value={first} onChange={e => setFirst(e.target.value)} /><br />
                    <TextField id='last' label='Last name' required
                        value={last} onChange={e => setLast(e.target.value)} /><br />
                    <Button id="save-profile" variant="contained" type="submit">Save</Button>
                    <div id="error-message" style={{color: "red"}}>{error}</div>
                </Stack>
            </form>
        </Stack>
    )
}

export default EditProfile;