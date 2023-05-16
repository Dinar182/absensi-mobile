import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SessionManager } from '../../util/SessionManager';
import { jenisIzin, textApp, urlApi, urlBase } from '../../util/GlobalVar';
import { MessageUtil } from '../../util/MessageUtil';
const initState = {
  dateStart: new Date(),
  timeStart: new Date(),
  iosTime: false,
  iosMode: 0,
  loading: false,
  reasonText: '',
  jenisIzin: null,
  open: false,
  isLogout: false,
};

const fetchIzin = createAsyncThunk('fetchIzin', async (arg) => {
  const { startDate, startTime, reason, jenisIzin } = arg;
  const sesi = SessionManager.GetAsObject(textApp.session);
  const form = new FormData();
  form.append('nip', sesi.nip);
  form.append('jenis_ijin', jenisIzin);
  form.append('tanggal', startDate);
  form.append('jam', startTime);
  form.append('keterangan', reason);

  const dataRes = await fetch(`${urlBase}${urlApi.izin_karyawan}`, {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      token: sesi.token,
    },
    body: form,
  });
  console.log('=================TESTING===================');
  console.log(arg);
  console.log(dataRes);
  console.log('====================================');
  return dataRes
    .json()
    .then((data) => data)
    .catch((err) => err);
});

const IzinState = createSlice({
  name: 'izinState',
  initialState: initState,
  reducers: {
    setReasonText: (state, action) => {
      state.reasonText = action.payload;
    },
    setDateStart: (state, action) => {
      state.dateStart = action.payload;
    },
    setTimeStart: (state, action) => {
      state.timeStart = action.payload;
    },
    setIosTime: (state, action) => {
      state.iosTime = action.payload;
    },
    setIosMode: (state, action) => {
      state.iosMode = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setJenisIzin: (state, action) => {
      state.jenisIzin = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setLogout: (state, action) => {
      state.isLogout = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIzin.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchIzin.fulfilled, (state, action) => {
        state.loading = false;
        let message = action.payload.metadata.message;
        let status = action.payload.metadata.status;
        if (status === 200) {
          state.reasonText = '';
          state.jenisIzin = 0;
          state.dateStart = new Date();
          state.timeStart = new Date();
          MessageUtil.showSuccess('Berhasil', message);
        } else if (status === 401) {
          state.isLogout = true;
          SessionManager.RemoveValue(textApp.session);
          SessionManager.ClearAllKeys();
          MessageUtil.errorMessage('Gagal', message);
        } else {
          MessageUtil.errorMessage('Gagal', message);
        }
      })
      .addCase(fetchIzin.rejected, (state, action) => {
        state.loading = false;
        MessageUtil.errorMessage('Gagal', action.error.message);
      });
  },
});

export const {
  setDateStart,
  setIosMode,
  setIosTime,
  setJenisIzin,
  setLoading,
  setOpen,
  setReasonText,
  setTimeStart,
  setLogout,
} = IzinState.actions;

export { fetchIzin };

export default IzinState.reducer;
