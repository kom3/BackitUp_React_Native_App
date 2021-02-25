import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableNativeFeedback } from "react-native";
import dataHandler from '../components/datahandler';


const NotesPage = ({ navigation }) => {

    // let [notesData, handleNotes] = React.useState({})
    let notesData = {
        "notesList": {
            "note_name1": { "content": "1" },
            "note_name2": { "content": "2" },
            "note_name3": { "content": "3" },
            "note_name4": { "content": "4" },
            "note_name5": { "content": "5" },
            "note_name6": { "content": "6" },
            "note_name7": { "content": "7" }
        }
    }
    let notesTitleList = Object.keys(notesData["notesList"])
    for(var i=0; i<notesTitleList.length; i++){
        let res = dataHandler("storeData", {"key":notesTitleList[i], "value":notesData["notesList"][notesTitleList[i]]["content"]})
    }

    return (<View>

        <View style={styles.container}>
            < NotesListGenerator notesData={notesData} navigation={navigation} />
        </View>
    </View>
    )
}



const NotesListGenerator = ({ notesData, navigation }) => {
    let notesTitleList = Object.keys(notesData["notesList"])
    if (notesTitleList.length != 0) {
        console.log("notes.js")

        return notesTitleList.map((notesTitle) => (
            <TouchableNativeFeedback onPress={() => navigation.navigate('noteview', {notesTitle})}><View style={styles.bookRow} ><Image style={styles.icon} source={require('../images/book.png')} /><Text style={styles.title}>{notesTitle}</Text></View></TouchableNativeFeedback>
        ));
    }
    else {
        return (
            <View style={{ height: '100%', width: '100%', alignItems: 'center' }}><Text style={{ fontSize: 18 }}>No notes available</Text></View>
        )
    }

}



const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        // backgroundColor: '#E785E0',
        padding: 15,
    },
    icon: {
        height: 35,
        width: 35,

    },
    bookRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: 'pink',
        borderBottomWidth: 1,
        height: 70
    },
    title: {
        marginLeft: 20
    }

})


export default NotesPage