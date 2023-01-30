import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import deleteIcon from "../img/delete.png";

const Ingredient = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      {/* <View style={styles.circular}></View> */}
      <Image
        // flex={1}
        source={deleteIcon}
        resizeMode="contain"
        style={{
          // marginTop: "-25%",
          marginLeft: "-15%",
          width: "170%",
          height: "170%",
        }}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
    fontSize: 18,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Ingredient;
