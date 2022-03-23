import {
  Text,
  View,
  FlatList,
  SafeAreaView
} from "react-native";

const TasksList = ({ tasks }) => {
  let i = 0;

  return (
    <SafeAreaView>
      <FlatList
        data={tasks}
        keyExtractor={(tasks, index) => {
          return 'task' + index
        }}
        renderItem={(res) => {
          return <Text>{res.item.description}</Text>
        }}
      />
    </SafeAreaView>
  );
};

export default TasksList;
