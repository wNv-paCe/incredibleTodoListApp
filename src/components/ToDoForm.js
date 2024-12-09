import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [userTasks, setUserTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = require("../data/tasks.json");
        console.log("Tasks loaded", data.tasks);
        setTasks(data.tasks || []);
      } catch (error) {
        console.error("Get task failed", error);
        setTasks([]);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = () => {
    if (taskText.trim() === "") {
      Alert.alert("Error", "Task cannot be empty!");
      return;
    }
    if (userTasks.includes(taskText)) {
      Alert.alert("Error", "Task already exists!");
      return;
    }
    addTask(taskText);
    setUserTasks([...userTasks, taskText]);
    setTaskText("");
  };

  const handleGenerateRandomTask = () => {
    if (!Array.isArray(tasks) || tasks.length === 0) {
      Alert.alert("Error", "No tasks available to choose from!");
      return;
    }
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setTaskText(tasks[randomIndex]);
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
      <TouchableOpacity
        style={[styles.button, styles.randomButton]}
        onPress={handleGenerateRandomTask}
      >
        <Text style={styles.buttonText}>Generate Random Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoForm;

const styles = StyleSheet.create({
  form: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  randomButton: {
    backgroundColor: "#28a745", // 设置随机任务按钮的颜色
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
