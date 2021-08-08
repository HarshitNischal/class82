import React, {Component} from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Feed from '../screens/Feed';
import CreateStory from "../screens/CreateStory";
import { RFValue } from 'react-native-responsive-fontsize';
import {StyleSheet} from 'react-native';

// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';

// (...)
const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=> {
  return (
    
      <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'CreateStory') {
              iconName = focused ? 'create' : 'create-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} style={styles.icon}/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreateStory" component={CreateStory} />
      </Tab.Navigator>
   
  );
}
const styles=StyleSheet.create({
  bottomTabStyle:{
    backgroundColor:"#2f345d",
    height:"8%",
borderTopLeftRadius:30,
borderTopRightRadius:30,
overflow:"hidden",
position:"absolute",
  },
  icons:{
    width:RFValue(30),
    height:RFValue(30),
  }
})
export default BottomTabNavigator