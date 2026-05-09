import { useState } from 'react'
import { Image, StyleSheet, Text, View, TextInput } from 'react-native'

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
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})