import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";


const WelcomePage = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.welcm_img}
                source={require('../images/logo.png')}
            />
        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6fcff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    welcm_img: {
        height: 150,
        width: 150
    }
})



export default WelcomePage