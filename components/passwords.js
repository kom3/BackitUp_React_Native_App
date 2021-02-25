import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";


const PasswordsPage = () => {
    return (<View>
        
        <View style={styles.footer}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>PasswordsPage</Text>
           
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


export default PasswordsPage