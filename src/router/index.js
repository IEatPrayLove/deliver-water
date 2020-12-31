import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {inject, observer} from 'mobx-react';
import {createStackNavigator} from '@react-navigation/stack';
import Mine from '../pages/mine/mine';
import Login from '../pages/login';
import ModifyPassWord from '../pages/modifyPassWord';

const Stack = createStackNavigator();

function App({store}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="modifyPassWord"
          component={ModifyPassWord}
          options={{title: '修改密码'}}
        />
        <Stack.Screen name="mine" component={Mine} options={{title: '我的'}} />
        <Stack.Screen
          name="login"
          component={Login}
          options={{title: '登录'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default inject('store')(observer(App));
