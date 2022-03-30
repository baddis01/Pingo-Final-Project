import {
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import AnimatedLoader from "react-native-animated-loader";

const PacksList = ({ packs }) => {
  const navigation = useNavigation();
  const [urls, setUrls] = useState({});
  const [imagesLoading, setImagesLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(urls).length > 0) return;
    setImagesLoading(true);
    const storage = getStorage();
    const manReference = ref(storage, "/manchester.png");
    const lonReference = ref(storage, "/london.png");
    const leeReference = ref(storage, "/leeds.jpeg");
    const stadiumReference = ref(storage, "/stadium.jpeg");
    const randomReference = ref(storage, "/random.jpg");
    const sprReference = ref(storage, "/spring.jpg");
    const houseReference = ref(storage, "/household.png")
    Promise.all([
      getDownloadURL(lonReference),
      getDownloadURL(stadiumReference),
      getDownloadURL(houseReference),
      getDownloadURL(manReference),
      getDownloadURL(randomReference),
      getDownloadURL(leeReference),
      getDownloadURL(sprReference),
    ]).then(([lonUrl, stadUrl, houseUrl, manUrl, ranUrl, leeUrl, sprUrl]) => {
      setImagesLoading(false);
      setUrls(() => {
        return {
          london: lonUrl,
          stadium: stadUrl,
          household: houseUrl,
          manchester: manUrl,
          random: ranUrl,
          leeds: leeUrl,
          spring: sprUrl,
        };
      });
    });
  }, []);

  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded || imagesLoading) {
    return (
      <AnimatedLoader
        visible={true}
        source={require("../assets/lf30_editor_qngy49ar.json")}
        animationStyle={styles.lottie}
        speed={1}
      />
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={packs}
        keyExtractor={(packs, index) => {
          return "pack" + index;
        }}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate("Pack", {
                    packId: item.id,
                  })
                }
              >
                <Text style={styles.packs}>{item.data.title}</Text>

                <Image
                  style={styles.imagestyle}
                  source={{ uri: urls[item.data.image] }}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {},
  packs: {
    fontSize: 50,
    textAlign: "center",
    fontFamily: "BebasNeue_400Regular",
    marginTop: 10,
    color: '#24112F'
  },
  imagestyle: {
    flex: 1,
    width: null,
    height: 200,
    paddingTop: 25,
    paddingBottom: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});

export default PacksList;
