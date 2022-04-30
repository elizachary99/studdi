import { Button, Stack, TextField } from "@mui/material"
import { useNavigate, useSearchParams } from "react-router-dom"

function Report(){

    const users = require("./users.json");
    const [searchParams, setSearchParams] = useSearchParams();
    const uid = searchParams.get("id");
    const matchedUser = users.filter(u => u.id == uid);

    const navigate = useNavigate()

    const handleUnmatch = (e) => {
        window.matched_users = window.matched_users.filter(u => u != matchedUser[0].id);
        window.swiped_left_users.push(matchedUser[0].id);
        navigate("/matches");
    }


    return(
        <Stack id="match-panel" direction="column" alignItems="center">
            <h2>Why do you want to report {matchedUser[0].name}?</h2><br />
            <img id="user-pic" src={matchedUser[0].profile_pic} alt={matchedUser[0].name} style={{width: "50%"}} /><br />
            <TextField id="report" label='Report' sx={{ m: 1, width: 250}}/><br />
            <Button id="report" variant="contained" sx={{backgroundColor:"red"}} onClick={handleUnmatch}>Report</Button>
            <Button id="cancel" variant="contained" sx={{backgroundColor:"gray"}} onClick={e => navigate("/matches")}>Cancel</Button>
        </Stack>
    )

}

export default Report;