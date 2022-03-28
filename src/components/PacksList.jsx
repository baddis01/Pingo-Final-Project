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
import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
    Promise.all([
      getDownloadURL(manReference),
      getDownloadURL(lonReference),
    ]).then(([manUrl, lonUrl]) => {
      setImagesLoading(false);
      setUrls(() => {
        return { manchester: manUrl, london: lonUrl };
      });
    });
  }, []);

  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded || imagesLoading) {
    return <AppLoading />;
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
              </TouchableOpacity>
              <Image
                style={styles.imagestyle}
                source={{ uri: urls[item.data.image] }}
              />
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
});

export default PacksList;
