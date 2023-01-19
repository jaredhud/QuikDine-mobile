import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { pantryRecipeSearch } from "../components/RecipeSearch";

const RecipeIngredientSearchPage = (props) => {
  const { ingredientList } = props;
  const [meals, setMeals] = useState([]);
  const [cuisine, setCuisine] = useState("");
  const [mealType, setMealType] = useState("");
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  useEffect(() => {
    let searchCriteria = {
      ingredients: ingredientList,
      cuisine: cuisine,
      mealType: mealType,
    };
    setMeals(pantryRecipeSearch(searchCriteria, page, resultsPerPage));
  }, [ingredientList, cuisine, mealType, page, resultsPerPage]);

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Recipes" />
      </Appbar>

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
