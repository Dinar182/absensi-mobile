import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  InteractionManager,
  Dimensions,
  Platform,
} from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import { dimensionDevice, fontApp, textApp } from '../../util/GlobalVar';
import { PermissionUtil } from '../../util/PermissionUtil';
import { SessionManager } from '../../util/SessionManager';

function Cover({ navigation, route }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const permissionChecking = async () => {
    const check = await PermissionUtil.checkPermission();

    if (Platform.OS === 'ios') {
      if (
        check['ios.permission.CAMERA'] === 'granted' &&
        check['ios.permission.LOCATION_WHEN_IN_USE'] === 'granted' &&
        check['ios.permission.MEDIA_LIBRARY'] === 'granted'
      ) {
        return true;
      } else {
        const req = await PermissionUtil.requestPermission();
        if (
          req['ios.permission.CAMERA'] === 'granted' &&
          req['ios.permission.LOCATION_WHEN_IN_USE'] === 'granted' &&
          req['ios.permission.MEDIA_LIBRARY'] === 'granted'
        ) {
          return true;
        }
      }
    } else {
      if (
        check['android.permission.CAMERA'] === 'granted' &&
        check['android.permission.ACCESS_COARSE_LOCATION'] === 'granted' &&
        check['android.permission.ACCESS_FINE_LOCATION'] === 'granted' &&
        check['android.permission.READ_EXTERNAL_STORAGE'] === 'granted' &&
        check['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
      ) {
        return true;
      } else {
        const req = await PermissionUtil.requestPermission();
        if (
          req['android.permission.CAMERA'] === 'granted' &&
          req['android.permission.ACCESS_COARSE_LOCATION'] === 'granted' &&
          req['android.permission.ACCESS_FINE_LOCATION'] === 'granted' &&
          req['android.permission.READ_EXTERNAL_STORAGE'] === 'granted' &&
          req['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const SplashProsess = useCallback(() => {
    const timeChange = setTimeout(() => {
      const sesi = SessionManager.GetAsObject(textApp.session);
      if (sesi !== null) {
        navigation.replace('Main');
      } else {
        navigation.replace('Login');
      }
    }, 5000);
    return () => {
      clearTimeout(timeChange);
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        if (permissionChecking()) {
          SplashProsess();
        }
      });
      return () => {
        task.cancel();
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require('../../../assets/logo-bjl-2-removebg-preview.png')}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        ></ImageBackground>
        <Svg viewBox="0 0 89.24 93.24" style={styles.ellipse}>
          <Ellipse fill="rgba(245,245,245,1)" cx={45} cy={47} rx={45} ry={47}></Ellipse>
        </Svg>
        <View style={styles.group}>
          <View style={styles.group2}>
            <View style={styles.group3}>
              <Image
                source={require('../../../assets/logo-bjl-2-removebg-preview.png')}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
            </View>
          </View>
        </View>
        <Text style={styles.absensi}>ABSENSI</Text>
        <Text style={styles.loremIpsum}>PT. Berkah Jaya Lestarindo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(32,83,117,1)',
  },
  image: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: dimensionDevice.heightScreen,
    width: 724,
    opacity: 0.5,
  },
  image_imageStyle: {
    opacity: 1,
    backgroundColor: 'rgba(32,83,117,1)',
  },
  loremIpsum: {
    fontFamily: fontApp.mukta.regular,
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginTop: 400,
    marginLeft: 170,
  },
  ellipse: {
    left: 56,
    width: 100,
    height: 100,
    position: 'absolute',
    top: 332,
  },
  group: {
    top: 333,
    left: 57,
    width: 95,
    height: 91,
    position: 'absolute',
  },
  image2: {
    height: 97,
    width: 95,
  },
  absensi: {
    top: 350,
    left: 171,
    position: 'absolute',
    fontFamily: fontApp.secularOne.regular,
    color: 'rgba(246,107,14,1)',
    fontSize: 40,
  },
  imageStack: {
    width: 724,
    height: 986,
    marginTop: 0,
    marginLeft: -20,
  },
});

export default Cover;
