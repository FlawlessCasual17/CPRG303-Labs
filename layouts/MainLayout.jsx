import { Header } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function MainLayout({ children }) {
    return (
        <View style={styles.container}>
            <Header />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 20 } })
