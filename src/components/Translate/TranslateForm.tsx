import { Box, Button, Paper, Stack } from "@mui/material";
import { ReactNode, useContext } from "react";
import ConfigContext from "../../store/config-context";
import EngineOrder from "./EngineOrder";
import EngineToggle from "./EngineToggle";
import LanguageDialog from "./LanguagesDialog";
import TextArea from "./TextArea";
import TranslateSetting from "./TranslateSetting";
import Usage from "./Usage";

type Props = {
    children?: ReactNode,
    onChangeEngine: Function,
    defaultEngine?: string,
    onTranslate: Function,
    onTargetLang: Function,
    onSourceLang: Function
    targetLang: string
    sourceLang: string
    text: string
    translatedText: string
}

export default function TransalteForm(props: Props) {
    const configCtx = useContext(ConfigContext);

    const defaultEngine = "deepl";

    return (
        <Box sx={{ paddingTop: 5 }}>
            <Paper elevation={3}>
                <Stack spacing={2} padding={2}>
                    <div>
                        <h1>Translate</h1>
                        <LanguageDialog
                            onTargetLang={props.onTargetLang}
                            onSourceLang={props.onSourceLang}
                            targetLang={props.targetLang}
                            sourceLang={props.sourceLang}
                        />
                    </div>
                    <TextArea
                        onTranslate={props.onTranslate}
                        text={props.text}
                        translatedText={props.translatedText} />
                </Stack>
            </Paper>
            <EngineToggle
                onChangeEngine={props.onChangeEngine}
                defaultEngine={props.defaultEngine || defaultEngine} />
            <Usage />
            {configCtx.isLoading?<div>Loading...</div>:<TranslateSetting/>}
        </Box>

    );

}
