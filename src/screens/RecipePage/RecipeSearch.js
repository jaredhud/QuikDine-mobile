import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { useFocusEffect, useNavigation } from "@react-navigation/core";
import { useState, useEffect, useCallback } from "react";
import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { button, buttonText, containerRecipe } from "../../../GlobalStyles";
import { pantryRecipeSearch } from "../../components/RecipeSearchFunction";
import { RecipeCard } from "../../components/RecipeCard";

export const RecipeSearch = (props) => {
  const navigation = useNavigation();
  const {
    ingredientList,
    setIngredientList,
    pantryList,
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
  const [resultsPerPage, setResultsPerPage] = useState(1);
  const [searchResults, setSearchResults] = useState({});

  useFocusEffect(
    useCallback(() => {
      setIngredientList(pantryList);
    }, [pantryList])
  );

  useEffect(() => {
    let searchCriteria = {
      ingredients: ingredientList,
      cuisine: cuisine,
      mealType: mealType,
      diet: diet,
      query: query,
    };
    async function resultFetch() {
      const result = await pantryRecipeSearch(
        searchCriteria,
        page,
        resultsPerPage
      );
      setSearchResults(result);
    }
    resultFetch();
  }, [page]);

  function pageHandler() {}

  return (
    <View style={[containerRecipe]}>
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
        </ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Advanced Search")}
          style={[button]}
        >
          <Text style={styles.buttonText}>Advanced Search</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({});
