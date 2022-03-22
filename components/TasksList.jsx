const TasksList = ({ tasks }) => {
  let i = 0;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={i++}>{task.description}</li>;
      })}
    </ul>
  );
};

export default TasksList;
