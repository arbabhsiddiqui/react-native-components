import { ScrollView, StyleSheet, Text, View, Button, Switch, FlatList, } from 'react-native'
import { useState } from 'react'

const HomeScreen = () => {
  const USERS = [
    { id: '1', name: 'Alice Johnson', role: 'Designer' },
    { id: '2', name: 'Bob Smith', role: 'Developer' },
    { id: '3', name: 'Carol White', role: 'Manager' },
    { id: '4', name: 'David Brown', role: 'Developer' },
    { id: '5', name: 'Eve Davis', role: 'Designer' },
  ];



  return (
    <FlatList
      data={USERS}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16, backgroundColor: 'green' }}
      renderItem={({ item }) => (
        <Text>{item.name}</Text>
      )}
      ItemSeparatorComponent={() => (<View style={{ height: 1, backgroundColor: "black" }} />)}

    />


  )
}

export default HomeScreen

const styles = StyleSheet.create({})