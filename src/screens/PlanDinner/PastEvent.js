import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { auth } from "../../../firebase";
import { button } from "../../../GlobalStyles";
import { FontFamily } from "../../../GlobalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";

export const PastEvent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Appbar>
        <Appbar.Content title="Past Event" />
      </Appbar> */}
      <View
        style={{
          width: "95%",
          height: "25%",
          justifyContent: "center",
          margin: "2%",
          // backgroundColor: "red",
        }}
      >
        <Ionicons
          name="arrow-back-circle"
          size={32}
          color="green"
          onPress={() => navigation.navigate("Event List")}
        />
        <Text style={styles.title}>Events List</Text>
        <Text style={styles.sectionTitle}>List of your past meals</Text>
      </View>
      <View
        style={{
          height: "60%",
          // backgroundColor: "red"
        }}
      ></View>
      <View
        style={{
          height: "10%",
          // backgroundColor: "blue"
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3FAD9",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: FontFamily.poppins,
    marginLeft: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 44,
    marginBottom: -5,
    fontFamily: FontFamily.ubuntubold,
    marginTop: 40,
  },
});
