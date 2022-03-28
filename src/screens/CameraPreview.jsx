import { View, ImageBackground, TouchableOpacity, Text } from "react-native";

const CameraPreview = ({ photo, savePhoto, retakePicture, styles }) => {
  return (
    <View
      style={{
        backgroundColor: "transparent",
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.flipButton} onPress={retakePicture}>
              <Text style={styles.previewText}> Re-take </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}></View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.flipButton}
              onPress={() => savePhoto(photo.uri)}
            >
              <Text style={styles.previewText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CameraPreview;
