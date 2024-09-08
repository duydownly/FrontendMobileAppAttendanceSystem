import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Attendance from './Attendance/Attendance';
import MonthScreen from './Month/MonthScreen';
import AccountScreen from './Account/Account';
import Options from './Options/Options'; // Import trang Options
import styles from './styles';

const Tab = createBottomTabNavigator();
export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Attendance"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Attendance') {
            iconName = 'clipboard-check'; // Chấm công icon
          } else if (route.name === 'Month') {
            iconName = 'calendar-month'; // Tháng icon
          } else if (route.name === 'Options') {
            iconName = 'cogs'; // Tùy chọn icon
          } else if (route.name === 'Account') {
            iconName = 'account-circle'; // Tài khoản icon
          } else {
            iconName = 'calendar-today'; // Default calendar icon
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen name="Attendance" component={Attendance} options={{ tabBarLabel: 'Chấm công', headerShown: false }} />
      <Tab.Screen name="Month" component={MonthScreen} options={{ tabBarLabel: 'Tháng', headerShown: false }} />
      <Tab.Screen name="Options" component={Options} options={{ tabBarLabel: 'Tùy chọn', headerShown: false }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{ tabBarLabel: 'Tài khoản', headerShown: false }} />
    </Tab.Navigator>
  );
}
