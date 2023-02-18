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
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../../../firebase.js";

const auth = getAuth();

export function LoginScreen() {
  const [tempEmail, setTempEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const {
    setEmail,
    setUser,
    setEventID,
    eventID,
    setIsLoggedIn,
    setPantryList,
    selectedRecipesList,
    setSelectedRecipesList,
    setRecipients,
    setInviteUserIds,
    recipients,
  } = useContext(AppContext);

  async function handleLogin() {
    try {
      const data = await signInWithEmailAndPassword(auth, tempEmail, password);
      setEmail(data.user.email);

      console.log("UserId", data.user.uid);
      const userdb = await getDoc(doc(db, "Users", data.user.email));

      console.log("User Document data:", userdb.data());
      const tempEventID = userdb.data().Events[userdb.data().Events.length - 1];
      console.log("EventID", tempEventID);
      setEventID(tempEventID);

      const eventdb = await getDoc(doc(db, "Events", tempEventID));
      console.log("Event Doc Data", eventdb.data());
      setIsLoggedIn(true);

      console.log(
        "Event RecipeArray length",
        eventdb.data().AddedRecipes.length
      );
      if (eventdb.data().AddedRecipes.length > 0) {
        setSelectedRecipesList(eventdb.data().AddedRecipes);
      } else {
        setSelectedRecipesList([...selectedRecipesList]);
      }

      console.log("Event UserID length", eventdb.data().Emails);
      setInviteUserIds(eventdb.data().UserIDs);
      setRecipients(eventdb.data().Emails);

      console.log("PantryList", userdb.data().Pantry);
      setPantryList(userdb.data().Pantry);
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          width: "90%",
          height: 650,
          marginBottom: 20,
        }}
      >
        <Text style={styles.titleHome}>Welcome Back!</Text>
        <Image
          source={chefGreg2}
          resizeMode="cover"
          style={{
            width: 300,
            height: 260,
            borderColor: "#379540",
            borderRadius: 30,
            borderWidth: 10,
            // borderStartWidth: 10,
            marginTop: 30,

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
            marginTop: 10,
            marginBottom: -30,
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
    </View>
  );
}

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
    marginTop: -350,
    marginBottom: "0%",
    width: 325,
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
    marginBottom: -20,
    fontFamily: FontFamily.ubuntu,
    textAlign: "center",
  },
  paragraphText: {
    fontFamily: FontFamily.poppins,
    textAlign: "center",
  },
});
