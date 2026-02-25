import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { EmptyStarSvg, HalfStarSvg, StarOrange } from '../assets/images';

interface StarRatingProps {
  rating?: number;
  size?: number;
}

const TOTAL_STARS = 5;

const StarRating: React.FC<StarRatingProps> = ({ rating = 0, size = 5 }) => {
  const calculatedStars = useMemo(() => {
    const safeRating = Math.max(0, Math.min(Number(rating) || 0, 5));
    const rounded = Math.round(safeRating * 2) / 2;
    const fullStars = Math.floor(rounded);
    const hasHalfStar = rounded % 1 !== 0;
    const emptyStars = TOTAL_STARS - fullStars - (hasHalfStar ? 1 : 0);

    return { fullStars, hasHalfStar, emptyStars };
  }, [rating]);

  return (
    <View style={styles.container}>
      {Array.from({ length: calculatedStars.fullStars }).map((_, i) => (
        <StarOrange
          key={`full-${i}`}
          fill="#FF9300"
          width={size}
          height={size}
        />
      ))}
      {calculatedStars.hasHalfStar && (
        <HalfStarSvg fill="#FF9300" width={size} height={size} />
      )}
      {Array.from({ length: calculatedStars.emptyStars }).map((_, i) => (
        <EmptyStarSvg
          key={`empty-${i}`}
          fill="#E0E0E0"
          width={size}
          height={size}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default React.memo(StarRating);
