import { Camera, CameraType } from "expo-camera";
import { useState, useRef, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";

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
  // "Authorization": "Bearer $(gcloud auth print-access-token)"
  useEffect(() => {
    async function getData() {
      const dataResponse = await fetch(
        "https://vision.googleapis.com/v1/images:annotate",
        {
          method: "POST",
          headers: {
            // in terminal run "gcloud auth print-access-token" to get Authorization: Bearer info
            Authorization:
              "Bearer ya29.a0AX9GBdWy1acoV-HV_ry4qTwmeVxvcYNKJ40CNBLa2sWtz_ZYxVgQkDLsSahVc_zKbu7xI0dvAlTDAxBCCr2zFWRxQOer_S7YMVnZzmD0qrNkGE9o49weWvFPElLZrM3OxF7fTi244W27dH3C664FS-mMhtGyMOid6KyV2AaCgYKAfsSAQASFQHUCsbCc6KMRM5c9rF3z3r7kJjKIw0173",
            "x-goog-user-project": "maximal-journey-372215",
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(visReqObj),
        }
      );
      console.log(dataResponse.status);
      const responseValue = await dataResponse.json();
      setIdObj(responseValue.responses[0].localizedObjectAnnotations[0].name);
      console.log(
        responseValue.responses[0].localizedObjectAnnotations[0].name
      );
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
  function toggleRatio() {
    setRatio((current) => {
      if (current === "16:9") {
        setRatio("4:3");
        setCameraPadding((height - (width / 3) * 4) / 2);
      } else if (current === "4:3") {
        setRatio("1:1");
        setCameraPadding((height - width) / 2);
      } else {
        setRatio("16:9");
        setCameraPadding((height - (width / 9) * 16) / 2);
      }
    });
  }

  async function takePic() {
    console.log("SNAP");
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePic}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleRatio}>
            <Text style={styles.text}>Change Ratio</Text>
          </TouchableOpacity>
        </View>
      </Camera>
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
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default CameraPage;
