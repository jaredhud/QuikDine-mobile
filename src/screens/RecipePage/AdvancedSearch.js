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

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import Checkbox from "react-native-paper";
// import Checkbox from "expo-checkbox";
import { auth } from "../../../firebase";
import { button, colors, FontFamily } from "../../../GlobalStyles";
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
      <View style={[styles.backLocation, { height: "10%", marginTop: 50 }]}>
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
      <View style={{ height: "10%" }}>
        <Searchbar
          value={tempQuery}
          onChangeText={(text) => {
            setTempQuery(text);
          }}
          onSubmitEditing={querySetter}
          placeholder="query (optional)"
          style={{
            width: "67%",
            marginTop: "5%",
            marginLeft: "2%",
          }}
        />
      </View>
      <View style={{ height: "55%" }}>
        <ScrollView>
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
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: colors.lightorange,
          borderRadius: 15,
          padding: 10,
          borderColor: colors.darkorange,
          borderWidth: 3,
          width: "95%",
        }}
      >
        <View
          style={[
            styles.selection,
            { alignItems: "center", justifyContent: "center" },
          ]}
        >
          <Text style={[styles.selectionTitle]}>Diet</Text>
          <View style={[styles.dropdown]}>
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
              dropdownStyle={styles.dropdownDropdownStyle}
              buttonStyle={styles.dropdownBtnStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
        </View>
        <View
          style={[
            styles.selection,
            { alignItems: "center", justifyContent: "center" },
          ]}
        >
          <Text style={[styles.selectionTitle]}>Meal Type</Text>
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
              dropdownStyle={styles.dropdownDropdownStyle}
              buttonStyle={styles.dropdownBtnStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
        </View>
        <View
          style={[
            styles.selection,
            { alignItems: "center", justifyContent: "center" },
          ]}
        >
          <Text style={[styles.selectionTitle]}>Cuisine Select</Text>
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
              dropdownStyle={styles.dropdownDropdownStyle}
              buttonStyle={styles.dropdownBtnStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <TouchableOpacity
          style={[[button], { alignItems: "center", width: "20.5%" }]}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            querySetter();
            dietSetter();
            cuisineSetter();
            mealTypeSetter();
            ingredientSetter();
            navigation.navigate("Recipe Search");
          }}
          style={[
            [button],
            {
              alignItems: "center",
              width: "67%",
              // height: "60%",
              justifyContent: "center",
              marginLeft: 15,
            },
          ]}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: "10%" }}></View>
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
    width: "35%",
  },
  dropdown: {
    width: "90%",
  },
  dropdownDropdownStyle: { width: 150, borderRadius: 10 },
  dropdownBtnStyle: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  selectionTitle: {
    fontWeight: "600",
    fontSize: 12,
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "center" },
});
