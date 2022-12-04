import * as React from "react";
import {
  Container,
  Title,
  Date,
  Local,
  CardInfo,
  Image,
  TextWrapper,
} from "./card.styles";

interface CardProps {
  title: string;
  date: string;
  local: string;
  banner: string;
  isLastItem: boolean;
}

export function Card({ title, date, local, banner, isLastItem }: CardProps) {
  return (
    <Container
      isLastItem={isLastItem}
      onTouchStart={() => {
        // logic to open modal with card detailed
      }}
    >
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
  );
}
