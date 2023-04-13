import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Platform } from 'react-native';
import { dimensionDevice } from './util/GlobalVar';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HasilRekapAbsensi = ({ navigation, route }) => {
  const { dateStart, dateEnd } = route.params;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View
        style={{
          height: Platform.OS === "ios" ? 100 : 65,
          backgroundColor: '#E6E6E6',
          width: dimensionDevice.widthScreen,
          ...Platform.select({
            ios: {
              paddingTop: 24,
            }
          }),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            marginStart: 16,
          }}>
          <EntypoIcon
            name="chevron-with-circle-left"
            size={40}
            color={'rgba(32,83,117,1)'}
          />
        </TouchableOpacity>
        <Text style={style.text}>Rekap Absen</Text>
      </View>
      <View
        style={{
          marginTop: 36,
          marginStart: dimensionDevice.widthScreen / 10,
          marginEnd: dimensionDevice.widthScreen / 10,
          backgroundColor: '#E6E6E6',
          height: 150,
          borderRadius: 16,
          flexDirection: 'column',
        }}>
        <View
          style={{
            borderTopStartRadius: 16,
            borderTopEndRadius: 16,
            height: 45,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#205375',
            paddingStart: 24,
            paddingEnd: 24,
          }}>
          <FontAwesome name="calendar-check-o" color={'white'} size={28} />
          <Text
            style={[
              style.text,
              {
                color: 'white',
                fontSize: 16,
              },
            ]}>
            {dateStart} - {dateEnd}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            padding: 16,
            paddingEnd: 28,
            paddingStart: 28,
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <EntypoIcon
                name="circle-with-cross"
                size={18}
                color={'#979D9F'}
              />
              <Text
                style={[
                  style.text,
                  {
                    fontSize: 14,
                    color: '#979D9F',
                  },
                ]}>
                Total Terlambat 0
              </Text>
            </View>
            <Text
              style={[
                style.text,
                {
                  fontSize: 14,
                  color: '#979D9F',
                },
              ]}>
              0
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <EntypoIcon
                name="circle-with-cross"
                size={18}
                color={'#979D9F'}
              />
              <Text
                style={[
                  style.text,
                  {
                    fontSize: 14,
                    color: '#979D9F',
                  },
                ]}>
                Total Tidak Absen Pulang
              </Text>
            </View>
            <Text
              style={[
                style.text,
                {
                  fontSize: 14,
                  color: '#979D9F',
                },
              ]}>
              0
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 8,
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <EntypoIcon
                name="circle-with-cross"
                size={18}
                color={'#979D9F'}
              />
              <Text
                style={[
                  style.text,
                  {
                    fontSize: 14,
                    color: '#979D9F',
                  },
                ]}>
                Total Tidak Absen Masuk
              </Text>
            </View>
            <Text
              style={[
                style.text,
                {
                  fontSize: 14,
                  color: '#979D9F',
                },
              ]}>
              0
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          marginTop: 36,
          flexDirection: 'column',
          padding: 16,
          backgroundColor: '#D4F6CC',
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
            justifyContent: 'space-around',
          }}>
          <Text
            style={[
              style.text,
              {
                fontSize: 14,
                color: '#F8904B',
              },
            ]}>
            Tanggal
          </Text>
          <Text
            style={[
              style.text,
              {
                fontSize: 14,
                color: '#F8904B',
              },
            ]}>
            Absen Masuk
          </Text>
          <Text
            style={[
              style.text,
              {
                fontSize: 14,
                color: '#F8904B',
              },
            ]}>
            Absen Pulang
          </Text>
        </View>
        <FlatList showsVerticalScrollIndicator={false} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontFamily: 'roboto-700',
    color: 'rgba(32,83,117,1)',
    fontSize: 20,
    marginLeft: 11,
  },
});

export default HasilRekapAbsensi;
