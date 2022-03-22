import {
  Text,
  View,
  FlatList
} from "react-native";


const PacksList = ({ packs }) => {
  let i = 0;

  return (
    <View>
      <FlatList
        data={packs}
        keyExtractor={(packs, index) => {
          return 'pack' + index
        }}
        renderItem={(pack, index) => {
          return <Text>{pack.title}</Text>
        }} />
    </View>
  );
};

export default PacksList;
