import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";

const RecipeIngredientSearchPage = () => {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(meals);
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  const getMeals = async function () {
    const response = await fetch(url);
    const data = await response.json();
    setMeals(data.categories);
  };

  useEffect(() => {
    getMeals();
  }, []);

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

export default RecipeIngredientSearchPage;

const styles = StyleSheet.create({});
