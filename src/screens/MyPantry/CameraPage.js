import { Camera, CameraType } from "expo-camera";
import { useState, useRef, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import cameraWhite from "../../img/camera.png";
import cameraFlipWhite from "../../img/camera-flip-white.png";

const CameraPage = () => {
  const { height, width } = Dimensions.get("window");
  const ref = useRef(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [ratio, setRatio] = useState("16:9");
  const [cameraPadding, setCameraPadding] = useState(
    (height - (width / 9) * 16) / 2
  );
  const [visReqObj, setVisReqObj] = useState({});
  const [idObj, setIdObj] = useState("");
  const navigation = useNavigation();
  let iconName = "fast-food";
  let cameraIcon = "camera";
  let cameraIconReverse = "camera-reverse-outline";
  // Removes Tab Navigation - Start
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
  // Removes Tab Navigation - End
  useEffect(() => {
    async function getData() {
      const dataResponse = await fetch(
        "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDwTU8anUs3wdIJqVoPy82vBp9uidntoyI",
        {
          method: "POST",
          body: JSON.stringify(visReqObj),
        }
      );
      const responseValue = await dataResponse.json();
      setIdObj(responseValue.responses[0].localizedObjectAnnotations[0].name);
    }

    if (visReqObj.requests !== undefined) {
      getData();
    }
  }, [visReqObj]);

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

  async function takePic() {
    const options = {
      quality: 1,
      base64: true,
      exif: false,
    };
    const photo = await ref.current.takePictureAsync(options);
    setVisReqObj({
      requests: [
        {
          image: { content: photo.base64 },
          features: [{ type: "OBJECT_LOCALIZATION", maxResults: 1 }],
        },
      ],
    });
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
          <Text style={styles.text}>{idObj}</Text>
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
  result: { flexDirection: "row", justifyContent: "flex-end" },
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
