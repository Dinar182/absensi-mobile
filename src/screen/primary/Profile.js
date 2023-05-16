import React, { Component, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  InteractionManager,
  ActivityIndicator,
} from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {
  dimensionDevice,
  fontApp,
  moderateScale,
  horizontalScale,
  verticalScale,
} from '../../util/GlobalVar';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { logoutFetch, setLogoutSuccess } from '../../state/slicer/LoginState';
import { getKaryawanData, setLoading, setLogout } from '../../state/slicer/HomeSlicer';

function Profile({ navigation, route }) {
  const dispatch = useDispatch();
  const { loading, responseDetail, isLogout } = useSelector((state) => state.HomeState);

  const { logoutSuccess } = useSelector((state) => state.LoginState);

  const loadDataKaryawan = () => {
    dispatch(getKaryawanData());
  };

  useFocusEffect(
    useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        dispatch(setLoading(true));
        loadDataKaryawan();
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

  useEffect(() => {
    if (logoutSuccess) {
      dispatch(setLogoutSuccess(false));
      navigation.replace('Login');
    }
  }, [logoutSuccess]);

  return (
    <View style={styles.container}>
      {loading && responseDetail === null && (
        <View
          style={{
            backgroundColor: 'white',
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
            flex: 1,
          }}
        >
          <View
            style={{
              width: horizontalScale(dimensionDevice.widthScreen),
              height: verticalScale(dimensionDevice.heightScreen / 2),
              position: 'absolute',
              borderRadius: dimensionDevice.widthScreen / 2,
              top: '-30%',
              transform: [{ scaleX: 2 }],
              backgroundColor: 'rgba(33,83,118,1)',
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: dimensionDevice.heightWindow < 800 ? '5%' : '10%',
              left: horizontalScale(dimensionDevice.widthScreen / 8),
              right: horizontalScale(dimensionDevice.widthScreen / 8),
              bottom: 0,
              flexDirection: 'column',
            }}
          >
            <Text
              style={{
                marginBottom: 16,
                fontFamily: fontApp.roboto.regular,
                color: 'rgba(255,255,255,1)',
                fontSize: moderateScale(20),
              }}
            >
              Profile
            </Text>
            <View
              style={{
                borderRadius: 8,
                backgroundColor: '#E6E6E6',
                flexDirection: 'column',
                padding: 8,
                height: verticalScale(175),
                shadowColor: 'rgba(0,0,0,1)',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                elevation: 15,
                shadowOpacity: 0.27,
                shadowRadius: 8,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 8,
                }}
              >
                <Image
                  source={{ uri: responseDetail.profile }}
                  resizeMode="cover"
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 70 / 2,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Text
                    style={[
                      styles.ailsaNafaDevina,
                      {
                        maxWidth: horizontalScale(200),
                      },
                    ]}
                    ellipsizeMode="tail"
                    numberOfLines={1}
                  >
                    {responseDetail.nama}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(logoutFetch());
                    }}
                    style={{
                      marginTop: 8,
                      flexDirection: 'row',
                      backgroundColor: '#BE061C',
                      borderRadius: 8,
                      padding: 8,
                      width: 90,
                      height: 35,
                      alignSelf: 'flex-end',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <EvilIconsIcon
                      name="arrow-right"
                      color={'rgba(255,255,255,1)'}
                      size={30}
                      style={{
                        textAlignVertical: 'center',
                        height: 30,
                      }}
                    />
                    <Text style={styles.logout}>Logout</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  marginStart: 8,
                  marginEnd: 8,
                  backgroundColor: '#9B9B9B',
                  height: 2,
                  borderRadius: 8,
                  marginTop: 16,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  paddingStart: 8,
                  paddingEnd: 8,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 8,
                  }}
                >
                  <EntypoIcon name="bar-graph" style={styles.icon7} />
                  <View
                    style={{
                      flexDirection: 'column',
                      marginStart: 8,
                    }}
                  >
                    <Text style={styles.divisi}>Divisi</Text>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={[
                        styles.finance,
                        {
                          width: horizontalScale(80),
                          fontSize: moderateScale(12),
                        },
                      ]}
                    >
                      {responseDetail.divisi}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 50,
                    marginTop: 8,
                    marginStart: 8,
                    marginEnd: 8,
                    width: 2,
                    backgroundColor: '#9B9B9B',
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 8,
                  }}
                >
                  <EntypoIcon name="briefcase" style={styles.icon6} />
                  <View
                    style={{
                      flexDirection: 'column',
                      marginStart: 8,
                    }}
                  >
                    <Text style={styles.divisi}>Jabatan</Text>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={[
                        styles.finance,
                        {
                          width: horizontalScale(80),
                          fontSize: moderateScale(12),
                        },
                      ]}
                    >
                      {responseDetail.jabatan}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              marginTop: dimensionDevice.heightWindow < 800 ? '70%' : '85%',
              marginStart: '15%',
              marginEnd: '15%',
              flexDirection: 'column',
              flexGrow: 1,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 8,
              }}
            >
              <EntypoIcon name="v-card" style={styles.icon3} />
              <Text style={styles.dataDiri}>Data Diri</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 4,
              }}
            >
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    width: 100,
                  },
                ]}
              >
                Nama Lengkap
              </Text>
              <Text style={styles.namaLengkapId}>:</Text>
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    marginStart: 8,
                  },
                ]}
              >
                {responseDetail.nama}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 4,
              }}
            >
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    width: 100,
                  },
                ]}
              >
                NIP
              </Text>
              <Text style={styles.namaLengkapId}>:</Text>
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    marginStart: 8,
                  },
                ]}
              >
                {responseDetail.nip}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 4,
              }}
            >
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    width: 100,
                  },
                ]}
              >
                Email
              </Text>
              <Text style={[styles.namaLengkapId]}>:</Text>
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    marginStart: 8,
                  },
                ]}
              >
                {responseDetail.email}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 4,
              }}
            >
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    width: 100,
                  },
                ]}
              >
                Telepon
              </Text>
              <Text style={[styles.namaLengkapId]}>:</Text>
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    marginStart: 8,
                  },
                ]}
              >
                {responseDetail.no_telp}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 4,
              }}
            >
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    width: 100,
                  },
                ]}
              >
                Nomer KTP
              </Text>
              <Text style={[styles.namaLengkapId]}>:</Text>
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    marginStart: 8,
                  },
                ]}
              >
                {responseDetail.nik}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 4,
              }}
            >
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    width: 100,
                  },
                ]}
              >
                Tanggal Lahir
              </Text>
              <Text style={[styles.namaLengkapId]}>:</Text>
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    marginStart: 8,
                  },
                ]}
              >
                {responseDetail.tgl_lahir}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 4,
              }}
            >
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    width: 100,
                  },
                ]}
              >
                Jenis Kelamin
              </Text>
              <Text style={[styles.namaLengkapId]}>:</Text>
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    marginStart: 8,
                  },
                ]}
              >
                {responseDetail.jenis_kelamin}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 4,
              }}
            >
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    width: 100,
                  },
                ]}
              >
                Agama
              </Text>
              <Text style={[styles.namaLengkapId]}>:</Text>
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    marginStart: 8,
                  },
                ]}
              >
                {responseDetail.agama}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 4,
              }}
            >
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    width: 100,
                  },
                ]}
              >
                Alamat
              </Text>
              <Text style={[styles.namaLengkapId]}>:</Text>
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    marginStart: 8,
                  },
                ]}
              >
                {responseDetail.alamat}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 4,
              }}
            >
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    width: 100,
                  },
                ]}
              >
                Status
              </Text>
              <Text style={[styles.namaLengkapId]}>:</Text>
              <Text
                style={[
                  styles.namaLengkapId,
                  {
                    marginStart: 8,
                  },
                ]}
              >
                {responseDetail.status_pernikahan}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('ChangePasword');
              }}
            >
              <View style={styles.icon2Row}>
                <MaterialCommunityIconsIcon name="account-key" style={styles.icon2} />
                <Text style={styles.gantiPassword}>Ganti Password</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4F6CC',
    flexDirection: 'column',
    flexGrow: 1,
  },
  icon: {
    color: 'rgba(128,128,128,1)',
    fontSize: moderateScale(40),
    marginTop: 308,
  },
  ellipse: {
    top: 0,
    width: dimensionDevice.widthWindow,
    height: 379,
    left: 0,
  },
  rect: {
    top: 246,
    left: 79,
    width: 301,
    height: 196,
    position: 'absolute',
    backgroundColor: 'rgba(212,246,204,1)',
    borderRadius: 25,
  },
  image5: {
    width: 61,
    height: 59,
    borderRadius: 100,
  },
  ailsaNafaDevina: {
    fontFamily: fontApp.roboto[700],
    color: 'rgba(33,83,118,1)',
    fontSize: 18,
    letterSpacing: 1,
  },
  group2: {
    width: 93,
    height: 28,
    marginTop: 9,
  },
  group: {
    width: 93,
    height: 28,
  },
  rect3: {
    width: 93,
    height: 28,
    backgroundColor: 'rgba(174,17,17,1)',
    borderRadius: 8,
    flexDirection: 'row',
  },
  logout: {
    fontFamily: fontApp.roboto[700],
    color: 'rgba(255,255,255,1)',
    height: 30,
    textAlignVertical: 'center',
  },
  icon5: {
    color: 'rgba(255,255,255,1)',
    fontSize: 26,
    height: 28,
    width: 26,
    marginLeft: 8,
  },
  logoutRow: {
    height: 28,
    flexDirection: 'row',
    flex: 1,
    marginRight: 4,
    marginLeft: 11,
  },
  ailsaNafaDevinaColumn: {
    width: 163,
    marginLeft: 15,
    marginTop: 6,
  },
  image5Row: {
    height: 64,
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 26,
    marginRight: 36,
  },
  rect4: {
    top: 0,
    left: 0,
    width: 119,
    height: 65,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: 'rgba(155,155,155,1)',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  icon7: {
    color: 'rgba(128,128,128,1)',
    fontSize: moderateScale(30),
    height: verticalScale(30),
    width: horizontalScale(30),
  },
  divisi: {
    fontFamily: fontApp.roboto.regular,
    color: '#121212',
  },
  finance: {
    fontFamily: fontApp.roboto[700],
    color: '#121212',
    letterSpacing: 1,
  },
  divisiColumn: {
    width: 56,
    marginLeft: 7,
  },
  icon7Row: {
    height: 34,
    flexDirection: 'row',
    marginTop: 19,
    marginLeft: 11,
    marginRight: 15,
  },
  rect5: {
    top: 0,
    left: 117,
    width: 119,
    height: 65,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    borderColor: 'rgba(155,155,155,1)',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'row',
  },
  icon6: {
    color: 'rgba(128,128,128,1)',
    fontSize: moderateScale(30),
    height: verticalScale(30),
    width: horizontalScale(30),
  },
  jabatan: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: fontApp.roboto.regular,
    color: '#121212',
  },
  staff: {
    top: 16,
    left: 0,
    position: 'absolute',
    fontFamily: fontApp.roboto[700],
    color: '#121212',
    letterSpacing: 1,
  },
  jabatanStack: {
    width: 51,
    height: 33,
    marginLeft: 10,
  },
  icon6Row: {
    height: 33,
    flexDirection: 'row',
    flex: 1,
    marginRight: 17,
    marginLeft: 11,
    marginTop: 19,
  },
  rect4Stack: {
    width: 236,
    height: 65,
    marginTop: 14,
    marginLeft: 33,
  },
  ellipseStack: {
    width: 461,
    height: 442,
    marginLeft: 424,
  },
  iconRow: {
    height: 442,
    flexDirection: 'row',
    marginTop: -109,
    marginLeft: -507,
    marginRight: -43,
  },
  rect2: {
    width: 405,
    height: 100,
    backgroundColor: '#E6E6E6',
    marginTop: 386,
    marginLeft: -15,
  },
  home: {
    top: 48,
    left: 13,
    position: 'absolute',
    fontFamily: fontApp.roboto.regular,
    color: '#121212',
    fontSize: 9,
  },
  home1: {
    top: 48,
    left: 13,
    position: 'absolute',
    fontFamily: fontApp.roboto.regular,
    color: '#121212',
    fontSize: 0,
  },
  image4: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 50,
    width: 50,
  },
  homeStack: {
    width: 50,
    height: 59,
    marginTop: 2,
  },
  button2: {
    width: 50,
    height: 50,
  },
  image2: {
    width: 50,
    height: 50,
  },
  history: {
    fontFamily: fontApp.roboto.regular,
    color: '#121212',
    fontSize: 9,
    marginLeft: 7,
  },
  button2Column: {
    width: 50,
    marginLeft: 73,
    marginBottom: 2,
  },
  button3: {
    width: 89,
    height: 50,
  },
  image3: {
    width: 89,
    height: 50,
  },
  text: {
    fontFamily: fontApp.roboto.regular,
    color: '#121212',
    fontSize: 9,
    marginTop: 2,
    marginLeft: 32,
  },
  button3Column: {
    width: 89,
    marginLeft: 52,
  },
  homeStackRow: {
    height: 63,
    flexDirection: 'row',
    marginTop: 11,
    marginLeft: 55,
    marginRight: 36,
  },
  button: {
    width: 145,
    height: 35,
    backgroundColor: 'rgba(246,107,14,1)',
    borderRadius: 45,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 15,
    shadowOpacity: 0.27,
    shadowRadius: 8,
  },
  icon2: {
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    height: 16,
    width: 15,
  },
  gantiPassword: {
    fontFamily: fontApp.roboto[200],
    color: 'rgba(255,255,255,1)',
    fontSize: 10,
    letterSpacing: 2,
    marginLeft: 8,
    marginTop: 2,
  },
  icon2Row: {
    height: 16,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon3: {
    color: 'rgba(128,128,128,1)',
    fontSize: 25,
  },
  dataDiri: {
    fontFamily: fontApp.roboto[700],
    color: '#121212',
    letterSpacing: 2,
    marginLeft: 12,
    marginTop: 5,
  },
  icon3Row: {
    height: 27,
    flexDirection: 'row',
    marginTop: -289,
    marginLeft: 40,
    marginRight: 226,
  },
  namaLengkapId: {
    fontFamily: fontApp.roboto.regular,
    color: '#121212',
    fontSize: 12,
    lineHeight: 20,
  },
  icon4: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
    marginLeft: 67,
    marginTop: 32,
  },
  namaLengkapIdRow: {
    height: 200,
    flexDirection: 'row',
    marginTop: 2,
    marginLeft: 77,
    marginRight: -64,
  },
});

export default Profile;
