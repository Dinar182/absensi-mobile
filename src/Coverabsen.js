import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';
import Icon from 'react-native-vector-icons/Entypo';
import {dimensionDevice} from './util/GlobalVar';

function CoverAbsen({navigation, route}) {
  return (
    <View style={styles.container}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: dimensionDevice.widthScreen,
          height: dimensionDevice.heightScreen / 2,
          position: 'absolute',
          borderRadius: dimensionDevice.widthScreen / 2,
          top: -dimensionDevice.heightScreen / 5,
          transform: [{scaleX: 2}],
          backgroundColor: 'rgba(33,83,118,1)',
        }}
      />

      <View
        style={[
          styles.ellipseStack,
          {
            backgroundColor: 'rgba(33,83,118,1)',
            height: 125,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 16,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name="chevron-with-circle-left"
              style={[
                styles.icon,
                {
                  marginEnd: 16,
                },
              ]}
            />
          </TouchableOpacity>

          <Text style={styles.absen}>Absen</Text>
        </View>
      </View>

      <Image
        source={require('../assets/documents.png')}
        resizeMode="contain"
        style={[
          styles.image,
          {
            top: 80,
            left: 16,
          },
        ]}
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          top: dimensionDevice.heightScreen / 2.2,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 16,
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AbsenCheck', {
              stat: 0,
            });
          }}
          style={styles.button}>
          <View style={styles.image2Row}>
            <Image
              source={require('../assets/rating.png')}
              resizeMode="contain"
              style={styles.image2}></Image>
            <View style={styles.absen2Column}>
              <Text style={styles.absen2}>ABSEN</Text>
              <Text style={styles.masuk}>Masuk</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AbsenCheck', {
              stat: 1,
            });
          }}
          style={styles.button2}>
          <View style={styles.absen3ColumnRow}>
            <View style={styles.absen3Column}>
              <Text style={styles.absen3}>ABSEN</Text>
              <Text style={styles.pulang}>Pulang</Text>
            </View>
            <Image
              source={require('../assets/win.png')}
              resizeMode="contain"
              style={styles.image3}></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 650,
    height: 380,
    position: 'absolute',
    transform: [
      {
        rotate: '-17.00deg',
      },
    ],
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
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
  ellipseStack: {
    width: dimensionDevice.widthScreen,
    height: 480,
    flexDirection: 'column',
  },
  button: {
    width: 267,
    height: 91,
    backgroundColor: '#E6E6E6',
    borderRadius: 20,
    alignSelf: 'center',
  },
  image2: {
    width: 89,
    height: 78,
  },
  absen2: {
    fontFamily: 'roboto-700',
    color: 'rgba(246,107,14,1)',
    letterSpacing: 1,
    fontSize: 25,
  },
  masuk: {
    fontFamily: 'roboto-300',
    color: '#121212',
    letterSpacing: 4,
  },
  absen2Column: {
    width: 85,
    marginLeft: 20,
    marginTop: 13,
    marginBottom: 15,
  },
  image2Row: {
    height: 78,
    flexDirection: 'row',
    marginTop: 6,
    marginLeft: 21,
    marginRight: 52,
  },
  button2: {
    width: 267,
    height: 91,
    backgroundColor: '#E6E6E6',
    borderRadius: 20,
    marginTop: 39,
    alignSelf: 'center',
  },
  absen3: {
    fontFamily: 'roboto-700',
    color: 'rgba(246,107,14,1)',
    letterSpacing: 1,
    fontSize: 25,
    marginLeft: 2,
  },
  pulang: {
    fontFamily: 'helvetica-regular',
    color: '#121212',
    letterSpacing: 4,
  },
  absen3Column: {
    width: 87,
    marginTop: 8,
    marginBottom: 10,
  },
  image3: {
    width: 69,
    height: 68,
    marginLeft: 56,
  },
  absen3ColumnRow: {
    height: 68,
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 28,
    marginRight: 27,
  },
});

export default CoverAbsen;
