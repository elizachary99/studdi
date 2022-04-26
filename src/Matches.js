import { useState } from 'react'
import { Button, Stack, makeStyles, Container, Box, ButtonGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Matches() {

    const navigate = useNavigate()

    const replies = ["How's class?", "Hey wassup", "Hey, what is your major?", "Hey", "Hey, I guess we're a match"]

    const messages = [{user:"Addison A", matched:true, reply: replies[getRandomInt(5)]}, 
                        {user:"Aida K", matched:true, reply: replies[getRandomInt(5)]}, 
                            {user:"Cameron B", matched:true, reply: replies[getRandomInt(5)]}, 
                                {user:"Rose H", matched:true, reply: replies[getRandomInt(5)]}]


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }      

    return (
        <Stack id="profile-panel" direction="column" alignItems="center">
            <h2>Matches</h2>
            <hr />
            <Container maxWidth="sm" sx={{height:"75vh"}}>
                {messages.map((m)=>(
                    <Box borderRadius="10px" justifyContent="center" sx={{marginTop:"10px", marginBottom:"10px", bgcolor:"#ededed"}}>
                        <Button>{m.user}: {m.reply}</Button>
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