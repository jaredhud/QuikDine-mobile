import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
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
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: colors.lightgreen,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-circle-outline"
              style={{ fontSize: 35 }}
            />
          </TouchableOpacity> */}
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Edit Profile</Text>
          <TouchableOpacity
            onPress={() => {
              TostMessage();
              navigation.goBack();
            }}
          >
            {/* <Ionicons
              name="checkmark"
              style={{ fontSize: 35, color: "#3493D9" }}
            /> */}
          </TouchableOpacity>
        </View>
        <View style={{ padding: 20, alignItems: "center" }}>
          <Image
            source={profile}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
          {/* <Text
            style={{
              color: "#3493D9",
            }}
          >
            Change profile photo
          </Text> */}
        </View>
        <View style={styles.add}>
          <Ionicons
            name="ios-add"
            size={48}
            color="#DFD8C8"
            style={{ marginTop: 6, marginLeft: 2 }}
          ></Ionicons>
        </View>
        <View style={{ padding: 10 }}>
          <View>
            <Text
              style={{
                opacity: 0.5,
                fontSize: 18,
              }}
            >
              Name
            </Text>
            <TextInput
              placeholder="name"
              defaultValue={name}
              style={{
                fontSize: 18,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text
              style={{
                opacity: 0.5,
                fontSize: 18,
              }}
            >
              Username
            </Text>
            <TextInput
              placeholder="accountname"
              defaultValue={accountName}
              style={{
                fontSize: 18,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <TextInput
              placeholder="Website"
              style={{
                fontSize: 18,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <TextInput
              placeholder="Bio"
              style={{
                fontSize: 18,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
              }}
            />
          </View>
        </View>
        {/* <View>
          <Text
            style={{
              marginVertical: 10,
              padding: 10,
              color: "#3493D9",
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: "#EFEFEF",
            }}
          >
            Switch to Professional account
          </Text>
          <Text
            style={{
              marginVertical: 10,
              padding: 10,
              color: "#3493D9",
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: "#EFEFEF",
            }}
          >
            Personal information setting
          </Text>
        </View> */}
      </View>
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
