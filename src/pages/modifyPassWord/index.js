import {WhiteSpace, WingBlank} from '@ant-design/react-native';
import React, {useState} from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from '../../style/base';
const {felxSB, flexRow, flexAC} = styles;
// 横向弹性盒子
const hBoxStyle = {
  ...flexRow,
  ...felxSB,
  ...flexAC,
};

const ModifyPassWord = () => {
  const [oldPassWord, setOldPassWord] = useState('');
  return (
    <WingBlank>
      <WhiteSpace />
      <View style={hBoxStyle}>
        <Text>旧密码：</Text>
        <TextInput
          autoComplete="tel"
          keyboardType="numeric"
          style={{
            flex: 1,
            borderLeftWidth: 1,
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
          }}
        />
      </View>
      <WhiteSpace />
      <View style={hBoxStyle}>
        <Text>新密码：</Text>
        <TextInput
          autoComplete="tel"
          keyboardType="numeric"
          style={{
            flex: 1,
            borderLeftWidth: 1,
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
          }}
        />
      </View>
    </WingBlank>
  );
};
export default ModifyPassWord;
