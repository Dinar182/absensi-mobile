import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
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
import { dimensionDevice, fontApp } from '../../util/GlobalVar';
import { Dialog, Input } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { loginFetch, setLoading, setPassword, setUsername } from '../../state/slicer/LoginState';

function Login({ navigation, route }) {
  const dispatch = useDispatch();
  const { username, password, loading } = useSelector((state) => state.LoginState);
  useFocusEffect(useCallback(() => {}, []));

  const loginProcess = () => {
    // const param = {
    //   user: username,
    //   pass: password,
    // };
    // dispatch(setLoading(true));
    // dispatch(loginFetch(param));
    navigation.replace('Main');
  };
  return (
    <KeyboardAvoidingView
      enabled
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
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
            borderRadius: 16,
            height: 35,
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
          flexGrow: 1,
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
