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

import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { auth } from "../../../firebase";
import { button } from "../../../GlobalStyles";
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
          backgroundColor: "white",
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
          <Ionic name="close-outline" style={{fontSize: 35}} />
        </TouchableOpacity> */}
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Edit Profile</Text>
          <TouchableOpacity
            onPress={() => {
              TostMessage();
              navigation.goBack();
            }}
          >
            {/* <Ionic
              name="checkmark"
              style={{ fontSize: 35, color: "#3493D9" }}
            /> */}
          </TouchableOpacity>
        </View>
        <View style={{ padding: 20, alignItems: "center" }}>
          <Image
            // source={profileImage}
            style={{ width: 80, height: 80, borderRadius: 100 }}
          />
          <Text
            style={{
              color: "#3493D9",
            }}
          >
            Change profile photo
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <View>
            <Text
              style={{
                opacity: 0.5,
              }}
            >
              Name
            </Text>
            <TextInput
              placeholder="name"
              defaultValue={name}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text
              style={{
                opacity: 0.5,
              }}
            >
              Username
            </Text>
            <TextInput
              placeholder="accountname"
              defaultValue={accountName}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <TextInput
              placeholder="Website"
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <TextInput
              placeholder="Bio"
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
              }}
            />
          </View>
        </View>
        <View>
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
            Persnol information setting
          </Text>
        </View>
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
    backgroundColor: "#D3FAD9",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
