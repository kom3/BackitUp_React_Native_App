import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableNativeFeedback} from "react-native";
import LandingPage from "./landing";

const LandingHeader = () => {
    let [syncState, syncSwitch] = React.useState(false)
    let syncImage = syncState ? require('../images/syncon.png') : require('../images/syncoff.png')
    return (
        <View style={styles.container}>
            <View style={styles.logoblock}>
                <Image
                    style={styles.logo}
                    source={require('../images/logo.png')}
                />
            </View>
            <TouchableNativeFeedback onPress={() => {syncState ? syncSwitch(false) : syncSwitch(true)}}>
            <View style={styles.icon}>
                    <Image
                        style={styles.cloud}
                        source={syncImage}
                    />
            </View>
            </TouchableNativeFeedback>
            <TouchableOpacity>
            <View style={{}}>
                <Image
                    style={styles.profilepic}
                    source={require('../images/userprofile.png')}
                />
            </View>
            </TouchableOpacity>
        </View>


    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '15%',
        width: '100%',
        alignItems: 'center',
        justifyContent:'space-between',
        padding:5
    },
    cloud: {
        height: 35,
        width: 35,
    },

    logo: {
        height: 36,
        width: 40.36,
    },
    icon: {
        width: 60,
        height: 60,
        justifyContent:'center',
        alignItems:'center',
    },
    profilepic: {
        width: 36,
        height: 36,
        // alignContent:''
    },
})


export default LandingHeader