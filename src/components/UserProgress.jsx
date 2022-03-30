import { Text } from "react-native";

const UserProgress = ({ user, username, packSize }) => {
  if (username == "duncan") {
    console.log(user);
  }
  let completedTasksCount = Object.keys(user).length;

  return (
    <Text>
      '{username}' has completed : {completedTasksCount}/{packSize}
    </Text>
  );
};

export default UserProgress;
