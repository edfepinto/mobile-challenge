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

function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop:
          Platform.OS === "android" ? statusBarConfig.currentHeight : 0,
      }}
    >
      <ThemeProvider theme={lightTheme}>
        <StatusBar
          backgroundColor={lightTheme.statusBar.backgroundColor}
          style={lightTheme.statusBar.style}
        />
        <Router />
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default registerRootComponent(App);
