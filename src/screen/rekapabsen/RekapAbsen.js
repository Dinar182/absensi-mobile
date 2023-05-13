import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Platform } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Dialog } from '@rneui/themed';
import { dimensionDevice, fontApp } from '../../util/GlobalVar';

function RekapAbsen({ navigation, route }) {
  const [iosTime, setIosTime] = useState(false);
  const [iosMode, setIosMode] = useState(0);
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  const showPickerCalendar = (mode) => {
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
      <View
        style={{
          flexDirection: 'row',
          paddingStart: 16,
          backgroundColor: '#E6E6E6',
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
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            width: 40,
            height: 40,
          }}
        >
          <EntypoIcon name="chevron-with-circle-left" color={'rgba(32,83,117,1)'} size={40} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: fontApp.roboto[700],
            color: 'rgba(32,83,117,1)',
            fontSize: 20,
            marginLeft: 8,
          }}
        >
          Rekap Absen
        </Text>
      </View>
      <Text
        style={{
          fontFamily: fontApp.heebo.regular,
          color: '#121212',
          marginStart: dimensionDevice.widthWindow / 8,
          marginTop: 24,
          marginBottom: 16,
        }}
      >
        Pilih Tanggal Mulai
      </Text>
      <TouchableOpacity
        onPress={() => {
          showPickerCalendar(0);
        }}
        style={{
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
          height: 55,
          marginStart: dimensionDevice.widthWindow / 8,
          marginEnd: dimensionDevice.widthWindow / 8,
          alignItems: 'center',
          paddingStart: 16,
          paddingEnd: 16,
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <FontAwesomeIcon name="calendar" color={'rgba(32,83,117,1)'} size={30} />
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              textAlignVertical: 'center',
              fontFamily: fontApp.heebo.regular,
              color: '#121212',
              fontSize: 16,
              marginStart: 10,
            }}
          >
            {moment(dateStart).format('DD-MM-YYYY')}
          </Text>
        </View>

        <EntypoIcon name="chevron-down" size={25} color={'rgba(128,128,128,1)'} />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: fontApp.heebo.regular,
          color: '#121212',
          marginStart: dimensionDevice.widthWindow / 8,
          marginTop: 24,
          marginBottom: 16,
        }}
      >
        Pilih Tanggal Selesai
      </Text>
      <TouchableOpacity
        onPress={() => {
          showPickerCalendar(1);
        }}
        style={{
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
          height: 55,
          marginStart: dimensionDevice.widthWindow / 8,
          marginEnd: dimensionDevice.widthWindow / 8,
          alignItems: 'center',
          paddingStart: 16,
          paddingEnd: 16,
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <FontAwesomeIcon name="calendar" color={'rgba(32,83,117,1)'} size={30} />
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              textAlignVertical: 'center',
              fontFamily: fontApp.heebo.regular,
              color: '#121212',
              fontSize: 16,
              marginStart: 10,
            }}
          >
            {moment(dateEnd).format('DD-MM-YYYY')}
          </Text>
        </View>

        <EntypoIcon name="chevron-down" size={25} color={'rgba(128,128,128,1)'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Rekap', {
            dateStart: moment(dateStart).format('YYYY-MM-DD'),
            dateEnd: moment(dateEnd).format('YYYY-MM-DD'),
          });
        }}
        style={{
          backgroundColor: 'rgba(246,107,14,1)',
          width: 75,
          height: 35,
          borderRadius: 16,
          marginEnd: dimensionDevice.widthWindow / 8,
          alignSelf: 'flex-end',
          marginTop: 16,
          alignItems: 'center',
          justifyContent: 'center',
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
        }}
      >
        <Text
          style={{
            fontFamily: fontApp.roboto[700],
            color: 'rgba(255,255,255,1)',
            fontSize: 18,
          }}
        >
          Cari
        </Text>
      </TouchableOpacity>
      <Image
        source={require('../../../assets/rekap.png')}
        style={{
          position: 'absolute',
          bottom: 0,
          right: -50,
          width: 250,
          height: 200,
          opacity: 0.5,
        }}
        resizeMode="contain"
      />
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
        }}
      >
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
            fontFamily: fontApp.roboto[700],
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: 'white',
            }}
          >
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
});

export default RekapAbsen;
