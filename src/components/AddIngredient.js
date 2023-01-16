import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ingredient from "./Ingredient";

export default function App() {
  const [ingredient, setIngredient] = useState();
  const [ingredientItems, setIngredientItems] = useState([]);

  const handleAddIngredient = () => {
    Keyboard.dismiss();
    setIngredientItems([...ingredientItems, ingredient]);
    setIngredient(null);
  };

  const completeIngredient = (index) => {
    let itemsCopy = [...ingredientItems];
    itemsCopy.splice(index, 1);
    setIngredientItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.ingredientsWrapper}>
        <Text style={styles.sectionTitle}>Your ingredients</Text>
        <View style={styles.items}>
          {ingredientItems.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => completeIngredient(index)}
              >
                <Ingredient text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeIngredientWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add an ingredient"}
          value={ingredient}
          onChangeText={(text) => setIngredient(text)}
        />
        <TouchableOpacity onPress={() => handleAddIngredient()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEAED",
  },
  ingredientsWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeIngredientWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
