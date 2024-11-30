import React from 'react'
import { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const styles = StyleSheet.create({
    sectionContainer: { marginTop: 32, paddingHorizontal: 24 },
    sectionTitle: { fontSize: 24, fontWeight: '600' },
    sectionDescription: { marginTop: 8, fontSize: 18, fontWeight: '400' },
    highlight: { fontWeight: '700' }
})

export default function ToDoForm({ addTask }) {
    const [taskText, setTaskText] = useState('')

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='Add a new task...'
                onChangeText={(text) => setTaskText(text)}
                value={taskText} />
            <Button title='Add Task' onPress={() => addTask(taskText)} />
        </View>
    )
}
