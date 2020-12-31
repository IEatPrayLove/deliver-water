// import 'react-native-gesture-handler';
import * as React from 'react';
// import {} from 'antd-mobile-rn';
import Routers from './src/router';
import {Provider} from 'mobx-react';
import store from './src/mobx';
import { Text, View } from 'react-native';

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
