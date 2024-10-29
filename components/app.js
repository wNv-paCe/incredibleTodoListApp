import { View, Text } from "react-native";
import { useState } from "react";
import React from "react";
import ToDoList from "./todolist";
import ToDoForm from "./todoform";

const App = () => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  return (
    <View>
      <ToDoList tasks={tasks} />
      <ToDoForm setTasks={setTasks} />
    </View>
  );
};

export default App;
