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
      <TouchableOpacity onPress={ ()=>setShowModal(true) } style = {{backgroundColor: 'black', borderRadius:10, margin:90, padding:10, width:70, alignItems:'center' }}>
        <Text style={{color: 'white', fontSize: 20}}>Show Calendar</Text>
          
      </TouchableOpacity>
      <Modal visible = {showModal} animationType = "fade">
        <Calendar style = {{ borderRadius:40, elevation:4, margin:40 }}
        onDayPress={date => {console.log(date)
          
        }}
        initialDate= {'2023-01-01'}
        markingType = {'period'}
        markedDates ={{
          'currentDay': {marked: true, selected: true, dotColour:'red', selectedColour:'purple'}       }}
        />
      </Modal>
    </View>

  );

}

const styles = StyleSheet.create({})

export default CreateEvent;