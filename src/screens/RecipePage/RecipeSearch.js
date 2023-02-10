import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";

import { useFocusEffect, useNavigation } from "@react-navigation/core";
import { useState, useEffect, useCallback, useContext } from "react";
import { Searchbar } from "react-native-paper";
import {
  button,
  buttonText,
  colors,
  containerRecipe,
  FontFamily,
} from "../../../GlobalStyles";
import { pantryRecipeSearch } from "../../components/RecipeSearchFunction";
import { RecipeCard } from "../../components/RecipeCard";
import AppContext from "../../Context/AppContext";
let scanNum = 0;
export const RecipeSearch = () => {
  scanNum += 1;
  const navigation = useNavigation();
  const {
    pantryList,
    selectedRecipesList,
    setSelectedRecipesList,
    recipeID,
    setRecipeID,
    ingredientList,
    setIngredientList,
    cuisine,
    setCuisine,
    mealType,
    setMealType,
    query,
    setQuery,
    diet,
    setDiet,
    serverIP,
    tempQuery,
    setTempQuery,
  } = useContext(AppContext);

  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(2);
  const [searchResults, setSearchResults] = useState({});
  // useState Popup
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setTempQuery(query);
  }, [ingredientList]);

  function queryHandler() {
    setCuisine("");
    setDiet("");
    setMealType("");
    setPage(1);
    setQuery(tempQuery);
    setIngredientList([]);
  }

  useFocusEffect(
    useCallback(() => {
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
    }, [page, ingredientList])
  );

  return (
    <View style={{ backgroundColor: colors.lightgreen, height: "100%" }}>
      {/* Help Popup - Start */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Help!</Text>
            <Text style={styles.modalText}>MI = Missing Ingredient</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* Help Popup - End */}
      <View style={{ backgroundColor: colors.lightgreen }}>
        <View style={[containerRecipe, { marginTop: 40 }]}>
          {/* <Text style={styles.title}>Recipes</Text> */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Advanced Search")}
              // Style Array
              style={[styles.buttonGreen, { alignItems: "center" }]}
            >
              <Text style={styles.buttonText}>Advanced Options</Text>
            </TouchableOpacity>
            <Searchbar
              value={tempQuery}
              onChangeText={(text) => {
                setTempQuery(text);
              }}
              onSubmitEditing={queryHandler}
              placeholder="Search Recipes"
              style={{
                width: "67%",
                height: "60%",
                marginTop: "5%",
                marginLeft: "2%",
              }}
            />
          </View>
          <View style={{ height: "87%" }}>
            <ScrollView>
              {searchResults.results && [
                searchResults.results.map((recipe) => {
                  return (
                    <RecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      setRecipeID={setRecipeID}
                      setSelectedRecipesList={setSelectedRecipesList}
                      selectedRecipesList={selectedRecipesList}
                      cardHeight={160}
                    />
                  );
                }),
              ]}
            </ScrollView>
            <View
              style={{
                marginTop: 10,
                marginBottom: -10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "#fbffd8",
                  borderRadius: 15,
                  alignItems: "center",
                  width: "97.5%",
                  marginBottom: -10,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setPage(page - 1);
                  }}
                  disabled={page === 1}
                  style={[
                    styles.buttonNavigate,
                    {
                      backgroundColor: "#fbffd8",
                      borderTopStartRadius: 15,
                      borderBottomStartRadius: 15,
                      borderWidth: 2,
                      borderColor: "#e5ae49",
                    },
                  ]}
                >
                  <Text style={styles.buttonTextBlack}>{`< Previous`}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.buttonNavigate,
                    {
                      borderTopWidth: 2,
                      borderBottomWidth: 2,
                      borderColor: "#e5ae49",
                    },
                  ]}
                >
                  <Text
                    style={styles.buttonTextBlack}
                  >{`Page ${page} of ${Math.floor(
                    searchResults.totalResults / resultsPerPage
                  )}`}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setPage(page + 1);
                  }}
                  disabled={
                    searchResults.totalResults - resultsPerPage <
                    page * resultsPerPage
                  }
                  style={[
                    styles.buttonNavigate,
                    {
                      backgroundColor: "#fbffd8",
                      borderTopEndRadius: 15,
                      borderBottomEndRadius: 15,
                      borderWidth: 2,
                      borderColor: "#e5ae49",
                    },
                  ]}
                >
                  <Text style={styles.buttonTextBlack}>{`Next >`}</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={[
                    styles.buttonSend,
                    { alignItems: "center", width: "11.5%" },
                  ]}
                >
                  <Text style={styles.buttonText}>?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Plan Meal", { screen: "New Event" })
                  }
                  style={[
                    styles.buttonSend,
                    {
                      alignItems: "center",
                      width: "86%",
                      // height: "60%",
                    },
                  ]}
                >
                  <Text style={[styles.buttonText, { alignItems: "center" }]}>
                    Go to Event
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ height: "10%" }}></View>
          <StatusBar style="auto" />
        </View>
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
    width: "34%",
    padding: 10,
    alignItems: "center",
    // marginTop: 20,
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
  buttonSend: {
    backgroundColor: "#379540",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
