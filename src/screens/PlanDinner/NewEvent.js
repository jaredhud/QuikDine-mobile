import React, { useCallback, useContext, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
  ImageBackground,
  Button,
  ScrollView,
} from "react-native";

import {
  menuBorderRadius,
  button,
  buttonBorder,
  colors,
  innerTabBorder,
  FontFamily,
} from "../../../GlobalStyles";
import { TextInput } from "react-native-paper";
import AppContext from "../../Context/AppContext";
import { RecipeCard } from "../../components/RecipeCard";

export const NewEvent = () => {
  const navigation = useNavigation();

  const {
    selectedRecipesList,
    setSelectedRecipesList,
    serverIP,
    recipe,
    setRecipeID,
  } = useContext(AppContext);

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date(Date.now()));
  const [datePicker, setDatePicker] = useState(false);
  const [timePicker, setTimePicker] = useState(false);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [selectedRecipes, setSelectedRecipes] = useState({});

  useFocusEffect(
    useCallback(() => {
      async function getData() {
        const recipeList = {
          selectedRecipesList,
        };
        const dataResponse = await fetch(
          `http://${serverIP}:5001/api/spoonacular/recipebulk`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(recipeList),
          }
        );
        const responseValue = await dataResponse.json();
        console.log(responseValue);
        setSelectedRecipes(responseValue);
      }
      getData();
    }, [selectedRecipesList])
  );

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();
    setText(fDate + "\n" + fTime);
    console.log(fDate + " / " + fTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.backLocation}>
        <Ionicons
          name="arrow-back-circle"
          size={32}
          color="green"
          onPress={() => navigation.navigate("Event List")}
        />
      </View>
      <View
        style={{
          width: "95%",
          height: "25%",
          justifyContent: "center",
          margin: "2%",
        }}
      >
        <Text style={styles.title}>Make New Event</Text>
        <Text style={styles.sectionTitle}>Pick your Date and Time</Text>
      </View>
      <View style={styles.dateAndTime}>
        {/* <Text style={{ fontWeight: "bold", fontSize: 20 }}>{text}</Text> */}
        <Text
          // placeholder="Date and Time"
          style={{
            fontWeight: "bold",
            fontSize: 20,
            backgroundColor: "white",
          }}
        >
          {text}
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        {/* <Button
          style={[button]}
          title="DatePicker"
          onPress={() => showMode("date")}
        /> */}
        <TouchableOpacity onPress={() => showMode("date")} style={[button]}>
          <Text style={styles.buttonText}>Choose the Date</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={StyleSheet.Container}>
        <Button title="Pick Start Time" onPress={() => showMode("time")} />
      </View>
      <View style={StyleSheet.Container}>
        <Button title="Pick End Time" onPress={() => showMode("time")} />
      </View> */}

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <StatusBar style="auto" />
      <View style={{ flexDirection: "row" }}>
        {/* <TouchableOpacity onPress={removeRecipient} style={styles.buttonRed}> */}
        <TouchableOpacity
          onPress={() => showMode("time")}
          style={styles.buttonGreen}
        >
          <Text style={styles.buttonText}>Pick Start Time</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={addRecipient} style={styles.buttonGreen}> */}
        <TouchableOpacity
          onPress={() => showMode("time")}
          style={styles.buttonRed}
        >
          <Text style={styles.buttonText}>Pick End Time</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: "20%" }}>
        <ScrollView>
          {selectedRecipes.length > 0 && [
            selectedRecipes.map((recipe) => {
              return (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  setRecipeID={setRecipeID}
                  setSelectedRecipesList={setSelectedRecipesList}
                  selectedRecipesList={selectedRecipesList}
                  cardHeight={100}
                />
              );
            }),
          ]}
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Send Email")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Invite Recepients</Text>
      </TouchableOpacity>
      <View
        style={{
          height: "10%",
          // backgroundColor: "blue"
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 6,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonRed: {
    backgroundColor: "darkorange",
    width: "45%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    margin: 5,
  },
  buttonGreen: {
    backgroundColor: "#379540",
    width: "45%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    margin: 5,
  },
  Text: {
    fontSize: 25,
    color: "red",
    paddin: 3,
    marginBottom: 10,
    textAlign: "center",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.lightgreen,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: FontFamily.poppins,
    marginLeft: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 44,
    marginBottom: -5,
    fontFamily: FontFamily.ubuntubold,
    marginTop: 40,
  },
  backLocation: {
    position: "absolute",
    top: 40,
    left: 15,
  },
  dateAndTime: {
    backgroundColor: "#ffffff",
    width: "65%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
});
