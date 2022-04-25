import { useState } from 'react'
import { Button, FormControl, Stack, TextField, Container, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import "./index.css"

function Profile() {

    const navigate = useNavigate()

    return (
        <Stack id="profile-panel" direction="column" alignItems="center">
            <h2>User Profile</h2>
            <hr />
            <img id="user-pic" src={"./profile_pics/placeholder.png"} alt={"placeholder"} style={{ width: "100%", marginTop: "30px", marginBottom: "30px" }} /><br />
            <Box sx={{ bgcolor: '#cfe8fc', height: "10vh", width:"100%" }} textAlign="center"> Name Placeholder </Box>
            <Box sx={{ bgcolor: '#cfe8fc', height: "10vh", width:"100%", marginTop: "30px"}} textAlign="center"> University Placeholder </Box>
            <Button id="save-profile" variant="contained" type="submit" sx={{marginTop: "30px"}} onClick={() => {navigate("/editProfile")}}>Edit Profile</Button>
        </Stack>
    )
}

export default Profile;