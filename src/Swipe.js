import { useState } from 'react'
import { Stack } from '@mui/material'
import { Cancel, CheckCircle } from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'

function Swipe(){

    const user_prefs = {
        "classes": ["ASTR 101", "BUSI 102", "POLI 236", "BIO 101"],
        "study-method": ["In person", "Online"],
        "pair-group": ["Pair", "Group"]
    }

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
        <Stack id="swipe-panel" direction="column" alignItems="center">
            <img id="user-pic" src={users[compatible_users[u]].profile_pic} alt={users[compatible_users[u]].name} style={{width: "50%"}} /><br />
            <div id="user-name">{users[compatible_users[u]].name}</div>
            <div id="user-desc">{users[compatible_users[u]].description}</div><br />
            <div id="classes">Classes:</div>
            <div id="user-classes">{users[compatible_users[u]].classes}</div><br />
            <div id="availability">Availability:</div>
            <div id="user-availability">placeholder</div><br />
            <div id="study-method">Study Method:</div>
            <div id="user-study-method">{users[compatible_users[u]]['study-method']}</div><br />
            <div id="pair-group">Pair or Group:</div>
            <div id="user-pair-group">{users[compatible_users[u]]['pair-group']}</div>
            <Stack id="swipe-icons" direction="row" spacing={10} >
                <Cancel id="swipe-left" sx={{color: "red"}} fontSize="large" onClick={swipeLeft} />
                <CheckCircle id="swipe-right" sx={{color:"green"}} fontSize="large" onClick={swipeRight} />
            </Stack>
        </Stack>
    )
}

export default Swipe