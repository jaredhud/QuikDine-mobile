import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../../firebase";
import { button } from "../../GlobalStyles";
// import Icon from "react-native-ico";

export const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text>Email: {auth.currentUser?.email}</Text> */}
      {/* <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Recipe Nav")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Recipes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Pantry Nav")}
        style={[button]}
      >
        <Text style={styles.buttonText}>My Pantry</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Plan Nav")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Plan a Meal</Text>
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
