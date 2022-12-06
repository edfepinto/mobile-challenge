import { ThemeProvider } from "styled-components/native";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { Router } from "~/main/routes/main-router";
import { lightTheme } from "~/main/styles/themes/light";
import {
  SafeAreaView,
  Platform,
  StatusBar as statusBarConfig,
} from "react-native";
import { useEffect } from "react";
import { startupController } from "~/main/controllers/startup.controller";
import { GlobalStateProvider } from "~/main/context/global-state.context";

function App() {
  useEffect(() => {
    startupController.populateEventsWithMock();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop:
          Platform.OS === "android" ? statusBarConfig.currentHeight : 0,
      }}
    >
      <GlobalStateProvider>
        <ThemeProvider theme={lightTheme}>
          <StatusBar
            backgroundColor={lightTheme.statusBar.backgroundColor}
            style={lightTheme.statusBar.style}
          />
          <Router />
        </ThemeProvider>
      </GlobalStateProvider>
    </SafeAreaView>
  );
}

export default registerRootComponent(App);
