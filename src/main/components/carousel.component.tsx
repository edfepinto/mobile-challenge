import * as React from "react";
import { Text, View, FlatList } from "react-native";
import { Card } from "~/main/components/card.component";

export function Carousel({ data, category }) {
  const [layout, setLayout] = React.useState({
    width: 0,
    height: 0,
  });

  return (
    <>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          alignSelf: "flex-start",
          paddingLeft: 8,
          marginBottom: 10
        }}
      >
        {category}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          height: "40%",
        }}
        onLayout={(event) => setLayout(event.nativeEvent.layout)}
      >
        <FlatList
          keyExtractor={(item) => item.title}
          alwaysBounceHorizontal={false}
          alwaysBounceVertical={false}
          bounces={false}
          horizontal
          data={data}
          renderItem={({ item, index }) => {
            const isLastItem = index + 1 === data.length;
            return (
              <Card data={item} isLastItem={isLastItem} width={layout.width} />
            );
          }}
        />
      </View>
    </>
  );
}
