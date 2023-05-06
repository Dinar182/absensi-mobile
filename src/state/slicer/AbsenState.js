import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SessionManager } from '../../util/SessionManager';
import { textApp, urlApi, urlBase } from '../../util/GlobalVar';
import RNFetchBlob from 'rn-fetch-blob';

const { fs, wrap } = RNFetchBlob;

const initState = {
  lang: 0,
  long: 0,
  loading: false,
  absen: false,
  openBottom: false,
  messageAbsen: '',
};

const absenCheck = createAsyncThunk('absenCheck', async (arg) => {
  const { lat, long, fileUp, jam } = arg;

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
        data: sesi.karyawan.nip,
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
    setLat: (state, action) => {
      state.lang = action.payload;
    },
    setLong: (state, action) => {
      state.long = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(absenCheck.pending, (state) => {
        state.loading = true;
      })
      .addCase(absenCheck.fulfilled, (state, action) => {
        state.loading = false;
        let status = action.payload.metadata.status;
        let message = action.payload.metadata.message;

        if (status === 200) {
          state.openBottom = true;
          state.messageAbsen = message;
        } else if (status === 400) {
          state.openBottom = true;
          state.messageAbsen = message;
        } else {
          state.openBottom = true;
          state.messageAbsen = message;
        }
      })
      .addCase(absenCheck.rejected, (state) => {
        state.loading = false;
      });
  },
});

export { absenCheck };
export const { setLoading, setAbsen, setOpenBottom, setLat, setLong } = AbsenState.actions;

export default AbsenState.reducer;
