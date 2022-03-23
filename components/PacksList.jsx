import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity
} from "react-native";


const PacksList = ({ packs, navigation }) => {
  let i = 0;
  console.log(packs[1].title)
  return (
    < SafeAreaView >
      <FlatList
        data={packs}
        keyExtractor={(packs, index) => {
          return 'pack' + index
        }}
        renderItem={(pack, index) => {
          return <Text onPress={() => navigation.navigate("Pack")}>{pack.title}</Text>
        }
        } />
    </SafeAreaView >
  );
};

export default PacksList;
