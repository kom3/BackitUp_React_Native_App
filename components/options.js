import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";


const OptionsBlock = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.flexbar}>
                <TouchableOpacity onPress={() => navigation.navigate('notes')}><View style={styles.iconbox}><View style={styles.outer}><Image style={styles.icon} source={require('../images/notes.png')} /></View><Text style={styles.icontext} >Notes</Text></View></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('reminders')}><View style={styles.iconbox}><View style={styles.outer}><Image style={styles.icon} source={require('../images/reminder.png')} /></View><Text style={styles.icontext} >Reminders</Text></View></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('world clock')}><View style={styles.iconbox}><View style={styles.outer}><Image style={styles.icon} source={require('../images/worldclock.png')} /></View><Text style={styles.icontext} >World clock</Text></View></TouchableOpacity>
            </View>
            <View style={styles.flexbar}>
                <TouchableOpacity onPress={() => navigation.navigate('passwords')}><View style={styles.iconbox}><View style={styles.outer}><Image style={styles.icon} source={require('../images/password.png')} /></View><Text style={styles.icontext} >Passwords</Text></View></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('calendars')}><View style={styles.iconbox}><View style={styles.outer}><Image style={styles.icon} source={require('../images/calendar1.png')} /></View><Text style={styles.icontext} >Calendars</Text></View></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('resume')}><View style={styles.iconbox}><View style={styles.outer}><Image style={styles.icon} source={require('../images/resume.png')} /></View><Text style={styles.icontext} >Resume</Text></View></TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '30%',
        width: '100%',
        // backgroundColor: '#E785E0',
        // padding: 25,
    },
    icon: {
        height: 35,
        width: 35,

    },
    icontext: {
        // fontFamily: 'roboto',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 0,
        color: '#00618E',
        opacity: 1,
        textAlign: 'center',
    },
    outer: {
        backgroundColor: '#1d9dd9',
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    flexbar: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,

    },
    iconbox: {
        alignItems: 'center',
        width: 100
    }
})
export default OptionsBlock