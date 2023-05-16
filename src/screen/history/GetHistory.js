import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, InteractionManager } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { ListHistoryCuti, ListHistoryIzin, fontApp } from '../../util/GlobalVar';
import { useDispatch, useSelector } from 'react-redux';
import {
  cutiHistoriFetch,
  izinHistoryFetch,
  setLoading,
  setLogout,
} from '../../state/slicer/HistoryState';

function GetHistory({ navigation, route }) {
  const { state } = route.params;
  const { historyCuti, historyIzin, loading, isLogout } = useSelector(
    (state) => state.HistoryState
  );
  const dispatch = useDispatch();
  const [label, setLabel] = useState('');

  useFocusEffect(
    useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        dispatch(setLoading(true));
        if (state === 1) {
          setLabel('Riwayat Cuti');
          dispatch(cutiHistoriFetch());
        } else if (state === 2) {
          setLabel('Riwayat Izin');
          dispatch(izinHistoryFetch());
        }
      });
      return () => {
        task.cancel;
      };
    }, [])
  );

  useEffect(() => {
    if (isLogout) {
      dispatch(setLogout(false));
      navigation.replace('Login');
    }
  }, [isLogout, navigation]);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          paddingStart: 16,
          paddingEnd: 16,
          justifyContent: 'space-between',
          backgroundColor: 'rgba(32,83,117,1)',
          ...Platform.select({
            ios: {
              height: 100,
              paddingTop: 24,
            },
            android: {
              height: 75,
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
              width: 40,
              height: 40,
            }}
          >
            <EntypoIcon name="chevron-with-circle-left" color={'white'} size={40} />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: fontApp.roboto[700],
              color: 'white',
              fontSize: 20,
              marginLeft: 8,
            }}
          >
            {label}
          </Text>
        </View>
      </View>
      {historyCuti !== null && loading == false && state === 1 && (
        <FlatList
          data={historyCuti}
          contentContainerStyle={{
            paddingTop: 24,
            paddingStart: 16,
            paddingEnd: 16,
          }}
          keyExtractor={(item, index) => `${item.status_cuti}+${index}+x`}
          renderItem={(item) => {
            return (
              <ListHistoryCuti
                data={{
                  item: item,
                  stat: state,
                }}
              />
            );
          }}
        />
      )}

      {historyIzin !== null && loading == false && state === 2 && (
        <FlatList
          data={historyIzin}
          contentContainerStyle={{
            paddingTop: 24,
            paddingStart: 16,
            paddingEnd: 16,
          }}
          keyExtractor={(item, index) => `${item.status_ijin}+${index}+x`}
          renderItem={(item) => {
            return (
              <ListHistoryIzin
                data={{
                  item: item,
                  stat: state,
                }}
              />
            );
          }}
        />
      )}
    </View>
  );
}

export default GetHistory;
