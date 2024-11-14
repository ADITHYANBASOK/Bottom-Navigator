import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Profile from "../Screens/Profile";
import SecondScreen from "../Screens/SecondPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { themeColor, useTheme } from "react-native-rapi-ui";
import TabBarText from "../Components/TabBarText";
import TabBarIcon from "../Components/TabBarIcon";



const StackNavigator = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  const {isDarkmode}=useTheme() ;
  return (
    <Tabs.Navigator screenOptions={{headerShown:false,
      tabBarStyle:{
        borderTopColor:isDarkmode? themeColor.dark100 : "white",
        backgroundColor:isDarkmode? themeColor.dark100 : "white",
      }
    }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({focused}) =><TabBarText title="home"/>,
          tabBarIcon: ({focused}) =><TabBarIcon icon={"home"}/>
        }}
      />
      <Tabs.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: ({focused}) =><TabBarText title="home"/>,
          tabBarIcon: ({focused}) =><TabBarIcon icon={"information-circle"}/>
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({focused}) =><TabBarText title="profile"/>,
          tabBarIcon: ({focused}) =><TabBarIcon icon={"person"}/>
        }}
      />
    </Tabs.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{headerShown:false}}>
        <StackNavigator.Screen name="MainTabs" component={MainTabs} />
        <StackNavigator.Screen name="SecondScreen" component={SecondScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;