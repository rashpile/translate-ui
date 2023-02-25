import { useContext, useState } from "react";
import ConfigContext from "../../store/config-context";
import TransalteForm from "./TranslateForm";

type TProps = {
    text: string,
    targetLang: string,
    sourceLang: string,
    engine: string
}
const Translate = () => {

    const configCtx = useContext(ConfigContext);
    const [translatedText, setTranslatedText] = useState("");
    const tp: TProps = {
        text: "",
        sourceLang: "en",
        targetLang: "ru",
        engine: "deepl"
    }


    function fetchTranslationHandler(props: TProps) {
        fetch(configCtx.config.apiUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    params: {
                        contents: [
                            props.text
                        ],
                        target: props.targetLang,
                        source: props.sourceLang,
                        engine: props.engine
                    }
                }
            )
        })
            .then(response => response.json())
            .then(data => {
                setTranslatedText(data.result[0]);
            })
    };

    const translateHanlder = (text: string) => {
        tp.text = text;
        fetchTranslationHandler(tp);
    }
    const changeEngineHandler = (engineName: string) => {
        tp.engine = engineName;
    }
    const targetLangHandler = (lang: string) => {
        tp.targetLang = lang;
    }
    const sourceLangHandler = (lang: string) => {
        tp.sourceLang = lang;
    }

    return (
        <TransalteForm
            onChangeEngine={changeEngineHandler}
            onTranslate={translateHanlder}
            onTargetLang={targetLangHandler}
            onSourceLang={sourceLangHandler}
            targetLang={tp.targetLang}
            sourceLang={tp.sourceLang}
            text={tp.text}
            translatedText={translatedText} />);
}

export default Translate;