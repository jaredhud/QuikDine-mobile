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
import Ionicons from "@expo/vector-icons/Ionicons";
// import Icon from "react-native-ico";

let tempSearchCriteria;
let tempDiet = "any";
let tempMealType = "any";
let tempCuisine = "any";
const mealTypes = ["any", "main course", "dessert", "side dish"];
const cuisines = ["any", "Greek", "Italian", "German"];
const diets = ["any", "vegetarian"];

export const AdvancedSearch = () => {
  const navigation = useNavigation();

  const {
    tempQuery,
    setTempQuery,
    pantryList,
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
    ingredientListChecked,
    setIngredientListChecked,
  } = useContext(AppContext);

  const tempPantry = [...pantryList];

  tempSearchCriteria = {
    ingredientList: ingredientList,
    query: query,
    cuisine: cuisine,
    diet: diet,
    mealtype: mealType,
  };

  function querySetter() {
    setQuery(tempQuery);
  }

  function dietSetter() {
    if (tempDiet === "any") {
      setDiet("");
    } else {
      setDiet(tempDiet);
    }
  }

  function cuisineSetter() {
    if (tempCuisine === "any") {
      setCuisine("");
    } else {
      setCuisine(tempCuisine);
    }
  }

  function mealTypeSetter() {
    if (tempMealType === "any") {
      setMealType("");
    } else {
      setMealType(tempMealType);
    }
  }

  function ingredientSetter() {
    let tempIngredientList = [];
    for (const i in ingredientListChecked) {
      if (ingredientListChecked[i] === true) {
        tempIngredientList.push(tempPantry[i]);
      }
    }
    setIngredientList(tempIngredientList);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.backLocation, { height: "5%" }]}>
        <Ionicons
          name="arrow-back-circle"
          size={32}
          color="green"
          onPress={() => navigation.navigate("Recipe Search")}
        />
      </View>
      {/* <Appbar>
        <Appbar.Content title="Advanced Search" />
      </Appbar> */}
      <Searchbar
        value={tempQuery}
        onChangeText={(text) => {
          setTempQuery(text);
        }}
        onSubmitEditing={querySetter}
        placeholder="query (optional)"
        style={{
          width: "67%",
          height: "8%",
          marginTop: "5%",
          marginLeft: "2%",
        }}
      />
      <ScrollView style={{ height: "30%" }}>
        {tempPantry.length > 0 && [
          tempPantry.map((ingredient, index) => {
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#fbffd8",
          borderRadius: 15,
          alignItems: "center",
        }}
      >
        <View style={styles.selection}>
          <Text>Diet</Text>
          <View style={styles.dropdown}>
            <SelectDropdown
              data={diets}
              defaultValue={tempDiet}
              onSelect={(selectedItem, index) => {
                tempDiet = selectedItem;
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
        </View>
        <View style={styles.selection}>
          <Text>Meal Type</Text>
          <View style={styles.dropdown}>
            <SelectDropdown
              data={mealTypes}
              defaultValue={tempMealType}
              onSelect={(selectedItem, index) => {
                tempMealType = selectedItem;
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
        </View>
        <View style={styles.selection}>
          <Text>Cuisine Select</Text>
          <View style={styles.dropdown}>
            <SelectDropdown
              data={cuisines}
              defaultValue={tempCuisine}
              onSelect={(selectedItem, index) => {
                tempCuisine = selectedItem;
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          querySetter();
          dietSetter();
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
  backLocation: {
    top: 40,
    right: "42%",
  },
  selection: {
    width: "30%",
  },
  dropdown: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
});
