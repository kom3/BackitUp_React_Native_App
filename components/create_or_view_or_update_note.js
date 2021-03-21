import * as React from "react";
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity, ToastAndroid } from "react-native";
import { WebView } from 'react-native-webview'
import dataHandler from './datahandler';
import RichTextEditorToolBar from './rich_text_editor_toolbar'
import AsyncStorage from '@react-native-community/async-storage'


//Receiving props through navigation.navigate while moving from one screen to another
const CreateNoteView = ({ route, navigation }) => {
    const { notesTitle, content, otherParam } = route.params;
    let [title, handleTitle] = React.useState("")
    let [notedata, handleNotedata] = React.useState("")


    if (notesTitle != undefined) {
        // navigation.setOptions({ title: 'View/Edit' })
        let oldTitle = notesTitle
        return (<View>
            <View style={styles.container}>
                <TextInput name="notetitle"  style={{ height: 50, borderColor: 'gray', borderBottomWidth: 7, padding: 10, borderBottomColor: '#fff',  fontSize:25}} placeholder="Note title...">{notesTitle}</TextInput>
                <ScrollView><TextInput name="notedata" style={{ minHeight: 1000, overflow: 'scroll', textAlignVertical: 'top', top: 5, padding: 10 }} multiline={true} numberOfLines={1000000000} placeholder="start writting...">{content}</TextInput></ScrollView>
            </View>
            <View style={styles.floatbtn}><TouchableOpacity onPress={() => console.log("saving......")}><Image style={styles.floatbtnicon} source={require('../images/save.png')} /></TouchableOpacity></View>
        </View>)
    }
    else {
        // navigation.setOptions({ title: 'New' })
        return (<View>
            <View style={styles.container}>
                <TextInput onChangeText={(title) => { handleTitle(title) }} style={{ height: 50, borderColor: 'gray', borderBottomWidth: 7, padding: 10, borderBottomColor: '#fff' }} placeholder="Note title..."></TextInput>
                <ScrollView><TextInput onChangeText={(content) => { handleNotedata(content) }} style={{ minHeight: 1000, overflow: 'scroll', textAlignVertical: 'top', top: 5, padding: 10 }} multiline={true} numberOfLines={1000000000} placeholder="start writting..."></TextInput></ScrollView>
            </View>
            <View style={styles.floatbtn}><TouchableOpacity onPress={() => saveNoteToDB(title, notedata, navigation)}><Image style={styles.floatbtnicon} source={require('../images/save.png')} /></TouchableOpacity></View>
        </View>)
    }

}

const saveNoteToDB = (title, notedata, navigation) => {

    console.log("saving.....")
    ToastAndroid.show("Saving...", ToastAndroid.SHORT);
    console.log("title:", title)
    // dataHandler("storeData", { "key": "notesList["+title+"]", "value": notedata })
    _retrieveFirstThenSaveData(title, notedata, navigation)
}

const _retrieveFirstThenSaveData = async (title, notedata, navigation) => {

    AsyncStorage.getItem('notesList')
        .then(data => {
            if (data != null){
            data = JSON.parse(data);
            data[title] = { "content": notedata }
            AsyncStorage.setItem('notesList', JSON.stringify(data));

        }
        else{
            initial_note = {}
            initial_note[title] = { "content": notedata }
            AsyncStorage.setItem('notesList', JSON.stringify(initial_note));

        }
        })
        .then(() => { navigation.navigate('notes') });
};

const readNoteContentFromDB = () => {

    dataHandler("retrieveData", { "key": "note_name1", "value": text })

    // _retrieveData()
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        padding: 10,
    },
    floatbtnicon: {

        height: 35,
        width: 35,
        alignSelf: 'center',



    },
    floatbtn: {
        position: 'absolute',
        bottom: 25,
        right: 25,
        backgroundColor: "green",
        height: 60,
        width: 60,
        padding: 5,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5



    }


})






export default CreateNoteView