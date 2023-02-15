import React, {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useContext,
  useState,
} from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Appbar, Searchbar, Card, Text } from "react-native-paper";
import { auth } from "../../../firebase";
import { button, colors, FontFamily } from "../../../GlobalStyles";
import AppContext from "../../Context/AppContext";
import planmeals from "../../img/planmeals.png";
import { TextStroke } from "../../components/RecipeCard";
// import Icon from "react-native-ico";

export const RecipeResult = () => {
  const navigation = useNavigation();
  const {
    selectedRecipeList,
    setSelectedRecipeList,
    recipeID,
    serverIP,
    pantryList,
    ingUsed,
  } = useContext(AppContext);

  const [selectedRecipe, setSelectedRecipe] = useState({});
  useFocusEffect(
    useCallback(() => {
      async function recipeFetch() {
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
  return selectedRecipe.extendedIngredients ? (
    <View style={styles.container}>
      <View style={{ height: "10%" }}></View>
      <View style={[styles.backLocation, { height: "5%" }]}>
        <Ionicons
          name="arrow-back-circle"
          size={32}
          color="green"
          onPress={() => navigation.navigate("Recipe Search")}
        />
      </View>
      <Card
        style={{
          height: "20%",
          width: "95%",
          // backgroundColor: "red",
          marginBottom: 10,
          borderRadius: 16,
        }}
      >
        {/* <ImageBackground
          source={{ uri: selectedRecipe.image }}
          style={{ height: "50%", width: "50%", flex: 1 }}
          resizeMode="cover"
        /> */}
        <ImageBackground
          source={{ uri: selectedRecipe.image }}
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: colors.lightorange,
            borderColor: colors.darkorange,
            borderWidth: 3,
            borderRadius: 15,
            // alignItems: "flex-start",
            // justifyContent: "flex-end",
            // backgroundColor: "white",
          }}
          resizeMode="cover"
          borderRadius={10}
        >
          <Card.Content>
            <TextStroke stroke={2} color={"#953737"}>
              <Text style={styles.textStrokeText}>
                {" "}
                {selectedRecipe.title}{" "}
              </Text>
            </TextStroke>
          </Card.Content>
        </ImageBackground>
      </Card>
      <View
        style={{
          height: "20%",
          width: "95%",
          backgroundColor: "blue",

          borderRadius: 15,
          backgroundColor: colors.lightblue,
          borderColor: colors.darkblue,
          borderWidth: 3,
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        <ScrollView
          style={{
            width: "95%",
            // backgroundColor: "red",
            height: "100%",
          }}
        >
          <Text style={{ fontWeight: "800", fontSize: 16 }}>Ingredients</Text>
          {/* <Text>{selectedRecipe.ingredients}</Text> */}
          {selectedRecipe.extendedIngredients.map((ingredients, index) => (
            <Text
              key={`${recipeID}.${ingredients.id}.${index}`}
              style={
                ingUsed.indexOf(ingredients.id) === -1
                  ? { color: "red" }
                  : { color: "black" }
              }
            >
              {console.log(index + 1, ingredients.id)}
              {console.log(ingUsed)}
              {console.log(ingUsed.indexOf(ingredients.id))}
              {index + 1}. {ingredients.name} -{" "}
              {ingredients.measures.metric.amount}{" "}
              {ingredients.measures.metric.unitLong}
            </Text>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          height: "38%",
          width: "95%",
          backgroundColor: "blue",
          borderRadius: 15,
          backgroundColor: colors.lightblue,
          borderColor: colors.darkblue,
          borderWidth: 3,
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        <ScrollView
          style={{
            width: "95%",
            // backgroundColor: "red",
            height: "100%",
          }}
        >
          <Text style={{ fontWeight: "800", fontSize: 16 }}>Instructions</Text>
          {/* <Text>
            {selectedRecipe.instructions}
          </Text> */}
          {selectedRecipe.analyzedInstructions[0].steps.map(
            (instructions, index) => (
              <>
                <Text>
                  {index + 1}. {instructions.step}
                </Text>
              </>
            )
          )}
        </ScrollView>
      </View>
      <View
        style={{
          height: "8%",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Recipe Search")}
          style={[button, { marginTop: 0, marginBottom: 0 }]}
        >
          <Text style={styles.buttonText}>Add Recipe to Event</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: "10%" }}></View>
    </View>
  ) : (
    []
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
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  textStrokeText: {
    fontSize: 17,
    color: "#FFFFFF",
    fontFamily: FontFamily.poppins,
    marginTop: 5,
  },
});
