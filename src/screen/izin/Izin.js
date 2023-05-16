import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  dimensionDevice,
  fontApp,
  jenisIzinList,
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../../util/GlobalVar';
import moment from 'moment';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Dialog, Input } from '@rneui/themed';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchIzin,
  setDateStart,
  setIosMode,
  setIosTime,
  setJenisIzin,
  setLoading,
  setLogout,
  setOpen,
  setReasonText,
} from '../../state/slicer/IzinState';

const Izin = ({ navigation, route }) => {
  const { dateStart, timeStart, iosTime, iosMode, loading, reasonText, jenisIzin, open, isLogout } =
    useSelector((state) => state.IzinState);
  const dispatch = useDispatch();
  const [izin, setIzin] = useState(null);

  const showPickerCalendar = (mode) => {
    if (Platform.OS === 'ios') {
      dispatch(setIosMode(mode));
      dispatch(setIosTime(true));
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
          value: timeStart,
          minimumDate: new Date(),
          onChange: (event, selectedDate) => {
            if (event.type === 'set') {
              changeDate(mode, selectedDate);
            }
          },
          mode: 'time',
        });
      }
    }
  };

  const prosesIzin = () => {
    dispatch(setLoading(true));
    dispatch(
      fetchIzin({
        startDate: moment(dateStart).format('YYYY-MM-DD'),
        startTime: moment(timeStart).format('HH:mm'),
        reason: reasonText,
        jenisIzin: izin,
      })
    );
  };

  const changeDate = (mode, date) => {
    if (mode === 0) {
      dispatch(setDateStart(date));
    } else {
      dispatch(setTime(date));
    }
  };

  useEffect(() => {
    if (isLogout) {
      dispatch(setLogout(false));
      navigation.replace('Login');
    }
  }, [isLogout, navigation]);
  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Image
        source={require('../../../assets/hospital.png')}
        resizeMode="contain"
        style={{
          width: horizontalScale(314),
          height: verticalScale(361),
          bottom: 0,
          left: '-15%',
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
              height: verticalScale(100),
              paddingTop: '15%',
            },
            android: {
              height: verticalScale(75),
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
              width: dimensionDevice.heightWindow < 750 ? horizontalScale(50) : horizontalScale(40),
              height:
                dimensionDevice.heightWindow < 750 ? horizontalScale(50) : horizontalScale(40),
            }}
          >
            <EntypoIcon
              name="chevron-with-circle-left"
              color={'rgba(32,83,117,1)'}
              size={moderateScale(40)}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              color: 'rgba(32,83,117,1)',
              fontSize: moderateScale(20),
              marginLeft: 8,
            }}
          >
            Izin
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('GetHistory', {
              state: 2,
            });
          }}
          style={{
            backgroundColor: 'rgba(246,107,14,1)',
            padding: 8,
            borderRadius: 10,
            height: verticalScale(45),
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              color: 'white',
              fontSize: moderateScale(14),
            }}
          >
            Riwayat Izin
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          flexDirection: 'column',
          flexGrow: 1,
        }}
        horizontal={false}
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
          Jenis Izin
        </Text>
        <View
          style={{
            marginStart: dimensionDevice.widthWindow / 8,
            marginEnd: dimensionDevice.widthWindow / 8,
            zIndex: 10,
          }}
        >
          <DropDownPicker
            placeholder="Pilih Jenis Izin"
            open={open}
            value={izin}
            items={jenisIzinList}
            setOpen={(value) => {
              dispatch(setOpen(value));
            }}
            showArrowIcon={true}
            setValue={setIzin}
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
            }}
            dropDownContainerStyle={{
              borderColor: 'transparent',
              backgroundColor: 'rgba(212,246,204,1)',
            }}
            containerStyle={{
              zIndex: 10,
            }}
          />
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
          Pilih Tanggal
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
          Pilih Jam
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
            width: 150,
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
            <FeatherIcon name="clock" color={'rgba(32,83,117,1)'} size={30} />
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
              {moment(timeStart).format('HH:mm')}
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
            value={reasonText}
            onChangeText={(value) => {
              dispatch(setReasonText(value));
            }}
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
          onPress={() => {
            prosesIzin();
          }}
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
              fontFamily: fontApp.heebo[700],
              color: 'rgba(250,250,250,1)',
            }}
          >
            Pengajuan
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
          mode={iosMode === 0 ? 'date' : 'time'}
          display="spinner"
          minimumDate={new Date()}
          value={iosMode === 0 ? dateStart : timeStart}
          onChange={(event, selectedDate) => {
            if (event.type === 'set') {
              changeDate(iosMode, selectedDate);
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
        isVisible={loading}
        overlayStyle={{
          width: 175,
          height: 175,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
      >
        <ActivityIndicator
          style={{
            height: 25,
            width: 25,
          }}
          size={'large'}
          color={'rgba(32,83,117,1)'}
        />
      </Dialog>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Izin;
