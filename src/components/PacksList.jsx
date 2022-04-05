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

const PacksList = ({ packs }) => {
  const navigation = useNavigation();

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
                  source={{ uri: item.data.imageUrl }}
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
    color: "#24112F",
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
