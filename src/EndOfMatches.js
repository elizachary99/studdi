import { Button, Stack } from "@mui/material";
import {useNavigate} from 'react-router-dom'

function EndOfMatches(){
    const navigate = useNavigate()
    return(
        <Stack>
            <div id="message">You have run out of potential matches based on your applied filters</div>
            <br />
            <Button id="broaden-search" onClick={() => {navigate("/editProfile")}} variant="contained">Broaden your search</Button>
        </Stack>
    )
}

export default EndOfMatches