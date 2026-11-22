import type { ImageSourcePropType } from 'react-native';

/** A recent-search recommendation card shown beside the payment shortcuts. */
export interface RecentSearchItem {
  id: number;
  title: string;
  image: ImageSourcePropType;
}
