export interface DessertCardProps {
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
}
