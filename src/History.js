import React, {useState} from 'react';
// import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Dialog} from '@rneui/themed';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import moment from 'moment';

function History({navigation, route}) {
  const [dateHistory, setDateHistory] = useState(new Date());
  const [iosTime, setIosTime] = useState(false);

  const showPickerCalendar = () => {
    if (Platform.OS === 'ios') {
      setIosTime(true);
    } else {
      DateTimePickerAndroid.open({
        value: dateHistory,
        onChange: (event, selectedDate) => {
          if (event.type === 'set') {
            changeDate(selectedDate);
          }
        },
        mode: 'date',
      });
    }
  };

  const changeDate = date => {
    setDateHistory(date);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.loremIpsum}>
            Cek History Absenmu {'\n'}Hari ini....
          </Text>
        </View>
        <Image
          source={require('../assets/report.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <Text style={styles.pilihTanggal}>Pilih Tanggal</Text>
      <TouchableOpacity
        onPress={() => {
          showPickerCalendar();
        }}
        style={styles.button}>
        <View style={styles.iconRow}>
          <FontAwesomeIcon name="calendar" style={styles.icon} />
          <Text
            style={{
              textAlignVertical: 'center',
              fontFamily: 'heebo-regular',
              color: '#121212',
              fontSize: 16,
            }}>
            {moment(dateHistory).format('DD-MM-YYYY')}
          </Text>
          <EntypoIcon name="chevron-down" style={styles.icon2} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}>
        <Text style={styles.oke}>Oke</Text>
      </TouchableOpacity>
      <Dialog
        isVisible={iosTime}
        // eslint-disable-next-line react-native/no-inline-styles
        overlayStyle={{
          backgroundColor: 'white',
          borderRadius: 8,
          justifyContent: 'center',
          flexDirection: 'column',
          paddingEnd: 16,
          paddingStart: 16,
          paddingTop: 8,
          paddingBottom: 8,
        }}>
        <RNDateTimePicker
          mode="date"
          display="spinner"
          value={dateHistory}
          onChange={(event, selectedDate) => {
            if (event.type === 'set') {
              changeDate(selectedDate);
            }
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setIosTime(false);
          }}
          style={{
            backgroundColor: 'rgba(246,107,14,1)',
            borderRadius: 8,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'roboto-700',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
            }}>
            Selesai
          </Text>
        </TouchableOpacity>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    top: 0,
    left: 0,
    width: 412,
    height: 285,
    position: 'absolute',
    backgroundColor: 'rgba(32,83,117,1)',
  },
  loremIpsum: {
    fontFamily: 'heebo-700',
    color: 'rgba(246,107,14,1)',
    fontSize: 35,
    marginTop: 47,
    marginLeft: 42,
  },
  image: {
    position: 'absolute',
    top: 75,
    right: 15,
    height: 350,
    width: 350,
  },
  rectStack: {
    width: 456,
    height: 467,
  },
  pilihTanggal: {
    fontFamily: 'heebo-300',
    color: '#121212',
    marginTop: 6,
    marginLeft: 58,
  },
  button: {
    width: 266,
    height: 50,
    backgroundColor: 'rgba(212,246,204,1)',
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 9,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: 'row',
    marginTop: 13,
    alignSelf: 'center',
  },
  icon: {
    color: 'rgba(32,83,117,1)',
    fontSize: 25,
    height: 25,
    width: 23,
    marginTop: 1,
  },
  icon2: {
    color: 'rgba(128,128,128,0.5)',
    fontSize: 25,
    height: 27,
    width: 25,
  },
  iconRow: {
    height: 27,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginRight: 19,
    marginLeft: 21,
    marginTop: 12,
  },
  button2: {
    width: 73,
    height: 31,
    backgroundColor: 'rgba(32,83,117,1)',
    borderRadius: 75,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 9,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginTop: 25,
    marginLeft: 247,
  },
  oke: {
    fontFamily: 'roboto-700',
    color: 'rgba(251,246,246,1)',
    marginTop: 7,
    marginLeft: 25,
  },
  rect2: {
    width: 401,
    height: 90,
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    marginTop: 130,
  },
  //   group1: {
  //     width: 45,
  //     height: 53
  //   },
  image1: {
    height: 39,
    width: 45,
  },
  text1: {
    //teks home
    fontFamily: 'heebo-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 12,
    marginTop: 1,
    marginLeft: 7,
  },
  button3: {
    //button history ke kanan
    width: 45,
    height: 53,
    opacity: 0.5,
    marginLeft: 90,
  },
  image2: {
    //gmbr history
    position: 'absolute',
    top: 0,
    left: 0,
    height: 40,
    width: 40,
  },
  text2: {
    // teks history
    top: 39,
    left: 1,
    position: 'absolute',
    fontFamily: 'heebo-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 12,
  },
  image2Stack: {
    width: 40,
    height: 56,
  },
  button4: {
    // profile
    width: 37,
    height: 51,
    marginLeft: 85,
    marginTop: 3,
  },
  image3: {
    height: 37,
    width: 37,
  },
  profile1: {
    fontFamily: 'heebo-700',
    color: 'rgba(0,0,0,1)',
    fontSize: 12,
    marginLeft: 1,
  },
  group1Row: {
    height: 54,
    flexDirection: 'row',
    flex: 1,
    marginRight: 72,
    marginLeft: 50,
    marginTop: 20,
  },
});

export default History;
