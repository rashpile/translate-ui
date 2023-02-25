import React from "react";

const ConfigContext = React.createContext({
    config: {
        apiUrl: "http://localhost:3000",
        usageUrl: "http://localhost:3000",
        configUrl: "http://localhost:3000",
    },
    isLoading: true
});

export default ConfigContext;