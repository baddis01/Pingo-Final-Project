import { SafeAreaView, FlatList } from "react-native";
import UserProgress from "./UserProgress";

const UsersList = ({ users, packSize }) => {
  const usersArr = Object.entries(users);
  return (
    <SafeAreaView>
      <FlatList
        data={usersArr}
        keyExtractor={(user, index) => {
          return "user" + index;
        }}
        renderItem={(user) => (
          <UserProgress
            username={user.item[0]}
            user={user.item[1]}
            packSize={packSize}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default UsersList;
