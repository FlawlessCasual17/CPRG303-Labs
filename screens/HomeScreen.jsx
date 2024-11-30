import React from 'react'
import ToDoForm from '../components/ToDoForm'
import ToDoList from '../components/ToDoList'
import MainLayout from '../layouts/MainLayout'

export default function HomeScreen({ navigation }) {
    return (
        <MainLayout>
            <ToDoList tasks={tasks} />
            <Button title='Go to About' onPress={() => navigation.navigate('About')} />
            <ToDoForm addTask={addTask} />
        </MainLayout>
    )
}
