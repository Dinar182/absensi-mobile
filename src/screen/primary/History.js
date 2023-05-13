import React, { useState } from 'react';
// import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { Dialog } from '@rneui/themed';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import moment from 'moment';
import { dimensionDevice, fontApp } from '../../util/GlobalVar';
import { useDispatch, useSelector } from 'react-redux';
import {
  LogAbsen,
  setDateChoose,
  setIosTime,
  setLoading,
  setOpenResult,
} from '../../state/slicer/HistoryState';

function History({ navigation, route }) {
  const dispatch = useDispatch();
  const { loading, openResult, dateChoose, iosTime, masuk, keluar } = useSelector(
    (state) => state.HistoryState
  );

  const showPickerCalendar = () => {
    if (Platform.OS === 'ios') {
      dispatch(setIosTime(true));
    } else {
      DateTimePickerAndroid.open({
        value: dateChoose,
        onChange: (event, selectedDate) => {
          if (event.type === 'set') {
            changeDate(selectedDate);
          }
        },
        mode: 'date',
      });
    }
  };

  const changeDate = (date) => {
    dispatch(setDateChoose(date));
  };

  const prosesLog = () => {
    dispatch(setLoading(true));
    dispatch(
      LogAbsen({
        tgl: moment(dateChoose).format('YYYY-MM-DD'),
      })
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: dimensionDevice.widthWindow,
          height: dimensionDevice.heightWindow / 3,
          backgroundColor: 'rgba(32,83,117,1)',
          flexDirection: 'column',
          paddingTop: 45,
          marginBottom: 175,
          ...Platform.select({
            ios: {
              paddingTop: 65,
              marginBottom: 200,
            },
          }),
        }}
      >
        <Text
          style={{
            fontFamily: fontApp.heebo[700],
            color: 'rgba(246,107,14,1)',
            alignSelf: 'center',
            fontSize: 35,
            marginStart: 24,
          }}
        >
          Cek History Absenmu {'\n'}Hari ini....
        </Text>
      </View>
      <Image
        source={require('../../../assets/report.png')}
        style={{
          position: 'absolute',
          height: 360,
          width: 360,
          right: -40,
          ...Platform.select({
            ios: { top: 100 },
            android: {
              top: 70,
            },
          }),
        }}
      />
      <View
        style={{
          marginStart: 40,
          marginEnd: 40,
        }}
      >
        <Text
          style={{
            fontFamily: fontApp.heebo[300],
            color: '#121212',
          }}
        >
          Pilih Tanggal
        </Text>
        <TouchableOpacity
          onPress={() => {
            showPickerCalendar();
          }}
          style={{
            height: 50,
            backgroundColor: 'rgba(212,246,204,1)',
            borderRadius: 16,
            marginTop: 8,
            flexDirection: 'row',
            alignItems: 'center',
            paddingStart: 16,
            paddingEnd: 16,
            justifyContent: 'space-between',
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
            }}
          >
            <FontAwesomeIcon name="calendar" color={'rgba(32,83,117,1)'} size={25} />
            <Text
              style={{
                marginStart: 16,
                textAlignVertical: 'center',
                fontFamily: fontApp.heebo.regular,
                color: '#121212',
                fontSize: 16,
              }}
            >
              {moment(dateChoose).format('DD-MM-YYYY')}
            </Text>
          </View>

          <EntypoIcon name="chevron-down" color={'rgba(128,128,128,0.5)'} size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            prosesLog();
          }}
          style={{
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
            width: 100,
            height: 45,
            alignSelf: 'flex-end',
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              color: 'rgba(251,246,246,1)',
            }}
          >
            Proses
          </Text>
        </TouchableOpacity>
      </View>

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
          value={dateChoose}
          onChange={(event, selectedDate) => {
            if (event.type === 'set') {
              changeDate(selectedDate);
            }
          }}
        />
        <TouchableOpacity
          onPress={() => {
            dispatch(setIosTime(false));
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
      <Dialog
        isVisible={openResult}
        backdropStyle={{
          backgroundColor: 'black',
          opacity: 0.8,
        }}
        overlayStyle={{
          backgroundColor: '#E6E6E6',
          flexDirection: 'column',
          borderRadius: 8,
          alignItems: 'center',
          padding: 16,
          height: dimensionDevice.heightWindow / 3,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            dispatch(setOpenResult(false));
          }}
          style={{
            alignSelf: 'flex-end',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <EntypoIcon
            name="cross"
            size={40}
            color={'#97999C'}
            style={{
              width: 45,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            flexDirection: 'column',
          }}
        >
          <View
            style={{
              borderColor: 'white',
              padding: 8,
              width: dimensionDevice.widthScreen / 1.6,
              borderWidth: 3,
              borderRadius: 8,
              height: 75,
              backgroundColor: '#f66b0e',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <EntypoIcon name="check" color={'#205375'} size={40} />
            <View
              style={{
                flexDirection: 'column',
                marginStart: 8,
                marginEnd: 8,
              }}
            >
              <Text
                style={{
                  fontFamily: fontApp.arimo[700],
                  color: 'white',
                  fontSize: 18,
                }}
              >
                Berhasil Check-in
              </Text>
              <Text
                style={{
                  fontFamily: fontApp.mukta.regular,
                  color: '#205375',
                  fontSize: 14,
                }}
              >
                Pukul {masuk}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderColor: 'white',
              padding: 8,
              width: dimensionDevice.widthScreen / 1.6,
              borderWidth: 3,
              borderRadius: 8,
              height: 75,
              backgroundColor: '#f66b0e',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <EntypoIcon name="check" color={'#205375'} size={40} />
            <View
              style={{
                flexDirection: 'column',
                marginStart: 8,
                marginEnd: 8,
              }}
            >
              <Text
                style={{
                  fontFamily: fontApp.arimo[700],
                  color: 'white',
                  fontSize: 18,
                }}
              >
                Berhasil Check-out
              </Text>
              <Text
                style={{
                  fontFamily: fontApp.mukta.regular,
                  color: '#205375',
                  fontSize: 14,
                }}
              >
                Pukul {keluar}
              </Text>
            </View>
          </View>
        </View>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default History;
