import { CardDetails } from "./card-details.component";
import { CardDetailsProps } from "./card-details.props";

export function cardDetailsComponentFactory(props: CardDetailsProps) {
  return () => <CardDetails {...props} />;
}
