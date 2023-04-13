import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

function ChangePassword({navigation, route}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('clicked')}>
        <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 208,
    height: 146,
    backgroundColor: '#E6E6E6',
    marginTop: 370,
    marginLeft: 66,
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    marginTop: 67,
    marginLeft: 78,
  },
});

export default ChangePassword;
