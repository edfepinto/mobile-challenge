export interface CardProps {
  title: string;
  date: string;
  local: string;
  banner: string;
  isLastItem: boolean;
  onPress: () => void;
}

