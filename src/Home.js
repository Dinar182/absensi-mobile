import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {dimensionDevice} from './util/GlobalVar';

const Home = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 563.46 343.37" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(246,107,14,1)"
              cx={282}
              cy={172}
              rx={282}
              ry={172}
            />
          </Svg>

          <Image
            source={require('../assets/logo-bjl-2-removebg-preview.png')}
            resizeMode="contain"
            style={[
              styles.image5,
              {
                top: 40,
              },
            ]}
          />
          <View
            style={[
              styles.rect,
              {
                justifyContent: 'space-around',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                paddingEnd: 8,
                paddingStart: 8,
                width: '100%',
              }}>
              <Image
                source={require('../assets/ailsa.jpeg')}
                resizeMode="cover"
                style={styles.image9}
              />
              <View style={styles.AilsaNafaDevinaColumn}>
                <Text style={styles.AilsaNafaDevina}>Ailsa Nafa Devina</Text>
                <Text style={styles.id003}>ID : 003</Text>
              </View>
            </View>
            <View
              style={[
                styles.rect3,
                {
                  justifyContent: 'space-between',
                  marginTop: 16,
                },
              ]}>
              <View
                style={{
                  flexDirection: 'column',
                  borderRadius: 8,
                  paddingEnd: 16,
                  paddingBottom: 8,

                  backgroundColor: 'rgba(132,158,229,1)',
                }}>
                <Text style={styles.masuk}>Masuk</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 8,
                    alignItems: 'center',
                  }}>
                  <EntypoIcon name="login" style={styles.icon} />
                  <Text style={styles.AilsaNafaDevina3}>00 : 00</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  borderRadius: 8,
                  paddingEnd: 16,
                  paddingBottom: 8,
                }}>
                <Text style={styles.masuk}>Pulang</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 8,
                    alignItems: 'center',
                  }}>
                  <EntypoIcon name="log-out" style={styles.icon2} />
                  <Text style={styles.AilsaNafaDevina3}>00 : 00</Text>
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.helloAilsa}>Hello, Ailsa</Text>
          <Text style={styles.loremIpsum}>
            Selamat datang diabsensi online {'\n'}sebagai Staff
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flexDirection: 'column',
          marginTop: 16,
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          paddingStart: 24,
          paddingEnd: 24,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 16,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AbsenScreen')}
            style={styles.button}>
            <Image
              source={require('../assets/immigration.png')}
              resizeMode="contain"
              style={styles.image4}></Image>
            <Text style={styles.textInput}>Absen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RekapScreen')}
            style={styles.button}>
            <Image
              source={require('../assets/list.png')}
              resizeMode="contain"
              style={styles.image4}></Image>
            <Text style={styles.textInput}>Rekap Absen</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 16,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('IzinScreen')}
            style={styles.button}>
            <Image
              source={require('../assets/notes.png')}
              resizeMode="contain"
              style={styles.image4}></Image>
            <Text style={styles.textInput}>Izin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('CutiScreen')}
            style={styles.button}>
            <Image
              source={require('../assets/travel.png')}
              resizeMode="contain"
              style={styles.image4}></Image>
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
    flexDirection: 'column',
  },
  ellipse: {
    top: 0,
    width: 563,
    height: 300,
    transform: [
      {
        rotate: '-6.00deg',
      },
    ],
    left: 0,
  },
  image5: {
    position: 'absolute',
    top: 76,
    left: 282,
    height: 268,
    width: 260,
    opacity: 0.3,
  },
  rect: {
    width: 310,
    height: 185,
    flexDirection: 'column',
    position: 'absolute',
    padding: 16,
    alignItems: 'center',
    left: dimensionDevice.widthScreen / 3,
    right: dimensionDevice.widthScreen / 3,
    bottom: 0,
    top: 220,
    backgroundColor: 'rgba(17,43,60,1)',
    borderRadius: 20,
  },
  image9: {
    //foto ailsa
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
  },
  AilsaNafaDevina: {
    fontFamily: 'signika-negative-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
  id003: {
    fontFamily: 'heebo-regular',
    color: 'rgba(249,249,249,1)',
  },
  AilsaNafaDevinaColumn: {
    marginLeft: 8,
    marginTop: 11,
    marginBottom: 15,
  },
  image9Row: {
    height: 70,
    flexDirection: 'row',
    marginTop: 23,
    marginLeft: 26,
    marginRight: 56,
  },
  rect2: {
    flex: 0.53,
    backgroundColor: 'rgba(132,158,229,1)',
    borderRadius: 10,
  },
  masuk: {
    marginTop: 8,
    marginLeft: 8,
    fontFamily: 'signika-negative-regular',
    color: 'rgba(249,249,249,1)',
  },
  AilsaNafaDevina2: {
    top: 24,
    left: 59,
    position: 'absolute',
    fontFamily: 'signika-negative-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 25,
  },
  rect3: {
    width: '100%',
    minHeight: 65,
    flexDirection: 'row',
    marginTop: 8,
    backgroundColor: 'rgba(32,83,117,1)',
    borderRadius: 10,
  },
  pulang: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'signika-negative-regular',
    color: 'rgba(249,249,249,1)',
  },
  icon2: {
    marginTop: 8,
    color: 'rgba(242,87,87,1)',
    fontSize: 30,
    width: 30,
    height: 30,
  },
  AilsaNafaDevina3: {
    marginLeft: 4,
    height: 30,
    fontFamily: 'signika-negative-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 25,
  },
  pulangStack: {
    top: 7,
    left: 156,
    width: 110,
    height: 49,
    position: 'absolute',
  },
  icon: {
    marginTop: 8,
    color: 'rgba(130,244,156,1)',
    fontSize: 30,
    width: 30,
    height: 30,
  },
  rect2Stack: {
    height: 68,
    marginTop: 10,
    paddingStart: 16,
    paddingEnd: 16,
    justifyContent: 'center',
  },
  helloAilsa: {
    top: 130,
    left: 126,
    position: 'absolute',
    fontFamily: 'pacifico-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 30,
    opacity: 1.5,
  },
  loremIpsum: {
    top: 170,
    left: 128,
    position: 'absolute',
    fontFamily: 'heebo-regular',
    color: 'rgba(249,249,249,1)',
  },
  ellipseStack: {
    width: dimensionDevice.widthScreen,
    flexDirection: 'column',
    height: 400,
    marginTop: -63,
    marginLeft: -95,
  },
  rect4: {
    width: 400,
    height: 98,
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    marginTop: 333,
  },
  button10: {
    width: 45,
    height: 57,
    opacity: 0.5,
  },
  image10: {
    height: 39,
    width: 45,
  },
  text2: {
    fontFamily: 'heebo-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 12,
    marginTop: 1,
    marginLeft: 7,
  },
  button5: {
    width: 40,
    height: 57,
    marginLeft: 75,
    marginTop: 1,
  },
  image2: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 40,
    width: 40,
  },
  text: {
    top: 39,
    left: 1,
    position: 'absolute',
    fontFamily: 'heebo-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 12,
  },
  //   image2Stack: {
  //     width: 100,
  //     height: 57
  //   },
  button6: {
    width: 37,
    height: 55,
    marginLeft: 85,
    marginTop: 3,
  },
  image3: {
    height: 37,
    width: 37,
  },
  profile: {
    fontFamily: 'heebo-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 12,
    marginLeft: 1,
  },
  button10Row: {
    height: 58,
    flexDirection: 'row',
    flex: 1,
    marginRight: 46,
    marginLeft: 47,
    marginTop: 15,
  },
  group2: {
    width: 130,
    height: 130,
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
    fontFamily: 'heebo-200',
    color: '#121212',
    textAlign: 'center',
    height: 17,
    marginTop: 8,
  },
  button7: {
    width: 130,
    height: 130,
    marginLeft: 37,
  },
  button3: {
    width: 130,
    height: 130,
    backgroundColor: 'rgba(212,246,204,1)',
    borderRadius: 10,
  },
  image8: {
    height: 70,
    width: 70,
    marginTop: 19,
    marginLeft: 31,
  },
  rekapAbsen: {
    fontFamily: 'heebo-200',
    color: '#121212',
    marginTop: 10,
    marginLeft: 28,
  },
  group2Row: {
    height: 130,
    flexDirection: 'row',
    marginTop: -406,
    marginLeft: 37,
    marginRight: 41,
  },
  button8: {
    width: 130,
    height: 130,
  },
  button1: {
    width: 130,
    height: 130,
    backgroundColor: 'rgba(212,246,204,1)',
    borderRadius: 10,
  },
  image6: {
    height: 70,
    width: 70,
    marginTop: 19,
    marginLeft: 31,
  },
  izin: {
    fontFamily: 'heebo-200',
    color: '#121212',
    marginTop: 7,
    marginLeft: 51,
  },
  button9: {
    width: 130,
    height: 130,
    marginLeft: 37,
  },
  button2: {
    width: 130,
    height: 130,
    backgroundColor: 'rgba(212,246,204,1)',
    borderRadius: 10,
  },
  image7: {
    height: 75,
    width: 75,
    marginTop: 16,
    marginLeft: 30,
  },
  cuti: {
    fontFamily: 'heebo-200',
    color: '#121212',
    marginTop: 4,
    marginLeft: 54,
  },
  button8Row: {
    height: 130,
    flexDirection: 'row',
    marginTop: 22,
    marginLeft: 38,
    marginRight: 40,
  },
});

export default Home;
