import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { auth } from "../../../firebase";
import { button } from "../../../GlobalStyles";
import { FontFamily } from "../../../GlobalStyles";
// import Icon from "react-native-ico";

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
          height: "30%",
          justifyContent: "center",
          margin: "2%",
        }}
      >
        <Text style={styles.title}>Events List</Text>
        <Text style={styles.sectionTitle}>List of your past meals</Text>
      </View>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Event List")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Event List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Voting Page")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Voting Page</Text>
      </TouchableOpacity> */}
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
