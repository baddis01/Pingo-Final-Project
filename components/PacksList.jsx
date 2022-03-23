import { Text, View, FlatList, SafeAreaView } from "react-native";

const PacksList = ({ packs }) => {
  let i = 0;

  return (
    <SafeAreaView>
      <FlatList
        data={packs}
        keyExtractor={(packs, index) => {
          return "pack" + index;
        }}
        renderItem={(pack, index) => {
          return <Text>{pack.title}</Text>;
        }}
      />
    </SafeAreaView>
  );
};

export default PacksList;
