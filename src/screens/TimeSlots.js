import React, { useEffect, useState } from "react";
import moment from "moment";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";

const TimeSlots = () => {
  const [timeSlot, setTimeSlot] = useState([]);
  const createTimeSlots = (fromTime, toTime) => {
    let startTime = moment(fromTime, "HH:mm");
    let endTime = moment(toTime, "HH:mm");
    if (endTime.isBefore(startTime)) {
      endTime.add(1, "day");
    }
    let arr = [];
    while (startTime <= endTime) {
      arr.push(new moment(startTime, "HH:mm"));
      startTime.add(15, "minutes");
    }
    return arr;
  };
  useEffect(() => {
    setTimeSlot(createTimeSlots("09:00", "18:00"));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        {timeSlot.map((item, index) => {
          return (
            <View key={index}>
              <Text>{item.toString()}</Text>
              <Divider />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
});

export default TimeSlots;
