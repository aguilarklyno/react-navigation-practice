import  React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen.js";
import BookScreen from "./screens/BookScreen.js";
import NameScreen from "./screens/NameScreen.js";
import TeamScreen from "./screens/TeamScreen.js";
import MarketScreen from "./screens/MarketScreen.js";
import SocialScreen from "./screens/SocialScreen.js";
import OthersScreen from "./screens/OthersScreen.js";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ HomeScreen } />
          <Stack.Screen name="Book" component={ BookScreen } />
          <Stack.Screen name="Name" component={ NameScreen } />
          <Stack.Screen name="Team" component={ TeamScreen } />
          <Stack.Screen name="Market" component={ MarketScreen } />
          <Stack.Screen name="Social" component={ SocialScreen } />
          <Stack.Screen name="Others" component={ OthersScreen } />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}
