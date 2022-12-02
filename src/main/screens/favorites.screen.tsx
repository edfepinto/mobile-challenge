import * as React from "react";
import { Text, View } from "react-native";
import { t } from "~/shared/intl/translator";

export function FavoritesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{t("Favorites!")}</Text>
    </View>
  );
}