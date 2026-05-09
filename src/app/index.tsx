import { ScrollView, StyleSheet, Text, View, Button, Switch } from 'react-native'
import React, { useState } from 'react'

const HomeScreen = () => {

  const items = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`)
  const [isDark, setIsDark] = useState(false);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#aaa", padding: 2 }} contentContainerStyle={
      {
        padding: 16,
        alignItems: "center"
      }
    }>
      {
        items.map(item => (
          <View
            key={item}
            style={{
              backgroundColor: 'white',
              padding: 16,
              borderRadius: 10,
              marginBottom: 10,
              shadowColor: '#000',
              shadowOpacity: 0.05,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text style={{ fontSize: 16 }}>{item}</Text>
          </View>

        ))
      }
      <Button title="Hello i am button" color={"green"} onPress={() => alert("hello world")} />

      <Switch value={isDark} onValueChange={setIsDark} trackColor={{ false: "#ddd", true: "rgb(244, 240, 11)" }} thumbColor={'purple'} />
    </ScrollView >
  )
}

export default HomeScreen

const styles = StyleSheet.create({})