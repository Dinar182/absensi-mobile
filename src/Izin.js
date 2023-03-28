import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

function Izin({navigation, route}) {
  return (
    <View style={styles.container}>
      <View style={styles.button1Stack}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.pengajuan1}>Pengajuan</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/hospital.png')}
          resizeMode="contain"
          style={styles.image}></Image>
        <TextInput
          placeholder="     Keterangan"
          disableFullscreenUI={true}
          clearTextOnFocus={true}
          placeholderTextColor="rgba(17,43,60,1)"
          maxLength={250}
          style={styles.keterangan2}></TextInput>
      </View>
      <TouchableOpacity style={styles.button4}>
        <View style={styles.icon9Row}>
          <FeatherIcon name="clock" style={styles.icon9}></FeatherIcon>
          <Text style={styles.loremIpsum}>13 : 00</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
        <View style={styles.icon7Row}>
          <FontAwesomeIcon
            name="calendar"
            style={styles.icon7}></FontAwesomeIcon>
          <EntypoIcon name="chevron-down" style={styles.icon8}></EntypoIcon>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <EntypoIcon name="chevron-down" style={styles.icon5}></EntypoIcon>
      </TouchableOpacity>
      <View style={styles.rect1}>
        <View style={styles.button5Row}>
          <TouchableOpacity style={styles.button5}>
            <EntypoIcon
              name="chevron-with-circle-left"
              style={styles.icon1}></EntypoIcon>
          </TouchableOpacity>
          <Text style={styles.text}>Izin</Text>
        </View>
      </View>
      <Text style={styles.keterangan1}>Keterangan</Text>
      <Text style={styles.jenisIzin}>Jenis Izin</Text>
      <Text style={styles.pilihTanggal}>Pilih Tanggal</Text>
      <Text style={styles.pilihJam}>Pilih Jam</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button1: {
    top: 143,
    left: 250,
    width: 120,
    height: 46,
    position: 'absolute',
    backgroundColor: 'rgba(32,83,117,1)',
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.21,
    shadowRadius: 0,
  },
  pengajuan1: {
    fontFamily: 'heebo-700',
    color: 'rgba(250,250,250,1)',
    marginTop: 13,
    marginLeft: 29,
  },
  image: {
    top: 93,
    left: 0,
    width: 314,
    height: 361,
    position: 'absolute',
    opacity: 0.36,
  },
  keterangan2: {
    top: 0,
    left: 74,
    position: 'absolute',
    fontFamily: 'heebo-200',
    color: '#121212',
    height: 113,
    width: 295,
    backgroundColor: 'rgba(212,246,204,1)',
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 9,
    shadowOpacity: 0.31,
    shadowRadius: 3,
    textAlign: 'justify',
  },
  button1Stack: {
    width: 355,
    height: 454,
    marginTop: 480,
    marginLeft: -27,
  },
  button4: {
    width: 161,
    height: 53,
    backgroundColor: 'rgba(212,246,204,1)',
    borderWidth: 1,
    borderColor: 'rgba(230,230,230,1)',
    borderStyle: 'solid',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 15,
    shadowOpacity: 0.27,
    shadowRadius: 5,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: -554,
    marginLeft: 47,
  },
  icon9: {
    color: 'rgba(17,43,60,1)',
    fontSize: 30,
    height: 30,
    width: 30,
  },
  loremIpsum: {
    fontFamily: 'roboto-100',
    color: '#121212',
    fontSize: 18,
    marginLeft: 25,
    marginTop: 5,
  },
  icon9Row: {
    height: 30,
    flexDirection: 'row',
    flex: 1,
    marginRight: 67,
    marginLeft: 13,
    marginTop: 10,
  },
  button3: {
    width: 300,
    height: 55,
    backgroundColor: 'rgba(212,246,204,1)',
    borderWidth: 1,
    borderColor: 'rgba(230,230,230,1)',
    borderStyle: 'solid',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 15,
    shadowOpacity: 0.27,
    shadowRadius: 5,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: -156,
    marginLeft: 47,
  },
  icon7: {
    color: 'rgba(32,83,117,1)',
    fontSize: 30,
    height: 30,
    width: 28,
  },
  icon8: {
    color: 'rgba(128,128,128,1)',
    fontSize: 25,
    height: 27,
    width: 25,
    marginLeft: 210,
    marginTop: 1,
  },
  icon7Row: {
    height: 30,
    flexDirection: 'row',
    flex: 1,
    marginRight: 16,
    marginLeft: 18,
    marginTop: 11,
  },
  button2: {
    width: 300,
    height: 55,
    backgroundColor: 'rgba(212,246,204,1)',
    borderWidth: 1,
    borderColor: 'rgba(230,230,230,1)',
    borderStyle: 'solid',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 15,
    shadowOpacity: 0.27,
    shadowRadius: 5,
    borderRadius: 10,
    marginTop: -154,
    marginLeft: 47,
  },
  icon5: {
    //panah jenis izin
    color: 'rgba(128,128,128,1)',
    fontSize: 25,
    height: 27,
    width: 25,
    marginTop: 12,
    marginLeft: 255,
  },
  rect1: {
    //abu2 atas
    width: 390,
    height: 70,
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    marginTop: -235,
  },
  button5: {
    width: 40,
    height: 42,
  },
  icon1: {
    //icon back
    color: 'rgba(32,83,117,1)',
    fontSize: 40,
  },
  text: {
    fontFamily: 'roboto-700',
    color: 'rgba(32,83,117,1)',
    fontSize: 18,
    marginLeft: 13,
    marginTop: 10,
  },
  button5Row: {
    //button back
    height: 42,
    flexDirection: 'row',
    flex: 1,
    marginRight: 280,
    marginLeft: 20,
    marginTop: 15,
  },
  keterangan1: {
    //posisi tulisan keterangan
    fontFamily: 'heebo-700',
    color: '#121212',
    marginTop: 380,
    marginLeft: 48,
  },
  jenisIzin: {
    fontFamily: 'heebo-700',
    color: '#121212',
    marginTop: -315,
    marginLeft: 47,
  },
  pilihTanggal: {
    fontFamily: 'heebo-700',
    color: '#121212',
    marginTop: 79,
    marginLeft: 47,
  },
  pilihJam: {
    fontFamily: 'heebo-700',
    color: '#121212',
    marginTop: 85,
    marginLeft: 47,
  },
});

export default Izin;
