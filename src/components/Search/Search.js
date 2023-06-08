import React from "react";
import { TextInput, StyleSheet } from "react-native";

export function Search({ searchText, onSearch }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Pesquisar tarefas"
      value={searchText}
      onChangeText={onSearch}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "70%",
    textAlign: "center",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30,
    marginTop: 70,
  },
});
