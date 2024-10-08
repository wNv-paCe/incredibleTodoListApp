import { View, Text } from "react-native";
import React from "react";
import ToDoList from "./todolist";
import ToDoForm from "./todoform";

const App = () => {
  return (
    <View>
      <ToDoList />
      <ToDoForm />
    </View>
  );
};

export default App;
