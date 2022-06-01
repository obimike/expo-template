import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import First_page from "../screens/intro/First_page";
import Splash from "../screens/Splash";

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="First_page" component={First_page} />
    </Stack.Navigator>
  );
};

export default index;
