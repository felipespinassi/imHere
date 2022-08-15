import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131016",
    flex: 1,
    padding: 34,
  },
  eventName: {
    color: "#fdfcfe",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
  },
  input: {
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    height: 56,
    color: "#fff",
    padding: 16,
    fontSize: 22,
    flex: 1,
    marginRight: 12,
  },
  buttonText: {
    color: "#fff",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
