import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400'
    },
    highlight: {
        fontWeight: '700'
    }
})

export default function ToDoList() {
    return (
        <ScrollView>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                    <Text style={styles.taskText}>Do laundry</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task]}>
                    <Text style={styles.taskText}>Go to gym</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                    <Text style={styles.taskText}>Walk dog</Text>
                </View>
            </Pressable>
        </ScrollView>
    )
}
