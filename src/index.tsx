import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { Router } from "~/main/routes/router";

function App() {
  return (
    <>
      <StatusBar
        backgroundColor="#fff"
        style="dark"
      />
      <Router />
    </>
  );
}

export default registerRootComponent(App);
