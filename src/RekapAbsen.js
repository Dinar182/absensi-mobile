import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Dialog } from '@rneui/themed';
import { dimensionDevice } from './util/GlobalVar';

function RekapAbsen({ navigation, route }) {
  const [iosTime, setIosTime] = useState(false);
  const [iosMode, setIosMode] = useState(0);
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  const showPickerCalendar = mode => {
    if (Platform.OS === 'ios') {
      setIosMode(mode);
      setIosTime(true);
    } else {
      if (mode === 0) {
        DateTimePickerAndroid.open({
          value: dateStart,
          onChange: (event, selectedDate) => {
            if (event.type === 'set') {
              changeDate(mode, selectedDate);
            }
          },
          mode: 'date',
        });
      } else {
        DateTimePickerAndroid.open({
          value: dateEnd,
          onChange: (event, selectedDate) => {
            if (event.type === 'set') {
              changeDate(mode, selectedDate);
            }
          },
          mode: 'date',
        });
      }
    }
  };

  const changeDate = (mode, date) => {
    if (mode === 0) {
      setDateStart(date);
    } else {
      setDateEnd(date);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/RekapAbsen.png')}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.rect}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.button4}>
          <EntypoIcon name="chevron-with-circle-left" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.text}>Rekap Absen</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          showPickerCalendar(0);
        }}
        style={styles.button2}>
        <View style={styles.icon2Row}>
          <FontAwesomeIcon name="calendar" style={styles.icon2} />
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              textAlignVertical: 'center',
              fontFamily: 'heebo-regular',
              color: '#121212',
              fontSize: 16,
            }}>
            {moment(dateStart).format('DD-MM-YYYY')}
          </Text>
          <EntypoIcon name="chevron-down" style={styles.icon3} />
        </View>
      </TouchableOpacity>
      <Text style={styles.pilihTanggalMulai}>Pilih tanggal Mulai</Text>
      <View style={styles.icon4Stack}>
        <EntypoIcon name="chevron-down" style={styles.icon4} />
        <TouchableOpacity
          onPress={() => {
            showPickerCalendar(1);
          }}
          style={styles.button3}>
          <View style={styles.icon5Row}>
            <FontAwesomeIcon name="calendar" style={styles.icon5} />
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                textAlignVertical: 'center',
                fontFamily: 'heebo-regular',
                color: '#121212',
                fontSize: 16,
              }}>
              {moment(dateEnd).format('DD-MM-YYYY')}
            </Text>
            <EntypoIcon name="chevron-down" style={styles.icon6} />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.pilihTanggalMulai1}>Pilih tanggal Selesai</Text>
      <TouchableOpacity style={styles.button5}>
        <View style={styles.rect3}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Rekap', {
                dateStart: moment(dateStart).format('DD/MM/YYYY'),
                dateEnd: moment(dateEnd).format('DD/MM/YYYY'),
              });
            }}
            style={styles.button}>
            <Text style={styles.cari}>Cari</Text>
          </TouchableOpacity>
        </View>
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
          value={iosMode === 0 ? dateStart : dateEnd}
          onChange={(event, selectedDate) => {
            if (event.type === 'set') {
              changeDate(iosMode, selectedDate);
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
  image: {
    width: 260,
    height: 284,
    opacity: 0.43,
    marginTop: 547,
    marginLeft: 137,
  },
  rect: {
    width: dimensionDevice.widthScreen,
    height: Platform.OS === "ios" ? 120 : 90,
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    paddingTop: Platform.OS === "ios" ? 55 : 16,
    paddingLeft: 16,
    marginTop: -850,
  },
  button4: {
    width: 40,
    height: 42,
  },
  icon: {
    color: 'rgba(32,83,117,1)',
    fontSize: 40,
  },
  text: {
    fontFamily: 'roboto-700',
    color: 'rgba(32,83,117,1)',
    fontSize: 20,
    marginLeft: 11,
  },
  button4Row: {
    height: 90,
    flexDirection: 'row',
    marginLeft: 16,
    alignItems: 'center',
  },
  button2: {
    width: 281,
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
    marginTop: 51,
    marginLeft: 47,
  },
  icon2: {
    color: 'rgba(32,83,117,1)',
    fontSize: 30,
    height: 30,
    width: 28,
  },
  icon3: {
    color: 'rgba(128,128,128,1)',
    fontSize: 25,
    height: 27,
    width: 25,
  },
  icon2Row: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginRight: 18,
    marginLeft: 18,
    marginTop: 12,
  },
  pilihTanggalMulai: {
    fontFamily: 'heebo-regular',
    color: '#121212',
    marginTop: -80,
    marginLeft: 47,
  },
  icon4: {
    top: 12,
    left: 238,
    position: 'absolute',
    color: 'rgba(128,128,128,1)',
    fontSize: 25,
  },
  button3: {
    top: 0,
    left: 0,
    width: 281,
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
  icon5: {
    color: 'rgba(32,83,117,1)',
    fontSize: 30,
    height: 30,
    width: 28,
  },
  icon6: {
    color: 'rgba(128,128,128,1)',
    fontSize: 25,
    height: 27,
    width: 25,
    marginTop: 2,
  },
  icon5Row: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginRight: 18,
    marginLeft: 18,
    marginTop: 12,
  },
  icon4Stack: {
    width: 281,
    height: 53,
    marginTop: 103,
    marginLeft: 47,
  },
  pilihTanggalMulai1: {
    fontFamily: 'heebo-regular',
    color: '#121212',
    marginTop: -79,
    marginLeft: 47,
  },
  button5: {
    width: 84,
    height: 35,
    opacity: 0.75,
    marginTop: 90,
    marginLeft: 244,
  },
  rect3: {
    width: 84,
    height: 35,
    backgroundColor: 'rgba(246,107,14,1)',
    borderWidth: 1,
    borderColor: 'rgba(246,107,14,1)',
    borderStyle: 'solid',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 15,
    shadowOpacity: 0.27,
    shadowRadius: 5,
    borderRadius: 13,
  },
  button: {
    width: 36,
    height: 21,
    flexDirection: 'row',
    marginTop: 4,
    marginLeft: 26,
  },
  cari: {
    fontFamily: 'roboto-700',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
  },
});

export default RekapAbsen;
