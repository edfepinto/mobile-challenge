import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Text, View, FlatList } from "react-native";
import { Card } from "~/main/components/card/card.component";
import { screensName } from "~/shared/constants/screens-name.const";

export function Carousel({ data, category }) {
  const navigation = useNavigation<any>();

  return (
    <View style={{ marginBottom: 10 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          alignSelf: "flex-start",
          marginBottom: 10,
        }}
      >
        {category}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          flex: 1,
          height: 230,
        }}
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
              <Card
                date={item.date}
                local={item.local}
                title={item.title}
                banner={item.banner}
                isLastItem={isLastItem}
                onPress={() =>
                  navigation.navigate(screensName.homeInternalRoutes, {
                    screen: item.title,
                  })
                }
              />
            );
          }}
        />
      </View>
    </View>
  );
}
