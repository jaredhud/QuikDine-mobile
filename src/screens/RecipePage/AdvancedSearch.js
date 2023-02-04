import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { auth } from "../../../firebase";
import { button } from "../../../GlobalStyles";
// import Icon from "react-native-ico";
let tempSearchCriteria;

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
    pantryList,
  } = props;

  [ingredientListChecked, setIngredientListChecked] = useState([]);

  useFocusEffect(
    useCallback(() => {
      setIngredientList(pantryList);
      setIngredientListChecked(new Array(pantryList.length).fill(true));
    }, [pantryList])
  );
  console.log(ingredientListChecked);
  tempSearchCriteria = {
    ingredientList: ingredientList,
    query: query,
    cuisine: cuisine,
    diet: diet,
    mealtype: mealType,
  };

  // useEffect(() => {
  //   for (const i in pantryList) {
  //     ingredientListTemp[i].ingredient = pantryList[i];
  //     for (const j in ingredientList) {
  //       if (ingredientList[j] === pantryList[i]) {
  //         ingredientListTemp[i].checked = true;
  //         break;
  //       } else {
  //         ingredientListTemp[i].checked = false;
  //       }
  //     }
  //   }
  // }, []);

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Advanced Search" />
      </Appbar>
      <TouchableOpacity
        onPress={() => navigation.navigate("Recipe Search")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Recipe Search</Text>
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
