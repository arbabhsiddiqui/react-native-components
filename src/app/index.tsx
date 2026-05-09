import { Image, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text numberOfLines={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti blanditiis mollitia enim ad minima corrupti eos iste id voluptatibus! Odio accusantium ex ipsam unde. Similique quaerat rem veniam incidunt!</Text>
      <Image source={{ uri: 'https://chaicode.com/assets/hitesh-piyush-dark-fpMoT6Mp.webp' }}
        width={200}
        height={200}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})