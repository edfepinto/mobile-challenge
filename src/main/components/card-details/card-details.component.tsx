import { CardDetailsProps } from "./card-details.props";
import {
  Container,
  Title,
  QuickInfo,
  Description,
  Organizer,
  Section,
  TicketsLimit,
  Time,
  Local,
  Name,
  Banner,
  SectionBody,
  Row,
  Icon,
  SectionTitle,
  Avatar,
  FloatingButtonWrapper,
  FloatingButtonOffset
} from "./card-details.styles";
import { t } from "~/shared/intl/translator";

// UPDATE ME: This package has problem in his types currently, when possible, add it as dev-dependency
import { AntDesign, Entypo } from "react-native-vector-icons";
import { BuyButton } from "../buy-button/buy-button.component";

export function CardDetails({
  title,
  description,
  date,
  local,
  banner,
  organizer,
  ticketsLimit,
}: CardDetailsProps) {
  return (
    <FloatingButtonWrapper>
      <Container>
        <Section>
          <Banner source={{ uri: banner }} />
          <SectionBody>
            <Title>{title}</Title>
            <QuickInfo>
              <Row>
                <Icon>
                  <Entypo name="location-pin" size={24} color="black" />
                </Icon>
                <Local>{local}</Local>
              </Row>
              <Row>
                <Icon>
                  <AntDesign name="clockcircle" size={18} color="black" />
                </Icon>
                <Time>{date}</Time>
              </Row>
              <Row>
                <Icon>
                  <Entypo name="ticket" size={24} color="black" />
                </Icon>
                <TicketsLimit>
                  {t("Tickets available: ")}
                  {ticketsLimit}
                </TicketsLimit>
              </Row>
            </QuickInfo>
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <SectionTitle>{t("Description")}</SectionTitle>
            <Description>{description}</Description>
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <SectionTitle>{t("Organizer")}</SectionTitle>
            <Organizer>
              <Avatar>
                <AntDesign name="user" size={50} color="black" />
              </Avatar>
              <Name>{organizer}</Name>
            </Organizer>
          </SectionBody>
        </Section>
      </Container>

      <FloatingButtonOffset style={{ height: 100 }} />
      <BuyButton title={t("Purchase")} isLoading={false} />
    </FloatingButtonWrapper>
  );
}
