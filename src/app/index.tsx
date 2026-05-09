import { useState } from 'react'
import { Image, StyleSheet, Text, View, TextInput, Pressable } from 'react-native'

const HomeScreen = () => {
  const [name, setName] = useState("")
  return (
    <View>
      <Text>HomeScreen</Text>

      <Text numberOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti blanditiis mollitia enim ad minima corrupti eos iste id voluptatibus! Odio accusantium ex ipsam unde. Similique quaerat rem veniam incidunt!</Text>

      <Image source={{ uri: 'https://chaicode.com/assets/hitesh-piyush-dark-fpMoT6Mp.webp' }}
        width={200}
        height={200}
      />

      <Image source={require('@/assets/images/icon.png')} style={{ height: 30, width: 30 }} />

      <TextInput placeholderTextColor={"green"} placeholder='enter name' value={name} onChangeText={setName} style={{
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 30,
        fontSize: 24
      }} />

      <Pressable onPress={() => alert('button press')} style={
        ({ pressed }) => ({
          backgroundColor: pressed ? '#4a42d4' : "#6c63ff"
        })



      }
        hitSlop={{
          top: 10,
          left: 10,
          bottom: 10,
          right: 10
        }}
      >
        {({ pressed }) => pressed ? <Text>pressing....</Text> : <Text>press me</Text>}
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})