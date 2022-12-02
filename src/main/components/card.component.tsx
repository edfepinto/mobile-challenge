import * as React from "react";
import { Text, View, Image } from "react-native";

interface CardProps {
  data: {
    title: string;
    description: string;
    date: string;
    local: string;
    ticketLimit: number;
    organizer: string;
    category: string;
    banner: string;
  };
  width: number;
  isLastItem: boolean;
}

export function Card({ data, width, isLastItem }: CardProps) {
  return (
    <View
      style={{
        flex: 1,
        marginRight: isLastItem ? 0 : 10,
        width: width * 0.45,
        justifyContent: "flex-start",
      }}
      onTouchStart={() => {
        // logic to open modal with card detailed
      }}
    >
      <Image
        source={{ uri: data.banner }}
        style={{ height: "45%", resizeMode: "stretch", margin: 5 }}
      />
      <View style={{ justifyContent: "space-between", paddingLeft: 7 }}>
        <Text style={{ color: "tomato", fontSize: 16, fontWeight: "bold" }}>
          {data.date}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{data.title}</Text>
        <Text>{data.local}</Text>
      </View>
    </View>
  );
}
