import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

function Cuti({navigation, route}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button2}>
        <View style={styles.icon6Row}>
          <FontAwesomeIcon
            name="calendar"
            style={styles.icon6}></FontAwesomeIcon>
          <EntypoIcon name="chevron-down" style={styles.icon5}></EntypoIcon>
        </View>
      </TouchableOpacity>
      <Text style={styles.pilihTanggalMulai}>Pilih tanggal Mulai</Text>
      <View style={styles.iconStack}>
        {/* <EntypoIcon name="chevron-down" style={styles.icon4}></EntypoIcon> */}
        <TouchableOpacity style={styles.button3}>
          <View style={styles.icon6Row}>
            <FontAwesomeIcon
              name="calendar"
              style={styles.icon6}></FontAwesomeIcon>
            <EntypoIcon name="chevron-down" style={styles.icon5}></EntypoIcon>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.pilihTanggalMulai}>Pilih tanggal Selesai</Text>
      <View style={styles.rect}>
        <View style={styles.icon1Row}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.icon1}>
            <EntypoIcon
              name="chevron-with-circle-left"
              style={styles.icon1}></EntypoIcon>
          </TouchableOpacity>
          <Text style={styles.text}>Cuti</Text>
        </View>
      </View>
      <View style={styles.imageStack}>
        <Image
          source={require('../assets/cuti.png')}
          resizeMode="contain"
          style={styles.image}></Image>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.proses}>Proses</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="     Keterangan"
        disableFullscreenUI={true}
        clearTextOnFocus={true}
        placeholderTextColor="rgba(17,43,60,1)"
        maxLength={500}
        clearButtonMode="while-editing"
        style={styles.keterangan}></TextInput>
      <Text style={styles.keterangan2}>Keterangan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button2: {
    //tgl mulai
    top: -20,
    width: 300,
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
    marginTop: 157,
    marginLeft: 47,
  },
  icon6: {
    //kalender
    color: 'rgba(32,83,117,1)',
    fontSize: 25,
    height: 30,
    width: 28,
  },
  icon5: {
    //panah bawah
    color: 'rgba(128,128,128,1)',
    fontSize: 25,
    height: 27,
    width: 25,
    marginLeft: 210,
  },
  icon6Row: {
    //posisi icon
    height: 30,
    flexDirection: 'row',
    flex: 1,
    marginRight: 18,
    marginLeft: 18,
    marginTop: 12,
  },
  pilihTanggalMulai: {
    fontFamily: 'heebo-700',
    color: '#121212',
    top: -25,
    marginTop: -80,
    marginLeft: 50,
  },
  button3: {
    top: -25,
    left: 0,
    width: 300,
    height: 53,
    position: 'absolute',
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
  },
  //   icon3: {
  //     color: "rgba(32,83,117,1)",
  //     fontSize: 30,
  //     height: 30,
  //     width: 28
  //   },
  //   icon2: {
  //     color: "rgba(128,128,128,1)",
  //     fontSize: 25,
  //     height: 27,
  //     width: 25,
  //     marginLeft: 192,
  //     marginTop: 2
  //   },
  //   icon3Row: {
  //     height: 30,
  //     flexDirection: "row",
  //     flex: 1,
  //     marginRight: 18,
  //     marginLeft: 18,
  //     marginTop: 12
  //   },
  iconStack: {
    width: 281,
    height: 53,
    marginTop: 103,
    marginLeft: 47,
  },
  //   pilihTanggalMulai1: {
  //     fontFamily: "heebo-700",
  //     color: "#121212",
  //     marginTop: -79,
  //     marginLeft: 47
  //   },
  rect: {
    //kotak Atas
    width: 400,
    height: 100,
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    marginTop: -255,
  },
  icon1: {
    //icon back
    color: 'rgba(32,83,117,1)',
    fontSize: 40,
    height: 42,
    width: 40,
  },
  text: {
    // text cuti
    fontFamily: 'roboto-700',
    color: 'rgba(32,83,117,1)',
    fontSize: 20,
    marginLeft: 11,
    marginTop: 10,
  },
  icon1Row: {
    // posisi icon back
    height: 44,
    flexDirection: 'row',
    flex: 1,
    marginRight: 274,
    marginLeft: 14,
    marginTop: 25,
  },
  image: {
    top: 0,
    left: 0,
    width: 358,
    height: 355,
    position: 'absolute',
    opacity: 0.15,
  },
  button: {
    //button proses
    top: 10,
    left: 260,
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
  proses: {
    fontFamily: 'heebo-700',
    color: 'rgba(250,250,250,1)',
    textAlign: 'center',
    marginTop: 13,
  },
  imageStack: {
    width: 360,
    height: 315,
    marginTop: 420,
    marginLeft: -32,
  },
  keterangan: {
    //kotak keterangan
    fontFamily: 'heebo-200',
    color: '#121212',
    height: 113,
    width: 300,
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
    marginTop: -462,
    marginLeft: 47,
  },
  keterangan2: {
    // font keterangan
    fontFamily: 'heebo-700',
    color: '#121212',
    marginTop: -141,
    marginLeft: 50,
  },
});

export default Cuti;
