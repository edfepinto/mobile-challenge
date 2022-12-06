import { Container, Banner, Info, Time, Title, Local, TextWrapper } from "./ticket.styles";

interface TicketProps {
  title: string;
  date: string;
  local: string;
  banner: string;
}

export function Ticket({ title, banner, date, local }: TicketProps) {
  return (
    <Container>
      <Banner source={{ uri: banner }} />
      <Info>
        <Time>{date}</Time>
        <TextWrapper>
        <Title ellipsizeMode="tail" numberOfLines={2}>
          {title}
        </Title>
        </TextWrapper>
        <Local ellipsizeMode="tail" numberOfLines={2}>
          {local}
        </Local>
      </Info>
    </Container>
  );
}
