import { StyleSheet, Text, View, Image } from "react-native"

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3
  },
  text: {
    color: "white",
    marginRight: 5
  },
  coinContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#282828",
    padding: 15,
  },
  rank: {
    fontWeight: "bold",
    color: "white"
  },
  rankContainer: {
    borderRadius: 5,
    paddingHorizontal: 5,
    backgroundColor: "#585858",
    marginRight: 5
  },
  image: {
    height: 30,
    width: 30,
    marginRight: 10,
    alignSelf: "center"
  }
})

export default styles