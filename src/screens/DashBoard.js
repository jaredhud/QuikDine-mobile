import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import chefGreg from "../img/chef-greg.png";

const DashBoard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerHome}>
      <Image
        source={chefGreg}
        resizeMode="cover"
        style={{
          width: 300,
          height: 300,
          borderColor: "#379540",
          borderRadius: 30,
          borderWidth: 10,
          // borderStartWidth: 10,
          marginTop: 60,
          padding: 0,
        }}
      >
        {" "}
        <Text>Hello</Text>
      </Image>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  titleHome: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 2,
  },
  parentView: {
    width: "85%",
    marginTop: 40,
    marginHorizontal: 10,
  },
  containerHome: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D3FAD9",
  },
  button: {
    backgroundColor: "#379540",
    width: 310,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 70,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});