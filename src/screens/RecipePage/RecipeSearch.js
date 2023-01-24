import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { pantryRecipeSearch } from "../components/RecipeSearch";

export const RecipeSearch = (props) => {
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
      <ScrollView>
        {meals.map((meal) => (
          <Card key={meal.idCategory}>
            <Card.Cover source={{ uri: meal.strCategoryThumb }} />
            <Card.Title title={meal.strCategory} />
            <Card.Content>
              <Paragraph>{meal.strCategoryDescription}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({});
