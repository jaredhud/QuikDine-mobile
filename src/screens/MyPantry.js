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
import { useFonts } from "expo-font";
import { SubInfo, SubInfo2, SubInfo3 } from "../components/DashBoardText";
import fallveggie from "../img/falling-veggies.png";
import quikdine from "../img/quik-dine.png";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {/* Title Box */}
      <View
        style={{
          width: "95%",
          height: "25%",
          justifyContent: "center",
          margin: "2%",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            color: "black",
            textAlign: "left",
            marginBottom: "13%",
            marginTop: "10%",
            fontFamily: "Poppins-Regular",
          }}
        >
          {" "}
          Welcome to{" "}
        </Text>
      </View>
      {/* First Box */}
      <TouchableOpacity
        onPress={() => navigation.navigate("SuggestedRecipes")}
        style={styles.buttonNavigation}
      >
        <ImageBackground
          source={fallveggie}
          resizeMode="cover"
          style={styles.image}
          borderRadius={20}
        >
          <Text style={styles.text}>
            {" "}
            <SubInfo />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      {/* Second Box */}
      <TouchableOpacity
        onPress={() => navigation.navigate("PlanDinner")}
        style={styles.buttonNavigation}
      >
        <ImageBackground
          source={fallveggie}
          resizeMode="cover"
          style={styles.image}
          borderRadius={20}
        >
          <Text style={styles.text}>
            {" "}
            <SubInfo2 />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
    height: "17%",
    margin: "1%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
