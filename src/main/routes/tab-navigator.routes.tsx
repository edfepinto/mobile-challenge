import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { screensName } from "~/shared/constants/screens-name.const";
import { t } from "~/shared/intl/translator";
import { TicketsScreen } from "~/main/screens/tickets.screen";
import { FavoritesScreen } from "~/main/screens/favorites.screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeInternalsRoutes } from "./home-internals.routes";

export function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
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

          if (route.name === screensName.homeInternalRoutes) {
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
      <Tab.Screen 
        name={screensName.homeInternalRoutes}
        options={{ title: t("Home"), headerShown: false }}
        component={HomeInternalsRoutes}

      />

      <Tab.Screen
        name={screensName.tickets}
        options={{ title: t("Tickets"), headerShown: false  }}
        component={TicketsScreen}
      />

      <Tab.Screen
        name={screensName.favorites}
        options={{ title: t("Favorites"), headerShown: false  }}
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  );
}
