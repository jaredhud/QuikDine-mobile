import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { auth } from "../../../firebase";
import { button } from "../../../GlobalStyles";
import { idRecipeSearch } from "../../components/RecipeSearchFunction";
// import Icon from "react-native-ico";

export const RecipeResult = (props) => {
  const navigation = useNavigation();
  const { selectedRecipeList, setSelectedRecipeList, recipeID } = props;

  const [selectedRecipe, setSelectedRecipe] = useState({});

  useFocusEffect(
    useCallback(() => {
      async function recipeFetch() {
        const result = await idRecipeSearch(recipeID);
        setSelectedRecipe(result);
      }

      recipeFetch();
    }, [recipeID])
  );
  console.log(selectedRecipe);
  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Recipe Result" />
      </Appbar>
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
