import { Text } from "react-native";
import * as Progress from "react-native-progress";

const UserProgress = ({ user, username, packSize }) => {
  if (username == "duncan") {
    console.log(user);
  }
  let completedTasksCount = Object.keys(user).length;

  return (
    <>
      <Text>
        '{username}' has completed : {completedTasksCount}/{packSize}
      </Text>
      <Progress.Bar progress={0.3} width={200} />
    </>
  );
};

export default UserProgress;
