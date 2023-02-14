import React, { useCallback, useContext, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { auth } from "../../../firebase";
import { button } from "../../../GlobalStyles";
import AppContext from "../../Context/AppContext";
// import Icon from "react-native-ico";

export const RecipeResult = () => {
  const navigation = useNavigation();
  const { selectedRecipeList, setSelectedRecipeList, recipeID, serverIP } =
    useContext(AppContext);

  const [selectedRecipe, setSelectedRecipe] = useState({});

  useFocusEffect(
    useCallback(() => {
      async function recipeFetch() {
        console.log(recipeID);
        const id = { id: recipeID };
        const dataResponse = await fetch(
          `http://${serverIP}:5001/api/spoonacular/recipe`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(id),
          }
        );
        const result = await dataResponse.json();
        setSelectedRecipe(result);
      }

      recipeFetch();
    }, [recipeID])
  );
  console.log(selectedRecipe);
  return (
    <View style={styles.container}>
      <View style={{ height: "10%" }}></View>
      <View style={[styles.backLocation, { height: "5%" }]}>
        <Ionicons
          name="arrow-back-circle"
          size={32}
          color="green"
          onPress={() => navigation.navigate("Event List")}
        />
      </View>
      {/* <Appbar>
        <Appbar.Content title="Recipe Result" />
      </Appbar> */}
      {/* Source: server > placeholderRecipes.js > selectedRecipes - look at Figma for guide */}
      <View style={{ backgroundColor: "red", marginBottom: 10 }}>
        <Text>{selectedRecipe.title}</Text>
      </View>
      <View style={{ height: "20%", backgroundColor: "red", marginBottom: 10 }}>
        {/* <ImageBackground
          source={{ uri: selectedRecipe.image }}
          style={{ height: "50%", width: "50%", flex: 1 }}
          resizeMode="cover"
        /> */}
        <Text>Test</Text>
      </View>
      <View style={{ height: "20%", backgroundColor: "red", marginBottom: 10 }}>
        <Text>Hello</Text>
      </View>
      <View style={{ height: "30%", backgroundColor: "red", marginBottom: 10 }}>
        <Text>Hello</Text>
      </View>
      <View style={{ height: "10%", backgroundColor: "red" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Recipe Search")}
          style={[button]}
        >
          <Text style={styles.buttonText}>Add Recipe to Event</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: "10%" }}></View>
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
  backLocation: {
    right: "42%",
  },
});
