import { Button, Stack } from "@mui/material"
import { useNavigate, useSearchParams } from "react-router-dom"

function Match(){

    const users = require("./users.json")
    const [searchParams, setSearchParams] = useSearchParams();
    const matchedUser = users[window.matched_users[window.matched_users.length-1]]

    const navigate = useNavigate()

    const keepSwiping = (e) => {
        const last = searchParams.get("last")
        if(last == "false") navigate("/swipe")
        else navigate("/endOfMatches")
    }

    const handleUnmatch = (e) => {
        window.swiped_left_users.push(window.matched_users.pop())
        keepSwiping(null)
    }

    return(
        <Stack id="match-panel" direction="column" alignItems="center">
            <div img="you-matched">You matched with {matchedUser.name}!</div><br />
            <img id="user-pic" src={matchedUser.profile_pic} alt={matchedUser.name} style={{width: "50%"}} /><br />
            <Button id="message" variant="contained" sx={{backgroundColor:"green"}} >Message</Button>
            <Button id="unmatch" variant="contained" sx={{backgroundColor:"red"}} onClick={handleUnmatch} >Unmatch</Button>
            <Button id="report" variant="contained" sx={{backgroundColor:"gray"}} onClick={e => navigate("/report")}>Report</Button>
            <br />
            <Button id="keep-swiping" variant="contained" onClick={keepSwiping} >Keep Swiping</Button>
        </Stack>
    )

}

export default Match