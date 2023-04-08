import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initState = {
  lang: 0,
  long: 0,
  loading: false,
  absen: false,
  openBottom: false,
};

const absenCheck = createAsyncThunk(
  'locationCheck',
  async ({lat, long, fileLocation}) => {
    return;
  },
);

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
  extraReducers: builder => {
    builder
      .addCase(absenCheck.pending, state => {
        state.loading = true;
      })
      .addCase(absenCheck.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(absenCheck.rejected, state => {
        state.loading = false;
      });
  },
});

export {absenCheck};
export const {setLoading, setAbsen, setOpenBottom, setLat, setLong} =
  AbsenState.actions;

export default AbsenState.reducer;
