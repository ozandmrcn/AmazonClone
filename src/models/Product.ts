import type { ImageSourcePropType } from 'react-native';

/** A single product card rendered in the Products screen results list. */
export interface Product {
  id: number;
  productName: string;
  rating: number;
  ratingCount: string;
  price: string;
  crossOutText: string;
  deliveryBy: string;
  image: ImageSourcePropType;
}
