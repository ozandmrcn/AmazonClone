import type { ImageSourcePropType } from 'react-native';

/** A shortcut shown in the horizontally scrollable category strip. */
export interface CategoryItem {
  id: number;
  title: string;
  image: ImageSourcePropType;
}
