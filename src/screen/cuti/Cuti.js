import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Dialog, Input } from '@rneui/themed';
import { dimensionDevice, fontApp } from '../../util/GlobalVar';
import moment from 'moment';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

function Cuti({ navigation, route }) {
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
          minimumDate: new Date(),
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
          minimumDate: new Date(),
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
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      style={styles.container}
    >
      <Image
        source={require('../../../assets/cuti.png')}
        resizeMode="contain"
        style={{
          width: 314,
          height: 361,
          bottom: 0,
          left: -50,
          position: 'absolute',
          opacity: 0.36,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          paddingStart: 16,
          paddingEnd: 16,
          justifyContent: 'space-between',
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
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
            Cuti
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('GetHistory', {
              state: 1,
            });
          }}
          style={{
            backgroundColor: 'rgba(246,107,14,1)',
            padding: 8,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              color: 'white',
              fontSize: 14,
            }}
          >
            Riwayat Cuti
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ height: dimensionDevice.heightWindow }}
        showsVerticalScrollIndicator={false}
      >
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
        <Text
          style={{
            fontFamily: fontApp.heebo.regular,
            color: '#121212',
            marginStart: dimensionDevice.widthWindow / 8,
            marginTop: 24,
            marginBottom: 16,
          }}
        >
          Keterangan
        </Text>

        <View
          style={{
            marginStart: dimensionDevice.widthWindow / 8,
            marginEnd: dimensionDevice.widthWindow / 8,
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
            borderRadius: 16,
            height: 160,
            padding: 8,
          }}
        >
          <Input
            placeholder="Tulis Keterangan Disini"
            inputStyle={{
              height: 150,
              borderColor: 'transparent',
              textAlignVertical: 'top',
              fontSize: 14,
              fontFamily: fontApp.roboto[700],
              color: 'rgba(32,83,117,1)',
            }}
            inputContainerStyle={{
              borderColor: 'transparent',
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            width: 120,
            height: 45,
            backgroundColor: 'rgba(32,83,117,1)',
            borderRadius: 20,
            shadowColor: 'rgba(0,0,0,1)',
            shadowOffset: {
              width: 3,
              height: 3,
            },
            marginTop: 16,
            marginEnd: dimensionDevice.widthWindow / 8,
            elevation: 5,
            shadowOpacity: 0.21,
            shadowRadius: 0,
            alignSelf: 'flex-end',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              color: 'rgba(250,250,250,1)',
            }}
          >
            Proses
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
          minimumDate={new Date()}
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Cuti;
