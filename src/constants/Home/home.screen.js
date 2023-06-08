import { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import { Form } from "../../components/Form";
import { TaskList } from "../../components/TaskList";

import { styles } from "./home.styles";
import { DateTime } from "luxon";

import { save, load } from "../../storage";
import { tasksKey } from "../../constants";
import { Search } from "../../components/Search/Search";
import Edit from "../../components/Edit/Edit";

export function Home() {
  const [tasks, setTasks] = useState([]);
  // ---------------------------------------------------
  const [searchText, setSearchText] = useState("");
  // ---------------------------------------------------
  const [edit, setEdit] = useState(false);
  // ---------------------------------------------------
  const [idEdit, setIdEdit] = useState(null);

  async function loadTasks() {
    const tasksSalvas = await load(tasksKey);
    setTasks(tasksSalvas);
  }

  async function saveTasks(tasksData) {
    const ok = await save(tasksData, tasksKey);
    if (ok) setTasks(tasksData);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  function handleAdd(text = "") {
    const existsTask = tasks.includes(text);

    if (existsTask) {
      return Alert.alert("Atenção", "Essa task já foi inserida");
    }

    if (!text.length) {
      return;
    }

    const task = {
      id: DateTime.now().toString(),
      description: text,
      completed: false,
    };

    const newTasks = [task, ...tasks];

    saveTasks(newTasks);
  }

  function handleCheck(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    const taskUpdated = updatedTasks.find((task) => task.id === id);

    if (taskUpdated) {
      const taskIndex = updatedTasks.indexOf(taskUpdated);

      updatedTasks.splice(taskIndex, 1); 

      if (taskUpdated.completed) {
        updatedTasks.push(taskUpdated); 
      } else {
        updatedTasks.unshift(taskUpdated);
      }
    }

    saveTasks(updatedTasks);
  }

  function handleRemove(id) {
    const confirm = {
      text: "sim",
      onPress: () => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        saveTasks(updatedTasks);
      },
    };

    const cancel = {
      text: "não",
      style: "cancel",
    };

    Alert.alert("Remover tarefa", "Certeza que deseja apagar?", [
      confirm,
      cancel,
    ]);
  }
  function handleEdit(id) {
    setEdit(true);
    setIdEdit(id);
  }

  // ---------------------------------------------------------------------------------
  function changeName(id, novoNome) {
    setEdit(false);
    const updatedItems = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, description: novoNome };
      }
      return item;
    });

    saveTasks(updatedItems);
  }

  // ---------------------------------------------------------------------
  function handleSearch(text) {
    setSearchText(text);
  }

  function filterTasks() {
    return tasks.filter((task) =>
      task.description.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  // ---------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <Search searchText={searchText} onSearch={handleSearch} />
      <Form placeholder="Adicione uma tarefa" onSubmit={handleAdd} />

      <View style={styles.content}>
        <TaskList
          onCheck={handleCheck}
          onRemove={handleRemove}
          onEdit={handleEdit}
          tasks={filterTasks()}
        />
      </View>
      {edit ? <Edit idEdit={idEdit} changeName={changeName} /> : null}
    </View>
  );
}
