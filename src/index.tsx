import { ThemeProvider } from "styled-components/native";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { Router } from "~/main/routes/router";
import { lightTheme } from "~/shared/styles/themes/light";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <StatusBar
        backgroundColor={lightTheme.statusBar.backgroundColor}
        style={lightTheme.statusBar.style}
      />
      <Router />
    </ThemeProvider>
  );
}

export default registerRootComponent(App);
