import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PacksList = ({ packs }) => {
  let i = 0;
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <FlatList
        data={packs}
        keyExtractor={(packs, index) => {
          return 'pack' + index;
        }}
        renderItem={({ item }, index) => {
          return (
            <Text
              onPress={() =>
                navigation.navigate('Pack', {
                  itemId: item.id,
                })
              }
            >
              {item.data.title}
            </Text>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default PacksList;
