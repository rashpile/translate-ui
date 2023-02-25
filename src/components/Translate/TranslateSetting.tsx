import { useContext, useEffect, useState } from "react";
import ConfigContext from "../../store/config-context";
import EngineOrder from "./EngineOrder"

const TranslateSetting = () => {

    const configCtx = useContext(ConfigContext);
    const [engineOrder, setEngineOrder] = useState( ["google", "deepl"] );

    function fetchEngineUpHandler(engine: string) {
        fetch(configCtx.config.configUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    up: engine.toLowerCase()
                }
            )
        })
            .then(response => {
                console.log("engine up: " + response.status)
                fetchOrderHandler();
            })
    };

    function fetchOrderHandler() {
        let usageUrl = configCtx.config.usageUrl;
        fetch(usageUrl)
            .then(response => response.json())
            .then(data => {
                let order = [];
                let i = 0;
                for (let key in data.usage) {
                    order[i++]=data.usage[key].engine
                }
                setEngineOrder(order);

            })
    }
    useEffect(() => { fetchOrderHandler() },[])

    function onEngineUp(engine: string) {
        fetchEngineUpHandler(engine);
    }

    return (
        <EngineOrder engineOrder={engineOrder} onEngineUp={onEngineUp} />
    )

}
export default TranslateSetting