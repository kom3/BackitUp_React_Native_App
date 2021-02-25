import * as React from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";


import LandingHeader from './landingheader';
import Clock from './worldclock';
import WidgetsBrick from './widget';
import OptionsBlock from './options';
import FooterBar from './footer';

const LandingPage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <LandingHeader />
            <OptionsBlock navigation={navigation}/>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6fcff',
        backgroundColor: '#f6fcff',
        paddingTop: Platform.OS === 'android' ? 40 : 0
    },
})



export default LandingPage