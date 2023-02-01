import * as React from "react";
import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <View style={styles.backLocation}>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  backLocation: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 10,
  },
});
