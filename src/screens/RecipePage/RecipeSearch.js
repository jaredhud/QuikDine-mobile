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
  colors,
  containerRecipe,
  FontFamily,
} from "../../../GlobalStyles";
import { pantryRecipeSearch } from "../../components/RecipeSearchFunction";
import { RecipeCard } from "../../components/RecipeCard";

export const RecipeSearch = (props) => {
  // your IP address, ipconfig in command prompt
  const serverIP = "192.168.1.69";

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
    <View style={{ backgroundColor: colors.lightgreen }}>
      <View style={[containerRecipe]}>
        {/* <Text style={styles.title}>Recipes</Text> */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Searchbar
            placeholder="Search Recipes"
            style={{ width: "70%", height: "60%", marginTop: "5%" }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Advanced Search")}
            // Style Array
            style={[styles.buttonGreen, { alignItems: "center" }]}
          >
            <Text style={styles.buttonText}>Advanced Search</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: "80.75%" }}>
          <ScrollView>
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

          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              bottom: "-10%",
              justifyContent: "space-between",
              marginRight: "-3%",
              backgroundColor: "white",
              borderRadius: 15,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setPage(page - 1);
              }}
              style={styles.buttonNavigate}
            >
              <Text style={styles.buttonTextBlack}>{`< Previous`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Advanced Search")}
              style={styles.buttonNavigate}
            >
              <Text style={styles.buttonTextBlack}>{`Page ${page}`}</Text>
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
              <Text style={styles.buttonTextBlack}>{`Next >`}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: "10%" }}></View>
        <StatusBar style="auto" />
      </View>
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
    width: "25%",
    height: "60%",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    margin: 5,
  },
  buttonNavigate: {
    width: "30%",
    padding: 10,

    alignItems: "center",
    // marginTop: 20,

    margin: 5,
  },
  buttonTextBlack: {
    fontWeight: "500",
    fontSize: 14,
    fontStyle: FontFamily.poppins,
    color: "black",
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 14,
    fontStyle: FontFamily.poppins,
    color: "white",
  },
  title: {
    marginLeft: 10,
    fontSize: 33,
    marginBottom: 5,
    fontFamily: FontFamily.ubuntubold,
    marginTop: 20,
  },
});
