// import React, {useState, useEffect} from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
import {
  Dimensions,
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
// import axios from 'axios';
// import {urls} from './config';
// import {Button, InputItem, Toast, Picker, Switch} from 'antd-mobile-rn';
// import * as RootNavigation from './router/RootNavigation';
// import ImagePicker from 'react-native-image-picker';
// import commonStyle from './commonStyle';
// const RNFS = require('react-native-fs');

// axios.defaults.timeout = 5000;

// const imgPicker_options = {
//   title: '选择图片',
//   cancelButtonTitle: '取消',
//   takePhotoButtonTitle: '拍照',
//   chooseFromLibraryButtonTitle: '图片库',
//   noData: true,
//   quality: 0.8,
//   maxWidth: 1500,
//   maxHeight: 1500,
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };

const deviceWidthDp = Dimensions.get('window').width;
const uiWidth = 375;
export const dp = (uiElePx) => {
  return (uiElePx * deviceWidthDp) / uiWidth;
};

// export const arrayToValueLabel = (arr, value, label) => {
//   if (!Array.isArray(arr)) {
//     return [];
//   }
//   return arr.map((v) => {
//     return {
//       ...v,
//       value: v[value],
//       label: v[label],
//     };
//   });
// };
// export const treeToValueLabel = (arr, value, label, children = 'children') => {
//   if (!Array.isArray(arr)) {
//     return [];
//   }
//   return arr.map((v) => {
//     if (v[children] && v[children].length) {
//       v[children] = treeToValueLabel(v[children], value, label);
//     }
//     return {
//       ...v,
//       value: v[value],
//       label: v[label],
//     };
//   });
// };
// export const getLabelByTree = (arr, value, children = 'children') => {
//   if (!Array.isArray(arr)) {
//     return [];
//   }
//   let str = '';
//   arr.some((v) => {
//     if (v[children] && v[children].length) {
//       str = getLabelByTree(v[children], value);
//       if (str !== '') {
//         return true;
//       }
//     }
//     if (v.value === value) {
//       str = v.label;
//       return true;
//     }
//   });
//   return str;
// };

// export const getProductLabel = (obj) => {
//   let arr = ['永久', '年', '月', '日', '时'];
//   return `${obj.unitPrice}元/${obj.unitNumber}${arr[obj.unit]}`;
// };

// export const TouchView = (props) => {
//   return <TouchableHighlight {...props} />;
// };

// // forward Icon
// export const ForwardIcon = (props) => {
//   const {style} = props;
//   return (
//     <Image
//       source={require('../imgs/return.png')}
//       style={{width: dp(9.4), height: dp(16.8), ...(style || {})}}
//     />
//   );
// };

// //long button
// export const LongBtn = (props) => {
//   const {style, textStyle, onclick, onPress} = props;
//   return (
//     <Button
//       type="primary"
//       onClick={onclick || onPress}
//       {...props}
//       style={{
//         width: dp(315),
//         height: dp(44),
//         marginLeft: dp(30),
//         ...(style || {}),
//       }}>
//       <Text style={{fontSize: 15, color: '#fff', ...(textStyle || {})}}>
//         {props.children}
//       </Text>
//     </Button>
//   );
// };

// //list item for submitRecord
// export const TextListItem = (props) => {
//   // <TextListItem
//   //     left='当前账号'
//   //     midTab='左边2号'
//   //     right='右边1号'
//   //     rightIcon = {<View style={{width:10,height:10,backgroundColor:'red'}}></View>}
//   //     icon = '1'
//   // ></TextListItem>
//   const {
//     style,
//     left,
//     midTab,
//     midNode,
//     right,
//     icon,
//     leftStyle,
//     midStyle,
//     rightWrapStyle,
//     rightStyle,
//     rightIcon,
//     rightBottom,
//     onPress,
//   } = props;
//   return (
//     <TouchableHighlight
//       onPress={onPress}
//       style={{
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//         ...(style || {}),
//       }}>
//       <View
//         style={{
//           minHeight: dp(65),
//           backgroundColor: '#fff',
//           ...commonStyle.flex,
//           justifyContent: 'space-between',
//         }}>
//         <View style={commonStyle.flex}>
//           <Text style={{fontSize: 15, color: '#343434', ...(leftStyle || {})}}>
//             {left}
//           </Text>
//           {midTab ? (
//             <View
//               style={{
//                 backgroundColor: '#FFE7E7',
//                 borderRadius: 3,
//                 marginLeft: dp(9),
//                 paddingLeft: dp(7),
//                 paddingRight: dp(7),
//                 paddingTop: dp(4),
//                 paddingBottom: dp(4),
//               }}>
//               <Text
//                 style={{color: '#FF3838', fontSize: 12, ...(midStyle || {})}}>
//                 {midTab}
//               </Text>
//             </View>
//           ) : null}
//           {midNode}
//         </View>
//         <View
//           style={{
//             ...commonStyle.flex,
//             height: '100%',
//             ...(rightWrapStyle || {}),
//           }}>
//           <View>
//             <View style={{...commonStyle.flex, justifyContent: 'flex-end'}}>
//               {rightIcon}
//               <Text
//                 style={{fontSize: 14, color: '#666666', ...(rightStyle || {})}}>
//                 {right}
//               </Text>
//             </View>
//             {rightBottom}
//           </View>
//           {icon ? <ForwardIcon style={{marginLeft: dp(10.5)}} /> : null}
//         </View>
//       </View>
//     </TouchableHighlight>
//   );
// };

// export const AdvanceTitle = (props) => {
//   return (
//     <Text
//       style={{
//         marginTop: dp(15),
//         marginBottom: dp(9),
//         fontSize: 14,
//         color: '#666',
//       }}>
//       {props.text}
//     </Text>
//   );
// };

// // create merchant steps
// export const MerchantSteps = (props) => {
//   const {current} = props;
//   const imgs = [
//     [
//       require('../imgs/merchant/oneS.png'),
//       require('../imgs/merchant/oneS.png'),
//     ],
//     [require('../imgs/merchant/two.png'), require('../imgs/merchant/twoS.png')],
//     [
//       require('../imgs/merchant/three.png'),
//       require('../imgs/merchant/threeS.png'),
//     ],
//     [
//       require('../imgs/merchant/four.png'),
//       require('../imgs/merchant/fourS.png'),
//     ],
//   ];
//   const styles = StyleSheet.create({
//     lineStyle: {
//       width: dp(45),
//       marginLeft: -5,
//       height: 1,
//       marginTop: dp(-20),
//     },
//     wrap: {
//       height: dp(62),
//       paddingLeft: dp(18.5),
//       paddingRight: dp(19.5),
//       backgroundColor: '#fff',
//       width: '100%',
//       ...commonStyle.flex,
//     },
//   });
//   const nodes = imgs.map((v, i) => {
//     const imgSrc = current >= i ? imgs[i][1] : imgs[i][0];
//     const lineColor = current >= i ? '#4EA2F0' : '#C8C8C8';
//     return (
//       <View key={i} style={{...commonStyle.flex}}>
//         <ImageBackground
//           source={imgSrc}
//           style={{
//             width: dp(58.5),
//             height: dp(37.5),
//             marginLeft: current ? -5 : 0,
//           }}
//         />
//         {i < 3 ? (
//           <View style={{...styles.lineStyle, backgroundColor: lineColor}} />
//         ) : null}
//       </View>
//     );
//   });
//   return <View style={styles.wrap}>{nodes}</View>;
// };
// // create merchant placeholderLine
// export const MerchantSpaceLine = (props) => {
//   return (
//     <View
//       style={{
//         height: dp(8),
//         backgroundColor: '#F9F9F9',
//         width: '100%',
//       }}
//     />
//   );
// };
// // create merchant Item
// export const MerchantItem = (props) => {
//   const {wrapStyle, left, leftStyle, mid, right, bottomLine} = props;
//   const styles = StyleSheet.create({
//     left: {
//       width: dp(90),
//       marginRight: dp(15),
//       color: '#333333',
//       fontSize: 15,
//     },
//     mid: {
//       flexGrow: 1,
//       width: 0,
//       height: '100%',
//     },
//     right: {},
//   });
//   return (
//     <View
//       style={{
//         height: dp(65),
//         backgroundColor: '#fff',
//         width: '100%',
//         ...commonStyle.flex,
//         justifyContent: 'flex-start',
//         paddingLeft: dp(15),
//         paddingRight: dp(15),
//         ...(wrapStyle || {}),
//       }}>
//       <View style={{...styles.left, ...(leftStyle || {})}}>
//         <Text>{left}</Text>
//       </View>
//       <View style={{...styles.mid}}>{mid}</View>
//       <View style={{...styles.right}}>{right}</View>
//       {bottomLine ? (
//         <View
//           style={{
//             position: 'absolute',
//             bottom: 0,
//             width: '100%',
//             left: dp(15),
//             height: dp(0.5),
//             backgroundColor: '#E5E5E5',
//           }}
//         />
//       ) : null}
//     </View>
//   );
// };

// // picker chilren
// const PickerChilren = (props) => {
//   return (
//     <TouchView onPress={props.onClick} style={{height: '100%'}}>
//       <View
//         style={{
//           ...commonStyle.flex,
//           justifyContent: 'space-between',
//           height: '100%',
//         }}>
//         <View>
//           <Text
//             style={{
//               color: props.extra == '请选择' ? '#9A9A9A' : '#000',
//               fontSize: 14,
//               paddingLeft: dp(5),
//             }}>
//             {props.extra}
//           </Text>
//         </View>
//         <ForwardIcon />
//       </View>
//     </TouchView>
//   );
// };
// // picker
// export const Mypicker = (props) => {
//   const {data, cols, valueKey, initialValue, form, options} = props;

//   return (
//     <Picker
//       data={data}
//       cols={cols || 1}
//       {...form.getFieldProps(valueKey || '', {
//         initialValue,
//         ...(options || {}),
//       })}
//       //only value
//       // onChange={v=>{
//       //    // form.setFieldsValue({
//       //     //   [valueKey]:v,
//       //     // })
//       //   console.log(v)
//       // }}
//     >
//       <PickerChilren />
//     </Picker>
//   );
// };
// //merchant input item
// export const MerchantInput = (props) => {
//   const {
//     title,
//     valueKey,
//     initialValue,
//     form,
//     placeholder,
//     last,
//     bottomLine,
//     options,
//     data,
//   } = props;

//   return (
//     <MerchantItem
//       left={title}
//       style={{
//         height: '100%',
//       }}
//       bottomLine={bottomLine}
//       mid={
//         <InputItem
//           {...props}
//           last={last}
//           style={{
//             height: '100%',
//             paddingLeft: 0,
//             marginLeft: 0,
//             fontSize: 14,
//           }}
//           {...form.getFieldProps(valueKey, {
//             initialValue: initialValue || (data && data[valueKey]) || '',
//             ...(options || {}),
//           })}
//         />
//       }
//     />
//   );
// };

// export const MerchantSwitch = (props) => {
//   const {title, valueKey, form, bottomLine, options, data} = props;
//   const [value, setValue] = useState(!!data[valueKey]);
//   const change = (v) => {
//     setValue(v);
//     form.setFieldsValue({
//       [valueKey]: v ? 1 : 0,
//     });
//   };
//   const styles = StyleSheet.create({
//     wrap: {
//       display: 'flex',
//       flexDirection: 'row',
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//       height: '100%',
//     },
//   });
//   return (
//     <MerchantItem
//       left={title}
//       leftStyle={{width: dp(120)}}
//       style={{
//         height: '100%',
//       }}
//       bottomLine={bottomLine}
//       mid={
//         <View style={styles.wrap}>
//           <Switch
//             checked={value}
//             onChange={change}
//             color={'blue'}
//             trackColor={{false: '#767577', true: '#4EA2F0'}}
//           />
//           <View
//             {...form.getFieldProps(valueKey, {
//               initialValue: (data && data[valueKey]) || 0,
//             })}
//           />
//         </View>
//       }
//     />
//   );
// };

// //imgPicker
// export const MyImagePicker = (props) => {
//   //e.g  <MyImagePicker form={form} valueKey ='img' data={data} textTop='第一行文字' textBottom='第二行文字'/>
//   const width = dp(90);
//   const height = dp(90);
//   const resizeMode = 'contain';
//   const {
//     valueKey,
//     form,
//     textTop,
//     textBottom,
//     styleWrap,
//     initialValue,
//     data,
//     options,
//   } = props;
//   const [value, setValue] = useState(
//     initialValue || (data && data[valueKey]) || '',
//   );
//   const styles = StyleSheet.create({
//     viewWrap: {
//       width,
//       height,
//       borderStyle: 'dashed',
//       borderColor: '#666666',
//       borderRadius: dp(7),
//       borderWidth: 1,
//       ...commonStyle.flex,
//       flexDirection: 'column',
//     },
//     addWrap: {
//       width: dp(15),
//       height: dp(15),
//       ...commonStyle.flex,
//     },
//     horizontalLine: {
//       width: dp(15),
//       height: dp(3),
//       backgroundColor: '#666666',
//       borderRadius: dp(5),
//     },
//     verticalLine: {
//       width: dp(3),
//       height: dp(15),
//       backgroundColor: '#666666',
//       borderRadius: dp(5),
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: [{translate: [dp(-1.5), dp(-7.5)]}],
//     },
//     addFont: {
//       color: '#666666',
//       fontSize: 12,
//     },
//   });

//   const onChange = () => {
//     ImagePicker.showImagePicker(imgPicker_options, (response) => {
//       console.log('Response == ', response);
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         /**
//          * 文件formData上传
//          */
//         const file = {
//           uri: response.uri,
//           type: response.type,
//           name: response.fileName,
//         };
//         let formData = new FormData();
//         formData.append('file', file);

//         request({
//           url: '/mchnt/upload',
//           method: 'post',
//           headers: {'Content-Type': 'multipart/form-data'},
//           data: formData,
//         }).then((r) => {
//           console.log(r);
//           if (r && r.tdata) {
//             setValue(r.tdata);
//             form.setFieldsValue({
//               [valueKey]: r.tdata,
//             });
//           }
//           // react-native-image-picker插件bug:
//           // 配置了会改变图片质量,大小的属性，插件会重新保存修改后的图片副本到本地相册
//           // 所以在上传成功后，利用rnfs 删除插件生成的副本图片
//           RNFS.unlink(response.path);
//         });

//         // request({
//         //     url:`/mchnt/base64Upload`,
//         //     method:'post',
//         //     headers: { 'Content-Type': 'application/json' },
//         //     data:{
//         //       base64Data:`data:${response.type};base64,${response.data}`
//         //     },
//         // }).then(r=>{
//         //   console.log(r)
//         //   if(r&&r.tdata){
//         //     setValue(r.tdata)
//         //     form.setFieldsValue({
//         //       [valueKey]:r.tdata
//         //     })
//         //   }
//         // })
//       }
//     });
//   };

//   return (
//     <View
//       style={{width, ...(styleWrap || {})}}
//       {...form.getFieldProps(valueKey || '', {
//         initialValue: initialValue || (data && data[valueKey]) || '',
//         ...(options || {}),
//       })}>
//       <TouchView onPress={onChange}>
//         {value ? (
//           <Image source={{uri: value}} style={{width, height, resizeMode}} />
//         ) : (
//           <View style={styles.viewWrap}>
//             <View style={{...styles.addWrap, marginTop: textTop ? dp(10) : 0}}>
//               <View style={styles.horizontalLine} />
//               <View style={styles.verticalLine} />
//             </View>
//             {textTop ? (
//               <Text style={{...styles.addFont}}>{textTop}</Text>
//             ) : null}
//             {textBottom ? (
//               <Text style={{...styles.addFont}}>{textBottom}</Text>
//             ) : null}
//           </View>
//         )}
//       </TouchView>
//     </View>
//   );
// };

// //ImagePickerTip
// export const ImagePickerTip = (props) => {
//   const {text} = props;
//   return (
//     <Text
//       style={{
//         color: '#9A9A9A',
//         fontSize: 14,
//         marginTop: dp(17),
//       }}>
//       {props.children}
//     </Text>
//   );
// };

// export const ErrorPage = (props) => {
//   const {onRefresh, type = 'network', btnText = '刷新页面'} = props;

//   return (
//     <View
//       style={{
//         width: '100%',
//         height: '100%',
//         backgroundColor: '#F9F9F9',
//         display: 'flex',
//         alignItems: 'center',
//       }}>
//       <View
//         style={{
//           width: dp(200),
//           display: 'flex',
//           alignItems: 'center',
//           marginTop: dp(120),
//         }}>
//         {type === 'network' ? (
//           <Image
//             source={require('../imgs/network_error.png')}
//             style={{width: dp(98), height: dp(62)}}
//           />
//         ) : (
//           <Image
//             source={require('../imgs/submit_error.png')}
//             style={{width: dp(50), height: dp(68)}}
//           />
//         )}

//         <Text style={{fontSize: dp(14), color: '#343434', marginTop: dp(20)}}>
//           {type === 'network' ? '网络异常，请稍后重试' : '提交失败，请重试'}
//         </Text>

//         <Button
//           type="ghost"
//           onClick={onRefresh}
//           style={{
//             marginTop: dp(35),
//             width: '100%',
//             height: dp(44),
//           }}>
//           {type === 'network' ? '刷新页面' : '重新提交'}
//         </Button>
//       </View>
//     </View>
//   );
// };

// export const ImagePickerSample = (props) => {
//   const {onPress} = props;
//   return (
//     <TouchView onPress={onPress}>
//       <Text
//         style={{
//           color: '#4EA2F0',
//           fontSize: 14,
//           marginTop: dp(14),
//         }}>
//         示例图
//       </Text>
//     </TouchView>
//   );
// };
// export const MerchantNav = (props) => {
//   const {onDelete, onEdit, onCall, editText, canEdit = true} = props;
//   const styles = StyleSheet.create({
//     wrap: {
//       flexGrow: 1,
//       height: '100%',
//       ...commonStyle.flex,
//     },
//     text: {
//       borderRightColor: '#CCCCCC',
//       borderRightWidth: 1,
//       flexGrow: 1,
//       textAlign: 'center',

//       // width:'100%'
//     },
//   });
//   return (
//     <View
//       style={{
//         position: 'absolute',
//         bottom: 0,
//         backgroundColor: '#fff',
//         height: dp(47.5),
//         width: '100%',
//         ...commonStyle.flex,
//         justifyContent: 'space-evenly',
//       }}>
//       <TouchView style={styles.wrap} onPress={onDelete}>
//         <Text style={styles.text}>删除</Text>
//       </TouchView>
//       {canEdit && (
//         <TouchView style={styles.wrap} onPress={onEdit}>
//           <Text style={styles.text}>{editText || '修改资料'}</Text>
//         </TouchView>
//       )}
//       <TouchView style={styles.wrap} onPress={onCall}>
//         <Text style={styles.text}>联系商家</Text>
//       </TouchView>
//     </View>
//   );
// };

// export const request = async (obj) => {
//   let postObj = {
//     method: 'get',
//     // url:obj.url,
//     // data:obj.data||{},
//     baseURL: urls.base,
//     ...obj,
//   };
//   if (postObj.method == 'get') {
//     postObj.params = postObj.data || {};
//   }

//   if (!postObj.headers) {
//     postObj.headers = {};
//   }

//   postObj.headers.source = '90';
//   postObj.headers.terminalCode = '90';
//   postObj.headers.token = await AsyncStorage.getItem('@token');

//   return axios(postObj)
//     .then((r) => {
//       if (r.status === 200 && r.data) {
//         // token失效退出登录
//         if (r.data.code && r.data.code === 401) {
//           RootNavigation.navigate('authError');
//           return r.data;
//         }

//         if (r.data.code && r.data.message) {
//           Toast.fail(r.data.message, 0.5, null, true);
//         } else {
//           return r.data;
//         }
//       } else {
//         console.log(r);
//         Toast.fail('请求错误', 0.5, null, true);
//         return false;
//       }
//     })
//     .catch((r) => {
//       console.log(r);
//       Toast.fail('请求失败', 0.5, null, true);
//       return false;
//     });
// };

// export const getFErrText = (error = {}) => {
//   for (let key in error) {
//     if (error[key]?.errors?.length > 0) {
//       return error[key]?.errors[0].message;
//     }
//   }
//   return '未知问题!';
// };
