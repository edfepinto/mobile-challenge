import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { UuidAdapter } from "~/infra/uuid/uuid.adapter";

function App() {
  return (
    <View style={styles.container}>
      <Text>
        Open up App.tsx to start working on your app!
        <Text>{new UuidAdapter().generate()}</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default registerRootComponent(App);
