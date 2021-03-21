import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableNativeFeedback, ScrollView, SafeAreaView, TouchableOpacity} from "react-native";
import { act } from "react-test-renderer";
import dataHandler from '../components/datahandler';
import { useIsFocused } from '@react-navigation/native';


const NotesPage = ({route, navigation }) => {
    const isFocused = useIsFocused();
    let [notesList, handleNotes] = React.useState(false)

    React.useEffect(() => {
        handleNotes(false)
        console.log("Refresh notes...")

    },[isFocused]);

    
    // let notesListdata = {
    //         "note_name1": { "content": "1" },
    //         "note_name2": { "content": "2" },
    //         "note_name3": { "content": "3" },
    //         "note_name4": { "content": "4" },
    //         "note_name5": { "content": "5" },
    //         "note_name6": { "content": "6" },
    //         "note_name7": { "content": "7" },
    //         "note_name8": { "content": "1" },
    //         "note_name9": { "content": "2" },
    //         "note_name10": { "content": "3" },
    //         "note_name11": { "content": "4" },
    //         "note_name12": { "content": "5" },
    //         "note_name13": { "content": "6" },
    //         "note_name14": { "content": "7" },
    //         "note_name15": { "content": "1" },
    //         "note_name16": { "content": "2" },
    //         "note_name17": { "content": "3" },
    //         "note_name18": { "content": "4" },
    //         "note_name19": { "content": "5" },
    //         "note_name20": { "content": "6" },
    //         "note_name21": { "content": "7" }
    //     }

    // dataHandler("storeData", { "key": "notesList", "value": JSON.stringify(notesListdata) })

    if (notesList == false){
        dataHandler("retrieveData", { "key": "notesList", "callback":handleNotes})
        // console.log("Updated note list", notesList, typeof(notesList))
        
        return(
            <Text>Loading...</Text>
        )
    } 

    else{
        // console.log("Updated not list", notesList, typeof(notesList))
        if(typeof(notesList) == "string" ){
            handleNotes(JSON.parse(notesList))
        }
    return (<View>
        <SafeAreaView>
        <View style={styles.container}>
            <ScrollView>
                <NotesListGenerator notesList={notesList} navigation={navigation} />
            </ScrollView>
            </View>
        </SafeAreaView>
        <View style={styles.floatbtn}><TouchableOpacity onPress={() => navigation.navigate('newnote', {})}><Image style={styles.floatbtnicon} source={require('../images/create_notes.png')} /></TouchableOpacity></View>
    </View>
    )
    }
}



const NotesListGenerator = ({ notesList, navigation }) => {
    if (notesList != null){
        let notesTitleList = Object.keys(notesList)
    if (notesTitleList.length != 0) {

        return notesTitleList.map((notesTitle) => (
            <TouchableNativeFeedback key={notesTitle} onPress={() => navigation.navigate('newnote', { notesTitle, content:notesList[notesTitle]["content"] })}><View style={styles.bookRow} ><Image style={styles.icon} source={require('../images/book.png')} /><Text style={styles.title}>{notesTitle}</Text></View></TouchableNativeFeedback>
        ));
    }
    else {
        return (
            <View style={{ height: '100%', width: '100%', alignItems: 'center' }}><Text style={{ fontSize: 18 }}>No notes available</Text></View>
        )
    }
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
        justifyContent:'center',
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
    },
    floatbtnicon: {

        height: 35,
        width: 35,
        alignSelf: 'center',



    },
    floatbtn: {
        position: 'absolute',
        bottom:25,
        right: 25,
        backgroundColor: "red",
        height: 60,
        width: 60,
        padding: 5,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        overflow:'visible',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
        


    }

})


export default NotesPage