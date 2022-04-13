import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

import Main_Screen from './screens/Main_Screen';
import Programs_Screen from './screens/Programs_Screen';
import Request_Screen from './screens/Request_Screen';
import Courses_Screen from './screens/Courses_Screen';
import Math_Screen from './screens/Math_Screen';
import Faculty_Screen from './screens/Faculty_Screen';
import News_Screen from './screens/News_Screen';
import Robofest_Screen from './screens/Robofest_Screen';
import Support_Screen from './screens/Support_CME';
import Current_Screen from './screens/Current_Screen';
import Propesctive_Screen from './screens/Prospective_Screen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          swipeEnabled: true,
          gestureEnabled: true,
        }}>
        <Drawer.Screen name="Home" component={Main_Screen} />
        <Drawer.Screen name="Programs of Study" component={Programs_Screen} />
        <Drawer.Screen name="Courses" component={Courses_Screen} />
        <Drawer.Screen name="Request Information" component={Request_Screen} />
        <Drawer.Screen name="Math Core Curriculum" component={Math_Screen} />
        <Drawer.Screen name="CME Faculty" component={Faculty_Screen} />
        <Drawer.Screen name="News" component={News_Screen} />
        <Drawer.Screen name="Robofest" component={Robofest_Screen} />
        <Drawer.Screen name="Support CME" component={Support_Screen} />
        <Drawer.Screen name="For Current Students" component={Current_Screen} />
        <Drawer.Screen
          name="For Prospective Students"
          component={Propesctive_Screen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

//TODO: Launch Screen ak budem mat cas! https://stackoverflow.com/questions/34027270/ios-launch-screen-in-react-native
