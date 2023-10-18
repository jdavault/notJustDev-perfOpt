import { StyleSheet, Text, FlatList, View } from 'react-native'
import React, { useState, useCallback, useMemo } from 'react'
import CoinItem from '../../components/CoinItem'
import cryptocurrencies from '../../assets/data/cryptocurrencies.json'
import styles from './styles'

const HomeScreen = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [title, setTitle] = useState('CryptoAssets')
  const [price, setPrice] = useState(0)

  const updateTitle = (cryptoName) => {
    for (let i = 0; i <= 10000000; i++) { }
    setTitle(cryptoName)
  }
  const memoizedTitle = useCallback((name) => updateTitle(name), [])

  //Callback will memorize or "memowize" the function "referentially" and avoid re-rendering
  //when the component that use it is called
  // const memoizedTitle = useCallback((name) => {
  //   //simulate long running logic (expensive function)
  //   for (let i = 0; i <= 10000000; i++) { }
  //   setTitle(name)
  // }, [])

  const multiplyPrice = () => {
    console.log("Function was called")
    for (let i = 0; i <= 10000000; i++) { }
    return (price * 10).toFixed(2)
  }

  const memoizedPrice = useMemo(() => multiplyPrice(), [price])

  // const memoizedPrice = useMemo(() => {
  //   console.log("Function was called")
  //   for (let i = 0; i <= 10000000; i++) { }
  //   return (price * 10).toFixed(2)
  // }, [price])


  return (
    <View>
      <View style={styles.titleContainer}>
        <Text
          style={[styles.title, { color: isGreen ? '#16c784' : 'white' }]}
          onPress={() => setIsGreen(!isGreen)}>
          {title}
        </Text>
        <Text style={styles.title}>{memoizedPrice}</Text>
      </View>
      <FlatList
        data={cryptocurrencies}
        renderItem={({ item }) =>
          <CoinItem
            marketCoin={item}
            setTitle={memoizedTitle}
            setPrice={setPrice}
          />
        }
      />
    </View>
  )
}

export default HomeScreen