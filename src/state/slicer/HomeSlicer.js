import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SessionManager } from '../../util/SessionManager';
import { textApp } from '../../util/GlobalVar';
import { MessageUtil } from '../../util/MessageUtil';
import DeviceInfo from 'react-native-device-info';

const initState = {
  responseDetail: null,
  loading: false,
  timeAbsenMasuk: '',
  timeAbsenKeluar: '',
  panggilan: '',
  isLocationEnabled: false,
  openSetting: true,
};

const getKaryawanData = createAsyncThunk('getDataKaryawan', async () => {
  const session = SessionManager.GetAsObject(textApp.session);
  console.log('====================================');
  console.log(session);
  console.log('====================================');
  return session.karyawan;
});

const stateGps = createAsyncThunk('stateGPS', async () => {
  const stat = await DeviceInfo.isLocationEnabled();
  return stat;
});

const HomeSlicer = createSlice({
  name: 'homeState',
  initialState: initState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setOpenSetting: (state, action) => {
      state.openSetting = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getKaryawanData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getKaryawanData.fulfilled, (state, action) => {
        state.responseDetail = action.payload;
        const text = action.payload.nama;
        const temp = text.split(' ');
        state.panggilan = temp[0];
        state.loading = false;
      })
      .addCase(getKaryawanData.rejected, (state, action) => {
        state.loading = false;
        MessageUtil.errorMessage('Error', action.error.message);
      })
      .addCase(stateGps.pending, (state) => {})
      .addCase(stateGps.fulfilled, (state, action) => {
        const data = action.payload;
        state.isLocationEnabled = data;
        if (data) {
          state.openSetting = false;
        } else {
          state.openSetting = true;
        }

        console.log('====================================');
        console.log(data);
        console.log('====================================');
      })
      .addCase(stateGps.rejected, (state) => {
        state.isLocationEnabled = false;
      });
  },
});

export { getKaryawanData, stateGps };

export const { setLoading, setOpenSetting } = HomeSlicer.actions;

export default HomeSlicer.reducer;
