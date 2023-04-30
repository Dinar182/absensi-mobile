import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, Text } from 'react-native';
import Cuti from '../screen/cuti/Cuti';
import Home from '../screen/primary/Home';
import History from '../screen/primary/History';
import Profile from '../screen/primary/Profile';
import Cover from '../screen/splash/Cover';
import Login from '../screen/login/Login';
import CoverAbsen from '../screen/absen/Coverabsen';
import RekapAbsen from '../screen/rekapabsen/RekapAbsen';
import Izin from '../screen/izin/Izin';
import AbsenCheck from '../screen/absen/AbsenCheck';
import Gantipass from '../screen/password/Gantipass';
import HasilRekapAbsensi from '../screen/rekapabsen/HasilRekapAbsensi';
import GetHistory from '../screen/history/GetHistory';
import { fontApp } from './GlobalVar';

const StackScreen = createNativeStackNavigator();
const BottomScreen = createBottomTabNavigator();

const BottomTabScreen = ({ navigation, route }) => {
  return (
    <BottomScreen.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 75,
          borderTopEndRadius: 16,
          borderTopStartRadius: 16,
          backgroundColor: '#E6E6E6',
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      <BottomScreen.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  color: 'black',
                  opacity: focused ? 0.5 : 1,
                  fontFamily: fontApp.heebo[700],
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            );
          },
          tabBarIcon: ({ color, focused }) => {
            return (
              <Image
                source={require('../../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 45,
                  height: 57,
                  opacity: focused ? 0.5 : 1,
                }}
              />
            );
          },
        }}
      />
      <BottomScreen.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  color: 'black',
                  opacity: focused ? 0.5 : 1,
                  fontFamily: fontApp.heebo[700],
                  fontSize: 12,
                }}
              >
                History
              </Text>
            );
          },
          tabBarIcon: ({ color, focused }) => {
            return (
              <Image
                source={require('../../assets/history.png')}
                resizeMode="contain"
                style={{
                  width: 45,
                  height: 57,
                  opacity: focused ? 0.5 : 1,
                }}
              />
            );
          },
        }}
      />
      <BottomScreen.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return (
              <Text
                style={{
                  color: 'black',
                  opacity: focused ? 0.5 : 1,
                  fontFamily: fontApp.heebo[700],
                  fontSize: 12,
                }}
              >
                Profile
              </Text>
            );
          },
          tabBarIcon: ({ color, focused }) => {
            return (
              <Image
                source={require('../../assets/userhome.png')}
                resizeMode="contain"
                style={{
                  width: 45,
                  height: 57,
                  opacity: focused ? 0.5 : 1,
                }}
              />
            );
          },
        }}
      />
    </BottomScreen.Navigator>
  );
};

const RouteManager = () => {
  return (
    <NavigationContainer>
      <StackScreen.Navigator>
        <StackScreen.Screen
          name="Splash"
          component={Cover}
          options={{
            headerShown: false,
          }}
        />
        <StackScreen.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <StackScreen.Screen
          name="Main"
          component={BottomTabScreen}
          options={{
            headerShown: false,
          }}
        />

        <StackScreen.Screen
          name="AbsenScreen"
          component={CoverAbsen}
          options={{
            headerShown: false,
          }}
        />
        <StackScreen.Screen
          name="CutiScreen"
          component={Cuti}
          options={{
            headerShown: false,
          }}
        />
        <StackScreen.Screen
          name="RekapScreen"
          component={RekapAbsen}
          options={{
            headerShown: false,
          }}
        />
        <StackScreen.Screen
          name="IzinScreen"
          component={Izin}
          options={{
            headerShown: false,
          }}
        />
        <StackScreen.Screen
          name="AbsenCheck"
          component={AbsenCheck}
          initialParams={{
            stat: 0,
          }}
          options={{
            headerShown: false,
          }}
        />
        <StackScreen.Screen
          name="ChangePasword"
          component={Gantipass}
          initialParams={{
            stat: 0,
          }}
          options={{
            headerShown: false,
          }}
        />
        <StackScreen.Screen
          name="Rekap"
          component={HasilRekapAbsensi}
          initialParams={{
            dateStart: '',
            dateEnd: '',
          }}
          options={{
            headerShown: false,
          }}
        />
        <StackScreen.Screen
          name="GetHistory"
          component={GetHistory}
          initialParams={{
            statHistory: '',
          }}
          options={{
            headerShown: false,
          }}
        />
      </StackScreen.Navigator>
    </NavigationContainer>
  );
};

export default RouteManager;
