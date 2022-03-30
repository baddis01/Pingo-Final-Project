import { Text } from "react-native";
import * as Progress from "react-native-progress";

const UserProgress = ({ user, username, packSize }) => {
  let completedTasksCount = Object.keys(user).length;

  return (
    <>
      <Text>
        '{username}' has completed : {completedTasksCount}/{packSize}
      </Text>
      <Progress.Bar progress={completedTasksCount / packSize} width={200} />
    </>
  );
};

export default UserProgress;
