import { Home } from "./src/screens/Home";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Home />
    </>
  );
}
