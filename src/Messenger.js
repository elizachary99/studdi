import { Button, ButtonGroup, Stack, Box, TextField } from "@mui/material"
import { useNavigate, useSearchParams } from "react-router-dom"

function Messenger() {

    const users = require("./users.json");
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");
    const matchedUser = users.filter(u => u.name == name);;

    const navigate = useNavigate()

    const handleUnmatch = (e) => {
        window.swiped_left_users.push(window.matched_users.pop())
        navigate("/matches");
    }


    return (
        <Stack id="match-panel" direction="column" alignItems="center">
            <ButtonGroup variant="contained" sx={{ marginTop: "30px" }} aria-label="outlined primary button group">
                <Button onClick={() => {navigate("/matches")}} sx={{color:"black"}}>Back</Button>
                <Button onClick={handleUnmatch} sx={{color:"black"}}>Unmatch</Button>
                <Button onClick={() => {navigate("/report")}} sx={{color:"black"}}>Report</Button>
            </ButtonGroup>
            <h2>{matchedUser[0].name}</h2>
            <hr/>
            <br />
            <TextField id="message" label='Send a message...' sx={{ m: 1, width: 250}}/><br />
        </Stack>
    )

}

export default Messenger