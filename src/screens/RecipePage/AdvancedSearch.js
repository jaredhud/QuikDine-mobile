import React, { useCallback, useContext, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import SelectDropdown from "react-native-select-dropdown";

import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import Checkbox from "react-native-paper";
// import Checkbox from "expo-checkbox";
import { auth } from "../../../firebase";
import { button } from "../../../GlobalStyles";
import { IngredientSearchCard } from "../../components/IngredientSearchCard";
import AppContext from "../../Context/AppContext";
// import Icon from "react-native-ico";

let tempSearchCriteria;
let tempMealType = "any";
let tempCuisine = "any";
const mealTypes = ["any", "main course", "dessert", "side dish"];
const cuisines = ["any", "Greek", "Italian", "German"];

export const AdvancedSearch = (props) => {
  const navigation = useNavigation();
  const {
    ingredientList,
    setIngredientList,
    query,
    setQuery,
    cuisine,
    setCuisine,
    diet,
    setDiet,
    mealType,
    setMealType,
  } = props;
  const { pantryList } = useContext(AppContext);
  [ingredientListChecked, setIngredientListChecked] = useState([]);

  useFocusEffect(
    useCallback(() => {
      setIngredientList([...pantryList]);
      setIngredientListChecked(new Array(pantryList.length).fill(true));
    }, [pantryList])
  );
  console.log("AdvancedPage", ingredientListChecked);

  tempSearchCriteria = {
    ingredientList: ingredientList,
    query: query,
    cuisine: cuisine,
    diet: diet,
    mealtype: mealType,
  };

  function cuisineSetter() {
    if (tempCuisine === "any") {
      setCuisine("");
    } else {
      setCuisine(tempCuisine);
    }
    console.log("cuisine: ", tempCuisine);
  }

  function mealTypeSetter() {
    if (tempMealType === "any") {
      setMealType("");
    } else {
      setMealType(tempMealType);
    }
    console.log("mealType: ", tempMealType);
  }

  function ingredientSetter() {
    let tempIngredientList = [];
    for (const i in ingredientListChecked) {
      if (ingredientListChecked[i] === true) {
        tempIngredientList.push(pantryList[i]);
      }
    }
    console.log("Ingredient Search List: ", tempIngredientList);
    setIngredientList(tempIngredientList);
  }

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Advanced Search" />
      </Appbar>
      <ScrollView style={{ height: "30%" }}>
        {pantryList.length > 0 && [
          pantryList.map((ingredient, index) => {
            return (
              <IngredientSearchCard
                key={ingredient}
                ingredient={ingredient}
                setIngredientListChecked={setIngredientListChecked}
                ingredientListChecked={ingredientListChecked}
                index={index}
              />
            );
          }),
        ]}
      </ScrollView>
      <Text>Meal Type</Text>
      <SelectDropdown
        data={mealTypes}
        defaultValue={tempMealType}
        onSelect={(selectedItem, index) => {
          tempMealType = selectedItem;
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
      <Text>Cuisine Select</Text>
      <SelectDropdown
        data={cuisines}
        defaultValue={tempCuisine}
        onSelect={(selectedItem, index) => {
          tempCuisine = selectedItem;
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
      <TouchableOpacity
        onPress={() => {
          cuisineSetter();
          mealTypeSetter();
          ingredientSetter();
          navigation.navigate("Recipe Search");
        }}
        style={[button]}
      >
        <Text style={styles.buttonText}>Search</Text>
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
