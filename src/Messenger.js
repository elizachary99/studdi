import { Button, Stack } from "@mui/material"
import { useNavigate, useSearchParams } from "react-router-dom"

function Messenger(){

    const users = require("./users.json");
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");
    const matchedUser = users.filter(u => u.name == name);;

    const navigate = useNavigate()


    return(
        <Stack id="match-panel" direction="column" alignItems="center">
            <h2>{matchedUser[0].name}</h2><br />
        </Stack>
    )

}

export default Messenger