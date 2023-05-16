import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Platform } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Entypo';
import {
  dimensionDevice,
  fontApp,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../util/GlobalVar';

function CoverAbsen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          height: verticalScale(55),
          position: 'absolute',
          zIndex: 3,
          paddingStart: 16,
          alignItems: 'center',
          ...Platform.select({
            ios: {
              top: '4%',
            },
            android: {
              top: '2%',
            },
          }),
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon
            name="chevron-with-circle-left"
            style={[
              styles.icon,
              {
                marginEnd: '10%',
              },
            ]}
          />
        </TouchableOpacity>

        <Text style={styles.absen}>Absen</Text>
      </View>
      <Image
        source={require('../../../assets/documents.png')}
        resizeMode="contain"
        style={[
          styles.image,
          {
            ...Platform.select({
              ios: {
                top: '25%',
              },
              android: {
                top: '15%',
              },
            }),
            left: 24,
            zIndex: 3,
          },
        ]}
      />
      <View
        style={{
          width: horizontalScale(dimensionDevice.widthWindow),
          ...Platform.select({
            ios: {
              height: verticalScale(dimensionDevice.heightWindow / 2.8),
              marginBottom: '25%',
            },
            android: {
              height: verticalScale(dimensionDevice.heightWindow / 3),
              marginBottom: '25%',
            },
          }),
          borderBottomStartRadius: dimensionDevice.widthScreen / 2,
          borderBottomEndRadius: dimensionDevice.widthScreen / 2,
          transform: [{ scaleX: 2 }],
          backgroundColor: 'rgba(33,83,118,1)',
          flexDirection: 'column',
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AbsenCheck', {
            stat: 0,
          });
        }}
        style={{
          width: horizontalScale(270),
          height: verticalScale(95),
          backgroundColor: '#E6E6E6',
          borderRadius: 16,
          marginBottom: '10%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          alignSelf: 'center',
          paddingStart: 8,
          paddingEnd: 8,
        }}
      >
        <Image
          source={require('../../../assets/rating.png')}
          resizeMode="contain"
          style={{ width: horizontalScale(90), height: verticalScale(90) }}
        />
        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              color: 'rgba(246,107,14,1)',
              letterSpacing: 1,
              fontSize: moderateScale(25),
            }}
          >
            ABSEN
          </Text>
          <Text
            style={{
              fontFamily: fontApp.roboto[300],
              color: '#121212',
              letterSpacing: 4,
            }}
          >
            Masuk
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AbsenCheck', {
            stat: 1,
          });
        }}
        style={{
          width: horizontalScale(270),
          height: verticalScale(95),
          backgroundColor: '#E6E6E6',
          borderRadius: 16,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingStart: 8,
          paddingEnd: 8,
        }}
      >
        <View style={{ flexDirection: 'column' }}>
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              color: 'rgba(246,107,14,1)',
              letterSpacing: 1,
              fontSize: moderateScale(25),
            }}
          >
            ABSEN
          </Text>
          <Text
            style={{
              fontFamily: fontApp.helvetica.regular,
              color: '#121212',
              letterSpacing: 4,
            }}
          >
            Pulang
          </Text>
        </View>
        <Image
          source={require('../../../assets/win.png')}
          resizeMode="contain"
          style={{
            width: horizontalScale(69),
            height: verticalScale(69),
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    top: 182,
    left: 101,
    width: 271,
    height: 295,
    position: 'absolute',
  },
  icon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 40,
  },
  absen: {
    fontFamily: fontApp.roboto.regular,
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
});

export default CoverAbsen;
