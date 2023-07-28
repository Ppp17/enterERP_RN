import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  Button,
} from 'react-native';
const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <Text style={{marginBottom: 10, fontSize: 40}}>扫预约码</Text>
      <TouchableHighlight
        onPress={() => navigation.navigate('Confirm')}
        style={{
          borderRadius: 20,
        }}>
        <View style={styles.box}>
          <Image source={require('../../asset/scan.png')}></Image>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    borderRadius: 20,
    // margin: 20,
    backgroundColor: '#DDDDDD',
  },
});

export default HomePage;
