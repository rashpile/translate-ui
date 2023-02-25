import { Button, Stack, TextField } from "@mui/material"
import { createRef } from "react";

type Props = {
    onTranslate: Function
    text: string
    translatedText: string
}
const TextArea = (props: Props) => {
    let inputTextEl = createRef<HTMLInputElement>();
    
    let rows = props.text.length / 40;
    rows = rows > 4 ? rows : 4;

    const translateHandler = () => {
        let textFieldValue = inputTextEl?.current?.value || "";
        console.log("Translate: " + textFieldValue);
        props.onTranslate(textFieldValue);
    }


    return (
        <Stack spacing={2} padding={2}>
            <TextField
                id="text-input"
                label="Text"
                multiline
                rows={4}
                inputRef={inputTextEl}
            />
            <Button onClick={translateHandler} variant="contained">Translate</Button>
            <TextField
                id="text-output"
                label="Translation"
                multiline
                rows={rows}
                value={props.translatedText}
            />
        </Stack>

    )
}

export default TextArea