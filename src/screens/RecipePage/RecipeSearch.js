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

export const RecipeSearch = (props) => {
  const navigation = useNavigation();
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Recipes" />
      </Appbar>
      <Searchbar
        placeholder="Search Recipes"
        value={searchQuery}
        onChangeText={onChangeSearch}
      />
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
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({});
