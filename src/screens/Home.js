import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
  ImageBackground,
} from "react-native";
import { auth } from "../../firebase";
import { button } from "../../GlobalStyles";
import { FontFamily } from "../../GlobalStyles";
import { SubInfo, SubInfo2, SubInfo3 } from "../components/DashBoardText";
import fallveggie from "../img/falling-veggies.png";
import quikdine from "../img/quik-dine.png";
// import Icon from "react-native-ico";

export const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          width: "95%",
          height: "30%",
          justifyContent: "center",
          margin: "2%",
        }}
      >
        <Text
          style={{
            fontSize: 23,
            color: "#379540",
            textAlign: "left",
            marginBottom: "7%",
            marginTop: "17%",
            fontFamily: FontFamily.ubuntubold,
            fontStyle: "italic",
          }}
        >
          {" "}
          Welcome to{" "}
        </Text>
        <Image
          flex={1}
          source={quikdine}
          resizeMode="contain"
          style={{
            marginTop: "-20%",
            textAlign: "right",
            width: "70%",
            height: "30%",
          }}
        ></Image>
      </View>
      {/* <Text>Email: {auth.currentUser?.email}</Text> */}
      {/* <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Plan Meal")}
        style={styles.buttonNavigation}
      >
        <ImageBackground
          source={fallveggie}
          resizeMode="cover"
          style={styles.image}
          borderRadius={20}
        >
          <Text style={{ marginBottom: -5 }}>
            {" "}
            <SubInfo />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Recipe")}
        style={styles.buttonNavigation}
      >
        <ImageBackground
          source={fallveggie}
          resizeMode="cover"
          style={styles.image}
          borderRadius={20}
        >
          <Text style={{ marginBottom: -5 }}>
            {" "}
            <SubInfo2 />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Pantry")}
        style={styles.buttonNavigation}
      >
        <ImageBackground
          source={fallveggie}
          resizeMode="cover"
          style={styles.image}
          borderRadius={20}
        >
          <Text style={{ marginBottom: -5 }}>
            {" "}
            <SubInfo3 />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Pantry")}
        style={[button]}
      >
        <Text style={styles.buttonText}>My Pantrys</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Plan Event")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Plan a Meal</Text>
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
  mainContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: "#D3FAD9",
  },

  text: {
    fontSize: 26,
    color: "white",
  },
  buttonNavigation: {
    width: "95%",
    height: "18%",
    margin: "2%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
