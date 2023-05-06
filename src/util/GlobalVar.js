import moment from 'moment';
import { useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const textApp = {
  session: '@session',
};
const colorApp = {};
const fontApp = {
  roboto: {
    200: 'Roboto-thin',
    300: 'Roboto-Light',
    regular: 'Roboto-Regular',
    700: 'Roboto-Bold',
  },
  arimo: {
    700: 'Arimo-Bold',
  },
  heebo: {
    200: 'Heebo-ExtraLight',
    300: 'Heebo-Light',
    regular: 'Heebo-Regular',
    700: 'Heebo-Bold',
  },
  impact: {
    regular: 'impact',
  },
  mukta: {
    regular: 'Mukta-Regular',
  },
  pacifico: {
    regular: 'Pacifico-Regular',
  },
  secularOne: {
    regular: 'SecularOne-Regular',
  },
  signivikaNegative: {
    regular: 'SignikaNegative-Regular',
  },
  helvetica: {
    regular: 'Helvetica',
  },
};
const dimensionDevice = {
  widthWindow: Dimensions.get('window').width,
  heightWindow: Dimensions.get('window').height,
  widthScreen: Dimensions.get('screen').width,
  heightScreen: Dimensions.get('screen').height,
};

const dummyList = [
  {
    id: 1,
    name: 'dummy',
    status: 1,
  },
  {
    id: 2,
    name: 'dummy',
    status: 2,
  },
  {
    id: 3,
    name: 'dummy',
    status: 3,
  },
];
const urlApi = {
  login: 'api/login',
  logout: 'api/logout',
  detail_karyawan: 'api/detail_karyawan',
  ganti_password: 'api/ganti_password',
  cuti_karyawan: 'api/cuti_karyawan',
  izin_karyawan: 'api/ijin_karyawan',
  scan_absensi: 'api/scan_log',
  rekap_absen: 'api/rekap_absensi',
  daily_absen: 'api//dayli_absen_karyawan',
};

const urlBase = 'https://absensi.mkopsrv1.com/';

const ListHistory = ({ data }) => {
  const colorStatus = () => {
    switch (data.item.item.status) {
      case 1:
        return '#4CAF50';
      case 2:
        return '#FFEB3B';
      case 3:
        return '#F44336';
    }
  };

  const textStatus = () => {
    switch (data.item.item.status) {
      case 1:
        return 'Approve';
      case 2:
        return 'Pending';
      case 3:
        return 'Reject';
    }
  };

  useEffect(() => {
    console.log('====================================');
    console.log(data.item.item);
    console.log('====================================');
  }, []);

  return (
    <View
      style={{
        flexDirection: 'column',
        height: 175,
        borderRadius: 8,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        marginBottom: 16,
        shadowOpacity: 0.27,
        shadowRadius: 8,
        backgroundColor: '#BDBDBD',
      }}
    >
      <View
        style={{
          borderTopStartRadius: 8,
          borderTopEndRadius: 8,
          backgroundColor: '#215376',
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        <Text
          style={{
            fontFamily: fontApp.roboto[700],
            color: 'white',
            marginStart: 8,
            fontSize: 14,
          }}
        >
          {data.stat === 1 ? 'Pengajuan Cuti' : 'Pengajuan Izin'}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          paddingTop: 16,
          paddingEnd: 24,
          paddingStart: 24,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              fontSize: 14,
              color: 'white',
            }}
          >
            Keterangan
          </Text>
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              fontSize: 14,
              color: 'white',
              marginStart: 24,
            }}
          >
            {data.item.item.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              fontSize: 14,
              color: 'white',
            }}
          >
            Tanggal Pengajuan
          </Text>
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              fontSize: 14,
              color: 'white',
              marginStart: 24,
            }}
          >
            {moment(new Date()).format('DD-MM-YYYY HH:mm')}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              fontSize: 14,
              color: 'white',
            }}
          >
            Status
          </Text>

          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              fontSize: 14,
              color: colorStatus(),
              marginStart: 24,
            }}
          >
            {textStatus()}
          </Text>
          <View
            style={{
              height: 30,
              width: 30,
              backgroundColor: colorStatus(),
              borderRadius: 30 / 2,
              marginStart: 8,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export { textApp, colorApp, fontApp, dimensionDevice, urlApi, dummyList, ListHistory, urlBase };
