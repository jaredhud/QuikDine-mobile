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
import { RecipeCard } from "../../components/RecipeCard";

export const RecipeSearch = (props) => {
  const navigation = useNavigation();
  const {
    ingredientList,
    selectedRecipeList,
    setSelectedRecipeList,
    recipeID,
    setRecipeID,
    cuisine,
    mealType,
    query,
    diet,
  } = props;

  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [searchResults, setSearchResults] = useState({});

  useEffect(async () => {
    let searchCriteria = {
      ingredients: ingredientList,
      cuisine: cuisine,
      mealType: mealType,
      diet: diet,
      query: query,
    };

    const result = await pantryRecipeSearch(
      searchCriteria,
      page,
      resultsPerPage
    );
    setSearchResults(result);
  }, []);

  function pageHandler() {}

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Recipes" />
      </Appbar>
      <Searchbar placeholder="Search Recipes" />
      <View>
        <ScrollView>
          {searchResults.results && [
            searchResults.results.map((recipe) => {
              return <RecipeCard key={recipe.id} recipe={recipe} />;
            }),
          ]}
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
        </ScrollView>
      </View>
      <View>
        <Text>Where</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({});
