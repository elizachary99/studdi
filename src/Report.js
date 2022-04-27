import { Button, Stack, TextField } from "@mui/material"
import { useNavigate, useSearchParams } from "react-router-dom"

function Report(){

    const users = require("./users.json")
    const matchedUser = users[window.matched_users[window.matched_users.length-1]]

    const navigate = useNavigate()

    const handleUnmatch = (e) => {
        window.swiped_left_users.push(window.matched_users.pop())
        navigate("/matches");
    }


    return(
        <Stack id="match-panel" direction="column" alignItems="center">
            <div img="you-matched">Why do you want to report {matchedUser.name}?</div><br />
            <img id="user-pic" src={matchedUser.profile_pic} alt={matchedUser.name} style={{width: "50%"}} /><br />
            <TextField id="report" label='Report' sx={{ m: 1, width: 250 }} /><br />
            <Button id="report" variant="contained" sx={{backgroundColor:"red"}} onClick={handleUnmatch}>Report</Button>
            <Button id="cancel" variant="contained" sx={{backgroundColor:"gray"}} onClick={navigate("/matches")}>Cancel</Button>
        </Stack>
    )

}

export default Report;