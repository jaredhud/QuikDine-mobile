import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../../firebase";
import { button } from "../../GlobalStyles";
// import Icon from "react-native-ico";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      {/* <Text>Email: {auth.currentUser?.email}</Text> */}
      {/* <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginScreen")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreateEvent")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Create Calendar Event</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("BarCodeScanner")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Scan with Barcode</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("DashBoard")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Camera")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("SendEmail")}
        style={[button]}
      >
        
        <Text style={styles.buttonText}>Send Email</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Recipe")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Recipe</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("TestPage")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Test Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddIngredient")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Add Ingredients</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

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
