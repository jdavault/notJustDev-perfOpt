/** @format */

import { Text, View, Image, Pressable } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import styles from "./styles"
import { memo } from "react"

const CoinItem = ({ marketCoin, setTitle, setPrice }) => {
  console.log("Coin Item Rendered")
  const {
    name,
    symbol,
    market_cap,
    market_cap_rank,
    current_price,
    price_change_percentage_24h,
    image
  } = marketCoin
  const tickerSymbol = symbol ? symbol.toUpperCase() : "NA"
  const currentPrice = current_price.toFixed(2)
  const priceChangePercentage24h = price_change_percentage_24h.toFixed(2)

  const percentageColor = price_change_percentage_24h < 0 ? "#ea3943" : "#16c784"

  const normalizeMarketCap = marketCap => {
    if (marketCap > 1_000_000_000_000) {
      return `${(marketCap / 1_000_000_000_000).toFixed(3)} T`
    }
    if (marketCap > 1_000_000_000) {
      return `${(marketCap / 1_000_000_000).toFixed(3)} B`
    }
    if (marketCap > 1_000_000) {
      return `${(marketCap / 1_000_000).toFixed(3)} M`
    }
    if (marketCap > 1_000) {
      return `${(marketCap / 1_000).toFixed(3)} K`
    }
    return marketCap
  }

  return (
    <Pressable onPress={() => setPrice(current_price)} style={styles.coinContainer}>
      <Image style={styles.image} source={{ uri: image }} />
      <View>
        <Text style={styles.title} onPress={() => setTitle(name)}>
          {name}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{tickerSymbol}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={12}
            color={percentageColor}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={{ color: percentageColor }}>{priceChangePercentage24h}%</Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>{currentPrice}</Text>
        <Text style={{ color: "white" }}>MCap {normalizeMarketCap(market_cap)}</Text>
      </View>
    </Pressable>
  )
}

export default memo(CoinItem)
