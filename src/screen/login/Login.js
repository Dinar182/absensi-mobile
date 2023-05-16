import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import { dimensionDevice, fontApp, urlApi } from '../../util/GlobalVar';
import { Dialog, Input } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginFetch,
  setLoading,
  setLoginSuccess,
  setPassword,
  setUsername,
} from '../../state/slicer/LoginState';
import Entypo from 'react-native-vector-icons/Entypo';

function Login({ navigation, route }) {
  const dispatch = useDispatch();
  const { username, password, loading, loginSuccess } = useSelector((state) => state.LoginState);
  const [obsecure, setObsecure] = useState(true);
  useFocusEffect(useCallback(() => {}, []));

  const loginProcess = () => {
    const param = {
      user: username,
      pass: password,
    };
    const form = new FormData();
    form.append('username', username);
    form.append('password', password);

    dispatch(setLoading(true));
    dispatch(loginFetch(param));
  };

  useEffect(() => {
    if (loginSuccess) {
      dispatch(setLoginSuccess(false));
      navigation.replace('Main');
    }
  }, [dispatch, loginSuccess]);
  return (
    <KeyboardAvoidingView
      enabled
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        style={[
          styles.container,
          {
            backgroundColor: '#FFFFFF',
            height: dimensionDevice.heightWindow,
          },
        ]}
      >
        <View
          style={{
            height: dimensionDevice.heightWindow * 0.3,
            backgroundColor: '#215376',
            width: dimensionDevice.widthWindow,
          }}
        />
        <Text
          style={{
            fontFamily: fontApp.arimo[700],
            color: 'rgba(32,83,117,1)',
            fontSize: 30,
            marginTop: 145,
            marginStart: 40,
          }}
        >
          Form Login
        </Text>

        <Text
          style={{
            fontFamily: fontApp.roboto[700],
            color: '#121212',
            fontSize: 16,
            marginStart: 40,
            marginTop: 16,
          }}
        >
          Username
        </Text>
        <View
          style={{
            marginTop: 8,
            marginStart: 40,
            marginEnd: 40,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 24,
            backgroundColor: '#A5A5A5',
          }}
        >
          <Input
            value={username}
            placeholder="Masukan Username"
            placeholderTextColor={'white'}
            onChangeText={(txt) => {
              dispatch(setUsername(txt));
            }}
            leftIcon={() => (
              <Image
                source={require('../../../assets/user.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                  opacity: 0.5,
                }}
              />
            )}
            containerStyle={{
              height: 45,
            }}
            inputStyle={{
              paddingStart: 8,
              color: 'white',
              fontSize: 14,
              fontFamily: fontApp.heebo[200],
            }}
            inputContainerStyle={{
              borderColor: 'transparent',
              height: 45,
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: fontApp.roboto[700],
            color: '#121212',
            fontSize: 16,
            marginStart: 40,
            marginTop: 16,
          }}
        >
          Password
        </Text>
        <View
          style={{
            marginTop: 8,
            marginStart: 40,
            marginEnd: 40,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 24,
            backgroundColor: '#A5A5A5',
          }}
        >
          <Input
            value={password}
            placeholder="Masukan Password"
            secureTextEntry={obsecure}
            onChangeText={(txt) => {
              dispatch(setPassword(txt));
            }}
            placeholderTextColor={'white'}
            leftIcon={() => (
              <Image
                source={require('../../../assets/lock.png')}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                  opacity: 0.5,
                }}
              />
            )}
            rightIcon={() => (
              <TouchableOpacity
                onPress={() => {
                  setObsecure(!obsecure);
                }}
              >
                <Entypo name={obsecure ? 'eye-with-line' : 'eye'} color={'black'} size={25} />
              </TouchableOpacity>
            )}
            containerStyle={{
              height: 45,
            }}
            inputStyle={{
              paddingStart: 8,
              color: 'white',
              fontSize: 14,
              fontFamily: fontApp.heebo[200],
            }}
            inputContainerStyle={{
              borderColor: 'transparent',
              height: 45,
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            loginProcess();
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingStart: 8,
            paddingEnd: 8,
            backgroundColor: '#F26A13',
            borderRadius: 24,
            height: 45,
            width: 100,
            alignSelf: 'flex-end',
            marginTop: 16,
            marginEnd: 40,
          }}
        >
          <Text style={styles.text2}>Login</Text>
          <Image
            source={require('../../../assets/arrow-right.png')}
            resizeMode="contain"
            style={styles.image6}
          />
        </TouchableOpacity>
        <Image
          source={require('../../../assets/secure.png')}
          resizeMode="contain"
          style={{
            position: 'absolute',
            height: 275,
            width: 250,
            left: 40,
            top: dimensionDevice.heightScreen * 0.15,
          }}
        />
      </ScrollView>
      <Dialog
        isVisible={loading}
        overlayStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: 'white',
          width: 100,
          height: 100,
        }}
      >
        <ActivityIndicator size={'large'} color={'#F26A13'} />
      </Dialog>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },

  text2: {
    fontFamily: fontApp.heebo[700],
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
});

export default Login;
