import type { FC } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Category } from '../data/Categories';
import type { RootStackParamList } from '../models';
import { SCREENS } from '../utils/router';

type CategoriesNavigation = NativeStackNavigationProp<RootStackParamList>;

/** Horizontal category strip; selecting a category opens the results screen. */
const Categories: FC = () => {
  const navigation = useNavigation<CategoriesNavigation>();

  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {Category.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate(SCREENS.PRODUCTSCREEN)}
          style={styles.category}
        >
          <Image source={item.image} style={styles.imgStyle} />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  category: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  imgStyle: {
    width: 50,
    height: 50,
  },
  title: {
    color: '#2c4341',
  },
});
