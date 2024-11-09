import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    sectionContainer: { marginTop: 32, paddingHorizontal: 24 },
    sectionTitle: { fontSize: 24, fontWeight: '600' },
    sectionDescription: { marginTop: 8, fontSize: 18, fontWeight: '400' },
    highlight: { fontWeight: '700' }
})

export default function ToDoList({ tasks }) {
    return (
        <ScrollView>
            {[...tasks].map((task, index) => (
                <Pressable key={index}>
                    <View style={[styles.task]}>
                        <Text style={styles.taskText}>
                            {task}
                        </Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>
    )
}
