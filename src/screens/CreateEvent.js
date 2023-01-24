import React, {useState} from "react";
import { useNavigation } from "@react-navigation/core";
import { Calendar, CalendarList } from "react-native-calendars";
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
//import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { Modal } from "react-native-paper";

const CreateEvent = () => {
  const [showModal, setShowModal ] = useState(false);
  return(
    <View>
      <TouchableOpacity onPress={ ()=>setShowModal(true) } style = {{backgroundColor: 'black', borderRadius:10, margin:40, padding:10, width:200, alignItems:'center' }}>
        <Text style={{color: 'white', fontSize: 22}}>Show Calendar</Text>
          
      </TouchableOpacity>
      <Modal visible = {showModal}>
        <Calendar />
      </Modal>
    </View>

  );

}

const styles = StyleSheet.create({})

export default CreateEvent;