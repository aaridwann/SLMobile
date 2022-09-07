import { View, Text } from 'react-native'
import React from 'react'
import AuthProvider from './src/Context/AuthContext'

const App = () => {
  return (
    <AuthProvider />
  )
}

export default App