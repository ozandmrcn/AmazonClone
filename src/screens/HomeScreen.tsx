import type { FC } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Brands from '../components/Brands';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Deals from '../components/Deals';
import Header from '../components/Header';
import Services from '../components/Services';
import SubHeader from '../components/SubHeader';

/** Composes the scrollable home feed from its section components. */
const HomeScreen: FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <SubHeader />
        <Categories />
        <Carousel />
        <Services />
        <Deals />
        <Brands />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
