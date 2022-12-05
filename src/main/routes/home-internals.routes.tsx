import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { screensName } from "~/shared/constants/screens-name.const";
import data from "~/assets/api.json";
import { HomeScreen } from "~/main/screens/home.screen";

const Stack = createNativeStackNavigator();

export function HomeInternalsRoutes() {
  const cards = data;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screensName.home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      {cards.map((card, index) => (
        <Stack.Screen
          key={index}
          name={card.title}
          component={Something(card.title)}
        />
      ))}
    </Stack.Navigator>
  );
}

function Something(text: string) {
  return () => {
    return (
      <View>
        <Text>{text}</Text>
      </View>
    );
  };
}
