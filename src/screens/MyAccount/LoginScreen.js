import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
//import { auth } from "../../firebase";
import { processFontFamily } from "expo-font";
import { colors, FontFamily } from "../../../GlobalStyles.js";
import chefGreg from "../../img/chef-greg.png";
import chefGreg2 from "../../img/chef-greg2.png";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import AppContext from "../../Context/AppContext.js";
import { createDBEvent } from "../../Context/globalFunctions.js";

const auth = getAuth();

const LoginScreen = () => {
  const [tempEmail, setTempEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const { setEmail, setUser, setIsLoggedIn } = useContext(AppContext);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, tempEmail, password)
      .then((userCredentials) => {
        setUser(userCredentials.user.uid);
        setEmail(userCredentials.user.email);
        setIsLoggedIn(true);
        navigation.navigate("Profile Page");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={{ alignItems: "center", width: "90%", height: "90%" }}>
        <Text style={styles.titleHome}>Welcome Back!</Text>
        <Image
          source={chefGreg2}
          resizeMode="cover"
          style={{
            width: "80%",
            height: "40%",
            borderColor: "#379540",
            borderRadius: 30,
            borderWidth: 10,
            // borderStartWidth: 10,
            marginTop: "10%",

            padding: 0,
          }}
        ></Image>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email ID"
          value={tempEmail}
          onChangeText={(text) => setTempEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View>
        <Text
          onPress={() => navigation.navigate("Register")}
          style={{
            fontFamily: FontFamily.ubuntubold,
            color: "#46ADA1",
            marginTop: "5%",
            marginBottom: "-5%",
          }}
        >
          Forgot Password?
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={{ paddingTop: 15 }}>
          <Text>
            <Text>Don’t have an account? </Text>
            <Text
              onPress={() => navigation.navigate("Register")}
              style={{ fontFamily: FontFamily.ubuntubold, color: "#46ADA1" }}
            >
              Sign Up
            </Text>
          </Text>
        </View>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("RegisterPage")}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Registers</Text>
        </TouchableOpacity> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  parentView: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightgreen,
  },
  inputContainer: {
    marginTop: "-85%",
    marginBottom: "0%",
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: colors.darkgreen,

    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#379540",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#379540",
    fontWeight: "700",
    fontSize: 16,
  },
  titleHome: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "-5%",
    fontFamily: FontFamily.ubuntu,
    textAlign: "center",
  },
  paragraphText: {
    fontFamily: FontFamily.poppins,
    textAlign: "center",
  },
});
