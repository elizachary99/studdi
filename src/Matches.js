import { useState } from 'react'
import { Button, Stack, makeStyles, Container, Box, ButtonGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Matches() {

    const navigate = useNavigate()

    const users = require("./users.json")

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const replies = ["How's class?", "Hey wassup", "Hey, what is your major?", "Hey, I guess we're a match", "Hey"]

    const messages = [{ user: "Addison A", matched: true, reply: replies[0] },
    { user: "Aida K", matched: true, reply: replies[1] },
    { user: "Cameron B", matched: true, reply: replies[2] },
    { user: "Rose H", matched: true, reply: replies[3] }]

    return (
        <Stack id="profile-panel" direction="column" alignItems="center">
            <h2>Matches</h2>
            <hr />
            <Container maxWidth="lg">
                {window.matched_users === undefined ? <></> : window.matched_users.map((m) => (
                    <Box key={users[m].name} borderRadius="10px" justifyContent="center" sx={{ marginTop: "10px", marginBottom: "10px", bgcolor: "#ededed" }}>
                        <Button onClick={e => navigate("/messenger?name=" + (users[m].name))}>{users[m].name}: {replies[getRandomInt(5)]}</Button>
                    </Box>
                ))}
            </Container>
            <ButtonGroup variant="contained" sx={{ marginTop: "30px" }} aria-label="outlined primary button group">
                <Button onClick={() => { navigate("/swipe") }} sx={{ color: "black" }}>Swipe</Button>
                <Button>Matches</Button>
                <Button onClick={() => { navigate("/profile") }} sx={{ color: "black" }}>Profile</Button>
            </ButtonGroup>
        </Stack>
    )
}

export default Matches;