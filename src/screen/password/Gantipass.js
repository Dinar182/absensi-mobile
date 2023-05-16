import React, { useCallback, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Input } from '@rneui/themed';
import { dimensionDevice, fontApp } from '../../util/GlobalVar';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import {
  changePassFetch,
  setKonfirmPass,
  setLogout,
  setNewPass,
  setOldPass,
  setStateChangePass,
} from '../../state/slicer/LoginState';
import { MessageUtil } from '../../util/MessageUtil';

function Gantipass({ navigation, route }) {
  const dispatch = useDispatch();
  const { loading, passwordLama, passwordBaru, konfirmBaru, stateChangePass, isLogout } =
    useSelector((state) => state.LoginState);

  const validateChange = () => {
    if (passwordBaru !== konfirmBaru) {
      MessageUtil.warningMessage('Perhatian', 'Konfirmasi Password Salah, Mohon Cek Kembali!');
    } else if (passwordBaru.length === 0 || passwordLama.length === 0 || konfirmBaru.length === 0) {
      MessageUtil.warningMessage('Perhatian', 'Form Tidak Boleh Kosong, Mohon Cek Kembali!');
    } else {
      dispatch(
        changePassFetch({
          oldPass: passwordLama,
          newPass: passwordBaru,
        })
      );
    }
  };

  useEffect(() => {
    if (stateChangePass) {
      dispatch(setStateChangePass(false));
      navigation.goBack();
    }
  }, [stateChangePass]);

  useEffect(() => {
    if (isLogout) {
      dispatch(setLogout(false));
      navigation.replace('Login');
    }
  }, [isLogout, navigation]);

  return (
    <KeyboardAvoidingView
      enabled
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View
        style={{
          flexDirection: 'row',
          paddingStart: 16,
          paddingEnd: 16,
          justifyContent: 'space-between',
          backgroundColor: 'rgba(32,83,117,1)',
          ...Platform.select({
            ios: {
              height: 100,
              paddingTop: 24,
            },
            android: {
              height: 75,
              alignItems: 'center',
            },
          }),
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              width: 40,
              height: 40,
            }}
          >
            <EntypoIcon name="chevron-with-circle-left" color={'white'} size={40} />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              color: 'white',
              fontSize: 20,
              marginLeft: 8,
            }}
          >
            Ganti Password
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          flexGrow: 1,
          height: dimensionDevice.heightWindow,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          paddingTop: dimensionDevice.heightWindow / 10,
        }}
      >
        <Text
          style={{
            fontFamily: fontApp.roboto[700],
            color: '#121212',
            fontSize: 16,
            marginStart: 40,
            marginTop: 16,
          }}
        >
          Password Sebelumnya
        </Text>
        <View
          style={{
            marginTop: 8,
            marginStart: 40,
            marginEnd: 40,
            marginBottom: 24,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 24,
            backgroundColor: '#A5A5A5',
          }}
        >
          <Input
            value={passwordLama}
            onChangeText={(txt) => {
              dispatch(setOldPass(txt));
            }}
            placeholder="Masukan Password Sebelumnya"
            placeholderTextColor={'white'}
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
          Password Baru
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
            marginBottom: 24,
          }}
        >
          <Input
            value={passwordBaru}
            onChangeText={(txt) => {
              dispatch(setNewPass(txt));
            }}
            placeholder="Masukan Password Baru"
            placeholderTextColor={'white'}
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
          Konfirmasi Password
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
            value={konfirmBaru}
            onChangeText={(txt) => {
              dispatch(setKonfirmPass(txt));
            }}
            placeholder="Masukan Konfirmasi Password"
            placeholderTextColor={'white'}
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
        <TouchableOpacity
          onPress={() => {
            validateChange();
          }}
          style={{
            height: 35,
            width: 175,
            padding: 16,
            marginTop: 16,
            marginEnd: 40,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-end',
          }}
        >
          <View
            style={{
              height: 35,
              backgroundColor: 'rgba(246,107,14,1)',
              borderRadius: 35,
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                height: 17,
                flexDirection: 'row',
                flex: 1,
                marginRight: 30,
                marginLeft: 16,
                marginTop: 8,
              }}
            >
              <Text
                style={{
                  fontFamily: fontApp.roboto[700],
                  color: 'rgba(255,255,255,1)',
                  marginLeft: 12,
                }}
              >
                Konfirmasi
              </Text>
              <EntypoIcon
                name="chevron-thin-right"
                style={{
                  color: 'rgba(255,255,255,1)',
                  fontSize: 15,
                  height: 16,
                  width: 15,
                  marginStart: 12,
                  marginTop: 1,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    width: 395,
    height: 90,
    backgroundColor: 'rgba(33,83,118,1)',
    flexDirection: 'row',
    marginTop: -20,
  },
  button4: {
    width: 35,
    height: 35,
  },
  icon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 35,
  },
  gantiPassword: {
    fontFamily: fontApp.roboto.regular,
    color: 'rgba(255,255,255,1)',
    marginLeft: 15,
    marginTop: 7,
    fontSize: 18,
  },
  button4Row: {
    height: 33,
    flexDirection: 'row',
    flex: 1,
    marginRight: 200,
    marginLeft: 20,
    marginTop: 38,
  },
  placeholder: {
    fontFamily: fontApp.roboto.regular,
    color: '#121212',
    height: 49,
    width: 300,
    backgroundColor: 'rgba(155,155,155,1)',
    fontSize: 10,
    borderRadius: 30,
    textAlign: 'center',
    letterSpacing: 1,
    marginTop: 106,
    marginLeft: 44,
  },
  passwordSebelumnya: {
    fontFamily: fontApp.roboto[700],
    color: '#121212',
    fontSize: 15,
    marginTop: -78,
    marginLeft: 46,
  },
  rect2: {
    //kotak abu2 bawah//
    width: 395,
    height: 100,
    backgroundColor: '#E6E6E6',
    marginTop: 550,
  },
  button: {
    width: 50,
    height: 50,
  },
  image: {
    width: 50,
    height: 50,
  },
  home: {
    fontFamily: fontApp.roboto.regular,
    color: '#121212',
    fontSize: 12,
    marginLeft: 10,
  },
  buttonColumn: {
    width: 60,
  },
  //   button2: {
  //     top: 0,
  //     left: 0,
  //     width: 50,
  //     height: 50,
  //     position: "absolute"
  //   },

  image2: {
    width: 50,
    height: 50,
  },
  history: {
    top: 49,
    left: 5,
    position: 'absolute',
    fontFamily: fontApp.roboto.regular,
    color: '#121212',
    fontSize: 12,
  },
  button2Stack: {
    width: 50,
    height: 60,
    marginLeft: 75,
    // marginTop: 1
  },
  button3: {
    width: 45,
    height: 45,
  },
  image3: {
    width: 45,
    height: 45,
    opacity: 0.5,
  },
  profile: {
    fontFamily: fontApp.roboto.regular,
    color: '#121212',
    fontSize: 12,
    marginTop: 2,
    marginLeft: 5,
  },
  button3Column: {
    width: 40,
    marginLeft: 82,
    marginTop: 3,
  },
  buttonColumnRow: {
    height: 61,
    flexDirection: 'row',
    marginTop: 18,
    marginLeft: 41,
    marginRight: 46,
  },
  passwordBaru: {
    fontFamily: fontApp.roboto[700],
    color: '#121212',
    fontSize: 15,
    marginTop: -550,
    marginLeft: 47,
  },
  placeholder1: {
    fontFamily: fontApp.roboto.regular,
    color: '#121212',
    height: 49,
    width: 300,
    backgroundColor: 'rgba(155,155,155,1)',
    fontSize: 10,
    borderRadius: 30,
    textAlign: 'center',
    letterSpacing: 1,
    marginTop: 9,
    marginLeft: 44,
  },

  placeholder2: {
    fontFamily: fontApp.roboto.regular,
    color: '#121212',
    height: 49,
    width: 300,
    backgroundColor: 'rgba(155,155,155,1)',
    fontSize: 10,
    borderRadius: 30,
    textAlign: 'center',
    letterSpacing: 1,
    marginTop: 68,
    marginLeft: 44,
  },
  konfirmasiPassword: {
    fontFamily: fontApp.roboto[700],
    color: '#121212',
    fontSize: 15,
    marginTop: -76,
    marginLeft: 47,
  },
  button5: {
    width: 109,
    height: 33,
    marginTop: 109,
    marginLeft: 240,
  },
  rect3: {
    width: 100,
    height: 33,
    backgroundColor: 'rgba(246,107,14,1)',
    borderRadius: 35,
    flexDirection: 'row',
  },
  icon2: {
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    height: 16,
    width: 15,
    marginTop: 1,
  },
  ubah: {
    fontFamily: fontApp.roboto[700],
    color: 'rgba(255,255,255,1)',
    letterSpacing: 1,
    marginLeft: 12,
  },
  icon2Row: {
    height: 17,
    flexDirection: 'row',
    flex: 1,
    marginRight: 30,
    marginLeft: 16,
    marginTop: 8,
  },
});

export default Gantipass;
