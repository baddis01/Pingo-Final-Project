import { StyleSheet, SafeAreaView, Dimensions, Image } from "react-native";
import * as Location from "expo-location";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useEffect } from "react";
import { Marker } from "react-native-maps";

const Maps = ({ completedTasks }) => {
  let arrayOfCords = [];

  for (const properies in completedTasks) {
    let coordObj = completedTasks[properies].coordinates;
    if (typeof coordObj !== "undefined") {
      arrayOfCords.push(Object.values(coordObj));
    }
  }

  useEffect(() => {
    async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    };
  });

  return (
    <SafeAreaView>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 52.45506556696268,
          longitude: -4.1454631333560976,
          latitudeDelta: -4,
          longitudeDelta: 12,
        }}
      >
        {arrayOfCords.map((marker, index) => (
          <Marker
            coordinate={{ latitude: marker[0], longitude: marker[1] }}
            title={marker.title}
            key={index}
          >
            <Image
              source={require("../assets/markers/marker-01.png")}
              style={{ height: 40, width: 30 }}
            />
          </Marker>
        ))}
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Maps;
