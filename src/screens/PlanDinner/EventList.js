import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { auth } from "../../../firebase";

import quikdine from "../../img/quik-dine.png";
import {
  button,
  buttonBorder,
  colors,
  FontFamily,
} from "../../../GlobalStyles";
import fallveggie from "../../img/falling-veggies.png";
import newevent from "../../img/new-event.jpg";
import ipevent from "../../img/ip-event.png";
import pastevent from "../../img/past-event.jpg";
import { SubInfo, SubInfo2, SubInfo3 } from "../../components/PlanMealText";
// import Icon from "react-native-ico";

export const EventList = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      {/* <Appbar>
        <Appbar.Content title="Event List" />
      </Appbar> */}
      <View
        style={{
          width: "95%",
          height: "30%",
          justifyContent: "center",
          margin: "2%",
        }}
      >
        <Text style={styles.title}>Plan Meals</Text>
        <Text style={styles.sectionTitle}>More people, more fun!</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("New Event")}
        style={[buttonBorder]}
      >
        <ImageBackground
          source={newevent}
          resizeMode="cover"
          style={styles.image}
          borderRadius={16}
        >
          <Text style={{ marginBottom: -5 }}>
            {" "}
            <SubInfo />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("In-Progress Event")}
        style={[buttonBorder]}
      >
        <ImageBackground
          source={ipevent}
          resizeMode="cover"
          style={styles.image}
          borderRadius={16}
        >
          <Text style={{ marginBottom: -5 }}>
            {" "}
            <SubInfo2 />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Past Event")}
        style={[buttonBorder]}
      >
        <ImageBackground
          source={pastevent}
          resizeMode="cover"
          style={styles.image}
          borderRadius={16}
        >
          <Text style={{ marginBottom: -5 }}>
            {" "}
            <SubInfo3 />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("New Event")}
        style={[button]}
      >
        <Text style={styles.buttonText}>New Event</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("In-Progress Event")}
        style={[button]}
      >
        <Text style={styles.buttonText}>In-Progress Event</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Past Event")}
        style={[button]}
      >
        <Text style={styles.buttonText}>Past Event</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightgreen,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.lightgreen,
  },

  text: {
    fontSize: 26,
    color: "white",
  },
  buttonNavigation: {
    width: "95%",
    height: "18%",
    margin: "2%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: FontFamily.happymonkey,
    marginLeft: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 44,
    marginBottom: -5,
    fontFamily: FontFamily.ubuntubold,
    marginTop: 40,
  },
});
