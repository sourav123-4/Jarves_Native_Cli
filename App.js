import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/Navigator';
import {Provider} from 'react-redux';
import {Store} from './src/redux/app/Store.js';

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
