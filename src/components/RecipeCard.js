import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { ImageBackground, View } from "react-native";
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
        borderWidth: 3,
        borderColor: "#e5ae49",
        elevation: 10,
        shadowOpacity: 80,
      }}
    >
      {/* <Card.Content>
        <Text variant="titleLarge">{recipe.title}</Text>
      </Card.Content> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#fbffd8",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: 120,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card.Content>
            <Text variant="titleMedium">{recipe.title}</Text>
          </Card.Content>
        </View>
        <View>
          {/* <Card.Cover
            source={{ uri: recipe.image }}
            style={{ height: 155, width: 250 }}
            resizeMode="cover"
            justifyContent="flex-end"
          /> */}
          <ImageBackground
            source={{ uri: recipe.image }}
            style={{
              height: 160,
              width: 250,
              alignItems: "flex-start",
              justifyContent: "flex-end",
              // backgroundColor: "white",
            }}
            resizeMode="cover"
            borderRadius={10}
          >
            <Text
              variant="titleMedium"
              style={{
                backgroundColor: "#fec252",
                borderRadius: 10,
                paddingRight: 15,
                paddingLeft: 15,
              }}
            >
              MI 3
            </Text>
          </ImageBackground>
        </View>
      </View>
    </Card>
  );
};
