import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
  ImageBackground,
} from "react-native";
import { SubInfo, SubInfo2, SubInfo3 } from "../components/DashBoardText";
import fallveggie from "../img/falling-veggies.png";
import { TextStroke } from "../components/DashBoardText";

// const DashBoard = () => {
// const navigation = useNavigation();

//   return (
//     <View style={styles.containerHome}>
//       <TouchableOpacity onPress={() => navigation.navigate("SuggestedRecipes")}>
//         <Image
//           source={fallveggie}
//           resizeMode="cover"
//           style={styles.dashboardButton}
//         ></Image>
//         <SubInfo />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate("PlanDinner")}>
//         <Image
//           source={fallveggie}
//           resizeMode="cover"
//           style={styles.dashboardButton}
//         ></Image>
//         <SubInfo2 />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate("MyPantry")}>
//         <Image
//           source={fallveggie}
//           resizeMode="cover"
//           style={styles.dashboardButton}
//         ></Image>
//         <SubInfo3 />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default DashBoard;

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
  dashboardButton: {
    width: 350,
    height: 160,
    borderRadius: 30,
    marginTop: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styleSheet.MainContainer}>
      <View
        style={{
          width: "95%",
          height: "25%",
          justifyContent: "center",
          margin: "2%",
        }}
      >
        <Text style={{ fontSize: 28, color: "black", textAlign: "center" }}>
          {" "}
          Welcome to QuiKDine{" "}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("SuggestedRecipes")}
        style={{
          width: "95%",
          height: "17%",
          justifyContent: "center",
          margin: "1%",
        }}
      >
        <ImageBackground
          source={fallveggie}
          resizeMode="cover"
          style={styles.image}
          borderRadius={30}
        >
          <Text style={styleSheet.text}>
            {" "}
            <SubInfo />{" "}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: "#AA00FF",
          width: "95%",
          height: "17%",
          justifyContent: "center",
          margin: "1%",
        }}
      >
        <Text style={styleSheet.text}> View - 2 </Text>
      </View>
      <View
        style={{
          backgroundColor: "#00C853",
          width: "95%",
          height: "17%",
          justifyContent: "center",
          margin: "1%",
        }}
      >
        <Text style={styleSheet.text}> View - 3 </Text>
      </View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: "#D3FAD9",
  },

  text: {
    fontSize: 26,
    color: "white",
    textAlign: "right",
  },
});
