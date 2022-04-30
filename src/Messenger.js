import { Button, ButtonGroup, Stack, Box, TextField } from "@mui/material"
import { useNavigate, useSearchParams } from "react-router-dom"

function Messenger() {

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


    return (
        <Stack id="match-panel" direction="column" alignItems="center">
            <ButtonGroup variant="contained" sx={{ marginTop: "30px" }} aria-label="outlined primary button group">
                <Button onClick={() => { navigate("/matches") }} sx={{ color: "white", backgroundColor: "green" }}>Back</Button>
                <Button onClick={handleUnmatch} sx={{ color: "white", backgroundColor: "red" }}>Unmatch</Button>
                <Button onClick={() => { navigate("/report?id=" + (matchedUser[0].id)) }} sx={{ color: "white", backgroundColor: "gray" }}>Report</Button>
            </ButtonGroup>
            <h2>{matchedUser[0].name}</h2>
            <hr />
            <Box key={matchedUser[0].name} padding="5px" borderRadius="10px" justifyContent="center" sx={{ marginTop: "10px", marginBottom: "10px", bgcolor: "#cfe8fc" }}>
                <p>{matchedUser[0].reply}</p>
            </Box>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <TextField id="message" label='Send a message...' sx={{ m: 1, width: 250 }} /><br />
        </Stack>
    )

}

export default Messenger