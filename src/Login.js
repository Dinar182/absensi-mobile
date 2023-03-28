import {useFocusEffect} from '@react-navigation/native';
import React, {Component, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {dimensionDevice} from './util/GlobalVar';

function Login({navigation, route}) {
  useFocusEffect(useCallback(() => {}, []));

  const loginProcess = useCallback(() => {
    navigation.replace('Main');
  }, []);
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
      <View style={styles.container}>
        <View style={styles.rectStack}>
          <View style={styles.rect}></View>
          <Image
            source={require('../assets/secure.png')}
            resizeMode="contain"
            style={styles.image3}></Image>
        </View>
        <View
          style={[
            styles.formContainer,
            {
              marginTop: 16,
            },
          ]}>
          <Text
            style={[
              styles.formLogin,
              {
                fontSize: 30,
                marginStart: 60,
                marginBottom: 16,
              },
            ]}>
            Form Login
          </Text>
          <Text
            style={[
              styles.username,
              {
                marginTop: 16,
              },
            ]}>
            Username
          </Text>
          <View
            style={[
              styles.textInputStack,
              {
                marginTop: 16,
              },
            ]}>
            <TextInput
              placeholder="Masukan Username"
              placeholderTextColor="rgba(173,163,163,1)"
              style={styles.textInput}></TextInput>
            <Image
              source={require('../assets/user.png')}
              resizeMode="contain"
              style={styles.image4}></Image>
          </View>
          <Text
            style={[
              styles.password,
              {
                marginTop: 35,
              },
            ]}>
            Password
          </Text>
          <View
            style={[
              styles.image5Stack,
              {
                marginTop: 16,
              },
            ]}>
            <Image
              source={require('../assets/lock.png')}
              resizeMode="contain"
              style={styles.image5}></Image>
            <TextInput
              placeholder="Masukan Password"
              placeholderTextColor="rgba(173,163,163,1)"
              secureTextEntry={true}
              selectTextOnFocus={false}
              autoCorrect={false}
              clearTextOnFocus={true}
              style={styles.textInput1}></TextInput>
          </View>
          <TouchableOpacity
            onPress={() => {
              loginProcess();
            }}
            style={styles.button}>
            <View style={styles.text2Row}>
              <Text style={styles.text2}>Login</Text>
              <Image
                source={require('../assets/arrow-right.png')}
                resizeMode="contain"
                style={styles.image6}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  rect: {
    top: 0,
    left: 0,
    width: dimensionDevice.widthScreen,
    height: 200,
    position: 'absolute',
    backgroundColor: 'rgba(32,83,117,1)',
  },
  image3: {
    //gambar besar
    top: 75,
    left: 35,
    width: 269,
    height: 300,
    position: 'absolute',
  },
  formContainer: {
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 16,
    flexDirection: 'column',
  },
  rectStack: {
    width: dimensionDevice.widthScreen,
    height: 330,
  },
  username: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 16,
    marginTop: 63,
    marginLeft: 58,
  },
  password: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 16,
    marginTop: 91,
    marginLeft: 58,
  },
  formLogin: {
    // form login
    fontFamily: 'arimo-700',
    color: 'rgba(32,83,117,1)',
    fontSize: 40,
  },
  signUpStack: {
    // posisi form login, user, pass
    width: 200,
    height: 29,
    marginTop: -160,
    marginLeft: 100,
  },
  textInput: {
    // textinput username
    // top: 0,
    // left: 0,
    fontFamily: 'heebo-200',
    color: '#FFFFFF',
    width: 270,
    fontSize: 14,
    opacity: 0.5,
    borderRadius: 25,
    backgroundColor: 'rgba(74,74,74,1)',
    textAlign: 'center',
    height: 51,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 15,
    shadowOpacity: 0.34,
    shadowRadius: 5,
    letterSpacing: 2,
  },
  image4: {
    //gmbr user
    top: 12,
    left: 19,
    width: 26,
    height: 26,
    position: 'absolute',
    opacity: 0.5,
  },
  textInputStack: {
    // posisi textinput masukan username
    width: 270,
    height: 30,
    marginTop: 50,
    marginLeft: 65,
  },
  image5: {
    //gmbr gembok
    top: 12,
    left: 19,
    width: 25,
    height: 25,
    position: 'absolute',
    opacity: 0.5,
  },
  textInput1: {
    // top: 0,
    // left: 0,
    position: 'absolute',
    fontFamily: 'heebo-200',
    color: '#FFFFFF',
    width: 270,
    fontSize: 14,
    opacity: 0.5,
    borderRadius: 25,
    backgroundColor: 'rgba(74,74,74,1)',
    textAlign: 'center',
    height: 51,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 15,
    // shadowOpacity: 0.5,
    shadowRadius: 5,
    letterSpacing: 2,
  },
  image5Stack: {
    // posisi password
    width: 270,
    height: 51,
    marginTop: 62,
    marginLeft: 65,
  },
  button: {
    width: 81,
    height: 30,
    backgroundColor: 'rgba(246,107,14,1)',
    borderRadius: 45,
    shadowColor: 'rgba(241,218,150,1)',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 9,
    shadowOpacity: 1,
    shadowRadius: 3,
    overflow: 'visible',
    flexDirection: 'row',
    marginTop: 36,
    marginLeft: 247,
  },
  text2: {
    fontFamily: 'heebo-700',
    color: 'rgba(255,255,255,1)',
    letterSpacing: 1,
  },
  image6: {
    width: 15,
    height: 15,
    opacity: 0.5,
    marginLeft: 4,
    marginTop: 2,
  },
  text2Row: {
    height: 50,
    flexDirection: 'row',
    flex: 1,
    marginRight: 10,
    marginLeft: 12,
    marginTop: 5,
  },
});

export default Login;
