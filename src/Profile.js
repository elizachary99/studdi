import { useState } from 'react'
import { Button, FormControl, Stack, TextField, Container, Box, ButtonGroup, Grid} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import "./index.css"

function Profile() {

    const navigate = useNavigate()

    return (
        <Stack id="profile-panel" direction="column" alignItems="center">
            <h2>User Profile</h2>
            <hr />
            <img id="user-pic" src={"./profile_pics/placeholder.png"} alt={"placeholder"} style={{ width: "100%", marginTop: "30px", marginBottom: "30px" }} /><br />
            <Box sx={{ bgcolor: '#cfe8fc', height: "10vh", width: "100%" }} borderRadius="10px" textAlign="center"> {window.preferences.firstName} {window.preferences.lastName} </Box>
            <Box sx={{ bgcolor: '#cfe8fc', height: "10vh", width: "100%", marginTop: "30px" }} borderRadius="10px" textAlign="center"> University of North Carolina Chapel Hill </Box>
            <Button id="save-profile" variant="contained" type="submit" sx={{ marginTop: "30px" }} borderRadius="10px" onClick={() => { navigate("/editProfile") }}>Edit Profile</Button>
            <ButtonGroup variant="contained" sx={{ marginTop: "30px" }} aria-label="outlined primary button group">
                <Button onClick={() => {navigate("/swipe")}} sx={{color:"black"}}>Swipe</Button>
                <Button onClick={() => {navigate("/matches")}} sx={{color:"black"}}>Matches</Button>
                <Button>Profile</Button>
            </ButtonGroup>
        </Stack>
    )
}

export default Profile;