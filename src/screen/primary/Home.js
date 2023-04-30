import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { dimensionDevice, fontApp } from '../../util/GlobalVar';

const Home = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: dimensionDevice.heightWindow / 2.5,
          width: dimensionDevice.widthWindow,
          flexDirection: 'column',
          paddingStart: 24,
          paddingEnd: 24,
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(246,107,14,1)',
            height: dimensionDevice.heightWindow / 3,
            width: dimensionDevice.widthWindow,
            borderBottomStartRadius: dimensionDevice.heightWindow / 3,
            borderBottomEndRadius: dimensionDevice.heightWindow / 3,
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
            top: 50,
            position: 'absolute',
            height: 270,
            width: 260,
            opacity: 0.3,
            right: -50,
          }}
        />
        <View
          style={{
            flexDirection: 'column',
            marginTop: 75,
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
            Hello, Ailsa
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
            Sebagai Staff
          </Text>
        </View>
        <View
          style={{
            height: 180,
            backgroundColor: '#12293E',
            marginTop: 24,
            marginStart: 8,
            marginEnd: 8,
            borderRadius: 24,
            padding: 8,
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
              source={require('../../../assets/ailsa.jpeg')}
              resizeMode="cover"
              style={{
                height: 70,
                width: 70,
                borderRadius: 70 / 2,
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
                  fontSize: 20,
                }}
              >
                Ailsa Nafa Devina
              </Text>
              <Text
                style={{
                  fontFamily: fontApp.heebo.regular,
                  color: 'rgba(249,249,249,1)',
                }}
              >
                ID : 003
              </Text>
            </View>
          </View>
          <View
            style={{
              marginEnd: 24,
              marginStart: 24,
              marginTop: 8,
              marginBottom: 16,
              flexDirection: 'row',
              backgroundColor: '#215376',
              borderRadius: 8,
            }}
          >
            <View
              style={{
                flexDirection: 'column',
                borderRadius: 8,
                paddingEnd: 8,
                paddingBottom: 8,
                backgroundColor: '#879BE3',
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
                Masuk
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 8,
                  alignItems: 'center',
                }}
              >
                <EntypoIcon
                  name="login"
                  style={{
                    marginTop: 8,
                    color: 'rgba(130,244,156,1)',
                    fontSize: 30,
                    width: 30,
                    height: 30,
                  }}
                />
                <Text
                  style={{
                    marginLeft: 4,
                    height: 30,
                    fontFamily: fontApp.signivikaNegative.regular,
                    color: 'rgba(255,255,255,1)',
                    fontSize: 25,
                  }}
                >
                  00 : 00
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'column',
                borderTopEndRadius: 8,
                borderBottomEndRadius: 8,
                paddingEnd: 16,
                paddingBottom: 8,
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
                  marginLeft: 8,
                  marginTop: 8,
                  alignItems: 'center',
                }}
              >
                <EntypoIcon name="log-out" size={30} color={'rgba(242,87,87,1)'} />
                <Text
                  style={{
                    marginLeft: 4,
                    height: 30,
                    fontFamily: fontApp.signivikaNegative.regular,
                    color: 'rgba(255,255,255,1)',
                    fontSize: 25,
                  }}
                >
                  00 : 00
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
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
          <TouchableOpacity onPress={() => navigation.navigate('IzinScreen')} style={styles.button}>
            <Image
              source={require('../../../assets/notes.png')}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <Text style={styles.textInput}>Izin</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CutiScreen')} style={styles.button}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    ...Platform.select({
      ios: {
        paddingTop: 24,
      },
    }),
  },

  button: {
    width: 130,
    height: 130,
    backgroundColor: 'rgba(212,246,204,1)',
    borderRadius: 10,
  },
  image4: {
    height: 80,
    width: 80,
    marginTop: 14,
    marginLeft: 27,
  },
  textInput: {
    fontFamily: fontApp.heebo[200],
    color: '#121212',
    textAlign: 'center',
    height: 17,
    marginTop: 8,
  },
});

export default Home;
