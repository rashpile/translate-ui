import { Button, Paper, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import ConfigContext from "../../store/config-context";

const Usage = () => {

    let configCtx = React.useContext(ConfigContext);

    let [usageText, setUsageText] = React.useState("")

    let handleClickOpen = () => {
        fetchUsageHandler()
    }

    function fetchUsageHandler() {
        fetch(configCtx.config.usageUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let usageText = "";
                for (let key in data.usage) {
                    usageText += data.usage[key].engine + " : " + data.usage[key].percent + "\n";
                }
                setUsageText(usageText);
            })
    }

    return (
        <Box sx={{ paddingTop: 3 }}>
            <Paper elevation={3}>
                <Stack spacing={2} padding={2}>
                    <div>
                        <h2>Usage</h2>
                        <p>{usageText}</p>
                        <Button onClick={handleClickOpen}>Refresh</Button>

                    </div>
                </Stack>
                
            </Paper>

        </Box>
    );


}

export default Usage;