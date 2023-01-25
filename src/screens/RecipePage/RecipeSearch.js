import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from "react";
import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { button } from "../../../GlobalStyles";
import { pantryRecipeSearch } from "../../components/RecipeSearchFunction";

export const RecipeSearch = (props) => {
  const navigation = useNavigation();
  const { ingredientList } = props;
  const [meals, setMeals] = useState([]);
  const [cuisine, setCuisine] = useState("");
  const [mealType, setMealType] = useState("");
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  useEffect(() => {
    let searchCriteria = {
      ingredients: ingredientList,
      cuisine: cuisine,
      mealType: mealType,
    };
    setMeals(pantryRecipeSearch(searchCriteria, page, resultsPerPage));
  }, [page, resultsPerPage]);

  function pageHandler() {}

  console.log("IngredientSearch", ingredientList);

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Recipes" />
      </Appbar>
      <Searchbar placeholder="Search Recipes" />
      <TouchableOpacity
        onPress={() => navigation.navigate("Recipe Result")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Recipe Result</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Advanced Search")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Advanced Search</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({});
