import { CardDetailsProps } from "./card-details.props";
import {
  Container,
  Title,
  QuickInfo,
  Description,
  Organizer,
  Section,
  Name,
  Banner,
  SectionBody,
  Row,
  Icon,
  SectionTitle,
  Avatar,
  FloatingButtonWrapper,
  FloatingButtonOffset,
  GenericText,
} from "./card-details.styles";
import { t } from "~/shared/intl/translator";
import { useState } from "react";
import { BuyButton } from "../buy-button/buy-button.component";
import ticketsInMemoryRepository from "~/main/repositories/tickets/tickets-in-memory.repository";
import { useGlobalState } from "~/main/context/global-state.context";

// UPDATE ME: This package has problem in his types currently, when possible, add it as dev-dependency
import { AntDesign, Entypo } from "react-native-vector-icons";

export function CardDetails({
  title,
  description,
  date,
  local,
  banner,
  organizer,
}: CardDetailsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { setGlobalState } = useGlobalState();

  function handlePurchase() {
    setIsLoading(true);
    setTimeout(() => {
      const ticket = { title, banner, date, local };

      ticketsInMemoryRepository.save(ticket);
      setGlobalState((prevValue) => ({
        ...prevValue,
        tickets: [...prevValue.tickets, ticket],
      }));

      setIsLoading(false);
    }, 1000);
  }

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
                <GenericText>{local}</GenericText>
              </Row>
              <Row>
                <Icon>
                  <AntDesign name="clockcircle" size={18} color="black" />
                </Icon>
                <GenericText>{date}</GenericText>
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
      <BuyButton
        title={t("Purchase")}
        isLoading={isLoading}
        onPress={handlePurchase}
      />
    </FloatingButtonWrapper>
  );
}
