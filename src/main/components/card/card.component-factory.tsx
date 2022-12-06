import { Card } from "./card.component";
import { CardProps } from "./card.props";

export function cardComponentFactory(props: CardProps) {
  return () => <Card {...props} />;
}
