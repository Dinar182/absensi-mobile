import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, InteractionManager } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { ListHistory, dummyList, fontApp } from '../../util/GlobalVar';

function GetHistory({ navigation, route }) {
  const { state } = route.params;
  const [label, setLabel] = useState('');

  useFocusEffect(
    useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        if (state === 1) {
          setLabel('Riwayat Cuti');
        } else if (state === 2) {
          setLabel('Riwayat Izin');
        }
      });
      return () => {
        task.cancel;
      };
    }, [])
  );
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
      <FlatList
        data={dummyList}
        contentContainerStyle={{
          paddingTop: 24,
          paddingStart: 16,
          paddingEnd: 16,
        }}
        keyExtractor={(item, index) => `${item.id}+index`}
        renderItem={(item) => {
          return (
            <ListHistory
              data={{
                item: item,
                stat: state,
              }}
            />
          );
        }}
      />
    </View>
  );
}

export default GetHistory;
