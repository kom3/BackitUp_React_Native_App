import * as React from "react";
import AsyncStorage from '@react-native-community/async-storage'


const dataHandler = (method, data) => {
    // console.log("Datahandler called")
    const storeData = async (data) => {
        let key = data["key"];
        let value = data["value"];
        try {
            await AsyncStorage.setItem(
                key,
                value
            );
        } catch (error) {
            return "failed"
        }
    };

    const retrieveData = async (data) => {
        let key = data["key"];
        let callback = data["callback"]
        console.log("in retrieve function received key:", key);
        try {
            content = await AsyncStorage.getItem(key);
            console.log("in retrieve function fetched value is:", content);
            callback(content)
        } catch (error) {
            return "failed"
        }
    };

    if (method == "storeData") {
         storeData(data)
        
    }
    else if (method == "retrieveData") {
         retrieveData(data)
        
    }
}

export default dataHandler;