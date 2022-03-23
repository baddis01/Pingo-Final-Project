import { Text, View } from "react-native";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function UserInfo() {
    const { user } = useContext(UserContext);
    if (!user) {
        return (
            <View>
                <Text>no user</Text>
            </View>
        );
    }
    return (
        <View>
            <Text>{user.username}</Text>
        </View>
    );
}
