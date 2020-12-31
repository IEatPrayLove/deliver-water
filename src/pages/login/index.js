import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    headerTitle: '登录',
    tabBarLabel: '登录',
    tabBarIcon: <Image source={require('../../images/test_qrcode.png')} />,
  };
  render() {
    return (
      <View>
        <Text>登录页面</Text>
      </View>
    );
  }
}
