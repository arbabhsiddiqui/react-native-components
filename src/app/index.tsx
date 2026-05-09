import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {

  const items = Array.from({ length: 200 }, (_, i) => `Item ${i + 1}`)

  return (
    <ScrollView>
      {items.map(item => (
        <Text key={item}>{item}</Text>
      ))}

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})