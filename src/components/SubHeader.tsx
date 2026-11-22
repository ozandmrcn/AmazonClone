import type { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';

/** Delivery-location strip shown directly below the search header. */
const SubHeader: FC = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#88dae0', '#bdeee9', '#c3f1e1']}
    >
      <Feather name="map-pin" size={16} color="black" />
      <Text style={styles.deliver}>Delivery to Turkey - 232425</Text>
      <SimpleLineIcons name="arrow-down" size={10} color="black" />
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliver: {
    fontSize: 13,
    color: '#2c4341',
    paddingHorizontal: 6,
  },
});
