import moment from 'moment';
import { useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const { width, height } = Dimensions.get('window');

const horizontalScale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

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
  history_izin: 'api/history_ijin',
  history_cuti: 'api/history_cuti',
  currentLog: 'api/current_scanlog',
};

const urlBase = 'https://absensi.mkopsrv1.com/';

const jenisIzinList = [
  { label: 'Sakit', value: 1 },
  { label: 'Keluar Kantor', value: 2 },
  { label: 'Kontrol', value: 3 },
];

const ListHistoryCuti = ({ data }) => {
  const colorStatus = () => {
    switch (data.item.item.status_cuti) {
      case '1':
        return '#FFEB3B';
      case '2':
        return '#4CAF50';
      case '3':
        return '#F44336';
      case '4':
        return '#F44336';
    }
  };

  const textStatus = () => {
    switch (data.item.item.status_cuti) {
      case '1':
        return 'Pending';
      case '2':
        return 'Approve';
      case '3':
        return 'Reject';
      case '4':
        return 'Cancel';
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
          {data.item.item.text_status_cuti}
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
            {data.item.item.keterangan}
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
            Tanggal Cuti
          </Text>
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              fontSize: 14,
              color: 'white',
              marginStart: 24,
            }}
          >
            {data.item.item.tanggal_cuti}
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
              height: 15,
              width: 15,
              marginTop: '1%',
              backgroundColor: colorStatus(),
              borderRadius: 15 / 2,
              marginStart: 8,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const ListHistoryIzin = ({ data }) => {
  const colorStatus = () => {
    switch (data.item.item.status_ijin) {
      case '1':
        return '#FFEB3B';
      case '2':
        return '#4CAF50';
      case '3':
        return '#F44336';
      case '4':
        return 'black';
    }
  };

  const textStatus = () => {
    switch (data.item.item.status_ijin) {
      case '1':
        return 'Pending';
      case '2':
        return 'Approve';
      case '3':
        return 'Reject';
      case '4':
        return 'Cancel';
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
          {data.item.item.text_status_ijin}
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
            Jenis Izin
          </Text>
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              fontSize: 14,
              color: 'white',
              marginStart: 24,
            }}
          >
            {data.item.item.jenis_ijin}
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
            {data.item.item.keterangan}
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
            Tanggal Izin
          </Text>
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              fontSize: 14,
              color: 'white',
              marginStart: 24,
            }}
          >
            {data.item.item.tanggal_ijin}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 16,
            alignItems: 'center',
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
              fontSize: moderateScale(14),
              color: colorStatus(),
              marginStart: 24,
            }}
          >
            {textStatus()}
          </Text>
          <View
            style={{
              marginTop: '1%',
              height: 15,
              width: 15,
              backgroundColor: colorStatus(),
              borderRadius: 15 / 2,
              marginStart: 8,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export {
  textApp,
  colorApp,
  fontApp,
  dimensionDevice,
  urlApi,
  ListHistoryCuti,
  ListHistoryIzin,
  horizontalScale,
  verticalScale,
  moderateScale,
  urlBase,
  jenisIzinList,
};
