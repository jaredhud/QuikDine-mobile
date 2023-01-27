import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Platform, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'

export default function App() {
  const [date, setDate] = useState(new Date());
  const[time, setTime]= useState(new Date(Date.now()));
  const[datePicker, setDatePicker] = useState(false);
  const[timePicker, setTimePicker] = useState(false);
  const[mode, setMode] = useState('date');
  const[show, setShow] = useState(false);
  const[text, setText]= useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1 ) + '/' + tempDate.getFullYear();
    let fTime =  tempDate.getHours() + ':' + tempDate.getMinutes();
    setText (fDate + fTime)
    console.log(fDate + ' / ' +fTime)
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }
 function showDatePicker () {
  setDatePicker(true);
  setMode(date)
  setShow(true);
 };

 function showTimePicker () {
  setTimePicker(true);
 };

 
 function onTimeSelected (event, value) {
  setTime(value);
  setTimePicker(false);
};

function onDateSelected (event, value) {
  setDate(value);
  setDatePicker(false);
};
 
return (
<SafeAreaView style={{flex:1 }}>
  <View style={StyleSheet.MainContainer}>

    {datePicker && (
      <DateTimePicker
      value={date}
      mode={'date'}
      display={Platform.OS ==='ios' ? 'spinner': 'default'}
      is24Hour={true}
      onChange={onChange}
      style={StyleSheet.DatePicker}/>
    )}

{timePicker && (
      <DateTimePicker
      value={time}
      mode={'time'}
      display={Platform.OS ==='ios' ? 'spinner': 'default'}
      is24Hour={true}
      onChange={onChange}
      style={StyleSheet.DatePicker}/>
    )}

    { !datePicker && (
      <View style={{margin:10}}>
        <Text style={{fontWeight:'bold',fontSize:20}}></Text>
        <View style={{margin:20}}/>
        <Button title="Choose a Date" color="green" onPress={showDatePicker}/>
        </View>
    )}

{ !timePicker && (
      <View style={{margin:10}}>
        <Text style={{fontWeight:'bold',fontSize:20}}></Text>
        <View style={{margin:20}}/>
        <Button title="Start Time" color="green" onPress={showTimePicker} />
        </View>
    )}
    

  </View>
</SafeAreaView>
);
}
        




const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Text: {
    fontSize: 25,
    color: 'red',
    paddin: 3,
    marginBottom: 10,
    textAlign: 'center'
  }
});
