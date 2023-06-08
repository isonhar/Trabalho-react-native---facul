import { StyleSheet } from "react-native";

import { colors } from "../../constants";

export const styles = StyleSheet.create({
  form: {
    width: "100%",
    height: 65,
    position: "absolute",
    zIndex: 5,
    bottom: 0,
    flexDirection: "row",
    paddingHorizontal: 24,
    backgroundColor: "blue",
    alignItems: "center",
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
  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
  },
});
