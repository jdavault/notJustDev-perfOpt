/** @format */

import { StyleSheet, View, TextInput, Text, Button } from "react-native"
import React, { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState("")
  const decreaseCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <View>
      <TextInput style={styles.text} onChangeText={setName} value={name} placeholder="Enter Name" />
      <Button onPress={decreaseCounter} title="-" />
      <Button onPress={() => setCounter(counter + 1)} title="+" />
      <View>
        <Text>
          {name} has clicked {counter} times
        </Text>
      </View>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  text: {
    textAlign: "center"
  }
})
