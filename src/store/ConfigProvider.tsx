import { useState } from "react";
import ConfigContext from "./config-context"
const ConfigProvider = (props:any) => {
    const [isLoading, setIsLoading] = useState(true);
    const configContext = {
        config:{
            apiUrl: "http://localhost:3000",
            usageUrl: "http://localhost:3000",
            configUrl: "http://localhost:3000",
            
        },
        isLoading: true
    };
    const [config, setConfig] = useState(configContext);

    const fetchConfigData = async ( dataHandler: Function )  => {
        const response = await fetch('/config.json');
        const json = await response.json();
        dataHandler(json);
    };

    fetchConfigData( (data: any) => {
        if(config.isLoading){
            setConfig({ config: data.config, isLoading: false });
        }
    });

    return  <ConfigContext.Provider value={config}>
            {config.isLoading ? <div>Loading...</div>: props.children}
        </ConfigContext.Provider>
    
    
}

export default ConfigProvider;