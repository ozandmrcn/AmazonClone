import type { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';

/** Application root: safe area, status bar and navigation container. */
const App: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#9ee4d4' }}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
