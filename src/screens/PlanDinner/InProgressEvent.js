import React, { useState, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";

import { Appbar, Searchbar, Card, Paragraph } from "react-native-paper";
import { auth } from "../../../firebase";
import { button } from "../../../GlobalStyles";
import { FontFamily } from "../../../GlobalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
// import Icon from "react-native-ico";

export const InProgressEvent = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Vote Results:</Text>
            <Text style={styles.modalText}>Steak and Cheese: 3</Text>
            <Text style={styles.modalText}>Garlic Butter Steak: 1</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Participants:</Text>
            <Text style={styles.modalText}>Romell</Text>
            <Text style={styles.modalText}>Tija</Text>
            <Text style={styles.modalText}>Jared</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <Appbar>
        <Appbar.Content title="In-Progress Event" />
      </Appbar> */}

      <View
        style={{
          width: "95%",
          height: "25%",
          justifyContent: "center",
          margin: "2%",
        }}
      >
        <Ionicons
          name="arrow-back-circle"
          size={32}
          color="green"
          onPress={() => navigation.navigate("Event List")}
        />
        <Text style={styles.title}>Current Meals</Text>
        <Text style={styles.sectionTitle}>Bon Appetit!</Text>
      </View>
      <View
        style={{
          height: "60%",
          // backgroundColor: "red"
        }}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[[button], { alignItems: "center" }]}
        >
          <Text style={styles.buttonText}>View Vote Results</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible2(true)}
          style={[[button], { alignItems: "center" }]}
        >
          <Text style={styles.buttonText}>View Participants</Text>
        </TouchableOpacity>
      </View>
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
  buttonSend: {
    backgroundColor: "#379540",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
