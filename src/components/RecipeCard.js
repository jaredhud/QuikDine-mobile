import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useState, Children, cloneElement, isValidElement } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { FontFamily } from "../../GlobalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
let addIcon = "add";
let heartoutlineIcon = "heart-outline";
let removeIcon = "remove";

export const RecipeCard = (props) => {
  const { recipe, setRecipeID, selectedRecipesList, setSelectedRecipesList } =
    props;
  const navigation = useNavigation();
  const [isInRecipeList, setIsInRecipeList] = useState(
    selectedRecipesList.indexOf(recipe.id) != -1
  );

  function eventRecipeListHandler() {
    if (isInRecipeList) {
      let temp = [...selectedRecipesList];
      temp.splice(selectedRecipesList.indexOf(recipe.id), 1);
      setSelectedRecipesList(temp);
    } else {
      setSelectedRecipesList([...selectedRecipesList, recipe.id]);
    }
  }

  useEffect(() => {
    setIsInRecipeList(selectedRecipesList.indexOf(recipe.id) != -1);
  }, [selectedRecipesList]);

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

      <ImageBackground
        source={{ uri: recipe.image }}
        style={{
          height: 160,
          width: "100%",
          // alignItems: "flex-start",
          // justifyContent: "flex-end",
          // backgroundColor: "white",
        }}
        resizeMode="cover"
        borderRadius={10}
      >
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <View style={{ width: "80%" }}>
            <Card.Content>
              <TextStroke stroke={2} color={"#953737"}>
                <Text style={styles.textStrokeText}> {recipe.title} </Text>
              </TextStroke>
            </Card.Content>
          </View>
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity onPress={eventRecipeListHandler}>
              {/* <Text
                variant="titleMedium"
                style={{
                  backgroundColor: isInRecipeList ? "red" : "#fec252",
                  borderRadius: 10,
                  paddingRight: 15,
                  paddingLeft: 15,
                }}
              >
                Plus
              </Text> */}
              <Ionicons
                style={{
                  backgroundColor: isInRecipeList ? "red" : "#fec252",
                  borderRadius: 7,
                  padding: 2,
                  paddingRight: 6,
                  paddingLeft: 6,
                }}
                name={isInRecipeList ? removeIcon : addIcon}
                size={30}
                color="#88001b"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          flex={1}
          style={{ justifyContent: "space-between", flexDirection: "row" }}
        >
          <View
            flex={1}
            style={{
              alignItems: "flex-end",
              flexDirection: "row",
            }}
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
          </View>
          <View
            style={{
              alignItems: "flex-end",
              flexDirection: "row-reverse",
            }}
          >
            {/* <Text
              variant="titleMedium"
              style={{
                backgroundColor: "#fec252",
                borderRadius: 10,
                paddingRight: 15,
                paddingLeft: 15,
              }}
            >
              Favorites
            </Text> */}
            <Ionicons
              style={{
                backgroundColor: "#fec252",
                borderRadius: 8,
                padding: 2,
                paddingRight: 6,
                paddingLeft: 6,
              }}
              name={heartoutlineIcon}
              size={30}
              color="#88001b"
            />
          </View>
        </View>
      </ImageBackground>
    </Card>
  );
};

export class TextStroke extends React.Component {
  createClones = (w, h, color) => {
    const { children } = this.props;
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        const currentProps = child.props;
        const currentStyle = currentProps ? currentProps.style || {} : {};

        const newProps = {
          ...currentProps,
          style: {
            ...currentStyle,
            textShadowOffset: {
              width: w,
              height: h,
            },
            textShadowColor: color,
            textShadowRadius: 1,
          },
        };
        return cloneElement(child, newProps);
      }
      return child;
    });
  };

  render() {
    const { color, stroke, children } = this.props;
    const strokeW = stroke;
    const top = this.createClones(0, -strokeW * 1.2, color);
    const topLeft = this.createClones(-strokeW, -strokeW, color);
    const topRight = this.createClones(strokeW, -strokeW, color);
    const right = this.createClones(strokeW, 0, color);
    const bottom = this.createClones(0, strokeW, color);
    const bottomLeft = this.createClones(-strokeW, strokeW, color);
    const bottomRight = this.createClones(strokeW, strokeW, color);
    const left = this.createClones(-strokeW * 1.2, 0, color);

    return (
      <View>
        <View style={styles.outline}>{left}</View>
        <View style={styles.outline}>{right}</View>
        <View style={styles.outline}>{bottom}</View>
        <View style={styles.outline}>{top}</View>
        <View style={styles.outline}>{topLeft}</View>
        <View style={styles.outline}>{topRight}</View>
        <View style={styles.outline}>{bottomLeft}</View>
        {bottomRight}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outline: {
    position: "absolute",
  },
  dashboardView: {
    flexDirection: "row",

    color: "#F44336",
  },
  textStrokeText: {
    fontSize: 17,
    color: "#FFFFFF",
    fontFamily: FontFamily.poppins,
    marginTop: 5,
  },
});
