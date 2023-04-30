import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableFreeze, enableScreens } from 'react-native-screens';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RouteManager from './util/RouteManager';
import { Provider } from 'react-redux';
import Store from './state/Store';

enableFreeze(true);
enableScreens(false);

export default function App() {
  return (
    <Provider store={Store}>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaProvider style={styles.sectionContainer}>
          <RouteManager />
          <FlashMessage
            style={{ zIndex: 10 }}
            position={'bottom'}
            floating={true}
            animated={true}
          />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -1,
    flexDirection: 'column',
    ...Platform.select({
      ios: {
        paddingTop: StatusBar.currentHeight,
      },
    }),

  },
  sectionContainer: {
    flex: 1,
    zIndex: 0,
  },
});
