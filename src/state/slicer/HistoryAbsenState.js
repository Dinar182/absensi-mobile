import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';

const initState = {
  loading: false,
  openResult: false,
  status: 0,
  dateChoose: new Date(),
  iosTime: false,
};

const HistoryAbsenState = createSlice({
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
  extraReducers: (builder) => {},
});

export const { setLoading, setOpenResult, setDateChoose, setIosTime } = HistoryAbsenState.actions;
export default HistoryAbsenState.reducer;
