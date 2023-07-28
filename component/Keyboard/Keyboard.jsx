import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';
const Keyboard = ({getWords}, ref) => {
  const [visible, setVisible] = useState(false);
  const license = [
    '沪',
    '鲁',
    '浙',
    '苏',
    '豫',
    '皖',
    '粤',
    '辽',
    '甘',
    '闽',
    '赣',
    '冀',
    '晋',
    '京',
    '津',
    '渝',
    '蒙',
    '吉',
    '黑',
    '湘',
    '鄂',
    '桂',
    '琼',
    '川',
    '贵',
    '云',
    '藏',
    '陕',
    '青',
    '宁',
    '新',
    '港',
    '澳',
    '台',
  ];
  const words = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const licenseItem = license.map(item => (
    <TouchableOpacity
      key={item}
      onPress={() => {
        handlerPress(item);
      }}>
      <View style={styles.button}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  ));
  const wordsItem = words.map(item => (
    <TouchableOpacity
      key={item}
      onPress={() => {
        handlerPress(item);
      }}>
      <View style={styles.words}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  ));
  const handlerVisible = () => {
    setVisible(!visible);
  };
  const handlerPress = item => {
    if (license.includes(item)) {
      setVisible(!visible);
    }
    getWords(item);
  };

  // 将sayHello方法暴露给父组件
  useImperativeHandle(ref, () => ({
    handlerVisible,
  }));

  return (
    <View style={styles.keyboard}>
      {/* <View style={{display: visible ? '' : 'none', ...styles.keyboard}}>
        {licenseItem}
      </View>
      <View style={{display: visible ? 'none' : '', ...styles.keyboard}}>
        {wordsItem}
      </View> */}
      {visible ? wordsItem : licenseItem}
      <TouchableOpacity onPress={handlerVisible}>
        <View style={{...styles.button, width: 142}}>
          <Text>切换</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
    elevation: 1,
  },
  button: {
    width: 66,
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgb(140, 149, 140)',
  },
  words: {
    width: 59,
    height: 59,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgb(140, 149, 140)',
    borderRadius: 50,
    borderWidth: 1,
  },
});
export default forwardRef(Keyboard);
