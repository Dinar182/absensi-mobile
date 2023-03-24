import React from 'react';
// import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Dasboard from './src/Cover';
import Login from './src/Login';
import Notif from './src/Notif';
import Home from './src/Home';
import History from './src/History';
import Cuti from './src/Cuti';
import Absen from './src/Absen';
import Profile from './src/Profile';
import Gantipass from './src/Gantipass';
import Izin from './src/Izin';
import RekapAbsen from './src/RekapAbsen';
import AbsenMasuk from './src/AbsenMasuk';
import AbsenPulang from './src/AbsenPulang';
// import Navigation from './src/Navigation';
import Tanggal from './src/Tanggal';
import TambahJadwal from './src/TambahJadwal';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {

  return (
    // <SafeAreaView>
 <History/>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
