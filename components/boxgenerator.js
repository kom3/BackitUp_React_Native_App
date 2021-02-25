import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const BoxGenerator = (props) =>{
    let height = props.height;
    let width = props.width;
    console.log("Box generator called...")
    return(
        <View style={{height:height, width:width, backgroundColor:'red'}}>
            <View>{props.component}</View>
        </View>
    )
}

export default BoxGenerator