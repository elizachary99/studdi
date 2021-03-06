import { useState, useEffect } from 'react'
import { Stack, ButtonGroup, Button} from '@mui/material'
import { Cancel, CheckCircle} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import { padding } from '@mui/system'
import './Swipe.css';

function Swipe(){

    const user_prefs = window.preferences

    var compatible_users = []
    const users = require("./users.json")

    for(const user of users){
        if(user_prefs.classes.some(i => user.classes.includes(i)) 
            && user_prefs.classes.some(i => user.classes.includes(i)) 
            && user_prefs.classes.some(i => user.classes.includes(i))
            && !window.matched_users.includes(user.id)
            && !window.swiped_left_users.includes(user.id)){
            compatible_users.push(user.id)
        }
    }

    const navigate = useNavigate()

    useEffect(() => {
        if(compatible_users.length === 0){
            navigate("/endOfMatches")
        }
    })

    const [u, setDisplayedUser] = useState(0)

    const swipeLeft = (e) => {
        window.swiped_left_users.push(compatible_users[u])
        if(u+1 < compatible_users.length) navigate("/swipe")
        else navigate("/endOfMatches")
    }

    const swipeRight = (e) => {
        window.matched_users.push(compatible_users[u])
        navigate("/match?last=" + (u+1 == compatible_users.length))
    }

    return(
        compatible_users.length > 0 ? <Stack id="swipe-panel" direction="column" alignItems="center">
            <img id="user-pic" src={users[compatible_users[u]].profile_pic} alt={users[compatible_users[u]].name} style={{width: "50%", marginTop:"30px"}} /><br />
            <div id="user-name"><strong>{users[compatible_users[u]].name}</strong></div>
            <div id="user-desc" class="userInput">{users[compatible_users[u]].description}</div><br />
            <div id="classes"><strong>Classes:</strong></div>
            <div id="user-classes" class="userInput">{users[compatible_users[u]].classes.map((m,ix)=> ix==users[compatible_users[u]].classes.length-1 ? <>{m}</> : <>{m}, </>)}</div><br />
            <div id="availability"><strong>Availability:</strong></div>
            <div id="user-availability" class="userInput">{users[compatible_users[u]].availability.map((m,ix)=> ix==users[compatible_users[u]].availability.length-1 ? <>{m}</> : <>{m}, </>)}</div><br />
            <div id="study-method"><strong>Study Method:</strong></div>
            <div id="user-study-method" class="userInput">{users[compatible_users[u]]['study-method'].map((m,ix)=> ix==users[compatible_users[u]]['study-method'].length-1 ? <>{m}</> : <>{m} or  </>)}</div><br />
            <div id="pair-group"><strong>Pair or Group:</strong></div>
            <div id="user-pair-group" class="userInput">{users[compatible_users[u]]['pair-group'].map((m,ix)=> ix==users[compatible_users[u]]['pair-group'].length-1 ? <>{m}</> : <>{m} or  </>)}</div>
            <Stack id="swipe-icons" direction="row" spacing={10} >
                <Cancel id="swipe-left" sx={{color: "red"}} fontSize="large" onClick={swipeLeft} />
                <CheckCircle id="swipe-right" sx={{color:"green"}} fontSize="large" onClick={swipeRight} />
            </Stack>
            <ButtonGroup variant="contained" sx={{ marginTop: "30px" }} aria-label="outlined primary button group">
                <Button onClick={() => {navigate("/swipe")}}>Swipe</Button>
                <Button onClick={() => {navigate("/matches")}} sx={{color:"black"}}>Matches</Button>
                <Button onClick={() => {navigate("/profile")}} sx={{color:"black"}}>Profile</Button>
            </ButtonGroup>
        </Stack>
        : <div></div>
    )
}

export default Swipe