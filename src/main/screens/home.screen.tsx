import * as React from "react";
import { ScrollView } from "react-native";
import { Carousel } from "~/main/components/carousel.component";
import data from "~/assets/api.json";

export function HomeScreen() {
  return (
    <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
      <Carousel
        data={data.filter((card) => card.category === "Shows e eventos")}
        category={"Shows e eventos"}
      />
      <Carousel
        data={data.filter((card) => card.category === "Passeios e tours")}
        category={"Passeios e tours"}
      />
      <Carousel
        data={data.filter((card) => card.category === "Passeios e tours")}
        category={"Passeios e tours"}
      />
      <Carousel
        data={data.filter((card) => card.category === "Passeios e tours")}
        category={"Passeios e tours"}
      />
      <Carousel
        data={data.filter((card) => card.category === "Passeios e tours")}
        category={"Passeios e tours"}
      />
      <Carousel
        data={data.filter((card) => card.category === "Passeios e tours")}
        category={"Passeios e tours"}
      />
    </ScrollView>
  );
}
