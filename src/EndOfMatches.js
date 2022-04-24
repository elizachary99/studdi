import { Button, Stack } from "@mui/material";

function EndOfMatches(){
    return(
        <Stack>
            <div id="message">You have run out of potential matches based on your applied filters</div>
            <br />
            <Button id="broaden-search" variant="contained">Broaden your search</Button>
        </Stack>
    )
}

export default EndOfMatches