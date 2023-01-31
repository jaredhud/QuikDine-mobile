import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export const RecipeCard = (props) => {
  const { recipe } = props;
  const navigation = useNavigation();

  function pullUpRecipe(id) {
    navigation.navigate("Recipe Result");
  }

  return (
    <Card onPress={() => pullUpRecipe(recipe.id)}>
      <Card.Content>
        <Text variant="titleLarge">{recipe.title}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: recipe.image }} />
    </Card>
  );
};
