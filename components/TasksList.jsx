import {
  Text,
  View,
  FlatList
} from "react-native";

const TasksList = ({ tasks }) => {
  let i = 0;

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(tasks, index) => {
          return 'task' + index
        }}
        renderItem={(task) => {
          return <Text>{task.description}</Text>
        }}
      />
    </View>
  );
};

export default TasksList;
