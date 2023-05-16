import React, { Component, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  InteractionManager,
  ActivityIndicator,
  Linking,
  Platform,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {
  dimensionDevice,
  fontApp,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../util/GlobalVar';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import {
  getKaryawanData,
  getLogAbsen,
  setLoading,
  setLogout,
  setOpenSetting,
  stateGps,
} from '../../state/slicer/HomeSlicer';
import { Dialog } from '@rneui/themed';

const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const {
    loading,
    responseDetail,
    panggilan,
    openSetting,
    timeAbsenMasuk,
    timeAbsenKeluar,
    isLogout,
  } = useSelector((state) => state.HomeState);

  const loadDataKaryawan = () => {
    dispatch(getKaryawanData());
    dispatch(getLogAbsen());
    dispatch(stateGps());
  };

  useFocusEffect(
    useCallback(() => {
      const task = InteractionManager.runAfterInteractions(async () => {
        dispatch(setLoading(true));
        loadDataKaryawan();
        console.log(dimensionDevice.heightWindow);
      });
      return () => {
        task.cancel();
      };
    }, [])
  );

  useEffect(() => {
    if (isLogout) {
      dispatch(setLogout(false));
      navigation.replace('Login');
    }
  }, [isLogout, navigation]);

  return (
    <View style={styles.container}>
      {loading && responseDetail === null && (
        <View
          style={{
            backgroundColor: 'rgbo(255,255,255,0.6)',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: '#215376',
              borderRadius: 8,
              width: 75,
              height: 75,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ActivityIndicator size={'large'} color={'rgba(246,107,14,1)'} />
          </View>
        </View>
      )}

      {!loading && responseDetail !== null && (
        <View
          style={{
            flexGrow: 1,
          }}
        >
          <View
            style={{
              height: '40%',
              flexDirection: 'column',
            }}
          >
            <View
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(246,107,14,1)',
                height: '100%',
                width: '100%',
                borderBottomStartRadius: dimensionDevice.heightWindow / 2,
                borderBottomEndRadius: dimensionDevice.heightWindow / 2,
                transform: [
                  {
                    scaleX: 2,
                  },
                ],
              }}
            />
            <Image
              source={require('../../../assets/logo-bjl-2-removebg-preview.png')}
              resizeMode="contain"
              style={{
                top: '35%',
                position: 'absolute',
                height: verticalScale(270),
                width: horizontalScale(270),
                opacity: 0.3,
                right: -50,
              }}
            />
            <View
              style={{
                flexDirection: 'column',
                marginStart: '10%',
                marginEnd: '10%',
                marginTop: dimensionDevice.heightWindow < 800 ? '10%' : '20%',
              }}
            >
              <Text
                style={{
                  fontFamily: fontApp.pacifico.regular,
                  color: 'rgba(255,255,255,1)',
                  fontSize: 30,
                  opacity: 1.5,
                }}
              >
                Hello, {panggilan}
              </Text>
              <Text
                style={{
                  fontFamily: fontApp.heebo.regular,
                  color: 'rgba(249,249,249,1)',
                }}
              >
                Selamat datang di Absensi Online
              </Text>
              <Text
                style={{
                  fontFamily: fontApp.heebo.regular,
                  color: 'rgba(249,249,249,1)',
                }}
              >
                Sebagai {responseDetail.jabatan}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#12293E',
                marginTop: 16,
                alignSelf: 'center',
                borderRadius: 16,
                marginStart: '10%',
                marginEnd: '10%',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingStart: 16,
                  marginTop: 8,
                  paddingEnd: 16,
                }}
              >
                <Image
                  source={{ uri: responseDetail.profile }}
                  resizeMode="cover"
                  style={{
                    height: 55,
                    width: 55,
                    borderRadius: 55 / 2,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginStart: 16,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: fontApp.signivikaNegative.regular,
                      color: 'rgba(255,255,255,1)',
                      fontSize: moderateScale(20),
                    }}
                  >
                    {responseDetail.nama}
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontApp.heebo.regular,
                      color: 'rgba(249,249,249,1)',
                      fontSize: moderateScale(12),
                    }}
                  >
                    NIP : {responseDetail.nip}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginEnd: 16,
                  marginStart: 16,
                  marginTop: 8,
                  marginBottom: 16,

                  flexDirection: 'row',
                  backgroundColor: '#215376',
                  borderRadius: 8,
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    flexDirection: 'column',
                    width: '50%',
                    padding: 4,
                    borderRadius: 8,
                    paddingEnd: 16,

                    backgroundColor: '#879BE3',
                  }}
                >
                  <Text
                    style={{
                      marginTop: 4,
                      marginLeft: 4,
                      fontFamily: fontApp.signivikaNegative.regular,
                      color: 'rgba(249,249,249,1)',
                    }}
                  >
                    Masuk
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 4,
                      marginTop: 4,
                      alignItems: 'center',
                    }}
                  >
                    <EntypoIcon
                      name="login"
                      style={{
                        color: 'rgba(130,244,156,1)',
                        fontSize: moderateScale(25),
                        width: horizontalScale(30),
                        height: verticalScale(30),
                      }}
                    />
                    <Text
                      style={{
                        marginLeft: 4,
                        height: verticalScale(40),
                        fontFamily: fontApp.signivikaNegative.regular,
                        color: 'rgba(255,255,255,1)',
                        fontSize: moderateScale(25),
                      }}
                    >
                      {timeAbsenMasuk}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    borderTopEndRadius: 8,
                    borderBottomEndRadius: 8,
                    paddingEnd: 16,
                    width: '50%',
                    backgroundColor: '#215376',
                  }}
                >
                  <Text
                    style={{
                      marginTop: 8,
                      marginLeft: 8,
                      fontFamily: fontApp.signivikaNegative.regular,
                      color: 'rgba(249,249,249,1)',
                    }}
                  >
                    Pulang
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 4,
                      marginTop: 4,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EntypoIcon
                      name="log-out"
                      style={{
                        color: 'rgba(242,87,87,1)',
                        fontSize: moderateScale(25),
                        width: horizontalScale(30),
                        height: verticalScale(30),
                      }}
                    />
                    <Text
                      style={{
                        marginLeft: 4,
                        height: verticalScale(40),
                        fontFamily: fontApp.signivikaNegative.regular,
                        color: 'rgba(255,255,255,1)',
                        fontSize: moderateScale(25),
                      }}
                    >
                      {timeAbsenKeluar}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: '10%',
              flexGrow: 1,
            }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}
              contentContainerStyle={{
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                paddingStart: 24,
                paddingEnd: 24,
                flexGrow: 1,
              }}
              horizontal={false}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate('AbsenScreen')}
                  style={styles.button}
                >
                  <Image
                    source={require('../../../assets/immigration.png')}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                  <Text style={styles.textInput}>Absen</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RekapScreen')}
                  style={styles.button}
                >
                  <Image
                    source={require('../../../assets/list.png')}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                  <Text style={styles.textInput}>Rekap Absen</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate('IzinScreen')}
                  style={styles.button}
                >
                  <Image
                    source={require('../../../assets/notes.png')}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                  <Text style={styles.textInput}>Izin</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('CutiScreen')}
                  style={styles.button}
                >
                  <Image
                    source={require('../../../assets/travel.png')}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                  <Text style={styles.textInput}>Cuti</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

          <Dialog
            isVisible={openSetting}
            backdropStyle={{
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
            overlayStyle={{
              borderRadius: 8,
              flexDirection: 'column',
              padding: 24,
            }}
          >
            <Text
              style={{
                fontFamily: fontApp.roboto[700],
                fontSize: moderateScale(14),
                color: 'black',
              }}
            >
              Mohon Aktifkan Lokasi Terlebih Dahulu!
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginTop: 24,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (Platform.OS === 'ios') {
                    dispatch(setOpenSetting(false));

                    Linking.openURL('app-settings:');
                  } else {
                    dispatch(setOpenSetting(false));
                    Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS');
                  }
                }}
                style={{
                  backgroundColor: 'rgba(246,107,14,1)',
                  width: horizontalScale(75),
                  height: verticalScale(35),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 16,
                }}
              >
                <Text
                  style={{
                    fontFamily: fontApp.roboto[700],
                    fontSize: moderateScale(12),
                    color: 'white',
                  }}
                >
                  Ya
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch(setOpenSetting(false));
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 75,
                  borderRadius: 16,
                  height: verticalScale(35),
                }}
              >
                <Text
                  style={{
                    fontFamily: fontApp.roboto[700],
                    fontSize: moderateScale(12),
                    color: 'black',
                  }}
                >
                  Tidak
                </Text>
              </TouchableOpacity>
            </View>
          </Dialog>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,
  },

  button: {
    width: horizontalScale(130),
    height: verticalScale(160),
    backgroundColor: 'rgba(212,246,204,1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image4: {
    height: horizontalScale(80),
    width: verticalScale(80),
  },
  textInput: {
    fontFamily: fontApp.heebo[200],
    color: '#121212',
    textAlign: 'center',
    height: verticalScale(17),
    marginTop: 8,
  },
});

export default Home;
