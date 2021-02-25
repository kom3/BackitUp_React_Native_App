import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";


const RemindersPage = () => {
    return (<View>
        
        <View style={styles.footer}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>RemindersPage</Text>
           
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        height: '100%',
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
    }

})


export default RemindersPage