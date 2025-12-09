export interface CardProps {
  title: string;
  price: number;
  location: string;
  image?: string;
}

export interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}
