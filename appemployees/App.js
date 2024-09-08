import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/View/Login';
import Home from './src/View/Home/Home';
import Welcome from './src/View/Welcome';
import WeatherDetail from './src/View/Home/Attendance/Weather/WeatherDetail';
import WeatherScreen from './src/View/Home/Attendance/Weather/WeatherScreen';
import AttendancePage1 from './src/View/Home/Attendance/AttendancePage1';
import AttendancePage2 from './src/View/Home/Attendance/AttendancePage2';
import AttendancePage3 from './src/View/Home/Attendance/AttendancePage3';
import NotificationTags from './src/View/Home/Options/Notification/NotificationsTags';
import NotificationScreen from './src/View/Home/Options/Notification/NotificationScreen';
import AmountSelectionScreen from './src/View/Home/Options/AmountSelectionScreen/AmountSelectionScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: '#fff',
            title: 'ERS',
            headerTitleAlign: 'left',
            headerLeft: () => null,
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: '#fff',
            title: 'ERS',
            headerTitleAlign: 'left',
            headerLeft: () => null,
          }}
        />

        <Stack.Screen
          name="WeatherScreen"
          component={WeatherScreen}
          options={{ title: 'Weather Screen' }}
        />

        <Stack.Screen
          name="WeatherDetail"
          component={WeatherDetail}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: '#fff',
            headerTitle: 'ERS', // This will hide the title
          }}
        />

        <Stack.Screen
          name="AttendancePage1"
          component={AttendancePage1}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AttendancePage2"
          component={AttendancePage2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AttendancePage3"
          component={AttendancePage3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationTags"
          component={NotificationTags}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: '#fff',
            headerTitle: 'ERS', // This will hide the title
          }}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: 'red' },
            headerTitleAlign: 'left',
          }}
        />
        <Stack.Screen
          name="AmountSelectionScreen"
          component={AmountSelectionScreen}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: '#fff',
            headerTitle: 'ERS', // This will hide the title
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
