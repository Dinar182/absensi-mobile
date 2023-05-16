import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import moment from 'moment';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  InteractionManager,
  Platform,
  ActivityIndicator,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { dimensionDevice, fontApp } from '../../util/GlobalVar';
import RNFetchBlob from 'rn-fetch-blob';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog } from '@rneui/themed';
import {
  absenCheck,
  setAbsen,
  setLat,
  setLoading,
  setLong,
  setOpenBottom,
} from '../../state/slicer/AbsenState';
import Geolocation from '@react-native-community/geolocation';
import { lookup } from 'react-native-mime-types';
import { PermissionUtil } from '../../util/PermissionUtil';

function AbsenCheck({ navigation, route }) {
  const { stat } = route.params;

  const dispatch = useDispatch();
  const { absen, openBottom, loading, messageAbsen } = useSelector((state) => state.AbsenState);

  const [statusFail, setStatusFail] = useState(false);
  const [uriPhoto, setUriPhoto] = useState('');
  const [today, setToday] = useState(new Date());
  const [lat, setLat] = useState(null);

  const [long, setLong] = useState(null);
  const { fs } = RNFetchBlob;
  const devices = useCameraDevices();
  const device = devices.front;
  // prettier-ignore
  const cameraRef = useRef();

  const checkLocation = () => {
    dispatch(setLoading(true));
    Geolocation.getCurrentPosition(
      (pos) => {
        console.log('====================================');
        console.log(pos);
        console.log('====================================');
        let datapos = pos.coords;
        setLat(datapos.latitude);
        setLong(datapos.longitude);
        dispatch(setLoading(false));
      },
      (err) => {
        console.log(err.message);
        dispatch(setLoading(false));
      },

      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };
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

  const takePicture = async () => {
    if (uriPhoto.length === 0) {
      dispatch(setOpenBottom(true));
      const snapshot =
        Platform.OS === 'android'
          ? await cameraRef.current.takeSnapshot({
              quality: 85,
              skipMetadata: true,
            })
          : await cameraRef.current.takePhoto({
              qualityPrioritization: 'balanced',
              skipMetadata: true,
            });

      let uriX = snapshot.path;
      let mimeType = lookup(snapshot.path);
      let name = snapshot.path.replace(/^.*[\\\/]/, '');

      const dataUpload = {
        name: name,
        type: mimeType,
        uri: Platform.OS === 'android' ? 'file://' + uriX : uriX,
      };

      dispatch(
        absenCheck({
          lat: lat,
          long: long,
          fileUp: dataUpload,
          jam: moment(new Date()).format('HH:MM'),
        })
      );

      if (Platform.OS === 'ios') {
        setUriPhoto(snapshot.path);
      } else {
        setUriPhoto(`file://${snapshot.path}`);
      }
      setStatusFail(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const resetTake = useCallback(async () => {
    if (uriPhoto === '') {
    } else {
      await fs.unlink(uriPhoto);
      setUriPhoto('');
      setStatusFail(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFail, uriPhoto]);

  useFocusEffect(
    useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        if (permissionChecking()) {
          checkLocation();
        }
      });
      return () => {
        task.cancel();
      };
    }, [])
  );

  useEffect(() => {
    const intervalToday = setInterval(() => {
      setToday(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalToday);
    };
  }, [today]);

  const goBackCover = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.rect1}>
        <View
          style={[
            styles.button2Row,
            {
              alignItems: 'center',
              marginBottom: 16,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              goBackCover();
            }}
          >
            <EntypoIcon
              name="chevron-with-circle-left"
              size={40}
              style={{
                textAlignVertical: 'center',
                marginTop: 8,
              }}
              color={`rgba(230,230,230,1)`}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              {
                textAlignVertical: 'center',
              },
            ]}
          >
            {stat === 0 ? 'Absen Masuk' : 'Absen Pulang'}
          </Text>
        </View>
        <Text style={styles.loremIpsum2}>{moment(today).format('HH:mm')}</Text>
        <Text style={styles.loremIpsum1}>{moment(today).format('DD/MM/YYYY')}</Text>
      </View>
      <Text
        style={[
          styles.ambilFoto,
          {
            marginTop: 16,
            marginStart: dimensionDevice.widthScreen / 6,
          },
        ]}
      >
        Ambil Foto
      </Text>
      <View style={styles.rect2}>
        {device == null && statusFail === false && (
          <Image
            source={require('../../../assets/fotoabsen.png')}
            resizeMode="contain"
            style={styles.image}
          />
        )}

        {device != null && statusFail === false && (
          <Camera
            ref={cameraRef}
            photo={true}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={useIsFocused}
          />
        )}

        {statusFail === true && uriPhoto !== '' && (
          <Image source={{ uri: uriPhoto }} resizeMode="cover" style={{ flex: 1 }} />
        )}
      </View>

      <View style={styles.button1Row}>
        <TouchableOpacity
          onPress={() => {
            resetTake();
          }}
          style={styles.button1}
        >
          <EntypoIcon name="cw" style={styles.icon3} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            takePicture();
          }}
          style={styles.button}
        >
          <FontAwesomeIcon name="check" style={styles.icon2} />
        </TouchableOpacity>
      </View>
      <Dialog
        isVisible={openBottom}
        overlayStyle={{
          height: absen ? 150 : 75,
          width: absen ? 250 : 75,
          backgroundColor: 'white',
          borderWidth: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {absen === false && (
          <ActivityIndicator
            style={{
              height: 25,
              width: 25,
            }}
            size={'large'}
            color={'rgba(32,83,117,1)'}
          />
        )}
        {absen === true && (
          <View
            style={{
              flexDirection: 'column',
            }}
          >
            <Text
              style={{
                fontFamily: fontApp.roboto[700],
                color: 'black',
                fontSize: 20,
              }}
            >
              {messageAbsen}
            </Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(setAbsen(false));
                dispatch(setOpenBottom(false));
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 24,
                backgroundColor: 'rgba(212,246,204,1)',
                borderRadius: 16,
                padding: 8,
              }}
            >
              <Text
                style={{
                  fontFamily: fontApp.roboto[700],
                  color: 'red',
                  fontSize: 14,
                }}
              >
                Selesai
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Dialog>
      <Dialog
        isVisible={loading}
        overlayStyle={{
          width: 175,
          height: 175,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
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
        <Text
          style={{
            marginTop: 16,
            fontFamily: fontApp.roboto[300],
            color: 'black',
            fontSize: 14,
          }}
        >
          Cek Lokasi
        </Text>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  rect1: {
    width: dimensionDevice.widthScreen,
    height: 200,
    backgroundColor: 'rgba(32,83,117,1)',
    ...Platform.select({
      ios: {
        paddingTop: 24,
      },
    }),
  },
  button2: {
    width: 40,
    height: 55,
    marginLeft: 10,
  },

  text: {
    fontFamily: fontApp.roboto[700],
    color: 'rgba(230,230,230,1)',
    fontSize: 20,
    marginLeft: 18,
  },
  button2Row: {
    height: 40,
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 16,
  },
  loremIpsum2: {
    fontFamily: fontApp.impact.regular,
    color: 'rgba(255,255,255,1)',
    fontSize: 45,
    letterSpacing: 2,
    marginTop: 3,
    marginLeft: 75,
  },
  loremIpsum1: {
    fontFamily: fontApp.roboto[300],
    color: 'rgba(255,255,255,1)',
    marginTop: 1,
    marginLeft: 80,
  },
  rect2: {
    height: dimensionDevice.heightScreen / 2.4,
    backgroundColor: 'rgba(255,255,255,1)',
    borderWidth: 2,
    borderColor: '#000000',
    marginTop: 16,
    marginLeft: 49,
    marginEnd: dimensionDevice.widthScreen / 6,
    marginStart: dimensionDevice.widthScreen / 6,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 92,
    marginLeft: 39,
  },
  ambilFoto: {
    fontFamily: fontApp.heebo[200],
    color: '#121212',
    fontSize: 18,
  },
  button1: {
    width: 105,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(212,246,204,1)',
    borderRadius: 16,
  },
  icon3: {
    color: 'rgba(0,0,0,1)',
    fontSize: 30,
    flexDirection: 'column',
    height: 35,
    width: 30,
  },
  button: {
    width: 105,
    height: 45,
    backgroundColor: 'rgba(212,246,204,1)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon2: {
    color: 'rgba(246,107,14,1)',
    fontSize: 40,
    height: 41,
    width: 40,
  },
  button1Row: {
    height: 55,
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
    marginLeft: dimensionDevice.widthScreen / 6,
    marginRight: dimensionDevice.widthScreen / 6,
  },
});

export default AbsenCheck;
