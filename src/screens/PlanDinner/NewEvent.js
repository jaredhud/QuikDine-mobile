import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
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
} from "react-native";

import {
  menuBorderRadius,
  button,
  buttonBorder,
  colors,
  innerTabBorder,
  FontFamily,
} from "../../../GlobalStyles";

export const NewEvent = (props) => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date(Date.now()));
  const [datePicker, setDatePicker] = useState(false);
  const [timePicker, setTimePicker] = useState(false);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

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
          height: "30%",
          justifyContent: "center",
          margin: "2%",
        }}
      >
        <Text style={styles.title}>Make New Event</Text>
        <Text style={styles.sectionTitle}>Pick your Date and Time</Text>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{text}</Text>
      <View style={{ margin: 20 }}>
        <Button title="DatePicker" onPress={() => showMode("date")} />
      </View>
      <View style={StyleSheet.Container}>
        <Button title="Pick Start Time" onPress={() => showMode("time")} />
      </View>
      <View style={StyleSheet.Container}>
        <Button title="Pick End Time" onPress={() => showMode("time")} />
      </View>

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

      <TouchableOpacity
        onPress={() => navigation.navigate("Send Email")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Invite Recepients</Text>
      </TouchableOpacity>
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
});
