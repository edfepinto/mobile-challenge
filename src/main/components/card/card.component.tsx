import * as React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { CardProps } from "./card.props";
import {
  Container,
  Title,
  Date,
  Local,
  CardInfo,
  Image,
  TextWrapper,
} from "./card.styles";

export function Card({
  title,
  date,
  local,
  banner,
  isLastItem,
  onPress
}: CardProps) {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
    >
      <Container isLastItem={isLastItem}>
        <Image source={{ uri: banner }} />
        <CardInfo>
          <TextWrapper>
            <Date ellipsizeMode="tail" numberOfLines={1}>
              {date}
            </Date>
          </TextWrapper>
          <TextWrapper>
            <Title ellipsizeMode="tail" numberOfLines={3}>
              {title}
            </Title>
          </TextWrapper>
          <TextWrapper>
            <Local ellipsizeMode="tail" numberOfLines={1}>
              {local}
            </Local>
          </TextWrapper>
        </CardInfo>
      </Container>
    </TouchableWithoutFeedback>
  );
}
