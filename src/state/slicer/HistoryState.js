import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import { SessionManager } from '../../util/SessionManager';
import { textApp, urlApi, urlBase } from '../../util/GlobalVar';
import { MessageUtil } from '../../util/MessageUtil';

const initState = {
  rekapAbsen: null,
  historyCuti: null,
  historyIzin: null,
  loading: false,
  openResult: false,
  status: 0,
  dateChoose: new Date(),
  iosTime: false,
  masuk: '',
  keluar: '',
};

const rekapFetch = createAsyncThunk('rekapFetc', async (arg) => {
  const { dateStart, dateEnd } = arg;
  const sesi = SessionManager.GetAsObject(textApp.session);
  const form = new FormData();
  form.append('nip', sesi.nip);
  form.append('tanggal_mulai', dateStart);
  form.append('tanggal_sampai', dateEnd);
  const dataRes = await fetch(`${urlBase}${urlApi.rekap_absen}`, {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      token: sesi.token,
    },
    body: form,
  });
  console.log('====================================');
  console.log(dataRes);
  console.log(arg);
  console.log('====================================');

  return dataRes
    .json()
    .then((data) => data)
    .catch((err) => err);
});

const cutiHistoriFetch = createAsyncThunk('cutiHistoriFetch', async () => {
  const sesi = SessionManager.GetAsObject(textApp.session);
  const form = new FormData();
  form.append('nip', sesi.nip);

  const dataRes = await fetch(`${urlBase}${urlApi.history_cuti}`, {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      token: sesi.token,
    },
    body: form,
  });

  console.log('====================================');
  console.log(dataRes);
  console.log('====================================');

  return dataRes
    .json()
    .then((data) => data)
    .catch((err) => err);
});

const izinHistoryFetch = createAsyncThunk('izinHistoryFetch', async () => {
  const sesi = SessionManager.GetAsObject(textApp.session);
  const form = new FormData();
  form.append('nip', sesi.nip);

  const dataRes = await fetch(`${urlBase}${urlApi.history_izin}`, {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      token: sesi.token,
    },
    body: form,
  });
  console.log('====================================');
  console.log(dataRes);
  console.log('====================================');

  return dataRes
    .json()
    .then((data) => data)
    .catch((err) => err);
});

const LogAbsen = createAsyncThunk('logAbsen', async (arg) => {
  const { tgl } = arg;
  const sesi = SessionManager.GetAsObject(textApp.session);
  const form = new FormData();
  form.append('nip', sesi.nip);
  form.append('tanggal', tgl);
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
const HistoryState = createSlice({
  name: 'historyState',
  initialState: initState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setOpenResult: (state, action) => {
      state.openResult = action.payload;
    },
    setDateChoose: (state, action) => {
      state.dateChoose = action.payload;
    },
    setIosTime: (state, action) => {
      state.iosTime = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(rekapFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(rekapFetch.fulfilled, (state, action) => {
        let message = action.payload.metadata.message;
        let status = action.payload.metadata.status;
        let response = action.payload.response;
        if (status === 200) {
          state.rekapAbsen = response;
          console.log('====================================');
          console.log(response);
          console.log('====================================');
        }
        state.loading = false;
      })
      .addCase(rekapFetch.rejected, (state, action) => {
        state.loading = false;
        MessageUtil.errorMessage(action.error.message);
      })
      .addCase(cutiHistoriFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(cutiHistoriFetch.fulfilled, (state, action) => {
        let message = action.payload.metadata.message;
        let status = action.payload.metadata.status;
        let response = action.payload.response;
        if (status === 200) {
          state.historyCuti = response;
          console.log('====================================');
          console.log(response);
          console.log('====================================');
        }
        state.loading = false;
      })
      .addCase(cutiHistoriFetch.rejected, (state, action) => {
        state.loading = false;
        MessageUtil.errorMessage(action.error.message);
      })
      .addCase(izinHistoryFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(izinHistoryFetch.fulfilled, (state, action) => {
        let message = action.payload.metadata.message;
        let status = action.payload.metadata.status;
        let response = action.payload.response;
        if (status === 200) {
          state.historyIzin = response;
          console.log('====================================');
          console.log(response);
          console.log('====================================');
        }
        state.loading = false;
      })
      .addCase(izinHistoryFetch.rejected, (state, action) => {
        state.loading = false;
        MessageUtil.errorMessage(action.error.message);
      })
      .addCase(LogAbsen.pending, (state) => {
        state.loading = true;
      })
      .addCase(LogAbsen.fulfilled, (state, action) => {
        let message = action.payload.metadata.message;
        let status = action.payload.metadata.status;
        let response = action.payload.response;
        if (status === 200) {
          state.masuk = response.jam_masuk;
          state.keluar = response.jam_pulang;
          console.log('====================================');
          console.log(response);
          console.log('====================================');
        }
        state.loading = false;
        state.openResult = true;
      })
      .addCase(LogAbsen.rejected, (state, action) => {
        state.loading = false;
        MessageUtil.errorMessage(action.error.message);
      });
  },
});
export { rekapFetch, izinHistoryFetch, cutiHistoriFetch, LogAbsen };
export const { setLoading, setOpenResult, setDateChoose, setIosTime } = HistoryState.actions;
export default HistoryState.reducer;
