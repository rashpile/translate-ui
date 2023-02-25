import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material";
import { type } from "os";
import React from "react";

type Props = {
    onTargetLang: Function
    onSourceLang: Function
    targetLang: string
    sourceLang: string
}
const LanguageDialog = (props: Props) => {


    const [open, setOpen] = React.useState(false);
    const [targetLang, setTargetLang] = React.useState<string>(props.targetLang);
    const [sourceLang, setSourceLang] = React.useState<string>(props.sourceLang);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };
    const targetLangHandler = (event: SelectChangeEvent<typeof targetLang>) => {
        setTargetLang( event.target.value || '' );
        props.onTargetLang( event.target.value || '' )
    };
    const sourceLangHandler = (event: SelectChangeEvent<typeof sourceLang>) => {
        setSourceLang( event.target.value || '' );
        props.onSourceLang( event.target.value || '' )
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>{sourceLang}=&gt;{targetLang}</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Language: </DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel htmlFor="dialog-source-label">Source</InputLabel>
                            <Select
                                labelId="dialog-source-label"
                                value={sourceLang}
                                onChange={sourceLangHandler}
                                input={<OutlinedInput label="Source" />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="ru">Russian</MenuItem>
                                <MenuItem value="en">English</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="dialog-target-label">Target</InputLabel>
                            <Select
                                labelId="dialog-target-label"
                                id="demo-dialog-select"
                                value={targetLang}
                                onChange={targetLangHandler}
                                input={<OutlinedInput label="Target" />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="en">English</MenuItem>
                                <MenuItem value="ru">Russian</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default LanguageDialog;