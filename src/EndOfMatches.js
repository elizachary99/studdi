import { Button, Stack, ButtonGroup } from "@mui/material";
import {useNavigate} from 'react-router-dom'

function EndOfMatches(){
    const navigate = useNavigate()
    return(
        <Stack direction="column" alignItems="center">
            <div id="message">You have run out of potential matches based on your applied filters</div>
            <br />
            <Button id="broaden-search" onClick={() => {navigate("/editProfile")}} variant="contained">Broaden your search</Button>
            <ButtonGroup variant="contained" sx={{ marginTop: "30px" }} aria-label="outlined primary button group">
                <Button onClick={() => {navigate("/swipe")}}>Swipe</Button>
                <Button onClick={() => {navigate("/matches")}} sx={{color:"black"}}>Matches</Button>
                <Button onClick={() => {navigate("/profile")}} sx={{color:"black"}}>Profile</Button>
            </ButtonGroup>
        </Stack>
    )
}

export default EndOfMatches