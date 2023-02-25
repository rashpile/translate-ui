
const Utils = () => {

    const fetchConfigData = async ( dataHandler: Function )  => {
        const response = await fetch('/config.json');
        const json = await response.json();
        dataHandler(json);
    };

};
export default Utils;