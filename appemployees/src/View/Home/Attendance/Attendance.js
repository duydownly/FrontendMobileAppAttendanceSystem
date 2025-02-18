import React, { useState, useCallback, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import AttendancePage1 from './AttendancePage1';
import AttendancePage2 from './AttendancePage2';
import AttendancePage3 from './AttendancePage3'; // Import AttendancePage3
import timeManager from '../../../../TimeManager'; // Import TimeManager

const Stack = createStackNavigator();

const Attendance = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  // Function to fetch status from the API
  const fetchStatus = async () => {
    setLoading(true); // Set loading to true when starting to fetch data
    try {
      const employeeId = await AsyncStorage.getItem('employee_id');
      if (employeeId) {
        const response = await fetch(`https://backendapperss.onrender.com/employeestatuscurrendate?employee_id=${employeeId}`);
        if (response.ok) {
          const data = await response.json();
          setStatus(data.status);
        } else {
          console.error('Network response was not ok:', response.statusText);
        }
      } else {
        console.error('No employee_id found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error fetching status from API:', error);
    } finally {
      setLoading(false); // Set loading to false when data is fetched
    }
  };

  // Use useFocusEffect to fetch status when the screen gains focus
  useFocusEffect(
    useCallback(() => {
      fetchStatus();
    }, [])
  );

  // Function to reset the page at midnight
  const resetPageAtMidnight = () => {
    const now = timeManager.getCurrentTime();
    const midnight = now.clone().startOf('day').add(1, 'day');
    const timeToMidnight = midnight.diff(now);

    setTimeout(() => {
      fetchStatus(); // Fetch data again at midnight
      resetPageAtMidnight(); // Reset timer
    }, timeToMidnight);
  };

  // Start the timer when component mounts
  useEffect(() => {
    resetPageAtMidnight();
  }, []);

  return (
    <Stack.Navigator>
      {loading ? (
        <Stack.Screen
          name="Loading"
          options={{ headerShown: false }} // Ensuring the navbar is hidden
        />
      ) : status === 'Nửa' ? (
        <Stack.Screen
          name="AttendancePage3"
          component={AttendancePage3}
          options={{ headerShown: false }} // Ensuring the navbar is shown
        />
      ) : status === 'Đủ' ? (
        <Stack.Screen
          name="AttendancePage2"
          component={AttendancePage2}
          options={{ headerShown: false }} // Ensuring the navbar is shown
        />
      ) : status === 'nodata' ? (
        <>
          <Stack.Screen
            name="AttendancePage1"
            component={AttendancePage1}
            options={{ headerShown: false }} // Ensuring the navbar is shown
          />
          <Stack.Screen
            name="AttendancePage2"
            component={AttendancePage2}
            options={{ headerShown: false }} // Ensuring the navbar is shown
          />
          <Stack.Screen
            name="AttendancePage3"
            component={AttendancePage3}
            options={{ headerShown: false }} // Ensuring the navbar is shown
          />
        </>
      ) : null}
    </Stack.Navigator>
  );
};

export default Attendance;
