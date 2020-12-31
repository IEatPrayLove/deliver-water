import {WhiteSpace, WingBlank} from '@ant-design/react-native';
import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {color} from 'react-native-reanimated';
import styles from '../../style/base';
import {dp} from '../../utils';
const {commonWrap, padding, flexRow, felxSB, flexJC} = styles;
const commonBox = {
  ...commonWrap,
  ...padding,
  ...felxSB,
};
// 横向弹性盒子
const hBoxStyle = {
  ...flexRow,
  ...felxSB,
};

const styleMoal = StyleSheet.create({
  loginBtn: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    width: '100%',
    ...flexRow,
    ...flexJC,
  },
  loginOut: {
    width: '80%',
    borderRadius: dp(20),
    borderWidth: dp(1),
    borderColor: '#666',
    textAlign: 'center',
    height: dp(40),
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },

  AlertView: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    //   height:130,
    marginLeft: dp(37.5),
    marginRight: dp(37.5),
    borderColor: 'lightgrey',
  },
  textCenter: {
    textAlign: 'center',
    lineHeight: dp(60),
    color: '#fff',
  },
  myBtnCancel: {
    width: '50%',
    backgroundColor: '#666',
    color: '#fff',
  },
  myBtnComfirm: {
    width: '50%',
    backgroundColor: '#4D89FF',
    color: '#fff',
  },
});
export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visbale: false,
    };
  }
  render() {
    const {visbale} = this.state;
    console.log(this.props);
    return (
      <Fragment>
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}>
          <View style={commonBox}>
            <View style={hBoxStyle}>
              <Text>丽丽</Text>
              <Text>12月28日 周一</Text>
            </View>
            <View style={{marginTop: dp(10)}}>
              <Text>绑定门店:送水站(丽都店)</Text>
            </View>
            <View>
              <Text>营业时间：周一至周天 10：00-20：00</Text>
            </View>
          </View>
          <View style={{marginTop: dp(10)}}>
            <View style={commonBox}>
              <Text>今天你已完成23单配送，真棒！</Text>
            </View>
          </View>
          <View style={styleMoal.loginBtn}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                alignItems: 'center',
              }}>
              <View style={styleMoal.loginOut}>
                <WingBlank>
                  <WhiteSpace />
                  <Text
                    onPress={() => {
                      this.setState({
                        visbale: true,
                      });
                    }}
                    style={{textAlign: 'center'}}>
                    退出登录
                  </Text>
                </WingBlank>
              </View>
              <TouchableHighlight
                onPress={() => {
                  console.log('跳转去修改密码');
                }}>
                <Text
                  style={{
                    marginTop: dp(20),
                    textAlign: 'center',
                    color: '#4D89FF',
                  }}>
                  修改密码
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <Modal visible={visbale} animationType="fade" transparent={true}>
          <View style={styleMoal.container}>
            <View style={styleMoal.AlertView}>
              <View style={{height: dp(120)}}>
                <Text
                  style={{
                    lineHeight: dp(120),
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontWeight: '700',
                  }}>
                  是否确认退出登录
                </Text>
              </View>
              <View style={hBoxStyle}>
                <TouchableOpacity
                  style={styleMoal.myBtnCancel}
                  onPress={() => {
                    this.setState({
                      visbale: false,
                    });
                  }}>
                  <Text style={styleMoal.textCenter}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styleMoal.myBtnComfirm}
                  onPress={() => {
                    alert('清楚用户缓存');
                    // 清除缓存之后关闭Modal
                  }}>
                  <Text style={styleMoal.textCenter}>确认</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </Fragment>
    );
  }
}
