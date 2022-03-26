import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useNavigation } from "@react-navigation/native";
import * as db from "../db";

const CameraComp = () => {
  const {
    params: { packId, taskId, randomDabId },
  } = useRoute();
  const { user } = useContext(UserContext);
  //console.log(packId, taskId, user, "< camera comp info");
  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  let camera = Camera;

  const navigation = useNavigation();

  const __takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    setPreviewVisible(true);
    setCapturedImage(photo);
    uploadImageAsync(photo.uri);
  };

  async function uploadImageAsync(uri) {
    // console.log(uri);
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        // console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const storage = getStorage();
    const storageRef = ref(storage, `${packId}/${user.username}/${taskId}`);

    await uploadBytes(storageRef, blob);
    //console.log("image uploaded");
    await db.setTaskCompleted(packId, user.username, taskId, randomDabId);
    //console.log("db updated");
    navigation.navigate("Pack", {
      packId,
    });
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(r) => {
          camera = r;
        }}
      >
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.flipButton}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={__takePicture}
              style={styles.captureButton}
            />
          </View>
          <View style={styles.buttonContainer}></View>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonsContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  flipButton: {
    alignSelf: "center",
  },
  captureButton: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  text: {
    fontSize: 40,
    color: "white",
  },
  buttonContainer: {
    flex: 1,
    height: 70,
    alignSelf: "flex-end",
  },
});

export default CameraComp;
