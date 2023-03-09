import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Image,
  ImageBackground,
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
import AppContext from "../../Context/AppContext";
import cameraPlus from "../../img/camera-plus.png";
import fallveggie from "../../img/pantry-bg.jpg";
import plusWhite from "../../img/plus-white.png";

export default function MyPantry() {
  const navigation = useNavigation();
  const { pantryList, setPantryList } = useContext(AppContext);
  const [ingredient, setIngredient] = useState();

  const handleAddIngredient = () => {
    Keyboard.dismiss();
    setPantryList([...pantryList, ingredient]);
    setIngredient(null);
  };

  const completeIngredient = (index) => {
    let itemsCopy = [...pantryList];
    itemsCopy.splice(index, 1);
    setPantryList(itemsCopy);
  };

  return (
    <ImageBackground style={{ flex: 1 }} source={fallveggie}>
      <View style={styles.ingredientsWrapper}>
        <Text style={styles.title}>My Pantry</Text>
        <Text style={styles.sectionTitle}>Ingredients List</Text>
        <ScrollView style={[styles.items, { height: "85%", marginTop: 20 }]}>
          {pantryList.map((item, index) => {
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
        style={[
          styles.writeIngredientWrapper,
          { marginBottom: 80 },
          { flexDirection: "row-reverse" },
          { justifyContent: "space-between" },
        ]}
      ></KeyboardAvoidingView>
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
            <Image
              source={plusWhite}
              resizeMode="contain"
              style={{
                width: "70%",
                height: "120%",
              }}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <View style={styles.addWrapperCamera}>
            <Image
              source={cameraPlus}
              resizeMode="contain"
              style={{
                width: "120%",
                height: "120%",
              }}
            ></Image>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
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
    color: "#fefbf3",
  },
  title: {
    fontSize: 44,
    fontFamily: FontFamily.ubuntubold,
    color: "#fefbf3",
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
    borderColor: "#c0c0c0",
    borderWidth: 1,
    fontSize: 18,
    width: 260,
    marginLeft: "5%",
    marginRight: "-15%",
    backgroundColor: "#fff7e1",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: colors.darkgreen,
    marginRight: "3%",
    marginLeft: "0%",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapperCamera: {
    width: 60,
    height: 60,
    backgroundColor: colors.darkgreen,
    marginRight: "5%",
    marginLeft: "0%",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
