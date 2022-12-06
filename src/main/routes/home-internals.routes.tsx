import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screensName } from "~/shared/constants/screens-name.const";
import data from "~/assets/api.json";
import { HomeScreen } from "~/main/screens/home.screen";
import { cardDetailsComponentFactory } from "~/main/components/card-details/card-details.component-factory";

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
          component={cardDetailsComponentFactory({
            title: card.title,
            description: card.description,
            date: card.date,
            local: card.local,
            banner: card.banner,
            organizer: card.organizer,
            ticketsLimit: card.ticketsLimit,
          })}
        />
      ))}
    </Stack.Navigator>
  );
}
