import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import dataHandler from '../components/datahandler';



//Receiving props through navigation.navigate while moving from one screen to another
const NoteView =  ({ route, navigation }) => {
    const { notesTitle, otherParam } = route.params;
    var [Loading, changeLoaderSate] = React.useState(true)
    console.log("noteView.js", Loading)
    React.useEffect(() => {
        dataHandler("retrieveData", {"key":notesTitle, "callback":changeLoaderSate})
      })
    if(Loading == true){
        let notesData = "Loading..."
        return (<View>

            <View style={styles.footer}>
                <Text>{notesData}</Text>

            </View>
        </View>
        )
    }
    else{

        return (<View>

            <View style={styles.footer}>
                <Text>{Loading}</Text>

            </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    footer: {
        height: '100%',
        width: '100%',
        padding: 10
    }

})






export default NoteView