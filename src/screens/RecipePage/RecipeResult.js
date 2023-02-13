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
      {/* <Appbar>
        <Appbar.Content title="Recipe Result" />
      </Appbar> */}
      {/* Source: server > placeholderRecipes.js > selectedRecipes - look at Figma for guide */}
      <Text>{selectedRecipe.title}</Text>
      <ImageBackground
        source={{ uri: selectedRecipe.image }}
        style={{ height: "100%", width: "100%" }}
        resizeMode="cover"
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Recipe Search")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Recipe Search</Text>
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
