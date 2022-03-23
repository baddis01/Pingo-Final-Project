import { Text, FlatList, SafeAreaView } from "react-native";

const TasksList = ({ tasks }) => {
    return (
        <SafeAreaView>
            <FlatList
                data={tasks}
                keyExtractor={(tasks, index) => {
                    return "task" + index;
                }}
                renderItem={(res) => {
                    return <Text>{res.item.description}</Text>;
                }}
            />
        </SafeAreaView>
    );
};

export default TasksList;
