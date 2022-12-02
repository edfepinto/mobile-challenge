import { registerRootComponent } from "expo";
import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { screensName } from "./shared/constants/screens-name.const";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function FavoritesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Favorites!</Text>
    </View>
  );
}

function TicketsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tickets!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === screensName.tickets) {
              return focused ? (
                <MaterialCommunityIcons
                  name="ticket-confirmation"
                  size={size}
                  color={color}
                />
              ) : (
                <MaterialCommunityIcons
                  name="ticket-confirmation-outline"
                  size={size}
                  color={color}
                />
              );
            }

            if (route.name === screensName.home) {
              return focused ? (
                <Ionicons name="home" size={size} color={color} />
              ) : (
                <Ionicons name="home-outline" size={size} color={color} />
              );
            }

            if (route.name === screensName.favorites) {
              return focused ? (
                <MaterialIcons name="favorite" size={size} color={color} />
              ) : (
                <MaterialIcons
                  name="favorite-outline"
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tickets" component={TicketsScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
