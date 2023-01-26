import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { auth } from "../../../firebase";
import { button } from "../../../GlobalStyles";
// import Icon from "react-native-ico";

export const NewEvent = (props) => {
  const navigation = useNavigation();
  const { selectedRecipesList } = props;

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="New Event" />
      </Appbar>
      <TouchableOpacity
        onPress={() => navigation.navigate("Event List")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Event List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Guest List")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Guest List</Text>
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
