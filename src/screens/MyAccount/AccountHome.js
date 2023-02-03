import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import profile from "../../img/profile.png";

import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { auth } from "../../../firebase";
import { button, colors } from "../../../GlobalStyles";
// import Icon from "react-native-ico";

export const AccountHome = (props) => {
  const navigation = useNavigation();
  const name = "Sophia";
  const accountName = "Sophia";

  return (
    <View>
      <ScrollView>
        <View
          style={{
            padding: 10,
            width: "100%",
            backgroundColor: "#000",
            height: 150,
          }}
        >
          <TouchableOpacity>
            <Image source={profile} style={{ width: 30, height: 30 }}></Image>
            <View></View>
            <View></View>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={profile}
            style={{
              width: 140,
              height: 140,
              borderRadius: 100,
              marginTop: -70,
            }}
          ></Image>
          <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
            Sophia
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>
            26, Female
          </Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: "90%",
            padding: 20,
            paddingBottom: 22,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 20,
          }}
        >
          <Image source={profile} style={{ width: 20, height: 20 }}></Image>
          <Text>Product Designer</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountHome;

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
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 530,
    right: 100,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
