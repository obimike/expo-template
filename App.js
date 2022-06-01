// import { StatusBar } from "expo-status-bar";
import { store } from "./store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigator";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}
