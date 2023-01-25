import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { auth } from "../../../firebase";
import { button } from "../../../GlobalStyles";
// import Icon from "react-native-ico";

export const EventList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Event List" />
      </Appbar>
      <TouchableOpacity
        onPress={() => navigation.navigate("New Event")}
        style={[button]}
      >
        <Text style={styles.buttonText}>New Event</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("In-Progress Event")}
        style={[button]}
      >
        <Text style={styles.buttonText}>In-Progress Event</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Past Event")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Past Event</Text>
      </TouchableOpacity>
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
});