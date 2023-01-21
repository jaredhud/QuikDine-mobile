import React from "react";
import { useNavigation } from "@react-navigation/core";
import {

  Keyboard,
  KeyboardAvoidingView,
  ScrollView,

  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
  ImageBackground,
} from "react-native";
import Ingredient from "./Ingredient";
import { SubInfo, SubInfo2, SubInfo3 } from "../components/AddIngredientText";
import { FontFamily } from "../../GlobalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import fallveggie from "../img/falling-veggies.png";


export default function AddIngredient(props) {
  const { ingredientList, setIngredientList } = props;
  console.log("IngredientPage", ingredientList);
  const [ingredient, setIngredient] = useState();

  const handleAddIngredient = () => {
    Keyboard.dismiss();
    setIngredientList([...ingredientList, ingredient]);
    setIngredient(null);
  };

  const completeIngredient = (index) => {
    let itemsCopy = [...ingredientList];
    itemsCopy.splice(index, 1);
    setIngredientList(itemsCopy);
  };




  return (
    <View style={styles.mainContainer}>
      {/* Title Box */}
      <View
        style={{
          width: "95%",
          height: "30%",
          justifyContent: "center",
          margin: "2%",
        }}

      >
        <Ionicons
          name="arrow-back-circle"
          size={32}
          color="green"
          style={{ marginTop: "-10%" }}
          onPress={() => navigation.navigate("MyPantry")}
        />
        <Text
          style={{
            fontSize: 42,
            color: "black",
            textAlign: "left",
            marginTop: "15%",
            fontFamily: FontFamily.ubuntubold,
          }}
        >
          {" "}
          Add Ingredients{" "}
        </Text>
      </View>
      {/* First Box */}
      <TouchableOpacity
        onPress={() => navigation.navigate("")}
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
        onPress={() => navigation.navigate("")}
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
      {/* Third Box */}
      <TouchableOpacity
        onPress={() => navigation.navigate("")}
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
            <SubInfo3 />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#EBEAED",
  },
  ingredientsWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeIngredientWrapper: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",

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
