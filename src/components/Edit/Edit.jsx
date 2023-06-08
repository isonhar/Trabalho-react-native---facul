import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { colors } from "../../constants";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function Edit({ idEdit, changeName }) {
  const [novoNome, setNovoNome] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Novo Nome"
        placeholderTextColor={colors.gray[300]}
        keyboardType="default"
        onChangeText={setNovoNome}
        value={novoNome}
      />
      <TouchableOpacity onPress={() => changeName(idEdit, novoNome)}>
        <Feather name="edit-3" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: 90,
    width: "95%",
    margin: "auto",
    marginTop: 40,
    paddingHorizontal: 24,
    gap: 20,
    zIndex: 10,
    backgroundColor: "black",
    borderWidth: 5,
    borderColor: "blue",
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    width: "100%",
    justifyContent: "flex-start",
  },
  input: {
    height: 50,
    flex: 1,
    backgroundColor: colors.gray[500],
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 4,
  },
});
