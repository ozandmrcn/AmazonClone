import type { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import { SCREENS } from '../utils/router';

const Stack = createNativeStackNavigator();

const { HOMESCREEN, PRODUCTSCREEN } = SCREENS;

/** Root native stack navigator containing the Home and Products screens. */
const RootNavigation: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={HOMESCREEN} component={HomeScreen} />
      <Stack.Screen name={PRODUCTSCREEN} component={ProductsScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
