import type { FC } from 'react';
import { Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { CarouselData } from '../data/CarouselData';

/** Auto-playing promotional banner carousel without visible pagination. */
const Carousel: FC = () => {
  return (
    <Swiper autoplay={true} showsPagination={false} style={styles.wrapper}>
      {CarouselData.map((item) => (
        <Image key={item.id} source={item.image} style={styles.imgStyle} />
      ))}
    </Swiper>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    height: 250,
  },
  wrapper: {
    height: 300,
  },
});
