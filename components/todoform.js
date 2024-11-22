import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";
import React from "react";

const ToDoForm = ({ addTask, tasks }) => {
  const [taskText, setTaskText] = React.useState("");

  const handleAddTask = () => {
    if (taskText.trim() === "") {
      Alert.alert("Error", "Task cannot be empty!");
      return;
    }
    if (tasks.includes(taskText)) {
      Alert.alert("Error", "Task already exists!");
      return;
    }
    addTask(taskText);
    setTaskText("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}
        onChangeText={setTaskText}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoForm;

const styles = StyleSheet.create({
  form: {
    width: "100%",
  },
  input: {
    width: "100%", // 确保输入框占满父容器
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  button: {
    width: "100%", // 确保按钮占满父容器
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
