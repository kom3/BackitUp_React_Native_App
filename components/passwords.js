import * as React from "react";
import { Keyboard, StyleSheet, View, Modal, Pressable, Text, Image, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, ScrollView, TextInput, ToastAndroid } from "react-native";



const PasswordsPage = ({ route, navigation }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    let textInput = {}
    let autoFocus = true

    const setTextInputRef = (element, i) => {
        console.log("setting reference for", i)
        textInput[i] = element;
        setTimeout(() => {
            if(autoFocus){
                focusTextInput(0)
                autoFocus = false
            }
        }, 50);
    };

    const focusTextInput = (i) => {
        try {
            textInput[i].focus();
        }
        catch (e) {
            console.log(e)
        }
    }
    return (<View>
        <View style={[styles.container, { zIndex: 0 }]}>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TextInput ref={(element) => { setTextInputRef(element, 0) }} style={styles.textinputfields} placeholder="Account"></TextInput>
                            <TextInput ref={(element) => { setTextInputRef(element, 1) }} style={styles.textinputfields} placeholder="Url"></TextInput>
                            <TextInput ref={(element) => { setTextInputRef(element, 2) }} style={styles.textinputfields} placeholder="Password"></TextInput>
                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                                <Pressable
                                    style={[styles.button, styles.buttonSaveClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Save</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonSaveClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Cancel</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
        <TouchableWithoutFeedback onPress={() => { setModalVisible(true); }}><View style={styles.floatbtn}><TouchableOpacity onPress={() => { setModalVisible(true); }}><Image style={styles.floatbtnicon} source={require('../images/add.png')} /></TouchableOpacity></View></TouchableWithoutFeedback>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        // alignItems:'center',
    },
    textinputfields: {
        borderColor: 'grey',
        borderWidth: 1,
        borderStyle: 'solid',
        width: '100%',
        height: 45,
        padding: 5,
        margin: 10,
        borderRadius: 5
    },
    floatbtnicon: {

        height: 35,
        width: 35,
        alignSelf: 'center',
    },
    floatbtn: {
        zIndex: 1,
        position: 'absolute',
        bottom: 25,
        right: 25,
        backgroundColor: "red",
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

    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //   marginTop: 0,
        height: '100%',
        width: '100%'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        height: '55%',
        width: '90%',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 80
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonSaveClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }

})


export default PasswordsPage