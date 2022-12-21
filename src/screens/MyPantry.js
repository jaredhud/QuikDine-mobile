import { StatusBar } from "expo-status-bar";
//import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Appbar } from "react-native-paper";

const MyPantry = () => {
  const [meals, setMeals] = useState([]);
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

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Recipe Search" />
      </Appbar>
      <StatusBar style="auto" />
    </View>
  );
};

export default MyPantry;

const styles = StyleSheet.create({});
