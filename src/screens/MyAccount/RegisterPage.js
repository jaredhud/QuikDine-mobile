import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
//import { auth, } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FontFamily } from "../../../GlobalStyles.js";
import { createDBEvent, createDBUser } from "../../Context/globalFunctions.js";
import AppContext from "../../Context/AppContext.js";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";
import { db } from "../../../firebase.js";

const auth = getAuth();

export const RegisterPage = () => {
  const [tempEmail, setTempEmail] = useState("");
  const [password, setPassword] = useState("");
  const { email, setEmail, user, setUser, setIsLoggedIn, pantryList } =
    useContext(AppContext);
  const navigation = useNavigation();

  async function handleSignUp() {
    try {
      const data = await createUserWithEmailAndPassword(
        auth,
        tempEmail,
        password
      );
      setEmail(data.user.email);
      setUser(data.user.uid);
      setIsLoggedIn(true);
      console.log("before User firebase");
      await setDoc(doc(db, "Users", user), {
        Events: [],
        FavRecipes: [],
        EmailId: email,
        Pantry: pantryList,
      });

      console.log("After User firebase");
      console.log("before Event firebase");
      const tempEventID = await addDoc(doc(db, "Events"), {
        AddedRecipes: [],
        Votes: [],
        UserID: [],
      });
      setEventID(tempEventID);
      console.log("before User event field update");
      console.log(eventID);
      updateDoc(doc(db, "Users", user), { Events: eventID });

      // await createDBEvent();
      console.log("got to the end");
      // navigation.navigate("Profile Page");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <View style={styles.parentView}>
          <Text style={styles.titleHome}>Recipes Ahoy!</Text>
          <Text>
            <Text style={styles.paragraphText}>
              Cooking at home has never been easy!
            </Text>
            <Text
              style={{
                fontFamily: FontFamily.poppins,
                textAlign: "center",
              }}
            >
              Register and unlock cooking possibilities!
            </Text>
          </Text>
        </View>
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

      <View style={styles.buttonContainer}>
        {/* <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={handleSignUp} style={[styles.button]}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={{ paddingTop: 15 }}>
          <Text>
            <Text>Already have an account? </Text>
            <Text
              onPress={() => navigation.navigate("Login")}
              style={{ fontFamily: FontFamily.ubuntubold, color: "#46ADA1" }}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

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
    backgroundColor: "#D3FAD9",
  },
  inputContainer: {
    width: "80%",
    marginTop: "20%",
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
    backgroundColor: "#379540",
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
    marginBottom: 15,
    fontFamily: FontFamily.ubuntu,
    textAlign: "center",
  },
  paragraphText: {
    fontFamily: FontFamily.poppins,
    textAlign: "center",
  },
});
