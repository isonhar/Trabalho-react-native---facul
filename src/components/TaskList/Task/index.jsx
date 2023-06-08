import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { colors } from "../../../constants";
import { Feather } from "@expo/vector-icons";

const CheckButton = ({ onPress, checked }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {checked ? (
        <Image source={require("../../../../assets/icons/checked.png")} />
      ) : (
        <Image source={require("../../../../assets/icons/unchecked.png")} />
      )}
    </TouchableOpacity>
  );
};

export const TaskItem = ({ task, onCheck, onRemove, onEdit }) => {
  const textStyle = task.completed
    ? {
        ...styles.taskText,
        textDecorationLine: "line-through",
        color: colors.gray[300],
      }
    : styles.taskText;

  return (
    <View style={styles.container}>
      <CheckButton onPress={() => onCheck(task.id)} checked={task.completed} />

      <Text style={textStyle}>{task.description}</Text>
      {/* ----------------------------------------------- */}
      <TouchableOpacity style={styles.edit} onPress={() => onEdit(task.id)}>
        <Feather name="edit-3" size={24} color="black" />
      </TouchableOpacity>
      {/* ----------------------------------------------- */}
      <TouchableOpacity onPress={() => onRemove(task.id)}>
        <Feather name="trash-2" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskText: {
    flex: 1,
    color: colors.gray[100],
    fontSize: 14,
  },
  container: {
    marginTop: 8,
    flexDirection: "row",
    padding: 12,
    gap: 8,
    borderRadius: 8,
    color: colors.gray[100],
    justifyContent: "flex-start",
    alignItems: "center",
    height: 64,
    backgroundColor: colors.gray[500],
  },
  edit: {
    marginRight: 24,
  },
});
