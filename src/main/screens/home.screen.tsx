import * as React from "react";
import { ScrollView } from "react-native";
import { EventEntityBody } from "~/domain/entities/event.entity";
import { Carousel } from "~/main/components/carousel.component";
import eventsInMemoryRepository from "../repositories/events/events-in-memory.repository";

export function HomeScreen() {
  const [events, setEvents] = React.useState<EventEntityBody[]>([]);

  // This is needed to be able to fetch the mock after it be injected
  React.useEffect(() => {
    setTimeout(() => {
      setEvents(eventsInMemoryRepository.listAll());
    }, 10);
  }, []);

  return (
    <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
      {Array.from({ length: 10 }).map((_, index) => (
        <Carousel
          data={events.filter((card) => card.category === "Shows e eventos")}
          category={index % 2 == 0 ? "Shows e eventos" : "Passeios e tours"}
          key={index}
        />
      ))}
    </ScrollView>
  );
}
