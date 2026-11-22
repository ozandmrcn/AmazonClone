import type { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import type { ServiceCardProps } from '../models';

/** A recent-search recommendation card with a title and thumbnail. */
const ServiceCard: FC<ServiceCardProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.recentSearch}>{item.title}</Text>
      <Image source={item.image} style={styles.serviceImg} />
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 140,
    padding: 5,
    marginLeft: 8,
    borderRadius: 5,
  },
  recentSearch: {
    fontSize: 13,
    marginBottom: 8,
    color: '#000000',
  },
  serviceImg: {
    width: '100%',
    height: 130,
  },
});
