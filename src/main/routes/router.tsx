import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "~/main/routes/tab-navigator.routes";

export function Router() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
