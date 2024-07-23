import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const MainScreen = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Math.random().toString(), title: task },
      ]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Button title="Sil" onPress={() => deleteTask(item.id)} />
    </View>
  );

  return (
    <View>
      <TextInput
        onChangeText={setTask}
        value={task}
        placeholder="Add a new task"
        style={styles.input}
      />
      <Button title="Add" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    padding: 10,
    borderBottomColor: "#ccc",
  },
});
