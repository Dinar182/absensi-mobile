import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Svg, {Ellipse} from 'react-native-svg';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {dimensionDevice} from './util/GlobalVar';
import {ScrollView} from 'react-native-gesture-handler';

function Profile({navigation, route}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: dimensionDevice.widthScreen,
          height: dimensionDevice.heightScreen / 2,
          position: 'absolute',
          borderRadius: dimensionDevice.widthScreen / 2,
          top: -dimensionDevice.heightScreen / 5,
          transform: [{scaleX: 2}],
          backgroundColor: 'rgba(33,83,118,1)',
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 100,
          left: dimensionDevice.widthScreen / 6,
          right: dimensionDevice.widthScreen / 6,
          bottom: 0,
          flexDirection: 'column',
        }}>
        <Text
          style={{
            marginBottom: 16,
            fontFamily: 'roboto-regular',
            color: 'rgba(255,255,255,1)',
            fontSize: 20,
          }}>
          Profile
        </Text>
        <View
          style={{
            borderRadius: 8,
            backgroundColor: '#E6E6E6',
            flexDirection: 'column',
            padding: 8,
            height: 175,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image
              source={require('../assets/ailsa.jpeg')}
              resizeMode="cover"
              style={styles.image5}
            />
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}>
              <Text
                style={[
                  styles.ailsaNafaDevina,
                  {
                    maxWidth: 170,
                  },
                ]}
                ellipsizeMode="tail"
                numberOfLines={1}>
                Ailsa Nafa Devina
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.replace('Login');
                }}
                style={{
                  marginTop: 8,
                  flexDirection: 'row',
                  backgroundColor: '#BE061C',
                  borderRadius: 8,
                  width: 90,
                  height: 35,
                  alignSelf: 'flex-end',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <EvilIconsIcon
                  name="arrow-right"
                  color={'rgba(255,255,255,1)'}
                  size={28}
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
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 8,
              }}>
              <EntypoIcon name="bar-graph" style={styles.icon7} />
              <View
                style={{
                  flexDirection: 'column',
                  marginStart: 8,
                }}>
                <Text style={styles.divisi}>Divisi</Text>
                <Text style={styles.finance}>Finance</Text>
              </View>
            </View>
            <View
              style={{
                height: 50,
                marginTop: 8,
                width: 2,
                backgroundColor: '#9B9B9B',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 8,
              }}>
              <EntypoIcon name="briefcase" style={styles.icon6} />
              <View
                style={{
                  flexDirection: 'column',
                  marginStart: 8,
                }}>
                <Text style={styles.divisi}>Jabatan</Text>
                <Text style={styles.finance}>Staff</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: dimensionDevice.heightScreen / 2.4,
          marginStart: dimensionDevice.widthScreen / 6,
          marginEnd: dimensionDevice.widthScreen / 6,
          flexDirection: 'column',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 8,
          }}>
          <EntypoIcon name="v-card" style={styles.icon3} />
          <Text style={styles.dataDiri}>Data Diri</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 4,
          }}>
          <Text
            style={[
              styles.namaLengkapId,
              {
                width: 100,
              },
            ]}>
            Nama Lengkap
          </Text>
          <Text style={styles.namaLengkapId}>:</Text>
          <Text
            style={[
              styles.namaLengkapId,
              {
                marginStart: 8,
              },
            ]}>
            Ailsa Nafa Devina
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 4,
          }}>
          <Text
            style={[
              styles.namaLengkapId,
              {
                width: 100,
              },
            ]}>
            ID
          </Text>
          <Text style={styles.namaLengkapId}>:</Text>
          <Text
            style={[
              styles.namaLengkapId,
              {
                marginStart: 8,
              },
            ]}>
            003
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 4,
          }}>
          <Text
            style={[
              styles.namaLengkapId,
              {
                width: 100,
              },
            ]}>
            Email
          </Text>
          <Text style={[styles.namaLengkapId]}>:</Text>
          <Text
            style={[
              styles.namaLengkapId,
              {
                marginStart: 8,
              },
            ]}>
            ailsanafadevina@gmail.com
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 4,
          }}>
          <Text
            style={[
              styles.namaLengkapId,
              {
                width: 100,
              },
            ]}>
            Telepon
          </Text>
          <Text style={[styles.namaLengkapId]}>:</Text>
          <Text
            style={[
              styles.namaLengkapId,
              {
                marginStart: 8,
              },
            ]}>
            089999222444
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 4,
          }}>
          <Text
            style={[
              styles.namaLengkapId,
              {
                width: 100,
              },
            ]}>
            Nomer KTP
          </Text>
          <Text style={[styles.namaLengkapId]}>:</Text>
          <Text
            style={[
              styles.namaLengkapId,
              {
                marginStart: 8,
              },
            ]}>
            3374567890212121
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 4,
          }}>
          <Text
            style={[
              styles.namaLengkapId,
              {
                width: 100,
              },
            ]}>
            Tanggal Lahir
          </Text>
          <Text style={[styles.namaLengkapId]}>:</Text>
          <Text
            style={[
              styles.namaLengkapId,
              {
                marginStart: 8,
              },
            ]}>
            07 Januari 2001
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 4,
          }}>
          <Text
            style={[
              styles.namaLengkapId,
              {
                width: 100,
              },
            ]}>
            Jenis Kelamin
          </Text>
          <Text style={[styles.namaLengkapId]}>:</Text>
          <Text
            style={[
              styles.namaLengkapId,
              {
                marginStart: 8,
              },
            ]}>
            Perempuan
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 4,
          }}>
          <Text
            style={[
              styles.namaLengkapId,
              {
                width: 100,
              },
            ]}>
            Agama
          </Text>
          <Text style={[styles.namaLengkapId]}>:</Text>
          <Text
            style={[
              styles.namaLengkapId,
              {
                marginStart: 8,
              },
            ]}>
            Islam
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 4,
          }}>
          <Text
            style={[
              styles.namaLengkapId,
              {
                width: 100,
              },
            ]}>
            Alamat
          </Text>
          <Text style={[styles.namaLengkapId]}>:</Text>
          <Text
            style={[
              styles.namaLengkapId,
              {
                marginStart: 8,
              },
            ]}>
            Jalan Tandang 2/11
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginBottom: 4,
          }}>
          <Text
            style={[
              styles.namaLengkapId,
              {
                width: 100,
              },
            ]}>
            Status
          </Text>
          <Text style={[styles.namaLengkapId]}>:</Text>
          <Text
            style={[
              styles.namaLengkapId,
              {
                marginStart: 8,
              },
            ]}>
            Belum Menikah
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('ChangePasword');
          }}>
          <View style={styles.icon2Row}>
            <MaterialCommunityIconsIcon
              name="account-key"
              style={styles.icon2}
            />
            <Text style={styles.gantiPassword}>Ganti Password</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4F6CC',
    flexDirection: 'column',
  },
  icon: {
    color: 'rgba(128,128,128,1)',
    fontSize: 40,
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
    fontFamily: 'roboto-700',
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
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
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
    fontSize: 30,
    height: 33,
    width: 30,
  },
  divisi: {
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  finance: {
    fontFamily: 'roboto-700',
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
    fontSize: 30,
    height: 33,
    width: 30,
  },
  jabatan: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#121212',
  },
  staff: {
    top: 16,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-700',
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
    fontFamily: 'roboto-regular',
    color: '#121212',
    fontSize: 9,
  },
  home1: {
    top: 48,
    left: 13,
    position: 'absolute',
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    fontFamily: 'roboto-regular',
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
    height: 29,
    backgroundColor: 'rgba(246,107,14,1)',
    borderRadius: 45,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  icon2: {
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    height: 16,
    width: 15,
  },
  gantiPassword: {
    fontFamily: 'roboto-100',
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
    marginRight: 11,
    marginLeft: 15,
    marginTop: 7,
  },
  icon3: {
    color: 'rgba(128,128,128,1)',
    fontSize: 25,
  },
  dataDiri: {
    fontFamily: 'roboto-700',
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
    fontFamily: 'roboto-regular',
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
