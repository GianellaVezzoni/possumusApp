import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { NewCommodityProvider } from './src/context/CommodityContext';
import { Navigator } from './src/navigator/Navigator';

const App = () => {
  return (
    <NewCommodityProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </NewCommodityProvider>
  );
};

export default App;
