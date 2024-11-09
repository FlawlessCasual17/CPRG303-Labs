import React, { useState } from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

export default function App() {
    const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog'])

    const addTask = (taskText) => {
        setTasks([...tasks, taskText])
    }

    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor} />
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
        </SafeAreaView>
    )
}
