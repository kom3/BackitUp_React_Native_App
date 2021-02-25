import 'react-native-gesture-handler';
import * as React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import WelcomePage from './components/welcome';
import LandingPage from './components/landing';
import NotesPage from './components/notes';
import RemindersPage from './components/reminders';
import WorldsClockPage from './components/worldclock';
import PasswordsPage from './components/passwords';
import CalendarsPage from './components/calendars';
import ResumePage from './components/resume';
import NoteView from './components/noteview';

export default function App() {
  let [timerflag, timerhandler] = React.useState({ timer: true });

  React.useEffect(() => {
    setTimeout(() => {
      timerhandler({ timer: false })
    }, 1000);
  })

  const Stack = createStackNavigator();

  if (timerflag['timer'] == true) {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <WelcomePage />
      </View>
    );
  }
  else {
    return (
      // <LandingPage />
      //  to hide the page header in all pages use screenOptions={{headerShown: false}} in <Stack.Navigator> 

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="landing"
            component={LandingPage}
          />
          <Stack.Screen name="notes" component={NotesPage} />
          <Stack.Screen name="reminders" component={RemindersPage} />
          <Stack.Screen name="world clock" component={WorldsClockPage} />
          <Stack.Screen name="passwords" component={PasswordsPage} />
          <Stack.Screen name="calendars" component={CalendarsPage} />
          <Stack.Screen name="resume" component={ResumePage} />
          <Stack.Screen name="noteview">
          {props => <NoteView {...props}  />}

          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>


    );
  }
}
