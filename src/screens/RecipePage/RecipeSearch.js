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
import {
  button,
  buttonText,
  containerRecipe,
  FontFamily,
} from "../../../GlobalStyles";
import { pantryRecipeSearch } from "../../components/RecipeSearchFunction";
import { RecipeCard } from "../../components/RecipeCard";

export const RecipeSearch = (props) => {
  // your IP address, ipconfig in command prompt
  const serverIP = "10.44.22.35";

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
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [searchResults, setSearchResults] = useState({});

  useFocusEffect(
    useCallback(() => {
      setIngredientList(pantryList);
    }, [pantryList])
  );

  // useEffect(() => {
  //   let searchCriteria = {
  //     ingredients: ingredientList,
  //     cuisine: cuisine,
  //     mealType: mealType,
  //     diet: diet,
  //     query: query,
  //   };
  //   async function resultFetch() {
  //     const result = await pantryRecipeSearch(
  //       searchCriteria,
  //       page,
  //       resultsPerPage
  //     );
  //     setSearchResults(result);
  //   }
  //   resultFetch();
  // }, [page, ingredientList]);

  useEffect(() => {
    async function getData() {
      const searchCriteria = {
        ingredientList,
        cuisine,
        mealType,
        diet,
        query,
        page,
        resultsPerPage,
      };
      const dataResponse = await fetch(
        `http://${serverIP}:5001/api/spoonacular/search`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(searchCriteria),
        }
      );
      const responseValue = await dataResponse.json();
      setSearchResults(responseValue);
    }
    getData();
  }, [page, ingredientList]);

  return (
    <View style={[containerRecipe]}>
      <Appbar>
        <Appbar.Content title="Recipes" />
      </Appbar>
      <Searchbar placeholder="Search Recipes" />
      <View style={{ height: "70%" }}>
        <ScrollView style={{ height: "50%" }}>
          {searchResults.results && [
            searchResults.results.map((recipe) => {
              return (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  setRecipeID={setRecipeID}
                />
              );
            }),
          ]}
        </ScrollView>
        {/* <TouchableOpacity
          onPress={() => {
            setPage(page - 1);
          }}
          style={[button]}
        >
          <Text style={styles.buttonText}>Previous Page</Text>
        </TouchableOpacity> */}
        {/* <Text>{`Showing results ${1 + resultsPerPage * (page - 1)}-${
          resultsPerPage * page
        }\nPage ${page}`}</Text> */}

        <TouchableOpacity
          onPress={() => navigation.navigate("Advanced Search")}
          style={[button]}
        >
          <Text style={styles.buttonText}>Advanced Search</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            bottom: -60,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setPage(page - 1);
            }}
            style={styles.buttonNavigate}
          >
            <Text style={styles.buttonText}>{`< Previous`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Advanced Search")}
            style={styles.buttonNavigate}
          >
            <Text style={styles.buttonText}>{`Page ${page}`}</Text>
            {/* <Text style={styles.buttonText}>{`Showing results ${
              1 + resultsPerPage * (page - 1)
            }-${resultsPerPage * page}\nPage ${page}`}</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPage(page + 1);
            }}
            style={styles.buttonNavigate}
          >
            <Text style={styles.buttonText}>{`Next >`}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: "10%" }}></View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRed: {
    backgroundColor: "#953737",
    width: "30%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    margin: 5,
  },
  buttonGreen: {
    backgroundColor: "#379540",
    width: "30%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    margin: 5,
  },
  buttonNavigate: {
    width: "30%",
    padding: 15,

    alignItems: "center",
    marginTop: 20,

    margin: 5,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 14,
    fontStyle: FontFamily.poppins,
  },
});
