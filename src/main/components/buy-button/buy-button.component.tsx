import { Container, Title, Spinner, Wrapper } from "./buy-button.styles";

interface BuyButtonProps {
  title: string;
  isLoading: boolean;
  onPress?: () => void;
}

export function BuyButton({ onPress, title, isLoading }: BuyButtonProps) {
  return (
    <Container onPress={onPress}>
      <Wrapper>
        {isLoading ? (
          <Spinner size="large" color="white" />
        ) : (
          <Title>{title.toUpperCase()}</Title>
        )}
      </Wrapper>
    </Container>
  );
}
