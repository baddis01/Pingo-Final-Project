import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

const UsersList = () => {
  const { params } = useRoute();

  return (
    <View>
      <Text>Users</Text>
    </View>
  );
};

export default UsersList;
