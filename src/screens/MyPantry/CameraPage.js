import { Camera, CameraType } from "expo-camera";
import { useState, useRef, useEffect, useContext } from "react";
import {
  Button,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppContext from "../../Context/AppContext";

const CameraPage = () => {
  const { height, width } = Dimensions.get("window");
  const ref = useRef(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [ratio, setRatio] = useState("16:9");
  const [cameraPadding, setCameraPadding] = useState(
    (height - (width / 9) * 16) / 2
  );
  const [idObj, setIdObj] = useState([]);
  const navigation = useNavigation();
  const { pantryList, setPantryList, serverIP } = useContext(AppContext);

  let iconName = "fast-food";
  let cameraIcon = "camera";
  let cameraIconReverse = "camera-reverse-outline";

  // Removes Tab Navigation
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: { backgroundColor: "#333333", height: 70 },
      });
  }, [navigation]);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  function addToPantry(obj) {
    setPantryList([...pantryList, obj.description]);
    setIdObj([]);
    alert("Added to pantry");
    // navigation.navigate("My Pantry");
  }
  // quality compresses image to reduce size, value of 0-1
  async function takePic() {
    const options = {
      quality: 0.25,
      base64: true,
      exif: false,
    };
    const photo = await ref.current.takePictureAsync(options);

    const visionRequest = {
      requests: [
        {
          image: { content: photo.base64 },
          features: [{ type: "LABEL_DETECTION", maxResults: 10 }],
        },
      ],
    };
    const dataResponse = await fetch(
      `http://${serverIP}:5001/api/googlevision/`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ visionRequest }),
      }
    );
    const responseValue = await dataResponse.json();
    console.log("camerapage", responseValue.responses[0].labelAnnotations);
    setIdObj(responseValue.responses[0].labelAnnotations);
  }

  return (
    <View style={styles.container}>
      <Camera
        style={[
          styles.camera,
          { marginTop: cameraPadding, marginBottom: cameraPadding },
        ]}
        type={type}
        ratio={ratio}
        ref={ref}
      >
        <View style={styles.result}>
          {idObj.map((obj, index) => {
            return (
              <TouchableOpacity onPress={() => addToPantry(obj)} key={index}>
                <View>
                  <Text style={styles.text}>{obj.description}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </Camera>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("My Pantry")}
        >
          <Ionicons name={iconName} size={50} color="white" />
          <Text style={styles.text}>My Pantry</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePic}>
          <Ionicons name={cameraIcon} size={60} color="white" />
          <Text style={styles.cameraText}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          {/* <Text style={styles.text}>Flip Camera</Text> */}
          <Ionicons name={cameraIconReverse} size={60} color="white" />
          <Text style={styles.cameraText}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  camera: { flex: 1 },
  result: { flexDirection: "column", justifyContent: "flex-end" },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    marginBottom: 20,
    marginTop: -25,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  cameraText: {
    marginTop: -8,
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});

export default CameraPage;
