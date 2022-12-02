import * as React from "react";
import { Text, View } from "react-native";
import { t } from "~/shared/intl/translator";
import styled from "styled-components/native";

interface WordsProps {
    color: string
}

const Words = styled.Text<WordsProps>`
  color: ${(props) => props.color};
`;

export function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Words color="red">{t("Home!")}</Words>
    </View>
  );
}
