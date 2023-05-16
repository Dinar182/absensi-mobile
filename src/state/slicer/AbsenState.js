import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SessionManager } from '../../util/SessionManager';
import { textApp, urlApi, urlBase } from '../../util/GlobalVar';
import RNFetchBlob from 'rn-fetch-blob';
import { MessageUtil } from '../../util/MessageUtil';

const { fs, wrap } = RNFetchBlob;

const initState = {
  loading: false,
  absen: false,
  openBottom: false,
  messageAbsen: '',
  isLogout: false,
};

const absenCheck = createAsyncThunk('absenCheck', async (arg, thunkApi) => {
  try {
    const { lat, long, fileUp, jam } = arg;
    console.log('=============1=======================');
    console.log(arg);
    console.log('==============2======================');

    const sesi = SessionManager.GetAsObject(textApp.session);
    const dataRespon = await RNFetchBlob.fetch(
      'POST',
      `${urlBase}${urlApi.scan_absensi}`,
      {
        'Content-Type': 'multipart/form-data',
        token: sesi.token,
      },
      [
        {
          name: 'foto',
          filename: fileUp.name,
          type: fileUp.type,
          data: wrap(fileUp.uri),
        },
        {
          name: 'nip',
          data: sesi.nip,
        },
        {
          name: 'jam',
          data: jam,
        },
        {
          name: 'latitude',
          data: lat.toString(),
        },
        {
          name: 'longtitude',
          data: long.toString(),
        },
      ]
    );
    return JSON.parse(dataRespon.data);
  } catch (err) {
    thunkApi.rejectWithValue(err.message);
  }
});

const AbsenState = createSlice({
  name: 'absenState',
  initialState: initState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAbsen: (state, action) => {
      state.absen = action.payload;
    },

    setOpenBottom: (state, action) => {
      state.openBottom = action.payload;
    },
    setLogout: (state, action) => {
      state.isLogout = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(absenCheck.pending, (state) => {
        state.loading = false;
      })
      .addCase(absenCheck.fulfilled, (state, action) => {
        state.loading = false;
        let status = action.payload.metadata.status;
        let message = action.payload.metadata.message;

        if (status === 200) {
          state.openBottom = true;
          state.messageAbsen = message;
        } else if (status === 400) {
          MessageUtil.errorMessage('Gagal', message);
        } else if (status === 401) {
          state.isLogout = true;
          SessionManager.RemoveValue(textApp.session);
          SessionManager.ClearAllKeys();
          MessageUtil.errorMessage('Gagal', message);
        } else {
          MessageUtil.errorMessage('Gagal', message);
        }
      })
      .addCase(absenCheck.rejected, (state, action) => {
        state.loading = false;
        MessageUtil.errorMessage('Gagal', message);
      });
  },
});

export { absenCheck };
export const { setLogout, setLoading, setAbsen, setOpenBottom } = AbsenState.actions;

export default AbsenState.reducer;
