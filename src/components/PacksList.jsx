import { Text, FlatList, SafeAreaView } from "react-native";
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
                        <Text
                            onPress={() =>
                                navigation.navigate("Pack", {
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
