import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { textApp, urlApi, urlBase } from '../../util/GlobalVar';
import { SessionManager } from '../../util/SessionManager';
import { MessageUtil } from '../../util/MessageUtil';

const initState = {
  dateStart: new Date(),
  dateEnd: new Date(),
  iosTime: false,
  iosMode: 0,
  loading: false,
  reasonText: '',
};

const inputCutiFetch = createAsyncThunk('inputCuti', async (arg, thunkApi) => {
  const { start, end, reason } = arg;
  const sesi = SessionManager.GetAsObject(textApp.session);
  const form = new FormData();
  form.append('nip', sesi.nip);
  form.append('tanggal_mulai', start);
  form.append('tanggal_selesai', end);
  form.append('keterangan', reason);

  const dataRes = await fetch(`${urlBase}${urlApi.cuti_karyawan}`, {
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
      token: sesi.token,
    },
    body: form,
  });
  return dataRes
    .json()
    .then((data) => data)
    .catch((err) => err);
});

const CutiState = createSlice({
  name: 'cutiState',
  initialState: initState,
  reducers: {
    setReasonText: (state, action) => {
      state.reasonText = action.payload;
    },
    setDateStart: (state, action) => {
      state.dateStart = action.payload;
    },
    setDateEnd: (state, action) => {
      state.dateEnd = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setIosTime: (state, action) => {
      state.iosTime = action.payload;
    },
    setModeIos: (state, action) => {
      state.iosMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(inputCutiFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(inputCutiFetch.fulfilled, (state, action) => {
        state.loading = false;
        let message = action.payload.metadata.message;
        let status = action.payload.metadata.status;
        if (status === 200) {
          state.reasonText = '';
          state.dateStart = new Date();
          state.dateEnd = new Date();
          MessageUtil.showSuccess('Berhasil', message);
        } else {
          MessageUtil.errorMessage('Gagal', message);
        }
      })
      .addCase(inputCutiFetch.rejected, (state, action) => {
        state.loading = false;
        MessageUtil.errorMessage('Gagal', action.error.message);
      });
  },
});

export const { setDateEnd, setDateStart, setIosTime, setLoading, setModeIos, setReasonText } =
  CutiState.actions;
export { inputCutiFetch };

export default CutiState.reducer;
