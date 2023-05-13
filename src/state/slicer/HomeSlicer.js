import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SessionManager } from '../../util/SessionManager';
import { textApp, urlApi, urlBase } from '../../util/GlobalVar';
import { MessageUtil } from '../../util/MessageUtil';
import DeviceInfo from 'react-native-device-info';
import moment from 'moment';

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
  const sesi = SessionManager.GetAsObject(textApp.session);
  const form = new FormData();
  form.append('nip', sesi.nip);
  const dataRes = await fetch(`${urlBase}${urlApi.detail_karyawan}`, {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      token: sesi.token,
    },
    body: form,
  });
  console.log('====================================');
  console.log(sesi.token);
  console.log('====================================');
  return dataRes
    .json()
    .then((data) => data)
    .catch((err) => err);
});

const getLogAbsen = createAsyncThunk('getAbsen', async () => {
  const sesi = SessionManager.GetAsObject(textApp.session);
  const form = new FormData();
  form.append('nip', sesi.nip);
  const dataRes = await fetch(`${urlBase}${urlApi.currentLog}`, {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      token: sesi.token,
    },
    body: form,
  });
  console.log('====================================');
  console.log(sesi.token);
  console.log('====================================');
  return dataRes
    .json()
    .then((data) => data)
    .catch((err) => err);
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
        let message = action.payload.metadata.message;
        let status = action.payload.metadata.status;
        let response = action.payload.response;
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        if (status === 200) {
          const text = response.nama;
          const temp = text.split(' ');
          state.panggilan = temp[0];
          state.responseDetail = response;
        } else {
          MessageUtil.errorMessage(message);
        }
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
      })
      .addCase(getLogAbsen.pending, (state) => {})
      .addCase(getLogAbsen.fulfilled, (state, action) => {
        let message = action.payload.metadata.message;
        let status = action.payload.metadata.status;
        let response = action.payload.response;
        if (status === 200) {
          state.timeAbsenMasuk = response.jam_masuk;
          state.timeAbsenKeluar = response.jam_pulang;
        }
      })
      .addCase(getLogAbsen.rejected, (state, action) => {
        MessageUtil.errorMessage(action.error.message);
      });
  },
});

export { getKaryawanData, stateGps, getLogAbsen };

export const { setLoading, setOpenSetting } = HomeSlicer.actions;

export default HomeSlicer.reducer;
