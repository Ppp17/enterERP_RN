import React, {useRef, useState} from 'react';
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
import Keyboard from '../../component/Keyboard/Keyboard';
const Confirm = ({navigation}) => {
  const childRef = useRef(null);
  const [license, setLicense] = useState([
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
  ]);
  const [currentIndex, setCurrentIndex] = useState(0); // 追踪当前需要更新的索引
  const resetLicense = () => {
    setLicense(['_', '_', '_', '_', '_', '_', '_', '_']);
    setCurrentIndex(0);
    childRef.current.handlerVisible();
  };
  const handlerWords = item => {
    if (currentIndex < license.length) {
      const updatedLicense = [...license];
      updatedLicense[currentIndex] = item; // 将键盘输入的字符更新到license数组中
      setLicense(updatedLicense);
      setCurrentIndex(currentIndex + 1); // 更新索引以准备更新下一个字符
    }
    console.log('handlerWords' + item);
  };

  const renderLicense = () => {
    const formattedLicense = license
      .slice(0, 2)
      .concat('·', license.slice(2, 4), license.slice(4));
    return formattedLicense.map((item, index) => (
      <Text
        key={index}
        style={{
          borderRadius: 20,
          padding: 10,
          fontSize: 40,
        }}>
        {item}
      </Text>
    ));
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={styles.left}>
        <View style={styles.left_pannel}>
          <Text style={styles.title}>预报编号: xxxxxxx</Text>
          <Text>姓名: xxx</Text>
          <Text>手机号: xxxxxxxxxxx</Text>
          <Text>预报车牌: xxxxxx</Text>
          <Text>货品类别: xxxxxx</Text>
        </View>
      </View>
      <View style={styles.right}>
        <View style={styles.right_pannel}>
          <View style={styles.license}>
            <Text>车牌号校对:</Text>
            {renderLicense()}
            <TouchableOpacity
              style={{
                borderRadius: 20,
                padding: 10,
                borderWidth: 1,
                width: 100,
                alignItems: 'center',
              }}
              onPress={resetLicense}>
              <Text>重置</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.right_bottom}>
            <Keyboard getWords={handlerWords} ref={childRef} />
            <View style={{width: '100%'}}>
              <Button
                onPress={() => {
                  navigation.navigate('Store');
                }}
                title="下一步"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'pink',
  },
  left: {
    flex: 1,
    elevation: 2,
    // shadowOffset: {width: 0, height: 0},
    // backgroundColor: 'rgb(156, 220, 240)',
  },
  left_pannel: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 20,
  },
  title: {
    fontSize: 40,
  },
  right: {
    flex: 3,
    // backgroundColor: `rgb(220, 205, 121)`,
  },
  right_pannel: {
    // display: 'flex',
    flex: 1,
  },
  license: {
    width: '100%',
    padding: 10,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'pink',
  },
  right_bottom: {
    // height: '80%',
    flex: 1,
    gap: 10,
    flexDirection: 'column',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default Confirm;
