import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

export const RecipeCard = (props) => {
  const { recipe, setRecipeID } = props;
  const navigation = useNavigation();

  function pullUpRecipe(id) {
    setRecipeID(id);
    navigation.navigate("Recipe Result");
  }

  return (
    <Card
      onPress={() => pullUpRecipe(recipe.id)}
      style={{
        marginBottom: 10,
        borderWidth: 2,
        borderColor: "#e5ae49",
      }}
    >
      <Card.Content>
        <Text variant="titleLarge">{recipe.title}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: recipe.image }} />
    </Card>
  );
};
