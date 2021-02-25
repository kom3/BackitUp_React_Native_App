import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";


const WidgetsBrick = () => {
    return (
        <View style={styles.parent}>
            <View style={styles.lwidget}>
                <Image style={styles.weathcons} source={require('../images/weather.png')} />
                <Text style={{ color: '#00618E', fontWeight: 'bold', fontSize: 8, textAlign: 'right' }}>Weather info</Text>
                <Text style={{ color: '#00618E', fontSize: 10, textAlign: 'right' }}>Cloudy <Text style={{ fontSize: 18 }}>30 &deg;C</Text></Text>
            </View>
            <View style={styles.rwidget}>
                <Image style={styles.remindercon} source={require('../images/reminder.png')} />
                <Text style={{ color: '#00618E', fontWeight: 'bold', fontSize: 8 }}>Prayer time</Text>
                <Text style={{ color: '#00618E', fontSize: 10 }}><Text style={{ fontSize: 18, color: '#00618E' }}>6:26</Text> Magrib</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        // backgroundColor: '#E785E0',
        alignItems: 'center',
        justifyContent: 'center'

    },
    lwidget: {
        borderRightColor: '#1D9DD9',
        borderRightWidth: 2,
        padding: 15,
    },
    rwidget: {
        padding: 15
    },
    weathcons: {
        height: 24,
        width: 24,
        left: 65

    },
    remindercon: {
        height: 24,
        width: 24,
    }
})

export default WidgetsBrick