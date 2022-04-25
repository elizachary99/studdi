import { useState } from 'react'
import { Button, FormControl, Stack, TextField, Container, Box, ButtonGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import "./index.css"

function Matches() {

    const navigate = useNavigate()

    return (
        <Stack id="profile-panel" direction="column" alignItems="center">
            <h2>Matches</h2>
            <hr />
            <ButtonGroup variant="contained" sx={{ marginTop: "30px" }} aria-label="outlined primary button group">
                <Button onClick={() => { navigate("/swipe") }} sx={{ color: "black" }}>Swipe</Button>
                <Button>Matches</Button>
                <Button onClick={() => { navigate("/profile") }} sx={{ color: "black" }}>Profile</Button>
            </ButtonGroup>
        </Stack>
    )
}

export default Matches;