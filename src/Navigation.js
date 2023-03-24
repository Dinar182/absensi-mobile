import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from  '../src/Home';
import History from '../src/History';
import Profile from '../src/Profile';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
    }} 
    />                                                                                                                                
      <Tab.Screen name="History" component={History} options={{
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={26} />
          ),
    }} 
    />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
    }} 
    />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation