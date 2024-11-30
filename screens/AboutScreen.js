import React from 'react'
import MainLayout from '../layouts/MainLayout'

export default function AboutScreen() {
    const currentDate = new Date().toLocaleDateString()

    return (
        <MainLayout>
            <h1>
                My React App
            </h1>
            <p>
                Created by: Kris
            </p>
            <p>
                Current Date: {currentDate}
            </p>
        </MainLayout>
    )
}
