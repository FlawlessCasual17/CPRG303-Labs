import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useState } from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import AboutScreen from './screens/AboutScreen'
import HomeScreen from './screens/HomeScreen'

export default function App() {
    const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog'])

    const addTask = (taskText) => {
        setTasks([...tasks, taskText])
    }

    const Stack = createStackNavigator()

    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter }

    return (
        <NavigationContainer>
            <SafeAreaView style={backgroundStyle}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor} />
            </SafeAreaView>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='About' component={AboutScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
