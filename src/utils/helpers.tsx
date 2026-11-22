import { FontAwesome } from '@expo/vector-icons';
import type { ReactElement } from 'react';

/**
 * Builds the five-star rating row displayed on the Products screen.
 * A fractional rating replaces the next empty star with a half star.
 *
 * @param rating - Product rating on a zero to five scale.
 * @returns Five keyed star icon elements.
 */
export const getRating = (rating: number): ReactElement[] => {
  const stars: ReactElement[] = [];

  // Clamp malformed or out-of-range values so the row always has five stars.
  const boundedRating = Number.isFinite(rating)
    ? Math.min(Math.max(rating, 0), 5)
    : 0;
  const fullStars = Math.floor(boundedRating);

  for (let index = 0; index < 5; index += 1) {
    const isFull = index < fullStars;
    const isHalf = boundedRating % 1 !== 0 && index === fullStars;

    stars.push(
      <FontAwesome
        key={index}
        name={isFull ? 'star' : isHalf ? 'star-half-empty' : 'star-o'}
        color="#FFAF00"
        size={10}
      />,
    );
  }

  return stars;
};
