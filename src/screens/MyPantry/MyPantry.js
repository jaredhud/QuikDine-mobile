import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, FontFamily } from "../../../GlobalStyles";
import Ingredient from "../../components/Ingredient";

export default function MyPantry(props) {
  const { ingredientList, setIngredientList } = props;
  const [ingredient, setIngredient] = useState();

  const handleAddIngredient = () => {
    Keyboard.dismiss();
    setIngredientList([...ingredientList, ingredient]);
    setIngredient(null);
  };

  const completeIngredient = (index) => {
    let itemsCopy = [...ingredientList];
    itemsCopy.splice(index, 1);
    setIngredientList(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.ingredientsWrapper}>
        <Text style={styles.title}>My Pantry</Text>
        <Text style={styles.sectionTitle}>Ingredients List</Text>
        <ScrollView style={styles.items}>
          {ingredientList.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => completeIngredient(index)}
              >
                <Ingredient text={item} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
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
    backgroundColor: colors.lightgreen,
  },
  ingredientsWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 150,
  },
  sectionTitle: {
    fontSize: 24,

    fontFamily: FontFamily.poppins,
  },
  title: {
    fontSize: 44,
    // fontWeight: "bold",
    fontFamily: FontFamily.ubuntubold,
  },
  items: {
    marginTop: 30,
  },
  writeIngredientWrapper: {
    position: "absolute",
    bottom: 30,
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
    fontSize: 18,
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
